import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  PartnerHero,
  PartnerNetwork,
  BuildingCollaboration,
  GlobalReach,
} from "@/components/sections/partner-page";
import { hero } from "@/components/sections/partner-page/partner-page.data";

export const metadata: Metadata = {
  title: "Partners — Vision Zero Connect",
  description: hero.paragraphs[0],
};

/**
 * PartnersPage — the partner network page. Built section-by-section; the hero is
 * in place, with the Strategic Partnership Network and global presence sections
 * to follow.
 */
const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-network", label: "Network" },
  { id: "tl-collaboration", label: "Collaboration" },
  { id: "tl-reach", label: "Global Reach" },
];

export default function PartnersPage() {
  return (
    <>
      <Header theme="light" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <PartnerHero />
        </div>
        <div id="tl-network">
          <PartnerNetwork />
        </div>
        <div id="tl-collaboration">
          <BuildingCollaboration />
        </div>
        <div id="tl-reach">
          <GlobalReach />
        </div>
      </main>
      <Footer />
    </>
  );
}
