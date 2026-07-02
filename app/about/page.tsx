import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  AboutHero,
  OurMission,
  WhatWeDo,
  OurApproach,
  Leadership,
  GlobalPresence,
  AboutCTA,
} from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About Us — Vision Zero Connect",
  description:
    "Vision Zero Connect is a real asset intelligence platform provider focused on energy, operational performance, and compliance across global markets.",
};

/**
 * AboutPage — assembles every About section top-to-bottom, framed by the
 * global Header and Footer. The hero carries the full intro copy; Our Mission
 * pairs the mission statement with the four outcome cards; What We Do presents
 * the product ecosystem.
 */
export default function AboutPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main">
        <AboutHero />
        <OurMission />
        <WhatWeDo />
        <OurApproach />
        <GlobalPresence />
        <Leadership />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
