# Vision Zero Connect — Home Page Build Prompts

A sequenced set of high-level prompts for building the **Vision Zero Connect** home page.
Each prompt builds small, reusable **sub-components**, then a final prompt **wraps them into one main page**.

> **Source of truth**
> - **Copy / structure:** `website/doc/Home_Page.docx` (all headings, body text, and CTAs)
> - **Image assets:** `website/doc/Home Page Assets`
> - **Folder structure:** already set up — do **not** recreate it, only add files into it.

---

## Assumptions (adjust if your stack differs)

- **Stack:** React (Vite or Next.js) + Tailwind CSS. If you use plain CSS/SCSS, map the tokens below to CSS variables instead.
- **Pattern:** Small presentational sub-components → composed into one `HomePage` wrapper.
- Keep components **content-driven** (text/CTA labels come from the doc, not invented).

---

## Design Tokens (from `colour_scheme.jpg`)

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

**Usage guide:** dark navy/teal for hero + spotlight backdrops, lime gradient for primary CTAs and accents, mint gradient for soft section backgrounds, white/grey for content surfaces.

---

## Target Folder Structure

```
src/
├── styles/
│   ├── tokens.(css|ts)          ← color/spacing/typography tokens above
│   └── globals.css
├── components/
│   ├── ui/                      ← shared primitives (Prompt 1)
│   │   ├── Container
│   │   ├── Button
│   │   ├── SectionWrapper
│   │   ├── SectionHeading
│   │   ├── Card
│   │   └── GradientText
│   ├── layout/                  ← Prompt 2
│   │   ├── Header
│   │   └── Footer
│   └── sections/                ← Prompts 3–8
│       ├── Hero
│       ├── USP
│       ├── Products            (ProductsSection + ProductCard)
│       ├── ProductSpotlights   (Essentials, Essentials+, PortfolioOne, VZConsult)
│       ├── WhyVZC
│       ├── Sectors             (SectorsSection + SectorCard)
│       ├── Partners
│       ├── Insights            (InsightsSection + InsightCard)
│       ├── Contact             (ContactSection + form + OptionCard)
│       └── GlobalFootprint
└── pages/
    └── HomePage                 ← Prompt 9 (the single main wrapper)
```

---

# PROMPT 1 — Design system & shared UI primitives

**Goal:** Establish the visual foundation and the reusable sub-components every section depends on.

- Create `styles/tokens` from the **Design Tokens** above (colors, gradients, plus a spacing scale, radii, and a type scale). Wire them into `globals.css` / Tailwind config.
- Build these primitives in `components/ui/`:
  - **Container** — max-width, responsive horizontal padding.
  - **Button** — variants: `primary` (lime gradient), `dark` (teal/ink), `ghost` (outline); supports an href/onClick and arrow icon.
  - **SectionWrapper** — vertical rhythm + background variant prop (`white | mint | dark | navy`).
  - **SectionHeading** — optional eyebrow/label, headline, and supporting paragraph; alignment prop.
  - **Card** — base surface (radius, border `--grey`, hover lift) used by product/sector/insight cards.
  - **GradientText** — applies the lime/teal gradient to inline text for emphasis.
- Keep all primitives **unstyled to content** — they receive props, not hardcoded copy.

**Done when:** primitives render in isolation with each variant and respect the tokens.

---

# PROMPT 2 — Layout shell (Header + Footer)

**Goal:** Global chrome that wraps the page.

- `components/layout/Header` — logo (from `Home Page Assets`), nav links (Products, Sectors, Insights, Contact), and a primary CTA button. Sticky, transparent-over-hero → solid on scroll.
- `components/layout/Footer` — brand, condensed nav, the global locations from the **Our Global Footprint** copy (United Kingdom, Hong Kong, Australia, Malta, United States), legal row.
- Use **Container**, **Button**, tokens from Prompt 1. Fully responsive (mobile menu).

**Done when:** Header + Footer can wrap arbitrary children and adapt across breakpoints.

---

# PROMPT 3 — Hero + USP sections

**Goal:** Top-of-page narrative.

- `sections/Hero` — dark gradient background (`--grad-dark`), eyebrow "Operational Intelligence for Real Assets", headline **"Real Asset Intelligence for a More Demanding Economy"**, the supporting paragraph, and CTA **"Discover our Products"** (scrolls to Products). Use a hero visual from `Home Page Assets`.
- `sections/USP` — two stacked blocks:
  1. "Trusted by Organisations Preparing for What's Next" + body + CTA **"Explore the Ecosystem"**.
  2. "Most Platforms Stop at Reporting. **Vision Zero Connect Goes All the Way to Return.**" + body + CTA **"Select a Product"**.
- Pull exact copy from the doc. Build with **SectionWrapper / SectionHeading / Button**.

**Done when:** both sections match the doc copy and flow visually from dark → light.

---

# PROMPT 4 — Products section (Navigate engine + 4 product cards)

**Goal:** The core "Four Products. One Intelligence Engine." block.

- `sections/Products/ProductsSection` — heading "Four Products. One Intelligence Engine. **Powered by Navigate.**" and the **NAVIGATE** intelligence-layer description.
- `sections/Products/ProductCard` (reusable sub-component) — title, description, CTA. Render four:
  - **Essentials** → CTA "Explore Essentials"
  - **Essentials+** → CTA "Explore Essentials+"
  - **Portfolio One** → CTA "Explore Portfolio One"
  - **Vision Zero Consult** → CTA "Compare Solutions"
- Drive the four cards from a data array; cards extend **Card** primitive. Responsive grid.

**Done when:** `ProductsSection` maps the array of products into `ProductCard`s.

---

# PROMPT 5 — Product spotlight sections

**Goal:** One focused section per product (alternating layout / backgrounds).

In `sections/ProductSpotlights/`, build four sections that share a common **Spotlight** sub-layout (image + text, alternating sides), each fed by the doc copy:

- **EssentialsSection** — "Introducing Essentials" / "AI-Powered ESG & Operational Reporting Built for SMEs" → CTA "See Essentials in Action".
- **EssentialsPlusSection** — "Advanced ESG & Operational Reporting for Growing Organisations" → CTA "See Essentials+ in Action".
- **PortfolioOneSection** — "Go Beyond Essentials with Portfolio One" → CTA "Explore Portfolio One".
- **VZConsultSection** — "Expert-Led Advisory & Program Delivery" → CTA "Explore Advisory Services".

Use product imagery from `Home Page Assets`. Alternate `mint`/`white`/`dark` backgrounds for rhythm.

**Done when:** all four spotlights reuse one layout component and only differ by content props.

---

# PROMPT 6 — Why VZC + Sectors We Serve

**Goal:** Value proposition + audience.

- `sections/WhyVZC` — heading "Why Organisations Work With Vision Zero Connect" + 4 value cards (icon + title + text), from a data array: Operational Intelligence, Commercial Readiness, Reduced Complexity, Measurable Outcomes.
- `sections/Sectors/SectorsSection` + `SectorCard` — heading "Sectors We Serve" + intro, then 8 sector cards (icon from assets + name + one-line descriptor): Healthcare Facilities, Property Managers, Schools and Universities, Hotels and Hospitality, Retail and Restaurants, Construction and Contractors, Manufacturing and Warehouses, Logistics and Transport.
- Both driven by data arrays mapped into card sub-components. Responsive grids (2/3/4 cols).

**Done when:** value cards and sector cards render from arrays via shared `Card`.

---

# PROMPT 7 — Partners + Insights

**Goal:** Credibility + thought leadership.

- `sections/Partners` — "Global Partner Network" + body (Europe, Australia, Asia, Middle East; Malta operational base). Optional partner logo strip / world map from `Home Page Assets`.
- `sections/Insights/InsightsSection` + `InsightCard` — heading "Recognitions, Insights, and Developments" + intro, then 3 linked cards: **Awards**, **Insights**, **News** (each title + description + link target per the doc).

**Done when:** Insights renders three `InsightCard`s from an array with correct link targets.

---

# PROMPT 8 — Contact + Global Footprint

**Goal:** Conversion + closing.

- `sections/Contact/ContactSection` — heading "What Can We Help You With?" + intro. Build:
  - `OptionCard` sub-component — 4 selectable options: Expert Consultation, Demo Session, Free Assessment, Implementation Support.
  - **Contact form** — First Name, Last Name, Work Email, Phone Number, Company Name, Industry, Company Size (radio: 1–50 / 51–200 / 201–500 / 501–1000 / 1000+), "How Can We Help?" textarea, submit **"Submit Request"**, and "We'll respond within 24 hours." note. Include basic validation; no backend wiring required (stub the submit handler).
- `sections/GlobalFootprint` — heading "Our Global Footprint" + subtext + the 5 locations (UK, Hong Kong, Australia, Malta, United States). Use a map/visual from `Home Page Assets`.

**Done when:** form captures all fields with validation and option cards are selectable.

---

# PROMPT 9 — Compose the main HomePage wrapper

**Goal:** Combine every sub-component into **one** page.

In `pages/HomePage`, import and assemble in this order, wrapped by `Header` / `Footer`:

```
<Header />
  <Hero />
  <USP />
  <ProductsSection />        (anchor target for hero/USP CTAs)
  <EssentialsSection />
  <EssentialsPlusSection />
  <PortfolioOneSection />
  <VZConsultSection />
  <WhyVZC />
  <SectorsSection />
  <Partners />
  <InsightsSection />
  <ContactSection />
  <GlobalFootprint />
<Footer />
```

- Wire all "Jump to Product Section" CTAs to the `Products` anchor; wire spotlight CTAs to their routes/placeholders.
- Final pass: consistent vertical rhythm, alternating backgrounds, responsive checks (mobile/tablet/desktop), and accessibility (alt text on assets, focus states, semantic landmarks).

**Done when:** the full home page renders top-to-bottom from the composed sub-components, matches the doc copy, and is responsive.

---

## Build order summary

1. Tokens + UI primitives
2. Header + Footer
3. Hero + USP
4. Products (engine + cards)
5. Four product spotlights
6. Why VZC + Sectors
7. Partners + Insights
8. Contact + Global Footprint
9. **Compose HomePage wrapper**
