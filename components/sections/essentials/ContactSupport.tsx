"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";

const COUNTRIES = ["Europe", "United Kingdom", "Australia", "Hong Kong", "United States", "Other"];
const QUERY_TYPES = [
  "General Enquiry",
  "Pricing",
  "Request a Demo",
  "Technical Support",
  "Partnership",
];
const QUICK_HELP = [
  "24/7 online platform access",
  "Instant account activation",
  "Step-by-step setup guides",
  "Comprehensive video tutorials",
];

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-grey bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-ink/40 focus:border-teal focus:ring-2 focus:ring-teal/30";
const labelClass = "block text-sm font-medium text-ink";

/**
 * Get Help and Support (Prompt 11) — the closing contact section: a query form
 * (left) plus a Contact Information card and a Quick Help card (right).
 */
export function ContactSupport() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-[#f4f6f5] py-16 md:py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Get Help and Support
        </h2>
        <div className="mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-ink/80">
          <p>Have questions about Essentials? We&rsquo;re here to help you get started.</p>
          <p>
            Send us your questions and we&rsquo;ll provide detailed answers to help
            you make the right decision.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          {/* Form card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-ink">Send Us Your Query</h3>
            <p className="mt-1 text-sm text-ink/60">
              Fill out the form below and our team will get back to you promptly.
            </p>

            {sent ? (
              <p
                role="status"
                className="mt-6 rounded-lg bg-teal/10 px-4 py-6 text-center text-sm font-medium text-teal"
              >
                Thanks — your message has been sent. Our team will be in touch shortly.
              </p>
            ) : (
              <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate={false}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="firstName">
                      First Name <span className="text-teal">*</span>
                    </label>
                    <input id="firstName" name="firstName" required className={fieldClass} placeholder="Enter first name" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lastName">
                      Last Name <span className="text-teal">*</span>
                    </label>
                    <input id="lastName" name="lastName" required className={fieldClass} placeholder="Enter last name" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email Address <span className="text-teal">*</span>
                    </label>
                    <input id="email" name="email" type="email" required className={fieldClass} placeholder="your.email@company.com" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company Name
                    </label>
                    <input id="company" name="company" className={fieldClass} placeholder="Your company (optional)" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+44 20 1234 5678" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="country">
                      Country <span className="text-teal">*</span>
                    </label>
                    <select id="country" name="country" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select your country
                      </option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="queryType">
                    Query Type <span className="text-teal">*</span>
                  </label>
                  <select id="queryType" name="queryType" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select query type
                    </option>
                    {QUERY_TYPES.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Your Question or Message <span className="text-teal">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={fieldClass}
                    placeholder="Please describe your question or how we can help you…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                >
                  Send Message
                  <SendIcon />
                </button>

                <p className="text-xs leading-relaxed text-ink/55">
                  By submitting this form, you agree to our privacy policy.
                  We&rsquo;ll never share your information with third parties.
                </p>
              </form>
            )}
          </div>

          {/* Info column */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-ink">Contact Information</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Dot />
                  <span>
                    <span className="block text-ink/50">Email Support</span>
                    <span className="font-semibold text-ink">support@visionzeroconnect.com</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Dot />
                  <span className="font-semibold text-ink">
                    UK | Australia | Hong Kong | Malta | USA
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-teal/20 bg-[#eaf6ee] p-6">
              <h3 className="text-lg font-bold text-ink">Quick Help</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {QUICK_HELP.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M4 12l16-8-6 16-3-7-7-1z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-teal" fill="currentColor" aria-hidden="true">
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm3.9 6.2-4.6 4.6a1 1 0 0 1-1.4 0L5.9 10.3a1 1 0 1 1 1.4-1.4l1.3 1.3 3.9-3.9a1 1 0 0 1 1.4 1.4z" />
    </svg>
  );
}

function Dot() {
  return (
    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <circle cx="10" cy="10" r="4" />
      </svg>
    </span>
  );
}
