import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Insights hero (Canva) — light mint→sage gradient. The eyebrow + dark-teal
 * headline + intro sit in the upper area; the green-tinted skyline runs along
 * the bottom, cropped to the building band and faded softly into the gradient
 * (top mask) so there is no hard edge. "Explore Insights" scroll cue centered
 * just above the skyline.
 */
export function InsightsHero() {
  return (
    <section className="relative min-h-[46rem] overflow-hidden bg-[linear-gradient(180deg,#f4f9f3_0%,#e6efe9_38%,#bfd0c9_100%)] text-ink md:min-h-[52rem]">
      {/* Green skyline along the bottom — building band rising from the bottom
          edge (bases cut), tops fading softly into the gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_18%)]">
        <Image
          src="/assets/insights/denver-skyline.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-[50%_34%] opacity-95"
          priority
        />
      </div>

      <Container className="relative z-10 pb-40 pt-36 text-center md:pt-40">
        <span className="animate-fade-in-up text-base font-bold text-ink">
          Insights and Perspectives
        </span>
        <h1 className="animate-fade-in-up mt-4 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-[#2f5d54] [animation-delay:120ms] sm:text-5xl md:text-6xl mx-auto">
          Intelligence for Better Asset Performance
        </h1>
        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70 [animation-delay:240ms] sm:text-lg">
          Explore the latest perspectives, industry developments, and strategic
          insights shaping asset performance, operational efficiency, reporting
          requirements, and long-term value creation across global markets.
        </p>
      </Container>

      {/* Scroll cue, centered just above the skyline */}
      <Link
        href="#featured"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto inline-flex w-fit flex-col items-center gap-1 text-sm font-semibold text-ink/80 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="m6 15 6-6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Explore Insights
      </Link>
    </section>
  );
}
