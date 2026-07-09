import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  PortfolioHero,
  OverviewBlock,
  IntelligentTools,
  RealTimeMonitoring,
  PerformanceRegister,
  TwoUpCards,
  ComplexPortfolios,
  ImplementationProcess,
  PortfolioCTA,
} from "@/components/sections/portfolio-one";

export const metadata: Metadata = {
  title: "Portfolio One — Vision Zero Connect",
  description:
    "Portfolio One connects live building data, smart meters, and BMS systems into one intelligent platform, helping property and asset teams monitor performance, reduce operational waste, and optimise portfolios in real time.",
};

/**
 * PortfolioOnePage — assembles the Portfolio One product sections top-to-bottom,
 * framed by the global Header and Footer, per the build prompts in
 * docs/Prompts/portfolio_one_prompts.md.
 */
const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-walkthrough", label: "Walkthrough" },
  { id: "tl-tools", label: "Tools" },
  { id: "tl-monitoring", label: "Monitoring" },
  { id: "tl-register", label: "Register" },
  { id: "tl-portfolios", label: "Portfolios" },
  { id: "tl-process", label: "Process" },
  { id: "tl-cta", label: "Get Started" },
];

export default function PortfolioOnePage() {
  return (
    <>
      <Header brand="portfolio-one" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <PortfolioHero />
        </div>
        <div id="tl-walkthrough">
          <OverviewBlock />
        </div>
        <div id="tl-tools">
          <IntelligentTools />
        </div>
        <div id="tl-monitoring">
          <RealTimeMonitoring />
        </div>
        <div id="tl-register">
          <PerformanceRegister />
        </div>
        <TwoUpCards />
        <div id="tl-portfolios">
          <ComplexPortfolios />
        </div>
        <div id="tl-process">
          <ImplementationProcess />
        </div>
        <div id="tl-cta">
          <PortfolioCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
