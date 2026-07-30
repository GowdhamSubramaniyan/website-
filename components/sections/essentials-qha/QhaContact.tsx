import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { QHA_CONTACT } from "./essentials-qha.data";

/**
 * "Get your ESG edge today" — the closing conversion band. A split card: a deep
 * teal panel (headline + Book a Demo) beside a white panel with a 2×2 grid of
 * contact details, followed by the co-branded QHA × Vision Zero Connect logos.
 */
export function QhaContact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-5xl">
          <div className="grid overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-2">
            {/* Left — headline + CTA */}
            <div className="bg-[#006361] p-8 text-white sm:p-10">
              <span className="inline-flex items-center rounded-pill bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                Connect With Us
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                Get your ESG edge today.
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
                Turn real assets compliance into your strategic edge.
              </p>
              <a
                href={`mailto:${QHA_CONTACT.email}?subject=QHA%20Essentials%20—%20Book%20a%20demo`}
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-pill bg-white px-7 py-3.5 text-sm font-semibold text-teal transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#006361]"
              >
                Book a Demo
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Right — contact grid */}
            <div className="bg-white p-6 sm:p-8">
              <div className="grid h-full gap-4 sm:grid-cols-2">
                <ContactCard label="Website" icon={<GlobeIcon />}>
                  <a
                    href={`https://${QHA_CONTACT.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal"
                  >
                    {QHA_CONTACT.website}
                  </a>
                </ContactCard>
                <ContactCard label="Email" icon={<MailIcon />}>
                  <a href={`mailto:${QHA_CONTACT.email}`} className="hover:text-teal">
                    {QHA_CONTACT.email}
                  </a>
                </ContactCard>
                <ContactCard label="Contact" icon={<PhoneIcon />}>
                  <a href={`mailto:${QHA_CONTACT.contactEmail}`} className="block hover:text-teal">
                    {QHA_CONTACT.contactEmail}
                  </a>
                  <a href={`tel:${QHA_CONTACT.phone.replace(/\s+/g, "")}`} className="mt-0.5 block text-ink/60 hover:text-teal">
                    | {QHA_CONTACT.phone}
                  </a>
                </ContactCard>
                <ContactCard label="Regions" icon={<PinIcon />}>
                  {QHA_CONTACT.regions}
                </ContactCard>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Co-branded logos */}
        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {/* TODO: replace with the official QHA logo once provided
                (drop the file in public/assets/ and swap this block for an <Image>). */}
            <div className="flex flex-col items-center leading-none text-ink">
              <span className="text-5xl font-black tracking-tight sm:text-6xl">QHA</span>
              <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink/60 sm:text-xs">
                Queensland Hotels Association
              </span>
            </div>
            <Image
              src="/vzc-logo.png"
              alt="Vision Zero Connect"
              width={670}
              height={367}
              className="h-24 w-auto sm:h-28"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactCard({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#f4f6f5] p-5">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#006361] text-white">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            {label}
          </p>
          <div className="mt-1 break-words text-sm font-medium text-ink">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.7" />
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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
