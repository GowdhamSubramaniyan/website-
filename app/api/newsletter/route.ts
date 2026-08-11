import { isZohoConfigured, subscribeToZohoCampaigns, InvalidEmailError } from "@/lib/zoho";

const RESEND_EMAILS = "https://api.resend.com/emails";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Guards against a bot posting a novel into the name field. */
const NAME_MAX = 100;

/** Both values land in an HTML email body, so escape before interpolating. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Newsletter signup. Adds the contact to Zoho Campaigns when configured;
 * otherwise falls back to a Resend Audience, or emails the team if neither is
 * set up. Expects JSON: { email, name? } — the popup sends a name, the footer
 * form doesn't.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — silently accept and drop bot submissions.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Optional — only the popup collects it.
  const name =
    typeof body.name === "string" ? body.name.trim().slice(0, NAME_MAX) : "";

  // Preferred path: Zoho Campaigns.
  if (isZohoConfigured()) {
    try {
      await subscribeToZohoCampaigns(email, name);
      return Response.json({ ok: true });
    } catch (err) {
      if (err instanceof InvalidEmailError) {
        return Response.json(
          { error: "Please enter a valid email address." },
          { status: 400 },
        );
      }
      console.error("[newsletter] Zoho error", err);
      return Response.json({ error: "Could not subscribe. Please try again." }, { status: 502 });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey) {
    console.error("[newsletter] Missing RESEND_API_KEY environment variable.");
    return Response.json({ error: "The newsletter is not configured yet." }, { status: 500 });
  }

  if (audienceId) {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
        ...(name
          ? {
              first_name: name.split(" ")[0],
              last_name: name.split(" ").slice(1).join(" ") || undefined,
            }
          : {}),
      }),
    });
    // 409 = already subscribed — treat as success.
    if (!res.ok && res.status !== 409) {
      console.error("[newsletter] Resend audience error", res.status, await res.text());
      return Response.json({ error: "Could not subscribe. Please try again." }, { status: 502 });
    }
  } else {
    // No audience configured yet — email the team so the signup isn't lost.
    const from = process.env.MAIL_FROM;
    const to = process.env.MAIL_TO || "info@visionzeroconnect.com";
    if (from) {
      await fetch(RESEND_EMAILS, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: "New newsletter signup",
          html: `<p style="font-family:Arial,Helvetica,sans-serif;">New newsletter subscriber: <strong>${escapeHtml(
            email,
          )}</strong>${name ? ` (${escapeHtml(name)})` : ""}</p>`,
        }),
      });
    }
  }

  return Response.json({ ok: true });
}
