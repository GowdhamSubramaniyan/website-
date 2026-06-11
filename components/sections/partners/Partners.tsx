import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PARTNERS } from "./partners.data";

/** "Global Partner Network" — intro copy + partner logo grid. */
export function Partners() {
  return (
    <SectionWrapper id="partners" background="white">
      <SectionHeading
        align="center"
        headline={<span className="text-teal">Global Partner Network</span>}
        description={
          <>
            Supporting organisations across Europe, Australia, Asia, the Middle
            East, and expanding global markets. With operational capability
            already established in Malta and growing international partnerships,
            Vision Zero Connect continues expanding its platform and advisory
            footprint globally.
          </>
        }
        className="mx-auto"
      />
      <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {PARTNERS.map((partner) => (
          <li key={partner.name} className="flex justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={250}
              height={100}
              className="h-12 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
