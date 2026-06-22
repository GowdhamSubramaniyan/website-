import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "./FeatureCard";
import { FEATURES } from "./features.data";

/**
 * Beyond Reporting. Built for Operational Readiness. (section 6) — dark navy
 * band with a lime two-line heading, intro, and the six FEATURES as numbered
 * cards in a 2-column grid, with a trailing "Get started now" link.
 */
export function Features() {
  return (
    <section id="features" className="bg-[#1b2630] py-16 text-white md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-lime sm:text-4xl md:text-5xl">
            <span className="block">Beyond Reporting.</span>
            <span className="block">Built for Operational Readiness.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            Essentials+ combines operational intelligence, advanced ESG
            reporting, and enhanced emissions visibility into one integrated
            platform.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.number} delay={i * 70}>
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-right">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white underline-offset-4 transition-colors hover:text-lime hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b2630]"
          >
            Get started now &rsaquo;
          </Link>
        </div>
      </Container>
    </section>
  );
}
