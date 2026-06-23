import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type ProductMap = {
  name: string;
  fit: string;
  description: string;
  cta: { label: string; href: string };
};

// Maps the four products to the sector needs they serve.
const PRODUCTS: ProductMap[] = [
  {
    name: "Essentials",
    fit: "For SMEs",
    description:
      "Fast, affordable ESG and emissions reporting for organisations needing lender, procurement, or compliance readiness.",
    cta: { label: "Explore Essentials", href: "/essentials" },
  },
  {
    name: "Essentials+",
    fit: "For growing organisations",
    description:
      "Advanced ESG and operational reporting with Scope 3 visibility, transition planning, and strategic reporting.",
    cta: { label: "Explore Essentials+", href: "/essentials-plus" },
  },
  {
    name: "Portfolio One",
    fit: "For portfolio scale",
    description:
      "Performance intelligence for multi-asset and multi-site operators managing complex portfolios.",
    cta: { label: "Explore Portfolio One", href: "/portfolio-one" },
  },
  {
    name: "Vision Zero Consult",
    fit: "For advisory support",
    description:
      "Specialist advisory and program delivery for strategy, implementation, and complex reporting.",
    cta: { label: "Explore Advisory", href: "/vz-consult" },
  },
];

/**
 * How We Help (Prompt 7) — maps the four products to sector needs, each as a
 * Card with a CTA to its product page.
 */
export function HowWeHelp() {
  return (
    <SectionWrapper background="white" id="how-we-help">
      <Reveal>
        <SectionHeading
          eyebrow="How We Help"
          headline="Matched to your sector's needs"
          description="Whatever your sector, there's a Vision Zero Connect solution sized to your operational and reporting needs — from entry-level reporting to portfolio-scale intelligence and specialist advisory."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.name} delay={(i % 4) * 80} className="flex">
            <Card className="h-full w-full gap-4">
              <span className="self-start rounded-pill bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal">
                {product.fit}
              </span>
              <h3 className="text-xl font-bold text-ink">{product.name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-ink/75">
                {product.description}
              </p>
              <Button
                href={product.cta.href}
                variant="dark"
                withArrow
                className="w-full"
              >
                {product.cta.label}
              </Button>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
