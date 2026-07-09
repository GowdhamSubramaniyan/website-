import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "./ProductCard";
import { ProductCarousel } from "./ProductCarousel";
import { PRODUCTS } from "./products.data";

/**
 * "Four Products. One Intelligence Engine. Powered by Navigate." — the NAVIGATE
 * intro on the left with a coverflow carousel of the four products on the right
 * (desktop); stacks to full cards on mobile. Anchor target (#products) for the
 * hero / USP CTAs.
 */
export function ProductsSection() {
  return (
    <SectionWrapper id="products" background="transparent" className="pt-8 md:pt-12">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        {/* Left — intro copy */}
        <Reveal>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Four Products. One Intelligence Engine.{" "}
            <span className="text-lime">Powered by Navigate.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            <span className="font-semibold text-white">NAVIGATE</span> is the
            intelligence layer connecting the Vision Zero Connect ecosystem.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            It transforms fragmented operational, utility, sustainability, and
            asset data into actionable intelligence that supports compliance,
            portfolio visibility, operational efficiency, and financial
            decision-making.
          </p>
        </Reveal>

        {/* Right — carousel (desktop) / stacked cards (mobile) */}
        <Reveal delay={150}>
          <ProductCarousel products={PRODUCTS} />

          <div className="grid gap-5 lg:hidden">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.name} delay={i * 100} className="flex h-full">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
