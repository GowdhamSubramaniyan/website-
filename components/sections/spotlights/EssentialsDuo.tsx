import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { ESSENTIALS, ESSENTIALS_PLUS } from "./spotlights.data";

/**
 * Essentials + Essentials+ combined into ONE section. On desktop the grey/dark
 * backgrounds are a single layer behind both panels, so the Essentials dashboard
 * floats over the internal boundary without being clipped or hidden. On mobile
 * each panel carries its own background and the dashboards stack in flow.
 */
export function EssentialsDuo() {
  return (
    <section id="essentials" className="relative">
      {/* Desktop background bands behind both panels (grey fixed, dark fills rest) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden lg:flex lg:flex-col"
      >
        <div className="bg-grey lg:h-[48rem]" />
        <div className="bg-grad-teal-band flex-1" />
      </div>

      {/* --- Essentials (grey) --- */}
      <Container className="relative bg-grey py-section-sm md:py-section lg:min-h-[48rem] lg:bg-transparent">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-lg font-bold text-ink sm:text-xl">
              {ESSENTIALS.eyebrow}
            </span>
            <Image
              src={ESSENTIALS.logo.src}
              alt=""
              width={ESSENTIALS.logo.width}
              height={ESSENTIALS.logo.height}
              className={cn("w-auto", ESSENTIALS.logo.className)}
            />
          </div>
        </Reveal>

        <Reveal className="relative z-10 mt-8 lg:w-[42%]">
          <h2 className="text-grad-deep text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-display-sm">
            {ESSENTIALS.heading}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/80 sm:text-lg">
            {ESSENTIALS.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button
              href={ESSENTIALS.cta.href}
              variant={ESSENTIALS.cta.variant}
              size="lg"
              className="font-semibold uppercase tracking-wide"
            >
              {ESSENTIALS.cta.label}
            </Button>
          </div>

          {/* Mobile image */}
          <div className="mt-10 lg:hidden">
            <Image
              src={ESSENTIALS.image.src}
              alt={ESSENTIALS.image.alt}
              width={ESSENTIALS.image.width}
              height={ESSENTIALS.image.height}
              sizes="100vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </Reveal>

        {/* Desktop dashboard — right, large, overlaps down into the dark band.
            Anchored to the panel bottom so the overlap is consistent at any width. */}
        <div className="pointer-events-none absolute bottom-[-7rem] left-[46%] hidden w-[92%] lg:block xl:w-[84%]">
          <Image
            src={ESSENTIALS.image.src}
            alt=""
            width={ESSENTIALS.image.width}
            height={ESSENTIALS.image.height}
            sizes="80vw"
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </Container>

      {/* --- Essentials+ (dark) --- */}
      <Container className="bg-grad-teal-band relative py-section-sm md:py-section lg:min-h-[54rem] lg:bg-none">
        <span id="essentials-plus" className="absolute -top-20" aria-hidden />
        <Reveal>
          <div className="flex items-center">
            <Image
              src={ESSENTIALS_PLUS.logo.src}
              alt=""
              width={ESSENTIALS_PLUS.logo.width}
              height={ESSENTIALS_PLUS.logo.height}
              className={cn("w-auto", ESSENTIALS_PLUS.logo.className)}
            />
          </div>
        </Reveal>

        <Reveal className="relative z-10 mt-8 lg:ml-auto lg:w-[42%]">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
            {ESSENTIALS_PLUS.heading}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
            {ESSENTIALS_PLUS.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button
              href={ESSENTIALS_PLUS.cta.href}
              variant={ESSENTIALS_PLUS.cta.variant}
              size="lg"
              className="font-semibold uppercase tracking-wide"
            >
              {ESSENTIALS_PLUS.cta.label}
            </Button>
          </div>

          {/* Mobile image */}
          <div className="mt-10 lg:hidden">
            <Image
              src={ESSENTIALS_PLUS.image.src}
              alt={ESSENTIALS_PLUS.image.alt}
              width={ESSENTIALS_PLUS.image.width}
              height={ESSENTIALS_PLUS.image.height}
              sizes="100vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </Reveal>

        {/* Desktop dashboard — full dashboard bled far left so the metric tiles show */}
        <div className="pointer-events-none absolute right-[42%] top-[4rem] hidden w-[104%] lg:block xl:w-[94%]">
          <Image
            src={ESSENTIALS_PLUS.image.src}
            alt=""
            width={ESSENTIALS_PLUS.image.width}
            height={ESSENTIALS_PLUS.image.height}
            sizes="80vw"
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </Container>
    </section>
  );
}
