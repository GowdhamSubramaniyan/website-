import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  ConsultHero,
  TrustedAdvisory,
  WhatWeHelpWith,
  BackedByTech,
  WhoWeWorkWith,
  CommercialApproach,
  GlobalPresence,
  ConsultCTA,
} from "@/components/sections/vz-consult";

export const metadata: Metadata = {
  title: "VZC Consult — Vision Zero Connect",
  description:
    "VZC Consult works with organisations navigating growing operational, reporting, and sustainability pressures across real assets and property portfolios.",
};

/**
 * VZCConsultPage — assembles the VZC Consult advisory sections top-to-bottom,
 * framed by the global Header and Footer, per the build prompts in
 * docs/Prompts/visionzeroconsult_prompts.md.
 */
const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-advisory", label: "Advisory" },
  { id: "tl-help", label: "What We Help" },
  { id: "tl-tech", label: "Technology" },
  { id: "tl-clients", label: "Who We Work With" },
  { id: "tl-approach", label: "Approach" },
  { id: "tl-presence", label: "Global" },
  { id: "tl-cta", label: "Contact" },
];

export default function VZCConsultPage() {
  return (
    <>
      <Header brand="vz-consult" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <ConsultHero />
        </div>
        <div id="tl-advisory">
          <TrustedAdvisory />
        </div>
        <div id="tl-help">
          <WhatWeHelpWith />
        </div>
        <div id="tl-tech">
          <BackedByTech />
        </div>
        <div id="tl-clients">
          <WhoWeWorkWith />
        </div>
        <div id="tl-approach">
          <CommercialApproach />
        </div>
        <div id="tl-presence">
          <GlobalPresence />
        </div>
        <div id="tl-cta">
          <ConsultCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
