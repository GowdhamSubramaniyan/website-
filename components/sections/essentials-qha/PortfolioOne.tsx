import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PORTFOLIO_ONE_PROVIDES } from "./essentials-qha.data";

/**
 * "Smarter Building Performance for Operators with Big Energy Bills" — the
 * Portfolio One cross-sell for larger/multi-site operators. Centered intro, then
 * a white card holding the "Portfolio One provides" grid with a deep-teal
 * summary band across its base.
 */
export function PortfolioOne() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Image
            src="/assets/portfolio-one/product-portfolio-one.png"
            alt="Portfolio One"
            width={4019}
            height={1250}
            className="mx-auto h-12 w-auto sm:h-16"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Smarter Building Performance for Operators with Big Energy Bills
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
            For larger hotel groups, multi-site operators, or venues with high
            energy costs, Portfolio One delivers real-time building performance
            intelligence. By connecting your smart meters, utility feeds, or BMS
            systems, it shows exactly how your buildings use energy and water and
            where savings can be made immediately. Operators get live visibility,
            instant alerts, and clear business cases for upgrades, renewables and
            smarter procurement and benchmarking against other sites.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-grey/60 bg-white shadow-2xl">
            <div className="p-7 sm:p-9">
              <h3 className="text-lg font-bold text-ink">Portfolio One provides:</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {PORTFOLIO_ONE_PROVIDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-grey/60 bg-[#f2f5f4] px-4 py-3.5 text-sm font-semibold text-ink"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deep-teal summary band across the card base */}
            <div className="bg-[#006361] px-7 py-7 text-center sm:px-10">
              <p className="mx-auto max-w-3xl text-base font-bold leading-relaxed text-white sm:text-lg">
                Portfolio One helps operators reduce costs, improve building
                performance, and stay ahead of regulatory and investor
                expectations.
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
