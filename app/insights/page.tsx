import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
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
export default function InsightsPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main">
        <InsightsHero />
        <FeaturedArticles />
        <InTheNews />
      </main>
      <Footer />
    </>
  );
}
