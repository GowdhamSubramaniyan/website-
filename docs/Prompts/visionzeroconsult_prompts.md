# Vision Zero Connect — VZC Consult Page Build Prompts

A sequenced, **executable** set of prompts for building the **VZC Consult** (advisory)
page at route `/vz-consult`. Each prompt builds small, reusable **sub-components**, then a
final prompt **wraps them into one route**. The page reuses the design system, primitives,
Header, and Footer already built for the home / About / Who-We-Serve / Portfolio One pages —
do **not** recreate those, only add the new page's sections.

> **Source of truth**
> - **Design reference:** `https://zipteam.my.canva.site/latest-vzc-consult-page`
> - **Copy / structure:** the verbatim copy captured in this document (every heading, body, CTA, list item, and stat).
> - **Image assets:** add to `website/public/assets/vz-consult/` (a VZC Consult asset folder is not supplied yet). Reuse existing brand assets where possible — the `VZC-consult` logo (`website/assets/logos/VZC-consult.png`), the world map (`/assets/home/global-map.png`) and `location-pin.png` for Global Presence, and `usp-*`/people photos as placeholders until final imagery is provided.
> - **Existing code:** primitives in `components/ui/`, chrome in `components/layout/`, tokens in `app/globals.css`. Mirror the `/about`, `/who-we-serve`, and `/portfolio-one` route pattern (`app/<route>/page.tsx` + `components/sections/<route>/`).

---

## Page structure (top → bottom)

1. **Header** — existing global chrome.
2. **Hero** (light mint) — headline + intro + "Talk to Our Team" CTA, professional-with-laptop photo on the right.
3. **Trusted Advisory** (teal band) — a white card overlapping the band with a heading + two paragraphs and a building photo bleeding off its lower edge.
4. **What We Help With** (light mint) — team photo left, six capability cards right.
5. **Backed by Technology** (dark navy) — heading + intro + the three ecosystem links (Essentials / Essentials+ / Portfolio One) + a media panel with a play affordance.
6. **Who We Work With** (light mint) — intro left, five teal audience bars right.
7. **A Commercially Focused Approach** (dark navy) — team photo left, lime heading + two paragraphs right.
8. **Global Presence** (light mint) — heading + two paragraphs + two stat chips, over a world map with location pins.
9. **Book a Consultation** (teal) — lime heading + intro + "Talk to Our Team" CTA, team photo on the right.
10. **Footer** — existing global chrome.

Background rhythm alternates **light → teal → light → dark → light → dark → light → teal**.

---

## Reuse, don't rebuild

Import these — do not duplicate:

- **Tokens** (`app/globals.css`): `--teal #045858`, `--ink #191A19`, `--navy #0F1827`, `--grey`, `--lime`, `bg-grad-dark`, `bg-grad-mint`, the mint radial used by the other heroes, `py-section` / `py-section-sm`, `text-display-sm`.
- **Primitives** (`components/ui/`): `Container`, `Button` (`primary` lime / `dark` / `ghost`), `SectionWrapper`, `SectionHeading`, `Card`, `GradientText`, `Reveal`.
- **Chrome** (`components/layout/`): `Header`, `Footer`.
- **Global Presence** can reuse the world-map + pin approach from `components/sections/footprint/GlobalFootprint.tsx` (static here — map + pins + stats, no interactive detail card needed).

**Headline colour rule (from the design):** on **dark** backgrounds headlines are **lime**; on **light** backgrounds headlines are **solid teal**.

---

## Target folder structure (add these files only)

```
website/
├── app/
│   └── vz-consult/
│       └── page.tsx                   ← Prompt 8 (route + metadata + compose)
├── components/
│   └── sections/
│       └── vz-consult/
│           ├── vz-consult.data.ts     ← Prompt 1 (all copy + arrays)
│           ├── ConsultHero.tsx        ← Prompt 2
│           ├── TrustedAdvisory.tsx    ← Prompt 3
│           ├── WhatWeHelpWith.tsx     ← Prompt 4 (+ HelpCard)
│           ├── HelpCard.tsx           ← Prompt 4
│           ├── BackedByTech.tsx       ← Prompt 5
│           ├── WhoWeWorkWith.tsx      ← Prompt 5
│           ├── CommercialApproach.tsx ← Prompt 6
│           ├── GlobalPresence.tsx     ← Prompt 6
│           ├── ConsultCTA.tsx         ← Prompt 7
│           └── index.ts               ← barrel export
└── public/assets/vz-consult/          ← hero, trusted, help, tech, approach, cta photos
```

---

# PROMPT 1 — Content data module

**Goal:** Put every string and list on the page into one typed module so the section
components stay content-driven.

Create `components/sections/vz-consult/vz-consult.data.ts`, exporting:

- `hero`:
  - headline: **"Strategic Advisory to Optimise Building Performance"**
  - intro: *"VZC Consult works with organisations navigating growing operational, reporting, and sustainability pressures across real assets and property portfolios. From disclosure readiness and data strategy through to operational performance planning and transition pathways, we help businesses move from fragmented information to clear, commercially aligned action."*
  - cta: `{ label: "Talk to Our Team", href: "#contact" }`
  - image: `/assets/vz-consult/hero.png` (a professional working on a laptop)

- `trusted`:
  - headline: **"Trusted Advisory for Property and Operational Performance"**
  - paragraphs:
    1. *"Organisations today are expected to manage increasing demands around operational performance, emissions visibility, asset efficiency, and stakeholder reporting."*
    2. *"VZC Consult provides specialist guidance to help businesses respond with clarity, structure, and confidence. Our team supports property owners, asset managers, and organisations seeking practical pathways toward stronger operational outcomes and future readiness."*
  - image: `/assets/vz-consult/trusted.png` (a commercial high-rise, looking up)

- `help` (heading + `HELP_ITEMS`):
  - heading: **"What We Help With"**
  - image: `/assets/vz-consult/help.png` (a strategy session / team at a laptop)
  - `HELP_ITEMS` (6, in order):
    1. **Regulatory & Disclosure Readiness** — *"Prepare for evolving reporting obligations and stakeholder expectations with gap assessments, disclosure planning, and practical implementation support."*
    2. **Building Performance Enhancement** — *"Identify opportunities to reduce energy use, lower operating costs, and improve asset efficiency across your portfolio."*
    3. **Operational Intelligence & Data Strategy** — *"Connect operational and utility data to create a single source of truth for reporting, planning, and performance tracking."*
    4. **Emissions & Transition Planning** — *"Establish emissions baselines, identify reduction opportunities, and build practical roadmaps for long-term transition goals."*
    5. **Portfolio Benchmarking & Performance Reviews** — *"Measure asset performance against internal targets and industry benchmarks to identify strengths and improvement opportunities."*
    6. **Stakeholder & Supply Chain Support** — *"Respond confidently to lender, procurement, investor, and customer information requests with structured data and reporting strategies."*

- `tech`:
  - headline: **"Practical Advisory Backed by Performance-Proven Technology"**
  - intro: *"VZC Consult combines specialist advisory expertise with the capabilities of the wider Vision Zero Connect ecosystem."*
  - lead: *"Where required, VZC Consult engagements can be supported by the Vision Zero Connect technology ecosystem:"*
  - ecosystem (name + descriptor + href):
    - **Essentials** — *"for AI-powered ESG reporting."* → `/essentials`
    - **Essentials+** — *"for advanced operational and reporting capabilities."* → `/essentials-plus`
    - **Portfolio One** — *"for real-time building and asset intelligence."* → `/portfolio-one`
  - closing: *"Creating a connected approach between strategy, technology, and operational performance."*
  - image: `/assets/vz-consult/tech.png` (dark commercial buildings — media/play panel)

- `audiences`:
  - heading: **"Who We Work With"**
  - intro: *"We support organisations managing complex property portfolios, operational performance requirements, and growing stakeholder expectations across real assets and built environments."*
  - items: `["Property Owners and Operators", "Assets and Facility Managers", "Commercial Real Estate Groups", "Enterprise & Mid-Market Organisations", "Infrastructure & Portfolio Teams"]`

- `approach`:
  - headline: **"A Commercially Focused Approach"**
  - paragraphs:
    1. *"Our advisory model is built around practical implementation, operational visibility, and measurable outcomes."*
    2. *"Rather than producing static reports that sit on a shelf, VZC Consult focuses on helping organisations build clearer operational frameworks, improve data confidence, and support better long-term asset performance."*
  - image: `/assets/vz-consult/approach.png` (a team celebrating)

- `presence`:
  - headline: **"Global Presence"**
  - paragraphs:
    1. *"Vision Zero Connect supports organisations across Australia, UK, Hong Kong, Malta, and United States, bringing a global perspective to operational performance, reporting readiness, and building intelligence."*
    2. *"Our experience across diverse property markets and regulatory environments allows us to support clients with strategies that are commercially grounded, scalable, and aligned with evolving industry expectations."*
  - stats: `[{ value: "25+", label: "in-house industry experts" }, { value: "5", label: "Offices in countries" }]`

- `closing`:
  - headline: **"Book a Consultation"**
  - intro: *"Whether you're responding to stakeholder expectations, preparing for disclosure requirements, or improving building performance visibility, VZC Consult can help your organisation move forward with confidence."*
  - cta: `{ label: "Talk to Our Team", href: "#contact" }`
  - image: `/assets/vz-consult/cta.png` (an advisory team at a laptop)

**Done when:** all copy lives in this module and is typed; sections import from it.

---

# PROMPT 2 — Hero (light)

**Goal:** Top-of-page hero on the soft mint gradient (match the other page heroes).

- Create `ConsultHero.tsx`. Same mint radial background and header-clearing top padding (`pt-32 md:pt-40`) as `AboutHero` / `WhoWeServeHero`.
- Two-column grid on `lg`: copy left, photo right (rounded, `shadow-xl`, `object-cover`).
  - Left: `<h1>` headline in **solid teal**, intro paragraph (`text-ink/80`), and the **Button** (`dark` teal, `size="lg"`, uppercase tracking) labelled **"Talk to Our Team"**.
- Drive from `hero`; use the staggered `animate-fade-in-up` pattern.

**Done when:** the hero renders the data copy with a teal headline and the photo beside it, responsive.

---

# PROMPT 3 — Trusted Advisory (overlapping card on teal)

**Goal:** The teal band with a floating white card.

- Create `TrustedAdvisory.tsx` — a **teal** (`bg-teal`) band with generous padding.
- Inside, a white **Card**/panel (`rounded-3xl bg-white p-8 shadow-xl`) holding: a **teal** `<h2>` (`trusted.headline`) and the two paragraphs (`text-ink/70`) in a two-column text layout on `md`+, with the building photo (`trusted.image`) bleeding off the card's lower edge (rounded, clipped).
- Wrap in `Reveal`.

**Done when:** the white card sits over the teal band with the heading, two paragraphs, and the building image anchored to its bottom.

---

# PROMPT 4 — What We Help With (image + 6 capability cards)

**Goal:** The core services list.

- `HelpCard.tsx` — a soft card (light teal tint, `rounded-xl`) with a bold **ink** title and a muted description (`text-ink/70`). Takes `{ title, description }`.
- `WhatWeHelpWith.tsx` — **light mint** band. Two columns on `lg`: the team photo (`help.image`, rounded) on the left (sticky/top-aligned), and a vertical stack of the six `HELP_ITEMS` mapped to `HelpCard` on the right. A `SectionHeading` (teal `help.heading`) sits above the right column. Each card wrapped in `Reveal` with a small stagger.

**Done when:** the six capability cards render from the array beside the image and match the copy.

---

# PROMPT 5 — Backed by Technology + Who We Work With

**Goal:** The ecosystem tie-in and the audience list.

- `BackedByTech.tsx` — **dark navy** band, two columns. Left: **lime** `<h2>` (`tech.headline`), the intro (white/75), the `lead` line, then the three ecosystem entries — each as a row with the **bold lime** product name linked to its route + the descriptor in white/75 — and the `closing` line. Right: a media panel (image `tech.image`) with a centered outline **play** affordance (reuse the Portfolio One overview treatment).
- `WhoWeWorkWith.tsx` — **light mint** band, two columns. Left: **teal** `<h2>` (`audiences.heading`) + intro. Right: the five `audiences.items` rendered as full-width **teal bars** (`rounded-lg bg-teal px-6 py-4 text-center font-semibold text-white`), stacked with even spacing.

**Done when:** the ecosystem links route correctly and the five audience bars render from the array.

---

# PROMPT 6 — A Commercially Focused Approach + Global Presence

**Goal:** The differentiator block and the global footprint.

- `CommercialApproach.tsx` — **dark navy** band, two columns: team photo (`approach.image`) left, **lime** `<h2>` (`approach.headline`) + two paragraphs (white/75) right. Wrap in `Reveal`.
- `GlobalPresence.tsx` — **light mint** band. A `SectionHeading` (teal `presence.headline`) + the two paragraphs, plus the two **stat chips** (`presence.stats` — large `value` in teal/ink, small `label`), over a world map (`/assets/home/global-map.png`) with `location-pin.png` markers (reuse the static map + pin approach from `GlobalFootprint`; no interactive detail card needed). Pins for Australia, UK, Hong Kong, Malta, United States.

**Done when:** the approach block reads on dark with a lime headline, and Global Presence shows the map, pins, and both stat chips.

---

# PROMPT 7 — Book a Consultation (CTA)

**Goal:** Closing conversion band.

- Create `ConsultCTA.tsx` with `id="contact"` — a **teal** band, two columns: **lime** `<h2>` (`closing.headline`) + intro (white/85) + a **Button** (`primary` lime, `size="lg"`, uppercase) labelled **"Talk to Our Team"** on the left; the advisory-team photo (`closing.image`, rounded) on the right.
- Wrap content in `Reveal`.

**Done when:** the CTA renders the copy and button on teal with the photo, anchored `#contact` so the hero/closing CTAs scroll here.

---

# PROMPT 8 — Compose the route + wire navigation

**Goal:** Assemble `/vz-consult` and link it.

- Add `components/sections/vz-consult/index.ts` exporting every section.
- Create `app/vz-consult/page.tsx` mirroring `app/portfolio-one/page.tsx`:
  - `export const metadata` — `title: "VZC Consult — Vision Zero Connect"`, description from `hero.intro`.
  - Compose, framed by global chrome, in this order:
    ```
    <Header />
      <main id="main">
        <ConsultHero />
        <TrustedAdvisory />
        <WhatWeHelpWith />
        <BackedByTech />
        <WhoWeWorkWith />
        <CommercialApproach />
        <GlobalPresence />
        <ConsultCTA />
      </main>
    <Footer />
    ```
- Point the **"VZC Consult"** entry in the Footer's `SOLUTIONS` list at `/vz-consult` (it's currently an in-page `#vz-consult` anchor), and confirm the home Portfolio/spotlight CTA for VZ Consult points here.
- Final pass: alternating light/teal/dark rhythm, headline colour rule (lime on dark, teal on light), responsive checks (mobile / tablet / desktop), alt text on every image, focus states, and `#contact` scroll wiring from the CTAs.

**Done when:** `/vz-consult` renders top-to-bottom from the composed sections between the global Header and Footer, matches the copy above, and is responsive.

---

## Build order summary

1. Content data module (`vz-consult.data.ts`) + copy assets into `public/assets/vz-consult/`
2. Hero (light, teal headline + "Talk to Our Team")
3. Trusted Advisory (white card overlapping the teal band)
4. What We Help With (image + 6 capability cards)
5. Backed by Technology (ecosystem links) + Who We Work With (audience bars)
6. A Commercially Focused Approach + Global Presence (map + stats)
7. Book a Consultation CTA
8. **Compose `/vz-consult` route + wire navigation**
