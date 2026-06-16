# Vision Zero Connect — "Who We Serve" Page Build Prompts

A sequenced set of high-level prompts for building the **Who We Serve** page
(`/who-we-serve`). Each prompt builds small, reusable **sub-components**, then a
final prompt **wraps them into one route**. The page reuses the design system,
primitives, Header, and Footer already built for the home and About pages — do
**not** recreate those, only add the new page's sections.

> **Source of truth**
> - **Design reference:** `https://zipteam.my.canva.site/latest-who-we-serve-page`
> - **Copy / structure:** the verbatim copy captured in this document (headings, body text, CTAs).
> - **Image assets:** add to `public/assets/who-we-serve/` (hero group photo, six audience photos, closing team photo). Reuse existing brand assets (logo, location pin) where relevant.
> - **Existing code:** primitives in `components/ui/`, chrome in `components/layout/`, design tokens in `app/globals.css`. Mirror the `/about` route pattern (`app/about/page.tsx` + `components/sections/about/`).

---

## Page structure (top → bottom)

1. **Header** — existing global chrome (`components/layout/Header`).
2. **Hero** — soft mint gradient, eyebrow + headline + intro + CTA, group photo on the right.
3. **Audiences** — teal background; a vertical stack of white rounded cards, each = teal heading + two paragraphs (left) and a photo (right). Six cards.
4. **Closing CTA** — soft mint gradient; team photo on the left, heading + two paragraphs + CTA on the right.
5. **Footer** — existing global chrome (`components/layout/Footer`).

The cards section sits on one continuous teal band with generous vertical padding; the hero and closing CTA bookend it on the light mint gradient for rhythm (light → teal → light).

---

## Reuse, don't rebuild

These already exist — import them, don't recreate:

- **Tokens** (`app/globals.css`): `--teal #045858`, `--ink`, `--grey`, `--navy`, `--lime` gradient, `bg-grad-dark`, the mint radial used by `AboutHero`, `py-section` / `py-section-sm` spacing, `text-display-sm`.
- **Primitives** (`components/ui/`): `Container`, `Button` (`primary` lime / `dark` / `ghost`), `SectionWrapper`, `SectionHeading`, `Card`, `Reveal` (IntersectionObserver scroll-in, respects `prefers-reduced-motion`).
- **Chrome** (`components/layout/`): `Header`, `Footer`.

---

## Target folder structure (add these files only)

```
website/
├── app/
│   └── who-we-serve/
│       └── page.tsx                  ← Prompt 6 (route + metadata + compose)
├── components/
│   └── sections/
│       └── who-we-serve/
│           ├── who-we-serve.data.ts  ← Prompt 1 (audience array + copy)
│           ├── WhoWeServeHero.tsx    ← Prompt 2
│           ├── AudienceCard.tsx      ← Prompt 3
│           ├── AudiencesSection.tsx  ← Prompt 4
│           ├── WhoWeServeCTA.tsx     ← Prompt 5
│           └── index.ts              ← barrel export
└── public/
    └── assets/
        └── who-we-serve/             ← hero.png, owners.png, managers.png,
                                         infrastructure.png, financial.png,
                                         enterprise.png, supply-chain.png, cta.png
```

---

# PROMPT 1 — Content data module

**Goal:** Put all page copy in one typed data file so the section components stay content-driven (no hardcoded strings inside JSX).

- Create `components/sections/who-we-serve/who-we-serve.data.ts`.
- Export a `hero` object: `eyebrow: "Who We Serve"`, `headline: "Supporting Organisations Responsible for Asset Performance"`, one `intro` paragraph (below), `cta: { label: "Explore Our Solutions", href: "/#products" }`, and an `image` (`/assets/who-we-serve/hero.png`, group of business professionals, alt text).
  - intro: *"Vision Zero Connect works with organisations seeking greater operational vitality, improved asset performance, stronger reporting capabilities, and better long-term returns across complex asset portfolios."*
- Export an `Audience` type — `{ title: string; paragraphs: [string, string]; image: { src, alt } }` — and an `AUDIENCES: Audience[]` array with the six entries (exact copy):

  1. **Asset Owners and Investors** — `/assets/who-we-serve/owners.png`
     - *"Organisations responsible for asset portfolios require greater visibility across operational performance, risk, reporting requirements, and long-term value creation."*
     - *"Vision Zero Connect supports asset owners and investors through operational intelligence, performance reporting, and data-driven insights that help improve decision-making, optimise asset outcomes, and support stronger long-term returns."*

  2. **Asset and Portfolio Managers** — `/assets/who-we-serve/managers.png`
     - *"Managing assets at scale requires timely intelligence across performance, operations, compliance, and investment priorities."*
     - *"Vision Zero Connect helps asset and portfolio managers consolidate fragmented information into actionable insights that improve operational efficiency, strengthen oversight, and support more informed portfolio decisions."*

  3. **Infrastructure & Operational Organisations** — `/assets/who-we-serve/infrastructure.png`
     - *"Complex operational environments require clear visibility across assets, systems, and performance indicators to support efficient operations and long-term resilience."*
     - *"Vision Zero Connect provides connected intelligence and reporting capabilities that help organisations improve performance, manage risk, and optimise outcomes across diverse asset portfolios."*

  4. **Financial Institutions and Advisors** — `/assets/who-we-serve/financial.png`
     - *"Banks, lenders, investors, and advisors require reliable performance and operational data to support investment decisions, risk management, and stakeholder reporting."*
     - *"Vision Zero Connect delivers trusted intelligence and reporting capabilities that help organisations assess performance, identify opportunities, and support stronger commercial outcomes."*

  5. **Enterprise & Mid-Market Organisations** — `/assets/who-we-serve/enterprise.png`
     - *"Organisations are increasingly expected to demonstrate operational performance, reporting readiness, and responsible management of assets and resources."*
     - *"Vision Zero Connect helps enterprise teams simplify reporting, improve visibility, and access the intelligence needed to support strategic decisions and long-term value creation."*

  6. **Supply Chain & Procurement Networks** — `/assets/who-we-serve/supply-chain.png`
     - *"Organisations across supply chains face growing expectations around operational transparency, reporting, and performance management."*
     - *"Vision Zero Connect helps businesses improve visibility across operations, respond to stakeholder requirements, and strengthen long-term value throughout the supply chain."*

- Export a `closing` object: `headline: "Built for Better Asset Performance"`, two paragraphs (below), `cta: { label: "Explore Our Solutions", href: "/#products" }`, and an `image` (`/assets/who-we-serve/cta.png`, team reviewing data on a laptop, alt text).
  - *"Vision Zero Connect combines technology, intelligence, and advisory expertise to help organisations improve asset performance, strengthen decision-making, and unlock greater value across their portfolios."*
  - *"From individual assets to complex global portfolios, our solutions help organisations reduce inefficiencies, manage risk, improve visibility, and support stronger long-term returns."*

**Done when:** every string on the page lives in this module and is typed.

---

# PROMPT 2 — Hero section

**Goal:** Top-of-page narrative on the soft mint gradient (match `AboutHero`'s look).

- Create `WhoWeServeHero.tsx`. Use the same mint radial background and top padding that clears the fixed header as `AboutHero` (`pt-32 md:pt-40`).
- Two-column grid on `lg` (`lg:grid-cols-2`), copy left / image right; single column stacked on mobile.
- Left: eyebrow `Who We Serve` (small, semibold), `<h1>` headline in **solid teal**, the intro paragraph in `text-ink/80`, and the **Button** (`primary` lime, `size="lg"`, uppercase tracking) with label **"Explore Our Solutions"**.
- Right: the hero group photo in a rounded image (`rounded-3xl`, `shadow-xl`, `object-cover`), pulled from `next/image`.
- Drive all content from `hero` in the data module. Use `animate-fade-in-up` with staggered `[animation-delay:…]` like `AboutHero`.

**Done when:** the hero renders the data copy, headline is teal, and it's responsive with the photo beside the copy on desktop.

---

# PROMPT 3 — AudienceCard sub-component

**Goal:** One reusable card for the six audiences.

- Create `AudienceCard.tsx` taking a single `Audience` prop.
- White rounded surface (`rounded-2xl`/`3xl`, subtle shadow), full-width within the section container.
- Two-region layout on `md`+ : **text region** left (~55%) and **image region** right (~45%); stacks vertically on mobile (image on top or bottom — keep it simple and accessible).
  - Text: `<h3>` title in **teal** (bold, ~`text-2xl`/`3xl`), then the two paragraphs in `text-ink/70` with comfortable leading.
  - Image: `next/image`, `object-cover`, fills the right region edge-to-edge with the card's rounded corners respected (`overflow-hidden`).
- Wrap in `Reveal` so each card animates in on scroll.

**Done when:** `AudienceCard` renders any `Audience` entry with text-left / photo-right on desktop and a clean stacked layout on mobile.

---

# PROMPT 4 — Audiences section

**Goal:** The core "who we serve" stack.

- Create `AudiencesSection.tsx` on a **teal background** (`bg-teal`) with generous vertical padding (`py-section`).
- Use `Container`; render a vertical stack (`space-y-8`/`10`) by mapping `AUDIENCES` → `AudienceCard`.
- No section heading is shown in the reference — the hero already frames it; keep the cards as the focus. (If a heading is later wanted, add a centered `SectionHeading` above the stack.)
- Give the section an `id="audiences"` anchor.

**Done when:** all six cards render from the array on the teal band, evenly spaced and responsive.

---

# PROMPT 5 — Closing CTA section

**Goal:** Conversion + close, mirroring the hero's light gradient (teal band → light again).

- Create `WhoWeServeCTA.tsx` on the same soft mint gradient as the hero.
- Two-column grid on `lg`: **image left, copy right** (the reverse of the hero, for visual variety).
  - Left: team-at-laptop photo in a rounded image.
  - Right: `<h2>` **"Built for Better Asset Performance"** (bold, dark ink), the two `closing` paragraphs, and the **Button** (`primary` lime / `dark`, `size="lg"`, uppercase) labelled **"Explore Our Solutions"**.
- Drive from `closing` in the data module. Wrap content in `Reveal`.

**Done when:** the closing section renders the data copy with image-left / copy-right on desktop and a working CTA button.

---

# PROMPT 6 — Compose the route + wire navigation

**Goal:** Assemble the page at `/who-we-serve` and link it from the header.

- Add a barrel `components/sections/who-we-serve/index.ts` exporting all four sections.
- Create `app/who-we-serve/page.tsx` mirroring `app/about/page.tsx`:
  - `export const metadata` — `title: "Who We Serve — Vision Zero Connect"`, a description drawn from the hero intro.
  - Default export composes, framed by global chrome:
    ```
    <Header />
      <main id="main">
        <WhoWeServeHero />
        <AudiencesSection />
        <WhoWeServeCTA />
      </main>
    <Footer />
    ```
- Update `components/layout/Header.tsx`: point the existing **"Who We Serve"** nav link at the route `"/who-we-serve"` (currently an in-page anchor). The header already highlights `/`-prefixed routes via `isActive()`, so it will light up on this page automatically.
- Wire both **"Explore Our Solutions"** CTAs to the products anchor (`/#products`) per the data module.

**Done when:** navigating to `/who-we-serve` renders hero → six audience cards → closing CTA between the global Header and Footer, the header link is active on the page, and the layout is responsive (mobile / tablet / desktop) with alt text on every image and visible focus states on the buttons.

---

## Build order summary

1. Content data module (`who-we-serve.data.ts`)
2. Hero section
3. `AudienceCard` sub-component
4. Audiences section (maps the array)
5. Closing CTA section
6. **Compose `/who-we-serve` route + wire the header link**
