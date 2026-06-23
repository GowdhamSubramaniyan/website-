 # Vision Zero Connect — Insights Page Build Prompts

A sequenced set of high-level prompts for building the **Insights** page (content hub).
Each prompt builds small, reusable **sub-components**, then a final prompt **wraps them into one main page**.

> **Source of truth**
> - **Copy / structure:** the Insights source doc (`website/doc/...`) when available. *(The Canva draft renders client-side and could not be parsed, so the section list below is derived from the "Recognitions, Insights, and Developments" content already defined in the Home Page doc — reconcile each section's copy against the source doc as you build.)*
> - **Content streams (from Home Page doc):** Awards (recognitions), Insights (articles/thought leadership), News (developments).
> - **Image assets:** `website/doc/insight page Assets`
>   - article / thumbnail imagery
>   - brand icons (teal/lime) for category badges and feature blocks
> - **Folder structure:** already set up — do **not** recreate it, only add files into it.
> - **Shared components:** reuse the existing `components/ui` and `components/layout` (Header/Footer) from prior builds instead of rebuilding them.

---

## Assumptions (adjust if your stack differs)

- **Stack:** React (Vite or Next.js) + Tailwind CSS. For plain CSS/SCSS, map the tokens below to CSS variables.
- **Pattern:** Small presentational sub-components -> composed into one `InsightsPage` wrapper.
- Keep components **content-driven** (article data + copy come from the doc/CMS, not invented).
- Article data should come from a single source array (or CMS) so cards, filters, and featured items stay in sync.

---

## Design Tokens (shared — `colour_scheme.jpg`)

```
/* Solid */
--ink:        #191A19;   /* near-black, primary dark */
--grey:       #D9D9D9;   /* light grey, borders/dividers */
--white:      #FFFFFF;
--teal:       #045858;   /* brand teal, primary accent */
--sage:       #8FB2B2;   /* muted teal, secondary */
--navy:       #0F1827;   /* dark navy, deep backgrounds */

/* Gradients */
--grad-dark:  linear-gradient(90deg, #191A19 0%, #045858 100%);   /* hero / dark sections */
--grad-lime:  linear-gradient(90deg, #89D957 0%, #C9E265 100%);   /* CTAs / highlights */
--grad-mint:  linear-gradient(90deg, #F9FFF5 0%, #AFCFD1 100%);   /* light section backgrounds */
```

**Usage guide:** dark navy/teal for hero + statement backdrops, lime gradient for primary CTAs, category accents, and active filter states, mint gradient for soft section backgrounds, white/grey for content surfaces.

---

## Target Folder Structure

```
src/
├── styles/
│   ├── tokens.(css|ts)          ← shared tokens (reuse if present)
│   └── globals.css
├── data/
│   └── insights.(js|ts)         ← single source array for articles/awards/news
├── components/
│   ├── ui/                      ← shared primitives (reuse if they exist)
│   │   ├── Container
│   │   ├── Button
│   │   ├── SectionWrapper
│   │   ├── SectionHeading
│   │   ├── Card
│   │   └── GradientText
│   ├── layout/                  ← reuse Header / Footer
│   │   ├── Header
│   │   └── Footer
│   └── sections/insights/       ← Insights sections (Prompts 3–8)
│       ├── InsightsHero
│       ├── FeaturedInsight
│       ├── InsightsHub        (CategoryFilter + ArticleCard + grid)
│       ├── Awards             (Awards + AwardCard)
│       ├── NewsStrip          (NewsStrip + NewsItem)
│       ├── Newsletter
│       └── InsightsCTA
└── pages/
    └── InsightsPage             ← Prompt 9 (the single main wrapper)
```

---

# PROMPT 1 — Design system & shared UI primitives (reuse-first)

**Goal:** Ensure the visual foundation and reusable sub-components exist.

- If `styles/tokens` and `components/ui` already exist (from prior builds), **reuse them** — do not duplicate.
- If they do **not** exist, create them from the **Design Tokens** above:
  - **Container** — max-width + responsive padding.
  - **Button** — variants: `primary` (lime gradient), `dark` (teal/ink), `ghost` (outline).
  - **SectionWrapper** — vertical rhythm + background variant (`white | mint | dark | navy`).
  - **SectionHeading** — eyebrow/label + headline + supporting paragraph; alignment prop.
  - **Card** — base surface (radius, `--grey` border, hover lift).
  - **GradientText** — lime/teal gradient on inline emphasis text.
- All primitives stay **content-agnostic** (props in, no hardcoded copy).

**Done when:** primitives render with each variant and respect the tokens.

---

# PROMPT 2 — Layout shell (reuse Header + Footer)

**Goal:** Wrap the page in the global chrome.

- **Reuse** `components/layout/Header` and `Footer` from prior builds.
- Ensure the Header marks **Insights** as the active nav item.
- If they don't exist yet: Header = logo + nav (Home, Products, Sectors, Insights, About, Contact) + primary CTA; Footer = brand, condensed nav, global locations (UK, Hong Kong, Australia, Malta, United States), legal row.

**Done when:** Header/Footer wrap arbitrary children, Insights is highlighted, fully responsive.

---

# PROMPT 3 — Hero + Featured Insight

**Goal:** Introduce the hub and surface the lead story.

- `sections/insights/InsightsHero` — dark gradient background (`--grad-dark`), eyebrow "Insights", headline (e.g. "Recognitions, Insights & Developments"), supporting intro on VZC's thought leadership, and optional CTA. Keep it compact so content shows quickly.
- `sections/insights/FeaturedInsight` — a prominent spotlight of the latest/featured article (large image + category badge + title + excerpt + date + "Read More"). Pull the featured item from the top of the insights data array.
- Pull exact copy from the doc; build with **SectionWrapper / SectionHeading / Button**.

**Done when:** hero + featured story render from the data array and match the doc copy.

---

# PROMPT 4 — Insights data source

**Goal:** Establish one source of truth for all content cards.

- Create `data/insights` — an array of items, each with: `id`, `title`, `excerpt`, `category` (`insight | award | news`), `date`, `image`, `link`, and optional `featured` flag.
- Seed with placeholder entries (to be replaced from the doc/CMS); ensure categories cover Insights, Awards, and News.

**Done when:** a single typed/structured array drives the featured item, grid, filters, awards, and news strip.

---

# PROMPT 5 — Insights Hub (filterable grid)

**Goal:** The core browsable content area.

- `sections/insights/InsightsHub/CategoryFilter` (reusable) — tabs/pills: All / Insights / Awards / News; active state uses `--grad-lime` or `--teal`.
- `sections/insights/InsightsHub/ArticleCard` (reusable) — image + category badge + title + excerpt + date + link; extends the **Card** primitive.
- `InsightsHub` — holds the active-category state, filters the `data/insights` array, and renders a responsive `ArticleCard` grid (1/2/3 cols). Empty-state message when a filter has no items.

**Done when:** selecting a category filters the grid live, driven entirely by the data array.

---

# PROMPT 6 — Awards & Recognitions

**Goal:** Highlight credibility.

- `sections/insights/Awards/Awards` — heading + intro on a `mint` or `dark` background.
- `sections/insights/Awards/AwardCard` (reusable) — badge/icon + award title + issuer + year + optional link; driven by the `award` items from the data array. Responsive grid or logo strip.

**Done when:** awards render from the filtered data with consistent styling.

---

# PROMPT 7 — News & Developments strip

**Goal:** Surface recent press/updates concisely.

- `sections/insights/NewsStrip/NewsStrip` — heading + intro.
- `sections/insights/NewsStrip/NewsItem` (reusable) — compact row: date + title + source + link; driven by the `news` items from the data array. Consider a horizontal scroll or a tidy list layout.

**Done when:** news items render from the filtered data and link out correctly.

---

# PROMPT 8 — Newsletter subscribe

**Goal:** Capture ongoing interest.

- `sections/insights/Newsletter` — full-width band on `--grad-mint` or `--grad-dark` with a short headline, email input, and "Subscribe" button. Include basic email validation and a stubbed submit handler (no backend wiring); show a success/confirmation state.

**Done when:** the form validates input and shows a confirmation state on submit.

---

# PROMPT 9 — CTA band + compose the main InsightsPage wrapper

**Goal:** Close the page and assemble into **one** page.

- `sections/insights/InsightsCTA` — closing band on `--grad-dark` or `--grad-lime` with a headline + primary CTA (e.g. "Talk to Our Team" -> Contact, or "Explore Our Products").
- In `pages/InsightsPage`, import and assemble in this order, wrapped by `Header` / `Footer`:

```
<Header />
  <InsightsHero />
  <FeaturedInsight />
  <InsightsHub />        (CategoryFilter + ArticleCard grid)
  <Awards />
  <NewsStrip />
  <Newsletter />
  <InsightsCTA />
<Footer />
```

- Final pass: consistent vertical rhythm, alternating backgrounds, responsive checks (mobile/tablet/desktop), and accessibility (alt text on thumbnails, focus states on filters/links, semantic landmarks, keyboard-navigable tabs).

**Done when:** the full Insights page renders top-to-bottom from the composed sub-components, filters work, and it is responsive.

---

## Build order summary

1. Tokens + UI primitives (reuse-first)
2. Header + Footer (reuse)
3. Hero + Featured Insight
4. Insights data source (single array)
5. Insights Hub (filterable grid)
6. Awards & Recognitions
7. News & Developments strip
8. Newsletter subscribe
9. CTA band -> **compose InsightsPage wrapper**
