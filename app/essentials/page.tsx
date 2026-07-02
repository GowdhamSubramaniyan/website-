import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  EssentialsHero,
  VideoWalkthrough,
  DontGetCaught,
  Features,
  SMEChallenges,
  Frameworks,
  Pricing,
  Sectors,
  Insights,
  ContactSupport,
} from "@/components/sections/essentials";

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
      <main id="main">
        <EssentialsHero />
        <VideoWalkthrough />
        <Features />
        <DontGetCaught />
        <SMEChallenges />
        <Frameworks />
        <Pricing />
        <Sectors />
        <Insights />
        <ContactSupport />
      </main>
      <Footer />
    </>
  );
}
