export type Insight = {
  title: string;
  description: string;
  href: string;
  image: string;
};

/** Three insight cards — copy and link targets from the doc. */
export const INSIGHTS: Insight[] = [
  {
    title: "Awards",
    description:
      "Global award recognitions, industry achievements, and innovation milestones across ESG and building performance technology.",
    href: "/insights#news",
    image: "/assets/home/insight-awards.png",
  },
  {
    title: "Insights",
    description:
      "ESG insights, sustainability perspectives, regulatory updates, and industry intelligence shaping the future of real assets.",
    href: "/insights#featured",
    image: "/assets/home/insight-insights.png",
  },
  {
    title: "News",
    description:
      "Company announcements, partnerships, product developments, media features, and business updates from Vision Zero Connect.",
    href: "/insights#news",
    image: "/assets/home/insight-news.png",
  },
];
