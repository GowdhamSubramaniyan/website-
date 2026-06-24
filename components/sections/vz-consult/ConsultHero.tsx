import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "./vz-consult.data";

/**
 * VZC Consult hero — exact match to the Canva design: a soft mint→white
 * background, a deep-teal headline and grey intro copy with a dark "Talk to Our
 * Team" pill on the left, and the advisor photo (rounded) on the right.
 * Top padding clears the fixed header; columns stack on mobile.
 */
export function ConsultHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(130%_130%_at_12%_0%,#f5faf6_0%,#e6f1ec_48%,#d3e7df_100%)] text-ink">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div>
            <h1 className="animate-fade-in-up text-balance text-4xl font-bold leading-[1.1] tracking-tight text-teal sm:text-5xl md:text-display-lg">
              {hero.headline}
            </h1>
            <div className="animate-fade-in-up mt-7 max-w-xl space-y-4 text-sm leading-relaxed text-ink/70 [animation-delay:140ms] sm:text-base">
              {hero.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="animate-fade-in-up mt-9 [animation-delay:280ms]">
              <Button
                href={hero.cta.href}
                variant="dark"
                size="lg"
                className="font-semibold uppercase tracking-[0.08em]"
              >
                {hero.cta.label}
              </Button>
            </div>
          </div>

          {/* Photo (artwork already has rounded corners — no extra frame) */}
          <div className="animate-fade-in-up [animation-delay:180ms]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={900}
              height={820}
              sizes="(min-width: 1024px) 34rem, 90vw"
              preload
              className="mx-auto h-auto w-full max-w-md lg:ml-auto lg:max-w-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
