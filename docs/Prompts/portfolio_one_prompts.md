# Vision Zero Connect — Portfolio One Page Build Prompts

A sequenced, **executable** set of prompts for building the **Portfolio One** product page
(route `/portfolio-one`). Each prompt builds small, reusable **sub-components**, then a final
prompt **wraps them into one route**. The page reuses the design system, primitives, Header,
and Footer already built for the home / About / Who-We-Serve pages — do **not** recreate
those, only add the new page's sections.

> **Source of truth**
> - **Design reference:** `https://zipteam.my.canva.site/portfolio-one-rework`
> - **Copy / structure:** the verbatim copy captured in this document (every heading, body, CTA, list item, and tag).
> - **Image assets:** `website/assets/Portfolio One Page/` — copy the files used below into `website/public/assets/portfolio-one/` with the suggested names. See the **Asset manifest** below.
> - **Existing code:** primitives in `components/ui/`, chrome in `components/layout/`, tokens in `app/globals.css`. Mirror the `/about` and `/who-we-serve` route pattern (`app/<route>/page.tsx` + `components/sections/<route>/`).

---

## Page structure (top → bottom)

1. **Header** — existing global chrome.
2. **Hero** (dark gradient) — eyebrow + lime headline + intro + two CTAs, product dashboard + award badge on the right.
3. **Overview / "Reimagined"** (dark navy) — video-thumbnail image + lime heading + 3 intro paragraphs.
4. **Intelligent Tools** (light mint) — heading + intro + 6 numbered feature cards (3×2 grid).
5. **Operational Visibility** (dark navy) — lime heading + intro + 6-item check list, image right.
6. **Real-Time Monitoring** (light mint) — image left + teal heading + intro + 6 metric chips + note + CTA.
7. **Performance Register** (dark navy) — lime heading + intro + 4-item check list, image right.
8. **Two-up cards** (light) — two stacked-on-mobile cards with teal-overlay photos and lime headings.
9. **Complex Portfolios** (dark navy + villas photo) — lime heading + "supports" pill tags.
10. **Implementation Process** (light mint) — heading + 4 numbered step cards (01–04).
11. **Final CTA + contact form** (light, line-art bg) — teal heading + intro, teal form panel.
12. **Footer** — existing global chrome.

Background rhythm alternates **dark → light → dark → light** to separate sections.

---

## Reuse, don't rebuild

Import these — do not duplicate:

- **Tokens** (`app/globals.css`): `--teal #045858`, `--ink #191A19`, `--navy #0F1827`, `--grey`, the lime gradient (`--grad-lime` / `bg-grad-lime`), `bg-grad-dark`, the mint radial used by `AboutHero`/`WhoWeServeHero`, `py-section` / `py-section-sm`, `text-display-sm`.
- **Primitives** (`components/ui/`): `Container`, `Button` (`primary` lime / `dark` / `ghost`), `SectionWrapper`, `SectionHeading`, `Card`, `GradientText`, `Reveal`.
- **Chrome** (`components/layout/`): `Header`, `Footer`.

**Headline colour rule (from the design):** on **dark** backgrounds headlines are **lime**; on **light** backgrounds headlines are **solid teal**.

---

## Asset manifest

Copy from `website/assets/Portfolio One Page/` → `website/public/assets/portfolio-one/`:

| Source | Suggested name | Used in |
|---|---|---|
| `4.png` | `award-badge.png` | Hero — "2025 CRE Data Solutions of the Year" badge |
| `9.png` | `visibility.png` | Operational Visibility (§5) — woman presenting |
| `5.png` | `monitoring.png` | Real-Time Monitoring (§6) — skyscrapers |
| `6.png` | `register.png` | Performance Register (§7) — lobby + spiral staircase |
| `7.png` | `card-reporting.png` | Two-up card A (§8) — office team (teal overlay) |
| `8.png` | `card-infrastructure.png` | Two-up card B (§8) — overhead workspace (teal overlay) |
| `2.png` | `portfolios-bg.png` | Complex Portfolios (§9) — residential villas |
| `3.png` | `cta-linework.png` | Final CTA (§11) — line-art building (decorative) |
| `10–15.png` | `step-1.png … step-6.png` | Intelligent Tools (§4) — numbered badges (or render numbers in CSS) |
| `16.png` | `check.png` | Check lists (§5, §7) — lime tick |
| `17.png` | `logo-portfolio-one-white.png` | Hero/Header — white Portfolio One wordmark |

- **Hero dashboard** is not in the assets folder. Reuse the existing `/assets/home/spotlight-portfolio.png` (or export the dashboard mockup from the Canva page) as the hero product visual.
- The numbered badges (`10–15`) are simple navy circles with white numerals — prefer rendering them in CSS (`rounded-full bg-navy text-white`) and keep the PNGs as a fallback.

---

## Target folder structure (add these files only)

```
website/
├── app/
│   └── portfolio-one/
│       └── page.tsx                     ← Prompt 8 (route + metadata + compose)
├── components/
│   └── sections/
│       └── portfolio-one/
│           ├── portfolio-one.data.ts    ← Prompt 1 (all copy + arrays)
│           ├── PortfolioHero.tsx        ← Prompt 2
│           ├── OverviewBlock.tsx        ← Prompt 3
│           ├── IntelligentTools.tsx     ← Prompt 3 (+ FeatureCard)
│           ├── FeatureCard.tsx          ← Prompt 3
│           ├── OperationalVisibility.tsx← Prompt 4
│           ├── RealTimeMonitoring.tsx   ← Prompt 4
│           ├── PerformanceRegister.tsx  ← Prompt 5
│           ├── TwoUpCards.tsx           ← Prompt 5
│           ├── ComplexPortfolios.tsx    ← Prompt 6
│           ├── ImplementationProcess.tsx← Prompt 6 (+ StepCard)
│           ├── PortfolioCTA.tsx         ← Prompt 7
│           ├── CheckList.tsx            ← Prompt 4 (shared: lime tick + label)
│           └── index.ts                 ← barrel export
└── public/assets/portfolio-one/         ← assets from the manifest
```

---

# PROMPT 1 — Content data module

**Goal:** Put every string and list on the page into one typed module so the section
components stay content-driven.

Create `components/sections/portfolio-one/portfolio-one.data.ts`, exporting:

- `hero`:
  - eyebrow: **"Real-Time Portfolio Visibility"**
  - headline: **"Enhanced Building Performance Through Operational Intelligence"**
  - intro: *"Portfolio One connects live building data, smart meters, and BMS systems into one intelligent platform, helping property and asset teams monitor performance, reduce operational waste, and optimise portfolios in real time."*
  - primaryCta: `{ label: "Get Started Now", href: "#contact" }`
  - secondaryCta: `{ label: "See Portfolio One in Action", href: "#contact" }` (play-icon, ghost)
  - award: *"2025 CRE Data Solutions of the Year — PropTech Breakthrough Awards"*

- `overview`:
  - headline: **"Building Performance Management, Reimagined"**
  - paragraphs:
    1. *"Portfolio One is a building and portfolio management platform designed to transform complex operational data into actionable performance insights."*
    2. *"From live utility tracking and BMS integration to benchmarking, automated alerts, and reporting, Portfolio One gives commercial real estate teams greater visibility and control across their assets."*
    3. *"Built for operational efficiency, Portfolio One helps organisations reduce energy waste, improve asset performance, and support long-term portfolio optimisation through real-time intelligence and automation."*

- `tools` (heading + intro + `FEATURES`):
  - heading: **"Intelligent Tools Built for Real Asset Performance"**
  - intro: *"Portfolio One combines live operational data, intelligent automation, and portfolio-wide analytics to help teams optimise building performance across every asset."*
  - `FEATURES` (6, in order, with `number` 1–6):
    1. **Live Data Integration** — *"Connect smart meters, BMS systems, and building technologies into one centralised operational platform with real-time visibility across your portfolio."*
    2. **Utility Manager** — *"Track electricity, gas, water, waste, and cost performance across buildings with advanced analytics and consumption monitoring."*
    3. **BMS Manager** — *"Monitor live building system performance, identify anomalies, and automate alerts before issues impact operations or occupant comfort."*
    4. **Portfolio Performance Register** — *"Benchmark and rank buildings against recognised industry frameworks to identify underperforming assets and prioritise action."*
    5. **Automated Reporting** — *"Generate building-level and portfolio-level reports instantly using live operational data and configurable reporting outputs."*
    6. **Net Zero Tracking** — *"Monitor emissions performance and track progress against operational reduction targets and long-term Net Zero pathways."*

- `visibility`:
  - headline: **"Built for Operational Visibility and Smarter Decision-Making"**
  - intro: *"Portfolio One helps property owners, facilities teams, and asset managers move beyond fragmented building data and manual reporting processes by centralising operational intelligence across their portfolio."*
  - listLead: *"By centralising operational intelligence across your portfolio, teams can:"*
  - items: `["Reduce operational waste and inefficiencies", "Improve response times to building performance issues", "Benchmark assets against industry standards", "Monitor energy and utility performance in real time", "Automate reporting and performance analysis", "Prioritise operational and capital improvements with confidence"]`
  - image: `/assets/portfolio-one/visibility.png`

- `monitoring`:
  - headline: **"Real-Time Monitoring Across Critical Building Systems"**
  - intro: *"Portfolio One continuously monitors live building data to identify operational deviations and performance anomalies as they happen."*
  - chipsLead: *"Integrated with existing building technologies and BMS systems, the platform provides visibility across key operational metrics including:"*
  - chips: `["HVAC performance", "Temperature and humidity", "Lighting systems", "Occupancy trends", "Utility consumption", "Indoor environmental performance"]`
  - note: *"Automated alerts help teams respond faster, minimise downtime, and reduce unnecessary operational costs."*
  - cta: `{ label: "See Live Monitoring in Action", href: "#contact" }`
  - image: `/assets/portfolio-one/monitoring.png`

- `register`:
  - headline: **"Understand Which Buildings Need Attention First"**
  - intro: *"Portfolio One automatically compares building performance against recognised industry standards and internal portfolio benchmarks."*
  - listLead: *"The Portfolio Performance Register helps teams quickly identify:"*
  - items: `["High-performing assets", "Operational inefficiencies", "Performance gaps", "Buildings exceeding benchmark thresholds"]`
  - image: `/assets/portfolio-one/register.png`

- `twoUp` (array of 2):
  1. **Automated Reporting Without the Administrative Burden** — *"Generate professional portfolio and building performance reports in minutes using live operational data already connected within the platform. Customise reports based on your operational requirements and generate outputs instantly across individual buildings or entire portfolios."* — image `card-reporting.png`
  2. **Designed to Work With Your Existing Infrastructure** — *"Portfolio One integrates with your existing smart building technologies and operational systems, reducing implementation friction while improving visibility across your assets. Our engineering team works directly with your organisation to configure the most effective and reliable data connectivity approach for your buildings."* — image `card-infrastructure.png`

- `portfolios`:
  - headline: **"Built for Complex Building Portfolios"**
  - lead: *"Portfolio One supports:"*
  - tags: `["Commercial property owners", "Asset managers", "Facilities management teams", "Property operations teams", "Real estate investment groups", "Multi-site portfolios", "Commercial and mixed-use developments"]`
  - background: `/assets/portfolio-one/portfolios-bg.png`

- `process` (heading + `STEPS`):
  - heading: **"A Structured Implementation Process"**
  - `STEPS` (4):
    - 01 **Initial Assessment** — *"We assess your building technologies, operational goals, and portfolio requirements."*
    - 02 **Platform Configuration** — *"Our team configures Portfolio One to align with your infrastructure and operational workflows."*
    - 03 **Integration & Connectivity** — *"We connect live data sources including BMS systems and smart meters where applicable."*
    - 04 **Training & Handover** — *"Your team receives onboarding, training, and continued support to maximise platform value."*

- `closing`:
  - headline: **"Ready to Optimise Your Building Portfolio?"**
  - intro: *"Take the first step towards transforming your building management with Portfolio One. Our team of experts is ready to guide you through the process and create a tailored solution for your needs."*
  - form fields: Email, First Name, Last Name, Phone number, Message; submit label **"Submit"**.

**Done when:** all copy lives in this module and is typed; sections import from it.

---

# PROMPT 2 — Hero (dark)

**Goal:** Top-of-page hero on the dark teal→green gradient.

- Create `PortfolioHero.tsx`. Background: dark radial/linear gradient (deep navy/ink → teal-green, matching the reference). Top padding clears the fixed header (`pt-32 md:pt-40`).
- Two-column grid on `lg`: **copy left**, **product dashboard right**.
  - Left: eyebrow `Real-Time Portfolio Visibility` (small, white/70), `<h1>` headline in **lime**, intro paragraph (white/80), then two buttons in a row — **"Get Started Now"** (`primary` lime) and **"See Portfolio One in Action"** (`ghost`, with a play ▶ icon).
  - Right: the dashboard image (reuse `/assets/home/spotlight-portfolio.png`) tilted/`rounded-xl shadow-2xl`, bleeding slightly off the right edge. Overlay the **award badge** (`award-badge.png`) near its bottom.
- Use `animate-fade-in-up` staggered like the other heroes. Drive from `hero`.

**Done when:** hero renders the lime headline, dual CTAs, dashboard, and award badge; responsive (dashboard drops below copy on mobile).

---

# PROMPT 3 — Overview block + Intelligent Tools grid

**Goal:** The narrative intro and the 6-feature capability grid.

- `OverviewBlock.tsx` — **dark navy** (`bg-navy` / `bg-grad-dark`), `py-section`. Two-column: image left (a building/team image with a centered **play-button** overlay → opens nothing for now, or links `#contact`), copy right with **lime** `<h2>` headline and the three `overview` paragraphs (white/75). Wrap in `Reveal`.
- `FeatureCard.tsx` — a `Card` showing a **numbered badge** (navy circle, white numeral — render in CSS), a bold **ink** title, and the description (ink/70).
- `IntelligentTools.tsx` — **light mint** background, centered `SectionHeading` (teal headline `tools.heading` + intro), then a responsive grid (1 / 2 / 3 cols) mapping `FEATURES` → `FeatureCard`.

**Done when:** the overview reads dark with a lime headline, and all six feature cards render from the array with their numbers.

---

# PROMPT 4 — Operational Visibility + Real-Time Monitoring

**Goal:** Two alternating "split" sections, plus the shared `CheckList`.

- `CheckList.tsx` (shared) — maps `string[]` to rows of a **lime tick** (`check.png` or an inline SVG) + label. Variant prop for dark vs light text.
- `OperationalVisibility.tsx` — **dark navy**, `py-section`. Copy left: **lime** `<h2>` (`visibility.headline`), intro (white/75), `listLead` (semibold), then `CheckList` (dark variant) over `visibility.items` (render as compact dark rows/cards). Image right: `visibility.png`, rounded.
- `RealTimeMonitoring.tsx` — **light mint**, `py-section`. Image left: `monitoring.png`, rounded. Copy right: **teal** `<h2>` (`monitoring.headline`), intro, `chipsLead`, then the six **chips** as teal rounded pills in a 2-col grid, the `note` (ink/60), and a `Button` **"See Live Monitoring in Action"**.

**Done when:** both sections render from data with correct headline colours and the chips/checklist layouts match the reference.

---

# PROMPT 5 — Performance Register + Two-up cards

**Goal:** The benchmarking section and the paired feature cards.

- `PerformanceRegister.tsx` — **dark navy**, mirror §4's split but with copy left / image right (`register.png`): **lime** `<h2>` (`register.headline`), intro, `listLead`, `CheckList` (dark) over `register.items`.
- `TwoUpCards.tsx` — **light** background, `py-section`. A 2-column grid (stacks on mobile) of two cards; each card uses its photo (`card-reporting.png` / `card-infrastructure.png`) with a **teal gradient overlay** and white text on top: a **lime** title and a white/85 paragraph. Drive from `twoUp`. Wrap each in `Reveal`.

**Done when:** the register section matches §4's styling (image on the opposite side) and the two overlay cards render from the array.

---

# PROMPT 6 — Complex Portfolios + Implementation Process

**Goal:** The audience-tags band and the 4-step process.

- `ComplexPortfolios.tsx` — **dark navy** with the villas photo (`portfolios-bg.png`) anchored at the bottom (image bleeds full-width under the content, dark overlay for legibility). Centered **lime** `<h2>` (`portfolios.headline`), the `lead` line, then the **tags** rendered as **lime pill** chips, centered and wrapping.
- `StepCard.tsx` — a teal card showing a large step number (`01`–`04`), a bold white title, and a white/80 description.
- `ImplementationProcess.tsx` — **light mint**, centered heading (`process.heading`), then a 4-column row (stacks/2-col on smaller screens) mapping `STEPS` → `StepCard`.

**Done when:** the tags wrap as lime pills over the villas image, and the four steps render in order with their numbers.

---

# PROMPT 7 — Final CTA + contact form

**Goal:** Closing conversion section.

- `PortfolioCTA.tsx` — `id="contact"`, light background with the **line-art building** (`cta-linework.png`) as a faint decorative graphic on the left.
- Two-column on `lg`: left = **teal** `<h2>` (`closing.headline`) + intro paragraph (ink/70); right = a **teal form panel** (`rounded-2xl bg-teal p-8`) with fields **Email, First Name, Last Name, Phone number, Message** (textarea) and a **lime "Submit"** button.
- Reuse the existing form/validation approach from `components/sections/contact/ContactSection.tsx` (or a trimmed version). Stub the submit handler — no backend wiring. Include labels, required states, and visible focus rings.

**Done when:** the form captures all five fields with basic validation and the section anchors `#contact` (hero/monitoring CTAs scroll here).

---

# PROMPT 8 — Compose the route + wire navigation

**Goal:** Assemble `/portfolio-one` and link it.

- Add `components/sections/portfolio-one/index.ts` exporting every section.
- Create `app/portfolio-one/page.tsx` mirroring `app/about/page.tsx`:
  - `export const metadata` — `title: "Portfolio One — Vision Zero Connect"`, description from `hero.intro`.
  - Compose, framed by global chrome, in this order:
    ```
    <Header />
      <main id="main">
        <PortfolioHero />
        <OverviewBlock />
        <IntelligentTools />
        <OperationalVisibility />
        <RealTimeMonitoring />
        <PerformanceRegister />
        <TwoUpCards />
        <ComplexPortfolios />
        <ImplementationProcess />
        <PortfolioCTA />
      </main>
    <Footer />
    ```
- Point the **"Portfolio One"** entry in the Footer's `SOLUTIONS` list (and any home-page Portfolio CTA) at `/portfolio-one`.
- Final pass: alternating dark/light rhythm, headline colour rule (lime on dark, teal on light), responsive checks (mobile / tablet / desktop), alt text on every image, focus states, and `#contact` scroll wiring from all CTAs.

**Done when:** `/portfolio-one` renders top-to-bottom from the composed sections between the global Header and Footer, matches the copy above, and is responsive.

---

## Build order summary

1. Content data module (`portfolio-one.data.ts`) + copy assets into `public/assets/portfolio-one/`
2. Hero (dark, dashboard + award + dual CTA)
3. Overview block + Intelligent Tools grid (6 numbered cards)
4. Operational Visibility + Real-Time Monitoring (+ shared `CheckList`)
5. Performance Register + Two-up overlay cards
6. Complex Portfolios pills + Implementation Process steps
7. Final CTA + contact form
8. **Compose `/portfolio-one` route + wire navigation**
