import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { network, PARTNERS } from "./partner-page.data";

/**
 * "Strategic Partnership Network" — a bright-teal band with region-grouped
 * partner cards (darker teal): a lime region label, the partner logo on a white
 * tile, and a short description.
 */
export function PartnerNetwork() {
  return (
    <section id="network" className="scroll-mt-24 bg-[#0b9488]">
      <Container className="py-section-sm md:py-section">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-display-sm">
            {network.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            {network.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.name} delay={(i % 3) * 100} className="flex">
              <article className="flex w-full flex-col rounded-2xl bg-[#016261] p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-lime">
                  {partner.region}
                </span>
                <div className="mt-4 flex h-24 items-center justify-center rounded-xl bg-white p-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300}
                    height={120}
                    sizes="(min-width: 1024px) 22rem, 90vw"
                    className={cn(
                      "w-auto object-contain",
                      partner.logoClassName ?? "max-h-16",
                    )}
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/85">
                  {partner.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
