"use client";

import { useId, useState, type FormEvent } from "react";
import { postJSON } from "@/lib/api";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "done" | "error";

/** Shared field styling so the name and email boxes match exactly. */
const INPUT_CLASSES =
  "h-11 w-full rounded-md bg-white px-4 text-sm text-ink placeholder:text-ink/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime disabled:opacity-60";

type NewsletterFormProps = {
  /** Called once the address has been accepted — used by the popup to dismiss itself. */
  onSuccess?: () => void;
  /** Replaces the default width cap — the popup wants the full dialog width. */
  widthClassName?: string;
  /**
   * Adds a name field above the email row. Off in the footer, which is a
   * one-line strip with no room for it.
   */
  showName?: boolean;
};

/**
 * Newsletter signup — posts to /api/newsletter, which adds the contact to the
 * Zoho Campaigns list (falling back to a Resend Audience, then to emailing the
 * team). Styled for dark surfaces: the footer and the popup.
 */
export function NewsletterForm({
  onSuccess,
  widthClassName = "max-w-sm",
  showName = false,
}: NewsletterFormProps = {}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  // Both the footer and the popup render this form on the home page, so the
  // input ids have to be unique per instance.
  const emailId = useId();
  const nameId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || status === "loading") return;
    if (showName && !name.trim()) return;

    // Honeypot — populated only by bots.
    const honeypot = (event.currentTarget.elements.namedItem(
      "company_website",
    ) as HTMLInputElement | null)?.value;
    if (honeypot) {
      setStatus("done");
      setEmail("");
      setName("");
      onSuccess?.();
      return;
    }

    setStatus("loading");
    setError("");
    try {
      await postJSON("/api/newsletter", showName ? { email, name } : { email });
      setStatus("done");
      setEmail("");
      setName("");
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className={cn("mt-4 text-sm text-lime", widthClassName)}>
        Thanks for subscribing — we&rsquo;ll keep you posted.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("mt-4 w-full", widthClassName)}
      noValidate
    >
      {/* Honeypot — hidden from users, ignored by them, filled by bots. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {/* With a name field the form stacks, so every control is the same
          full width; the footer keeps its compact single row. */}
      <div className={cn(showName ? "flex flex-col gap-2.5" : "flex gap-2")}>
        {showName && (
          <>
            <label htmlFor={nameId} className="sr-only">
              Your name
            </label>
            <input
              id={nameId}
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === "loading"}
              placeholder="Your name"
              className={INPUT_CLASSES}
            />
          </>
        )}

        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          placeholder={showName ? "Your email address" : "Enter your email"}
          className={cn(INPUT_CLASSES, !showName && "min-w-0 flex-1")}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "bg-grad-lime rounded-md px-5 text-sm font-semibold text-ink transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep disabled:opacity-60",
            showName ? "mt-0.5 h-11 w-full" : "shrink-0 py-2.5",
          )}
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
