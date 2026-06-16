import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StepCard } from "./StepCard";
import { process, STEPS } from "./portfolio-one.data";

/**
 * "A Structured Implementation Process" — soft mint band with a centered
 * heading and the four numbered step cards in a responsive row.
 */
export function ImplementationProcess() {
  return (
    <SectionWrapper background="mint">
      <Reveal>
        <SectionHeading
          align="center"
          headline={<span className="text-teal">{process.heading}</span>}
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 80}>
            <StepCard step={step} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
