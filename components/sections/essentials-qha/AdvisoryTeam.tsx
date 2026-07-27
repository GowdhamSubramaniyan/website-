import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ADVISORY_SERVICES } from "./essentials-qha.data";

/**
 * "Strategic Advisory Team" — the human layer beyond the software. Dark teal
 * band with a grid of hands-on services covering finance, retrofit, compliance
 * and decarbonisation planning.
 */
export function AdvisoryTeam() {
  return (
    <section className="relative overflow-hidden bg-hero py-16 text-white md:py-24">
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            Strategic Advisory Team
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Support that goes beyond reporting
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            Hands-on support to move beyond reporting into real financial and
            environmental outcomes.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORY_SERVICES.map((service) => (
              <li
                key={service}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/90 transition-colors hover:border-lime/40 hover:bg-white/10"
              >
                <CheckIcon />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-lime"
    >
      <path
        d="M5 12.5l4 4 10-10.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
