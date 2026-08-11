import { Header, Footer, NewsletterPopup } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  Hero,
  USP,
  ProductsSection,
  EssentialsDuo,
  PortfolioDuo,
  InsightsSection,
  ContactSection,
  GlobalFootprint,
} from "@/components/sections";

const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-products", label: "Products" },
  { id: "tl-why", label: "Why VZC" },
  { id: "tl-essentials", label: "Introduction to Essentials" },
  { id: "tl-portfolio", label: "Introduction to Portfolio One" },
  { id: "tl-consult", label: "Introduction to Consult" },
  { id: "tl-insights", label: "Insights" },
  { id: "tl-contact", label: "Contact" },
];

/**
 * HomePage — the single wrapper that assembles every section top-to-bottom,
 * framed by the global Header and Footer.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        {/* Hero + Products share one continuous gradient — no seam between them */}
        <div className="bg-hero">
          <div id="tl-overview">
            <Hero />
          </div>
          <div id="tl-products">
            <ProductsSection />
          </div>
        </div>
        <div id="tl-why">
          <USP />
        </div>
        <div id="tl-essentials">
          <EssentialsDuo />
        </div>
        <div id="tl-portfolio">
          <PortfolioDuo />
        </div>
        <div id="tl-insights">
          <InsightsSection />
        </div>
        <div id="tl-contact">
          <ContactSection />
        </div>
        <GlobalFootprint />
      </main>
      <Footer />
      {/* Home page only, desktop exit intent — see NewsletterPopup */}
      <NewsletterPopup />
    </>
  );
}
