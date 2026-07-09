import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  EssentialsHero,
  DontGetCaught,
  Features,
  SMEChallenges,
  Frameworks,
  Pricing,
  Insights,
  ContactSupport,
} from "@/components/sections/essentials";

const TIMELINE = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "readiness", label: "Get Ready" },
  { id: "challenges", label: "Challenges" },
  { id: "frameworks", label: "Frameworks" },
  { id: "pricing", label: "Pricing" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Essentials — Vision Zero Connect",
  description:
    "Essentials is AI-powered ESG and operational reporting built for SMEs — fast, affordable lender, procurement, and compliance readiness without expensive consultants.",
};

/**
 * EssentialsPage — assembles every Essentials section top-to-bottom, framed by
 * the global Header and Footer (Prompt 9). Backgrounds alternate dark → mint →
 * white for vertical rhythm; the hero carries the intro and the closing band
 * drives conversion.
 */
export default function EssentialsPage() {
  return (
    <>
      <Header brand="essentials" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <EssentialsHero />
        <Features />
        <DontGetCaught />
        <SMEChallenges />
        <Frameworks />
        <Pricing />
        <Insights />
        <ContactSupport />
      </main>
      <Footer />
    </>
  );
}
