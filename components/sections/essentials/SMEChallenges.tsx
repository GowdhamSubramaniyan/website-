import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const REASONS = [
  "Reduce ESG reporting admin",
  "Improve lender readiness",
  "Support procurement and tender requirements",
  "Reduce consultant dependency",
  "Improve transparency for customers and stakeholders",
  "Respond faster to reporting requests",
];

/**
 * Built for Real SME Challenges (Prompt 6) — light band with framing copy up
 * top, then a split of an SME photo on the left and a "Why Businesses Use
 * Essentials" checklist plus the €700 CTA on the right.
 */
export function SMEChallenges() {
  return (
    <section className="bg-[#eef1ef] py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Built for Real SME Challenges
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/80">
            <p>
              Many SMEs are still managing ESG reporting through spreadsheets,
              repetitive questionnaires, and manual calculations.
            </p>
            <p>
              Essentials replaces fragmented reporting processes with one
              streamlined platform designed to reduce admin time, improve
              transparency, and help businesses stay commercially competitive.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/assets/essentials/sme.png"
                alt="SME team reviewing spreadsheets"
                width={1080}
                height={1080}
                sizes="(min-width: 1024px) 30rem, 90vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Reasons */}
          <Reveal delay={120}>
            <h3 className="text-2xl font-bold text-ink">
              Why Businesses Use Essentials
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
              <Button href="#pricing" variant="dark" size="lg">
                Get Started Now at €700
              </Button>
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
      className="mt-0.5 h-6 w-6 shrink-0 text-teal"
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
