import { Header, Footer } from "@/components/layout";
import {
  Hero,
  USP,
  ProductsSection,
  EssentialsSection,
  EssentialsPlusSection,
  PortfolioOneSection,
  VZConsultSection,
  WhyVZC,
  SectorsSection,
  Partners,
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
        <Hero />
        <USP />
        <ProductsSection />
        <EssentialsSection />
        <EssentialsPlusSection />
        <PortfolioOneSection />
        <VZConsultSection />
        <WhyVZC />
        <SectorsSection />
        <Partners />
        <InsightsSection />
        <ContactSection />
        <GlobalFootprint />
      </main>
      <Footer />
    </>
  );
}
