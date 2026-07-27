import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ESSENTIALS_PLUS_UNLOCKS } from "./essentials-qha.data";

/**
 * "For Operators Who Want Full ESG Readiness" — the Essentials+ upsell. A dark
 * teal band: intro + the "Essentials+ unlocks" feature grid on the left, and a
 * highlighted "who it's for" card on the right.
 */
export function EssentialsPlus() {
  return (
    <section className="relative overflow-hidden bg-grad-teal-band py-16 text-white md:py-24">
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <Image
            src="/assets/home/logos/product-essentials-plus.png"
            alt="Essentials+"
            width={4325}
            height={1250}
            className="h-10 w-auto sm:h-12"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            For operators who want full ESG readiness
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            For teams wanting to go beyond basic compliance — and position
            themselves strongly with investors, lenders and insurers — Vision
            Zero Connect offers Essentials+, an expanded ESG intelligence
            platform.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          {/* Unlocks grid */}
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
              Essentials+ unlocks
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {ESSENTIALS_PLUS_UNLOCKS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm"
                >
                  <CheckIcon />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Who it's for */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-lime/30 bg-lime/10 p-7 lg:sticky lg:top-28">
              <PlusIcon />
              <p className="mt-4 text-lg font-semibold leading-relaxed text-white">
                Essentials+ is ideal for operators who want automated reporting,
                deeper insights, and a clear pathway to long-term ESG leadership.
              </p>
            </div>
          </Reveal>
        </div>
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

function PlusIcon() {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-full bg-lime text-ink">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M12 5v14M5 12h14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
