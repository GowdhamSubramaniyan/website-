import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Closing section — "Your Data Already Contains the Answers". Soft mint
 * background with the doc's closing headline + paragraph on the left and a
 * team photo on the right.
 */
export function AboutCTA() {
  return (
    <section className="bg-[radial-gradient(130%_130%_at_12%_0%,#f2f8f4_0%,#e6f1ec_45%,#d6e9e2_100%)] py-16 text-ink md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <div>
              <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-teal sm:text-5xl md:text-6xl">
                Your Data Already Contains the Answers
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/80">
                Vision Zero Connect builds the technology, intelligence, and
                programs that help organisations reduce costs, strengthen
                operational performance, simplify compliance, and unlock
                measurable long-term value from real assets.
              </p>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl lg:ml-auto">
              <Image
                src="/assets/about/cta.png"
                alt="The Vision Zero Connect team reviewing data together"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 38rem, 90vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
