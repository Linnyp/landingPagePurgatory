# Archetype: Tech SaaS

## When to Use
B2B or B2C software products, developer tools, AI platforms, data/analytics tools, productivity apps. Audience is technically literate. Decision is often rational/ROI-driven with an emotional layer around productivity or status.

---

## Visual Tone
Dark backgrounds. High contrast. Dense, information-rich layouts. Neon or electric accents against near-black surfaces. Precision over warmth. Grid-forward. Motion is mechanical, not organic.

---

## Typography Patterns

**Preferred pairings (Google Fonts):**

1. **Space Grotesk** (headings) + **Inter** (body) — most common; technical confidence
2. **Geist** (headings + body) — minimal, system-adjacent, developer-native
3. **DM Mono** (headings, display only) + **Inter** (body) — terminal aesthetic
4. **Syne** (headings) + **DM Sans** (body) — modern AI/startup energy

**Type behavior:**
- Headings: weight 700–800, letter-spacing -0.02em to -0.04em, max-width 600–800px
- Body: weight 400–450, line-height 1.6–1.7, color at ~70% opacity against bg
- Small labels: font-mono, uppercase, letter-spacing 0.08–0.12em, muted color
- Numbers/stats: tabular-nums, weight 700–800, display size

---

## Color Palette Patterns

**Background stacks (dark mode):**
- Near-black bg: `#0a0a0f` or `#0d0d14` (slightly blue-tinted reads as "tech")
- Surface: `#111118` – `#18181f`
- Subtle surface: `#1a1a24` – `#1f1f2e`
- Border: `#ffffff14` – `#ffffff1f` (white at 8–12% opacity)

**Accent options:**
- Electric indigo: `#6366f1` / `#818cf8` (most popular)
- Cyan/teal: `#06b6d4` / `#22d3ee`
- Neon green: `#4ade80` / `#86efac` (developer/terminal aesthetic)
- Violet: `#8b5cf6` / `#a78bfa`
- Electric blue: `#3b82f6` / `#60a5fa`

**Text stack:**
- Primary: `#f8fafc` (near-white)
- Secondary: `#94a3b8` (slate-400)
- Muted: `#475569` (slate-600)
- On-primary: `#ffffff`

**Sample complete palette — indigo SaaS:**
```css
--color-bg: #0a0a0f;
--color-bg-subtle: #111118;
--color-surface: #16161e;
--color-border: rgba(255,255,255,0.08);
--color-primary: #6366f1;
--color-primary-hover: #4f46e5;
--color-text: #f1f5f9;
--color-text-subtle: #94a3b8;
--color-text-muted: #475569;
```

---

## Layout Patterns

- **Hero:** Split (copy left, visual right) or centered with product screenshot below fold
- **Social proof:** Logo bar immediately below hero (always above first scroll)
- **Features:** 2×3 grid of icon cards; or tabbed feature showcase
- **Proof:** Stats bar with large numbers; testimonials from recognizable companies
- **How it works:** Horizontal numbered steps with connector lines
- **Pricing:** Three-column table with plan differentiation; middle plan highlighted
- **CTA:** Full-bleed dark-to-accent gradient band at bottom

**Grid density:** Lean into it. 3-column and 4-column grids feel right for this archetype. Whitespace is used intentionally, not maximally.

**Horizontal rules / dividers:** Subtle 1px at border opacity, not solid black lines.

---

## Component Conventions

- **Buttons:** Filled primary with slight glow (`box-shadow: 0 0 20px color/30%`) on hover; or outlined ghost variant
- **Cards:** `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: 8–12px`; no heavy drop shadows
- **Badges/labels:** Small pill badges in muted accent color; font-mono, uppercase, small
- **Icons:** Line-style SVGs, 20–24px, accent color; avoid filled icons
- **Feature numbers:** Large display number (5xl–6xl), muted color, behind the card content

---

## Copy Tone

- Direct and precise. No fluff.
- Headlines make specific technical claims: "Process 10M rows in under 2 seconds"
- Body copy uses active voice, short sentences
- Avoids: "powerful", "seamless", "cutting-edge", "next-generation"
- Uses: numbers, technical specifics, before/after framing
- CTAs: action-first, short ("Start building", "Get API key", "Deploy now")
- Social proof: metrics, company names, specific outcomes

---

## Anti-Patterns

- Warm photography (lifestyle, smiling people) — use product UI, abstract data viz, or geometric illustration
- Script/serif fonts — feels mismatched
- Pastel or desaturated color schemes
- Heavy animations that slow perceived load
- More than 2 accent colors
- Pricing hidden or vague ("Contact sales" as primary CTA for low-tier plans)
- Long paragraphs in feature descriptions

---

## Reference Examples (conceptual, not URLs)
- Linear.app — product-screenshot hero, dark, precise typography, no fluff
- Vercel.com — dark minimal, stat-forward proof, clean grid
- Resend.com — developer-focused, mono type accents, code snippets as social proof
- Supabase.com — dark bg, green accent, dense feature grid, generous stats
