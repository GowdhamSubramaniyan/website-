import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ScrollCue } from "@/components/ui/ScrollCue";

/**
 * Essentials hero — teal radial backdrop (bright teal spotlight up top fading to
 * dark teal at the edges, sampled from the Canva draft). Eyebrow + lime headline
 * + intro and the CTA sit on the left; the product walkthrough video sits on the
 * right. Columns stack on mobile. Top padding clears the fixed header.
 */
export function EssentialsHero() {
  return (
    <section id="overview" className="relative z-10 bg-essentials-hero text-white lg:min-h-[48rem]">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-44">
        <Link
          href="/"
          className="animate-fade-in-up mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span aria-hidden>&larr;</span>
          Back to Home
        </Link>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* Copy */}
          <div>
            <span className="animate-fade-in-up block text-sm font-semibold text-white">
              Essentials by Vision Zero Connect
            </span>
            <h1 className="animate-fade-in-up mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-lime [animation-delay:120ms] sm:text-4xl md:text-5xl">
              AI-Powered ESG &amp; Operational Reporting Built for SMEs
            </h1>
            <p className="animate-fade-in-up mt-5 max-w-md text-sm leading-relaxed text-white/85 [animation-delay:240ms] sm:text-base">
              Essentials helps SMEs generate professional ESG and operational
              reporting aligned to growing lender, procurement, investor, and
              customer expectations — without expensive consultants or manual
              reporting processes.
            </p>
            <div className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-4 [animation-delay:360ms]">
              <Link
                href="#pricing"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-pill bg-teal px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get Started Now
              </Link>
              <Link
                href="#contact"
                className="group/bd relative inline-flex shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-pill border border-white/70 px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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
          <div className="animate-fade-in-up w-full [animation-delay:200ms] lg:ml-auto lg:max-w-[36rem]">
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
