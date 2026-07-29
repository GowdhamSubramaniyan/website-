import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ESSENTIALS_PLUS_UNLOCKS } from "./essentials-qha.data";

/**
 * "For Operators Who Want Full ESG Readiness" — the Essentials+ upsell. Centered
 * intro on a dark teal band, then a single split card: a white panel with the
 * "Essentials+ unlocks" grid, and a deep-teal panel with the "who it's for"
 * message.
 */
export function EssentialsPlus() {
  return (
    <section className="relative overflow-hidden bg-grad-teal-band py-16 text-white md:py-24">
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Image
            src="/assets/home/logos/product-essentials-plus.png"
            alt="Essentials+"
            width={4325}
            height={1250}
            className="mx-auto h-11 w-auto sm:h-12"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            For Operators Who Want Full ESG Readiness
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            For venues wanting to go beyond basic compliance — and position
            themselves strongly with investors, lenders and insurers — Vision
            Zero Connect offers Essentials+, an expanded ESG intelligence
            platform.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-5xl" delay={120}>
          <div className="grid overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-[1.9fr_1fr]">
            {/* White panel — unlocks grid */}
            <div className="bg-white p-7 sm:p-9">
              <h3 className="text-lg font-bold text-ink">Essentials+ unlocks:</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {ESSENTIALS_PLUS_UNLOCKS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-mint px-4 py-3.5 text-sm font-semibold text-ink"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deep-teal panel — who it's for */}
            <div className="flex flex-col justify-center bg-[#006361] p-7 sm:p-9">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-sage/40 text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <p className="mt-5 text-lg font-bold leading-relaxed text-white">
                Essentials+ is ideal for operators who want automated reporting,
                deeper insights, and a clear pathway to long-term ESG leadership.
              </p>
            </div>
          </div>
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
      className="mt-0.5 h-4 w-4 shrink-0 text-teal"
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
