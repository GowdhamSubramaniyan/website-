import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SectionTimeline } from "@/components/ui/SectionTimeline";
import {
  InsightsHero,
  FeaturedArticles,
  InTheNews,
} from "@/components/sections/insights";

export const metadata: Metadata = {
  title: "Insights — Vision Zero Connect",
  description:
    "Insights and perspectives from Vision Zero Connect — the latest articles, industry developments, and recognitions shaping asset performance and sustainability.",
};

/**
 * InsightsPage — light hero over the green skyline, then the Featured Articles
 * and In The News bands on the dark teal surface, framed by the global Header
 * (light theme over the light hero) and Footer.
 */
const TIMELINE = [
  { id: "tl-overview", label: "Overview" },
  { id: "tl-featured", label: "Featured" },
  { id: "tl-news", label: "In The News" },
];

export default function InsightsPage() {
  return (
    <>
      <Header theme="light" />
      <SectionTimeline items={TIMELINE} />
      <main id="main">
        <div id="tl-overview">
          <InsightsHero />
        </div>
        <div id="tl-featured">
          <FeaturedArticles />
        </div>
        <div id="tl-news">
          <InTheNews />
        </div>
      </main>
      <Footer />
    </>
  );
}
