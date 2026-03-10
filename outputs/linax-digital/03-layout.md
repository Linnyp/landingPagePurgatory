# Linax Digital — Layout Blueprint (Agent 03 Output)

---

## Page-Level Decisions

- **Primary conversion goal:** Book a free discovery / audit call
- **Secondary conversion goal:** Email list signup via AI Readiness Checklist lead magnet
- **Audience sophistication:** Warm — visitors know they need better marketing and are AI-curious but not AI-literate; they require trust-building and objection handling before committing to a call, not an exhaustive education sequence.
- **Navigation type:** Sticky minimal
  - Nav items: Services | How It Works | Results | About | Contact
  - Primary nav CTA: Book a Free Call
- **Above-fold content:** Hero only — eyebrow label, headline, subhead, primary CTA + micro-copy, secondary text link, and hero visual (dashboard mockup). Social proof bar sits immediately below the fold as the first scroll reward.
- **Page length assessment:** Medium — 9 sections (excluding nav and footer). Rationale: warm audience needs proof and objection handling but does not require a long education funnel; 9 sections covers the full argument without padding.

---

## Section Order

| # | Section | Include | Layout Pattern | Visual Weight | Background | Notes |
|---|---------|---------|----------------|---------------|------------|-------|
| 1 | Navigation | Y | sticky minimal | low | dark-bg (Navy-800) | Logo left, nav links center, CTA button right; collapses to hamburger at md |
| 2 | Hero | Y | hero-split | high | dark-bg (Navy gradient) | Copy left, dashboard mockup right; primary CTA (Amber) + secondary text link below subhead |
| 3 | Social Proof Bar | Y | stat-bar | low | primary-bg (White) | 3 stats + logo strip; low visual weight keeps transition from dark hero smooth |
| 4 | Problem | Y | 3-col-cards | medium | subtle-bg (Cool white #F7F8FA) | Eyebrow + headline above 3 problem cards; establishes relevance and emotional resonance early |
| 5 | Services | Y | 6-col-grid | high | primary-bg (White) | 6 service cards in 3×2 grid; highest information density section — white bg gives breathing room |
| 6 | Results / Proof | Y | testimonial-3up | high | subtle-bg (Cool white #F7F8FA) | 3 client testimonials; placed after services so proof follows promise; mid-page CTA button below cards |
| 7 | How It Works | Y | steps-horizontal | medium | primary-bg (White) | 3 numbered steps in a row; process clarity addresses "past bad agency" objection |
| 8 | Pricing | Y | pricing-3col | medium | subtle-bg (Cool white #F7F8FA) | 3 plans (Foundation / Growth / Full-Stack); all "Contact for pricing" — removes price objection friction |
| 9 | FAQ | Y | faq-accordion | low | primary-bg (White) | 5 questions; handles remaining objections (ROI, trust, timing) just before close |
| 10 | Final CTA | Y | cta-centered | high | dark-bg (Navy gradient) | Urgency headline, primary CTA (Amber), secondary text link to lead magnet; mirrors hero dark treatment to bookend the page |
| 11 | Footer | Y | footer-standard | low | dark-bg (Navy-900) | Tagline, nav links, legal; no CTA — final CTA section above handles the close |

---

## Component Inventory

- `SiteNav` — Sticky minimal navigation bar with logo, center links, and amber CTA button that collapses to a hamburger menu on mobile.
- `HeroSection` — Split-layout hero with copy block on the left (eyebrow, headline, subhead, CTA group) and dashboard mockup visual on the right.
- `SocialProofBar` — Horizontal strip displaying three stats and a logo bar of current clients on a white background.
- `ProblemSection` — Section with eyebrow, headline, subhead, and three equal problem cards describing the core pain points.
- `ProblemCard` — Individual card component for a single problem item with icon, title, and description.
- `ServicesSection` — Section with eyebrow, headline, subhead, and a 3×2 grid of service feature cards.
- `ServiceCard` — Individual card component for a single service with icon, title, and short description.
- `ResultsSection` — Section with eyebrow, headline, three testimonial cards, and a mid-page secondary CTA button below the cards.
- `TestimonialCard` — Individual testimonial card with quote, client name, business name, and result highlight.
- `HowItWorksSection` — Section with eyebrow, headline, and three horizontally arranged numbered process steps.
- `ProcessStep` — Individual numbered step component with step number, title, and description.
- `PricingSection` — Section with eyebrow, headline, and three pricing tier cards in a horizontal row.
- `PricingCard` — Individual pricing card with plan name, feature list, and "Contact for Pricing" CTA button; middle card receives "Most Popular" badge.
- `FaqSection` — Section with headline and a list of accordion FAQ items.
- `FaqAccordion` — Interactive accordion component rendering all FAQ items with expand/collapse behavior; requires `"use client"`.
- `FaqItem` — Single accordion row with question trigger and collapsible answer panel.
- `FinalCtaSection` — Full-width dark centered CTA band with urgency headline, primary amber CTA button, and secondary text link to lead magnet.
- `SiteFooter` — Standard footer with tagline, navigation links, and legal copy on a Navy-900 background.

---

## Responsive Behavior Notes

**Navigation (SiteNav)**
- Desktop (lg+): Logo left, nav links centered, CTA button right — all inline.
- Tablet/Mobile (md and below): Logo left, hamburger icon right; nav links and CTA button drop into a full-width drawer/menu overlay on open.

**Hero (HeroSection — hero-split)**
- Desktop (lg+): 2-column split — copy 55% left, mockup visual 45% right, both vertically centered.
- Tablet (md): 2-column split persists but columns equalize to 50/50; mockup image scales down.
- Mobile (sm): Stacks vertically — copy block on top, mockup image below (max-height: 40vh, object-fit contain); CTA group remains prominent.

**Social Proof Bar (SocialProofBar — stat-bar)**
- Desktop: 3 stats inline with vertical dividers, logo strip below.
- Tablet (md): Stats remain inline; logos wrap to 2-per-row if needed.
- Mobile (sm): Stats stack vertically (1 per row); logos stack 2-per-row.

**Problem Section (3-col-cards)**
- Desktop: 3 columns equal width.
- Tablet (md): 3 columns compress; remains 3-col if space permits, else 2-col + 1 below.
- Mobile (sm): 1-col stack.

**Services Grid (6-col-grid)**
- Desktop (lg+): 3×2 grid (3 columns, 2 rows).
- Tablet (md): 2×3 grid (2 columns, 3 rows).
- Mobile (sm): 1-col stack (6 rows).

**Results / Testimonials (testimonial-3up)**
- Desktop: 3 columns side by side.
- Tablet (md): 2 columns; third card wraps to new row centered.
- Mobile (sm): 1-col stack.

**How It Works (steps-horizontal)**
- Desktop: 3 steps in a horizontal row with connecting line/arrow between steps.
- Tablet (md): 3 steps remain horizontal but connecting line hides if space is tight.
- Mobile (sm): Converts to vertical stack (steps-vertical behavior) with step numbers left-aligned.

**Pricing (pricing-3col)**
- Desktop: 3 columns side by side; center card (Growth) has elevated shadow and "Most Popular" badge.
- Tablet (md): 3 columns compress; middle card badge remains visible.
- Mobile (sm): 1-col stack; middle card renders first (top of stack) to preserve prominence.

**FAQ (faq-accordion)**
- All breakpoints: Single column full container width. No layout change needed.

**Final CTA (cta-centered)**
- All breakpoints: Single centered column. Text and button stack vertically; button full-width at sm.

**Footer (footer-standard)**
- Desktop: Tagline left, nav links center, legal right — or 2–3 column layout.
- Mobile (sm): Tagline top, nav links stack vertically, legal at bottom.

---

## Interaction Notes

**SiteNav**
- On scroll past 60px: nav background transitions from transparent to Navy-800 with a subtle box-shadow fade-in (CSS transition, 200ms ease).
- Hamburger toggle: opens/closes mobile drawer; requires `"use client"`.
- CTA button hover: amber darkens 8% + translateY(-1px).
- Nav links hover: underline slide-in from left (CSS pseudo-element).

**HeroSection**
- Primary CTA button hover: amber darkens 8%, translateY(-2px), shadow-lg.
- Secondary text link hover: underline appears.
- Hero visual (mockup): entrance animation — fade-up 400ms ease-out, 100ms delay after page load. Keep subtle.
- No autoplay video or looping animation on the mockup.

**ServiceCard / ProblemCard / PricingCard**
- Hover: translateY(-4px) + shadow-xl transition (200ms ease). Per visual rules.

**TestimonialCard**
- Hover: subtle shadow increase only (no translate — testimonials should feel stable/grounded).

**FaqAccordion**
- Clicking a question expands the answer panel with a smooth max-height transition (300ms ease).
- Only one item open at a time (accordion behavior).
- Chevron icon rotates 180° when open.
- Requires `"use client"`.

**Mid-page CTA (inside ResultsSection)**
- Same amber button style as hero CTA; hover behavior identical.
- This is the second instance of the primary CTA — appears after testimonials, the strongest proof point.

**FinalCtaSection**
- Primary CTA (amber): same hover as hero.
- Secondary text link (lead magnet): opens email capture modal or navigates to a dedicated opt-in — implementation detail left to Component Builder. Hover: underline.

**Animations (general)**
- Section entrance: fade-up (translateY 20px → 0, opacity 0 → 1) triggered by IntersectionObserver, 350ms ease-out, staggered 80ms per card in grid/card sections.
- Keep all motion subtle per brand principle "warmth through motion."
- Respect `prefers-reduced-motion`: all animations disabled if set.

**Forms**
- No inline form on this page. Conversion actions are button links (Book a Call → external calendar link, Checklist → modal or separate opt-in flow). No form interaction handling required within this component set.
