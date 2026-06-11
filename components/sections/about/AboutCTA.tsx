import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Closing call-to-action band on the brand-dark gradient, with the doc's
 * closing headline + body and a primary CTA through to Contact.
 */
export function AboutCTA() {
  return (
    <SectionWrapper background="dark">
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-display-sm">
            Your Data Already Contains the Answers
          </h2>
          <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Vision Zero Connect builds the technology, intelligence, and programs
            that help organisations reduce costs, strengthen operational
            performance, simplify compliance, and unlock measurable long-term
            value from real assets.
          </p>
          <Button href="/#contact" variant="primary" size="lg" withArrow>
            Talk to Our Team
          </Button>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
