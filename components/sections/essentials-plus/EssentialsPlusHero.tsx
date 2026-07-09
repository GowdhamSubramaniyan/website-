import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ScrollCue } from "@/components/ui/ScrollCue";

/**
 * Essentials+ hero — light grey-blue backdrop (matching the Canva draft). The
 * dark headline + intro and the CTA sit on the left; the product walkthrough
 * video sits on the right. Columns stack on mobile. Top padding clears the
 * fixed header.
 */
export function EssentialsPlusHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#eef2f4_0%,#d2dde1_55%,#bccbd1_100%)] text-ink lg:min-h-[48rem]">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-44">
        <Link
          href="/"
          className="animate-fade-in-up mb-8 flex w-fit items-center gap-1.5 text-sm font-semibold text-[#2a363e]/70 transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span aria-hidden>&larr;</span>
          Back to Home
        </Link>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* Copy */}
          <div>
            <h1 className="animate-fade-in-up text-3xl font-bold leading-[1.08] tracking-tight text-[#2a363e] sm:text-4xl md:text-5xl">
              AI-Powered ESG &amp; Operational Reporting for Growing SMEs
            </h1>
            <p className="animate-fade-in-up mt-6 max-w-xl text-base leading-relaxed text-[#2a363e]/80 [animation-delay:240ms]">
              Essentials+ helps organisations move beyond basic ESG reporting with
              enhanced operational reporting, emissions visibility, and transition
              planning designed to support lender readiness, procurement
              requirements, and long-term operational resilience.
            </p>
            <div className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-4 [animation-delay:360ms]">
              <Link
                href="#pricing"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-pill bg-[#5e8a82] px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:bg-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              >
                Get Started Now
              </Link>
              <Link
                href="#contact"
                className="group/bd relative inline-flex shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-pill border border-[#2a363e]/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#2a363e] transition-colors duration-300 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
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
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
              <VideoEmbed
                youtubeId="aw2erPwC8Ks"
                logo={{ src: "/assets/home/logos/product-essentials-plus.png", alt: "Essentials+" }}
                posterAlt="Watch how Essentials+ works"
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
