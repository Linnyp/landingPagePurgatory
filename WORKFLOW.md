# Landing Page Purgatory — Workflow Guide

This guide covers the full agent pipeline for generating a landing page, from new client context to preview-ready page. Read it once before running your first pipeline.

---

## Prerequisites

- Claude Code running in the `landingPagePurgatory/` root
- Next.js dev server: `cd landing-page-purgatory && npm run dev` → `http://localhost:3000`
- Familiarity with copy-pasting between Claude Code conversations (each agent runs as a fresh context)

### Installed Skills

**Project-level skills** (auto-loaded from `.agents/skills/`):
- Marketing pipeline: `copywriting`, `copy-editing`, `marketing-psychology`, `page-cro`, `site-architecture`
- Growth & post-launch: `analytics-tracking`, `ab-test-setup`, `seo-audit`, `ai-seo`, `schema-markup`, `launch-strategy`, `social-content`, `email-sequence`, `paid-ads`, `ad-creative`
- Conversion: `form-cro`, `popup-cro`, `signup-flow-cro`, `onboarding-cro`, `paywall-upgrade-cro`, `pricing-strategy`
- Sales: `competitor-alternatives`, `sales-enablement`, `cold-email`, `referral-program`
- Context: `product-marketing-context` ← **run this first for every new client**

**Global Vercel skills** (installed via `npx skills`):
- `vercel-react-best-practices` — Next.js/React patterns, App Router conventions
- `web-design-guidelines` — Vercel design system, visual consistency rules
- `vercel-composition-patterns` — Component composition patterns for scalable UI

---

## File Naming Convention

All client files live under a **slug** — a lowercase, hyphenated identifier you choose.

```
outputs/acme-corp/01-style-guide.md
outputs/acme-corp/02-copy.md
outputs/acme-corp/03-layout.md
outputs/acme-corp/04-page.tsx
outputs/acme-corp/05-ux-audit.md
context/clients/acme-corp/business-context.md
landing-page-purgatory/generated/acme-corp/page.tsx
```

---

## Step 0 — Create Client Context

1. Copy `context/_template.md` to `context/clients/[slug]/business-context.md`
2. Fill in every field. Incomplete context = weaker agent output. Required fields are marked.
3. Commit or save — this is your source of truth for the entire pipeline.

```bash
mkdir -p context/clients/[slug] outputs/[slug]
cp context/_template.md context/clients/[slug]/business-context.md
# Edit the file, fill every field
```

**Then run the `product-marketing-context` skill** in Claude Code to generate `.agents/product-marketing-context.md`. This file is auto-read by every skill in the `.agents/skills/` library so you don't have to re-paste business context into downstream skill invocations.

```
/product-marketing-context
```

When prompted, choose "Auto-draft from codebase" — Claude will read your filled `business-context.md` and produce the PMC file. Review it, correct anything off, then save. Going forward every skill invocation automatically has full product/audience/positioning context.

---

## Step 1 — Brand Style Agent

**Goal:** Produce a complete brand style guide (fonts, colors, spacing, visual rules, CSS block).

**Skill augmentation (optional, run in Claude Code before the agent):**
```
/marketing-psychology
```
Ask it to summarize the psychological principles most relevant to your audience's decision-making style. Paste the summary into the agent prompt as additional context — it meaningfully improves color and emotional register decisions.

**Invoke:**
1. Open a new Claude Code conversation (or use a fresh context window)
2. Read the agent instructions from `.agents/01-brand-style-agent.md`
3. Paste your prompt:

```
[Paste full contents of .agents/01-brand-style-agent.md]

---
BUSINESS CONTEXT:
[Paste full contents of context/clients/[slug]/business-context.md]

---
ARCHETYPE REFERENCE (optional):
[Paste full contents of archetypes/[archetype].md if using one]

---
PSYCHOLOGY NOTES (optional):
[Paste marketing-psychology output if you ran it]
```

**Save output:**
```
outputs/[slug]/01-style-guide.md
```

**Review checklist:**
- [ ] All CSS variables filled with real hex values (no placeholders)
- [ ] Google Fonts URLs are valid
- [ ] 3–5 Visual Rules are specific and actionable
- [ ] CSS `:root {}` block is complete and copy-pasteable

---

## Step 2 — Copy Agent

**Goal:** Generate the full copy deck for every page section.

**Skill augmentation:** The `copywriting` and `copy-editing` skills are deeply wired into the copy agent's prompt — no pre-run needed. After saving output, run this to refine:
```
/copy-editing
```
Paste `02-copy.md` content and ask for a copy sweep — it catches wordiness, banned phrases, and weak CTAs. Save the refined version back to `outputs/[slug]/02-copy.md`.

**Invoke:**
1. Fresh context or continue in same conversation
2. Prompt:

```
[Paste full contents of .agents/02-copy-agent.md]

---
BUSINESS CONTEXT:
[Paste full contents of context/clients/[slug]/business-context.md]

---
BRAND PERSONALITY (from style guide):
[Paste ONLY the "Brand Personality" section from outputs/[slug]/01-style-guide.md]
```

**Save output:**
```
outputs/[slug]/02-copy.md
```

**Review checklist:**
- [ ] Hero headline is ≤10 words and makes a specific claim
- [ ] Every feature has exactly 2 sentences
- [ ] All placeholder values are in [BRACKETS]
- [ ] No banned words (seamless, innovative, game-changing, etc.)
- [ ] FAQ answers address real objections

---

## Step 3 — Layout Agent

**Goal:** Produce a section-by-section layout blueprint.

**Skill augmentation:** Run `page-cro` in Claude Code before this step if you want a CRO pre-brief to anchor the layout agent's decisions:
```
/page-cro
```
Describe the page type and conversion goal. Paste the Quick Wins and High-Impact Changes sections from the output into the agent prompt as a "CRO Pre-Brief" block. The layout agent will use it to prioritize above-fold content and CTA placement.

**Invoke:**
```
[Paste full contents of .agents/03-layout-agent.md]

---
BUSINESS CONTEXT:
[Paste full contents of context/clients/[slug]/business-context.md]

---
VISUAL RULES (from style guide):
[Paste ONLY the "Visual Rules" section from outputs/[slug]/01-style-guide.md]

---
COPY DECK:
[Paste full contents of outputs/[slug]/02-copy.md]

---
CRO PRE-BRIEF (optional):
[Paste page-cro output if you ran it]
```

**Save output:**
```
outputs/[slug]/03-layout.md
```

**Review checklist:**
- [ ] Section order serves the conversion goal
- [ ] No two adjacent sections share the same background
- [ ] Component inventory is complete
- [ ] Responsive notes cover all multi-column sections
- [ ] All Include: N decisions are justified

---

## Step 4 — Component Builder Agent

**Goal:** Generate the complete TSX landing page file.

**Skill augmentation:** The three Vercel skills are wired directly into the component builder agent prompt. Claude Code will apply them automatically when building or editing generated page components. You can also invoke them explicitly for targeted guidance:
```
/vercel-react-best-practices     ← App Router patterns, RSC vs client components, image optimization
/web-design-guidelines           ← Spacing, typography, visual consistency rules
/vercel-composition-patterns     ← Component structure, composition patterns, reuse strategy
```

**Invoke:** This agent requires the most context — paste all four inputs in order.
```
[Paste full contents of .agents/04-component-builder-agent.md]

---
STYLE GUIDE:
[Paste full contents of outputs/[slug]/01-style-guide.md]

---
COPY DECK:
[Paste full contents of outputs/[slug]/02-copy.md]

---
LAYOUT BLUEPRINT:
[Paste full contents of outputs/[slug]/03-layout.md]

---
BUSINESS CONTEXT:
[Paste full contents of context/clients/[slug]/business-context.md]
```

**Save output:**
```
outputs/[slug]/04-page.tsx
```

**Review checklist:**
- [ ] File starts with the file-level comment block (setup instructions)
- [ ] All copy from the deck is used
- [ ] `brandTokens` object contains every CSS variable from the style guide
- [ ] No hardcoded hex colors in className or style props
- [ ] FAQ accordion has working state (useState)
- [ ] No external library imports
- [ ] TypeScript compiles (run `tsc --noEmit` to verify)

---

## Step 5 — Register the Page

1. Create the generated component directory:
   ```bash
   mkdir -p landing-page-purgatory/generated/[slug]
   ```

2. Copy the TSX output:
   ```bash
   cp outputs/[slug]/04-page.tsx landing-page-purgatory/generated/[slug]/page.tsx
   ```

3. Register in `landing-page-purgatory/generated/index.ts`:
   ```ts
   export const generatedPages: GeneratedPage[] = [
     {
       slug: "[slug]",
       businessName: "[Business Name]",
       generatedAt: "YYYY-MM-DD",
       archetype: "[archetype]",
     },
   ];

   export const pageComponents: Record<string, () => Promise<{ default: ComponentType }>> = {
     "[slug]": () => import("./[slug]/page"),
   };
   ```

4. If the page uses custom fonts, add the font `<link>` tags to `landing-page-purgatory/app/layout.tsx` inside the `<head>`:
   ```tsx
   // In layout.tsx, add inside <html><head>:
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
   <link href="[FONT_URL_FROM_STYLE_GUIDE]" rel="stylesheet" />
   ```

5. Visit `http://localhost:3000` — the card should appear on the hub.
6. Click the card to preview at `http://localhost:3000/[slug]`.

---

## Step 6 — UX Audit

**Goal:** Identify critical issues and prioritize fixes before client review.

**Skill augmentation:** After the core audit, run these for deeper specialist analysis:

| Skill | When to run |
|---|---|
| `/page-cro` | Always — deeper conversion analysis beyond the audit score table |
| `/seo-audit` | If organic traffic is a goal |
| `/schema-markup` | Add JSON-LD structured data (FAQ, Organization, WebPage schemas) to the TSX |
| `/ai-seo` | If the client wants AI search visibility (Perplexity, ChatGPT citations) |
| `/analytics-tracking` | Generate a tracking plan (GA4 events, GTM setup) to measure page performance |
| `/ab-test-setup` | Turn High-Priority audit items into properly structured A/B test hypotheses |

**Invoke:**
```
[Paste full contents of .agents/05-ux-auditor-agent.md]

---
GENERATED PAGE (TSX):
[Paste full contents of outputs/[slug]/04-page.tsx]

---
COPY DECK:
[Paste full contents of outputs/[slug]/02-copy.md]

---
LAYOUT BLUEPRINT:
[Paste full contents of outputs/[slug]/03-layout.md]

---
BUSINESS CONTEXT:
[Paste full contents of context/clients/[slug]/business-context.md]
```

**Save output:**
```
outputs/[slug]/05-ux-audit.md
```

**Action:**
- Fix all Critical Issues in `landing-page-purgatory/generated/[slug]/page.tsx`
- Decide which High-Priority items to address now vs. later
- Note Low-Priority items for future iteration

---

## Iteration Loop

After fixing audit issues, re-run only the affected agents:

| What changed | Re-run |
|---|---|
| Copy tweaks only | Just fix in TSX directly |
| Structural section changes | Agent 03 → Agent 04 → Agent 05 |
| Brand direction pivot | All agents (01 → 05) |
| New business context info | Update context file, re-run affected agents |

Keep outputs versioned by appending `-v2`, `-v3` to filenames:
```
outputs/[slug]/04-page-v2.tsx
outputs/[slug]/05-ux-audit-v2.md
```

---

## Tips for Better Agent Output

**For Brand Style Agent (01):**
- Providing the archetype reference file significantly improves output quality
- If the client has existing colors or fonts, specify them explicitly — agents will respect constraints better than free-choice
- If output colors feel generic, ask the agent to "push the palette more distinctly toward [vibe adjective]"

**For Copy Agent (02):**
- The more specific the "Most painful problem" and "Desired outcome" fields in the context, the sharper the copy
- If headlines feel vague, ask agent to "rewrite the hero headline as a specific claim with a number or timeframe"
- Placeholder testimonials from the agent are often surprisingly usable — review before replacing

**For Layout Agent (03):**
- If the agent includes too many sections, explicitly tell it: "The page should be medium length (6–8 sections) — cut the lowest-value sections"
- If you want a specific layout pattern overridden, say so: "Use testimonial-featured instead of testimonial-3up"

**For Component Builder (04):**
- This is the longest context window — paste ALL four inputs, in order, without abbreviating
- If the first output has TypeScript errors, paste the errors back and ask for a corrected version
- If a section is missing or wrong, ask specifically: "The HeroSection is missing the secondary CTA from the copy deck. Add it."
- Run `tsc --noEmit` in `landing-page-purgatory/` after saving — fix any type errors before moving to audit

**For UX Auditor (05):**
- The audit is most useful AFTER you've done a visual review yourself — the agent catches technical issues, you catch aesthetic ones
- If critical issues feel overstated, they're usually right — trust the audit on CTA placement and above-fold clarity

---

## TypeScript Verification

After registering a new page:
```bash
cd landing-page-purgatory
npx tsc --noEmit
```

Common issues and fixes:
- `Type '{}' is not assignable to React.CSSProperties` — ensure `brandTokens` is cast `as React.CSSProperties`
- Missing `"use client"` — add to components using `useState`
- Import errors — check `generated/index.ts` import path matches actual file location

---

## Post-Pipeline: Growth & Launch Skills

Once the page is live (or preview-ready), the `.agents/skills/` library covers the full growth stack. Invoke any of these directly in Claude Code — they auto-read `.agents/product-marketing-context.md` for context.

### Launch
```
/launch-strategy        ← Product Hunt, announcement plan, GTM checklist
/email-sequence         ← Launch email series, welcome sequence for new signups
/social-content         ← Launch posts, thread templates, content calendar
```

### Paid Acquisition
```
/paid-ads               ← Campaign strategy, targeting, bidding
/ad-creative            ← Bulk ad headline/description variations from the copy deck
```

### SEO & Discoverability
```
/seo-audit              ← Technical SEO, on-page, meta tags
/ai-seo                 ← Optimize for Perplexity/ChatGPT/Gemini citations
/schema-markup          ← JSON-LD structured data for rich snippets
/programmatic-seo       ← Template pages at scale (location pages, integration pages, etc.)
/competitor-alternatives ← "[Competitor] alternative" and "vs" comparison pages
```

### Conversion Optimization (post-launch)
```
/ab-test-setup          ← Turn audit items into structured experiments
/analytics-tracking     ← GA4 events, GTM, conversion tracking plan
/form-cro               ← Lead capture form optimization
/popup-cro              ← Exit-intent, email capture overlays
/signup-flow-cro        ← Post-CTA signup flow optimization
/onboarding-cro         ← First-run experience, activation optimization
/paywall-upgrade-cro    ← Free → paid upgrade moments
```

### Retention & Revenue
```
/pricing-strategy       ← Pricing model, plan structure, value metric
/churn-prevention       ← Cancel flows, save offers, dunning
/referral-program       ← Refer-a-friend mechanics
/revops                 ← Lead scoring, MQL→SQL handoff, CRM automation
```

### Sales Support
```
/cold-email             ← Outbound sequences using the page's messaging
/sales-enablement       ← One-pagers, objection handling docs, demo scripts
/content-strategy       ← Blog topic clusters, editorial calendar
```

---

## Outputs Directory Structure (after first client)

```
outputs/
└── acme-corp/
    ├── 01-style-guide.md
    ├── 02-copy.md
    ├── 03-layout.md
    ├── 04-page.tsx
    ├── 04-page-v2.tsx        ← after audit fixes
    └── 05-ux-audit.md
```

```
landing-page-purgatory/generated/
├── index.ts                  ← registry (manually maintained)
└── acme-corp/
    └── page.tsx              ← copy of 04-page-v2.tsx
```
