import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import {
  ESSENTIALS_INCLUDES,
  PRICE_CARD_POINTS,
  QHA_PRICE,
} from "./essentials-qha.data";

const NO_FRICTION = [
  "No spreadsheets",
  "No ESG expertise required",
  "No expensive consultants",
];

/**
 * "Essentials: Your Fast, Affordable Compliance Report" — the core offer. Left:
 * how the Essentials product works plus the "Essentials includes" checklist.
 * Right: a sticky dark price card ({QHA_PRICE}/year) with a short feature list
 * and the primary CTA. Anchored at #pricing so the hero CTAs land here.
 */
export function ComplianceReport() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Your Fast, Affordable{" "}
            <GradientText variant="teal">Compliance Report</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
            Produce a fully compliant Scope 1, 2 and 3 emissions report using the
            utility and operational bills your business already holds.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          {/* Explanation + includes */}
          <Reveal className="rounded-2xl border border-grey/70 bg-mint p-6 sm:p-8">
            <h3 className="text-xl font-bold text-ink sm:text-2xl">
              Compliance reporting without the complexity
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
              Essentials is Vision Zero Connect&rsquo;s streamlined, AI-guided
              platform that turns your existing electricity, gas, water and waste
              bills into a clear, audit-ready emissions report.
            </p>

            <p className="mt-6 rounded-xl bg-teal/10 px-4 py-3 text-sm font-semibold text-teal sm:text-base">
              It&rsquo;s the easiest way for pubs and hotels to meet mandatory
              reporting requirements this year.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {NO_FRICTION.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-grey/70 bg-white px-4 py-3 text-center text-sm font-semibold text-ink/80"
                >
                  {item}
                </div>
              ))}
            </div>

            <h4 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-ink/60">
              Essentials includes
            </h4>
            <ul className="mt-4 space-y-4">
              {ESSENTIALS_INCLUDES.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>
                    <span className="block text-sm font-semibold text-ink sm:text-base">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-ink/65">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Price card */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl bg-grad-teal-band text-white shadow-xl lg:sticky lg:top-28">
              <div className="p-7 sm:p-8">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                  One simple annual price
                </span>
                <p className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-lime sm:text-5xl">
                    {QHA_PRICE}
                  </span>
                  <span className="pb-1 text-sm text-white/70">/ year</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Full access to the Vision Zero Connect Essentials reporting
                  platform — no hidden fees or consultant retainers.
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                  {PRICE_CARD_POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm">
                      <CheckIcon tone="lime" />
                      <span className="text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-pill bg-lime px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal"
                >
                  Get Started with Essentials
                </a>
                <p className="mt-3 text-center text-xs text-white/60">
                  Exclusive rate for QHA members.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon({ tone = "teal" }: { tone?: "teal" | "lime" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={cnTone(tone)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm3.9 6.2-4.6 4.6a1 1 0 0 1-1.4 0L5.9 10.3a1 1 0 1 1 1.4-1.4l1.3 1.3 3.9-3.9a1 1 0 0 1 1.4 1.4z" />
    </svg>
  );
}

function cnTone(tone: "teal" | "lime") {
  return `mt-0.5 h-5 w-5 shrink-0 ${tone === "lime" ? "text-lime" : "text-teal"}`;
}
