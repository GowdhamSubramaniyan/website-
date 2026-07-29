import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ADVISORY_SERVICES } from "./essentials-qha.data";

/**
 * "Strategic Advisory Team" — the human layer beyond the software. Dark teal
 * band with the VZ Consult wordmark, a centered intro, and a white card holding
 * a numbered (01–09) grid of hands-on services.
 */
export function AdvisoryTeam() {
  return (
    <section className="relative overflow-hidden bg-hero py-16 text-white md:py-24">
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Image
            src="/assets/home/logos/product-vzc-consult.png"
            alt="VZC Consult"
            width={335}
            height={183}
            className="mx-auto h-14 w-auto brightness-0 invert sm:h-16"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Strategic Advisory Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            Hands on support to go beyond reporting into real financial and
            environmental outcomes.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-5xl" delay={120}>
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ADVISORY_SERVICES.map((service, i) => (
                <li
                  key={service}
                  className="flex items-start gap-3 rounded-xl bg-mint px-4 py-4 text-sm font-semibold text-ink"
                >
                  <span className="grid h-6 w-7 shrink-0 place-items-center rounded-md bg-teal/10 text-xs font-bold text-teal">
                    0{i + 1}
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
