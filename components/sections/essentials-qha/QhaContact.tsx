"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { postJSON } from "@/lib/api";
import { QHA_CONTACT } from "./essentials-qha.data";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white shadow-sm outline-none transition-colors placeholder:text-white/40 focus:border-lime focus:ring-2 focus:ring-lime/30";
const labelClass = "block text-sm font-medium text-white/90";

/**
 * "Get your ESG edge today" — the closing conversion band. A short demo-request
 * form (posts to /api/contact tagged as the QHA landing page) beside a contact
 * card with website, email and regions.
 */
export function QhaContact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // Honeypot — hidden from users, filled by bots.
    if (String(fd.get("company_website") ?? "").trim()) {
      setSent(true);
      return;
    }

    setSending(true);
    setError("");
    try {
      await postJSON("/api/contact", {
        source: "Essentials for QHA — Get your ESG edge",
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        message: String(fd.get("message") ?? ""),
        fields: {
          Venue: fd.get("venue"),
          Phone: fd.get("phone"),
        },
      });
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-hero py-16 text-white md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          {/* Copy + contact card */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-5xl">
              Get your ESG edge today
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
              Turn real-asset compliance into your strategic edge. Book a demo
              and we&rsquo;ll show you exactly how Essentials works for your venue.
            </p>

            <dl className="mt-9 space-y-5">
              <ContactRow label="Website" icon={<GlobeIcon />}>
                <a
                  href={`https://${QHA_CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-lime"
                >
                  {QHA_CONTACT.website}
                </a>
              </ContactRow>
              <ContactRow label="Email" icon={<MailIcon />}>
                <a
                  href={`mailto:${QHA_CONTACT.email}`}
                  className="font-semibold text-white hover:text-lime"
                >
                  {QHA_CONTACT.email}
                </a>
              </ContactRow>
              <ContactRow label="Where we operate" icon={<PinIcon />}>
                <span className="font-semibold text-white">{QHA_CONTACT.regions}</span>
              </ContactRow>
            </dl>
          </div>

          {/* Demo form */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="text-xl font-bold text-white">Book a demo</h3>
            <p className="mt-1 text-sm text-white/70">
              Tell us about your venue and we&rsquo;ll be in touch to arrange a
              walkthrough.
            </p>

            {sent ? (
              <p
                role="status"
                className="mt-6 rounded-lg bg-lime/15 px-4 py-6 text-center text-sm font-medium text-lime"
              >
                Thanks — your request has been sent. Our team will be in touch shortly.
              </p>
            ) : (
              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div>
                  <label className={labelClass} htmlFor="qha-name">
                    Full Name <span className="text-lime">*</span>
                  </label>
                  <input
                    id="qha-name"
                    name="name"
                    required
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="qha-email">
                      Email <span className="text-lime">*</span>
                    </label>
                    <input
                      id="qha-email"
                      name="email"
                      type="email"
                      required
                      className={fieldClass}
                      placeholder="you@venue.com.au"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="qha-phone">
                      Phone
                    </label>
                    <input
                      id="qha-phone"
                      name="phone"
                      type="tel"
                      className={fieldClass}
                      placeholder="+61 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="qha-venue">
                    Pub / Hotel Name
                  </label>
                  <input
                    id="qha-venue"
                    name="venue"
                    className={fieldClass}
                    placeholder="Your venue (optional)"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="qha-message">
                    Anything you&rsquo;d like us to know?
                  </label>
                  <textarea
                    id="qha-message"
                    name="message"
                    rows={3}
                    className={fieldClass}
                    placeholder="Tell us about your reporting needs…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center rounded-pill bg-lime px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Book a Demo"}
                </button>

                {error && (
                  <p role="alert" className="text-sm text-red-300">
                    {error}
                  </p>
                )}
                <p className="text-xs leading-relaxed text-white/55">
                  By submitting this form you agree to our privacy policy. We&rsquo;ll
                  never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime/15 text-lime">
        {icon}
      </span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm">{children}</dd>
      </div>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
