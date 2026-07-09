import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
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
const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-mission", label: "Our Mission" },
  { id: "tl-what", label: "What We Do" },
  { id: "tl-approach", label: "Our Approach" },
  { id: "tl-presence", label: "Global" },
  { id: "tl-leadership", label: "Leadership" },
  { id: "tl-cta", label: "Contact" },
];

export default function AboutPage() {
  return (
    <>
      <Header theme="light" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <AboutHero />
        </div>
        <div id="tl-mission">
          <OurMission />
        </div>
        <div id="tl-what">
          <WhatWeDo />
        </div>
        <div id="tl-approach">
          <OurApproach />
        </div>
        <div id="tl-presence">
          <GlobalPresence />
        </div>
        <div id="tl-leadership">
          <Leadership />
        </div>
        <div id="tl-cta">
          <AboutCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
