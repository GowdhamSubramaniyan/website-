# Vision Zero Connect — About Us Page Build Prompts

A sequenced set of high-level prompts for building the **Vision Zero Connect — About Us** page.
Each prompt builds small, reusable **sub-components**, then a final prompt **wraps them into one main page**.

> **Source of truth**
> - **Copy / structure:** `website/doc/About Us Page Copy.docx` — use this for all headings, body text, and CTA labels. *(The exported HTML viewer could not be parsed for body text, so the section list below is a recommended structure — reconcile each section's copy against the doc as you build.)*
> - **Image assets:** `website/doc/about us page Assets`
>   - `9.png` — team / people photo (hero or team section)
>   - `2.png`, `6.png`, `7.png` — brand icons (teal/lime) for value & feature blocks
> - **Folder structure:** already set up — do **not** recreate it, only add files into it.
> - **Shared components:** if this lives in the same project as the Home Page, **reuse** the existing `components/ui` and `components/layout` (Header/Footer) instead of rebuilding them.

---

## Assumptions (adjust if your stack differs)

- **Stack:** React (Vite or Next.js) + Tailwind CSS. For plain CSS/SCSS, map the tokens below to CSS variables.
- **Pattern:** Small presentational sub-components -> composed into one `AboutPage` wrapper.
- Keep components **content-driven** (text/CTA labels come from the doc, not invented).

---

## Design Tokens (shared with Home Page — `colour_scheme.jpg`)

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
│   ├── tokens.(css|ts)          ← shared tokens (reuse from Home Page if present)
│   └── globals.css
├── components/
│   ├── ui/                      ← shared primitives (reuse if they exist)
│   │   ├── Container
│   │   ├── Button
│   │   ├── SectionWrapper
│   │   ├── SectionHeading
│   │   ├── Card
│   │   └── GradientText
│   ├── layout/                  ← reuse Header / Footer from Home Page
│   │   ├── Header
│   │   └── Footer
│   └── sections/about/          ← About-specific sections (Prompts 3–8)
│       ├── AboutHero
│       ├── WhoWeAre
│       ├── MissionVision
│       ├── OurValues          (OurValues + ValueCard)
│       ├── WhatWeDo
│       ├── OurApproach
│       ├── Leadership         (Leadership + TeamMemberCard)
│       ├── GlobalPresence
│       ├── Partners
│       └── AboutCTA
└── pages/
    └── AboutPage                ← Prompt 9 (the single main wrapper)
```

---

# PROMPT 1 — Design system & shared UI primitives (reuse-first)

**Goal:** Ensure the visual foundation and reusable sub-components exist.

- If `styles/tokens` and `components/ui` already exist (from the Home Page build), **reuse them** — do not duplicate.
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

- **Reuse** `components/layout/Header` and `Footer` from the Home Page.
- Ensure the Header marks **About** as the active nav item.
- If they don't exist yet: Header = logo + nav (Home, Products, Sectors, Insights, About, Contact) + primary CTA; Footer = brand, condensed nav, global locations (UK, Hong Kong, Australia, Malta, United States), legal row.

**Done when:** Header/Footer wrap arbitrary children, About is highlighted, fully responsive.

---

# PROMPT 3 — Hero + Who We Are

**Goal:** Top-of-page introduction.

- `sections/about/AboutHero` — dark gradient background (`--grad-dark`), eyebrow + page headline (e.g. "About Vision Zero Connect"), supporting intro paragraph, and an optional CTA. Use `9.png` (team photo) as the hero visual with a subtle rounded mask.
- `sections/about/WhoWeAre` — short "who we are" block on a light/mint background introducing the company and what it stands for.
- Pull exact copy from the doc; build with **SectionWrapper / SectionHeading / Button**.

**Done when:** hero + intro flow visually from dark -> light and match the doc copy.

---

# PROMPT 4 — Mission & Vision + Our Story

**Goal:** Purpose and narrative.

- `sections/about/MissionVision` — two paired statement blocks (Mission / Vision) using **GradientText** for emphasis on key phrases; consider a split or stacked layout with contrasting backgrounds.
- Optionally add an **Our Story / journey** narrative block (origin, Malta operational base, global expansion) if present in the doc — reuse the same `SectionWrapper`.

**Done when:** mission and vision read clearly with strong typographic hierarchy.

---

# PROMPT 5 — Our Values (icon card grid)

**Goal:** Company values / principles.

- `sections/about/OurValues/OurValues` — heading + intro.
- `sections/about/OurValues/ValueCard` (reusable sub-component) — icon + title + description, extending the **Card** primitive.
- Drive the cards from a **data array**; assign brand icons from the assets folder (`2.png`, `6.png`, `7.png`, and additional icons as needed). Responsive grid (1/2/3 cols).

**Done when:** `OurValues` maps the values array into `ValueCard`s with correct icons.

---

# PROMPT 6 — What We Do + Our Approach

**Goal:** Connect the company to the platform/offering.

- `sections/about/WhatWeDo` — concise summary of the offering (operational intelligence for real assets, ESG reporting, the four-product / Navigate ecosystem). Link out to Products where relevant.
- `sections/about/OurApproach` — "how we work / why we're different" block; consider an alternating image-and-text layout on a `mint` or `dark` background for rhythm.

**Done when:** both sections present the offering and approach, sourced from the doc copy.

---

# PROMPT 7 — Leadership / Team

**Goal:** The people behind the company.

- `sections/about/Leadership/Leadership` — heading + intro.
- `sections/about/Leadership/TeamMemberCard` (reusable) — photo + name + role + optional short bio / link. Use `9.png` and any additional team imagery from the assets folder.
- Drive from a **data array**; responsive grid. If the doc lists no named individuals, render a single team/culture block using `9.png` instead of a member grid.

**Done when:** team renders from an array (or a single culture block) with consistent card styling.

---

# PROMPT 8 — Global Presence + Partners

**Goal:** Reach and credibility.

- `sections/about/GlobalPresence` — heading + the global footprint (UK, Hong Kong, Australia, Malta, United States); reuse a map/visual from assets. Mirror the Home Page footprint styling for consistency.
- `sections/about/Partners` — "Global Partner Network" block (Europe, Australia, Asia, Middle East; Malta operational base). Optional partner logo strip.

**Done when:** locations and partner network render consistently with the Home Page.

---

# PROMPT 9 — CTA band + compose the main AboutPage wrapper

**Goal:** Closing call-to-action and final assembly into **one** page.

- `sections/about/AboutCTA` — full-width band on `--grad-dark` or `--grad-lime` with a closing headline + primary CTA (e.g. "Talk to Our Team" -> Contact page).
- In `pages/AboutPage`, import and assemble in this order, wrapped by `Header` / `Footer`:

```
<Header />
  <AboutHero />
  <WhoWeAre />
  <MissionVision />
  <OurValues />
  <WhatWeDo />
  <OurApproach />
  <Leadership />
  <GlobalPresence />
  <Partners />
  <AboutCTA />
<Footer />
```

- Final pass: consistent vertical rhythm, alternating backgrounds, responsive checks (mobile/tablet/desktop), and accessibility (alt text on `9.png` and icons, focus states, semantic landmarks).

**Done when:** the full About page renders top-to-bottom from the composed sub-components, matches the doc copy, and is responsive.

---

## Build order summary

1. Tokens + UI primitives (reuse-first)
2. Header + Footer (reuse)
3. Hero + Who We Are
4. Mission & Vision + Our Story
5. Our Values (icon cards)
6. What We Do + Our Approach
7. Leadership / Team
8. Global Presence + Partners
9. CTA band -> **compose AboutPage wrapper**
