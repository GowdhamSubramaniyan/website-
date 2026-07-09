import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  AwardsHero,
  AwardSpotlights,
  DrivingProgress,
  AwardsPresence,
} from "@/components/sections/awards";
import { hero } from "@/components/sections/awards/awards.data";

export const metadata: Metadata = {
  title: "Awards & Recognitions — Vision Zero Connect",
  description: hero.paragraphs[0],
};

/**
 * AwardsPage — Awards & Recognitions. Assembled top-to-bottom between the global
 * Header and Footer. Sections are added per the build prompts; the hero is in
 * place (Prompts 1–2), with the award spotlights, progress, and presence
 * sections to follow.
 */
const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-awards", label: "Awards" },
  { id: "tl-progress", label: "Progress" },
  { id: "tl-presence", label: "Global" },
];

export default function AwardsPage() {
  return (
    <>
      <Header theme="light" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <AwardsHero />
        </div>
        <div id="tl-awards">
          <AwardSpotlights />
        </div>
        <div id="tl-progress">
          <DrivingProgress />
        </div>
        <div id="tl-presence">
          <AwardsPresence />
        </div>
      </main>
      <Footer />
    </>
  );
}
