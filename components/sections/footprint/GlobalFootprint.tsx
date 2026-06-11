import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LOCATIONS } from "./footprint.data";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 4.6 6.1 12.2 6.36 12.52a.82.82 0 0 0 1.28 0C12.9 21.2 19 13.6 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

/** "Our Global Footprint" — subtext, location chips, and world map. */
export function GlobalFootprint() {
  return (
    <SectionWrapper id="global-footprint" background="white">
      <SectionHeading
        align="center"
        headline={<span className="text-teal">Our Global Footprint</span>}
        description="Strategically positioned around the globe to serve our clients better."
        className="mx-auto"
      />

      <ul className="mt-10 flex flex-wrap justify-center gap-4">
        {LOCATIONS.map((location) => (
          <li
            key={location.name}
            className="flex items-center gap-3 rounded-xl bg-teal px-5 py-3 text-white"
          >
            <PinIcon />
            <span>
              <span className="block text-sm font-semibold">{location.name}</span>
              <span className="block text-xs text-white/70">{location.detail}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <Image
          src="/assets/home/global-map.png"
          alt="World map showing Vision Zero Connect locations"
          width={1920}
          height={1080}
          sizes="100vw"
          className="mx-auto h-auto w-full max-w-5xl object-contain"
        />
      </div>

      <p className="mt-6 text-center text-sm text-ink/60">
        Please refer to the current website for the individual location details.
      </p>
    </SectionWrapper>
  );
}
