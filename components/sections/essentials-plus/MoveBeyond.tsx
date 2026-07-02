import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const SUPPORTS = [
  "Procurement readiness",
  "Operational transparency",
  "Financing readiness",
  "Supply chain compliance",
  "Emissions visibility",
  "Transition planning",
];

/**
 * Move beyond basic ESG Reporting (section 5) — white band with the framing
 * copy, a "Built to Support" checklist, and the GET STARTED NOW CTA on the left;
 * a context photo on the right.
 */
export function MoveBeyond() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-teal sm:text-4xl md:text-5xl">
              <span className="block">Move beyond</span>
              <span className="block">Standard Reporting</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink/80">
              <p>
                Essentials+ is designed for organisations requiring deeper
                operational visibility, enhanced emissions reporting, and more
                advanced ESG reporting capabilities.
              </p>
              <p>
                As lender expectations, procurement requirements, and operational
                transparency standards continue to evolve, organisations are
                increasingly expected to provide more detailed reporting across
                operations, emissions, and transition planning.
              </p>
              <p>
                Essentials+ helps simplify this process through one streamlined
                reporting platform.
              </p>
            </div>

            <h3 className="mt-10 text-xl font-bold text-ink">Built to Support:</h3>
            <ul className="mt-4 space-y-3">
              {SUPPORTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-base font-semibold text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-pill bg-grad-lime px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-ink shadow-sm transition-[filter] duration-200 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              >
                Get Started Now
              </Link>
            </div>
          </Reveal>

          {/* Photo */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-lg lg:ml-auto">
              <Image
                src="/assets/essentials-plus/meet.png"
                alt="A growing team reviewing advanced ESG reporting"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 32rem, 90vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-teal" fill="currentColor" aria-hidden="true">
      <path d="M12 1.8a10.2 10.2 0 1 0 0 20.4 10.2 10.2 0 0 0 0-20.4zm4.7 7.5-5.6 5.6a1.1 1.1 0 0 1-1.6 0L7 12.4a1.1 1.1 0 1 1 1.6-1.6l1.7 1.7 4.8-4.8a1.1 1.1 0 0 1 1.6 1.6z" />
    </svg>
  );
}
