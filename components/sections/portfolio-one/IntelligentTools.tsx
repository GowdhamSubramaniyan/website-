import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "./FeatureCard";
import { tools, FEATURES } from "./portfolio-one.data";

/**
 * "Intelligent Tools Built for Real Asset Performance" — soft mint band with a
 * centered heading (teal) and the six capability cards in a responsive grid.
 */
export function IntelligentTools() {
  return (
    <SectionWrapper background="mint">
      <Reveal>
        <SectionHeading
          align="center"
          headline={<span className="text-teal">{tools.heading}</span>}
          description={tools.intro}
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.number} delay={i * 80}>
            <FeatureCard feature={feature} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
