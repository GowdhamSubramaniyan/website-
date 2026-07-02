import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const SUPPORTS = [
  "Financing readiness",
  "Procurement requirements",
  "Supplier compliance",
  "Tender submissions",
  "Operational transparency",
];

/**
 * Don't Get Caught Unprepared (Prompt 4) — white band with the urgency copy,
 * a "Built to Support" checklist, and the €700 CTA on the left; sample report
 * pages on the right.
 */
export function DontGetCaught() {
  return (
    <section className="bg-[#eef1ef] py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-teal/70">
              AI-Driven Report Writing
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-teal sm:text-4xl md:text-5xl">
              Don&rsquo;t get caught unprepared.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/80">
              <p>
                Banks, procurement teams, insurers, investors, and large
                corporates are increasingly requesting ESG and operational
                transparency from SMEs.
              </p>
              <p>
                Even if your business is not required to report yet, suppliers,
                lenders, and customers are rapidly raising expectations around
                transparency, emissions visibility, and operational reporting.
              </p>
              <p>
                With one click, Essentials generates professional lender-ready
                and procurement-ready ESG reports covering Scope 1 &amp; 2
                reporting, helping businesses stay commercially prepared as
                reporting expectations continue to evolve.
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
              <Button href="#pricing" variant="primary" size="lg">
                Get Started Now at €700
              </Button>
            </div>
          </Reveal>

          {/* Report preview */}
          <Reveal delay={120}>
            <p className="mb-4 text-right text-2xl font-bold text-teal sm:text-3xl">
              Quick &amp; Easy.
            </p>
            <div className="overflow-hidden rounded-3xl shadow-lg lg:ml-auto">
              <Image
                src="/assets/essentials/report.png"
                alt="Sample Essentials ESG report pages"
                width={1080}
                height={1080}
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
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 text-teal"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.12" />
      <path
        d="M7 12.5l3.2 3.2L17 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
