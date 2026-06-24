import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
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
export default function AwardsPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main">
        <AwardsHero />
        <AwardSpotlights />
        <DrivingProgress />
        <AwardsPresence />
      </main>
      <Footer />
    </>
  );
}
