import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollCue } from "@/components/ui/ScrollCue";

/**
 * About page hero — soft mint background, solid teal headline, the full intro
 * copy on the left and the team photo (1.png) under rounded corners on the
 * right. Top padding clears the fixed global header. Copy from the About doc.
 */
export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(130%_130%_at_12%_0%,#f2f8f4_0%,#e6f1ec_45%,#d6e9e2_100%)] text-ink">
      <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <span className="animate-fade-in-up block text-base font-semibold text-ink">
              About Vision Zero Connect.
            </span>
            <h1 className="animate-fade-in-up mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-teal [animation-delay:120ms] sm:text-6xl md:text-7xl">
              <span className="block">Real Assets.</span>
              <span className="block">Real Returns.</span>
            </h1>
            <div className="animate-fade-in-up mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ink/80 [animation-delay:240ms]">
              <p>
                Vision Zero Connect is a real asset intelligence platform
                provider focused on energy, operational performance, and
                compliance.
              </p>
              <p>
                We help organisations transform building, utility, and
                operational data into measurable financial and operational
                outcomes through intelligent technology, ESG reporting
                solutions, and specialist advisory support.
              </p>
              <p>
                Operating across the UK, Europe, Australia, and Hong Kong, with
                expanding presence across the Americas, MENA/GCC, and Asia,
                Vision Zero Connect supports organisations navigating rising
                operational costs, increasing ESG expectations, and growing
                regulatory complexity.
              </p>
            </div>
            <div className="animate-fade-in-up mt-10 [animation-delay:360ms]">
              <Button
                href="/#products"
                variant="dark"
                size="lg"
                className="uppercase tracking-[0.12em]"
              >
                Discover our Products
              </Button>
            </div>
          </div>

          {/* Team photo */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <div className="overflow-hidden rounded-3xl lg:ml-auto">
              <Image
                src="/assets/about/hero.png"
                alt="The Vision Zero Connect team in a meeting"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 38rem, 90vw"
                className="h-full w-full object-cover"
                preload
              />
            </div>
          </div>
        </div>
      </Container>
      <ScrollCue />
    </section>
  );
}
