import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const REASONS = [
  "Improve operational transparency",
  "Support procurement requirements",
  "Enhance emissions visibility",
  "Reduce manual reporting admin",
  "Improve lender readiness",
  "Reduce reliance on external consultants",
];

/**
 * Built for Growing Organisations (section 7) — light band with framing copy up
 * top, then a split of a context photo (left) and a "Why Organisations Use
 * Essentials+" checklist plus a Book a Free Demo CTA (right).
 */
export function BuiltForGrowing() {
  return (
    <section className="bg-[#eef1ef] py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Built for Growing Organisations
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/80">
            <p>
              Many organisations are moving beyond basic ESG compliance toward
              broader operational reporting and transparency requirements.
            </p>
            <p>
              Essentials+ helps reduce reporting complexity while improving
              visibility, reporting confidence, and operational readiness.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/assets/essentials-plus/built.png"
                alt="A team presenting operational reporting insights"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 30rem, 90vw"
                className="h-full w-full scale-[1.06] object-cover"
              />
            </div>
          </Reveal>

          {/* Reasons */}
          <Reveal delay={120}>
            <h3 className="text-2xl font-bold text-ink">
              Why Organisations Use Essentials+
            </h3>
            <ul className="mt-6 space-y-4">
              {REASONS.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-base leading-relaxed text-ink/80">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-pill bg-teal px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              >
                Book a Free Demo
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-[#3fa657]" fill="currentColor" aria-hidden="true">
      <path d="M12 1.8a10.2 10.2 0 1 0 0 20.4 10.2 10.2 0 0 0 0-20.4zm4.7 7.5-5.6 5.6a1.1 1.1 0 0 1-1.6 0L7 12.4a1.1 1.1 0 1 1 1.6-1.6l1.7 1.7 4.8-4.8a1.1 1.1 0 0 1 1.6 1.6z" />
    </svg>
  );
}
