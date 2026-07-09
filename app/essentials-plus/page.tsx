import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  EssentialsPlusHero,
  WhyEssentialsPlus,
  MoveBeyond,
  Features,
  BuiltForGrowing,
  Frameworks,
  Pricing,
  Sectors,
  Insights,
  ContactSupport,
} from "@/components/sections/essentials-plus";

export const metadata: Metadata = {
  title: "Essentials+ — Vision Zero Connect",
  description:
    "Essentials+ is advanced ESG and operational reporting for growing organisations — Scope 3 visibility, transition planning, reduction modelling, and strategic reporting.",
};

/**
 * EssentialsPlusPage — assembles the Essentials+ sections top-to-bottom, framed
 * by the global Header (Essentials+ brand) and Footer. Sections are added
 * incrementally per the build prompts.
 */
const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-why", label: "Why Essentials+" },
  { id: "tl-features", label: "Features" },
  { id: "tl-frameworks", label: "Frameworks" },
  { id: "tl-pricing", label: "Pricing" },
  { id: "tl-sectors", label: "Sectors" },
  { id: "tl-insights", label: "Insights" },
  { id: "tl-contact", label: "Contact" },
];

export default function EssentialsPlusPage() {
  return (
    <>
      <Header brand="essentials-plus" theme="light" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <EssentialsPlusHero />
        </div>
        <div id="tl-why">
          <WhyEssentialsPlus />
        </div>
        <MoveBeyond />
        <div id="tl-features">
          <Features />
        </div>
        <BuiltForGrowing />
        <div id="tl-frameworks">
          <Frameworks />
        </div>
        <div id="tl-pricing">
          <Pricing />
        </div>
        <div id="tl-sectors">
          <Sectors />
        </div>
        <div id="tl-insights">
          <Insights />
        </div>
        <div id="tl-contact">
          <ContactSupport />
        </div>
      </main>
      <Footer />
    </>
  );
}
