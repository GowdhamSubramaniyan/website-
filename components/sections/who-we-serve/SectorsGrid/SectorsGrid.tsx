import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectorCard } from "./SectorCard";
import { SECTORS } from "./sectors.data";

/**
 * Sectors grid (Prompt 4) — heading + intro, then the eight sectors mapped into
 * SectorCards on a responsive 2/3/4-column grid. Each card links to its detail
 * spotlight (Prompt 5).
 */
export function SectorsGrid() {
  return (
    <SectionWrapper background="white" id="sectors-grid">
      <Reveal>
        <SectionHeading
          eyebrow="Sectors We Serve"
          headline="Built for organisations that run real assets"
          description="Across these sectors, operational performance, compliance, and asset visibility directly impact commercial outcomes."
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SECTORS.map((sector, i) => (
          <Reveal key={sector.slug} delay={(i % 4) * 80}>
            <SectorCard sector={sector} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
