import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Essentials hero (Prompt 1) — teal radial backdrop with a bright top spotlight,
 * matching the Canva draft. Eyebrow + lime headline + intro and the two CTAs on
 * the left (a muted sage pill + a play link); the pre-angled dashboard PNG
 * bleeds off the right edge on large screens. Top padding clears the fixed
 * header.
 */
export function EssentialsHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_54%_-8%,#74a89e_0%,#34594f_46%,#13302c_100%)] text-white">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <span className="animate-fade-in-up block text-base font-semibold text-white">
              Essentials by Vision Zero Connect
            </span>
            <h1 className="animate-fade-in-up mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-lime [animation-delay:120ms] sm:text-5xl md:text-6xl">
              AI-Powered ESG &amp; Operational Reporting Built for SMEs
            </h1>
            <p className="animate-fade-in-up mt-8 max-w-xl text-base leading-relaxed text-white/85 [animation-delay:240ms]">
              Essentials helps SMEs generate professional ESG and operational
              reporting aligned to growing lender, procurement, investor, and
              customer expectations — without expensive consultants or manual
              reporting processes.
            </p>
            <div className="animate-fade-in-up mt-10 flex flex-wrap items-center gap-6 [animation-delay:360ms]">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-pill bg-[#6e8f87] px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:bg-[#5d7c74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get Started Now at €700
              </Link>
              <Link
                href="#video"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <PlayCircleIcon />
                See Essentials in Action
              </Link>
            </div>
          </div>

          {/* Product dashboard — pre-angled transparent PNG, bleeds off the right */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <div className="lg:w-[128%] lg:-mr-16 xl:-mr-28">
              <Image
                src="/assets/essentials/hero.png"
                alt="Essentials ESG reporting dashboard"
                width={1920}
                height={1080}
                sizes="(min-width: 1024px) 48rem, 90vw"
                className="h-auto w-full drop-shadow-2xl"
                preload
              />
            </div>
          </div>
        </div>
      </Container>
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
