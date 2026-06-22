import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  EssentialsPlusHero,
  WhyEssentialsPlus,
  VideoWalkthrough,
  SmarterWay,
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
export default function EssentialsPlusPage() {
  return (
    <>
      <Header brand="essentials-plus" theme="light" />
      <main id="main">
        <EssentialsPlusHero />
        <WhyEssentialsPlus />
        <VideoWalkthrough />
        <SmarterWay />
        <MoveBeyond />
        <Features />
        <BuiltForGrowing />
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
