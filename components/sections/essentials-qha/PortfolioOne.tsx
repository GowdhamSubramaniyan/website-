import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PORTFOLIO_ONE_PROVIDES } from "./essentials-qha.data";

/**
 * "Smarter Building Performance for Operators with Big Energy Bills" — the
 * Portfolio One cross-sell for larger/multi-site operators. Light section: intro
 * + "Portfolio One provides" checklist, closed by a teal summary band.
 */
export function PortfolioOne() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <Image
            src="/assets/home/logos/product-portfolio-one-teal.png"
            alt="Portfolio One"
            width={4019}
            height={1250}
            className="h-9 w-auto sm:h-11"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Smarter building performance for operators with big energy bills
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            For larger hotel groups, multi-site operators, or venues with high
            energy costs, Portfolio One delivers real-time building performance
            intelligence. By connecting your smart meters, utility feeds or BMS,
            it shows exactly how your buildings use energy and water — and where
            savings can be made immediately. Operators get live visibility,
            instant alerts, and clear business cases for upgrades, renewables and
            smarter procurement, benchmarked against their other sites.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
            Portfolio One provides
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {PORTFOLIO_ONE_PROVIDES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-grey/70 bg-mint px-4 py-3.5 text-sm text-ink/80"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl bg-grad-teal-band px-7 py-8 text-center text-white sm:px-10">
            <p className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed sm:text-xl">
              Portfolio One helps operators reduce costs, improve building
              performance, and stay ahead of regulatory and investor
              expectations.
            </p>
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
      className="mt-0.5 h-5 w-5 shrink-0 text-teal"
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
