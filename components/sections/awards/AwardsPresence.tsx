import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { presence } from "./awards.data";

/**
 * "Global Presence. Recognised Impact." — soft mint band. Teal heading + intro
 * on the left, two stat chips on the right, and the world map (with location
 * pins) spanning the full width below.
 */
export function AwardsPresence() {
  return (
    <section className="bg-[radial-gradient(130%_130%_at_12%_0%,#f5faf6_0%,#e6f1ec_48%,#d3e7df_100%)] py-16 text-ink md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-teal sm:text-4xl md:text-display">
              {presence.headline}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {presence.intro}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-5">
              {presence.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-[#a7c4c2] p-7">
                  <p className="text-5xl font-bold leading-none text-ink">
                    {s.value}
                  </p>
                  <p className="mt-3 text-base font-medium text-ink/80">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* World map — location pins are part of the artwork */}
        <Reveal className="mt-12">
          <Image
            src={presence.map.src}
            alt={presence.map.alt}
            width={1920}
            height={1080}
            sizes="100vw"
            className="mx-auto h-auto w-full max-w-5xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
