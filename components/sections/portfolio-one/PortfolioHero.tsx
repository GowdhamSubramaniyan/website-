import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { hero } from "./portfolio-one.data";

/**
 * Portfolio One hero. Dark indigo→green gradient (`bg-portfolio-hero`, sampled
 * from the design) with a subtle grain. Bold eyebrow, solid-lime headline,
 * intro, and CTA on the left; the product walkthrough video on the right with
 * the awards badge riding its lower-left corner. Stacks on mobile.
 */
export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-portfolio-hero text-white lg:min-h-[52rem]">
      {/* Subtle film grain over the gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
      >
        <svg className="h-full w-full">
          <filter id="po-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#po-grain)" />
        </svg>
      </div>

      <Container className="relative z-10 pb-20 pt-32 md:pb-28 md:pt-44">
        <Link
          href="/"
          className="animate-fade-in-up mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span aria-hidden>&larr;</span>
          Back to Home
        </Link>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* Copy */}
          <div>
            <span className="animate-fade-in-up block text-base font-bold text-white">
              {hero.eyebrow}
            </span>
            <h1 className="animate-fade-in-up mt-4 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-lime [animation-delay:120ms] sm:text-display-sm md:text-display">
              {hero.headline}
            </h1>
            <p className="animate-fade-in-up mt-5 max-w-lg text-base leading-relaxed text-white/80 [animation-delay:240ms] sm:text-lg">
              {hero.intro}
            </p>
            <div className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-4 [animation-delay:360ms]">
              <Button
                href={hero.primaryCta.href}
                variant="dark"
                size="lg"
                className="bg-grad-teal px-9 font-semibold uppercase tracking-wide shadow-lg shadow-teal/30 hover:brightness-110"
              >
                {hero.primaryCta.label}
              </Button>
              <Link
                href="#contact"
                className="group/bd relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-pill border border-white/70 px-9 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out will-change-transform group-hover/bd:translate-x-0"
                />
                <span className="relative z-10">Book a Demo</span>
              </Link>
            </div>
          </div>

          {/* Video + awards badge */}
          <div className="animate-fade-in-up relative w-full [animation-delay:200ms] lg:ml-auto lg:max-w-[36rem]">
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15">
              <VideoEmbed
                youtubeId="ThzqYzIMrW0"
                logo={{ src: "/assets/home/logos/product-portfolio-one.png", alt: "Portfolio One" }}
                posterAlt="Watch Portfolio One in action"
                sizes="(min-width: 1024px) 40rem, 90vw"
              />
            </div>
            <AwardBadge className="absolute -bottom-5 left-3 w-[52%] max-w-xs drop-shadow-xl" />
          </div>
        </div>
      </Container>
      <ScrollCue />
    </section>
  );
}

/** Floating "2025 CRE Data Solutions of the Year" awards badge (flat). */
function AwardBadge({ className }: { className?: string }) {
  return (
    <Image
      src={hero.awardImage.src}
      alt={hero.awardImage.alt}
      width={1200}
      height={200}
      sizes="(min-width: 1024px) 20rem, 52vw"
      className={className}
    />
  );
}
