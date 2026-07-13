"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { postJSON } from "@/lib/api";
import { closing } from "./portfolio-one.data";

type Fields = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
};

const EMPTY: Fields = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Closing CTA — "Ready to Optimise Your Building Portfolio?" on a light band
 * with a faint line-art building backdrop on the left, and a teal contact-form
 * panel on the right. Submit is stubbed (no backend).
 */
export function PortfolioCTA() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  function update(name: keyof Fields) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [name]: e.target.value }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!fields.email.trim()) next.email = "Required";
    else if (!EMAIL_RE.test(fields.email)) next.email = "Enter a valid email address";
    if (!fields.firstName.trim()) next.firstName = "Required";
    if (!fields.message.trim()) next.message = "Required";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setSubmitError("");
    try {
      await postJSON("/api/contact", {
        source: "Portfolio One — Contact",
        name: `${fields.firstName} ${fields.lastName}`.trim(),
        email: fields.email,
        message: fields.message,
        company_website: honeypot,
        fields: { Phone: fields.phone },
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-grad-mint py-section-sm text-ink md:py-section"
    >
      {/* Faint line-art building backdrop */}
      <Image
        src={closing.linework.src}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        sizes="100vw"
        className="pointer-events-none absolute bottom-0 left-0 w-[55%] max-w-none opacity-40"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-teal sm:text-4xl md:text-display-sm">
              {closing.headline}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
              {closing.intro}
            </p>
          </div>

          {/* Form panel */}
          <div className="rounded-3xl bg-teal p-8 shadow-xl sm:p-10">
            {submitted ? (
              <div role="status" className="py-10 text-center text-white">
                <h3 className="text-xl font-semibold text-lime">
                  Thank you — your request has been received.
                </h3>
                <p className="mt-2 text-white/80">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={update("email")}
                  error={errors.email}
                  required
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="First Name"
                    name="firstName"
                    value={fields.firstName}
                    onChange={update("firstName")}
                    error={errors.firstName}
                    required
                  />
                  <Field
                    label="Last Name"
                    name="lastName"
                    value={fields.lastName}
                    onChange={update("lastName")}
                  />
                </div>
                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  value={fields.phone}
                  onChange={update("phone")}
                />
                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  value={fields.message}
                  onChange={update("message")}
                  error={errors.message}
                  required
                />
                {/* Honeypot — hidden from users, bots fill it and get dropped */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="font-semibold"
                  disabled={sending}
                >
                  {sending ? "Sending…" : closing.submitLabel}
                </Button>
                {submitError && (
                  <p role="alert" className="text-sm font-medium text-white">
                    {submitError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  error?: string;
  required?: boolean;
  as?: "input" | "textarea";
};

/** Filled form field on the teal panel: white label + light input. */
function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  required,
  as = "input",
}: FieldProps) {
  const shared =
    "mt-2 w-full rounded-lg border bg-white px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:ring-2 focus:ring-lime";
  const borderColor = error ? "border-red-400" : "border-transparent";

  return (
    <label className="block">
      <span className="text-sm font-semibold text-white">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          className={cn(shared, borderColor, "resize-none")}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          className={cn(shared, borderColor)}
        />
      )}
      {error && <span className="mt-1 block text-xs text-lime">{error}</span>}
    </label>
  );
}
