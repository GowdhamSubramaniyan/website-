import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "./portfolio-one.data";

/**
 * Portfolio One hero. Dark indigo→green gradient (`bg-portfolio-hero`, sampled
 * from the design) with a subtle grain. Bold eyebrow, solid-lime headline,
 * intro, and dual CTAs (teal→sage primary + outlined play secondary) on the
 * left; a large, slightly-tilted, borderless dashboard bleeds off the right
 * with the flat awards badge over its lower-left. Stacks on mobile.
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
        <div className="lg:w-[48%]">
          <span className="animate-fade-in-up block text-base font-bold text-white">
            {hero.eyebrow}
          </span>
          <h1 className="animate-fade-in-up mt-4 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-lime [animation-delay:120ms] sm:text-display-sm md:text-display">
            {hero.headline}
          </h1>
          <p className="animate-fade-in-up mt-5 max-w-lg text-base leading-relaxed text-white/80 [animation-delay:240ms] sm:text-lg">
            {hero.intro}
          </p>
          <div className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-6 [animation-delay:360ms]">
            <Button
              href={hero.primaryCta.href}
              variant="dark"
              size="lg"
              className="bg-grad-teal px-9 font-semibold uppercase tracking-wide shadow-lg shadow-teal/30 hover:brightness-110"
            >
              {hero.primaryCta.label}
            </Button>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center gap-3 rounded-pill text-sm font-semibold uppercase tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/70 transition-colors group-hover:bg-white/10">
                <PlayIcon />
              </span>
              {hero.secondaryCta.label}
            </a>
          </div>

          {/* Dashboard + badge — stacked below copy on mobile/tablet */}
          <div className="animate-fade-in-up relative mt-12 [animation-delay:200ms] lg:hidden">
            <Image
              src={hero.dashboard.src}
              alt={hero.dashboard.alt}
              width={1920}
              height={1080}
              preload
              sizes="100vw"
              className="h-auto w-full drop-shadow-2xl"
            />
            <AwardBadge className="absolute -bottom-5 left-1/2 w-[88%] max-w-md -translate-x-1/2" />
          </div>
        </div>
      </Container>

      {/* Dashboard — large, borderless, tilted; bleeds far off the right so only
          its left half stays in view. The badge rides its lower-left corner. */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[36%] lg:block">
        <div className="relative w-[82vw] max-w-none xl:w-[76vw]">
          <Image
            src={hero.dashboard.src}
            alt=""
            width={1920}
            height={1080}
            preload
            sizes="82vw"
            className="animate-hero-dash h-auto w-full origin-right drop-shadow-2xl [animation-delay:200ms]"
          />
          <AwardBadge className="absolute left-[1%] top-[62%] w-[36%] max-w-md" />
        </div>
      </div>
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
      sizes="(min-width: 1024px) 26rem, 88vw"
      className={className}
    />
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 translate-x-0.5"
    >
      <path d="M6 4.5v11a.75.75 0 0 0 1.14.64l9-5.5a.75.75 0 0 0 0-1.28l-9-5.5A.75.75 0 0 0 6 4.5Z" />
    </svg>
  );
}
