"use client";

import { useState, type FormEvent } from "react";
import { postJSON } from "@/lib/api";

type Status = "idle" | "loading" | "done" | "error";

/**
 * Newsletter signup — posts to /api/newsletter, which adds the address to the
 * configured Resend Audience (or emails the team if none is set yet).
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || status === "loading") return;

    // Honeypot — populated only by bots.
    const honeypot = (event.currentTarget.elements.namedItem(
      "company_website",
    ) as HTMLInputElement | null)?.value;
    if (honeypot) {
      setStatus("done");
      setEmail("");
      return;
    }

    setStatus("loading");
    setError("");
    try {
      await postJSON("/api/newsletter", { email });
      setStatus("done");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="mt-4 max-w-sm text-sm text-lime">
        Thanks for subscribing — we&rsquo;ll keep you posted.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 w-full max-w-sm" noValidate>
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        {/* Honeypot — hidden from users, ignored by them, filled by bots. */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-md bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-grad-lime shrink-0 rounded-md px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}
    </form>
  );
}
