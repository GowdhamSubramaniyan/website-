import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
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
export default function PartnersPage() {
  return (
    <>
      <Header light />
      <main id="main">
        <PartnerHero />
        <PartnerNetwork />
        <BuildingCollaboration />
        <GlobalReach />
      </main>
      <Footer />
    </>
  );
}
