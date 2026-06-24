import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { PARTNERS } from "./partners.data";

/** "Global Partner Network" — intro copy + colour partner logos over a dotted map. */
export function Partners() {
  return (
    <SectionWrapper id="partners" background="white">
      <Reveal className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-teal sm:text-4xl md:text-display-sm">
          Global Partner Network
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
          Supporting organisations across Europe, Australia, Asia, the Middle
          East, and expanding global markets.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">
          With operational capability already established in Malta and growing
          international partnerships, Vision Zero Connect continues expanding its
          platform and advisory footprint globally.
        </p>
      </Reveal>

      <div className="relative mt-14">
        {/* Dotted world map backdrop */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image
            src="/assets/home/partners-map.png"
            alt=""
            width={1920}
            height={1080}
            sizes="100vw"
            className="h-auto w-full max-w-6xl object-contain"
          />
        </div>

        {/* Logos */}
        <Reveal className="relative mx-auto max-w-5xl py-8">
          <ul className="grid grid-cols-2 items-center gap-x-10 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
            {PARTNERS.map((partner) => (
              <li key={partner.name} className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={250}
                  height={100}
                  className="h-14 w-auto object-contain sm:h-16"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
