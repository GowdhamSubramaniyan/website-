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
<<<<<<< HEAD
      <OfficeLocations className="mt-10" />
=======

      {/* Location chips */}
      <ul className="mt-10 flex flex-wrap justify-center gap-4">
        {LOCATIONS.map((loc, i) => (
          <li key={loc.name}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "flex items-center gap-3 rounded-xl bg-teal px-5 py-3 text-left text-white transition-all hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2",
                i === active && "ring-2 ring-lime",
              )}
            >
              <Image
                src={PIN}
                alt=""
                width={400}
                height={400}
                className="h-5 w-5 shrink-0 brightness-0 invert"
              />
              <span>
                <span className="block text-sm font-semibold">{loc.name}</span>
                <span className="block text-xs text-white/70">{loc.detail}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Map with detail card */}
      <div className="relative mx-auto mt-12 max-w-5xl">
        <Image
          src="/assets/home/global-map-cropped.png"
          alt="World map showing Vision Zero Connect locations"
          width={1766}
          height={948}
          sizes="100vw"
          className="h-auto w-full object-contain"
        />

        {/* Location markers on the map */}
        {LOCATIONS.map((loc, i) => (
          <button
            key={loc.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${loc.name} — ${loc.detail}`}
            aria-pressed={i === active}
            style={{ top: loc.pos.top, left: loc.pos.left }}
            className="group absolute -translate-x-1/2 -translate-y-full focus-visible:outline-none"
          >
            {i === active && (
              <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 animate-ping rounded-full bg-lime/70" />
            )}
            <Image
              src={PIN}
              alt=""
              width={400}
              height={400}
              className={cn(
                "relative w-auto drop-shadow-md transition-all duration-200",
                i === active
                  ? "h-9"
                  : "h-6 opacity-80 group-hover:h-7 group-hover:opacity-100",
              )}
            />
          </button>
        ))}

        <div className="mx-auto mt-8 max-w-md lg:absolute lg:bottom-[3%] lg:left-[2%] lg:mt-0">
          <article className="rounded-2xl border border-grey bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <div className="flex items-center gap-3">
              <Image src={PIN} alt="" width={400} height={400} className="h-9 w-auto" />
              <div>
                <h3 className="text-2xl font-bold leading-tight text-ink">
                  {location.name}
                </h3>
                <p className="text-lg text-teal">{location.detail}</p>
              </div>
            </div>

            <dl className="mt-6 space-y-1.5 text-sm">
              {location.phone && (
                <Detail label="Phone" value={location.phone} />
              )}
              {location.email && (
                <Detail label="Email" value={location.email} />
              )}
              {location.timezone && (
                <Detail label="Time Zone" value={location.timezone} />
              )}
              {location.established && (
                <Detail label="Established" value={location.established} />
              )}
              {!location.phone && location.note && (
                <p className="text-ink/70">{location.note}</p>
              )}
            </dl>
          </article>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-ink/60">
        Please refer to the current website for the individual location details.
      </p>
>>>>>>> f20a0a7fd90f0fa72538a05c0f78d05a09d299e9
    </SectionWrapper>
  );
}
