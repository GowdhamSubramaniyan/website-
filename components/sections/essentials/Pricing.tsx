import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const INCLUDED = [
  "Unlimited ESG Reports",
  "AI-Powered ESG Analysis",
  "Interactive Cloud Dashboard",
  "Utility Bill AI Data Extraction",
  "Professional PDF Reports",
  "PowerPoint Export Capability",
  "Global & Local Framework Support",
  "Automated KPI Selection",
  "Real-Time ESG Insights",
  "Multi-User Access",
  "Regulatory & Reporting Updates",
  "No Hidden Fees",
];

/**
 * Pricing (Prompt 8) — dark teal band, centered. One annual price headline +
 * CTA, the full included-features checklist, and a "Save up to 65%" callout.
 */
export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#163b38] py-20 text-white md:py-28"
    >
      {/* subtle perspective grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-white">
            One Simple Annual Price for Complete ESG Reporting
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-5xl">
            €700 per year. Essentials for SMEs.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/75">
            One fixed annual price with full access to the Essentials reporting
            platform. No hidden fees, expensive consultant retainers, or
            complicated onboarding costs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button
              href="#contact"
              variant="dark"
              size="lg"
              className="bg-ink hover:bg-black"
            >
              Get Started Now
            </Button>
            <p className="text-sm text-white/70">
              Prefer a demo first?{" "}
              <Link
                href="#video"
                className="font-semibold italic text-lime underline-offset-4 hover:underline"
              >
                See Essentials in Action.
              </Link>
            </p>
          </div>
        </Reveal>

        {/* Included checklist */}
        <Reveal className="mx-auto mt-12 max-w-md">
          <ul className="space-y-2.5 rounded-2xl border border-white/15 bg-white/5 p-6">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <CheckIcon />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Savings callout */}
        <Reveal className="mx-auto mt-10 max-w-2xl">
          <div className="grid gap-4 rounded-2xl border border-white/15 p-8 sm:grid-cols-[auto_1fr] sm:gap-8">
            <span className="text-3xl font-bold leading-tight text-lime sm:text-4xl">
              Save up
              <br />
              to 65%
            </span>
            <div className="space-y-3 text-sm leading-relaxed text-white/80">
              <p>
                Traditional ESG consulting and reporting solutions can cost
                thousands annually.
              </p>
              <p>
                Essentials by Vision Zero Connect delivers professional ESG and
                operational reporting infrastructure at a cost designed for SMEs.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0 text-lime"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm3.9 6.2-4.6 4.6a1 1 0 0 1-1.4 0L5.9 10.3a1 1 0 1 1 1.4-1.4l1.3 1.3 3.9-3.9a1 1 0 0 1 1.4 1.4z" />
    </svg>
  );
}
