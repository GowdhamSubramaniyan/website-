import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectorsSection } from "@/components/sections";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  WhoWeServeHero,
  BetterPerformance,
} from "@/components/sections/who-we-serve";

export const metadata: Metadata = {
  title: "Who We Serve — Vision Zero Connect",
  description:
    "Vision Zero Connect supports the organisations responsible for asset performance — asset owners, investors, and portfolio managers seeking operational visibility and stronger long-term returns.",
};

/**
 * WhoWeServePage — assembles the Who We Serve sections top-to-bottom, framed by
 * the global Header (light theme over the light hero) and Footer. Matches the
 * Canva: light hero followed by the six audience cards on the dark teal band.
 */
const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-sectors", label: "Sectors" },
  { id: "tl-performance", label: "Performance" },
];

export default function WhoWeServePage() {
  return (
    <>
      <Header theme="light" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <WhoWeServeHero />
        </div>
        <div id="tl-sectors">
          <SectorsSection />
        </div>
        <div id="tl-performance">
          <BetterPerformance />
        </div>
      </main>
      <Footer />
    </>
  );
}
