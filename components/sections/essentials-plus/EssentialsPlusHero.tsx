import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Essentials+ hero — light grey-blue backdrop (matching the Canva draft). The
 * pre-angled dashboard bleeds off the LEFT edge on large screens; the dark
 * headline + intro and the two CTAs sit on the right ~half. The dashboard
 * stacks above the copy on mobile. Top padding clears the fixed header.
 */
export function EssentialsPlusHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#eef2f4_0%,#d2dde1_55%,#bccbd1_100%)] text-ink lg:min-h-[44rem]">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="lg:ml-auto lg:w-[46%]">
          <h1 className="animate-fade-in-up text-3xl font-bold leading-[1.08] tracking-tight text-[#2a363e] sm:text-4xl md:text-5xl">
            AI-Powered ESG &amp; Operational Reporting for Growing SMEs
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-xl text-base leading-relaxed text-[#2a363e]/80 [animation-delay:240ms]">
            Essentials+ helps organisations move beyond basic ESG reporting with
            enhanced operational reporting, emissions visibility, and transition
            planning designed to support lender readiness, procurement
            requirements, and long-term operational resilience.
          </p>
          <div className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-6 [animation-delay:360ms]">
            <Link
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-pill bg-[#5e8a82] px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:bg-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              Get Started Now
            </Link>
            <Link
              href="#video"
              className="group inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.12em] text-[#2a363e] transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              <PlayCircleIcon />
              See Essentials+ in Action
            </Link>
          </div>

          {/* Dashboard — stacked above copy on mobile/tablet */}
          <div className="animate-fade-in-up mt-12 [animation-delay:200ms] lg:hidden">
            <Image
              src="/assets/essentials-plus/hero.png"
              alt="Essentials+ operational intelligence dashboard"
              width={1350}
              height={1080}
              sizes="100vw"
              className="h-auto w-full drop-shadow-2xl"
              preload
            />
          </div>
        </div>
      </Container>

      {/* Dashboard — pre-angled PNG bleeding off the LEFT edge on large screens */}
      <div className="pointer-events-none absolute right-[50%] top-[56%] hidden w-[70vw] -translate-y-1/2 lg:block xl:w-[64vw]">
        <Image
          src="/assets/essentials-plus/hero.png"
          alt=""
          width={1350}
          height={1080}
          sizes="58vw"
          className="h-auto w-full max-w-none drop-shadow-2xl"
          preload
        />
      </div>
    </section>
  );
}

function PlayCircleIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:scale-110"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 10.5v11l9-5.5z" fill="currentColor" />
    </svg>
  );
}
