import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "./products.data";

/**
 * "Four Products. One Intelligence Engine. Powered by Navigate." — intro to the
 * NAVIGATE intelligence layer plus the four product cards. Anchor target
 * (#products) for the hero / USP CTAs.
 */
export function ProductsSection() {
  return (
    <SectionWrapper id="products" background="transparent" className="pt-4 md:pt-8">
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
          Four Products. One Intelligence Engine.{" "}
          <span className="text-lime">Powered by Navigate.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
          <span className="font-semibold text-white">NAVIGATE</span> is the
          intelligence layer connecting the Vision Zero Connect ecosystem.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
          It transforms fragmented operational, utility, sustainability, and
          asset data into actionable intelligence that supports compliance,
          portfolio visibility, operational efficiency, and financial
          decision-making.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.name} delay={i * 120} className="flex h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
