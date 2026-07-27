# KeyLime — Current State & Next.js Pivot Analysis

> **Purpose.** High-level analysis of where the KeyLime Marketing business and web-presence effort stands today (2026-07-07), and an assessment of using the locally existing **linax-digital** Next.js site as the base for the KeyLime public site instead of continuing the Webflow build.
>
> **Sources:** `business-context.md`, `Business_Product_Documentation.md` (v4.0), `site-architecture.md`, `styleguide.md` (v4.0), `visualTheme.md`, `webflowplan.md`, plus a survey of the `linax-digital/` codebase and the local KeyLime component mockups in `landing-page-purgatory/generated/`.

---

## 1. Executive summary

**Recommendation: pivot back to Next.js using linax-digital as the base.** Three reasons carry most of the weight:

1. **Your own canonical docs already say so.** `business-context.md` §6 specifies the KeyLime marketing site stack as *"Next.js, React, TypeScript, TailwindCSS"* hosted on Vercel. Webflow appears in the docs only as the delivery tool for *Expansion-tier client sites*. The Webflow build of KeyLime's own site was a departure from the documented plan, not the plan itself.
2. **The conversion centerpiece is an app, not a page.** The entire funnel strategy hinges on the Revenue Loss Calculator (loss-led hero, industry-tuned variants via query params, result-screen email gate into HighLevel, GA4 events). In Webflow this required `contenteditable` span hacks because the tooling silently rejects `<input>` elements. In linax-digital, a full-featured KeyLime-targeted `RevenueCalculator.tsx` **already exists** — three loss vectors, home-services/beauty industry configs, "audit the math" expanders.
3. **linax-digital is ~70% of the P0 launch site already built, in the right stack, for the same audience.** Linax Digital was the prior brand of the same business, targeting the same local-service-business buyer. Its page inventory maps almost one-to-one onto the 13-page P0 launch wave in `site-architecture.md` §0.1. What's missing is a re-skin (Coastal Clay → Citrus & Charcoal), a copy sweep, three system pages, and a small route restructure.

The Webflow sunk cost is modest: pre-flight work, a partial header, a hero composition, and the calculator widget port. Everything durable from that effort (copy, palette decisions, section plan, MCP gotchas) lives in the markdown docs and carries over regardless.

---

## 2. Current state of the business

- **Model:** Service/SaaS hybrid. Three month-to-month tiers — Foundation $99, Growth $195, Expansion $495 — plus a $200 one-time setup fee. Twelve HighLevel-powered platform solutions + three specialized solutions (SEO, Ads, Websites), with published add-ons and custom-quoted specialized work.
- **Audience:** Owners of local service businesses in home services and beauty/personal services, $300K–$5M revenue. Initial sales push in Southwest Florida (Lee/Collier/Charlotte); system is nationwide-ready.
- **Stage:** Phase 1 of the growth roadmap (months 1–3) — brand transition from Linax Digital, standardizing tier deliverables, onboarding the first 5–10 clients, and **launching the public marketing site**. No domain registered, no public presence yet. The website is the current bottleneck of Phase 1.
- **Positioning:** The Everyman archetype — plain-spoken, warm, no jargon. Loss-led conversion strategy: calculator first (TOFU, no email), email-gated result/reports (MOFU), Calendly discovery call (BOFU). The legacy "free audit" lead magnet is retired.
- **Documentation maturity:** Very high. Business docs (v4.0), full site architecture with a 5-wave launch plan, locked homepage copy, how-it-works copy, content strategy, personas, style guide (Citrus & Charcoal), and a visual theme guide all exist. The strategy work is done — the only open question is the build vehicle.

### Open pre-launch items (unchanged by the pivot)

Domain registration · logo finalization (SVGs exist and look usable) · real Calendly URL · quantified results & testimonials (deferred by design — "no unverified stats" rule) · `writing-voice.md` publication · first field-report topics.

---

## 3. Current state of the web-presence effort

Three parallel artifacts exist today:

| Artifact | Where | Status |
| --- | --- | --- |
| **Webflow build** ("Keylime Systems", Agencia X template) | Webflow cloud | Pre-flight complete (palette swap of 50 variables, fonts, SEO meta, logo swap). Header partially rebuilt. `MissedCallWidget` component and a hero composition built. **0 of 11 homepage sections finished**; 12 more P0 pages untouched. Multiple items blocked on manual Designer UI work due to MCP API limits. |
| **linax-digital site** | `linax-digital/` (local, this repo) | Complete multi-page Next.js 16 / React 19 / Tailwind v4 site for the prior brand: home (8 sections), services hub + 4 service detail pages, pricing, about, process, case studies, blog (with dynamic routes), FAQ, contact, audit, privacy, terms. Plus a new KeyLime-targeted `RevenueCalculator` component and test pages. |
| **Local KeyLime mockups** | `landing-page-purgatory/generated/keylime-*` | React mockups already built for the KeyLime brand: homepage hero, missed-call widget, problem-agitation section, revenue calculator. These were used as design references *for* the Webflow build — they're native building blocks for a Next.js build. |

Also on disk: KeyLime logo SVGs (default + white), `heroiphone.png`, and four section illustration SVGs (`missedopps`, `reputationproblems`, `moneyspin`, `techstack`).

### Why the Webflow path has been slow (from `webflowplan.md`)

- The MCP tooling **silently rejects `<input>` elements**, forcing the calculator into `contenteditable` spans with `textContent` plumbing — a fragile foundation for the site's single most important conversion asset.
- Component prop overrides (URLs, text, visibility) on instances **can't be set via API** — every nav link, CTA URL, and button requires manual Designer UI work.
- The build inherits Agencia X baggage: orphaned eCommerce pages, stock copy on the now-live Home V1 page, leftover peach illustration tokens — each an open decision item.
- Net: after substantial effort, the homepage is at "hero composition exists with placeholder copy," and 12 more pages remain.

---

## 4. Fit analysis: linax-digital vs. the KeyLime P0 launch wave

### 4.1 Page map (13 P0 pages from `site-architecture.md` §0.1)

| # | KeyLime P0 page | linax-digital source | Work needed |
| - | --- | --- | --- |
| 1 | `/` Homepage | `app/page.tsx` (Hero, Problem, Services, Results, HowItWorks, Pricing, FAQ, FinalCta sections) | Re-skin + copy swap to `homepage-copy.md`; embed calculator in hero (mockup exists); add trust bar + vertical-framing + two-path final CTA sections |
| 2 | `/how-it-works` | `app/process/page.tsx` | Rename route; rewrite to `how-it-works-copy.md` |
| 3 | `/pricing` | `app/pricing/page.tsx` (PricingSection, PricingCard, BillingToggle) | Swap to 3 fixed tiers (drop billing toggle), add custom-work callout + pricing FAQ |
| 4–6 | `/systems/foundation` · `growth` · `expansion` | **New** — but `app/services/websites|seo|ads|reputation` pages are a proven detail-page template (hero, IncludedSelector, FAQ per page) | Build one system-page template, instantiate ×3 |
| 7 | `/services` (anchor-only catalog hub) | `app/services/page.tsx` + ServicesTabs/ServiceCard | Restructure into the 4 anchor groups (Capture / Convert / Reputation / Specialized) for the 12+3 solutions |
| 8 | `/calculators/missed-call-revenue` | `components/RevenueCalculator/RevenueCalculator.tsx` + `app/test-calculator` | Promote to real route; add `?industry=` params, result-screen email gate, GA4 events |
| 9 | `/about` | `app/about/page.tsx` | Copy sweep to the managed-system story |
| 10 | `/faq` | `app/faq/page.tsx` + FaqAccordion | New question set per §5.9; add FAQ schema |
| 11 | `/contact` | `app/contact/page.tsx` | Calendly embed + custom-work multi-select field → HighLevel |
| 12–13 | `/privacy` · `/terms` | Both exist | Rebrand entity name |
| — | `/audit` → 301 | `app/audit/page.tsx` exists | Delete page, add redirect to the calculator in `next.config.ts` |

**Bonus, ahead of schedule:** linax-digital already has working **blog** (`/blog`, `/blog/[slug]`, `/blog/category/[slug]`) and **case-studies** dynamic routes — those are P2 and P4 in the KeyLime plan. Keep them dark at launch and light them up when the waves arrive. The four existing service detail pages are likewise a head start on P1 (`/services/[slug]`).

### 4.2 Component inventory reuse

Directly reusable with re-skin: `Navbar`, `Footer`, `Container`, `PrimaryButton`, `SectionLabel`, `FaqAccordion`, `PricingCard`, `TestimonialCard`, `ProblemSection`, `HowItWorksSection`, `FinalCtaSection`, `SocialProofBar`, `ServicesTabs`, `StackingCards`, `RevenueCalculator`. That's essentially the entire section vocabulary the KeyLime homepage spec (§5.1) calls for.

### 4.3 Design-system gap (the real work)

| Dimension | linax-digital today | KeyLime target (`styleguide.md`) | Effort |
| --- | --- | --- | --- |
| Palette | "Coastal Clay" — cream/sand neutrals, clay orange accent, navy/sage support | "Citrus & Charcoal" — warm near-white `#FBFBF7`, warm charcoal `#1C1E1A` text, single lime accent `#A4D639` ramp, muted semantic secondaries | Low-moderate. Tailwind v4 `@theme` tokens live in one `globals.css` block. Two options: remap values behind existing token names (fast) or rename tokens properly (clean — recommended, it's a find-replace across components) |
| Typography | Fraunces (display serif) + Inter (body) | **Inter only**, `-0.03em` tracking everywhere | Low. Drop Fraunces from `layout.tsx`, point `--font-display` at Inter, add tracking |
| Brand voice/copy | Linax Digital, Cape Coral, founder-led framing, "audit" language | KeyLime, Everyman voice, loss-led, calculator-first, audit language banned | Moderate — but the copy is already written (`homepage-copy.md`, `how-it-works-copy.md`) |
| Imagery | Whatever linax used | Photography-first hierarchy per `visualTheme.md`; interim: existing SVG illustrations + styled screenshots | Independent of platform choice — same gap exists on Webflow |

**Important caveat on `styleguide.md`:** it is written as a mirror of the Agencia X *Webflow class architecture* (`Display 8`, `BG Neutral 200`, etc.). On a Next.js pivot, treat its **§2 color tokens, Inter-only rule, tracking, radius, and shadow values** as the source of truth, and ignore the Webflow class naming. A thin "token translation" pass (Webflow variable → Tailwind `@theme` token) is worth doing once at the start.

---

## 5. Honest trade-offs of leaving Webflow

What you give up:

- **Visual/CMS editing without code.** Real for a client — but the client here is you. You edit in your own editor faster than in the Designer, as the MCP friction proved.
- **Built-in CMS for the blog.** The blog is P2. When it arrives, MDX files or a headless CMS both work in the existing blog routes. Not a launch concern.
- **Webflow hosting.** Replaced by Vercel, which the docs already specify — likely cheaper (Webflow site plan vs. Vercel hobby/pro).
- **Momentum on the current build.** Genuinely small: pre-flights + partial header + a hero with placeholder copy. The durable output (decisions, copy, palette values, gotchas) is all in markdown and transfers.

What you gain, beyond the fit above:

- **First-class implementation of everything the architecture doc asks for:** `?industry=` calculator variants, 301 redirects, GA4/GTM events, HighLevel form posts, FAQ/Breadcrumb schema, per-page metadata — all of which are awkward-to-impossible in the Webflow MCP loop.
- **The programmatic future.** Waves P1–P4 are templated pages (9 service pages, 5 compare pages, 4 reports, industries) — exactly what dynamic routes + a data file do well, and exactly where Webflow page-by-page building compounds cost.
- **Dogfooding credibility.** KeyLime sells custom web builds as a specialized service and lists Next.js in its team-credibility story. The company's own site being a fast, custom Next.js build is quiet proof.

One thing that does **not** change: Webflow remains the documented delivery tool for **Expansion-tier client sites**. This pivot is only about KeyLime's own marketing site.

---

## 6. Proposed migration path (high level)

**Phase 0 — Fork, don't mutate.** Copy `linax-digital/` to a new `keylime/` app directory (same repo or new). Keep linax-digital intact as a portfolio artifact of the prior brand. Freeze the Webflow build (don't delete the site; it costs nothing to keep as reference).

**Phase 1 — Re-skin.** Swap the `@theme` block in `globals.css` to Citrus & Charcoal tokens per `styleguide.md` §2; drop Fraunces; apply `-0.03em` tracking; swap logo assets in Navbar/Footer. At the end of this phase the whole site is on-brand visually, still wearing old copy.

**Phase 2 — Route restructure.** `process` → `how-it-works`; add `systems/[foundation|growth|expansion]`; move calculator to `calculators/missed-call-revenue`; add `/audit` → calculator 301 (plus the legacy `/solutions` and `/tiers/*` redirects from §3); hide blog/case-studies from nav for launch.

**Phase 3 — Copy & section sweep.** Homepage per `homepage-copy.md` section order (§5.1); how-it-works per `how-it-works-copy.md`; pricing to the 3-tier comparison; new FAQ set; About rewrite. Launch guardrails from the Webflow definition-of-done still apply: **no unverified stats, no "HighLevel"/"A2P 10DLC" in customer copy, no audit language, no citrus puns.**

**Phase 4 — Calculator promotion.** Wire `RevenueCalculator` into the homepage hero (the `keylime-homepage-hero` mockup is the layout reference) and the standalone canonical page; add industry query params, the result-screen email gate, and the three trust microcopy lines.

**Phase 5 — Plumbing.** HighLevel form endpoints, Calendly embed (real URL when it exists), GA4 + GTM events (calculator completion, report download, booking, quote request), FAQ/Breadcrumb schema, WCAG 2.1 AA contrast/focus pass.

**Phase 6 — Ship.** Register domain, deploy to Vercel, staging review against the §0.1 checklist, launch.

### Effort snapshot (rough)

Roughly: Phase 1 ≈ a day; Phase 2 ≈ half a day; Phase 3 is the bulk — a few days of copy-in and section adjustments since the copy is pre-written; Phases 4–5 ≈ 2–3 days combined. That's plausibly a **1–2 week path to a launchable P0 site**, versus the Webflow track where the homepage alone is mid-flight after comparable elapsed effort.

---

## 7. Risks & open decisions

1. **Design language vs. style guide provenance.** The Citrus & Charcoal *tokens* are locked, but the *layout language* of the style guide is Agencia X's. Decide consciously: keep linax-digital's existing layout language (Swiss-ish patterns, its section rhythm) re-skinned in KeyLime tokens, rather than trying to clone Agencia X in React. Recommended: keep linax's language — it was built for this exact audience.
2. **Doc debt after pivot.** `webflowplan.md` becomes historical; `styleguide.md` needs a short "Next.js token mapping" preface or a v5 rewrite so future agents don't build against Webflow class names.
3. **The blog/case-studies temptation.** They exist in the codebase and it will be tempting to launch them. The architecture doc is explicit that they're P2/P4 — keep them dark to protect launch scope.
4. **Two calculators exist** (`linax-digital/components/RevenueCalculator` — the fuller three-vector version; `generated/keylime-revenue-calculator` and the simpler `keylime-missed-call-widget`). Pick one canonical implementation early. The site-architecture spec (§5.7) describes a *three-input* tool — the simpler widget matches the spec for the hero; the fuller calculator may be better as the standalone page. Decide before Phase 4.
5. **Unchanged blockers.** Domain, Calendly URL, photography, testimonials, and `writing-voice.md` block launch quality on either platform — the pivot doesn't move them.
