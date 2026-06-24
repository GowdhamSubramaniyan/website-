# Vision Zero Connect — Who We Serve Page Build Prompts

A sequenced set of high-level prompts for building the **Who We Serve** page.
Each prompt builds small, reusable **sub-components**, then a final prompt **wraps them into one main page**.

> **Source of truth**
> - **Copy / structure:** the Who We Serve source doc (`website/doc/...`) when available. *(The Canva draft renders client-side and could not be parsed, so the section list below is derived from the "Sectors We Serve" content already defined in the Home Page doc — reconcile each section's copy against the source doc as you build.)*
> - **Sectors (from Home Page doc):** Healthcare Facilities, Property Managers, Schools and Universities, Hotels and Hospitality, Retail and Restaurants, Construction and Contractors, Manufacturing and Warehouses, Logistics and Transport.
> - **Image assets:** `website/doc/who we serve Assets`
>   - photo assets for hero / sector imagery
>   - brand icons (teal/lime) for sector & feature blocks
> - **Folder structure:** already set up — do **not** recreate it, only add files into it.
> - **Shared components:** reuse the existing `components/ui` and `components/layout` (Header/Footer) from prior builds instead of rebuilding them.

---

## Assumptions (adjust if your stack differs)

- **Stack:** React (Vite or Next.js) + Tailwind CSS. For plain CSS/SCSS, map the tokens below to CSS variables.
- **Pattern:** Small presentational sub-components -> composed into one `WhoWeServePage` wrapper.
- Keep components **content-driven** (text/CTA labels come from the doc, not invented).

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

**Usage guide:** dark navy/teal for hero + statement backdrops, lime gradient for primary CTAs and accents, mint gradient for soft section backgrounds, white/grey for content surfaces.

---

## Target Folder Structure

```
src/
├── styles/
│   ├── tokens.(css|ts)          ← shared tokens (reuse if present)
│   └── globals.css
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
│   └── sections/who-we-serve/   ← Who We Serve sections (Prompts 3–8)
│       ├── WhoWeServeHero
│       ├── ServeIntro
│       ├── SectorsGrid       (SectorsGrid + SectorCard)
│       ├── SectorDetail      (SectorDetail reusable spotlight)
│       ├── CommonChallenges  (CommonChallenges + ChallengeItem)
│       ├── HowWeHelp         (product-to-sector mapping)
│       ├── Outcomes          (Outcomes + StatCard / CaseCard)
│       └── WhoWeServeCTA
└── pages/
    └── WhoWeServePage           ← Prompt 9 (the single main wrapper)
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
- Ensure the Header marks **Sectors / Who We Serve** as the active nav item.
- If they don't exist yet: Header = logo + nav (Home, Products, Sectors, Insights, About, Contact) + primary CTA; Footer = brand, condensed nav, global locations (UK, Hong Kong, Australia, Malta, United States), legal row.

**Done when:** Header/Footer wrap arbitrary children, the section is highlighted, fully responsive.

---

# PROMPT 3 — Hero + Intro

**Goal:** Establish who the platform serves.

- `sections/who-we-serve/WhoWeServeHero` — dark gradient background (`--grad-dark`), eyebrow "Who We Serve", headline (e.g. "Operational Intelligence for the Sectors That Run Real Assets"), supporting intro, and a primary CTA. Use a sector/context visual from the assets folder.
- `sections/who-we-serve/ServeIntro` — light/mint background block explaining VZC's cross-sector relevance: organisations managing real assets across diverse industries facing shared ESG, compliance, and operational pressures.
- Pull exact copy from the doc; build with **SectionWrapper / SectionHeading / Button**.

**Done when:** hero + intro flow visually from dark -> light and match the doc copy.

---

# PROMPT 4 — Sectors grid

**Goal:** Present the full set of sectors served.

- `sections/who-we-serve/SectorsGrid/SectorsGrid` — heading + intro.
- `sections/who-we-serve/SectorsGrid/SectorCard` (reusable sub-component) — icon + sector name + one-line descriptor, extending the **Card** primitive; optional anchor link to its detail block.
- Drive from a **data array** of the eight sectors: Healthcare Facilities, Property Managers, Schools and Universities, Hotels and Hospitality, Retail and Restaurants, Construction and Contractors, Manufacturing and Warehouses, Logistics and Transport. Assign brand icons from the assets folder. Responsive grid (2/3/4 cols).

**Done when:** `SectorsGrid` maps the sectors array into `SectorCard`s with correct icons.

---

# PROMPT 5 — Sector detail spotlights

**Goal:** Go deeper on each sector's needs.

- `sections/who-we-serve/SectorDetail` — one reusable spotlight layout (image + text, alternating sides) rendered per sector from a **data array**, each covering: the sector's specific ESG/operational/compliance pressures and how VZC addresses them.
- Alternate `white` / `mint` backgrounds for rhythm; use sector imagery from the assets folder. Keep it scannable — consider a short bullet list of pain points per sector.

**Done when:** all sectors reuse one `SectorDetail` layout and differ only by content props.

---

# PROMPT 6 — Common challenges we solve

**Goal:** Show the shared problems across sectors.

- `sections/who-we-serve/CommonChallenges/CommonChallenges` — heading + intro.
- `sections/who-we-serve/CommonChallenges/ChallengeItem` (reusable) — icon + title + description.
- Render from a **data array** (e.g. fragmented data, rising lender/investor/regulatory demands, manual reporting burden, lack of operational visibility, transition pressure). Use a `dark` or `mint` background for contrast.

**Done when:** challenges render from an array with consistent styling.

---

# PROMPT 7 — How We Help (product-to-sector mapping)

**Goal:** Connect sectors to the VZC product ecosystem.

- `sections/who-we-serve/HowWeHelp` — map the four products to sector needs: **Essentials** (SME reporting), **Essentials+** (advanced/strategic), **Portfolio One** (multi-asset/portfolio), **Vision Zero Consult** (advisory). Use a clear layout (cards or a matrix) with CTAs linking to each product page.
- Reuse **Card** + **Button**; drive from a **data array/object**.

**Done when:** the mapping clearly routes each sector/need to the right product with CTAs.

---

# PROMPT 8 — Outcomes / proof

**Goal:** Build credibility.

- `sections/who-we-serve/Outcomes` — outcome metrics and/or short case snippets via reusable `StatCard` / `CaseCard` sub-components, driven by a **data array**. Optional partner/logo strip.
- Only include figures present in the source doc; do not invent statistics.

**Done when:** proof elements render from arrays; no fabricated numbers.

---

# PROMPT 9 — CTA band + compose the main WhoWeServePage wrapper

**Goal:** Drive conversion and assemble into **one** page.

- `sections/who-we-serve/WhoWeServeCTA` — full-width band on `--grad-dark` or `--grad-lime` with a closing headline + primary CTA (e.g. "Find the Right Solution for Your Sector" -> Products/Contact).
- In `pages/WhoWeServePage`, import and assemble in this order, wrapped by `Header` / `Footer`:

```
<Header />
  <WhoWeServeHero />
  <ServeIntro />
  <SectorsGrid />
  <SectorDetail />        (rendered per sector from the array)
  <CommonChallenges />
  <HowWeHelp />
  <Outcomes />
  <WhoWeServeCTA />
<Footer />
```

- Final pass: consistent vertical rhythm, alternating backgrounds, responsive checks (mobile/tablet/desktop), and accessibility (alt text on imagery and icons, focus states, semantic landmarks). Wire `SectorCard` links to their `SectorDetail` anchors.

**Done when:** the full Who We Serve page renders top-to-bottom from the composed sub-components, matches the doc copy, and is responsive.

---

## Build order summary

1. Tokens + UI primitives (reuse-first)
2. Header + Footer (reuse)
3. Hero + Intro
4. Sectors grid (8 sectors)
5. Sector detail spotlights
6. Common challenges we solve
7. How We Help (product-to-sector mapping)
8. Outcomes / proof
9. CTA band -> **compose WhoWeServePage wrapper**
