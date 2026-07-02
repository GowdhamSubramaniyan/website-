import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { keepHyphens } from "@/lib/typography";
import { PORTFOLIO_ONE, VZ_CONSULT } from "./spotlights.data";

/**
 * Portfolio One + Vision Zero Consult combined into ONE section, mirroring
 * EssentialsDuo: the grey/dark backgrounds are a single layer behind both
 * panels, so the Portfolio One dashboard overlaps down onto the dark VZ Consult
 * band without being clipped.
 */
export function PortfolioDuo() {
  return (
    <section id="portfolio-one" className="relative">
      {/* Desktop background bands (grey fixed, dark fills rest) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden lg:flex lg:flex-col"
      >
        <div className="bg-grey lg:h-[48rem]" />
        <div className="bg-grad-dark flex-1" />
      </div>

      {/* --- Portfolio One (grey) --- */}
      <Container className="relative bg-grey py-section-sm md:py-section lg:min-h-[48rem] lg:bg-transparent">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-lg font-bold text-ink sm:text-xl">
              {PORTFOLIO_ONE.eyebrow}
            </span>
            <Image
              src={PORTFOLIO_ONE.logo.src}
              alt=""
              width={PORTFOLIO_ONE.logo.width}
              height={PORTFOLIO_ONE.logo.height}
              className={cn("w-auto", PORTFOLIO_ONE.logo.className)}
            />
          </div>
        </Reveal>

        <Reveal className="relative z-10 mt-8 lg:w-[42%]">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-teal sm:text-4xl md:text-display-sm">
            {PORTFOLIO_ONE.heading}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/80 sm:text-lg">
            {PORTFOLIO_ONE.paragraphs.map((p) => (
              <p key={p}>{keepHyphens(p)}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button
              href={PORTFOLIO_ONE.cta.href}
              variant={PORTFOLIO_ONE.cta.variant}
              size="lg"
              className="font-semibold uppercase tracking-wide"
            >
              {PORTFOLIO_ONE.cta.label}
            </Button>
          </div>

          {/* Mobile image */}
          <div className="mt-10 lg:hidden">
            <Image
              src={PORTFOLIO_ONE.image.src}
              alt={PORTFOLIO_ONE.image.alt}
              width={PORTFOLIO_ONE.image.width}
              height={PORTFOLIO_ONE.image.height}
              sizes="100vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </Reveal>

        {/* Desktop dashboard — right, large, overlaps down into the dark band.
            Anchored to the panel bottom so the overlap is consistent at any width. */}
        <div className="pointer-events-none absolute bottom-[-7rem] left-[46%] hidden w-[92%] lg:block xl:w-[84%]">
          <Image
            src={PORTFOLIO_ONE.image.src}
            alt=""
            width={PORTFOLIO_ONE.image.width}
            height={PORTFOLIO_ONE.image.height}
            sizes="80vw"
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </Container>

      {/* --- Vision Zero Consult (dark) --- */}
      <Container className="bg-grad-dark relative py-section-sm md:py-section lg:min-h-[40rem] lg:bg-none">
        <span id="vz-consult" className="absolute -top-20" aria-hidden />
        <Reveal>
          {/* Logo aligned to the left */}
          <div className="flex items-center">
            <Image
              src={VZ_CONSULT.logo.src}
              alt=""
              width={VZ_CONSULT.logo.width}
              height={VZ_CONSULT.logo.height}
              className={cn("w-auto", VZ_CONSULT.logo.className)}
            />
          </div>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
              {VZ_CONSULT.heading}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {VZ_CONSULT.paragraphs.map((p) => (
                <p key={p}>{keepHyphens(p)}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button
                href={VZ_CONSULT.cta.href}
                variant={VZ_CONSULT.cta.variant}
                size="lg"
                className="font-semibold uppercase tracking-wide"
              >
                {VZ_CONSULT.cta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:order-1">
            <Image
              src={VZ_CONSULT.image.src}
              alt={VZ_CONSULT.image.alt}
              width={VZ_CONSULT.image.width}
              height={VZ_CONSULT.image.height}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="mx-auto h-auto w-full max-w-sm rounded-2xl object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
