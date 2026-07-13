/**
 * Push a contact-form submission into Zoho CRM as a Lead.
 *
 * Uses a long-lived, CRM-scoped refresh token to mint short-lived access tokens,
 * then creates a record in the Leads module. Env vars:
 *   ZOHO_REGION            — data centre (eu, com, in, com.au…); defaults to "eu"
 *   ZOHO_CLIENT_ID         — shared with the Campaigns integration
 *   ZOHO_CLIENT_SECRET     — shared with the Campaigns integration
 *   ZOHO_CRM_REFRESH_TOKEN — token generated with scope ZohoCRM.modules.ALL
 */

type TokenCache = { token: string; expiresAt: number };
let cache: TokenCache | null = null;

/** Data-centre suffix, e.g. "eu", "com", "in", "com.au" (leading dot stripped). */
function dc(): string {
  return (process.env.ZOHO_REGION || "eu").replace(/^\./, "");
}

export function isZohoCrmConfigured(): boolean {
  return Boolean(
    process.env.ZOHO_CLIENT_ID &&
      process.env.ZOHO_CLIENT_SECRET &&
      process.env.ZOHO_CRM_REFRESH_TOKEN,
  );
}

async function getCrmAccessToken(): Promise<string> {
  const now = Date.now();
  if (cache && cache.expiresAt > now + 60_000) return cache.token;

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: process.env.ZOHO_CLIENT_ID ?? "",
    client_secret: process.env.ZOHO_CLIENT_SECRET ?? "",
    refresh_token: process.env.ZOHO_CRM_REFRESH_TOKEN ?? "",
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
    throw new Error(`Zoho CRM token error: ${JSON.stringify(data)}`);
  }

  cache = {
    token: data.access_token,
    expiresAt: now + (Number(data.expires_in) || 3600) * 1000,
  };
  return cache.token;
}

export type CrmLeadInput = {
  name: string;
  email: string;
  message: string;
  /** Where the enquiry came from — becomes Lead_Source. */
  source: string;
  /** Extra form fields (Phone, Company, Industry, …). */
  fields?: Record<string, unknown>;
};

function str(v: unknown): string {
  return v == null ? "" : String(v).trim();
}

/** Pull the first non-empty value for any of the given field keys. */
function pick(fields: Record<string, unknown>, ...keys: string[]): string {
  for (const k of keys) {
    const v = str(fields[k]);
    if (v) return v;
  }
  return "";
}

/**
 * Create a Lead in Zoho CRM. Throws on failure so the caller can log it.
 * Zoho requires Last_Name and Company on Leads, so both always get a value.
 */
export async function createZohoCrmLead(input: CrmLeadInput): Promise<void> {
  const token = await getCrmAccessToken();
  const fields = input.fields ?? {};

  // Split the name into First/Last (Last_Name is mandatory in Zoho).
  const parts = input.name.trim().split(/\s+/).filter(Boolean);
  const lastName =
    parts.length > 1 ? parts[parts.length - 1] : parts[0] || "Website Enquiry";
  const firstName = parts.length > 1 ? parts.slice(0, -1).join(" ") : "";

  const company = pick(fields, "Company", "company") || "Not provided";
  const phone = pick(fields, "Phone", "phone");
  const industry = pick(fields, "Industry", "industry");

  // Anything not mapped to a standard field is appended to the Description.
  const mapped = new Set(["Company", "company", "Phone", "phone", "Industry", "industry"]);
  const extras = Object.entries(fields)
    .filter(([k, v]) => !mapped.has(k) && str(v) !== "")
    .map(([k, v]) => `${k}: ${str(v)}`)
    .join("\n");
  const description = [input.message, extras].filter(Boolean).join("\n\n");

  const record: Record<string, unknown> = {
    Last_Name: lastName,
    Company: company,
    Email: input.email,
    Lead_Source: input.source || "Website",
    Description: description,
  };
  if (firstName) record.First_Name = firstName;
  if (phone) record.Phone = phone;
  if (industry) record.Industry = industry;

  const res = await fetch(`https://www.zohoapis.${dc()}/crm/v2/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [record], trigger: ["workflow"] }),
  });
  const data = (await res.json().catch(() => ({}))) as {
    data?: Array<{ code?: string; status?: string; message?: string }>;
  };
  const first = data.data?.[0];

  if (!res.ok || first?.status !== "success") {
    throw new Error(`Zoho CRM lead error: ${JSON.stringify(data)}`);
  }
}
