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
  /** Full article body, rendered on the detail page. */
  body?: ArticleBlock[];
};

/** A single block of article body content. */
export type ArticleBlock =
  | { kind: "p"; text: string }
  | { kind: "em"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] };

/** Featured Articles — one featured + supporting list. */
export const ARTICLES: InsightItem[] = [
  {
    id: "the-future-of-esg-reporting-in-commercial-real-estate",
    title: "The Future of ESG Reporting in Commercial Real Estate",
    excerpt:
      "Discover how ESG Reporting is evolving in commercial real estate and why data-driven operational intelligence is becoming essential for asset value and performance.",
    category: "article",
    date: "22/07/2026",
    readTime: "8 min read",
    author: "Vision Zero Connect",
    image: "/assets/articles/images/article-1.png",
    link: "/insights/the-future-of-esg-reporting-in-commercial-real-estate",
    tag: "Featured",
    featured: true,
    body: [
      {
        kind: "p",
        text: "For years, ESG reporting in commercial real estate was a box-ticking ritual: gather the data, file the annual report, satisfy the regulator, and move on. The numbers rarely touched the way buildings were actually run.",
      },
      { kind: "p", text: "That era is ending." },
      {
        kind: "p",
        text: "Today, investors, lenders, insurers, tenants, and regulators increasingly expect commercial real estate owners to demonstrate not only environmental performance, but also how efficiently their assets are being managed. ESG reporting has evolved from a year-end reporting obligation into a business function that influences asset value, financing, operating costs, and long-term resilience.",
      },
      {
        kind: "p",
        text: "At the same time, commercial property portfolios are becoming more complex. Energy prices continue to fluctuate, buildings generate increasing volumes of operational data, and reporting requirements continue to expand across multiple jurisdictions. While organisations have access to more information than ever before, many still struggle to turn that information into meaningful action.",
      },
      {
        kind: "p",
        text: "The future belongs to organisations that ditch the spreadsheets and disconnected systems in favour of integrated, real-time operational intelligence. Rather than treating ESG as a standalone initiative, leading property owners are embedding sustainability data into the decisions they make every day.",
      },

      { kind: "h2", text: "Why ESG Reporting Is No Longer Just About Compliance" },
      { kind: "p", text: "Commercial real estate is being squeezed from every direction." },
      {
        kind: "p",
        text: "Investors are asking for greater transparency before committing capital. Financial institutions are incorporating sustainability performance into lending decisions. Occupiers increasingly prefer buildings that demonstrate lower operating costs and stronger environmental credentials. Governments continue to introduce new reporting requirements, while insurance providers are paying closer attention to operational risk.",
      },
      {
        kind: "p",
        text: "For property owners and asset managers, reporting now influences several critical business outcomes, including:",
      },
      {
        kind: "ul",
        items: [
          "Access to finance",
          "Asset valuations",
          "Operating efficiency",
          "Tenant attraction and retention",
          "Investment readiness",
          "Portfolio resilience",
        ],
      },
      {
        kind: "p",
        text: "In many cases, strong ESG performance is becoming a competitive advantage rather than simply a compliance requirement.",
      },
      {
        kind: "p",
        text: "There is a bigger idea underneath this shift. Every commercial building is two things at once: a place of operation and a financial asset. In capital-markets terms, property is a real asset — one class in a universe that also includes infrastructure, energy, and land — and that is the level at which investors, lenders, and insurers actually assess it. They don’t underwrite a boiler room; they underwrite an asset’s income, its risk, and, increasingly, its transition position: is this building on a credible decarbonisation pathway, or is it drifting towards becoming a stranded asset — carrying a ‘brown discount’, tighter finance, and growing regulatory exposure?",
      },
      {
        kind: "p",
        text: "The smartest operators have stopped asking, “How do we produce our ESG report?”",
      },
      { kind: "em", text: "They now ask, “How can ESG data help us run better buildings?”" },

      { kind: "h2", text: "The Growing Challenge for Commercial Property Owners" },
      {
        kind: "p",
        text: "While expectations continue to rise, many organisations still rely on fragmented processes to collect and manage data.",
      },
      {
        kind: "p",
        text: "Energy information often sits inside Building Management Systems. Utility invoices arrive from multiple suppliers. Asset performance data is spread across different platforms. Carbon calculations may be managed separately by sustainability teams, while operational information remains with facilities management.",
      },
      { kind: "p", text: "This creates several common challenges." },

      { kind: "h3", text: "Disconnected Data" },
      {
        kind: "p",
        text: "Commercial portfolios generate enormous amounts of operational information every day — but collecting data is not the same as understanding it. Without a central platform, teams burn hours manually stitching together information from multiple systems before reporting can even begin. The result: delayed reports, duplicated work, and blind spots across building performance.",
      },
      { kind: "h3", text: "Reporting Without Operational Insight" },
      {
        kind: "p",
        text: "Traditional ESG reporting is a rear-view mirror. By the time the annual report lands, the chances to cut costs or fix inefficiencies have already passed. Property owners need more than a record of what happened — they need to see what is happening now, so issues can be resolved before they become expensive.",
      },
      { kind: "h3", text: "Rising Energy Costs" },
      {
        kind: "p",
        text: "For most commercial portfolios, energy remains the single largest controllable operating expense — and even small efficiency gains compound into meaningful financial returns across dozens of buildings.",
      },
      {
        kind: "p",
        text: "Rather than reviewing utility data once a year, leading organisations monitor it continuously to spot waste, optimise consumption, and sharpen operational performance — substantial savings that also serve their broader sustainability goals.",
      },
      { kind: "h3", text: "Increasing Investor Expectations" },
      {
        kind: "p",
        text: "Institutional investors are getting sharper in how they assess real estate. Financial returns still matter, but so does operational resilience: confidence that a building is ready for tightening regulation, climate-related risk, and long-term efficiency demands.",
      },
      {
        kind: "p",
        text: "High-quality ESG reporting provides transparency, but only when it is backed by accurate, verifiable data.",
      },
      {
        kind: "p",
        text: "That is why reliable operational intelligence is becoming just as valuable as the report itself.",
      },

      { kind: "h2", text: "The Future of ESG Reporting Is Operational Intelligence" },
      {
        kind: "p",
        text: "The next generation of ESG reporting will be built around connected data rather than disconnected reporting exercises.",
      },
      {
        kind: "p",
        text: "Instead of gathering information once or twice a year, organisations are beginning to create continuous data ecosystems that connect operational performance, energy usage, asset information, and sustainability metrics into a single source of truth.",
      },
      {
        kind: "p",
        text: "Rather than reporting becoming the end goal, reporting becomes the natural output of better operational management.",
      },
      {
        kind: "p",
        text: "When organisations can monitor building performance in real time, several benefits follow naturally:",
      },
      { kind: "h3", text: "Better Decision Making" },
      {
        kind: "p",
        text: "Decision-makers gain immediate visibility into portfolio performance instead of relying on outdated reports — supporting faster, better-informed choices across every asset.",
      },
      { kind: "h3", text: "Improved Financial Performance" },
      {
        kind: "p",
        text: "Energy waste, equipment faults, and operational inefficiencies are flagged long before they become costly — cutting avoidable spend while improving environmental performance at the same time.",
      },
      { kind: "h3", text: "Stronger Investor Confidence" },
      {
        kind: "p",
        text: "Verified operational data builds confidence among investors, lenders, insurers, and other stakeholders: measurable performance backed by accurate data, not estimates and manual calculations.",
      },
      { kind: "h3", text: "Simplified Compliance" },
      {
        kind: "p",
        text: "As reporting requirements evolve globally, automated systems adapt with them — slashing administrative effort while keeping outputs consistent across multiple frameworks.",
      },

      { kind: "h2", text: "How Vision Zero Connect Is Redefining ESG Reporting" },
      {
        kind: "p",
        text: "Many technology platforms promise to simplify ESG reporting. Few address the bigger challenge facing commercial real estate: connecting operational data, energy performance, and sustainability reporting into a single intelligence platform.",
      },
      { kind: "p", text: "Vision Zero Connect was built around a different philosophy." },
      {
        kind: "p",
        text: "Rather than treating ESG as an isolated reporting function, the platform helps organisations turn real asset data into measurable financial returns. By connecting energy, operational, and sustainability data across an entire portfolio, organisations gain a clearer understanding of building performance while reducing the time and effort required to meet reporting obligations.",
      },
      {
        kind: "p",
        text: "The company’s mission is straightforward: help organisations reduce avoidable energy costs, improve asset performance, simplify compliance, and strengthen their financial position through better operational intelligence.",
      },
      {
        kind: "p",
        text: "The value of ESG reporting doesn’t come from producing another report. It comes from using reliable data to make better business decisions every day.",
      },

      { kind: "h2", text: "A Connected Approach to Real Asset Intelligence" },
      { kind: "p", text: "One of the biggest barriers to effective ESG reporting is fragmented information." },
      {
        kind: "p",
        text: "Building Management Systems, utility meters, maintenance records, supplier data, and sustainability metrics often operate independently, making it difficult to build a complete picture of portfolio performance.",
      },
      {
        kind: "p",
        text: "Vision Zero Connect addresses this challenge through a connected intelligence engine that standardises data from multiple sources, providing a single view of operational and ESG performance across an organisation’s portfolio.",
      },
      {
        kind: "p",
        text: "Instead of switching between multiple spreadsheets and software platforms, property owners and asset managers can access insights that support both operational improvements and reporting requirements.",
      },
      { kind: "p", text: "The result is less time spent collecting data and more time acting on it." },

      { kind: "h2", text: "Solutions Built for Every Stage of the ESG Journey" },
      {
        kind: "p",
        text: "Every organisation joins the ESG journey at a different point — some need to get compliant quickly, others are optimising complex international portfolios. Vision Zero Connect’s four solutions are built as a pathway that grows with you.",
      },
      { kind: "h3", text: "Essentials" },
      {
        kind: "p",
        text: "Essentials is the starting point: base reporting built for SMEs and organisations new to ESG, designed to get you compliant quickly and to know your Scope 1 and Scope 2 emissions.",
      },
      {
        kind: "p",
        text: "AI-assisted workflows guide data collection, and reports generate in minutes across multiple formats — audit-ready, traceable, and aligned to recognised reporting frameworks.",
      },
      {
        kind: "p",
        text: "Rather than spending weeks preparing reports manually, organisations can focus on understanding what their data is telling them.",
      },
      { kind: "h3", text: "Essentials+" },
      {
        kind: "p",
        text: "As your business grows, Essentials+ grows with you. Add modules as your reporting obligations expand — extending into Scope 3, from Category 6 business travel through supplier emissions analysis, procurement intelligence, transition planning, reduction pathway modelling, and decarbonisation planning.",
      },
      {
        kind: "p",
        text: "This is where organisations move beyond compliance and start building practical, data-driven climate strategies.",
      },
      { kind: "h3", text: "Portfolio One" },
      {
        kind: "p",
        text: "At the top of the range, Portfolio One is the most sophisticated tier: live operational intelligence for commercial real estate owners managing complex portfolios.",
      },
      {
        kind: "p",
        text: "Real-time dashboards integrate building and energy data so organisations can monitor performance, benchmark assets, and catch inefficiencies before they become expensive operational problems — with built-in ESG reporting readiness, so operational improvements feed straight into reporting requirements.",
      },
      {
        kind: "p",
        text: "For property managers, this is the shift from reactive facilities management to continuous portfolio optimisation.",
      },
      { kind: "h3", text: "VZC Consult" },
      { kind: "p", text: "Technology alone doesn’t solve every challenge." },
      {
        kind: "p",
        text: "VZC Consult supports organisations across the world with strategic guidance on ESG reporting, carbon and climate mechanics, operational decarbonisation, infrastructure delivery, finance structuring, and programme management.",
      },
      {
        kind: "p",
        text: "The advisory team works alongside the technology platform to translate insight into measurable commercial outcomes.",
      },

      { kind: "h2", text: "What This Looks Like in Practice" },
      {
        kind: "p",
        text: "Imagine a commercial property portfolio: dozens of office buildings across multiple locations, each generating thousands of data points every day.",
      },
      {
        kind: "p",
        text: "Without a connected platform, facilities teams spend considerable time collecting utility information, preparing reports, responding to maintenance issues, and explaining performance to investors.",
      },
      { kind: "p", text: "Now imagine that same portfolio operating with live operational intelligence." },
      {
        kind: "p",
        text: "Energy consumption is continuously monitored, and unexpected spikes trigger alerts before costs escalate. Building performance is benchmarked across the portfolio, and reporting data is collected automatically throughout the year rather than assembled in a scramble at reporting time.",
      },
      {
        kind: "p",
        text: "Senior management gains immediate visibility into portfolio-wide performance, while sustainability teams spend less time preparing reports and more time identifying opportunities for improvement.",
      },
      {
        kind: "p",
        text: "Instead of ESG reporting becoming an annual project, it becomes part of everyday operational management.",
      },

      { kind: "h2", text: "The Commercial Benefits Extend Well Beyond Compliance" },
      {
        kind: "p",
        text: "Although ESG reporting is often discussed in regulatory terms, its business impact reaches much further.",
      },
      {
        kind: "p",
        text: "Whether you are an SME getting Scope 1 and 2 compliant on Essentials or an asset manager running a complex portfolio on Portfolio One, your ESG reporting is doing far more than ticking the ESG box. It is strengthening the financial position of the business itself: improving the bottom line through lower operating costs, supporting the top line through tenant attraction and retention, satisfying financial reporting and due diligence, sharpening your attractiveness to lenders and investors, enhancing returns — and driving the transition to a better future through measurable reductions in greenhouse gas emissions and carbon footprint.",
      },
      {
        kind: "p",
        text: "Commercial real estate organisations adopting connected operational intelligence are positioning themselves to achieve benefits such as:",
      },
      {
        kind: "ul",
        items: [
          "Greater visibility across complex property portfolios.",
          "Faster preparation of audit-ready ESG reports.",
          "Better support for investor, lender, and stakeholder due diligence.",
          "Stronger long-term resilience as sustainability expectations continue to evolve.",
        ],
      },
      {
        kind: "p",
        text: "For many organisations, these commercial outcomes ultimately provide greater value than the compliance exercise itself.",
      },

      { kind: "h2", text: "Looking Ahead: The Next Chapter of ESG Reporting" },
      {
        kind: "p",
        text: "Commercial real estate is entering a period where operational performance and sustainability performance can no longer be treated separately.",
      },
      {
        kind: "p",
        text: "The organisations that lead the market over the next decade will not be the ones producing the longest ESG reports. They will be the ones making faster decisions, cutting operational waste, improving asset performance, and demonstrating measurable value through trusted, connected data.",
      },
      { kind: "p", text: "ESG reporting is no longer about documenting performance." },
      { kind: "p", text: "It is about improving it." },
      {
        kind: "p",
        text: "Platforms that combine operational intelligence with reporting capabilities will play an increasingly important role in helping organisations respond to changing investor expectations, rising energy costs, and an increasingly data-driven property market.",
      },
      {
        kind: "p",
        text: "For commercial real estate owners and managers, the future is not about collecting more data — it is about making better use of the data they already have.",
      },
      {
        kind: "p",
        text: "The future of ESG reporting in commercial real estate is being shaped by a simple but significant shift: from reporting after the fact to managing performance in real time.",
      },
      {
        kind: "p",
        text: "As sustainability expectations grow, organisations need more than compliance tools. They need clear visibility into how their buildings perform, where efficiencies can be gained, and how operational improvements translate into stronger financial outcomes.",
      },
      {
        kind: "p",
        text: "Vision Zero Connect supports this transition by bringing together operational intelligence, ESG reporting, and strategic advisory into a connected ecosystem that helps organisations improve performance, strengthen reporting, and unlock measurable value from their real assets.",
      },
      {
        kind: "p",
        text: "Whether you’re looking to improve ESG reporting, reduce energy costs, or gain greater visibility across your commercial property portfolio, Vision Zero Connect provides the tools and expertise to support every stage of the journey.",
      },
      {
        kind: "p",
        text: "Learn more about Essentials, Essentials+, Portfolio One, and VZC Consult, and see how connected operational intelligence can help turn your real asset data into measurable financial returns.",
      },
    ],
  },
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
