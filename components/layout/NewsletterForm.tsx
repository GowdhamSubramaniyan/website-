"use client";

import { useState, type FormEvent } from "react";

/**
 * Newsletter signup. Submit is stubbed (no backend wiring) — it just
 * acknowledges the entry. Matches the footer design: email field + lime button.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex w-full max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-md bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
      />
      <button
        type="submit"
        className="bg-grad-lime shrink-0 rounded-md px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
      >
        Subscribe
      </button>
      {submitted && (
        <span role="status" className="sr-only">
          Thanks for subscribing.
        </span>
      )}
    </form>
  );
}
