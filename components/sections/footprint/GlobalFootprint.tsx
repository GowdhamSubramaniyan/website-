import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { OfficeLocations } from "./OfficeLocations";

/** "Our Office Locations" — heading + the shared office locations UI (tabs,
 *  detail card, and a live Google Maps embed). */
export function GlobalFootprint() {
  return (
    <SectionWrapper id="global-footprint" background="white">
      <Reveal>
        <SectionHeading
          align="center"
          headline={<span className="text-teal">Our Office Locations</span>}
          description="Strategically positioned around the globe to serve our clients better."
          className="mx-auto"
        />
      </Reveal>
      <OfficeLocations className="mt-10" />
    </SectionWrapper>
  );
}
