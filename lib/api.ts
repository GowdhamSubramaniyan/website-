/**
 * POST a JSON body to one of the site's API routes. Resolves on success and
 * throws an Error (with the server's message when available) on failure, so
 * callers can surface a friendly message to the user.
 */
export async function postJSON(url: string, body: unknown): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    let message = "Something went wrong. Please try again.";
    try {
      const data = (await res.json()) as { error?: string };
      if (data?.error) message = data.error;
    } catch {
      // non-JSON response — keep the default message
    }
    throw new Error(message);
  }
}
