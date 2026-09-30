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
  | { kind: "ul"; items: string[] }
  /** Full-width teal feature statement (e.g. "That era is ending."). */
  | { kind: "highlight"; text: string }
  /** Intro line + a numbered grid of outcome cards (01, 02, …). */
  | { kind: "outcomes"; heading: string; items: string[] }
  /** Dark pull-quote block: a bold headline with an optional sub-line. */
  | { kind: "quote"; heading: string; text?: string }
  /** Teal closing block alternating small labels and big statements. */
  | { kind: "final"; lines: { text: string; big?: boolean }[] }
  /** Dark call-to-action band with a heading, supporting line, and button. */
  | { kind: "cta"; heading: string; text: string; href: string; label: string }
  /** Citation list closing an article — rendered as external links. */
  | {
      kind: "sources";
      heading: string;
      items: { label: string; href: string }[];
    };

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
      { kind: "highlight", text: "That era is ending." },
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
        kind: "outcomes",
        heading:
          "For property owners and asset managers, reporting now influences several critical business outcomes, including:",
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
        kind: "quote",
        heading: "Every commercial building is two things at once:",
        text: "A place of operation and a financial asset.",
      },
      {
        kind: "p",
        text: "There is a bigger idea underneath this shift. Every commercial building is two things at once: a place of operation and a financial asset. In capital-markets terms, property is a real asset — one class in a universe that also includes infrastructure, energy, and land — and that is the level at which investors, lenders, and insurers actually assess it.",
      },
      {
        kind: "p",
        text: "They don’t underwrite a boiler room; they underwrite an asset’s income, its risk, and, increasingly, its transition position: is this building on a credible decarbonisation pathway, or is it drifting towards becoming a stranded asset — carrying a ‘brown discount’, tighter finance, and growing regulatory exposure?",
      },
      {
        kind: "final",
        lines: [
          { text: "The smartest operators have stopped asking," },
          { text: "“How do we produce our ESG report?”", big: true },
          { text: "They now ask," },
          { text: "“How can ESG data help us run better buildings?”", big: true },
        ],
      },

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
      {
        kind: "cta",
        heading: "Ready to turn ESG reporting into a business advantage?",
        text: "Book a demonstration to see how Vision Zero Connect helps commercial property owners move beyond compliance.",
        href: "/#contact",
        label: "Book a Demo",
      },
    ],
  },
  {
    id: "rising-energy-costs-in-australia-and-across-the-world",
    title: "Rising Energy Costs in Australia and Across the World",
    excerpt:
      "Rising energy costs are reshaping businesses worldwide. Learn how operational intelligence and ESG reporting can reduce costs and improve resilience.",
    category: "article",
    date: "28/07/2026",
    readTime: "11 min read",
    author: "Vision Zero Connect",
    image: "/assets/articles/images/article-2.png",
    link: "/insights/rising-energy-costs-in-australia-and-across-the-world",
    body: [
      {
        kind: "p",
        text: "Energy has long been treated as a fact of life: a necessary operating expense that fluctuates with the market and sits largely outside a business’s control.",
      },
      { kind: "highlight", text: "That mindset is now a liability." },
      {
        kind: "p",
        text: "Across Australia and around the world, businesses are facing sustained increases in electricity, gas, and utility costs. Geopolitical uncertainty, ageing infrastructure, extreme weather events, growing electricity demand, and the transition towards lower-carbon energy systems are all contributing to higher operating expenses.",
      },
      {
        kind: "p",
        text: "For organisations managing commercial buildings, hotels, healthcare facilities, schools, or multi-site retail operations, rising energy costs are no longer simply a finance issue. They have become a strategic business challenge that directly affects profitability, competitiveness, and long-term growth.",
      },
      {
        kind: "p",
        text: "The organisations that respond successfully won’t necessarily be those consuming the least energy. Instead, they will be the ones with the visibility to understand where energy is being used, where it’s being wasted, and how operational decisions can deliver measurable savings.",
      },
      {
        kind: "p",
        text: "This is where technology, operational intelligence, and ESG reporting are beginning to reshape how organisations think about energy management.",
      },

      { kind: "h2", text: "Energy Costs Are Rising Across the Globe" },
      {
        kind: "p",
        text: "Energy markets have been through years of unprecedented volatility — and the pressure is not easing. The International Energy Agency expects global electricity demand to grow at a brisk 3.6% a year through 2030, with the next five years adding, on average, 50% more new demand each year than the previous decade.",
      },
      {
        kind: "p",
        text: "While the causes vary between regions, several common factors continue to place pressure on businesses worldwide:",
      },
      {
        kind: "ul",
        items: [
          "Growing demand for electricity driven by electrification and digital infrastructure — the IEA expects data-centre consumption alone to more than double by 2030, to roughly the entire electricity use of Japan today.",
          "Investment in renewable energy and grid modernisation.",
          "Global supply chain disruptions.",
          "Climate-related weather events affecting energy production.",
          "Increasing carbon reduction policies and emissions regulations.",
        ],
      },
      {
        kind: "p",
        text: "These pressures are expected to remain for the foreseeable future, making energy cost management a permanent business priority rather than a temporary response.",
      },
      {
        kind: "p",
        text: "For organisations operating across multiple countries, managing energy expenditure has become increasingly complex. Different regulations, reporting obligations, utility providers, and pricing structures mean there is no single solution that fits every market.",
      },
      {
        kind: "p",
        text: "Instead, businesses need better visibility into how energy is consumed across their entire portfolio.",
      },
      {
        kind: "p",
        text: "Notably for anyone who owns or operates property, the IEA expects the buildings sector to account for the largest share of that growth — around 49% of additional global electricity demand between 2025 and 2030.",
      },
      {
        kind: "quote",
        heading: "Buildings are not on the edge of this story;",
        text: "They are the centre of it.",
      },

      { kind: "h2", text: "Australia Is Feeling the Pressure" },
      { kind: "p", text: "Australia is the sharp end of the global trend." },
      {
        kind: "p",
        text: "Australian power costs surged 27% above CPI between June 2023 and June 2025 — and have risen roughly 206% since 2000. Business electricity now sits at around 166% of the world average price, and the regulator’s 2025–26 Default Market Offer lifted small business prices by up to a further 8.5%, depending on region and usage. Combined with rising sustainability expectations and evolving reporting requirements, organisations are being asked to do more with tighter operating budgets.",
      },
      {
        kind: "p",
        text: "Volatility is the other half of the story. In mid-2025, average wholesale prices jumped 139% in a single month — from around $96 to $232 per megawatt-hour — while the Australian Energy Regulator reported retail cost components rising by anywhere between 8% and 35% in a year. Prices don’t just rise; they swing. And it is the swings that punish organisations flying blind.",
      },
      {
        kind: "p",
        text: "For many businesses, energy is now one of the largest controllable expenses.",
      },
      {
        kind: "p",
        text: "Unlike fixed costs such as rent or insurance, energy consumption can often be reduced through better operational management, improved visibility, and smarter decision-making.",
      },
      {
        kind: "p",
        text: "The challenge is that many organisations still lack the tools to see where those opportunities exist. Without real-time operational data, energy waste goes unnoticed until utility bills arrive weeks later — by which point the opportunity to act has already passed.",
      },

      { kind: "h2", text: "Every Industry Is Feeling the Impact Differently" },
      {
        kind: "p",
        text: "Although rising energy prices affect every organisation, the commercial impact varies depending on the sector.",
      },
      {
        kind: "p",
        text: "Understanding these differences is critical when developing strategies to improve operational efficiency.",
      },
      { kind: "h3", text: "Commercial Real Estate and Property Management" },
      {
        kind: "p",
        text: "For commercial property owners and asset managers, energy represents one of the largest controllable operating costs across an entire portfolio.",
      },
      {
        kind: "p",
        text: "A single inefficient building can significantly reduce returns across multiple assets.",
      },
      {
        kind: "p",
        text: "At the same time, investors, lenders, and occupiers are placing greater weight on environmental performance — because in capital-markets terms, every building is a real asset, assessed on its income, its risk, and, increasingly, its transition position. Energy performance is no longer simply about reducing operating costs; it is becoming a driver of long-term asset value, financing terms, and investment decisions.",
      },
      {
        kind: "p",
        text: "Organisations that can continuously monitor building performance and identify inefficiencies are better positioned to improve returns while strengthening investor confidence.",
      },
      { kind: "h3", text: "Hospitality" },
      {
        kind: "p",
        text: "Hotels, resorts, and entertainment venues run around the clock — lighting, air conditioning, kitchens, laundry, refrigeration, and guest amenities all drawing power every hour of the day. ENERGY STAR benchmarking shows that hotels are among the most energy-intensive commercial building types due to their continuous operations and high demand for heating, cooling, lighting, laundry, kitchens, and guest services.",
      },
      {
        kind: "p",
        text: "Utilities typically run at around 3–4% of total hotel revenue, according to CBRE’s long-running industry data — a share that sounds modest until you remember it is one of the few costs management can actually move, and one that has been climbing fast: hotel utility costs jumped over 21% per available room in 2022 alone, and ENERGY STAR ranks energy as the lodging industry’s single fastest-growing operating cost.",
      },
      {
        kind: "p",
        text: "Reducing that waste doesn’t mean compromising the guest experience — it means understanding where energy is consumed unnecessarily and improving efficiency without touching service quality.",
      },
      {
        kind: "p",
        text: "As corporate travel programmes and booking platforms increasingly request sustainability information, energy performance is also becoming part of broader business competitiveness.",
      },
      { kind: "h3", text: "Healthcare and Aged Care" },
      {
        kind: "p",
        text: "Hospitals, clinics, and aged care facilities face a different constraint: they cannot simply cut energy use by limiting operations. Essential services run twenty-four hours a day, with continuous climate control, specialised medical equipment, and strict environmental conditions.",
      },
      {
        kind: "p",
        text: "As a result, improving operational efficiency becomes far more important than simply reducing consumption.",
      },
      {
        kind: "p",
        text: "Government procurement processes and funding programmes are also placing greater emphasis on sustainability performance, creating additional incentives for organisations to better understand and manage their operational data.",
      },
      { kind: "h3", text: "Schools and Educational Institutions" },
      {
        kind: "p",
        text: "Educational institutions balance limited budgets against considerable consumption — classrooms, libraries, laboratories, sports facilities, and accommodation all drawing power across sprawling campuses.",
      },
      {
        kind: "p",
        text: "For many institutions, every dollar saved on utilities can be redirected towards educational programmes, student services, or facility improvements.",
      },
      {
        kind: "p",
        text: "Many governments now offer funding for energy efficiency and sustainability initiatives — but securing it usually means demonstrating both current performance and a credible improvement plan, which makes reliable operational data increasingly valuable.",
      },
      { kind: "h3", text: "Retail, Food & Beverage and Multi-Site Operators" },
      {
        kind: "p",
        text: "Managing energy across multiple locations is a different challenge again: each site operates independently, receives separate utility invoices, and follows its own schedule, so comparing performance gets harder with every location added.",
      },
      {
        kind: "p",
        text: "Many operators still manually collect utility data from dozens — or even hundreds — of sites before analysis can begin, slowing decisions and hiding where the savings are.",
      },
      {
        kind: "p",
        text: "Automated operational dashboards provide a much clearer picture, allowing organisations to benchmark locations, identify underperforming sites, and prioritise improvements that deliver the greatest financial impact.",
      },

      { kind: "h2", text: "Why Cost Reduction Alone Isn’t Enough" },
      {
        kind: "p",
        text: "When organisations talk about energy management, the conversation usually centres on lowering utility bills. That matters — but focusing solely on consumption misses the bigger opportunity.",
      },
      {
        kind: "p",
        text: "Energy data tells a much broader story about how efficiently buildings are operating: unexpected consumption spikes flag equipment failures, shifting energy profiles reveal operational inefficiencies, and portfolio-wide comparison shows which assets perform best and why. In other words, energy data is operational intelligence.",
      },
      {
        kind: "p",
        text: "When organisations have access to accurate, connected information, they can make better decisions about maintenance, investment planning, asset management, and long-term capital allocation.",
      },
      {
        kind: "p",
        text: "This shift — from reacting to utility bills to proactively managing operational performance — is becoming one of the defining characteristics of leading organisations.",
      },

      { kind: "h2", text: "From Cost Centre to Strategic Asset" },
      {
        kind: "p",
        text: "The businesses best positioned for the future are no longer treating energy as an unavoidable expense — they are treating it as a source of operational insight and, increasingly, as evidence of the transition position that investors and lenders now assess at the asset level.",
      },
      {
        kind: "p",
        text: "By understanding how buildings perform in real time, organisations can reduce waste, improve efficiency, strengthen resilience, and prepare for an increasingly data-driven business environment.",
      },
      {
        kind: "p",
        text: "Increasingly, this operational visibility is also becoming the foundation for effective ESG reporting.",
      },
      {
        kind: "p",
        text: "Rather than collecting information once or twice a year, organisations are building connected data ecosystems that support both operational decision-making and sustainability reporting.",
      },
      {
        kind: "p",
        text: "This is the shift we explored in The Future of ESG Reporting in Commercial Real Estate: reporting stops being the end goal and becomes the natural output of better operational management.",
      },

      { kind: "h2", text: "How Vision Zero Connect Helps Organisations Take Control of Rising Energy Costs" },
      {
        kind: "p",
        text: "For many organisations, the challenge isn’t a lack of data. It’s a lack of visibility.",
      },
      {
        kind: "p",
        text: "Commercial buildings, schools, hotels, healthcare facilities, and retail portfolios generate vast amounts of information every day — from utility meters and Building Management Systems (BMS) to operational records and maintenance data. Yet much of this information remains disconnected, making it difficult to identify inefficiencies or understand where energy is being wasted.",
      },
      {
        kind: "p",
        text: "By the time monthly utility bills arrive, the opportunity to address unnecessary consumption has often passed.",
      },
      { kind: "p", text: "Vision Zero Connect was built to solve this problem." },
      {
        kind: "p",
        text: "Rather than viewing energy management and ESG reporting as separate activities, the company brings them together through a connected operational intelligence platform that helps organisations understand how their assets perform in real time. The result is better operational decisions, lower avoidable costs, and reporting that reflects actual performance rather than historical estimates.",
      },

      { kind: "h2", text: "Turning Data Into Better Business Decisions" },
      {
        kind: "p",
        text: "Every organisation collects data. Few consistently turn it into measurable business outcomes.",
      },
      {
        kind: "p",
        text: "Vision Zero Connect’s approach is based on a simple principle: operational data should help improve financial performance, not just satisfy reporting requirements.",
      },
      {
        kind: "p",
        text: "By connecting energy, operational, and sustainability information into a single intelligence platform, organisations gain a clearer understanding of what is happening across every building and every site.",
      },
      {
        kind: "p",
        text: "Instead of relying on manual spreadsheets or isolated systems, decision-makers can access real-time insights that support day-to-day operations while strengthening long-term planning.",
      },
      {
        kind: "p",
        text: "This shift enables businesses to move from reacting to energy costs to actively managing them.",
      },

      { kind: "h2", text: "One Connected Platform, Four Complementary Solutions" },
      {
        kind: "p",
        text: "Every organisation is at a different stage of its sustainability and operational maturity. Some are beginning their ESG reporting journey, while others are focused on improving performance across complex property portfolios.",
      },
      {
        kind: "p",
        text: "Vision Zero Connect supports these varying needs through four integrated solutions, built as a pathway that grows with you.",
      },
      { kind: "h3", text: "Essentials" },
      {
        kind: "p",
        text: "Many organisations want to improve sustainability reporting without adding unnecessary complexity.",
      },
      {
        kind: "p",
        text: "Essentials is the starting point: automated Scope 1 and Scope 2 ESG reporting built for SMEs and organisations that need to get compliant quickly and know their emissions.",
      },
      {
        kind: "p",
        text: "With AI-guided data collection, audit-ready records, and automated report generation, organisations can significantly reduce the administrative burden associated with sustainability reporting.",
      },
      {
        kind: "p",
        text: "Instead of spending weeks compiling information from multiple sources, teams can focus on understanding their results and identifying opportunities for improvement.",
      },
      { kind: "h3", text: "Essentials+" },
      {
        kind: "p",
        text: "As your business grows, Essentials+ grows with you — adding modules as your reporting obligations expand.",
      },
      {
        kind: "p",
        text: "It extends reporting into Scope 3, from Category 6 business travel through supplier emissions analysis, procurement intelligence, transition planning, and reduction pathway modelling.",
      },
      {
        kind: "p",
        text: "This allows organisations to move beyond compliance and build long-term strategies that align operational improvements with broader business objectives.",
      },
      { kind: "h3", text: "Portfolio One" },
      {
        kind: "p",
        text: "At the top of the range, Portfolio One provides live operational intelligence for organisations managing commercial property portfolios.",
      },
      {
        kind: "p",
        text: "Real-time dashboards connect building and energy data so facilities teams and asset managers can monitor performance continuously, detect unusual consumption before costs escalate, benchmark buildings across the portfolio, and support investment decisions with reliable performance data — rather than waiting for the monthly utility bill.",
      },
      {
        kind: "p",
        text: "For real estate organisations, energy management becomes part of asset management: stronger portfolio performance, and stronger investor and lender confidence.",
      },
      { kind: "h3", text: "VZC Consult" },
      {
        kind: "p",
        text: "Technology provides valuable insight, but turning insight into action often requires experience.",
      },
      {
        kind: "p",
        text: "VZC Consult supports organisations across the world with strategic guidance on ESG reporting, carbon and climate mechanics, operational performance, infrastructure planning, and programmes that deliver measurable financial and environmental outcomes.",
      },
      {
        kind: "p",
        text: "Rather than delivering recommendations in isolation, the advisory team helps organisations embed operational improvements into everyday decision-making.",
      },

      { kind: "h2", text: "What This Looks Like Across Different Industries" },
      {
        kind: "p",
        text: "The challenges may vary between sectors, but the objective remains the same: reduce avoidable costs while improving operational performance.",
      },
      { kind: "h3", text: "Commercial Real Estate" },
      {
        kind: "p",
        text: "A property manager overseeing dozens of commercial buildings can monitor energy performance across every asset from a single platform.",
      },
      {
        kind: "p",
        text: "If one building begins consuming significantly more electricity than comparable properties, the issue can be investigated immediately instead of remaining hidden until the next billing cycle.",
      },
      {
        kind: "p",
        text: "This supports faster maintenance decisions, improved operational efficiency, and stronger portfolio performance.",
      },
      { kind: "h3", text: "Hospitality" },
      {
        kind: "p",
        text: "A hotel group operating multiple locations can compare energy performance across every property.",
      },
      {
        kind: "p",
        text: "By identifying unusually high consumption patterns, operations teams can prioritise maintenance, optimise HVAC systems, and reduce unnecessary utility costs without compromising guest comfort.",
      },
      {
        kind: "p",
        text: "Lower operating costs improve profitability while providing reliable sustainability data that increasingly supports corporate travel requirements and procurement processes.",
      },
      { kind: "h3", text: "Schools and Universities" },
      {
        kind: "p",
        text: "Educational institutions often operate across multiple campuses with limited facilities budgets.",
      },
      {
        kind: "p",
        text: "Operational intelligence allows facilities teams to identify where energy is being wasted, prioritise improvement projects, and demonstrate measurable outcomes when applying for sustainability funding or infrastructure grants.",
      },
      {
        kind: "p",
        text: "Every efficiency improvement creates opportunities to redirect funding towards teaching, research, or student services.",
      },
      { kind: "h3", text: "Healthcare and Aged Care" },
      {
        kind: "p",
        text: "Healthcare environments require continuous operation, making operational efficiency essential.",
      },
      {
        kind: "p",
        text: "Live monitoring helps identify equipment or building performance issues before they become major operational problems, supporting both patient care and long-term cost management.",
      },
      {
        kind: "p",
        text: "Reliable performance data also strengthens reporting for government funding, procurement programmes, and sustainability initiatives.",
      },
      { kind: "h3", text: "Retail and Multi-Site Businesses" },
      {
        kind: "p",
        text: "Retailers and food service operators often struggle to compare performance across multiple locations.",
      },
      {
        kind: "p",
        text: "With automated dashboards, energy consumption can be benchmarked across every site, making it easier to identify underperforming locations and replicate best practices throughout the network.",
      },
      {
        kind: "p",
        text: "Rather than managing dozens of separate utility reports, decision-makers gain a single, portfolio-wide view of operational performance.",
      },

      { kind: "h2", text: "ESG Reporting Becomes More Valuable When It’s Connected to Operations" },
      {
        kind: "p",
        text: "One of the biggest misconceptions surrounding ESG reporting is that its value lies in the report itself.",
      },
      {
        kind: "p",
        text: "In reality, the report is only as valuable as the operational decisions that support it.",
      },
      {
        kind: "p",
        text: "When organisations monitor building performance continuously, sustainability reporting becomes a by-product of better operational management rather than a separate administrative exercise.",
      },
      {
        kind: "outcomes",
        heading: "This creates several advantages:",
        items: [
          "Greater confidence in reported data.",
          "Faster preparation of audit-ready reports.",
          "Reduced manual administration.",
          "Better support for investors, lenders, insurers, and regulators.",
          "Improved visibility across multiple assets.",
          "Stronger long-term operational resilience.",
        ],
      },
      {
        kind: "p",
        text: "Most importantly, organisations gain insights that improve financial performance throughout the year — not just at reporting time.",
      },

      { kind: "h2", text: "Looking Ahead: Energy Intelligence Will Define the Next Generation of Businesses" },
      {
        kind: "p",
        text: "Energy prices are unlikely to return to previous norms — and the volatility that now defines the market is here to stay.",
      },
      {
        kind: "p",
        text: "At the same time, stakeholder expectations around sustainability, operational transparency, and environmental performance will continue to increase.",
      },
      {
        kind: "p",
        text: "The organisations best prepared for this future won’t necessarily be those with the lowest bills today. They will be those with the greatest visibility into how their assets perform, where inefficiencies exist, and how operational improvements translate into measurable financial outcomes.",
      },
      {
        kind: "highlight",
        text: "This is where operational intelligence becomes a competitive advantage.",
      },
      {
        kind: "p",
        text: "Instead of treating energy as an unavoidable cost, leading organisations are beginning to view it as a strategic asset that informs better investment decisions, strengthens ESG performance, improves asset value, and supports long-term business resilience.",
      },
      {
        kind: "p",
        text: "Rising energy costs are reshaping how organisations think about operations, investment, and sustainability.",
      },
      {
        kind: "p",
        text: "Across commercial real estate, hospitality, healthcare, education, and multi-site retail, the challenge is no longer simply reducing utility bills. It is about gaining the operational visibility needed to make faster, smarter decisions that improve both financial and environmental performance.",
      },
      {
        kind: "p",
        text: "Vision Zero Connect supports this transformation by connecting energy, operational, and sustainability data into one intelligent ecosystem. Through Essentials, Essentials+, Portfolio One, and VZC Consult, organisations can move beyond reactive energy management towards continuous operational improvement, stronger ESG reporting, and measurable business outcomes.",
      },
      {
        kind: "p",
        text: "As prices stay high and volatile, organisations that invest in operational intelligence today will be better positioned to reduce costs, strengthen resilience, and create long-term value across their portfolios.",
      },
      {
        kind: "p",
        text: "Whether you’re managing commercial buildings, hotels, healthcare facilities, educational campuses, or multi-site operations, understanding your energy data is the first step towards improving performance.",
      },
      {
        kind: "p",
        text: "Learn how Vision Zero Connect can help you reduce avoidable energy costs, simplify ESG reporting, and turn operational data into measurable financial returns through connected intelligence built for real assets.",
      },
      {
        kind: "cta",
        heading: "Ready to take control of rising energy costs?",
        text: "Book a demonstration to see how Vision Zero Connect turns your energy and operational data into measurable savings.",
        href: "/#contact",
        label: "Book a Demo",
      },
    ],
  },
  {
    id: "the-hospitality-esg-revolution-starts-now",
    title: "The Hospitality ESG Revolution Starts Now",
    excerpt:
      "Why sustainability is becoming a business imperative for hotels worldwide — and how ESG reporting turns operational data into lower costs and stronger performance.",
    category: "article",
    date: "11/08/2026",
    readTime: "10 min read",
    author: "Vision Zero Connect",
    image: "/assets/articles/images/qha-1.png",
    link: "/insights/the-hospitality-esg-revolution-starts-now",
    body: [
      {
        kind: "h3",
        text: "Why Sustainability Is Becoming a Business Imperative for Hotels Worldwide",
      },
      {
        kind: "p",
        text: "For many years, sustainability was often viewed as a long-term aspiration for the hospitality industry. It was associated with corporate responsibility initiatives, environmental certifications, or guest-facing programs designed to demonstrate a commitment to greener operations. While these efforts undoubtedly created value, they were often treated as standalone initiatives rather than fundamental business priorities.",
      },
      { kind: "highlight", text: "Today, that landscape has changed." },
      {
        kind: "p",
        text: "Across the globe, hospitality businesses are facing growing pressure to operate more efficiently, improve transparency, and demonstrate responsible environmental practices. Investors are placing greater emphasis on environmental, social, and governance (ESG) performance. Corporate clients increasingly include sustainability criteria in procurement decisions. Governments continue introducing climate-related reporting requirements, while guests are becoming more conscious of the environmental impact of where they stay, dine, and host events.",
      },
      {
        kind: "p",
        text: "At the same time, hotel operators continue to navigate rising energy prices, increasing operating costs, ageing infrastructure, and tighter profit margins. Improving sustainability is no longer simply about protecting the environment. It has become closely linked to improving operational performance and strengthening long-term business resilience.",
      },
      {
        kind: "p",
        text: "This shift represents one of the most significant changes the hospitality sector has experienced in recent years.",
      },
      {
        kind: "p",
        text: "The organisations leading this transition aren’t treating ESG as another compliance exercise. They’re recognising it as an opportunity to better understand their operations, improve efficiency, reduce unnecessary costs, and make more informed business decisions. Sustainability reporting is evolving beyond regulatory obligations to become a valuable source of operational intelligence.",
      },
      {
        kind: "p",
        text: "For hospitality businesses of every size, the question is no longer whether ESG will influence the future of the industry. The question is how quickly organisations can adapt and position themselves to benefit from this new way of operating.",
      },

      {
        kind: "h2",
        text: "Why Sustainability Has Become a Business Priority for Hospitality",
      },
      {
        kind: "p",
        text: "Few industries depend as heavily on efficient operations as hospitality.",
      },
      {
        kind: "p",
        text: "Hotels, resorts, serviced apartments, and hospitality venues consume significant amounts of electricity, water, gas, and other resources every day. Heating and cooling systems operate around the clock, commercial kitchens serve hundreds or thousands of guests, laundry facilities process enormous volumes of linen, and common areas must remain comfortable and welcoming regardless of occupancy levels. Every operational decision has an impact on both guest experience and business performance.",
      },
      {
        kind: "quote",
        heading: "Against this backdrop,",
        text: "Sustainability has become inseparable from operational efficiency.",
      },
      {
        kind: "p",
        text: "One of the biggest drivers of this shift is the continued rise in energy and utility costs. Across many regions, hospitality operators are experiencing increasing pressure to manage electricity, gas, and water consumption while maintaining the high standards guests expect. Unlike many fixed operating expenses, resource consumption often presents opportunities for meaningful improvement when organisations have access to accurate operational data.",
      },
      {
        kind: "p",
        text: "At the same time, expectations from stakeholders continue to evolve.",
      },
      {
        kind: "p",
        text: "Investors increasingly evaluate environmental performance as part of broader business risk assessments. Financial institutions are placing greater emphasis on organisational resilience and governance. Corporate clients frequently request sustainability information during procurement processes, while international hotel brands continue strengthening environmental standards across their portfolios. For many hospitality businesses, demonstrating responsible environmental management is becoming an important part of maintaining commercial relationships and remaining competitive.",
      },
      { kind: "p", text: "Guest expectations are changing as well." },
      {
        kind: "p",
        text: "Travellers today are more informed than ever before. Many actively seek accommodation providers that demonstrate responsible environmental practices, whether through energy efficiency, waste reduction, water conservation, or broader sustainability initiatives. While sustainability alone may not determine where every guest chooses to stay, it increasingly contributes to overall brand perception and customer trust.",
      },
      {
        kind: "p",
        text: "Regulation also continues to shape the conversation.",
      },
      {
        kind: "p",
        text: "Around the world, governments are introducing new climate-related reporting frameworks and sustainability disclosure requirements. While reporting obligations vary between countries and industries, the overall direction is consistent: greater transparency around environmental performance is becoming an expected part of doing business. Even organisations that are not currently required to report may experience increasing requests for emissions data from investors, lenders, supply chain partners, and corporate customers.",
      },
      {
        kind: "p",
        text: "Taken together, these developments illustrate that ESG is no longer simply an environmental initiative. It has become an important component of modern business management.",
      },
      {
        kind: "p",
        text: "Hospitality organisations that embrace this shift are finding that sustainability data provides valuable insights extending well beyond reporting obligations. It helps organisations understand how buildings perform, how resources are consumed, and where opportunities exist to improve operational efficiency while supporting long-term business growth.",
      },

      { kind: "h2", text: "Why It Matters for Every Hotel Operator" },
      {
        kind: "p",
        text: "For many hospitality leaders, sustainability reporting initially appears to be another administrative responsibility competing for already limited time and resources. However, organisations that move beyond this perception often discover that ESG reporting delivers value far beyond producing an annual report.",
      },
      {
        kind: "p",
        text: "Every hospitality business generates enormous volumes of operational information.",
      },
      {
        kind: "p",
        text: "Electricity bills, gas consumption, water usage, waste collection, equipment maintenance records, building management systems, occupancy data, procurement records, and asset performance metrics all contribute valuable insights into how efficiently a property operates. Yet in many organisations, this information remains scattered across multiple departments, software platforms, invoices, and spreadsheets.",
      },
      {
        kind: "p",
        text: "When operational data remains disconnected, identifying opportunities for improvement becomes considerably more difficult.",
      },
      {
        kind: "p",
        text: "A hotel may experience steadily increasing electricity costs without immediately recognising that an ageing HVAC system is operating inefficiently. A resort may continue consuming significantly more water than comparable properties because gradual increases are hidden within monthly utility bills. Refrigeration equipment may require increasing maintenance long before complete failure occurs, while lighting systems may continue operating unnecessarily outside occupied hours.",
      },
      {
        kind: "p",
        text: "These inefficiencies rarely emerge through financial reporting alone.",
      },
      {
        kind: "p",
        text: "ESG reporting encourages organisations to consolidate operational information into a more complete view of business performance. Rather than simply calculating emissions, businesses begin understanding how environmental performance connects directly to operational efficiency, maintenance planning, resource management, and long-term financial outcomes.",
      },
      {
        kind: "p",
        text: "For multi-property operators, this visibility becomes even more valuable. Comparing similar hotels across a portfolio allows management teams to identify high-performing locations, investigate differences in resource consumption, and share successful operational practices across multiple sites. Instead of managing each property independently, organisations gain a clearer understanding of portfolio-wide performance and where targeted improvements are likely to deliver the greatest impact.",
      },
      {
        kind: "p",
        text: "This shift transforms sustainability reporting from a compliance exercise into a practical management tool. Rather than collecting data simply because reporting requirements demand it, hospitality businesses begin using that information to improve everyday operations, reduce unnecessary expenditure, and support more informed business decisions.",
      },

      { kind: "h2", text: "Compliance Is Only the Beginning" },
      {
        kind: "p",
        text: "For many organisations, ESG reporting still marks the finish line. Once the required information has been collected, calculations completed, and reports submitted, attention quickly shifts back to day-to-day operations until the next reporting cycle begins.",
      },
      {
        kind: "p",
        text: "Yet the organisations achieving the greatest value from ESG take a very different approach.",
      },
      {
        kind: "p",
        text: "They understand that the report itself is not the most valuable outcome. Instead, the real value lies in the operational insights that the reporting process uncovers.",
      },
      {
        kind: "p",
        text: "Every sustainability report tells a story about how a business consumes resources, manages assets, and operates its facilities. It highlights where energy is being used, where emissions are generated, and how efficiently buildings perform over time. More importantly, it provides the information needed to identify opportunities that may otherwise remain hidden.",
      },
      {
        kind: "p",
        text: "A hotel may discover that one property consistently consumes significantly more electricity than others with similar occupancy rates. A resort may identify unusually high water consumption that points to inefficient irrigation systems or ageing infrastructure. Building performance data may reveal that heating, ventilation, and air conditioning equipment is operating outside optimal hours or requiring more energy than expected to maintain guest comfort.",
      },
      {
        kind: "p",
        text: "Without structured reporting, these patterns can be difficult to detect. Rising utility costs may simply be accepted as an unavoidable consequence of doing business, rather than symptoms of operational inefficiencies that can be addressed.",
      },
      {
        kind: "highlight",
        text: "With reliable ESG data, those inefficiencies become measurable.",
      },
      {
        kind: "p",
        text: "Once organisations understand where resources are being consumed, they can begin prioritising improvements that reduce operating costs while maintaining or even enhancing the guest experience. Maintenance schedules become more proactive. Equipment upgrades become easier to justify. Operational improvements can be measured over time, allowing businesses to evaluate which initiatives deliver the strongest return.",
      },
      {
        kind: "p",
        text: "This is where ESG reporting begins to create genuine commercial value.",
      },
      {
        kind: "p",
        text: "Rather than becoming another compliance activity completed once a year, sustainability reporting evolves into an ongoing source of operational intelligence that supports continuous improvement across the business.",
      },

      { kind: "h2", text: "The Hotels That Act Early Will Lead the Industry" },
      {
        kind: "p",
        text: "One of the greatest advantages hospitality businesses have today is time.",
      },
      {
        kind: "p",
        text: "Although sustainability expectations continue to evolve across global markets, organisations that begin building strong reporting processes now have the opportunity to prepare on their own terms rather than responding under pressure later.",
      },
      {
        kind: "p",
        text: "Developing reliable ESG reporting isn’t simply about selecting software or producing an annual disclosure. It involves understanding where operational data resides, improving data quality, establishing consistent reporting processes, and embedding sustainability into everyday decision-making. Businesses that begin this work early often experience a smoother transition than those waiting until reporting requirements become unavoidable.",
      },
      { kind: "p", text: "The benefits extend well beyond compliance." },
      {
        kind: "p",
        text: "Hotels that consistently monitor energy consumption are better positioned to identify opportunities for efficiency before costs escalate. Organisations tracking water usage can detect abnormal consumption patterns earlier. Property owners with greater visibility into asset performance are often able to make more informed decisions about maintenance, refurbishment, and capital investment.",
      },
      {
        kind: "p",
        text: "These improvements don’t happen overnight. They are built through consistent measurement, continuous analysis, and a commitment to making decisions based on reliable information.",
      },
      { kind: "p", text: "Early preparation also strengthens governance." },
      {
        kind: "p",
        text: "Boards, executive teams, and investors increasingly value organisations that demonstrate a structured approach to managing environmental performance alongside financial and operational outcomes. Sustainability reporting provides leadership with greater visibility into business risks while supporting more informed strategic planning.",
      },
      {
        kind: "p",
        text: "Hospitality businesses that invest in these capabilities today are likely to find themselves better prepared for changing regulations, evolving customer expectations, and increasing stakeholder scrutiny tomorrow.",
      },
      {
        kind: "p",
        text: "Perhaps most importantly, they position themselves to compete more effectively in a market where operational efficiency is becoming a defining advantage.",
      },

      { kind: "h2", text: "Turning ESG Data into Business Intelligence" },
      {
        kind: "p",
        text: "As hospitality organisations strengthen their sustainability strategies, one challenge consistently emerges: collecting, organising, and interpreting large volumes of operational data can quickly become a resource-intensive process.",
      },
      {
        kind: "p",
        text: "Utility bills, building systems, maintenance records, procurement data, and emissions calculations often exist across multiple platforms and departments. Bringing this information together manually can consume considerable time while increasing the likelihood of inconsistencies.",
      },
      { kind: "p", text: "Technology is helping change that." },
      {
        kind: "p",
        text: "Rather than treating ESG reporting as a separate administrative task, modern platforms are enabling hospitality businesses to integrate sustainability data into everyday operational management.",
      },
      {
        kind: "p",
        text: "Vision Zero Connect was developed with this objective in mind.",
      },
      {
        kind: "p",
        text: "Designed to help organisations simplify ESG reporting while gaining greater operational visibility, the platform enables businesses to transform sustainability data into practical business intelligence that supports better decision-making across finance, operations, and facilities management.",
      },
      {
        kind: "p",
        text: "For organisations beginning their ESG journey, Essentials provides an AI-powered reporting platform that streamlines emissions reporting. By uploading utility bills and operational information, businesses can automate emissions calculations and generate professional, audit-ready reports aligned with recognised reporting frameworks. This significantly reduces the manual effort traditionally associated with ESG reporting while providing organisations with consistent, reliable information they can use throughout the year.",
      },
      {
        kind: "p",
        text: "As sustainability programmes mature, Essentials+ extends these capabilities with broader ESG management, enhanced reporting, and deeper analytical insights that help organisations monitor progress and support long-term sustainability planning.",
      },
      {
        kind: "p",
        text: "For hospitality groups managing multiple properties, Portfolio One provides continuous visibility into building performance by connecting operational systems, utility data, and building information into a single platform. Real-time insights allow organisations to benchmark properties, identify inefficiencies earlier, monitor energy and water consumption, and make more informed decisions regarding maintenance, operational improvements, and capital investment.",
      },
      {
        kind: "p",
        text: "Rather than simply helping businesses produce reports, these solutions enable hospitality organisations to better understand how their buildings perform and where opportunities exist to improve efficiency, reduce costs, and strengthen long-term operational performance.",
      },

      { kind: "h2", text: "Looking Beyond Compliance" },
      {
        kind: "p",
        text: "Hospitality has always been an industry built on adapting to change.",
      },
      {
        kind: "p",
        text: "From evolving guest expectations and technological innovation to changing economic conditions and operational challenges, successful organisations have consistently found ways to improve how they operate while delivering exceptional experiences.",
      },
      {
        kind: "p",
        text: "Sustainability represents the next stage of that evolution.",
      },
      {
        kind: "p",
        text: "While climate reporting and ESG compliance continue to receive significant attention, the organisations creating the greatest value are looking beyond regulatory requirements. They recognise that sustainability data provides far more than a record of environmental performance. It offers a clearer understanding of how buildings operate, where resources are consumed, how assets perform, and where opportunities exist to improve efficiency across the business.",
      },
      {
        kind: "quote",
        heading: "The true return on ESG investment isn’t measured by the completion of a report.",
        text: "It’s measured by lower operating costs, stronger asset performance, better-informed investment decisions, improved operational visibility, and a more resilient organisation equipped to respond to future challenges.",
      },
      {
        kind: "p",
        text: "For hospitality businesses around the world, sustainability is no longer simply about meeting expectations. It’s about building smarter, more efficient operations that deliver lasting value for guests, investors, employees, and the business itself.",
      },
      {
        kind: "p",
        text: "Whether organisations are taking their first steps towards ESG reporting or seeking deeper operational intelligence across a multi-property portfolio, Vision Zero Connect’s solutions - including Essentials, Essentials+, and Portfolio One - help hospitality businesses simplify reporting, strengthen decision-making, and transform sustainability data into long-term business value.",
      },
      {
        kind: "cta",
        heading: "Ready to turn sustainability data into business value?",
        text: "Book a demonstration to see how Vision Zero Connect helps hospitality businesses simplify ESG reporting and improve operational performance.",
        href: "/#contact",
        label: "Book a Demo",
      },
    ],
  },
  {
    id: "beyond-compliance-turning-esg-data-into-financial-performance",
    title: "Beyond Compliance: Turning ESG Data into Financial Performance",
    excerpt:
      "How leading organisations turn ESG data into financial performance: lower costs, stronger valuations, better financing, and a credible transition position.",
    category: "article",
    date: "18/08/2026",
    readTime: "10 min read",
    author: "Vision Zero Connect",
    image: "/assets/articles/images/article-3.png",
    link: "/insights/beyond-compliance-turning-esg-data-into-financial-performance",
    body: [
      {
        kind: "p",
        text: "For much of the past decade, ESG reporting has been driven by compliance.",
      },
      {
        kind: "p",
        text: "As regulatory requirements expanded and investor expectations evolved, organisations invested heavily in collecting sustainability data, measuring emissions, and producing increasingly detailed reports. Success was often defined by meeting disclosure obligations, satisfying stakeholders, and demonstrating alignment with recognised reporting frameworks.",
      },
      {
        kind: "p",
        text: "While these objectives remain important, they no longer tell the whole story.",
      },
      {
        kind: "p",
        text: "Across industries, a more significant shift is taking place. Business leaders are beginning to recognise that the greatest value of ESG data is not found in the report itself, but in the operational and financial insights it can provide. Information collected to satisfy reporting requirements is now helping organisations identify energy inefficiencies, improve asset performance, reduce operating costs, and make better investment decisions.",
      },
      {
        kind: "p",
        text: "For organisations managing commercial property portfolios, hotels, healthcare facilities, educational campuses, or multi-site operations, this shift is particularly significant. These sectors generate substantial volumes of operational data every day, yet much of it remains underutilised. When connected and analysed effectively, that information becomes a powerful source of commercial intelligence, supporting decisions that strengthen financial performance while advancing sustainability objectives.",
      },
      {
        kind: "p",
        text: "The future of ESG reporting, therefore, is not simply about producing better reports. It is about making better decisions — and, increasingly, about how your assets are assessed by the people who fund them.",
      },

      { kind: "h2", text: "Compliance Has Become the Starting Point, Not the Destination" },
      {
        kind: "p",
        text: "The rapid evolution of sustainability regulation has transformed ESG reporting from a voluntary initiative into a core business responsibility. Across Australia, Europe, the United Kingdom, and many other markets, organisations face growing expectations from governments, investors, lenders, insurers, and customers to provide transparent, credible, and consistent sustainability information.",
      },
      {
        kind: "p",
        text: "Meeting these obligations remains essential. Regulatory compliance protects organisations from legal and reputational risk while providing stakeholders with greater confidence in reported performance. However, as reporting becomes more widespread, compliance alone offers little competitive advantage.",
      },
      {
        kind: "p",
        text: "Consider two organisations operating similar commercial property portfolios. Both submit compliant ESG reports. Both disclose comparable emissions data. On paper, they appear equally prepared for an increasingly sustainability-focused market.",
      },
      {
        kind: "p",
        text: "Yet one organisation has used its operational data to reduce avoidable energy consumption, improve building performance, prioritise maintenance, and strengthen asset valuations. The other has simply reported historical information without changing how its assets operate.",
      },
      {
        kind: "p",
        text: "Although their reports satisfy the same regulatory requirements, their commercial outcomes diverge sharply. In capital-markets terms, both portfolios are real assets — and investors, lenders, and insurers assess them at that level: income, risk, and, increasingly, transition position. The first portfolio can evidence a credible decarbonisation pathway; it commands stronger valuations, cheaper finance, and a better exit. The second is drifting towards a ‘brown discount’: weaker pricing, tighter lending terms, and growing regulatory exposure — the early symptoms of a stranded asset.",
      },
      {
        kind: "p",
        text: "This distinction illustrates why the market is moving beyond compliance. Investors, financiers, and executive leadership teams are becoming less interested in reporting as an administrative exercise and more interested in what organisations are doing with the information they collect.",
      },
      {
        kind: "p",
        text: "Increasingly, ESG data is being viewed as an indicator of operational maturity rather than simply regulatory readiness.",
      },

      { kind: "h2", text: "Every Organisation Is Collecting Data. Few Are Using It Well." },
      { kind: "p", text: "Modern organisations generate extraordinary amounts of operational information." },
      {
        kind: "p",
        text: "Commercial buildings produce continuous streams of data from Building Management Systems, smart meters, HVAC equipment, lighting controls, occupancy sensors, and utility infrastructure. Hotels monitor energy consumption across guest rooms, kitchens, conference facilities, and recreational spaces. Healthcare providers oversee complex environments where climate control, specialist equipment, and essential services operate around the clock. Educational institutions manage campuses with multiple buildings, ageing infrastructure, and fluctuating occupancy throughout the academic year.",
      },
      {
        kind: "highlight",
        text: "The challenge is rarely the availability of information — it is fragmentation.",
      },
      {
        kind: "p",
        text: "Energy data is often managed separately from finance systems. Facilities teams monitor building performance independently of sustainability teams. Procurement departments maintain supplier information that rarely connects with operational reporting. Utility invoices, maintenance records, and emissions calculations frequently reside in different software platforms, requiring extensive manual work before meaningful analysis can begin.",
      },
      {
        kind: "p",
        text: "As a result, organisations devote considerable time to collecting and reconciling information rather than interpreting it.",
      },
      {
        kind: "p",
        text: "More importantly, they miss opportunities to identify inefficiencies while they are occurring.",
      },
      {
        kind: "p",
        text: "An increase in overnight energy consumption may indicate faulty equipment. Rising utility costs across one building may reveal operational practices that differ from the rest of the portfolio. Maintenance trends may highlight assets approaching failure long before significant disruptions occur.",
      },
      {
        kind: "p",
        text: "When data remains disconnected, these insights often remain hidden until long after corrective action could have been taken.",
      },
      {
        kind: "p",
        text: "The organisations achieving the strongest financial outcomes are not necessarily those collecting more data. They are the ones creating a connected view of their operations, allowing information to move beyond reporting and become part of everyday decision-making.",
      },

      { kind: "h2", text: "From Reporting Performance to Improving Performance" },
      {
        kind: "p",
        text: "If ESG data has the potential to influence financial performance, why do so many organisations struggle to realise its value?",
      },
      {
        kind: "p",
        text: "The answer often lies in how ESG programmes have traditionally been implemented. In many businesses, sustainability reporting sits within a dedicated team responsible for compliance, while operational data remains with facilities managers, finance teams, procurement specialists, or asset managers. Although each function generates valuable information, these datasets are rarely brought together in a way that supports strategic decision-making.",
      },
      {
        kind: "p",
        text: "The consequence is that ESG reporting often becomes retrospective. Organisations can explain what happened over the previous financial year, but they have limited visibility into what is happening today or what action should be taken tomorrow.",
      },
      {
        kind: "p",
        text: "Leading organisations are approaching the challenge differently. They are moving away from treating sustainability as a reporting exercise and instead embedding ESG data into operational management. Rather than collecting information once or twice a year, they are monitoring performance continuously, allowing energy consumption, asset efficiency, emissions, and operational risks to be managed in real time.",
      },
      {
        kind: "p",
        text: "This shift fundamentally changes the role of ESG reporting. Instead of documenting historical performance, reporting becomes evidence of an organisation that actively manages its assets, understands its operations, and continually seeks opportunities for improvement.",
      },
      {
        kind: "p",
        text: "We set out this shift in The Future of ESG Reporting in Commercial Real Estate. This article is about what the shift is worth.",
      },

      { kind: "h2", text: "Operational Intelligence Creates Commercial Value" },
      {
        kind: "p",
        text: "For organisations managing complex property portfolios or multiple operating sites, operational intelligence has become increasingly valuable.",
      },
      {
        kind: "p",
        text: "Energy consumption, for example, is no longer viewed solely as a monthly utility expense. It has become an indicator of how efficiently buildings are performing. Unexpected increases in electricity usage may point to failing equipment, poorly configured building systems, or operational practices that are unnecessarily driving costs. Similarly, comparing energy performance across multiple sites can reveal why some assets consistently outperform others, providing valuable insights that can be applied across an entire portfolio.",
      },
      {
        kind: "p",
        text: "These operational improvements extend well beyond energy savings.",
      },
      {
        kind: "p",
        text: "Better visibility into building performance supports more effective maintenance planning, reduces unnecessary operational expenditure, and helps organisations prioritise capital investment where it will deliver the greatest return. Facilities teams can respond to issues before they become major failures, while executive leadership gains greater confidence that decisions are based on accurate, real-time information rather than historical assumptions.",
      },
      {
        kind: "p",
        text: "Over time, these improvements compound into stronger financial performance on every line that matters. Lower operating costs improve the bottom line. Efficient, well-evidenced buildings attract occupiers and command stronger rents, supporting the top line. Credible data satisfies financial reporting and due diligence, sharpens attractiveness to lenders and investors, and enhances returns — while measurable reductions in greenhouse gas emissions build the transition position on which the asset will increasingly be valued.",
      },
      {
        kind: "highlight",
        text: "This is where ESG reporting begins to create tangible commercial value.",
      },
      {
        kind: "p",
        text: "It provides stakeholders with credible evidence that operational improvements are delivering measurable outcomes.",
      },

      { kind: "h2", text: "A Connected Approach to ESG Reporting" },
      {
        kind: "p",
        text: "Recognising that organisations need more than another reporting platform, Vision Zero Connect has developed an approach that connects operational intelligence with sustainability reporting.",
      },
      {
        kind: "p",
        text: "Rather than treating ESG as a standalone function, the platform is designed around the belief that environmental performance, operational efficiency, and financial outcomes are closely linked. By bringing together energy data, operational information, and sustainability metrics, organisations gain a clearer understanding of how their assets are performing and where improvements can be made.",
      },
      {
        kind: "p",
        text: "This philosophy reflects the company’s broader mission: to help organisations turn real asset data into measurable financial return.",
      },
      {
        kind: "p",
        text: "Instead of asking businesses to collect more information, Vision Zero Connect focuses on helping them make better use of the information they already have.",
      },
      {
        kind: "p",
        text: "The result is a connected intelligence ecosystem that supports better operational decisions while simplifying ESG reporting across diverse property portfolios and operating environments.",
      },

      { kind: "h2", text: "Supporting Every Stage of the ESG Journey" },
      {
        kind: "p",
        text: "No two organisations begin their sustainability journey in the same place. Some are responding to new reporting requirements for the first time, while others are managing complex international portfolios with sophisticated operational data.",
      },
      {
        kind: "p",
        text: "Recognising these different levels of maturity, Vision Zero Connect has developed four complementary solutions that work together to support organisations as their needs evolve.",
      },
      {
        kind: "p",
        text: "Essentials is the starting point: automated Scope 1 and Scope 2 ESG reporting built for SMEs and organisations that need to get compliant quickly and know their emissions. Automated workflows, AI-assisted data collection, and audit-ready outputs reduce the administrative burden of reporting while giving organisations confidence in the quality and consistency of their disclosures.",
      },
      {
        kind: "p",
        text: "As the business grows, Essentials+ grows with it — adding modules as reporting obligations expand, extending into Scope 3 from Category 6 business travel through supplier engagement, transition planning, and decarbonisation modelling. This is where sustainability information starts to inform procurement, investment, and long-term planning.",
      },
      {
        kind: "p",
        text: "At the top of the range, Portfolio One delivers live building performance intelligence. By integrating data from Building Management Systems and energy infrastructure into a single platform, it provides continuous visibility into asset performance, helping organisations identify inefficiencies, benchmark buildings, and reduce avoidable energy and utility expenditure.",
      },
      {
        kind: "p",
        text: "Supporting all three is VZC Consult, which works with organisations across the world on ESG reporting, carbon and climate mechanics, operational performance, and programmes that deliver measurable commercial and environmental outcomes — translating operational insight into practical action.",
      },
      {
        kind: "p",
        text: "Together, these solutions reflect a broader philosophy: technology should not simply produce reports; it should help organisations operate more effectively.",
      },

      { kind: "h2", text: "Practical Applications Across Key Industries" },
      {
        kind: "p",
        text: "The commercial benefits of connected ESG data can be seen across a wide range of industries.",
      },
      {
        kind: "p",
        text: "For commercial real estate owners, that means greater visibility across complex portfolios, lower energy expenditure, stronger investor confidence, and support for asset valuations. The same logic runs through hospitality, healthcare, education, and multi-site retail — each sector’s buildings are real assets whose operating data now shapes their financial position. We explore the sector-by-sector picture in Rising Energy Costs in Australia and Across the World.",
      },
      {
        kind: "p",
        text: "Although the operational challenges differ, the underlying principle remains consistent. Better visibility leads to better decisions, and better decisions lead to stronger financial outcomes.",
      },

      { kind: "h2", text: "Looking Beyond Compliance" },
      {
        kind: "p",
        text: "Over the next decade, ESG performance will be read less as a compliance record and more as a real asset assessment: evidence of how well an organisation understands its operations — and how credibly its assets are positioned for the transition.",
      },
      {
        kind: "p",
        text: "As ESG expectations continue to evolve, organisations that connect operational intelligence with sustainability reporting will be better positioned to reduce costs, strengthen resilience, improve asset performance, and respond confidently to changing investor and regulatory expectations.",
      },
      {
        kind: "p",
        text: "In this environment, ESG reporting becomes more than a measure of compliance. It becomes an important indicator of how well an organisation understands and manages its operations.",
      },
      { kind: "p", text: "The conversation around ESG reporting is changing." },
      {
        kind: "quote",
        heading: "Compliance will always remain important,",
        text: "but it is no longer the primary source of value.",
      },
      {
        kind: "p",
        text: "The organisations creating lasting competitive advantage are those using ESG data to improve operational efficiency, inform investment decisions, and strengthen financial performance.",
      },
      {
        kind: "p",
        text: "By connecting operational, energy, and sustainability data into a single intelligence ecosystem, businesses gain the visibility needed to move from reactive reporting to proactive management. Rather than viewing ESG as a separate business function, they begin to see it as an integral part of how assets are managed, resources are allocated, and long-term value is created.",
      },
      {
        kind: "p",
        text: "Vision Zero Connect was built to support this shift. Through connected operational intelligence, automated ESG reporting, and strategic advisory services, it helps organisations transform fragmented data into practical insights that improve both commercial performance and sustainability outcomes. As expectations continue to evolve, those that embrace this integrated approach will be better placed to build resilient, efficient, and financially stronger organisations.",
      },
      {
        kind: "p",
        text: "If your organisation is ready to move beyond compliance and unlock the commercial value of its operational and ESG data, explore how Vision Zero Connect can help. From automated ESG reporting and real-time building intelligence to strategic advisory and portfolio-wide performance management, the platform is designed to help organisations turn real asset data into measurable financial returns.",
      },
      {
        kind: "cta",
        heading: "Ready to move beyond compliance?",
        text: "Book a demonstration to see how Vision Zero Connect turns your operational and ESG data into measurable financial performance.",
        href: "/#contact",
        label: "Book a Demo",
      },
    ],
  },
  {
    id: "how-can-hotels-reduce-energy-costs",
    title: "How Can Hotels Reduce Energy Costs?",
    excerpt:
      "Building intelligence can help hotel operators identify avoidable energy consumption, improve building performance and control operating costs without compromising the guest experience.",
    category: "article",
    date: "30/09/2026",
    readTime: "8 min read",
    author: "Vision Zero Connect",
    image: "/assets/articles/images/vzc-x-hospitality.png",
    link: "/insights/how-can-hotels-reduce-energy-costs",
    body: [
      {
        kind: "h3",
        text: "Building intelligence can help hotel operators identify avoidable energy consumption, improve building performance and control operating costs without compromising the guest experience.",
      },
      {
        kind: "p",
        text: "Hotels can reduce energy costs by gaining better visibility into how and when their buildings consume energy, then using that information to identify inefficient equipment, unnecessary operating hours and differences in performance across properties.",
      },
      {
        kind: "p",
        text: "For hotel operators, this matters because utilities represent a significant recurring expense in buildings that operate around the clock.",
      },
      {
        kind: "p",
        text: "CBRE Hotels Research estimated that U.S. hotel utility costs reached $2,478 per available room annually in 2024, or $9.68 per occupied room. Resorts averaged considerably more at $4,933 per available room.",
      },
      {
        kind: "p",
        text: "At the same time, pressure on hotel profitability continues. CBRE’s 2025 Global Hotel Outlook expected hotel margins to decline for a third consecutive year as cost increases continued to outpace top-line growth.",
      },
      {
        kind: "quote",
        heading:
          "Controlling avoidable building costs is therefore not simply an environmental objective.",
        text: "It is a profitability issue.",
      },

      { kind: "h2", text: "Why Do Hotels Consume So Much Energy?" },
      { kind: "p", text: "Hotels are complex operating environments." },
      {
        kind: "p",
        text: "Unlike many commercial buildings with predictable periods of activity, hotels operate continuously. Guest rooms need to remain comfortable. Kitchens and refrigeration systems must function reliably. Hot water needs to be available throughout the day. Lighting, lifts, ventilation, laundry facilities, pools, spas and conference spaces can all add to consumption.",
      },
      {
        kind: "p",
        text: "The challenge is that a utility bill only tells an operator how much energy the property consumed and what it cost.",
      },
      { kind: "highlight", text: "It does not necessarily explain why." },
      {
        kind: "p",
        text: "If electricity consumption increases, was occupancy higher? Did weather conditions increase cooling demand? Was equipment operating outside expected hours? Has an HVAC system become less efficient? Are building controls no longer optimised?",
      },
      {
        kind: "p",
        text: "Without sufficient operational visibility, identifying the cause can be difficult.",
      },
      {
        kind: "p",
        text: "This matters because inefficiencies do not always appear as major equipment failures.",
      },
      {
        kind: "p",
        text: "An HVAC system can gradually require more energy to maintain the same temperature. Heating or cooling can operate unnecessarily in unoccupied areas. Equipment schedules may no longer match actual hotel operations. Building controls can change over time without anyone recognising their cumulative effect on consumption.",
      },
      { kind: "p", text: "Individually, these issues may appear small." },
      {
        kind: "p",
        text: "Across hundreds of rooms or a portfolio of hotels, they can become expensive.",
      },

      { kind: "h2", text: "How Much Are Utilities Costing Hotels?" },
      {
        kind: "p",
        text: "CBRE’s analysis of 3,674 U.S. hotels provides useful context.",
      },
      {
        kind: "p",
        text: "Hotel utility costs were estimated to increase by 1.4% in 2024, following a 4.1% compound annual growth rate between 2019 and 2023.",
      },
      { kind: "p", text: "The impact also varies considerably by hotel type." },
      {
        kind: "p",
        text: "Limited-service hotels were estimated to spend $1,446 per available room on utilities in 2024, while extended-stay properties averaged $1,580. Although these properties spent less in absolute terms, utilities represented approximately 4% of their revenue.",
      },
      {
        kind: "p",
        text: "Resorts spent substantially more at $4,933 per available room, although their higher room rates and wider revenue sources meant utilities represented approximately 2.9% of revenue.",
      },
      {
        kind: "p",
        text: "The figures demonstrate why there is no single energy benchmark that works for every hotel.",
      },
      {
        kind: "p",
        text: "Property type, occupancy, climate, amenities and operating model all affect consumption.",
      },
      {
        kind: "p",
        text: "That makes context particularly important when assessing hotel energy performance.",
      },
      {
        kind: "em",
        text: "Source: CBRE Hotels Research, Sustainability Practices Help Control Hotel Utility Costs, 2025.",
      },

      {
        kind: "h2",
        text: "How Does Building Intelligence Help Reduce Energy Costs?",
      },
      { kind: "p", text: "Most hotels already generate useful building information." },
      {
        kind: "p",
        text: "Smart meters record consumption. Building Management Systems monitor equipment and environmental conditions. Utility providers generate usage data. Maintenance teams record asset performance and interventions.",
      },
      {
        kind: "p",
        text: "The problem is often that this information sits in different places.",
      },
      {
        kind: "p",
        text: "Facilities teams may understand individual systems while finance teams see the resulting expenditure. Senior management may receive monthly reports but have limited visibility into what caused costs to change.",
      },
      { kind: "p", text: "Building intelligence brings those perspectives together." },
      { kind: "p", text: "Instead of only asking:" },
      { kind: "em", text: "“How much energy did we use?”" },
      { kind: "p", text: "operators can start asking:" },
      {
        kind: "em",
        text: "“Where did we use it, when did consumption change and what caused the difference?”",
      },
      {
        kind: "p",
        text: "That creates opportunities to identify avoidable consumption earlier.",
      },
      {
        kind: "p",
        text: "For example, an unusual increase in overnight electricity usage could indicate equipment operating when demand should be lower. A property consuming substantially more energy than comparable hotels may warrant investigation into HVAC performance, operating schedules or building controls.",
      },
      { kind: "p", text: "The data does not automatically solve the problem." },
      { kind: "highlight", text: "It tells teams where to look." },

      {
        kind: "h2",
        text: "Can Hotels Reduce Energy Costs Without Major Capital Investment?",
      },
      {
        kind: "p",
        text: "Not every energy-saving opportunity requires replacing equipment or undertaking a major refurbishment.",
      },
      {
        kind: "p",
        text: "Before committing capital, hotel operators can examine whether existing assets are being operated effectively.",
      },
      {
        kind: "p",
        text: "Heating and cooling systems may run longer than necessary. Lighting schedules may not reflect occupancy. Equipment may remain active during periods of lower demand. Building controls may have been changed over time without being reviewed against actual operating requirements.",
      },
      {
        kind: "p",
        text: "CBRE notes that resort and convention hotels often use centralised mechanical, electrical and plumbing systems controlled through building automation systems. These can be adjusted according to occupancy and facility-use patterns to improve energy efficiency.",
      },
      { kind: "p", text: "This is an important distinction." },
      { kind: "p", text: "The first question does not always need to be:" },
      { kind: "em", text: "“What equipment should we replace?”" },
      { kind: "p", text: "It can be:" },
      {
        kind: "em",
        text: "“Are we getting the best performance from what we already have?”",
      },
      {
        kind: "p",
        text: "Where larger investment is necessary, operational data can then strengthen the business case.",
      },

      { kind: "h2", text: "What Can Energy-Efficient Hotel Systems Save?" },
      {
        kind: "p",
        text: "The financial impact can be significant, although results depend heavily on the property.",
      },
      {
        kind: "p",
        text: "CBRE compared several similar select-service hotels within the same municipality.",
      },
      {
        kind: "p",
        text: "One approximately 150-room hotel built with a variable refrigerant flow heating and cooling system and solar panels recorded utility costs of $3.40 per occupied room.",
      },
      {
        kind: "p",
        text: "A similarly sized older hotel had utility expenditure more than $4 higher per occupied room. Across approximately 50,000 occupied rooms, that represented a difference of more than $200,000 in annual utility expenditure.",
      },
      {
        kind: "p",
        text: "CBRE also compared the property with a newer hotel without the same energy-efficient features and still found a meaningful difference in utility expenditure.",
      },
      {
        kind: "p",
        text: "This is one example rather than a universal savings estimate. Hotel age, construction, climate, amenities, occupancy and operating practices all affect performance.",
      },
      {
        kind: "p",
        text: "But it demonstrates why understanding building performance matters financially.",
      },
      {
        kind: "p",
        text: "When operators have reliable baseline data, they can assess whether an investment is improving performance rather than relying solely on projected savings.",
      },
      { kind: "em", text: "Source: CBRE, Sustainability in Hotels." },

      { kind: "h2", text: "Why Is Portfolio Benchmarking So Valuable?" },
      {
        kind: "p",
        text: "For hotel groups, some of the strongest insights come from comparing properties.",
      },
      {
        kind: "p",
        text: "One hotel can tell management whether its energy consumption increased.",
      },
      { kind: "highlight", text: "A portfolio provides context." },
      {
        kind: "p",
        text: "If several comparable properties operate under similar conditions but one consistently consumes substantially more energy per occupied room, management has somewhere meaningful to investigate.",
      },
      {
        kind: "p",
        text: "Further analysis may reveal differences in HVAC performance, equipment efficiency, building controls or operating practices.",
      },
      { kind: "p", text: "High-performing properties can also provide useful lessons." },
      {
        kind: "p",
        text: "If one hotel achieves consistently lower consumption without compromising operations or guest comfort, teams can investigate whether its practices can be applied elsewhere.",
      },
      {
        kind: "p",
        text: "This turns benchmarking into a continuous improvement process.",
      },
      {
        kind: "p",
        text: "Instead of treating every property independently, hotel groups can use portfolio information to identify exceptions, investigate the reasons behind them and replicate successful practices.",
      },

      {
        kind: "h2",
        text: "How Can Energy Data Improve Maintenance and Investment Decisions?",
      },
      {
        kind: "p",
        text: "Energy performance can also provide useful information about the condition of hotel assets.",
      },
      {
        kind: "p",
        text: "An HVAC system may continue maintaining the required temperature while gradually consuming more energy to do so. Refrigeration equipment may still function but operate for increasingly long periods. Maintenance requirements may increase as equipment ages.",
      },
      { kind: "p", text: "These patterns can provide an early reason to investigate." },
      {
        kind: "p",
        text: "For facilities teams, this supports a more informed approach to maintenance.",
      },
      {
        kind: "p",
        text: "For finance and asset-management teams, it can support lifecycle and capital planning.",
      },
      {
        kind: "p",
        text: "Hotel businesses regularly need to choose between competing investments: guest-room refurbishments, HVAC replacement, kitchen equipment, lighting, renewable energy and wider property improvements.",
      },
      { kind: "p", text: "Capital is rarely unlimited." },
      {
        kind: "p",
        text: "Building-performance information can help decision-makers identify where inefficiencies are occurring, understand how assets are performing over time and establish a baseline before approving investment.",
      },
      {
        kind: "p",
        text: "After an upgrade, the same data can be used to assess whether expected improvements actually occurred.",
      },
      {
        kind: "outcomes",
        heading:
          "Building intelligence therefore connects three decisions that are often treated separately:",
        items: [
          "How the building operates today",
          "What needs attention",
          "Where capital should go next",
        ],
      },

      {
        kind: "h2",
        text: "Smart Hotels Need Better Decisions, Not More Technology",
      },
      {
        kind: "p",
        text: "The term “smart hotel” can imply that adding more technology automatically creates a more efficient property.",
      },
      { kind: "highlight", text: "It does not." },
      {
        kind: "p",
        text: "A dashboard cannot reduce energy consumption on its own. A smart meter does not correct an inefficient operating schedule. A Building Management System cannot improve performance if nobody acts on what the information reveals.",
      },
      {
        kind: "p",
        text: "Technology becomes valuable when it gives the right people useful information at the right time.",
      },
      {
        kind: "ul",
        items: [
          "Facilities teams provide knowledge of building systems.",
          "Finance teams understand the impact of changing costs.",
          "Operations teams provide context around occupancy and how the hotel is being used.",
          "Asset managers understand longer-term investment priorities.",
        ],
      },
      {
        kind: "p",
        text: "Bringing those perspectives together is what turns building data into business intelligence.",
      },
      {
        kind: "quote",
        heading:
          "A genuinely smart hotel is therefore not necessarily the property with the most connected devices.",
        text: "It is the property that uses its building information most effectively.",
      },

      {
        kind: "h2",
        text: "How Portfolio One Supports Smarter Hotel Operations",
      },
      {
        kind: "p",
        text: "Vision Zero Connect’s Portfolio One helps hotel owners, operators and asset managers bring building, energy and operational information into a central environment.",
      },
      {
        kind: "p",
        text: "By connecting information from sources such as smart meters, utility feeds and Building Management Systems, hotel teams can gain greater visibility into how individual properties and wider portfolios are performing.",
      },
      {
        kind: "p",
        text: "This can help operators identify unusual consumption patterns, compare properties and highlight areas that warrant investigation.",
      },
      {
        kind: "p",
        text: "For multi-property hospitality groups, portfolio benchmarking can help identify why similar hotels perform differently and where successful operating practices may be replicated.",
      },
      {
        kind: "p",
        text: "Building-performance information can also support investment decisions by providing a clearer baseline before efficiency projects, equipment replacements or other improvements are approved.",
      },
      {
        kind: "p",
        text: "The objective is not to give hotel teams another dashboard to manage.",
      },
      {
        kind: "p",
        text: "It is to make existing building information more useful to the people responsible for controlling costs and improving performance.",
      },

      { kind: "h2", text: "The Business Case for Smarter Hotels" },
      {
        kind: "p",
        text: "For hotel owners and operators, reducing energy costs does not mean compromising the guest experience.",
      },
      {
        kind: "p",
        text: "It means identifying consumption that adds cost without adding value.",
      },
      {
        kind: "p",
        text: "Better building visibility can help operators identify inefficient equipment, unnecessary operating hours and differences in performance between properties.",
      },
      {
        kind: "p",
        text: "It can support maintenance teams before inefficiencies become larger problems.",
      },
      {
        kind: "p",
        text: "It can give finance and asset-management teams better evidence when deciding where limited capital should be invested.",
      },
      {
        kind: "p",
        text: "And across a portfolio, it can reveal opportunities that may remain invisible when each hotel is considered independently.",
      },
      {
        kind: "p",
        text: "With operating costs continuing to put pressure on hotel margins, the ability to understand how buildings consume energy is becoming increasingly commercially important.",
      },
      {
        kind: "final",
        lines: [
          { text: "The smarter hotel is not simply the most connected hotel." },
          {
            text: "It is the hotel that understands how its building performs and acts on what the data reveals.",
            big: true,
          },
        ],
      },
      {
        kind: "p",
        text: "Vision Zero Connect’s Portfolio One helps hospitality organisations turn building, utility and operational data into practical intelligence, giving hotel teams greater visibility into performance and supporting better decisions around energy, maintenance and investment.",
      },
      {
        kind: "cta",
        heading: "Ready to see how your hotels are really performing?",
        text: "Book a demonstration to see how Portfolio One turns building and utility data into measurable savings.",
        href: "/#contact",
        label: "Book a Demo",
      },
      {
        kind: "sources",
        heading: "Sources",
        items: [
          {
            label:
              "CBRE Hotels Research, Sustainability Practices Help Control Hotel Utility Costs",
            href: "https://www.cbre.com/insights/articles/sustainability-practices-help-control-hotel-utility-costs",
          },
          {
            label: "CBRE Hotels Research, Gaining Control of Utility Costs",
            href: "https://www.cbre.com/insights/briefs/12980368955",
          },
          {
            label: "CBRE, Sustainability in Hotels",
            href: "https://www.cbre.com/insights/briefs/sustainability-in-hotels",
          },
          {
            label: "CBRE, 2025 Global Hotel Outlook",
            href: "https://www.cbre.com/insights/reports/16368744271",
          },
        ],
      },
    ],
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
