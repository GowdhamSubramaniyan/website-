import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { hero } from "./awards.data";

/**
 * Awards page hero — soft mint→white background, an "Awards and Recognitions"
 * eyebrow, a solid-teal headline and grey intro copy on the left, and a
 * three-photo collage (one tall + two stacked) on the right. Top padding clears
 * the fixed global header; the collage stacks below the copy on mobile.
 */
export function AwardsHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(130%_130%_at_12%_0%,#f5faf6_0%,#e6f1ec_48%,#d3e7df_100%)] text-ink">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <span className="animate-fade-in-up block text-sm font-semibold uppercase tracking-[0.16em] text-teal sm:text-base">
              {hero.eyebrow}
            </span>
            <h1 className="animate-fade-in-up mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-teal [animation-delay:120ms] sm:text-5xl md:text-display-lg">
              {hero.headline}
            </h1>
            <div className="animate-fade-in-up mt-7 max-w-xl space-y-4 text-sm leading-relaxed text-ink/70 [animation-delay:240ms] sm:text-base">
              {hero.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          {/* Photo collage (single artwork) */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1100}
              height={1000}
              sizes="(min-width: 1024px) 38rem, 90vw"
              preload
              className="mx-auto h-auto w-full max-w-xl lg:ml-auto"
            />
          </div>
        </div>
      </Container>
      <ScrollCue />
    </section>
  );
}
