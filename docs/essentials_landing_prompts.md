# Essentials Landing Page — Executable Build Prompts

Transcribed from the Canva draft (`zipteam.my.canva.site/essentials-landing-page-draft`, 11 sections, captured 2026-06-15). Each prompt builds one section as a sub-component under `components/sections/essentials/`, then the final prompt composes them into `app/essentials/page.tsx`.

> **Reuse-first:** use the existing shared primitives — `Container`, `Button`, `SectionWrapper`, `SectionHeading`, `Card`, `GradientText`, `Reveal` (`components/ui`) — and the global `Header` / `Footer` (`components/layout`). Do not rebuild them. Copy below is **verbatim** from the draft; keep it exact.

---

## Asset manifest

> **Where assets live:** Next only serves files under `public/`. Put every image in **`public/assets/essentials/`** so it loads at the URL `/assets/essentials/...`. (`website/assets/` is not served.) Filenames below are the agreed placeholders — drop the real exports in at these exact paths.

| Path | Used in | Suggested size | Alt text |
|---|---|---|---|
| `/assets/essentials/hero-dashboard.png` | Prompt 1 Hero | 1000×820 | "Essentials ESG reporting dashboard" |
| `/assets/essentials/video-thumb.png` | Prompt 2 Video | 960×600 | "Watch how Essentials works" |
| `/assets/essentials/step-upload.png` | Prompt 3 step 1 | 640×480 | "Upload utility bills screen" |
| `/assets/essentials/step-track.png` | Prompt 3 step 2 | 640×480 | "ESG health score dashboard" |
| `/assets/essentials/step-generate.png` | Prompt 3 step 3 | 640×480 | "Report configuration screen" |
| `/assets/essentials/report-preview.png` | Prompt 4 Unprepared | 900×1000 | "Sample Essentials ESG report pages" |
| `/assets/essentials/sme-challenges.png` | Prompt 6 Challenges | 800×800 | "SME team reviewing spreadsheets" |
| `/assets/essentials/frameworks/*.png` | Prompt 7 Frameworks | ≤200×120 each | per-logo (see prompt) |
| `/assets/essentials/sectors/*.png` | Prompt 9 Sectors | 480×360 each | per-sector (see prompt) |
| `/assets/essentials/insight-1..3.png` | Prompt 10 Insights | 640×360 each | per-article (see prompt) |

> Sector and insight imagery may instead **reuse existing files** in `/assets/home/` (e.g. `sector-healthcare.png`, `insight-news.png`) if you'd rather not add new assets — note which you choose.

---

## Reconcile with the existing scaffold

A first-pass scaffold already exists in `components/sections/essentials/`. Map it to this draft:

- **Keep & adapt:** `EssentialsHero` (Prompt 1), `Features/` (Prompt 5 — rework to 6 numbered cards on a dark band).
- **Repurpose:** `BuiltForSMEs` → **Sectors** (Prompt 9); `TheChallenge` → **SMEChallenges** (Prompt 6).
- **Remove (not in this draft):** `MeetEssentials`, `ComparePlans`, `Benefits/`, `HowItWorks/`.
- **Add new:** video, 3-step strip, "Don't get caught", frameworks, pricing, insights, contact.

Update `components/sections/essentials/index.ts` to export the final set.

---

# PROMPT 1 — Essentials Hero

**File:** `components/sections/essentials/EssentialsHero.tsx` · **Background:** dark teal gradient (`bg-grad-dark`), white text · **Layout:** two-column, copy left / dashboard image right; top padding clears the fixed header.

- Eyebrow: **Essentials by Vision Zero Connect**
- Headline (lime gradient via `GradientText` variant="lime", or solid lime): **AI-Powered ESG & Operational Reporting Built for SMEs**
- Body: *Essentials helps SMEs generate professional ESG and operational reporting aligned to growing lender, procurement, investor, and customer expectations — without expensive consultants or manual reporting processes.*
- CTAs: primary `Button variant="primary"` → **GET STARTED NOW AT €700** (`#pricing`); secondary play-icon link **SEE ESSENTIALS IN ACTION** (`#video`).
- Image: `/assets/essentials/hero-dashboard.png`, rounded corners, **no shadow/frame**, `preload`.

**Done when:** hero matches copy, white header reads over the dark gradient, image is clean-cornered.

---

# PROMPT 2 — See How Essentials Works (video)

**File:** `components/sections/essentials/VideoWalkthrough.tsx` · **Background:** muted teal (`#3f6b63`-ish) with faint world-map texture · **Layout:** video left, copy right.

- Heading (white): **See How Essentials Works**
- Video: `/assets/essentials/video-thumb.png` in a white-bordered rounded frame with a centered circular play button (reuse the play-button pattern from `WhatWeDo`).
- Body: *A quick walkthrough of how Essentials helps SMEs simplify ESG and operational reporting, reduce admin burden, and generate professional lender-ready and procurement-ready reports in minutes.*
- Line: *Built for growing SMEs across multiple sectors.*
- Badge: ★★★★★ (5 stars) + **Used Across Multiple Sectors** on a darker teal chip.

**Done when:** video panel + copy + star badge render side by side, stacked on mobile.

---

# PROMPT 3 — A Smarter Way to Handle ESG Reporting (3 steps)

**File:** `components/sections/essentials/SmarterWay.tsx` (+ a small `StepCard`) · **Background:** light grey · **Layout:** centered heading; 3-column card grid (stack on mobile). Drive from a data array.

- Heading (teal, centered): **A Smarter Way to Handle ESG Reporting**
- Cards (screenshot image on top, numbered teal badge 1/2/3, bold title, body):
  1. **Upload Utility Bills & Business Data** — *Upload utility bills and operational business data. The Essentials AI Engine automatically extracts and processes the information for you.* — img `/assets/essentials/step-upload.png`
  2. **Track ESG & Operational Performance** — *Monitor ESG metrics, emissions, and operational insights through a live dashboard designed for visibility and faster reporting.* — img `/assets/essentials/step-track.png`
  3. **Generate Professional ESG Reports** — *Export professional lender-ready, procurement-ready, and investor-ready ESG reports in PDF or PowerPoint format within minutes.* — img `/assets/essentials/step-generate.png`

**Done when:** three numbered steps render from an array with their screenshots.

---

# PROMPT 4 — Don't Get Caught Unprepared

**File:** `components/sections/essentials/DontGetCaught.tsx` · **Background:** white · **Layout:** copy + checklist left, report-preview image right.

- Heading (teal): **Don't get caught unprepared.**
- Body paragraphs:
  - *Banks, procurement teams, insurers, investors, and large corporates are increasingly requesting ESG and operational transparency from SMEs.*
  - *Even if your business is not required to report yet, suppliers, lenders, and customers are rapidly raising expectations around transparency, emissions visibility, and operational reporting.*
  - *With one click, Essentials generates professional lender-ready and procurement-ready ESG reports covering Scope 1 & 2 reporting, helping businesses stay commercially prepared as reporting expectations continue to evolve.*
- Sub-heading: **Built to Support:** with check-icon list: **Financing readiness · Procurement requirements · Supplier compliance · Tender submissions · Operational transparency**
- CTA `Button variant="primary"` (lime): **GET STARTED NOW AT €700** (`#pricing`)
- Image: `/assets/essentials/report-preview.png` (report pages), rounded, right side.

**Done when:** three paragraphs, the 5-item "Built to Support" list, CTA, and report image are placed.

---

# PROMPT 5 — Powerful Features (6 cards)

**File:** `components/sections/essentials/Features/` (rework existing) · **Background:** teal with subtle pattern, white text · **Layout:** intro + 2-column grid of 6 numbered cards (1 col mobile). Data array drives `FeatureCard`.

- Heading (lime): **Powerful Features.** / **Built for Business Readiness.** (two lines)
- Intro: *Essentials combines automation, reporting, and operational ESG intelligence into one streamlined platform designed specifically for SMEs.*
- Cards (number shown as `01`–`06` in lime, bold title, body) — darker-teal card surface:
  - **01 · AI Utility Bill Extraction** — *Automatically reads and extracts key data from uploaded utility bills to reduce manual entry and reporting time.*
  - **02 · Automated ESG and Emissions Calculations** — *Processes operational data and calculates ESG and emissions metrics with improved speed and accuracy.*
  - **03 · Real-time ESG Dashboards** — *Track ESG performance, emissions visibility, and operational reporting insights through live dashboards.*
  - **04 · Professional ESG Reports** — *Generate professional lender-ready, procurement-ready, and investor-ready ESG reports in seconds.*
  - **05 · Global & Local Framework Support** — *Supports international ESG frameworks while adapting to regional standards and local emission factors.*
  - **06 · Regulatory & Reporting Updates** — *Stay aligned with evolving lender, procurement, and ESG reporting expectations automatically.*
- Trailing link (bottom-right): **Get started now ›** (`#pricing`)

**Done when:** 6 numbered cards render from the array on the teal band, with the trailing link.

---

# PROMPT 6 — Built for Real SME Challenges

**File:** `components/sections/essentials/SMEChallenges.tsx` (repurpose `TheChallenge`) · **Background:** light grey · **Layout:** intro paragraphs full width; below, image left + checklist right.

- Heading (dark): **Built for Real SME Challenges**
- Body:
  - *Many SMEs are still managing ESG reporting through spreadsheets, repetitive questionnaires, and manual calculations.*
  - *Essentials replaces fragmented reporting processes with one streamlined platform designed to reduce admin time, improve transparency, and help businesses stay commercially competitive.*
- Image: `/assets/essentials/sme-challenges.png` (left).
- Right column heading: **Why Businesses Use Essentials** + check-icon list:
  - Reduce ESG reporting admin
  - Improve lender readiness
  - Support procurement and tender requirements
  - Reduce consultant dependency
  - Improve transparency for customers and stakeholders
  - Respond faster to reporting requests
- CTA `Button variant="dark"` (teal): **GET STARTED NOW AT €700** (`#pricing`)

**Done when:** intro + split image/checklist + CTA match the draft.

---

# PROMPT 7 — Frameworks and Reporting Standards

**File:** `components/sections/essentials/Frameworks.tsx` · **Background:** white · **Layout:** heading + intro, then a responsive logo grid (4 cols desktop → 2 mobile). Drive logos from an array; grayscale-to-colour on hover optional.

- Heading (dark): **Frameworks and Reporting Standards**
- Body:
  - *Aligned with the frameworks lenders, customers, procurement teams, and regulators increasingly expect.*
  - *Essentials supports internationally recognised ESG standards while remaining flexible to regional frameworks and local reporting requirements.*
- Logos (alt text = name), images in `/assets/essentials/frameworks/`: **ESRS, CSRD, SECR, UK SRS, SEC Philippines, EPA, TCFD, National Greenhouse and Energy Reporting (NGER), Australian Sustainability Reporting Standards (ASRS)**.
- Note: these are third-party marks — use official logo files; treat as placeholders until supplied.

**Done when:** all nine standards render in a tidy responsive grid with accessible names.

---

# PROMPT 8 — Pricing (€700)

**File:** `components/sections/essentials/Pricing.tsx` · **Background:** dark teal with grid/perspective texture, centered content · **Layout:** centered headline + CTA, a boxed feature checklist, and a "Save up to 65%" callout box.

- Eyebrow (white): **One Simple Annual Price for Complete ESG Reporting**
- Headline (lime): **€700 per year. Essentials for SMEs.**
- Body: *One fixed annual price with full access to the Essentials reporting platform. No hidden fees, expensive consultant retainers, or complicated onboarding costs.*
- CTA `Button` (dark pill): **GET STARTED NOW** (`#contact`)
- Link: *Prefer a demo first?* **See Essentials in Action.** (`#video`)
- Included checklist (check icons, in a bordered box): **Unlimited ESG Reports · AI-Powered ESG Analysis · Interactive Cloud Dashboard · Utility Bill AI Data Extraction · Professional PDF Reports · PowerPoint Export Capability · Global & Local Framework Support · Automated KPI Selection · Real-Time ESG Insights · Multi-User Access · Regulatory & Reporting Updates · No Hidden Fees**
- Callout box: **Save up to 65%** — *Traditional ESG consulting and reporting solutions can cost thousands annually. Essentials by Vision Zero Connect delivers professional ESG and operational reporting infrastructure at a cost designed for SMEs.*

**Done when:** price headline, CTA, 12-item checklist, and savings callout render on the dark band. Give this section `id="pricing"`.

---

# PROMPT 9 — The SMEs Who Use Essentials Every Day (sectors)

**File:** `components/sections/essentials/Sectors.tsx` (repurpose `BuiltForSMEs`) · **Background:** light grey · **Layout:** heading + subhead, then a 2-column grid of 8 cards. Each card = image (left half) + teal panel (right half) with lime title + white description. Data array.

- Heading (dark): **The SMEs Who Use Essentials Every Day**
- Subhead: *Real assets. Real businesses. Real results.*
- Cards (`/assets/essentials/sectors/...` or reuse `/assets/home/sector-*.png`):
  - **Healthcare Facilities** — *Clinics, care homes, hospitals*
  - **Property Managers** — *Residential and commercial portfolios*
  - **Schools and Universities** — *Educational campuses and academies*
  - **Hotels and Hospitality** — *Hotels, resorts, and venues*
  - **Retail and Restaurants** — *Multi-site retail and F&B operators*
  - **Constructions and Contractors** — *Builders, fit-out, and civil works*
  - **Manufacturing and Warehouses** — *Factories, logistics hubs, and plants*
  - **Logistics and Transport** — *Fleet operators and distribution*

**Done when:** eight image+panel cards render from the array in a 2-up grid.

---

# PROMPT 10 — Latest ESG Insights

**File:** `components/sections/essentials/Insights.tsx` · **Background:** white · **Layout:** heading + subhead, 3-column card row, centered "Explore more" button.

- Heading (dark): **Latest ESG Insights**
- Subhead: *Stay informed with our expert analysis on ESG trends, regulations, and best practices.*
- Cards (image top with a **Technology** tag chip; teal-gradient lower half with white title + excerpt):
  - **A Simple Guide to AI-Powered ESG Reporting for SMEs** — *How small and medium-sized businesses can stay compliant, build trust, and save time using artificial intelligence…* — `/assets/essentials/insight-1.png`
  - **Can AI Predict ESG Risks for Your Business?** — *How artificial intelligence is transforming ESG risk management from reactive to truly predictive — especially for SMEs…* — `/assets/essentials/insight-2.png`
  - **The Future of ESG Reporting Lies in Artificial Intelligence** — *From manual compliance to real-time, predictive, and strategic sustainability — powered by AI…* — `/assets/essentials/insight-3.png`
- CTA `Button` (dark pill, centered): **EXPLORE MORE ›** (`/#insights`)

**Done when:** three article cards render with tag + excerpt and the centered button.

---

# PROMPT 11 — Get Help and Support (contact)

**File:** `components/sections/essentials/ContactSupport.tsx` · **Background:** light · **Layout:** heading + intro, then two columns: a form card (left, wider) and a stacked info column (right). Give it `id="contact"`.

- Heading (dark): **Get Help and Support**
- Body:
  - *Have questions about Essentials? We're here to help you get started.*
  - *Send us your questions and we'll provide detailed answers to help you make the right decision.*
- **Form card — "Send Us Your Query"** · sub: *Fill out the form below and our team will get back to you promptly.* Fields (required marked *):
  - First Name*, Last Name* (two-up)
  - Email Address* (`your.email@company.com`), Company Name (`Your company (optional)`)
  - Phone Number (`+44 20 1234 5678`), Country* (select)
  - Query Type* (select)
  - Your Question or Message* (textarea, `Please describe your question or how we can help you…`)
  - Submit `Button` (green): **Send Message** (with send icon)
  - Footnote: *By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.*
- **Contact Information card:** Email Support — **support@visionzeroconnect.com**; Location — **Europe | UK | Australia | Hong Kong**
- **Quick Help card (green):** check list — *24/7 online platform access · Instant account activation · Step-by-step setup guides · Comprehensive video tutorials*

**Done when:** the form (client component, controlled or native), info card, and quick-help card render responsively; the form validates required fields.

---

# PROMPT 12 — Compose the EssentialsPage

**File:** `app/essentials/page.tsx` · keep the `Header` / `Footer` wrapper and `metadata`. Assemble in draft order:

```
<Header />
  <EssentialsHero />        {/* 1 */}
  <VideoWalkthrough />      {/* 2 */}
  <SmarterWay />            {/* 3 */}
  <DontGetCaught />         {/* 4 */}
  <Features />              {/* 5 */}
  <SMEChallenges />         {/* 6 */}
  <Frameworks />            {/* 7 */}
  <Pricing />              {/* 8  id="pricing" */}
  <Sectors />              {/* 9 */}
  <Insights />             {/* 10 */}
  <ContactSupport />       {/* 11 id="contact" */}
<Footer />
```

Update `components/sections/essentials/index.ts` to export the final eleven sections (remove the unused scaffold exports). Final pass: alternating backgrounds (dark → teal → light), consistent rhythm via `SectionWrapper`, responsive checks, and accessibility (alt text, labelled form fields, focus states).

**Done when:** `/essentials` renders top-to-bottom matching the draft, with all anchors (`#video`, `#pricing`, `#contact`) wired.

---

## Build-order summary

1. Hero · 2. Video walkthrough · 3. Smarter Way (3 steps) · 4. Don't Get Caught · 5. Powerful Features (6) · 6. SME Challenges · 7. Frameworks · 8. Pricing (€700) · 9. Sectors (8) · 10. Insights (3) · 11. Contact · 12. Compose page
