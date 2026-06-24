# Vision Zero Connect — Awards & Recognitions Page Build Prompts

A sequenced, **executable** set of prompts for building the **Awards & Recognitions**
page at route `/awards`. Each prompt builds small, reusable **sub-components**, then a
final prompt **wraps them into one route**. The page reuses the design system, primitives,
Header, and Footer already built for the home / About / Portfolio One / VZC Consult pages —
do **not** recreate those, only add the new page's sections.

> **Source of truth**
> - **Design reference:** `https://zipteam.my.canva.site/latest-awards-page`
> - **Copy / structure:** the verbatim copy captured in this document (every eyebrow, headline, body paragraph, award name, awarding body, stat, and CTA).
> - **Image assets:** add to `website/public/awards/` (referenced in code as `/awards/...`). Reuse existing brand assets where possible — the world map (`/assets/home/partners-map.png` or the `GlobalFootprint` map) + `location-pin` markers for Global Presence.
> - **Existing code:** primitives in `components/ui/`, chrome in `components/layout/`, tokens in `app/globals.css`. Mirror the `/vz-consult` and `/portfolio-one` route pattern (`app/<route>/page.tsx` + `components/sections/<route>/`).

---

## Page structure (top → bottom)

1. **Header** — existing global chrome.
2. **Hero** (light mint) — eyebrow + headline + two intro paragraphs on the left; a collage of three award/handover photos on the right.
3. **Award spotlights** (×3, alternating teal / dark bands) — each: awarding body + year (eyebrow), the award name as a **lime** headline, one or two paragraphs, a **"View Award Announcement"** link, and a trophy image on the opposite side.
4. **Driving Industry Progress Through Innovation** (dark navy) — lime headline + two paragraphs + **"Explore Our Solutions"** CTA, with an award-handover photo on the left.
5. **Global Presence. Recognised Impact.** (light mint) — teal headline + intro + two stat chips (`25+`, `5`), over a world map with location pins.
6. **Footer** — existing global chrome.

Background rhythm alternates **light → teal → dark → teal → dark → light**.

**Headline colour rule (from the design):** on **dark/teal** backgrounds headlines are **lime**; on **light** backgrounds headlines are **solid teal**.

---

## Reuse, don't rebuild

Import these — do not duplicate:

- **Tokens** (`app/globals.css`): `--teal`, `--ink`, `--navy`, `--lime`, `--grey`, `bg-grad-dark`, `bg-grad-mint`, `py-section` / `py-section-sm`, `text-display-sm`, `rounded-pill`, `rounded-card`.
- **Primitives** (`components/ui/`): `Container`, `Button` (`primary` lime / `dark` / `ghost`), `SectionWrapper` (`white` / `mint` / `dark` / `transparent` …), `SectionHeading`, `Card`, `GradientText`, `Reveal`.
- **Chrome** (`components/layout/`): `Header`, `Footer`.
- **Global Presence** reuses the world-map + pin approach from `components/sections/footprint/GlobalFootprint.tsx` (static here — map + pins + stat chips, no interactive detail card needed). Pins for the five offices.

---

## Target folder structure (add these files only)

```
website/
├── app/
│   └── awards/
│       └── page.tsx                 ← Prompt 6 (route + metadata + compose)
├── components/
│   └── sections/
│       └── awards/
│           ├── awards.data.ts        ← Prompt 1 (all copy + arrays)
│           ├── AwardsHero.tsx        ← Prompt 2
│           ├── AwardSpotlight.tsx    ← Prompt 3 (one reusable alternating band)
│           ├── AwardSpotlights.tsx   ← Prompt 3 (maps the 3 awards)
│           ├── DrivingProgress.tsx   ← Prompt 4
│           ├── AwardsPresence.tsx    ← Prompt 5
│           └── index.ts              ← barrel export
└── public/awards/                    ← hero collage, 3 trophy images, innovation photo
```

**Assets to drop into `public/awards/`** (placeholders fine until finals arrive):
- `hero-1.png`, `hero-2.png`, `hero-3.png` — the three hero collage photos (award presentations / collaboration).
- `award-cre.png` — gold star trophy held in hand (CRE Data Solution of the Year).
- `award-esgfintech.png` — crystal star trophy (ESGFinTech100).
- `award-saas.png` — crystal star trophy (Best ESG & Building-Performance SaaS Platform).
- `innovation.png` — two people exchanging an award (Driving Industry Progress section).

---

# PROMPT 1 — Content data module

**Goal:** Put every string and list on the page into one typed module so the section
components stay content-driven.

Create `components/sections/awards/awards.data.ts`, exporting:

- `hero`:
  - eyebrow: **"Awards and Recognitions"**
  - headline: **"Recognised for Advancing Asset Performance & Operational Excellence"**
  - paragraphs:
    1. *"Vision Zero Connect continues to be recognised globally for helping organisations improve asset performance, strengthen operational decision-making, and unlock long-term value across complex portfolios."*
    2. *"Our award-winning platforms and advisory capabilities support organisations seeking greater visibility, improved operational efficiency, stronger reporting capabilities, and better commercial outcomes across global markets."*
  - images: `["/awards/hero-1.png", "/awards/hero-2.png", "/awards/hero-3.png"]`

- `AWARDS` (array of 3, in order — each `{ body, year, name, paragraphs[], announcementHref, image }`):
  1. **CRE Data Solution of the Year**
     - body / year: **"PropTech Breakthrough Awards 2025"**
     - paragraphs:
       - *"Portfolio One was recognised as “CRE Data Solution of the Year” at the globally recognised PropTech Breakthrough Awards, reinforcing its position as a trusted platform for operational intelligence, portfolio visibility, and building performance management."*
       - *"The award highlights Portfolio One’s ability to unify fragmented operational data, support smarter decision-making, and help organisations improve efficiency across complex real asset environments."*
     - image: `/awards/award-cre.png`
     - announcementHref: `"#"` (replace with the live announcement URL when available)
  2. **ESGFinTech100 Recognition**
     - body / year: **"FinTech Global"**
     - paragraphs:
       - *"Vision Zero Connect was selected as one of the ESGFinTech100 by FinTech Global, recognising the company among the world’s leading technology firms driving innovation across sustainability and financial services."*
       - *"The recognition acknowledged Vision Zero Connect’s approach to simplifying operational reporting, data visibility, and helping organisations convert reporting obligations into strategic commercial outcomes."*
     - image: `/awards/award-esgfintech.png`
     - announcementHref: `"#"`
  3. **Best ESG & Building-Performance SaaS Platform**
     - body / year: **"CV Technology Excellence Awards 2026"**
     - paragraphs:
       - *"Vision Zero Connect was awarded “Best ESG & Building-Performance SaaS Platform” at the CV Technology Excellence Awards 2026, recognising the company’s continued innovation across operational performance, analytics, and intelligent reporting solutions."*
       - *"The award reinforces Vision Zero Connect’s commitment to helping organisations improve operational efficiency, reduce complexity, and support long-term sustainability and asset performance goals."*
     - image: `/awards/award-saas.png`
     - announcementHref: `"#"`

- `progress`:
  - headline: **"Driving Industry Progress Through Innovation"**
  - paragraphs:
    1. *"These recognitions reflect Vision Zero Connect’s continued focus on delivering practical, technology-enabled solutions for operational reporting, building performance, portfolio intelligence, and sustainability transformation."*
    2. *"With a growing international presence and a portfolio of innovative platforms, Vision Zero Connect continues to support organisations navigating evolving operational, commercial, and regulatory environments worldwide."*
  - cta: `{ label: "Explore Our Solutions", href: "/#products" }`
  - image: `/awards/innovation.png`

- `presence`:
  - headline: **"Global Presence. Recognised Impact."**
  - intro: *"From operational intelligence platforms to strategic advisory support, Vision Zero Connect works with organisations across commercial property, infrastructure, and real asset sectors to improve visibility, performance, and long-term operational outcomes."*
  - stats: `[{ value: "25+", label: "in-house industry experts" }, { value: "5", label: "Offices in countries" }]`

**Done when:** all copy lives in this module and is typed; sections import from it.

---

# PROMPT 2 — Hero (light)

**Goal:** Top-of-page hero on the soft mint gradient (match the other page heroes).

- Create `AwardsHero.tsx`. Same mint radial background and header-clearing top padding (`pt-32 md:pt-40`) as the other page heroes.
- Two-column grid on `lg`: copy left, photo collage right.
  - Left: small uppercase eyebrow (`hero.eyebrow`), `<h1>` headline in **solid teal**, then the two intro paragraphs (`text-ink/80`).
  - Right: a collage of the three `hero.images` (rounded, `object-cover`, `shadow-xl`) — e.g. an asymmetric grid (one tall + two stacked, or 2-up over 1).
- Drive from `hero`; use the staggered `animate-fade-in-up` pattern.

**Done when:** the hero renders the eyebrow, teal headline, two paragraphs, and the three-photo collage, responsive.

---

# PROMPT 3 — Award spotlights (reusable alternating band ×3)

**Goal:** The three award recognitions as full-width alternating bands.

- `AwardSpotlight.tsx` — one reusable band. Props: `{ body, year, name, paragraphs, announcementHref, image, reverse, tone }`.
  - `tone="dark"` → `bg-grad-dark`; `tone="teal"` → `bg-teal`. Headline (`name`) is always **lime**.
  - Two-column grid: text on one side, trophy `image` on the other. `reverse` flips the columns so the trophy alternates sides down the page.
  - Text column: the awarding body / year as a muted uppercase **eyebrow** (`text-white/70`), the **lime** award `name` as `<h2>` (`text-display-sm`), the `paragraphs` (`text-white/80`), then a **Button** (`primary` lime, `size="lg"`, uppercase tracking) labelled **"View Award Announcement"** linking to `announcementHref` (external → opens in a new tab).
  - Trophy column: the `image` (rounded, `object-contain`/`object-cover`, `drop-shadow-2xl`).
  - Wrap in `Reveal`.
- `AwardSpotlights.tsx` — maps `AWARDS` to `AwardSpotlight`, alternating `tone` (`dark` → `teal` → `dark`) and `reverse` so the layout zig-zags.

**Done when:** the three awards render from the array as alternating teal/dark bands with lime headlines, the awarding-body eyebrow, copy, trophy image, and a "View Award Announcement" button.

---

# PROMPT 4 — Driving Industry Progress Through Innovation (dark)

**Goal:** The narrative band tying the recognitions together.

- Create `DrivingProgress.tsx` — a **dark navy** (`bg-grad-dark`) band, two columns: the award-handover photo (`progress.image`, rounded, `shadow-2xl`) on the **left**, and on the **right** a **lime** `<h2>` (`progress.headline`), the two paragraphs (`text-white/80`), and a **Button** (`ghost` or `primary`, `size="lg"`, uppercase) labelled **"Explore Our Solutions"** pointing at `progress.cta.href`.
- Wrap content in `Reveal`.

**Done when:** the block reads on dark with a lime headline, the two paragraphs, the CTA, and the photo on the left.

---

# PROMPT 5 — Global Presence. Recognised Impact. (light)

**Goal:** The global footprint + stats, reusing the map treatment.

- Create `AwardsPresence.tsx` — a **light mint** band. A `SectionHeading` (teal `presence.headline`) + the `presence.intro` paragraph, plus the two **stat chips** (`presence.stats` — large `value` in teal/ink, small `label`, on a soft teal-tinted `rounded-2xl` chip), over a world map (reuse `GlobalFootprint`'s static map + `location-pin` markers; no interactive detail card). Pins for the five offices (Australia, UK, Hong Kong, Malta, United States).

**Done when:** the section shows the teal headline, intro, both stat chips, and the world map with pins.

---

# PROMPT 6 — Compose the route + wire navigation

**Goal:** Assemble `/awards` and link it.

- Add `components/sections/awards/index.ts` exporting every section.
- Create `app/awards/page.tsx` mirroring `app/vz-consult/page.tsx`:
  - `export const metadata` — `title: "Awards & Recognitions — Vision Zero Connect"`, description from `hero.paragraphs[0]`.
  - Compose, framed by global chrome, in this order:
    ```
    <Header />
      <main id="main">
        <AwardsHero />
        <AwardSpotlights />
        <DrivingProgress />
        <AwardsPresence />
      </main>
    <Footer />
    ```
- (Optional) link the page from the header nav and/or footer (e.g. an **"Awards"** entry, or under Resources). Only do this if the awards page is meant to be reachable from the landing page.
- Final pass: alternating light/teal/dark rhythm, headline colour rule (lime on dark/teal, teal on light), responsive checks (mobile / tablet / desktop), `alt` text on every image, focus states, and external `announcementHref` links opening in a new tab.

**Done when:** `/awards` renders top-to-bottom from the composed sections between the global Header and Footer, matches the copy above, and is responsive.

---

## Build order summary

1. Content data module (`awards.data.ts`) + drop images into `public/awards/`
2. Hero (light, teal headline + three-photo collage)
3. Award spotlights (reusable alternating teal/dark band ×3, lime headlines + trophies)
4. Driving Industry Progress Through Innovation (dark, "Explore Our Solutions")
5. Global Presence. Recognised Impact. (light, map + two stat chips)
6. **Compose `/awards` route + (optional) wire navigation**
