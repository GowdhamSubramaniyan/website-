import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QHA_PRICE } from "./essentials-qha.data";

// The Essentials product walkthrough (opens on YouTube from the hero link).
const VIDEO_URL = "https://youtu.be/EIRlfgyHKew";

const DASHBOARD_SRC = "/assets/essentials/dashboard.png";

/**
 * QHA hero — the teal Essentials backdrop with a QHA-specific headline. Copy sits
 * in the left half; the product dashboard is absolutely positioned on large
 * screens so it runs off the right edge of the viewport (clipped by the section's
 * overflow-hidden), matching the design. On small screens the dashboard drops
 * below the copy in normal flow. Top padding clears the fixed header.
 */
export function QhaHero() {
  return (
    <section
      id="overview"
      className="relative z-10 bg-essentials-hero text-white lg:min-h-[44rem]"
    >
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-44">
        {/* Two columns reserve the left half for copy; the dashboard fills the
            right half via the absolute block below. */}
        <div className="grid lg:grid-cols-2">
          <div className="max-w-xl">
            <span className="animate-fade-in-up block text-sm font-semibold text-white">
              Essentials by Vision Zero Connect
            </span>
            <h1 className="animate-fade-in-up mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-lime [animation-delay:120ms] sm:text-5xl md:text-6xl">
              Carbon Reporting Made Effortless for QHA Members
            </h1>
            <p className="animate-fade-in-up mt-6 max-w-lg text-sm leading-relaxed text-white/85 [animation-delay:240ms] sm:text-base">
              Mandatory carbon reporting has officially arrived for Australia&rsquo;s
              hospitality sector. Under new NGER-aligned requirements, Pubs and
              Hotels with more than 100 employees, over $50&nbsp;million in
              revenue, or more than $25&nbsp;million in assets must now report
              their carbon emissions this financial year. Even operators below
              these thresholds are feeling the pressure as banks, insurers and
              suppliers tighten ESG expectations across the industry.
            </p>
            <div className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-6 [animation-delay:360ms]">
              <a
                href="#pricing"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-pill bg-teal px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get Started Now for {QHA_PRICE}
              </a>
              <a
                href={VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-left focus-visible:outline-none"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/60 text-white transition-colors group-hover:border-lime group-hover:text-lime">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px]" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold uppercase leading-tight tracking-[0.08em] text-white transition-colors group-hover:text-lime">
                  See Essentials in Action
                  <br />
                  With This Video
                </span>
              </a>
            </div>
          </div>
          <div aria-hidden className="hidden lg:block" />
        </div>

        {/* Dashboard — small screens: in flow below the copy */}
        <div className="mt-12 lg:hidden">
          <Image
            src={DASHBOARD_SRC}
            alt="Essentials ESG reporting dashboard"
            width={1920}
            height={1080}
            sizes="100vw"
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </Container>

      {/* Dashboard — large screens: absolute and oversized, starting just right
          of centre so roughly half the card bleeds off the right edge, and
          spilling below the hero to overlap the section beneath it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute hidden lg:bottom-[-4rem] lg:left-[54%] lg:block xl:bottom-[-5rem] xl:left-[55%]"
      >
        <Image
          src={DASHBOARD_SRC}
          alt=""
          width={1920}
          height={1080}
          priority
          sizes="90vw"
          className="animate-hero-image h-auto w-[90vw] max-w-none drop-shadow-2xl xl:w-[82vw]"
        />
      </div>
    </section>
  );
}
