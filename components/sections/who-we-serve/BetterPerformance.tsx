import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Who We Serve closing section — light mint backdrop with the advisory photo
 * enlarged and bleeding off the LEFT edge, and the "Built for Better Asset
 * Performance" headline, two-paragraph copy, and CTA on the RIGHT. Stacks on
 * mobile (image above copy).
 */
export function BetterPerformance() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_50%_25%,#f4f9f5_0%,#e7f0ea_62%,#dcece4_100%)] py-16 md:py-24 lg:min-h-[36rem]">
      <Container className="relative z-10">
        <div className="lg:ml-auto lg:w-[46%]">
          <Reveal>
            <h2 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Built for Better Asset Performance
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
              <p>
                Vision Zero Connect combines technology, intelligence, and
                advisory expertise to help organisations improve asset
                performance, strengthen decision-making, and unlock greater
                value across their portfolios.
              </p>
              <p>
                From individual assets to complex global portfolios, our
                solutions help organisations reduce inefficiencies, manage
                risk, improve visibility, and support stronger long-term
                returns.
              </p>
            </div>
            <div className="mt-9">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center rounded-pill bg-ink px-9 py-4 text-base font-semibold uppercase tracking-[0.08em] text-lime shadow-sm transition-all duration-200 hover:bg-[#0f1827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
              >
                Explore Our Solutions
              </Link>
            </div>
          </Reveal>

          {/* Image — stacked above the copy on mobile/tablet */}
          <Reveal delay={120} className="mt-10 lg:hidden">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl">
              <Image
                src="/assets/who-we-serve/meeting.png"
                alt="Advisory team reviewing asset performance data together"
                fill
                sizes="100vw"
                className="scale-[1.06] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Image — enlarged, anchored to and bleeding off the LEFT edge on desktop */}
      <div className="absolute inset-y-10 left-0 hidden w-[48%] overflow-hidden rounded-r-[2.5rem] lg:block">
        <Image
          src="/assets/who-we-serve/meeting.png"
          alt=""
          fill
          sizes="48vw"
          className="scale-[1.06] object-cover"
        />
      </div>
    </section>
  );
}
