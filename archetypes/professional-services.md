# Archetype: Professional Services

## When to Use
Law firms, accounting firms, financial advisors, consulting firms, insurance brokers, wealth management, executive coaching, architecture firms, medical practices, HR/recruiting. Audience is sophisticated, risk-averse, and credential-conscious. Decision involves significant trust; the page must establish authority before asking for anything.

---

## Visual Tone
Light backgrounds. Expansive whitespace. Conservative color palette anchored by navy, deep green, or charcoal. Serif headings convey heritage and authority. Every design choice signals stability, credibility, and discretion. Nothing trendy.

---

## Typography Patterns

**Preferred pairings (Google Fonts):**

1. **Playfair Display** (headings) + **Source Serif 4** (body) — classic authority, legal/finance
2. **Cormorant Garamond** (headings) + **Lato** (body) — elegant, slightly lighter
3. **Libre Baskerville** (headings) + **Source Sans 3** (body) — accessible serif authority
4. **DM Serif Display** (headings) + **DM Sans** (body) — modern professional, consulting/advisory

**Type behavior:**
- Headings: weight 600–700 (serifs appear heavier visually), letter-spacing -0.01em, comfortable line-height 1.2–1.3
- Body: weight 400, line-height 1.7–1.8, generous paragraph spacing
- Callout stats: large serif numerals, muted secondary color
- Labels/nav: sans-serif (the body font or a neutral), uppercase, letter-spacing 0.08em, small size

---

## Color Palette Patterns

**Background stacks (light mode):**
- Page bg: `#ffffff` or `#fafaf8` (warm white)
- Subtle bg: `#f5f5f0` – `#f0ede8` (warm off-white)
- Surface: `#ffffff` with subtle border
- Border: `#e4e0d8` – `#d9d4c8`

**Primary accent options:**
- Deep navy: `#0f2044` / `#1a3a6e` (finance, law)
- Deep forest green: `#0d3d2d` / `#155e42` (wealth management, sustainability-adjacent)
- Charcoal: `#1c1c1e` / `#2d2d30` (consulting, executive)
- Burgundy/claret: `#6b1c2b` / `#8b2439` (boutique, legacy practices)

**Supporting accent:**
- Gold/champagne: `#c9a96e` / `#b8956a` — used sparingly for luxury signal
- Cream: `#f2ead8` — warm surface alternative

**Text stack:**
- Primary: `#1a1a1a` (near-black, warmer than pure black)
- Secondary: `#5a5a5a`
- Muted: `#9a9a9a`
- On-primary: `#ffffff`

**Sample complete palette — navy wealth management:**
```css
--color-bg: #fafaf8;
--color-bg-subtle: #f2efe9;
--color-surface: #ffffff;
--color-border: #e0dbd2;
--color-primary: #0f2044;
--color-primary-hover: #1a3a6e;
--color-secondary: #c9a96e;
--color-text: #1a1a1a;
--color-text-subtle: #5a5a5a;
--color-text-muted: #9a9a9a;
```

---

## Layout Patterns

- **Hero:** Centered with headline only + single CTA; or split with professional photography left
- **Credential bar:** Immediately below hero — "Trusted by", "Featured in", "Member of" with logos
- **Service areas:** 2 or 3 columns, icon + title + short paragraph; never more than 3 across
- **About/philosophy:** Split layout — editorial photo left, text right (or reverse)
- **Team:** Grid of headshots with name, credentials, specialization
- **Testimonials:** Large single quote with photo and full attribution; or 2-col with quote + outcome
- **Process:** Numbered vertical steps or horizontal timeline
- **CTA:** Consultation booking — understated, not high-pressure

**Whitespace philosophy:** Generous. Each section breathes. Padding-y values of 80–120px are standard. Paragraph max-width ~640px.

**No cluttered grids:** Prefer 2-column over 3-column where possible. Density signals lack of prestige.

---

## Component Conventions

- **Buttons:** Outlined or ghost on light backgrounds; filled on dark sections. Rectangular or very slightly rounded (4–6px). No pill shapes.
- **Cards:** Minimal borders; subtle shadow; clean white surface. Avoid card hover animations.
- **Section dividers:** Thin horizontal rules (1px, border color); or section separation purely through bg alternation
- **Quotes/testimonials:** Large decorative quotation mark in secondary color; serif quote text; full name and title required
- **Credentials:** Display prominently near the top — bar associations, certifications, years in practice, AUM managed

---

## Copy Tone

- Authoritative and composed. Long sentences are acceptable — this audience reads.
- Headlines lead with outcome or credential: "Protecting what you've built for 30 years"
- Body copy may be more formal; avoid slang entirely
- Avoids: "innovative", "cutting-edge", "disrupting", "passionate team"
- Uses: "established", "experienced", "proven track record", "our clients", specific credentials
- CTAs: low-pressure ("Schedule a consultation", "Request a meeting", "Speak with an advisor")
- Testimonials must include: full name, title, company/role, and preferably a quantified outcome

---

## Anti-Patterns

- Dark backgrounds (except for a single final CTA band)
- Neon or electric accent colors
- Geometric sans-serif headings
- Dense feature grids
- Price anchoring or urgency tactics ("Only 3 spots left!")
- Stock photos of diverse groups pointing at whiteboards
- Chatbot or "talk to us" widgets as primary CTA
- Horizontal scrolling or unusual navigation patterns

---

## Reference Examples (conceptual, not URLs)
- McKinsey.com — measured whitespace, serif/sans hybrid, credential-forward
- Cleary Gottlieb (law) — conservative layout, credential density, serif headings
- Bessemer Venture Partners — minimal, editorial, authority through restraint
- Wealthfront.com — clean professional, stats-forward, light and airy
