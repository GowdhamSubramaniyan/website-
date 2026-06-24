import { Header, Footer } from "@/components/layout";
import {
  Hero,
  USP,
  ProductsSection,
  EssentialsDuo,
  PortfolioDuo,
  SectorsSection,
  InsightsSection,
  ContactSection,
  GlobalFootprint,
} from "@/components/sections";

/**
 * HomePage — the single wrapper that assembles every section top-to-bottom,
 * framed by the global Header and Footer.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero + Products share one continuous gradient — no seam between them */}
        <div className="bg-hero">
          <Hero />
          <ProductsSection />
        </div>
        <USP />
        <EssentialsDuo />
        <PortfolioDuo />
        <SectorsSection />
        <InsightsSection />
        <ContactSection />
        <GlobalFootprint />
      </main>
      <Footer />
    </>
  );
}
