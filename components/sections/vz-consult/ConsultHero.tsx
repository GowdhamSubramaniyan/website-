import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { hero } from "./vz-consult.data";

/**
 * VZC Consult hero — matches the home hero treatment: dark teal vignette
 * gradient (`bg-hero`), a bright-aqua eyebrow, a large lime headline, white
 * body copy, and a lime-gradient CTA on the left, with a large visual bleeding
 * off the right edge on desktop. The visual stacks below the copy on mobile.
 */
export function ConsultHero() {
  return (
    <section className="relative overflow-hidden bg-hero text-white lg:min-h-[44rem]">
      <Container className="relative z-10 pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="lg:w-[52%]">
          <span className="animate-fade-in-up block text-lg font-bold text-[#56cdbe]">
            {hero.eyebrow}
          </span>
          <h1 className="animate-fade-in-up mt-4 text-balance text-display-sm font-bold tracking-tight [animation-delay:120ms] sm:text-display md:text-display-lg">
            <GradientText variant="lime">{hero.headline}</GradientText>
          </h1>
          <div className="animate-fade-in-up mt-6 max-w-xl space-y-4 text-base leading-relaxed text-white/80 [animation-delay:240ms] sm:text-lg">
            {hero.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="animate-fade-in-up mt-8 [animation-delay:360ms]">
            <Button
              href={hero.cta.href}
              variant="primary"
              size="lg"
              className="font-semibold uppercase tracking-wide"
            >
              {hero.cta.label}
            </Button>
          </div>

          {/* Visual — stacked below copy on mobile/tablet */}
          <div className="animate-fade-in-up mt-12 [animation-delay:200ms] lg:hidden">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1080}
              height={1080}
              preload
              sizes="100vw"
              className="h-auto w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Container>

      {/* Visual — large, bleeding off the right edge on desktop */}
      <div className="pointer-events-none absolute right-0 top-[55%] hidden -translate-y-1/2 translate-x-[6%] lg:block">
        <Image
          src={hero.image.src}
          alt=""
          width={1200}
          height={1000}
          preload
          sizes="52vw"
          className="animate-hero-image h-auto w-[52vw] max-w-none rounded-2xl shadow-2xl xl:w-[48vw]"
        />
      </div>
    </section>
  );
}
