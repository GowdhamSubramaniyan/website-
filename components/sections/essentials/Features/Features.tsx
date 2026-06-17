import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "./FeatureCard";
import { FEATURES } from "./features.data";

/**
 * Powerful Features (Prompt 5) — teal band with a lime two-line heading, intro,
 * and the six FEATURES rendered as numbered cards in a 2-column grid, with a
 * trailing "Get started now" link.
 */
export function Features() {
  return (
    <section id="features" className="bg-[#0c8f84] py-16 text-white md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-lime sm:text-4xl md:text-5xl">
            <span className="block">Powerful Features.</span>
            <span className="block">Built for Business Readiness.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            Essentials combines automation, reporting, and operational ESG
            intelligence into one streamlined platform designed specifically for
            SMEs.
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
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white underline-offset-4 transition-colors hover:text-lime hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c8f84]"
          >
            Get started now &rsaquo;
          </Link>
        </div>
      </Container>
    </section>
  );
}
