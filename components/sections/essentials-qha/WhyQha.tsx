import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WHY_QHA } from "./essentials-qha.data";

const ICONS: Record<(typeof WHY_QHA)[number]["icon"], ReactNode> = {
  gear: (
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8-3.5a8 8 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a8 8 0 0 0-2-1.2L15 3H9l-.5 2.6a8 8 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A8 8 0 0 0 4 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1c.6.5 1.3.9 2 1.2L9 21h6l.5-2.6c.7-.3 1.4-.7 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  doc: (
    <path
      d="M6 3h8l4 4v14H6V3Zm8 0v4h4M9 12h6M9 16h6M9 8h2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  bars: (
    <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </g>
  ),
  check: (
    <path
      d="M4 12.5l5 5L20 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

/**
 * "Why QHA Members Choose Essentials" — four value pillars in a light band, each
 * a centered icon over a short title and description on a pale card.
 */
export function WhyQha() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl lg:whitespace-nowrap lg:text-5xl">
            Why QHA Members Choose{" "}
            <span className="text-teal">Essentials</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_QHA.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90}>
              <div className="h-full rounded-2xl bg-[#f4f6f5] p-7 text-center">
                <span className="mx-auto flex h-10 items-center justify-center text-ink">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
                    {ICONS[pillar.icon]}
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
