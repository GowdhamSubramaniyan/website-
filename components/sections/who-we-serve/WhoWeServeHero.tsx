import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Who We Serve hero — light mint backdrop with a people/context image bleeding
 * off the LEFT edge on large screens and the eyebrow + dark-teal headline +
 * intro + CTA on the right ~half. Image stacks above the copy on mobile. Top
 * padding clears the fixed (light-theme) header.
 *
 * NOTE: the hero image is a placeholder — swap for the real cut-out group photo.
 */
export function WhoWeServeHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_85%_28%,#f5f9f6_0%,#e4efe9_58%,#d6e8e0_100%)] text-ink lg:min-h-[42rem]">
      {/* Image — left, bleeds off the edge on desktop */}
      <div className="absolute inset-y-0 left-0 hidden w-[46%] lg:block">
        <Image
          src="/assets/who-we-serve/hero.png"
          alt="Organisations across sectors that Vision Zero Connect serves"
          fill
          sizes="46vw"
          className="object-contain object-bottom"
          priority
        />
      </div>

      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="lg:ml-auto lg:w-[48%]">
          {/* Image on mobile (in flow) */}
          <div className="mb-10 lg:hidden">
            <Image
              src="/assets/who-we-serve/hero.png"
              alt="Organisations across sectors that Vision Zero Connect serves"
              width={1080}
              height={1080}
              sizes="100vw"
              className="mx-auto h-auto w-full max-w-sm"
            />
          </div>

          <span className="animate-fade-in-up block text-base font-bold text-ink">
            Who We Serve
          </span>
          <h1 className="animate-fade-in-up mt-4 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-[#2f5d54] [animation-delay:120ms] sm:text-5xl md:text-6xl">
            Supporting Organisations Responsible for Asset Performance
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-xl text-base leading-relaxed text-ink/75 [animation-delay:240ms] sm:text-lg">
            Vision Zero Connect works with organisations seeking greater
            operational visibility, improved asset performance, stronger
            reporting capabilities, and better long-term returns across complex
            asset portfolios.
          </p>
          <div className="animate-fade-in-up mt-9 [animation-delay:360ms]">
            <Link
              href="/#products"
              className="inline-flex items-center justify-center rounded-pill bg-[#2f5d54] px-9 py-4 text-base font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-all duration-200 hover:bg-[#244a43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2f5d54]"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
