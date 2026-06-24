/**
 * Single source of truth for the Insights page (Featured Articles + In The
 * News). Drives the featured spotlight, the article list, the news carousel,
 * and the per-item detail route.
 *
 * Copy + dates are transcribed from the Insights Canva. Images map to the
 * thumbnails in `assets/Insights Page/` (copied to `public/assets/insights/`).
 */

export type InsightCategory = "article" | "news";

export type InsightItem = {
  id: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  /** Display date exactly as shown in the design. */
  date: string;
  image: string;
  link: string;
  /** Articles: reading time, e.g. "5 min read". */
  readTime?: string;
  /** Articles: byline. */
  author?: string;
  /** Badge label override (e.g. "Featured", "Award", "Awards"). */
  tag?: string;
  /** The lead story in Featured Articles. */
  featured?: boolean;
};

/** Featured Articles — one featured + supporting list. */
export const ARTICLES: InsightItem[] = [
  {
    id: "scope-expands-is-your-building-on-the-list",
    title: "The Scope Expands: Is Your Building Now on the List?",
    excerpt:
      "If you own or manage a building in Hong Kong, the definition of “compliance” just got a lot broader…",
    category: "article",
    date: "13/01/2026",
    readTime: "5 min read",
    author: "Peter Dampier",
    image: "/assets/insights/hong-kong-harbour.png",
    link: "/insights/scope-expands-is-your-building-on-the-list",
    tag: "Featured",
    featured: true,
  },
  {
    id: "beeo-2025-new-5-year-audit-cycle",
    title: "BEEO 2025: New 5-Year Audit Cycle",
    excerpt:
      "In the world of building management, a decade is a lifetime. Ten years ago, smart sensors were considered a luxury…",
    category: "article",
    date: "13/01/2026",
    readTime: "5 min read",
    author: "Peter Dampier",
    image: "/assets/insights/boardroom-laptop.png",
    link: "/insights/beeo-2025-new-5-year-audit-cycle",
  },
  {
    id: "beeo-2025-amendments-mandatory-data-disclosure",
    title: "BEEO 2025 Amendments: What Mandatory Data Disclosure Means…",
    excerpt:
      "For decades, building energy performance in Hong Kong was largely a private affair…",
    category: "article",
    date: "13/01/2026",
    readTime: "5 min read",
    author: "Peter Dampier",
    image: "/assets/insights/charts-presentation.png",
    link: "/insights/beeo-2025-amendments-mandatory-data-disclosure",
  },
  {
    id: "turning-campuses-into-living-labs",
    title:
      "Turning Campuses into Living Labs: How Real-Time Data Prepares Students for…",
    excerpt:
      "Five years ago, sustainability in higher education was often relegated to environmental science departments or niche electives…",
    category: "article",
    date: "13/01/2026",
    readTime: "5 min read",
    author: "Peter Dampier",
    image: "/assets/insights/strategy-meeting.png",
    link: "/insights/turning-campuses-into-living-labs",
  },
];

/** In The News — media appearances, recognitions, milestones. */
export const NEWS: InsightItem[] = [
  {
    id: "facilities-management-awards-2026",
    title: "Vision Zero Connect recognised at the 2026 Facilities Management Awards",
    excerpt:
      "Vision Zero Connect has been named Leading Innovators in Building Intelligence Reporting 2026 at the Facilities Management Awards, recognising…",
    category: "news",
    date: "April 20, 2026",
    image: "/assets/insights/technology-lab.png",
    link: "/insights/facilities-management-awards-2026",
    tag: "Award",
  },
  {
    id: "best-esg-building-performance-platform",
    title: "Vision Zero Connect Awarded Best ESG & Building-Performance…",
    excerpt:
      "Vision Zero Connect (VZC), an award-winning business leading in ESG and PropTech technology, has been named Best ESG & Building-Performance SaaS Platform…",
    category: "news",
    date: "February 2, 2026",
    image: "/assets/insights/green-tower.png",
    link: "/insights/best-esg-building-performance-platform",
    tag: "Award",
  },
  {
    id: "esgfintech-100",
    title: "Vision Zero Connect Recognised in ESGFinTech 100",
    excerpt:
      "Vision Zero Connect is honoured to announce that it has been selected as one of the ESGFinTech 100 by FinTech Global — a showcase of the world’s…",
    category: "news",
    date: "November 12, 2025",
    image: "/assets/insights/workshop-planning.png",
    link: "/insights/esgfintech-100",
    tag: "Awards",
  },
];

/** All items, for the detail route lookup + static params. */
export const INSIGHTS: InsightItem[] = [...ARTICLES, ...NEWS];

/** The lead featured article (falls back to the first article). */
export function getFeaturedArticle(): InsightItem {
  return ARTICLES.find((item) => item.featured) ?? ARTICLES[0];
}

/** The supporting (non-featured) articles for the list beside the spotlight. */
export function getSupportingArticles(): InsightItem[] {
  return ARTICLES.filter((item) => !item.featured);
}

/** Look up a single item by its id/slug (used by the article detail route). */
export function getInsightBySlug(slug: string): InsightItem | undefined {
  return INSIGHTS.find((item) => item.id === slug);
}
