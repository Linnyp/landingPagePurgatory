# Linax Digital — Homepage Wireframe Spec

> **Purpose.** This document is the canonical homepage structure reference for any AI agent building, modifying, or reviewing the Linax Digital homepage. It defines the section order, the purpose of each section, the content that belongs in each section, and the layout/component references from `styleguide.md`. It does **not** define final copy — copy will be written separately once voice samples are captured. Placeholder copy in this document is directional only and meant to convey tone and length, not final wording.

**Pairs with:**
- `linax-digital-business-context.md` — brand, audience, offer, tone
- `styleguide.md` — colors, typography, spacing, components

**Archetype check:** Every section below must pass the Everyman test. If a section, headline, or visual choice would feel foreign or intimidating to a 58-year-old HVAC owner in Cape Coral reading this on his phone between jobs, it is wrong, no matter how modern or clever it looks.

---

## Table of Contents

1. [Page-Level Decisions](#1-page-level-decisions)
2. [Section Order & Rhythm](#2-section-order--rhythm)
3. [Section 1 — Navigation](#3-section-1--navigation)
4. [Section 2 — Hero](#4-section-2--hero)
5. [Section 3 — Trust Bar](#5-section-3--trust-bar)
6. [Section 4 — Problem Agitation](#6-section-4--problem-agitation)
7. [Section 5 — Services Overview](#7-section-5--services-overview)
8. [Section 6 — Results Snapshot](#8-section-6--results-snapshot)
9. [Section 7 — How We Work (Process)](#9-section-7--how-we-work-process)
10. [Section 8 — Testimonials](#10-section-8--testimonials)
11. [Section 9 — Local Proof](#11-section-9--local-proof)
12. [Section 10 — FAQ](#12-section-10--faq)
13. [Section 11 — Final CTA](#13-section-11--final-cta)
14. [Section 12 — Footer](#14-section-12--footer)
15. [Responsive Behavior Summary](#15-responsive-behavior-summary)
16. [Content Dependencies](#16-content-dependencies)

---

## 1. Page-Level Decisions

**Primary conversion goal:** Book a free consultation via embedded Calendly.
**Secondary conversion goal:** Lead capture form (Free Digital Presence Audit) feeding Go High Level.
**Background pattern:** Alternating `--color-sand-50` (cream) and `--color-sand-100` (soft sand) per §11.4 of the style guide, with `--color-clay-50` used once for the testimonials section as the emphasis moment, and `--color-sand-900` for the footer.
**Maximum CTAs visible at any scroll position:** One primary (clay), optionally paired with one secondary (sand outline). Never two primary buttons in the same viewport.
**Number of page-level CTAs pointing to Calendly:** At least four — hero, after services, final CTA section, and navigation. This is deliberate: the Everyman audience should never have to scroll to find the action.
**Minimum viewport target for design reviews:** 375px width (iPhone SE) — this is a realistic mobile device for the SWFL SMB demographic. If it doesn't read well at 375px, it's broken.
**Performance budget:** Lighthouse score 95+ on mobile. First Contentful Paint under 1.2s. Hero image (if any) is the only asset allowed to weigh more than 150kb.

---

## 2. Section Order & Rhythm

The homepage unfolds in a deliberate narrative order. Each section answers a question the visitor is asking in their head as they scroll.

| # | Section | Visitor's unspoken question | Background |
|---|---------|----------------------------|------------|
| 1 | Navigation | *"Where am I? What can I do here?"* | `--color-sand-50` (transparent with blur) |
| 2 | Hero | *"What is this and is it for me?"* | `--color-sand-50` (cream with optional radial warmth) |
| 3 | Trust Bar | *"Are these people legit?"* | `--color-sand-25` (white) |
| 4 | Problem Agitation | *"Do they understand my situation?"* | `--color-sand-100` (soft sand) |
| 5 | Services Overview | *"What exactly do they do?"* | `--color-sand-50` (cream) |
| 6 | Results Snapshot | *"Does it actually work?"* | `--color-sand-100` (soft sand) |
| 7 | How We Work | *"What does working with them look like?"* | `--color-sand-50` (cream) |
| 8 | Testimonials | *"What do other people like me say?"* | `--color-clay-50` (soft clay — emphasis) |
| 9 | Local Proof | *"Are they really from around here?"* | `--color-sand-50` (cream) |
| 10 | FAQ | *"I still have questions."* | `--color-sand-100` (soft sand) |
| 11 | Final CTA | *"Okay, what do I do now?"* | `--color-sand-900` (dark warm brown emphasis) |
| 12 | Footer | *"Where's their phone number and hours?"* | `--color-sand-900` (dark warm brown) |

**Rhythm check:** The clay-50 testimonials section is the single emphasis moment (per §11.4 of the style guide — one per page maximum). The dark warm brown appears only in the Final CTA and Footer, and the Final CTA flows directly into the Footer without a color break so they read as a single grounded closing moment.

**Why testimonials before local proof, not after:** Testimonials are the strongest form of social proof and earn a unique background. Local proof then reinforces the Southwest Florida identity before the FAQ addresses remaining objections. If testimonials don't exist yet, Section 8 collapses into a placeholder and clay-50 moves to Section 11 (Final CTA).

---

## 3. Section 1 — Navigation

### Purpose
Orient the visitor, provide consistent access to the CTA, and anchor the brand visually at the top of every page.

### Layout
Sticky navigation bar, full-bleed width, with contained content matching `--container-xl` (1200px).

```
┌─────────────────────────────────────────────────────────────────────┐
│  [LOGO]           Services   How We Work   About   FAQ   [CTA BTN] │
└─────────────────────────────────────────────────────────────────────┘
```

### Components
- **Logo:** Fraunces 22px weight 600 opsz 48, color `--color-sand-950`. Wordmark only until final logo is ready. If a period/dot is part of the wordmark, it uses `--color-clay-500`.
- **Nav links:** 4 max. Inter 15px weight 500, color `--color-sand-700`. Hover color `--color-sand-950` with clay underline slide-in (§10.4 of style guide). Links point to in-page anchors for `#services`, `#process`, and external pages for `/about` and `/faq`.
- **Primary CTA button:** `Book a free consult →`. Clay primary button, default size, always visible.

### Behavior
- Transparent background at page top (with 16px blur for any hero content passing under it).
- On scroll past 80px, background transitions to `rgba(251, 248, 243, 0.85)` with blur-16 and `--shadow-sm` appears on the bottom edge.
- Transition duration 300ms, `--ease-out-quart`.

### Mobile
- Hamburger icon (left), centered logo, CTA button (right — always visible).
- Menu panel opens to full-screen cream overlay with centered Fraunces 32px nav links, staggered fade-in (see §12.2 of style guide).

### Spec references
- Style guide §12 (Navigation)
- Style guide §7 (Buttons — primary variant)

---

## 4. Section 2 — Hero

### Purpose
Land a clear, plainspoken value proposition within 3 seconds. Tell the visitor exactly what Linax Digital does, who it's for, and what to do next. This is the single most important section on the page — if it fails, nothing downstream matters.

### Layout
Asymmetric 7fr / 5fr split on desktop with headline content on the left and a supporting visual on the right. On tablet and mobile, stack to single column with headline content first, visual second.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  EYEBROW LABEL                                                      │
│  Large Fraunces Headline                         [  VISUAL  ]       │
│  with italic emphasis                            [   SLOT    ]      │
│                                                  [            ]     │
│  Plainspoken subheadline                         [            ]     │
│  max ~640px wide                                 [            ]     │
│                                                                     │
│  [Primary CTA →]  [Secondary CTA]                                   │
│                                                                     │
│  · Trust signal row ·                                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-50` (cream) with optional subtle radial clay warmth from top center (see §2.5 of style guide).
- Padding: 128px top, 96px bottom (desktop); 80px top, 64px bottom (mobile).

### Content elements

**1. Eyebrow label**
- Inter 12px weight 600, UPPERCASE, letter-spacing 0.1em, color `--color-clay-500`
- Placeholder text: `DIGITAL MARKETING FOR SOUTHWEST FLORIDA`
- Other possible directions (for copywriter to choose): `MARKETING FOR LOCAL SERVICE BUSINESSES` / `BUILT IN CAPE CORAL`

**2. Headline**
- Fraunces 56px weight 500 opsz 144 SOFT 50, letter-spacing -0.02em, line-height 1.1, color `--color-sand-950`
- Key phrase in italic Fraunces for inline emphasis
- Maximum 12 words, ideally 6–9
- Placeholder: *"More leads. More customers. More work for you."*
- Alternate directions: *"Local marketing that actually works."* / *"The marketing you know you need, done right."* / *"Built for local. Built to last."*

**3. Subheadline**
- Inter 18px weight 400, line-height 1.6, color `--color-sand-700`, max-width 640px
- 2–3 sentences max. Plainspoken Everyman voice.
- Placeholder: *"We build websites, run ads, and manage your online reputation so your phone keeps ringing and you can get back to running your business. No account managers. No jargon. Just the marketing your local business needs, done by someone who actually does the work."*

**4. Button group**
- Primary: `Book a free consult →` (clay primary, large size, links to Calendly)
- Secondary: `See what we do` (sand outline, links to `#services`)
- 16px gap between buttons, flex-wrap on mobile (stacks vertically below 480px)

**5. Trust signal row**
- Small horizontal row below the button group
- Inter 13px weight 500, color `--color-sand-600`
- Content: A short row of quick-trust signals. Examples to pick from:
  - `Based in Cape Coral, FL`
  - `Trusted by X local businesses` (when quantified)
  - `Google rating 5.0` (if/when available)
  - `Month-to-month on SEO, Ads & Reputation`
- Start with 2–3 signals max. This row is cuttable if visual weight gets too heavy.

### Visual slot (right side, desktop only)
The visual slot on the right of the asymmetric hero is reserved for ONE of the following, in order of preference:
1. **Authentic founder photo** — professional but warm, shot in SWFL environment (preferred once available)
2. **Real client storefront or work environment** — local business, in context (preferred if founder photo isn't ready)
3. **Minimal custom illustration** in clay and sand tones — used only as a last resort if photography isn't ready for launch
4. **Simple typographic block** — large italic Fraunces quote from the founder or a highlight statistic — used as placeholder during initial build

**Do not use:** Stock photography, AI-generated imagery, generic "team meeting" photos, abstract gradients, or 3D illustrations.

On tablet (below 1024px), the visual slot stacks below the text content. On mobile (below 640px), the visual slot is optionally hidden to prioritize text-first loading.

### Animation
- Headline uses Blur In animation (§10.3) on page load, 900ms, `--ease-out-quart`
- Eyebrow, subhead, buttons, and trust row use staggered Fade Up (§10.3, §10.6) with 80ms delay between each
- Visual slot fades in with a small scale-up (0.96 → 1.0) over 1.2s after page load
- All animations respect `prefers-reduced-motion`

### Spec references
- Style guide §13.1 (Hero Section)
- Style guide §3.3 (Type scale — Hero H1)
- Style guide §10.3 (Blur In animation)

---

## 5. Section 3 — Trust Bar

### Purpose
Immediately reinforce credibility after the hero with quick visual proof. This section exists to close the "can I trust these people?" gap before the visitor has to think about it.

### Layout
Full-width section with contained row of 4–6 trust elements. Flex with even spacing, centered.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   [⭐ 5.0 Google]   [Est. 2022]   [SWFL Local]   [X Businesses]    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-25` (pure white) — breaks the cream rhythm briefly for emphasis
- Padding: 48px vertical, 32px horizontal
- Subtle 1px `--color-sand-200` top and bottom borders to visually separate from the hero and next section

### Content elements

Trust badges styled per §8.4 of the style guide. Include 4–6 badges from this list (pick what's real and current):

1. **Google rating** — clay-50 bg, clay-700 star icon and text. Only include if you actually have a 5.0 rating.
2. **Years in business** — sand-100 bg, sand-900 text. `"Serving SWFL since 2022"`.
3. **Businesses served** — success-light bg, success text. Only include when real number exists.
4. **Location badge** — info-light bg, info text. `"Based in Cape Coral, FL"`.
5. **Month-to-month contracts** — clay-50 bg, clay-700 text. `"Month-to-month on ongoing services"` — this is a unique differentiator worth calling out.
6. **ROAS guarantee badge** — sand-100 bg, sand-900 text. `"Ad ROAS guarantee: 2:1 or don't pay"`.

**Start conservative:** At launch, use only badges backed by real facts. A trust bar full of fabricated social proof reads as a trust bar worth distrusting.

### Animation
- Each badge Scale In (§10.3) with 100ms staggered delay, `--ease-spring`
- Triggers on scroll-into-view via IntersectionObserver

### Spec references
- Style guide §8.4 (Trust Badges)
- Style guide §10.6 (Staggered Reveals)

---

## 6. Section 4 — Problem Agitation

### Purpose
Show the visitor that Linax Digital understands their situation better than they expected. This is where the "finally, someone gets it" moment happens. Must be written in the prospect's own voice, not in marketing language.

### Layout
Two-column grid (6fr/6fr) on desktop. Left column: section heading and narrative description. Right column: a list of specific pain points presented as a clean checklist. On mobile, stack with heading first.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  EYEBROW LABEL                                                      │
│  Fraunces Section Title                                             │
│                                                                     │
│  Narrative paragraph describing        ◦ Pain point one            │
│  the typical situation of a            ◦ Pain point two            │
│  local SMB owner in SWFL.              ◦ Pain point three          │
│  Plainspoken, specific, empathic.      ◦ Pain point four           │
│                                        ◦ Pain point five          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-100` (soft sand)
- Padding: 96px vertical (desktop), 64px vertical (mobile)

### Content elements

**1. Eyebrow**
- `SOUND FAMILIAR?` or `IS THIS YOU?`

**2. Section title**
- Fraunces 40px weight 500, color `--color-sand-950`
- Placeholder: *"Your phone should be ringing more."*
- Alternates: *"You're leaving money on the table."* / *"Your marketing shouldn't be this hard."*

**3. Narrative paragraph (left column)**
- Inter 17px weight 400, color `--color-sand-700`, line-height 1.65, max-width 520px
- 3–4 sentences describing the typical local SMB owner situation. Must name specific things: GBP, reviews, website, lead follow-up.
- Placeholder: *"You know your website is dated. You know your Google Business Profile needs work. You know your reviews are stale and your competitors are pulling ahead. You know all of this — and you've also been too busy running your actual business to fix any of it. You don't need someone to tell you what's broken. You need someone to actually fix it."*

**4. Pain point checklist (right column)**
- Inter 16px weight 400, color `--color-sand-800`, line-height 1.6
- 5–6 bullet items with clay check-circle icons (16px, `--color-clay-500`)
- Gap between items: 16px
- Each item 1 line, 8–12 words
- Placeholders:
  - `Your website looks dated and doesn't convert visitors to leads`
  - `Your Google Business Profile is incomplete or under-optimized`
  - `Your reviews are old, scattered, or not being responded to`
  - `Your leads slip through the cracks when you're on a job`
  - `Your competitors are ranking above you on local searches`
  - `You've tried an agency before and got burned`

### Optional element: sign-off sentence
Below the two columns, a single centered sentence in italic Fraunces 20px, color `--color-sand-800`, as a bridge to the next section:
- Placeholder: *"If any of this sounds familiar, you're in exactly the right place."*

### Spec references
- Style guide §13.3 (Content Section template)
- Style guide §3.3 (Type scale)

---

## 7. Section 5 — Services Overview

### Purpose
Show the four core services clearly, with pricing transparent enough that visitors don't have to email to find out what things cost. This section is the strongest single differentiator on the page — most local agencies hide pricing, so exposing it is a trust signal.

### Layout
Section heading block at top, then a 2×2 grid of service cards on desktop (one card per core service), single column stack on mobile.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   EYEBROW                                                           │
│   Fraunces Section Title                                            │
│   Optional one-line subhead                                         │
│                                                                     │
│   ┌──────────────────┐    ┌──────────────────┐                     │
│   │  [ICON]          │    │  [ICON]          │                     │
│   │  Website         │    │  SEO Foundation  │                     │
│   │  Description     │    │  Description     │                     │
│   │  $3,000 or       │    │  $600 + $300/mo  │                     │
│   │  $180/mo         │    │                  │                     │
│   │  Learn more →    │    │  Learn more →    │                     │
│   └──────────────────┘    └──────────────────┘                     │
│                                                                     │
│   ┌──────────────────┐    ┌──────────────────┐                     │
│   │  [ICON]          │    │  [ICON] ★        │                     │
│   │  Ads             │    │  Reputation Mgmt │                     │
│   │  Description     │    │  Description     │                     │
│   │  $300/mo min     │    │  $195/mo         │                     │
│   │  Learn more →    │    │  Learn more →    │                     │
│   └──────────────────┘    └──────────────────┘                     │
│                                                                     │
│                    [View pricing details →]                         │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-50` (cream)
- Padding: 96px vertical (desktop), 64px vertical (mobile)

### Section heading block
- **Eyebrow:** `WHAT WE DO` or `FOUR SERVICES, DONE RIGHT`
- **Title:** Fraunces 40px weight 500. Placeholder: *"Everything your local business needs to grow online."*
- **Subhead:** Inter 17px weight 400, color `--color-sand-700`, max-width 640px, centered below title. Placeholder: *"Four core services. Transparent pricing. No long-term lock-in on anything except your website."*

### Service card content

Each card follows §8.1 of the style guide. Reputation Management gets the **Featured variant** with a 3px `--color-clay-500` top border because it is the flagship service and onramp to platform-powered upsells.

**Card 1 — Website**
- Icon: house-with-wifi, monitor, or browser-window icon in clay-600 on clay-50 bg
- Title: `Websites`
- Description: Inter 15px weight 400, color `--color-sand-700`, line-height 1.6. 2–3 sentences. Placeholder: *"Fast, modern websites built on the same frameworks top tech companies use. Mobile-first, SEO-optimized, and designed to turn visitors into phone calls."*
- Pricing line: Inter 14px weight 600, color `--color-sand-900`. `$3,000 one-time, or $180/month (12-month minimum)`
- Link: `See website options →` in clay-600, points to `/services/websites`

**Card 2 — SEO Foundation**
- Icon: magnifying-glass, compass, or map-pin icon
- Title: `Local SEO`
- Description: *"Get found when local customers search for what you do. We handle keyword research, Google Business Profile, local citations, content, and backlinks — the whole foundation."*
- Pricing line: `$600 one-time setup, then $300/month ongoing`
- Link: `See SEO details →`, points to `/services/seo`

**Card 3 — Ads**
- Icon: megaphone, target, or lightning-bolt icon
- Title: `Google & Meta Ads`
- Description: *"Ads that actually work because they're actually managed. Full campaign setup, ongoing optimization, monthly reporting — and if ROAS drops below 2:1, you don't pay."*
- Pricing line: `$300/month minimum or 10% of ad spend, capped at $2,000/month`
- Link: `See ads details →`, points to `/services/ads`

**Card 4 — Reputation Management (Featured)**
- Icon: star, thumbs-up, or chat-bubble icon
- Title: `Reputation Management`
- Description: *"Never chase a review again. We run the system that generates reviews, manages customer conversations, and keeps everything in one inbox you can actually use."*
- Pricing line: `$195/month — includes CRM and unified inbox access`
- Link: `See reputation details →`, points to `/services/reputation`
- **Small "Most popular" badge** (per §8.1 featured variant) in the top-right corner — clay-100 background, clay-800 text, 12px Inter 600

### Section CTA below grid
- Centered, 48px below the grid
- `View full pricing details →` as a secondary outline button, points to `/pricing` or opens a modal with the complete pricing table from the business context doc

### Animation
- Section title Fade Up on scroll-into-view
- Cards staggered Fade Up with 100ms delay between each (§10.6)

### Spec references
- Style guide §8.1 (Service Cards)
- Style guide §11.2 (Grid — three/four cards)

---

## 8. Section 6 — Results Snapshot

### Purpose
Demonstrate that Linax Digital delivers real outcomes. Uses the stat card component (§8.5) to display quantified results in the most visually confident format on the page.

**Important caveat:** Until real results are available, this section must either display **genuine early wins only**, or be replaced entirely with a case-study teaser placeholder. Fabricated stats are not acceptable and will undermine every other trust signal on the page.

### Layout
Section heading at top, centered. Below: a horizontal row of 3–4 stat cards, evenly spaced. On mobile, stack to a 2×2 grid.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                            EYEBROW                                  │
│                    Fraunces Section Title                           │
│                                                                     │
│      ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐        │
│      │  340%   │   │   50+   │   │  4.9★   │   │  2 wks  │        │
│      │  more   │   │  local  │   │ average │   │ average │        │
│      │  leads  │   │  biz    │   │ rating  │   │ launch  │        │
│      └─────────┘   └─────────┘   └─────────┘   └─────────┘        │
│                                                                     │
│                   [See all case studies →]                         │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-100` (soft sand)
- Padding: 96px vertical (desktop), 64px vertical (mobile)

### Section heading
- **Eyebrow:** `REAL RESULTS` or `WHAT CHANGES AFTER YOU WORK WITH US`
- **Title:** Fraunces 40px weight 500, centered. Placeholder: *"Numbers from real local businesses."*

### Stat cards
Per §8.5 of the style guide. Each card contains:
- Large number in Fraunces 64px weight 500, `--color-sand-950`, with the unit or symbol in `--color-clay-500`
- Label in Inter 14px weight 500, `--color-sand-600`, below the number

**Placeholder stats (replace with real data before launch):**
- `340%` more leads
- `50+` local businesses served
- `4.9★` average Google rating
- `2 wks` average website launch time

### Fallback state (pre-results)
If no quantified results exist yet, replace the stat row with a single editorial-style block containing:
- A single large Fraunces italic quote (28px) from a client or the founder
- Below: a smaller block saying `"Case studies coming as our client engagements mature. In the meantime, here's how we think about results —"` followed by 2–3 bullet points on measurement philosophy

### Section CTA
- `See all case studies →` secondary outline button below the stat row, points to `/case-studies`
- Hide this button until at least 2 published case studies exist

### Animation
- Counter animation on stat numbers (§10.5) — count up from 0 over 1.5–2 seconds on scroll-into-view
- Respect `prefers-reduced-motion` — display final numbers immediately if set

### Spec references
- Style guide §8.5 (Stat / Metric Cards)
- Style guide §10.5 (Counter Animation)

---

## 9. Section 7 — How We Work (Process)

### Purpose
Demystify what working with Linax Digital actually looks like. Local business owners who have been burned by past agencies need to see the process in plain terms before they'll book a call.

### Layout
Section heading at top. Below: horizontal 4-step process on desktop, stacked vertical on mobile.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                            EYEBROW                                  │
│                    Fraunces Section Title                           │
│                Short plainspoken subheadline                        │
│                                                                     │
│   ┌───┐        ┌───┐        ┌───┐        ┌───┐                    │
│   │ 1 │   →    │ 2 │   →    │ 3 │   →    │ 4 │                    │
│   └───┘        └───┘        └───┘        └───┘                    │
│   Free         Audit &      Build &      Grow &                    │
│   Call         Plan         Launch       Optimize                   │
│                                                                     │
│   15 min       3-5 days    2-4 wks      Ongoing                    │
│   No pitch     Roadmap     You review   Monthly                    │
│   No pressure  for free    each step    reporting                   │
│                                                                     │
│                      [Book your free call →]                        │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-50` (cream)
- Padding: 96px vertical (desktop), 64px vertical (mobile)

### Section heading
- **Eyebrow:** `HOW WE WORK` or `FROM FIRST CALL TO LAUNCH`
- **Title:** Fraunces 40px weight 500. Placeholder: *"Four steps. No surprises."*
- **Subhead:** Inter 17px weight 400, color `--color-sand-700`, max-width 600px. Placeholder: *"Here's exactly what happens when you work with us, from the first call to your first report."*

### Process steps
Per §8.3 of the style guide. Four steps:

**Step 1 — Free Call**
- Step number: 44px circle, `--color-sand-950` bg, `--color-sand-50` text
- Title: Fraunces 20px weight 500, `--color-sand-950`. `Free call`
- Description: Inter 14px weight 400, `--color-sand-600`. 2 lines. `15-minute discovery call. No pitch, no pressure.`
- Duration line: Inter 13px weight 500, `--color-clay-600`. `15 minutes`

**Step 2 — Audit & Plan**
- Title: `Audit & plan`
- Description: `We review your current digital presence and build a plan tailored to your business.`
- Duration: `3–5 days`

**Step 3 — Build & Launch**
- Title: `Build & launch`
- Description: `We execute the plan. You review and approve at every step. No surprises.`
- Duration: `2–4 weeks`

**Step 4 — Grow & Optimize (Final step — amber/clay background)**
- Step number: `--color-clay-500` bg instead of sand-950 (signals the payoff)
- Title: `Grow & optimize`
- Description: `Ongoing optimization, monthly reporting, and direct access to the person doing the work.`
- Duration: `Ongoing`

### Arrow connectors
Between steps on desktop: `→` character in Inter 24px, color `--color-sand-400`. On mobile, remove arrows and let vertical spacing define the flow.

### Section CTA
- `Book your free call →` primary clay button, centered below the process row

### Animation
- Each step Slide Right animation (§10.3) with 150ms staggered delay
- Triggers on scroll-into-view

### Spec references
- Style guide §8.3 (Process Steps)
- Style guide §10.3 (Slide Right animation)

---

## 10. Section 8 — Testimonials

### Purpose
Deliver the strongest form of social proof available — other local business owners saying this worked for them. Uses the one emphasis background (`--color-clay-50`) allocated to the page to give this section unique visual weight.

### Layout
Section heading centered at top. Below: 2 or 3 testimonial cards in a horizontal grid. Mobile stacks to single column.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                            EYEBROW                                  │
│                    Fraunces Section Title                           │
│                                                                     │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐        │
│   │ "Quote text  │    │ "Quote text  │    │ "Quote text  │        │
│   │  in italic   │    │  in italic   │    │  in italic   │        │
│   │  Fraunces"   │    │  Fraunces"   │    │  Fraunces"   │        │
│   │              │    │              │    │              │        │
│   │  [Avatar]    │    │  [Avatar]    │    │  [Avatar]    │        │
│   │  Name        │    │  Name        │    │  Name        │        │
│   │  Business    │    │  Business    │    │  Business    │        │
│   └──────────────┘    └──────────────┘    └──────────────┘        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-clay-50` (`#FBECE0` soft clay)
- **This is the single emphasis section on the page.** Do not use `--color-clay-50` anywhere else on the homepage.
- Padding: 96px vertical (desktop), 64px vertical (mobile)

### Section heading
- **Eyebrow:** `WHAT CLIENTS SAY`
- **Title:** Fraunces 40px weight 500, centered. Placeholder: *"Real words from real local businesses."*

### Testimonial cards
Per §8.2 of the style guide. Each card contains:
- Large italic opening quote mark in `--color-clay-300`, Fraunces 64px, positioned top-left with negative margin overlap
- Quote text: Fraunces 18px weight 400 italic, color `--color-sand-800`, line-height 1.6, 3–5 lines max
- Author block at bottom: 48px avatar circle + name (Inter 15px weight 600, sand-950) + business / role (Inter 13px weight 400, sand-600)
- Optional 5-star row in `--color-clay-500` above the quote

Card background: `--color-sand-25` (white) — white cards on the clay-50 background create soft contrast without fighting the warmth.

### Pre-testimonials fallback
Until real testimonials are collected, this section displays one of the following placeholders:

**Option A — Single prominent founder quote:**
A single large Fraunces italic quote (28px) centered on the clay-50 background, attributed to the founder. Explains the agency's approach in the founder's own voice.

**Option B — Hide section entirely:**
Remove Section 8 from the homepage until at least 2 real testimonials exist. Move the clay-50 emphasis to the Final CTA section instead.

**Option C — "Testimonials coming soon" placeholder:**
A clean text block explaining that testimonials are being collected as client engagements mature, with a simple note that the founder is happy to connect prospective clients with current clients for reference calls on request. This is honest and consistent with the Everyman voice.

**Recommendation:** Use Option C at launch. It's the most authentic and reinforces the transparency differentiator.

### Animation
- Cards staggered Fade Up with 120ms delay between each
- Quote marks scale in with `--ease-spring` on card hover

### Spec references
- Style guide §8.2 (Testimonial Cards)
- Style guide §11.4 (Section Rhythm — clay-50 as single emphasis section)

---

## 11. Section 9 — Local Proof

### Purpose
Reinforce the Southwest Florida local differentiator that no national agency can replicate. This section earns its place only because "we're from here" is one of the five core differentiators from the business context doc (v3 §7). Cut this section if page length is a concern — it can be folded into the About page instead.

### Layout
Asymmetric two-column on desktop (5fr / 7fr with image on left, content on right). Stacks on mobile.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌────────────────┐     EYEBROW                                     │
│  │                │     Fraunces Section Title                      │
│  │   AUTHENTIC    │                                                 │
│  │   LOCAL        │     Short paragraph about local roots,          │
│  │   PHOTO        │     knowledge of SWFL market, specific          │
│  │                │     verticals served, and why that matters.     │
│  │                │                                                 │
│  │                │     · Lee County  · Collier County              │
│  │                │     · Charlotte County                          │
│  └────────────────┘                                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-50` (cream)
- Padding: 96px vertical (desktop), 64px vertical (mobile)

### Content elements

**1. Image (left column)**
- Authentic local photograph — the founder in a SWFL environment, a local landmark, a real client's business, or an SWFL scene that reads as "we actually work here." Not a stock photo. Not a beach cliché.
- Aspect ratio: 4:5 or 1:1
- Border radius: `--radius-xl` (24px)
- Until a real photo exists, use a simple typographic block with a warm `--color-sand-100` background containing a large italic Fraunces quote or map graphic

**2. Eyebrow**
- `FROM HERE, FOR HERE` or `SOUTHWEST FLORIDA LOCAL`

**3. Title**
- Fraunces 40px weight 500. Placeholder: *"Built in Cape Coral. Built for Southwest Florida."*

**4. Body paragraph**
- Inter 17px weight 400, `--color-sand-700`, line-height 1.65, max-width 520px
- 3–4 sentences. Speak to knowledge of the local market, verticals served, and the personal nature of the work.
- Placeholder: *"We're not a national agency with a Florida sales rep. We live here. We know the verticals — home services, marine and charter, specialty contractors, local retail. We know your busy season, your slow season, and the way your customers actually search for what you do. And when you need us, you can find us — not a ticket queue."*

**5. County tags**
- Three pill-shaped tags in a row below the paragraph
- `--color-sand-100` background, `--color-sand-900` text, Inter 13px weight 600, `--radius-full`
- Tags: `Lee County`, `Collier County`, `Charlotte County`

### Spec references
- Style guide §11.2 (Asymmetric Editorial layout)
- Style guide §5 (Borders & Radius — xl for image containers)

---

## 12. Section 10 — FAQ

### Purpose
Close the remaining objections before the final CTA. For the Everyman audience, the most important questions are pricing transparency, contract terms, and "what happens if it doesn't work." Address these head-on.

### Layout
Two-column on desktop (5fr / 7fr with heading on left, accordion on right). Stacks on mobile with heading above accordion.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  EYEBROW                     ▸ Question one?                        │
│  Fraunces Section Title      ▸ Question two?                        │
│                              ▸ Question three?                      │
│  Subhead about how to        ▸ Question four?                       │
│  reach out with other        ▸ Question five?                       │
│  questions.                  ▸ Question six?                        │
│                                                                     │
│  [Book a call →]                                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-100` (soft sand)
- Padding: 96px vertical (desktop), 64px vertical (mobile)

### Left column
- **Eyebrow:** `COMMON QUESTIONS`
- **Title:** Fraunces 40px weight 500. Placeholder: *"Questions we hear a lot."*
- **Subhead:** Inter 16px weight 400, `--color-sand-700`, max-width 380px. Placeholder: *"Don't see yours? The discovery call is where we answer everything else — 15 minutes, no pitch, no pressure."*
- **CTA:** `Book a call →` primary clay button, default size

### Right column — Accordion
Single-expand accordion (opening a new item collapses the previous one). Items:

1. **How much does this cost?** → Links to the pricing section or modal with the full pricing table from the business context doc. Plain answer first, then link.
2. **Do I have to sign a long-term contract?** → Answer: No on SEO, Ads, and Reputation Management — all month-to-month. The only long-term commitment is the Website subscription (12-month minimum) and that exists to make modern websites affordable through subsidized monthly pricing.
3. **What happens if the ads don't work?** → Answer: For Ads engagements, if ROAS drops below 2:1, you don't pay management fees. State the guarantee plainly.
4. **Who actually does the work?** → Answer: The founder, directly. No handoffs to account managers, no outsourcing to offshore production. Subcontractor support for design, content, and link building is vetted and managed by the founder.
5. **How long until I see results?** → Honest answer: Website launches in 2–4 weeks. Ads can start delivering leads within 1–2 weeks. SEO is a 3–6 month build. Reputation Management compounds over months.
6. **Do you work with businesses outside Southwest Florida?** → Answer: The focus is local SWFL service businesses because local expertise compounds. Open to discussion for nearby markets but the ideal client is in Lee, Collier, or Charlotte counties.

### Accordion styling
- Each item: 1.5px bottom border in `--color-sand-200`
- Question: Inter 17px weight 600, `--color-sand-950`, 20px vertical padding
- Chevron icon (16px) on the right, `--color-sand-600`, rotates 90° on open
- Answer: Inter 16px weight 400, `--color-sand-700`, line-height 1.65, 16px top padding, 20px bottom padding
- Open state: question color transitions to `--color-clay-600`, bottom border color to `--color-clay-200`
- Expand/collapse animation: 300ms `--ease-out-quart`

### Spec references
- Style guide §11.2 (Two-column layout)
- Style guide §10.4 (Interaction Animations)

---

## 13. Section 11 — Final CTA

### Purpose
The last chance to convert before the footer. Uses the dark warm brown emphasis (`--color-sand-900`) to mark this as the page's closing moment. One clear action, one reassurance, done.

### Layout
Full-width section, centered content, generous vertical space. Feels like a closing statement.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                                                                     │
│                    Large Fraunces Headline                          │
│                      (light cream on dark)                          │
│                                                                     │
│                Plainspoken one-line subhead                         │
│                                                                     │
│                  [Book your free consult →]                         │
│                                                                     │
│               Small reassurance line below CTA                      │
│                                                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-900` (dark warm brown)
- Padding: 128px vertical (desktop), 96px vertical (mobile)
- **This section flows directly into the Footer without a color break** — the page's closing moment is visually grounded by the combined dark band.

### Content elements

**1. Headline**
- Fraunces 48px weight 500 opsz 144 SOFT 50, color `--color-sand-50` (warm cream), centered, max-width 720px
- Placeholder: *"Let's make your phone ring more."*
- Alternates: *"Ready to stop leaving money on the table?"* / *"Your next best customer is already searching."*

**2. Subhead**
- Inter 18px weight 400, color `--color-sand-300`, centered, max-width 560px
- Placeholder: *"15-minute discovery call. No pitch, no pressure, no obligation. Just a plain conversation about what your business needs and whether we can help."*

**3. CTA button**
- Clay primary button, large size, `Book your free consult →`
- Links to Calendly
- Clay on dark warm brown is the strongest visual moment on the page — the terracotta pops against the deep brown in a way that cream can't compete with

**4. Reassurance line below CTA**
- Inter 14px weight 400, color `--color-sand-400`, centered, 16px below the button
- Placeholder: *"Month-to-month on SEO, Ads, and Reputation Management. No long-term lock-in. Cancel anytime."*

### Alternate content (phone-forward variation)
For visitors who prefer to call rather than book online, include a small secondary option below the reassurance line:
- Inter 14px `--color-sand-400`: `or call (239) XXX-XXXX` with the phone number as a clay-400 tel link
- Visible on mobile always; on desktop, optional

### Animation
- Headline Blur In on scroll-into-view, 900ms, `--ease-out-quart`
- Subhead and button Fade Up with 120ms delay

### Spec references
- Style guide §13.4 (Final CTA Section — Option B dark warm emphasis)

---

## 14. Section 12 — Footer

### Purpose
Provide complete contact information, secondary navigation, legal links, and the final visual anchor for the page. Also a last chance for phone numbers and location credibility.

### Layout
Four-column grid on desktop, stacked on mobile. Brand column wider than link columns.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [LOGO]             SERVICES         COMPANY         RESOURCES      │
│                                                                     │
│  Tagline and        · Websites       · About        · Blog         │
│  short description  · Local SEO      · Process      · Case Studies │
│  of what Linax      · Ads            · Contact      · FAQ          │
│  Digital does.      · Reputation     · Pricing      · Free Audit   │
│                                                                     │
│  Cape Coral, FL                                                     │
│  (239) XXX-XXXX                                                     │
│                                                                     │
│  ─────────────────────────────────────────────────────              │
│                                                                     │
│  © 2026 Linax Digital   Privacy   Terms   Made in Southwest Florida│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Background
- `--color-sand-900` (`#2A251D` dark warm brown)
- Padding: 96px top, 32px bottom

### Brand column (wider — approximately 2fr vs 1fr for link columns)
- **Logo:** Fraunces 24px weight 600, `--color-sand-50` text, optional `--color-clay-400` accent
- **Tagline / description:** Inter 15px weight 400, `--color-sand-300`, max-width 280px, line-height 1.65. Placeholder: *"Founder-led digital marketing for local service businesses in Southwest Florida. Websites, SEO, Ads, and Reputation Management — done by the person building it."*
- **Location and phone block:**
  - `Cape Coral, FL` — Inter 14px weight 500, `--color-sand-200`
  - `(239) XXX-XXXX` — Inter 14px weight 500, `--color-sand-200`, as a clay-400 hover tel link
  - `hello@linaxdigital.com` — Inter 14px weight 500, `--color-sand-200`, as a clay-400 hover mailto link

### Link columns (3 columns)

**Column header styling:**
- Inter 12px weight 600, UPPERCASE, letter-spacing 0.1em, `--color-sand-400`

**Link styling:**
- Inter 14px weight 400, `--color-sand-200`, 10px vertical gap between items
- Hover: `--color-clay-400` with the clay underline slide-in animation

**Column 1 — Services**
- Websites → `/services/websites`
- Local SEO → `/services/seo`
- Ads → `/services/ads`
- Reputation Management → `/services/reputation`
- Pricing → `/pricing`

**Column 2 — Company**
- About → `/about`
- How We Work → `/process`
- Contact → `/contact`
- Book a Call → Calendly link

**Column 3 — Resources**
- Free Digital Presence Audit → `/audit`
- Case Studies → `/case-studies`
- FAQ → `/faq`
- Blog → `/blog` (only if blog exists at launch; otherwise remove)

### Bottom bar
- 1px `--color-sand-800` divider above (barely visible)
- Three elements, flex row, space-between on desktop, stacked on mobile:
  - Left: `© 2026 Linax Digital. All rights reserved.` — Inter 13px `--color-sand-500`
  - Center: `Privacy` · `Terms` · `Accessibility` links — Inter 13px `--color-sand-500`, clay-400 hover
  - Right: `Made in Southwest Florida` — Inter 13px `--color-sand-500` with subtle italic for warmth

### Spec references
- Style guide §13.5 (Footer)
- Style guide §10.4 (Link underline animation)

---

## 15. Responsive Behavior Summary

| Breakpoint | Behavior |
|-----------|----------|
| **Mobile (< 640px)** | All multi-column layouts collapse to single column. Hero visual slot may be hidden to prioritize text-first loading. Navigation collapses to hamburger + logo + CTA. FAQ accordion stacks heading above items. Process steps stack vertically without arrows. Stat cards in 2×2 grid. Service cards stacked. Testimonials carousel or single-card display. Section padding reduces from 96px to 64px. Container gutter reduces from 32px to 20px. |
| **Tablet (640–1023px)** | Hero stays asymmetric or collapses to stack depending on content length. Service cards in 2-column grid. Stat cards in single row of 4. Process steps may begin horizontal layout. FAQ returns to two-column. Navigation may still be hamburger depending on logo + link count fit. |
| **Desktop (1024–1199px)** | Full layouts as specified. All columns at full width. Navigation full horizontal. 3-column and 4-column grids active. |
| **Wide (1200px+)** | Container max-width 1200px centers. Wide margins on either side. No layout changes from desktop — the page does not expand further. |

---

## 16. Content Dependencies

The following content must be written or collected before the homepage can launch:

### Copy
- Hero headline, subheadline, and eyebrow (final versions)
- Problem agitation narrative and pain point list (final versions)
- Service card descriptions for all four services (final versions)
- Process step descriptions (final versions)
- FAQ question-and-answer pairs (final versions)
- Final CTA headline and subhead (final versions)
- Footer tagline and description (final versions)

### Assets
- Final Linax Digital logo
- Hero visual — founder photo or approved alternative
- Local Proof section photograph
- Service icons (custom or from a curated icon library like Lucide or Phosphor)
- Avatar images for testimonials (once testimonials are collected)

### Data
- Real quantified results for the stat cards (or agreed fallback content)
- Real testimonials with client permission (or confirmed fallback content per §10)
- Final phone number for the footer and final CTA section
- Final email address for the footer

### Integrations
- Calendly embed URL locked in
- Go High Level form endpoint for the Free Digital Presence Audit lead capture
- Google Analytics 4 property ID
- Google Tag Manager container ID

### Writing samples (from business context doc)
- Founder voice samples to inform final copy pass — 2–3 paragraphs of the founder's own writing so AI agents writing copy can match tone

---

*Linax Digital Homepage Wireframe Spec v1.0*
*Pairs with `linax-digital-business-context.md` and `styleguide.md`*
*For internal development use*
