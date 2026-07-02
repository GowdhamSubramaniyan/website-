import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Essentials hero — teal radial backdrop (bright teal spotlight up top fading to
 * dark teal at the edges, sampled from the Canva draft). Eyebrow + lime headline
 * + intro and the two CTAs sit on the left ~half; the pre-angled dashboard PNG
 * bleeds off the right edge of the screen on large screens (stacks below the
 * copy on mobile). Top padding clears the fixed header.
 */
export function EssentialsHero() {
  return (
    <section className="relative z-10 bg-essentials-hero text-white lg:min-h-[42rem]">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-44">
        <Link
          href="/"
          className="animate-fade-in-up mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span aria-hidden>&larr;</span>
          Back to Home
        </Link>
        <div className="lg:w-[44%]">
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
          <div className="animate-fade-in-up mt-8 flex items-center gap-6 [animation-delay:360ms]">
            <Link
              href="#pricing"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-pill bg-teal px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Get Started Now at €700
            </Link>
          </div>

          {/* Dashboard — stacked below copy on mobile/tablet */}
          <div className="animate-fade-in-up mt-12 [animation-delay:200ms] lg:hidden">
            <Image
              src="/assets/essentials/hero.png"
              alt="Essentials ESG reporting dashboard"
              width={1920}
              height={1080}
              sizes="100vw"
              className="h-auto w-full drop-shadow-2xl"
              preload
            />
          </div>
        </div>
      </Container>

      {/* Dashboard — pre-angled PNG bleeding off the right edge AND down into the
          "See How Essentials Works" section below (the bleed effect). */}
      <div className="pointer-events-none absolute right-0 top-[66%] hidden w-[800px] -translate-y-1/2 translate-x-[34%] lg:block xl:w-[960px]">
        <Image
          src="/assets/essentials/hero.png"
          alt=""
          width={1920}
          height={1080}
          sizes="54vw"
          className="animate-hero-image h-auto w-full drop-shadow-2xl"
          preload
        />
      </div>
    </section>
  );
}
