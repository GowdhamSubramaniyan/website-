import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Serve Intro (Prompt 3) — a light/mint block explaining VZC's cross-sector
 * relevance, flowing visually from the dark hero into light content.
 */
export function ServeIntro() {
  return (
    <SectionWrapper background="mint">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Built for Real Assets"
          headline="One Platform for the Organisations That Run Real Assets"
          description="Across healthcare, property, education, hospitality, retail, construction, manufacturing, and logistics, organisations face the same pressures — rising ESG and lender expectations, fragmented operational data, and growing compliance complexity. Vision Zero Connect meets those shared challenges with one integrated platform."
          className="mx-auto"
        />
      </Reveal>
    </SectionWrapper>
  );
}
