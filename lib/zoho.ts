/**
 * Newsletter signup via the Zoho Campaigns API (`listsubscribe`).
 *
 * Uses a long-lived refresh token to mint short-lived access tokens, then adds
 * the email to the configured list. Env vars: ZOHO_REGION, ZOHO_CLIENT_ID,
 * ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN, ZOHO_LIST_KEY.
 *
 * Whether a subscriber is added immediately or gets a confirmation email is
 * controlled by the list's opt-in setting in Zoho Campaigns (single vs double).
 */

type TokenCache = { token: string; expiresAt: number };
let cache: TokenCache | null = null;

/** Data-centre suffix, e.g. "eu", "com", "in", "com.au" (leading dot stripped). */
function dc(): string {
  return (process.env.ZOHO_REGION || "eu").replace(/^\./, "");
}

export function isZohoConfigured(): boolean {
  return Boolean(
    process.env.ZOHO_CLIENT_ID &&
      process.env.ZOHO_CLIENT_SECRET &&
      process.env.ZOHO_REFRESH_TOKEN &&
      process.env.ZOHO_LIST_KEY,
  );
}

async function getAccessToken(): Promise<string> {
  const now = Date.now();
  if (cache && cache.expiresAt > now + 60_000) return cache.token;

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: process.env.ZOHO_CLIENT_ID ?? "",
    client_secret: process.env.ZOHO_CLIENT_SECRET ?? "",
    refresh_token: process.env.ZOHO_REFRESH_TOKEN ?? "",
  });

  const res = await fetch(`https://accounts.zoho.${dc()}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  const data = (await res.json().catch(() => ({}))) as {
    access_token?: string;
    expires_in?: number;
  };

  if (!res.ok || !data.access_token) {
    throw new Error(`Zoho token error: ${JSON.stringify(data)}`);
  }

  cache = {
    token: data.access_token,
    expiresAt: now + (Number(data.expires_in) || 3600) * 1000,
  };
  return cache.token;
}

/**
 * Add a contact to the configured Zoho Campaigns list. Throws on failure.
 *
 * `name` is optional and split on the first space into Zoho Campaigns' standard
 * "First Name" / "Last Name" fields — a single-word name fills First Name only.
 */
export async function subscribeToZohoCampaigns(
  email: string,
  name?: string,
): Promise<void> {
  const token = await getAccessToken();

  const contactinfo: Record<string, string> = { "Contact Email": email };
  const trimmed = name?.trim();
  if (trimmed) {
    const gap = trimmed.indexOf(" ");
    contactinfo["First Name"] = gap === -1 ? trimmed : trimmed.slice(0, gap);
    if (gap !== -1) contactinfo["Last Name"] = trimmed.slice(gap + 1).trim();
  }

  const body = new URLSearchParams({
    resfmt: "JSON",
    listkey: process.env.ZOHO_LIST_KEY ?? "",
    contactinfo: JSON.stringify(contactinfo),
  });

  const res = await fetch(`https://campaigns.zoho.${dc()}/api/v1.1/json/listsubscribe`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
  const data = (await res.json().catch(() => ({}))) as {
    status?: string;
    code?: string;
    message?: string;
  };

  // "success" covers both an immediate add (single opt-in) and a confirmation
  // email being sent (double opt-in).
  if (data.status === "success") return;

  // 2007 = Zoho rejected the address as invalid/undeliverable — surface that as
  // a validation error so the user gets a helpful message.
  if (data.code === "2007") {
    throw new InvalidEmailError();
  }
  throw new Error(`Zoho subscribe error: ${JSON.stringify(data)}`);
}

/** Thrown when Zoho rejects the email address as invalid. */
export class InvalidEmailError extends Error {
  constructor() {
    super("INVALID_EMAIL");
    this.name = "InvalidEmailError";
  }
}
