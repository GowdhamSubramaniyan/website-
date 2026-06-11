"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { OptionCard } from "./OptionCard";
import { CONTACT_OPTIONS, COMPANY_SIZES } from "./contact.data";

type Fields = {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone: string;
  company: string;
  industry: string;
  message: string;
};

const EMPTY: Fields = {
  firstName: "",
  lastName: "",
  workEmail: "",
  phone: "",
  company: "",
  industry: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [option, setOption] = useState<string | null>(null);
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [size, setSize] = useState<string>("");
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(name: keyof Fields) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [name]: e.target.value }));
    };
  }

  function validate(): typeof errors {
    const next: typeof errors = {};
    if (!fields.firstName.trim()) next.firstName = "Required";
    if (!fields.lastName.trim()) next.lastName = "Required";
    if (!fields.workEmail.trim()) next.workEmail = "Required";
    else if (!EMAIL_RE.test(fields.workEmail))
      next.workEmail = "Enter a valid email address";
    if (!fields.message.trim()) next.message = "Required";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // No backend wiring — acknowledge the submission.
      setSubmitted(true);
    }
  }

  return (
    <SectionWrapper id="contact" background="grey">
      <SectionHeading
        headline={<span className="text-teal">What Can We Help You With?</span>}
        description="Choose the option that best describes your requirements and one of our specialists will be in touch."
      />

      {/* Inquiry options */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CONTACT_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.title}
            title={opt.title}
            description={opt.description}
            selected={option === opt.title}
            onSelect={() => setOption(opt.title)}
          />
        ))}
      </div>

      {submitted ? (
        <div
          role="status"
          className="mt-12 rounded-card border border-teal bg-white p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-teal">
            Thank you — your request has been received.
          </h3>
          <p className="mt-2 text-ink/70">We&apos;ll respond within 24 hours.</p>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="mt-12">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <Field
              label="First name"
              name="firstName"
              value={fields.firstName}
              onChange={update("firstName")}
              error={errors.firstName}
              required
            />
            <Field
              label="Last name"
              name="lastName"
              value={fields.lastName}
              onChange={update("lastName")}
              error={errors.lastName}
              required
            />
            <Field
              label="Work email"
              name="workEmail"
              type="email"
              value={fields.workEmail}
              onChange={update("workEmail")}
              error={errors.workEmail}
              required
            />
            <Field
              label="Phone number"
              name="phone"
              type="tel"
              value={fields.phone}
              onChange={update("phone")}
            />
            <Field
              label="Company name"
              name="company"
              value={fields.company}
              onChange={update("company")}
            />
            <Field
              label="Industry"
              name="industry"
              value={fields.industry}
              onChange={update("industry")}
            />
          </div>

          {/* Company size */}
          <fieldset className="mt-8">
            <legend className="text-sm font-semibold text-teal">
              Company size
            </legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {COMPANY_SIZES.map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={size === value}
                  onClick={() => setSize(value)}
                  className={cn(
                    "rounded-pill border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
                    size === value
                      ? "border-teal bg-teal text-white"
                      : "border-teal/50 bg-white text-teal hover:border-teal",
                  )}
                >
                  {value}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Message */}
          <div className="mt-8">
            <Field
              label="How can we help you?"
              name="message"
              as="textarea"
              value={fields.message}
              onChange={update("message")}
              error={errors.message}
              required
            />
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Button type="submit" variant="dark" size="lg">
              Submit Request
            </Button>
            <p className="text-sm text-teal">We&apos;ll respond within 24 hours.</p>
          </div>
        </form>
      )}
    </SectionWrapper>
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

/** Underline-style labelled field used throughout the contact form. */
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
    "w-full border-0 border-b bg-transparent py-2 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-teal";
  const borderColor = error ? "border-red-600" : "border-teal/40";

  return (
    <label className="block">
      <span className="text-sm font-semibold text-teal">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={3}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          className={cn(shared, borderColor, "mt-2 resize-none")}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          className={cn(shared, borderColor, "mt-2")}
        />
      )}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
