import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectorCard } from "./SectorCard";
import { SECTORS } from "./sectors.data";

/** "Sectors We Serve" — intro + eight sector cards from a data array. */
export function SectorsSection() {
  return (
    <SectionWrapper id="sectors" background="mint">
      <SectionHeading
        headline={<span className="text-teal">Sectors We Serve</span>}
        description="Built for organisations where operational performance, compliance, and real asset visibility directly impact commercial outcomes."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SECTORS.map((sector) => (
          <SectorCard key={sector.name} sector={sector} />
        ))}
      </div>
    </SectionWrapper>
  );
}
