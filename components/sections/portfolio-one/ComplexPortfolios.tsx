import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { portfolios } from "./portfolio-one.data";

/**
 * "Built for Complex Building Portfolios" — dark navy band with a residential
 * photo bleeding across the bottom (dark overlay for legibility). Centered lime
 * heading, lead line, and the supported-audience tags as lime pills.
 */
export function ComplexPortfolios() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden bg-navy py-section-sm text-white md:py-section lg:min-h-[42rem]">
      {/* Building photo bleeding across the bottom, bright, blended into the navy */}
      <Image
        src={portfolios.background.src}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        sizes="100vw"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] w-full object-cover object-[50%_42%]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-navy via-transparent to-transparent"
      />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
            {portfolios.headline}
          </h2>
          <p className="mt-5 text-lg font-semibold text-white">{portfolios.lead}</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {portfolios.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-pill bg-grad-lime px-5 py-2.5 text-sm font-semibold text-ink shadow-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
