import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
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
export default function PortfolioOnePage() {
  return (
    <>
      <Header brand="portfolio-one" />
      <main id="main">
        <PortfolioHero />
        <OverviewBlock />
        <IntelligentTools />
        <RealTimeMonitoring />
        <PerformanceRegister />
        <TwoUpCards />
        <ComplexPortfolios />
        <ImplementationProcess />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
