import { Container } from "@/components/ui/Container";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { QHA_PRICE } from "./essentials-qha.data";

/**
 * QHA hero — the teal Essentials backdrop with a QHA-specific headline. Copy on
 * the left (eyebrow + lime headline + the new NGER reporting context + the two
 * CTAs); the product walkthrough video sits on the right. Top padding clears the
 * fixed header.
 */
export function QhaHero() {
  return (
    <section
      id="overview"
      className="relative z-10 bg-essentials-hero text-white lg:min-h-[46rem]"
    >
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.2fr] lg:gap-16">
          {/* Copy */}
          <div>
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-pill bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white ring-1 ring-white/20">
              Essentials · For QHA Members
            </span>
            <h1 className="animate-fade-in-up mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-lime [animation-delay:120ms] sm:text-4xl md:text-5xl">
              Carbon Reporting Made Effortless for QHA Members
            </h1>
            <p className="animate-fade-in-up mt-5 max-w-xl text-sm leading-relaxed text-white/85 [animation-delay:240ms] sm:text-base">
              Mandatory carbon reporting has officially arrived for Australia&rsquo;s
              hospitality sector. Under new NGER-aligned requirements, pubs and
              hotels with more than 100 employees, over $50&nbsp;million in
              revenue, or more than $50&nbsp;million in assets must now report
              their carbon emissions this financial year — and even operators
              below these thresholds are feeling the pressure as banks, insurers
              and suppliers tighten ESG expectations across the board.
            </p>
            <div className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-4 [animation-delay:360ms]">
              <a
                href="#pricing"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-pill bg-teal px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get Started Now for {QHA_PRICE}
              </a>
              <a
                href="#video"
                className="group/bd relative inline-flex shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-pill border border-white/70 px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out will-change-transform group-hover/bd:translate-x-0"
                />
                <span className="relative z-10">See Essentials in Action</span>
              </a>
            </div>
          </div>

          {/* Video */}
          <div
            id="video"
            className="animate-fade-in-up scroll-mt-28 w-full [animation-delay:200ms] lg:ml-auto lg:max-w-[38rem]"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15">
              <VideoEmbed
                youtubeId="MuRimRhNTPM"
                logo={{ src: "/assets/home/logos/product-essentials.png", alt: "Essentials" }}
                posterAlt="Watch how Essentials works"
                sizes="(min-width: 1024px) 40rem, 90vw"
              />
            </div>
          </div>
        </div>
      </Container>
      <ScrollCue />
    </section>
  );
}
