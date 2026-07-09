import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ScrollCue } from "@/components/ui/ScrollCue";
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
        <Link
          href="/"
          className="animate-fade-in-up mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span aria-hidden>&larr;</span>
          Back to Home
        </Link>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
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
            <div className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-4 [animation-delay:280ms]">
              <Button
                href={hero.cta.href}
                variant="dark"
                size="lg"
                className="font-semibold uppercase tracking-[0.08em]"
              >
                {hero.cta.label}
              </Button>
              <Link
                href="#contact"
                className="group/bd relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-pill border border-ink/30 px-9 py-4 text-base font-semibold uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out will-change-transform group-hover/bd:translate-x-0"
                />
                <span className="relative z-10">Book a Demo</span>
              </Link>
            </div>
          </div>

          {/* Video */}
          <div className="animate-fade-in-up w-full [animation-delay:180ms] lg:ml-auto lg:max-w-[36rem]">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <VideoEmbed
                youtubeId="LICdXvLuraw"
                logo={{ src: "/assets/home/logos/product-vzc-consult.png", alt: "VZC Consult" }}
                posterAlt="See VZC Consult in action"
                sizes="(min-width: 1024px) 34rem, 90vw"
              />
            </div>
          </div>
        </div>
      </Container>
      <ScrollCue />
    </section>
  );
}
