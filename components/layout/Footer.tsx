import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PARTNERS } from "@/components/sections/partners/partners.data";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

// Footer link columns — matches the design (Our Solutions / Resources / Legal).
const SOLUTIONS = [
  { label: "Essentials / Essentials +", href: "#essentials" },
  { label: "Portfolio One", href: "#portfolio-one" },
  { label: "VZC Consult", href: "#vz-consult" },
];

const RESOURCES = [
  { label: "Awards & Recognitions", href: "/awards" },
  { label: "Knowledge Base", href: "/knowledge-base" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Business", href: "/terms" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "X", href: "https://x.com", icon: XIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
];

/** Global site footer — newsletter, social, link columns, brand + legal row. */
export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-14">
        {/* Two columns: left = footer content, right = global partner network */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — newsletter, social, and link columns */}
          <div>
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Stay updated with the latest insights, product updates, and
                  industry news.
                </p>
                <NewsletterForm />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Follow us</h3>
                <ul className="mt-4 flex items-center gap-3">
                  {SOCIALS.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid h-10 w-10 place-items-center rounded-full bg-teal text-white transition-colors hover:bg-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
              <FooterGroup title="Our Solutions" links={SOLUTIONS} />
              <FooterGroup title="Resources" links={RESOURCES} />
              <FooterGroup title="Legal" links={LEGAL} />
            </div>
          </div>

          {/* RIGHT — Global Partner Network */}
          <div
            id="partners"
            className="scroll-mt-24 lg:border-l lg:border-white/10 lg:pl-16"
          >
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Global Partner Network
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Supporting organisations across Europe, Australia, Asia, the
              Middle East, and expanding global markets — with operational
              capability established in Malta and growing international
              partnerships.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-6">
              <ul className="grid grid-cols-3 items-center gap-x-6 gap-y-8">
                {PARTNERS.map((partner) => (
                  <li key={partner.name} className="flex justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={250}
                      height={100}
                      className="h-8 w-auto object-contain sm:h-9"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Brand + copyright */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo tone="white" />
          <p className="text-sm text-white/60">
            &copy; 2026 Vision Zero Connect. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --- Social glyphs --- */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s-.01 3.59-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.59-.01-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s.01-3.59.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.33-.13-.81-.28-1.71-.32C15.5 4.01 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 8.14A3.2 3.2 0 1 0 8.8 12 3.2 3.2 0 0 0 12 15.2Zm5.14-8.34a1.15 1.15 0 1 1-1.15-1.15 1.15 1.15 0 0 1 1.15 1.15Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.76V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.95.93-1.95 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}
