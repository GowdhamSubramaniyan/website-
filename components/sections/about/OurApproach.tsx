import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Our Approach — "Built for Real-World Operations". Soft mint background with
 * the team photo on the left and a solid-teal headline plus the doc's two
 * supporting paragraphs on the right.
 */
export function OurApproach() {
  return (
    <section className="bg-[radial-gradient(130%_130%_at_12%_0%,#f2f8f4_0%,#e6f1ec_45%,#d6e9e2_100%)] py-16 text-ink md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/assets/about/built-operations.png"
                alt="A Vision Zero Connect team member at work"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 32rem, 90vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <div>
              <h2 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-teal sm:text-5xl md:text-6xl">
                Built for Real-World Operations
              </h2>
              <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ink/80">
                <p>
                  Vision Zero Connect supports organisations across sectors where
                  operational performance, compliance, and asset efficiency
                  directly impact commercial outcomes.
                </p>
                <p>
                  This includes healthcare, property portfolios, education,
                  hospitality, retail, logistics, infrastructure, manufacturing,
                  and multi-site operations.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
