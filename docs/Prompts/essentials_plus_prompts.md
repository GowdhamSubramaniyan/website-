# Vision Zero Connect — Essentials+ Landing Page Build Prompts

A sequenced set of high-level prompts for building the **Essentials+** product landing page.
Each prompt builds small, reusable **sub-components**, then a final prompt **wraps them into one main page**.

> **Source of truth**
> - **Copy / structure:** the Essentials+ source doc (`website/doc/...`) when available. *(The Canva draft renders client-side and could not be parsed, so the section list below is derived from the Essentials+ positioning already defined in the Home Page doc — reconcile each section's copy against the Essentials+ source doc as you build.)*
> - **Positioning (from Home Page doc):** "Advanced ESG & Operational Reporting for Growing Organisations." Essentials+ extends Essentials with **Scope 3 visibility, transition planning, reduction modelling, and strategic reporting support** for organisations whose stakeholder, investor, and regulatory demands have outgrown entry-level reporting.
> - **Image assets:** `website/doc/essentials + page Assets`
>   - photo assets for hero / context imagery
>   - brand icons (teal/lime) for feature & benefit blocks
> - **Folder structure:** already set up — do **not** recreate it, only add files into it.
> - **Shared components:** reuse the existing `components/ui` and `components/layout` (Header/Footer) from prior builds instead of rebuilding them.

---

## Assumptions (adjust if your stack differs)

- **Stack:** React (Vite or Next.js) + Tailwind CSS. For plain CSS/SCSS, map the tokens below to CSS variables.
- **Pattern:** Small presentational sub-components -> composed into one `EssentialsPlusPage` wrapper.
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
│   └── sections/essentials-plus/  ← Essentials+ sections (Prompts 3–8)
│       ├── EssentialsPlusHero
│       ├── WhyEssentialsPlus
│       ├── MeetEssentialsPlus
│       ├── Features          (Features + FeatureCard)
│       ├── HowItWorks        (HowItWorks + StepCard)
│       ├── Benefits          (Benefits + BenefitItem)
│       ├── BuiltForGrowing
│       ├── ComparePlans      (Essentials / Essentials+ / Portfolio One)
│       └── EssentialsPlusCTA
└── pages/
    └── EssentialsPlusPage       ← Prompt 9 (the single main wrapper)
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
- Header CTA can point to the page's primary action (e.g. "See Essentials+ in Action" / "Book a Demo").
- If they don't exist yet: Header = logo + nav (Home, Products, Sectors, Insights, About, Contact) + primary CTA; Footer = brand, condensed nav, global locations (UK, Hong Kong, Australia, Malta, United States), legal row.

**Done when:** Header/Footer wrap arbitrary children and are fully responsive.

---

# PROMPT 3 — Hero + Why Essentials+

**Goal:** Hook the growing-organisation visitor and frame the need.

- `sections/essentials-plus/EssentialsPlusHero` — dark gradient background (`--grad-dark`), eyebrow "Essentials+", headline "Advanced ESG & Operational Reporting for Growing Organisations", a supporting line on deeper visibility and strategic reporting, and primary CTA "See Essentials+ in Action" (+ optional secondary "Compare Solutions"). Use a product/context visual from the assets folder.
- `sections/essentials-plus/WhyEssentialsPlus` — light/mint background block framing why growing organisations outgrow entry-level reporting: rising investor, regulatory, and supply-chain demands; the need for Scope 3 visibility, transition planning, and forward-looking strategy.
- Pull exact copy from the doc; build with **SectionWrapper / SectionHeading / Button**.

**Done when:** hero + framing flow visually from dark -> light and match the doc copy.

---

# PROMPT 4 — Meet Essentials+ (overview)

**Goal:** Explain what the product is and how it differs from Essentials.

- `sections/essentials-plus/MeetEssentialsPlus` — overview of Essentials+ as the advanced tier: everything in Essentials, plus deeper operational intelligence and strategic capability. Split image-and-text layout (product visual from assets + value statement and key points).
- Use **GradientText** to emphasise key phrases ("Scope 3 visibility", "transition planning").

**Done when:** the overview clearly states what Essentials+ adds over Essentials.

---

# PROMPT 5 — Features grid

**Goal:** Show the advanced capabilities.

- `sections/essentials-plus/Features/Features` — heading + intro.
- `sections/essentials-plus/Features/FeatureCard` (reusable) — icon + title + description, extending the **Card** primitive.
- Drive from a **data array** (e.g. Scope 3 emissions visibility, transition planning, reduction modelling, strategic/scenario reporting, deeper operational analytics, multi-stakeholder report outputs). Assign brand icons from the assets folder. Responsive grid (1/2/3 cols). Consider visually flagging which capabilities are **new vs Essentials**.

**Done when:** `Features` maps the features array into `FeatureCard`s with correct icons.

---

# PROMPT 6 — How It Works

**Goal:** Show the workflow at this tier.

- `sections/essentials-plus/HowItWorks/HowItWorks` — heading + intro.
- `sections/essentials-plus/HowItWorks/StepCard` (reusable) — step number + title + short description.
- Numbered flow from a **data array** (e.g. 1. Consolidate operational & emissions data -> 2. Model reductions & transition scenarios -> 3. Generate strategic reports -> 4. Share with investors / regulators / supply chain). Horizontal on desktop, stacked on mobile; connecting accent in `--grad-lime`.

**Done when:** the step flow renders from an array with clear sequence and responsive layout.

---

# PROMPT 7 — Benefits / Outcomes + Built for Growing Organisations

**Goal:** Translate capability into strategic value and qualify the audience.

- `sections/essentials-plus/Benefits` — outcome-focused block (data array of `BenefitItem`): investor & regulatory confidence, supply-chain/Scope 3 readiness, credible transition & reduction planning, decision-ready strategic reporting, scalable as the organisation grows. Use a `mint` or `dark` background for contrast.
- `sections/essentials-plus/BuiltForGrowing` — short "who it's for" block (scaling SMEs / mid-market organisations with maturing ESG and operational demands); link to the Sectors section/page.

**Done when:** benefits render from an array and the audience is clearly qualified.

---

# PROMPT 8 — Compare Plans (Essentials / Essentials+ / Portfolio One)

**Goal:** Position Essentials+ within the product ladder.

- `sections/essentials-plus/ComparePlans` — a comparison placing **Essentials+** between **Essentials** (entry) and **Portfolio One** (multi-asset / portfolio scale), showing what each includes and when to step up or down. CTAs to the Essentials and Portfolio One pages.
- Build from a structured **data array/object**; reuse **Card** + **Button**. Optionally include a pricing/affordability note and an FAQ accordion if the source doc provides that content.

**Done when:** the comparison clearly differentiates the tiers with CTAs to adjacent products.

---

# PROMPT 9 — Final CTA band + compose the main EssentialsPlusPage wrapper

**Goal:** Drive conversion and assemble into **one** page.

- `sections/essentials-plus/EssentialsPlusCTA` — full-width band on `--grad-dark` or `--grad-lime` with a closing headline + primary CTA "See Essentials+ in Action" (+ optional "Talk to Our Team" -> Contact).
- In `pages/EssentialsPlusPage`, import and assemble in this order, wrapped by `Header` / `Footer`:

```
<Header />
  <EssentialsPlusHero />
  <WhyEssentialsPlus />
  <MeetEssentialsPlus />
  <Features />
  <HowItWorks />
  <Benefits />
  <BuiltForGrowing />
  <ComparePlans />
  <EssentialsPlusCTA />
<Footer />
```

- Final pass: consistent vertical rhythm, alternating backgrounds, responsive checks (mobile/tablet/desktop), and accessibility (alt text on imagery and icons, focus states, semantic landmarks).

**Done when:** the full Essentials+ page renders top-to-bottom from the composed sub-components, matches the doc copy, and is responsive.

---

## Build order summary

1. Tokens + UI primitives (reuse-first)
2. Header + Footer (reuse)
3. Hero + Why Essentials+
4. Meet Essentials+ (overview)
5. Features grid
6. How It Works
7. Benefits + Built for Growing Organisations
8. Compare Plans (Essentials / Essentials+ / Portfolio One)
9. Final CTA band -> **compose EssentialsPlusPage wrapper**
