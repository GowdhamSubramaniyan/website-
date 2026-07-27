import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { WHY_QHA } from "./essentials-qha.data";

const ICONS: Record<(typeof WHY_QHA)[number]["icon"], ReactNode> = {
  spark: (
    <path
      d="M12 3v4m0 10v4m9-9h-4M7 12H3m13.5-6.5-2.8 2.8m-5.4 5.4-2.8 2.8m11-.1-2.8-2.8m-5.4-5.4L5.5 5.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  ),
  layers: (
    <path
      d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  pulse: (
    <path
      d="M3 12h4l2-6 4 12 2-6h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  doc: (
    <path
      d="M6 3h8l4 4v14H6V3Zm8 0v4h4M9 12h6M9 16h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

/**
 * "Why QHA Members Choose Essentials" — four value pillars in a light band, each
 * a teal-tinted icon over a short title and description.
 */
export function WhyQha() {
  return (
    <section className="bg-mint py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why QHA members choose{" "}
            <GradientText variant="teal">Essentials</GradientText>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_QHA.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-grey/70 bg-white p-6 text-center shadow-sm">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-teal/10 text-teal">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                    {ICONS[pillar.icon]}
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
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
