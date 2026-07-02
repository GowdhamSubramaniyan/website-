const RESEND_EMAILS = "https://api.resend.com/emails";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Receives a contact-form submission from any of the site's forms and emails it
 * to the team via Resend. Expects JSON: { source, name, email, message, fields }.
 * A hidden `company_website` honeypot field traps bots.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields. Pretend success and drop the message.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const source =
    typeof body.source === "string" && body.source.trim() ? body.source.trim() : "Website";
  const fields =
    body.fields && typeof body.fields === "object"
      ? (body.fields as Record<string, unknown>)
      : {};

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!message) {
    return Response.json({ error: "Please enter a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO || "info@visionzeroconnect.com";
  if (!apiKey || !from) {
    console.error("[contact] Missing RESEND_API_KEY or MAIL_FROM environment variable.");
    return Response.json({ error: "The contact form is not configured yet." }, { status: 500 });
  }

  const rows = Object.entries({ Name: name, Email: email, ...fields })
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;font-weight:600;color:#0f1827;white-space:nowrap;vertical-align:top;">${escapeHtml(
          k,
        )}</td><td style="padding:6px 0;color:#0f1827;">${escapeHtml(String(v))}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#0f1827;">
      <h2 style="color:#036261;margin:0 0 8px;">New enquiry — ${escapeHtml(source)}</h2>
      <table style="border-collapse:collapse;margin:16px 0;">${rows}</table>
      <p style="font-weight:600;margin:0 0 4px;">Message</p>
      <p style="white-space:pre-wrap;line-height:1.6;margin:0;">${escapeHtml(message)}</p>
    </div>`;

  const res = await fetch(RESEND_EMAILS, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[${source}] Enquiry from ${name || email}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
