import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { keepHyphens } from "@/lib/typography";
import { SENTRI_PAGE_HERO, SENTRI_PAGE_INTRO } from "./sentri.data";

/**
 * Sections unique to the dedicated /sentri page. The Home, Commercial and
 * outro cards are shared with the home page section (see SentriSection).
 */

export function SentriPageHero() {
  const { home, commercial } = SENTRI_PAGE_HERO.images;

  return (
    <section className="overflow-hidden bg-sentri-surface">
      <Container className="pb-16 pt-32 md:pb-24 md:pt-40">
        <Link
          href="/"
          className="animate-fade-in-up mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-sentri-ink/60 transition-colors hover:text-sentri"
        >
          <span aria-hidden>&larr;</span>
          Back to Home
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-display-lg">
              <span className="text-sentri-ink">{SENTRI_PAGE_HERO.heading}</span>{" "}
              <span className="text-sentri">{SENTRI_PAGE_HERO.headingAccent}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
              {keepHyphens(SENTRI_PAGE_HERO.body)}
            </p>
          </div>

          {/* Two overlapping photos: home in front, commercial building behind */}
          <div className="animate-hero-image relative mx-auto aspect-[20/19] w-full max-w-lg">
            <Image
              src={commercial.src}
              alt={commercial.alt}
              width={commercial.width}
              height={commercial.height}
              sizes="(max-width: 1024px) 50vw, 300px"
              className="absolute right-0 top-0 h-auto w-[48%] rounded-2xl object-cover shadow-xl"
            />
            <Image
              src={home.src}
              alt={home.alt}
              width={home.width}
              height={home.height}
              priority
              sizes="(max-width: 1024px) 50vw, 300px"
              className="absolute bottom-0 left-[10%] h-auto w-[50%] rounded-2xl object-cover shadow-2xl ring-4 ring-white"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SentriPageIntro() {
  return (
    <section className="bg-white py-section-sm md:py-section">
      <Container>
        <Reveal className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-display">
            <span className="block text-sentri-ink">{SENTRI_PAGE_INTRO.heading}</span>
            <span className="block text-sentri">{SENTRI_PAGE_INTRO.headingAccent}</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg lg:border-l lg:border-slate-200 lg:pl-10">
            {keepHyphens(SENTRI_PAGE_INTRO.body)}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
