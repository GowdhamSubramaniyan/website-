import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// Map pins, positioned as % of the world-map image to mirror the design
// (UK, Northern Europe, Hong Kong, Australia).
const PINS = [
  { label: "United Kingdom", left: "46.5%", top: "35%" },
  { label: "Northern Europe", left: "52%", top: "28%" },
  { label: "Hong Kong", left: "78.5%", top: "52%" },
  { label: "Australia", left: "86%", top: "80%" },
];

function MapPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 drop-shadow" fill="#0f1827" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 4.6 6.1 12.2 6.36 12.52a.82.82 0 0 0 1.28 0C12.9 21.2 19 13.6 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

/**
 * Global Presence — solid-teal headline and the doc's footprint copy on the
 * left, headline stats on the right, and a world map with location pins below.
 * Soft mint background, mirroring the rest of the light sections.
 */
export function GlobalPresence() {
  return (
    <section className="bg-[radial-gradient(130%_130%_at_12%_0%,#f2f8f4_0%,#e6f1ec_45%,#d6e9e2_100%)] py-16 text-ink md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Headline + copy */}
          <Reveal>
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-teal md:text-6xl">
                Global Presence
              </h2>
              <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ink/80">
                <p>
                  Vision Zero Connect supports organisations across sectors where
                  operational performance, compliance, and asset efficiency
                  directly impact commercial outcomes.
                </p>
                <p>
                  This includes healthcare, property portfolios, education,
                  hospitality, retail, logistics, infrastructure, manufacturing,
                  and multi-site operations.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-[#a7c4c2] p-7">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-medium text-ink/80">From 10+ to</span>
                  <span className="text-5xl font-bold leading-none text-ink">25+</span>
                </div>
                <p className="mt-3 text-base font-medium text-ink/80">
                  in-house industry experts
                </p>
              </div>
              <div className="rounded-2xl bg-[#a7c4c2] p-7">
                <p className="text-base font-medium text-ink/80">Offices in</p>
                <p className="text-5xl font-bold text-ink">4</p>
                <p className="mt-2 text-base font-medium text-ink/80">countries</p>
              </div>
              <div className="col-span-2 flex items-baseline gap-4 rounded-2xl bg-[#a7c4c2] p-7">
                <span className="text-5xl font-bold text-ink">US</span>
                <span className="text-lg font-semibold text-ink/80">
                  market expansion underway
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* World map */}
        <div className="relative mx-auto mt-14 w-full max-w-5xl">
          <Image
            src="/assets/home/global-map.png"
            alt="World map showing Vision Zero Connect locations"
            width={1920}
            height={1080}
            sizes="100vw"
            className="h-auto w-full object-contain"
          />
          {PINS.map((pin) => (
            <span
              key={pin.label}
              className="absolute -translate-x-1/2 -translate-y-full"
              style={{ left: pin.left, top: pin.top }}
              aria-label={pin.label}
            >
              <MapPin />
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
