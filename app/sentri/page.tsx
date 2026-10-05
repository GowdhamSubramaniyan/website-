import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import { Container } from "@/components/ui/Container";
import {
  SentriCommercialCard,
  SentriHomeCard,
  SentriOutro,
} from "@/components/sections/sentri/SentriSection";
import { SentriPageHero, SentriPageIntro } from "@/components/sections/sentri/SentriPageSections";

export const metadata: Metadata = {
  title: "Sentri — Vision Zero Connect",
  description:
    "Sentri brings detection, protective action and coordinated response together across homes, businesses and portfolios.",
};

const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-protection", label: "Connected Protection" },
  { id: "tl-home", label: "Sentri Home" },
  { id: "tl-commercial", label: "Sentri Commercial" },
];

/**
 * SentriPage — dedicated Sentri product page, per
 * "Vision Zero Connect - Sentri Page.pdf". Reuses the Home / Commercial cards
 * from the home page Sentri section.
 */
export default function SentriPage() {
  return (
    <>
      <Header theme="light" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <SentriPageHero />
        </div>
        <div id="tl-protection">
          <SentriPageIntro />
        </div>
        <section className="bg-sentri-surface py-section-sm md:py-section">
          <Container>
            <div id="tl-home">
              <SentriHomeCard />
            </div>
            <div id="tl-commercial">
              <SentriCommercialCard className="mt-8" />
            </div>
            <SentriOutro className="mt-8" ecosystemNote />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
