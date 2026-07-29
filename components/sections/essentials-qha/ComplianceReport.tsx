import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { cn } from "@/lib/cn";
import {
  ESSENTIALS_INCLUDES,
  PRICE_CARD_POINTS,
} from "./essentials-qha.data";

const NO_FRICTION = [
  "No spreadsheets",
  "No ESG expertise required",
  "No unnecessary hassle",
];

/**
 * "Essentials: Your Fast, Affordable Compliance Report" — the core offer. Left:
 * how the Essentials product works plus the "Essentials includes" checklist.
 * Right: a full-height dark price card (QHA member price) with a short feature
 * list, the Essentials wordmark and the primary CTA. Anchored at #pricing so the
 * hero CTAs land here.
 */
export function ComplianceReport() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-pill border border-teal/25 bg-teal/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Exclusive QHA Member Offer
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Essentials: Your Fast, Affordable{" "}
            <GradientText variant="teal">Compliance Report</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
            Produce a fully compliant Scope 1, 2 and 3 emissions report using the
            utility and operational bills your business already has.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-stretch">
          {/* Explanation + includes */}
          <Reveal className="rounded-2xl border border-grey/70 bg-white p-6 shadow-sm sm:p-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
              <CheckIcon tone="teal" className="h-4 w-4" />
              Vision Zero Connect Essentials
            </span>
            <h3 className="mt-4 text-xl font-bold text-ink sm:text-2xl">
              Compliance reporting without the complexity
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
              QHA members can access Vision Zero Connect&rsquo;s Essentials
              product, a streamlined, AI-guided platform that turns your existing
              electricity, gas, water and waste bills into a clear, audit-ready
              emissions report.
            </p>

            <p className="mt-6 rounded-r-lg border-l-4 border-teal bg-teal/5 px-4 py-3 text-sm font-semibold text-ink sm:text-base">
              It&rsquo;s the easiest way for pubs and hotels to meet mandatory
              reporting requirements this year.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {NO_FRICTION.map((item, i) => (
                <div
                  key={item}
                  className="rounded-xl border border-grey/70 bg-mint px-4 py-4"
                >
                  <span className="block text-xs font-semibold text-ink/40">
                    0{i + 1}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-ink/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <h4 className="mt-8 text-base font-bold text-ink">Essentials includes:</h4>
            <ul className="mt-4 space-y-4">
              {ESSENTIALS_INCLUDES.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckIcon tone="teal" />
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
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-grad-teal-band p-7 text-white shadow-xl sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                QHA Member Price
              </span>
              <p className="mt-4 flex items-start text-white">
                <span className="mt-2 text-2xl font-bold sm:text-3xl">$</span>
                <span className="text-5xl font-bold leading-none tracking-tight sm:text-6xl">
                  2,200
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Access to the Vision Zero Connect Essentials reporting platform.
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                {PRICE_CARD_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm">
                    <CheckIcon tone="sage" className="h-4 w-4" />
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>

              {/* pushes the wordmark + CTA to the bottom of the card */}
              <div className="mt-auto pt-10">
                <Image
                  src="/assets/essentials/logo-essentials.png"
                  alt="Essentials"
                  width={3146}
                  height={1021}
                  className="h-9 w-auto"
                />
                <a
                  href="#contact"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal"
                >
                  Get Started with Essentials
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <p className="mt-3 text-center text-xs text-white/60">
                  Need help getting started? Our team can guide you through the
                  process.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon({
  tone = "teal",
  className,
}: {
  tone?: "teal" | "sage";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={cn(
        "shrink-0",
        tone === "sage" ? "text-sage" : "text-teal",
        className ?? "mt-0.5 h-5 w-5",
      )}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm3.9 6.2-4.6 4.6a1 1 0 0 1-1.4 0L5.9 10.3a1 1 0 1 1 1.4-1.4l1.3 1.3 3.9-3.9a1 1 0 0 1 1.4 1.4z" />
    </svg>
  );
}
