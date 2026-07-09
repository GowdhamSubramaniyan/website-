import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { hero } from "./partner-page.data";

/**
 * Partners page hero — soft mint→grey gradient, an "Our Partners" eyebrow, a
 * solid-teal headline and grey intro copy with an "Explore Our Partners" CTA on
 * the left. The world globe is anchored to the right edge and pushed partly
 * off-screen so it reads as cut off by the frame.
 */
export function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(130%_130%_at_12%_0%,#f5faf6_0%,#e6f1ec_48%,#d3e7df_100%)] text-ink lg:min-h-[40rem]">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="lg:w-[52%]">
          <span className="animate-fade-in-up block text-sm font-semibold uppercase tracking-[0.16em] text-ink sm:text-base">
            {hero.eyebrow}
          </span>
          <h1 className="animate-fade-in-up mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-teal [animation-delay:120ms] sm:text-5xl md:text-display-lg">
            {hero.headline}
          </h1>
          <div className="animate-fade-in-up mt-7 max-w-xl space-y-4 text-sm leading-relaxed text-ink/70 [animation-delay:240ms] sm:text-base">
            {hero.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {/* Globe — stacked below copy on mobile/tablet */}
          <div className="animate-fade-in-up mt-12 lg:hidden">
            <Image
              src={hero.globe.src}
              alt={hero.globe.alt}
              width={1100}
              height={1100}
              preload
              sizes="80vw"
              className="mx-auto h-auto w-full max-w-md"
            />
          </div>
        </div>
      </Container>

      {/* Globe — anchored below the header on the right, bleeding off the right
          and bottom edges. Top offset keeps it clear of the fixed navbar. */}
      <div className="pointer-events-none absolute right-0 top-28 hidden lg:block">
        <Image
          src={hero.globe.src}
          alt=""
          width={1100}
          height={1100}
          preload
          sizes="760px"
          className="h-auto w-[600px] max-w-none translate-x-[16%] xl:w-[720px]"
        />
      </div>
    </section>
  );
}
