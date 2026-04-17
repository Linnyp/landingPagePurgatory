# Coastal Clay — Style Guide

### Linax Digital | v2.0

> A comprehensive design system for a warm, editorial, trustworthy digital marketing agency website. Built on the 60-30-10 rule with the Coastal Clay palette and a Fraunces + Inter type pairing. Designed to express the Everyman brand archetype and the Warm Professional design direction defined in `business-context.md`.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Borders & Radius](#5-borders--radius)
6. [Shadows & Elevation](#6-shadows--elevation)
7. [Buttons](#7-buttons)
8. [Cards & Components](#8-cards--components)
9. [Form Elements](#9-form-elements)
10. [Animation System](#10-animation-system)
11. [Grid & Layout](#11-grid--layout)
12. [Navigation](#12-navigation)
13. [Page Sections](#13-page-sections)
14. [Accessibility](#14-accessibility)
15. [CSS Custom Properties Reference](#15-css-custom-properties-reference)

---

## 1. Design Philosophy

The Linax Digital website communicates **warmth without amateurism** and **expertise without intimidation**. The design language exists to make local service business owners — who may be skeptical of agencies and unimpressed by tech-speak — feel like they are dealing with someone who is competent, trustworthy, and from here.

This is the visual expression of the **Everyman archetype**: one-of-us energy, plainspoken confidence, and the feeling of hiring a trusted craftsman rather than a slick vendor.

**Core Principles:**

- **Warmth through color.** A cream-and-clay palette reads as settled and grounded. It belongs to a craftsman, not a startup. Warmth is baked into every neutral — the "white" is never pure white, the "black" is never pure black, and every surface has a brown undertone that harmonizes with the terracotta accent.
- **Confidence through editorial calm.** Generous whitespace, warm serif headlines, and plainspoken body copy make the site feel more like a well-made independent publication than a marketing brochure. The layout breathes.
- **Restraint through single-accent discipline.** Terracotta is the only accent color and is used exclusively for calls to action, highlights, and moments that demand attention. Never as a background for large areas. Never as decoration. When terracotta shows up, it means something.
- **Credibility through craft.** Subtle motion, thoughtful typography, and authentic Southwest Florida photography signal "this was built by someone who cares." The visual equivalent of the Everyman archetype: quiet quality that doesn't need to shout.
- **Approachability through familiarity.** The site uses patterns visitors already know — clear hero, services grid, proof section, CTA. No experimental layouts, no scroll-jacking, no "figure out how this site works." The visitor should always know what to read next and what to do next.

**Visual tone:** Warm, editorial, confident, neighborly. Think a well-designed independent magazine, a craftsman's catalog, or a thoughtful professional-services firm. **Not** a tech startup, **not** a corporate enterprise, **not** a template agency.

**Reference sites** (confirmed aesthetic direction): [practicepromotions.net](https://practicepromotions.net/), [futuremarketing.com.br](https://www.futuremarketing.com.br/), [lumos-marketing.com](https://www.lumos-marketing.com/).

---

## 2. Color System

### 2.1 The 60-30-10 Rule

| Ratio   | Role      | Color                     | Usage                                             |
| ------- | --------- | ------------------------- | ------------------------------------------------- |
| **60%** | Dominant  | `#FBF8F3` Warm Cream      | Page backgrounds, surfaces, whitespace            |
| **30%** | Secondary | `#1F1B16` Warm Near-Black | Headings, body text, dark elements, footer        |
| **10%** | Accent    | `#C2552D` Terracotta      | CTAs, highlights, active states, key interactions |

Unlike palettes built on cool navy, Coastal Clay does **not** rely on dark structural sections to create rhythm. Instead, the page stays warm and light throughout, with section-to-section rhythm created by alternating cream and soft sand surfaces. Dark warm brown is reserved almost exclusively for the footer and one optional emphasis section.

### 2.2 Sand Scale (Structural Neutrals)

The sand scale carries the entire structural backbone of the design — backgrounds, surfaces, borders, dividers, and all text colors. Every stop has a warm brown undertone. This scale replaces what would be both the "navy" and "gray" scales in a cool-palette system.

| Token              | Hex       | Usage                                                                                 |
| ------------------ | --------- | ------------------------------------------------------------------------------------- |
| `--color-sand-950` | `#1F1B16` | **Primary text.** Warm near-black. Headings, body text on light backgrounds.          |
| `--color-sand-900` | `#2A251D` | Footer background. Strong headings alternative. Dark emphasis sections.               |
| `--color-sand-800` | `#3E372D` | Very strong body text. Alternative heading color for lower hierarchy.                 |
| `--color-sand-700` | `#5C5449` | **Secondary text.** Body copy on cream backgrounds where sand-950 would be too heavy. |
| `--color-sand-600` | `#78705F` | Muted text, captions, support copy, metadata.                                         |
| `--color-sand-500` | `#8B8171` | Placeholders, disabled text, very light captions.                                     |
| `--color-sand-400` | `#B3A991` | Muted borders, inactive elements, decorative dividers.                                |
| `--color-sand-300` | `#D4C7A9` | Default borders on inputs, dividers between sections.                                 |
| `--color-sand-200` | `#E5DCC9` | Subtle borders on cards, light dividers, inactive card borders.                       |
| `--color-sand-100` | `#F3EEE4` | **Alternating section surface** (soft sand). Card hover backgrounds.                  |
| `--color-sand-50`  | `#FBF8F3` | **Primary page background** (warm cream). The canvas.                                 |
| `--color-sand-25`  | `#FFFFFF` | Pure white. Used sparingly for surface emphasis — never as the default background.    |

### 2.3 Clay Scale (Terracotta — Primary Brand + Accent)

In Coastal Clay, the clay scale serves both as the primary brand color **and** the action accent. Unlike palettes that separate brand color from accent color, clay does both jobs because the design never uses dark structural sections that would need a contrasting accent. This simplifies the system to a single warm accent used with discipline.

| Token              | Hex       | Usage                                                                                                                                  |
| ------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `--color-clay-900` | `#4A1B0C` | Darkest. High-contrast text on clay-50 or clay-100 backgrounds.                                                                        |
| `--color-clay-800` | `#6B2A14` | Strong text on clay-light backgrounds.                                                                                                 |
| `--color-clay-700` | `#8A3820` | Pressed state for primary buttons.                                                                                                     |
| `--color-clay-600` | `#A3431F` | **Hover state** for primary buttons. Strong text accent.                                                                               |
| `--color-clay-500` | `#C2552D` | **PRIMARY action color.** CTA buttons, key highlights, active indicators, eyebrow labels, link hover, anywhere that demands attention. |
| `--color-clay-400` | `#D47548` | Eyebrow text alternative on dark backgrounds, secondary clay accent.                                                                   |
| `--color-clay-300` | `#E39870` | Testimonial quote marks, decorative accents, soft highlights.                                                                          |
| `--color-clay-200` | `#EFBA9A` | Tag backgrounds with darker text, subtle accents.                                                                                      |
| `--color-clay-100` | `#F7DAC5` | Badge backgrounds, soft callout backgrounds.                                                                                           |
| `--color-clay-50`  | `#FBECE0` | Callout and note backgrounds, subtle warmth highlights, icon container default.                                                        |

### 2.4 Semantic Colors

Semantic colors are tuned for warmth so they harmonize with the rest of the palette. No cold or harsh colors. Error is a warm muted red, warning is a deep honey (different enough from clay to avoid confusion), success is a muted sage that feels grounded and natural, and info is a warm slate.

| Token             | Hex       | Light Variant                    | Usage                                                            |
| ----------------- | --------- | -------------------------------- | ---------------------------------------------------------------- |
| `--color-success` | `#4A7C59` | `--color-success-light: #E7EFE9` | Positive confirmations, growth stats, success states             |
| `--color-error`   | `#B94A3F` | `--color-error-light: #F5E2DF`   | Errors, form validation, destructive actions                     |
| `--color-warning` | `#B88419` | `--color-warning-light: #F7EAD0` | Warnings, caution states (deep honey to stay distinct from clay) |
| `--color-info`    | `#4A6B7C` | `--color-info-light: #E0E7EB`    | Informational callouts, tooltips, neutral notices                |

### 2.5 Background Treatments

**Page background (default):**

```css
background: var(--color-sand-50); /* #FBF8F3 warm cream */
```

**Alternate section backgrounds:**

- `var(--color-sand-100)` (`#F3EEE4` soft sand) — primary alternating section
- `var(--color-sand-25)` (`#FFFFFF` pure white) — occasional emphasis section, used sparingly
- `var(--color-clay-50)` (`#FBECE0` soft clay) — reserved for one special emphasis section on the page (e.g., testimonials or final CTA) — use no more than once per page

**Dark section (footer + optional emphasis):**

```css
background: var(--color-sand-900); /* #2A251D warm dark brown */
```

The site does **not** use dark hero backgrounds. The hero lives in cream. Dark warm brown appears almost exclusively in the footer.

**Hero warmth treatment (optional):**
A very subtle radial warmth can be layered on the cream hero background to add depth without darkening the section:

```css
background:
  radial-gradient(
    ellipse 80% 50% at 50% 0%,
    rgba(194, 85, 45, 0.04) 0%,
    transparent 60%
  ),
  var(--color-sand-50);
```

This reads as "lit from above" without announcing itself. If you can see the gradient clearly, it's too strong.

---

## 3. Typography

### 3.1 Font Stack

| Role                   | Font     | Weights            | Fallback                  |
| ---------------------- | -------- | ------------------ | ------------------------- |
| **Display / Headings** | Fraunces | 400, 500, 600      | Georgia, serif            |
| **Body / UI**          | Inter    | 400, 500, 600, 700 | -apple-system, sans-serif |

**Two fonts total.** Coastal Clay deliberately simplifies from the typical three-font system. No monospace font, no third display face. Restraint reinforces the editorial, craftsman sensibility.

**Why Fraunces:** Fraunces is a variable serif with optical sizing (the `opsz` axis) that adjusts letterforms for different sizes — generous and warm at display sizes, tighter and more workmanlike at body sizes. Its wedge-shaped serifs and subtle soft curves read as humanist, literate, and trustworthy. It's the visual equivalent of a well-made catalog or independent magazine. Used for all headings and display elements.

**Why Inter:** Inter is the gold-standard workhorse sans for UI. Highly readable at any size, designed specifically for screens, excellent weight range, and subtly humanist enough to pair warmly with Fraunces. Used for all body text, UI elements, buttons, forms, and eyebrows.

**Why no mono:** Mono fonts carry a subtle "developer" or "technical" association that pulls against the Everyman archetype. Eyebrow labels use Inter uppercase with wide tracking instead — equally crafted, more consistent with the Warm Professional voice.

### 3.2 Google Fonts Import

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap");
```

This loads Fraunces with optical sizing across the full `opsz` range (9–144), weights 400/500/600 in both roman and italic, plus Inter in weights 400/500/600/700. Italic Fraunces is enabled because it's genuinely beautiful and will be used for testimonial quotes and occasional emphasis.

### 3.3 Type Scale

| Element            | Size               | Weight | Font              | `opsz` | Letter Spacing | Line Height | Color                                           |
| ------------------ | ------------------ | ------ | ----------------- | ------ | -------------- | ----------- | ----------------------------------------------- |
| Hero / H1          | 56px (`3.5rem`)    | 500    | Fraunces          | 144    | -0.02em        | 1.1         | `--color-sand-950`                              |
| H2 (Section Title) | 40px (`2.5rem`)    | 500    | Fraunces          | 144    | -0.02em        | 1.15        | `--color-sand-950`                              |
| H3 (Subsection)    | 30px (`1.875rem`)  | 500    | Fraunces          | 96     | -0.01em        | 1.2         | `--color-sand-950`                              |
| H4 (Card Title)    | 24px (`1.5rem`)    | 500    | Fraunces          | 48     | 0              | 1.3         | `--color-sand-950`                              |
| H5 (Small Heading) | 20px (`1.25rem`)   | 600    | Inter             | —      | 0              | 1.35        | `--color-sand-900`                              |
| Body Large         | 18px (`1.125rem`)  | 400    | Inter             | —      | 0              | 1.65        | `--color-sand-700`                              |
| Body               | 16px (`1rem`)      | 400    | Inter             | —      | 0              | 1.65        | `--color-sand-700`                              |
| Body Small         | 14px (`0.875rem`)  | 400    | Inter             | —      | 0              | 1.6         | `--color-sand-600`                              |
| Caption / XS       | 12px (`0.75rem`)   | 400    | Inter             | —      | 0              | 1.5         | `--color-sand-500`                              |
| Eyebrow / Overline | 12px (`0.75rem`)   | 600    | Inter (UPPERCASE) | —      | 0.1em          | 1.2         | `--color-clay-500`                              |
| Stat Number        | 64px (`4rem`)      | 500    | Fraunces          | 144    | -0.025em       | 1.0         | `--color-sand-950` (unit in `--color-clay-500`) |
| Nav Link           | 15px (`0.9375rem`) | 500    | Inter             | —      | 0              | 1.0         | `--color-sand-700`                              |
| Button Text        | 15px (`0.9375rem`) | 600    | Inter             | —      | 0              | 1.0         | Varies by variant                               |

**Applying `opsz` in CSS:**

```css
h1 {
  font-family: "Fraunces", serif;
  font-variation-settings:
    "opsz" 144,
    "SOFT" 50;
  font-weight: 500;
}
```

The `SOFT` axis at 50 slightly rounds Fraunces's terminals for extra warmth — useful at display sizes to reinforce the approachable feel. `SOFT` 0 is the crisper default; `SOFT` 100 is maximally soft. Use `SOFT` 50 for hero and H1/H2 only.

### 3.4 Typography Rules

- **Headings always use Fraunces.** Never Inter for headings above H4. H5 uses Inter because at 20px/semibold, Inter communicates UI-level information more clearly than a serif.
- **Body text always uses Inter.** Never Fraunces for paragraphs. Fraunces at body sizes loses its warmth and becomes harder to read in long form.
- **Fraunces weight 500 is the default.** Weight 700 and 800 make Fraunces feel heavy and corporate, which fights the editorial warmth. Weight 500 is the sweet spot. Weight 600 is acceptable for emphasis only.
- **Italic Fraunces is beautiful and should be used.** Reserve it for testimonial quotes, inline emphasis on key phrases in the hero headline, and occasional poetic moments. Don't overuse.
- **Eyebrow labels** are Inter 12px weight 600, UPPERCASE, letter-spaced at 0.1em, colored `--color-clay-500`. Example: `"WEBSITE DESIGN"` above a section title. They give each section a crisp opening note.
- **Stat numbers** are Fraunces 64px weight 500 at display opsz. The unit or symbol (%, +, etc.) is colored `--color-clay-500` while the number stays in `--color-sand-950`.
- **Maximum body line length:** 65–75 characters (~640px container). Longer lines reduce readability.
- **Never use all-caps for headings.** Uppercase is reserved exclusively for eyebrow labels and small badges.
- **Inline emphasis:** Use italic Fraunces for key phrases in Fraunces headlines. Use Inter weight 600 for inline emphasis in Inter body text. Never use italic for body text except quotes.
- **Never mix bold and italic in the same emphasis moment.** Pick one.

### 3.5 Text Color Rules

| Context                                    | Color Token                    |
| ------------------------------------------ | ------------------------------ |
| Primary text on cream (sand-50/100)        | `--color-sand-950` (`#1F1B16`) |
| Secondary text on cream                    | `--color-sand-700` (`#5C5449`) |
| Muted / caption text on cream              | `--color-sand-600` (`#78705F`) |
| Placeholders / disabled on cream           | `--color-sand-500` (`#8B8171`) |
| Headings on cream                          | `--color-sand-950` (`#1F1B16`) |
| Primary text on dark warm brown (sand-900) | `--color-sand-50` (`#FBF8F3`)  |
| Secondary text on dark warm brown          | `--color-sand-300` (`#D4C7A9`) |
| Muted text on dark warm brown              | `--color-sand-400` (`#B3A991`) |
| Link (default)                             | `--color-clay-500` (`#C2552D`) |
| Link (hover)                               | `--color-clay-600` (`#A3431F`) |
| Link on dark warm brown                    | `--color-clay-400` (`#D47548`) |
| Eyebrow label                              | `--color-clay-500` (`#C2552D`) |

---

## 4. Spacing System

Based on an **8px base grid**. The spacing scale favors generosity — editorial calm depends on breathing room, and cramped layouts kill the Warm Professional feel immediately.

| Token        | Value   | Pixels | Usage                                                       |
| ------------ | ------- | ------ | ----------------------------------------------------------- |
| `--space-1`  | 0.25rem | 4px    | Tight inline gaps, icon-to-text micro gaps                  |
| `--space-2`  | 0.5rem  | 8px    | Icon gaps, tag padding, badge spacing                       |
| `--space-3`  | 0.75rem | 12px   | Compact padding, tight form element internal gaps           |
| `--space-4`  | 1rem    | 16px   | Default element spacing, minimum grid gap                   |
| `--space-5`  | 1.25rem | 20px   | Form group spacing                                          |
| `--space-6`  | 1.5rem  | 24px   | Card-to-card grid gaps, card internal padding (small cards) |
| `--space-8`  | 2rem    | 32px   | Card internal padding (standard), content block spacing     |
| `--space-10` | 2.5rem  | 40px   | Between content blocks within a section                     |
| `--space-12` | 3rem    | 48px   | Between major content blocks, large card padding            |
| `--space-16` | 4rem    | 64px   | Minimum section separator                                   |
| `--space-20` | 5rem    | 80px   | Standard mobile section padding                             |
| `--space-24` | 6rem    | 96px   | Standard desktop section padding                            |
| `--space-32` | 8rem    | 128px  | Large section padding, hero vertical padding                |
| `--space-40` | 10rem   | 160px  | Maximum hero top padding on large screens                   |

### Spacing Application Rules

- **Between homepage sections:** `--space-24` to `--space-32` (96–128px) on desktop, `--space-20` to `--space-24` (80–96px) on mobile. Editorial calm depends on this. Less than 80px and the site reads as cramped.
- **Between content blocks within a section:** `--space-10` to `--space-12` (40–48px).
- **Between elements within a block** (e.g., eyebrow → heading → subhead → content): `--space-4` to `--space-6` (16–24px).
- **Card internal padding:** `--space-8` (32px) for standard cards, `--space-12` (48px) for testimonial and feature cards.
- **Grid gaps (card grids):** `--space-6` to `--space-8` (24–32px). Wider gaps than Authority Navy because Warm Professional wants more breathing room per card.
- **Form group spacing** (label → input, input → next group): `--space-5` (20px).
- **Container gutter** (page edge padding): 32px on desktop, 20px on mobile (slightly more generous than a typical 24/16 split to reinforce the editorial feel).

---

## 5. Borders & Radius

### 5.1 Border Radius Scale

| Token           | Value  | Usage                                                             |
| --------------- | ------ | ----------------------------------------------------------------- |
| `--radius-sm`   | 6px    | Inputs, tags, small badges, inline code blocks                    |
| `--radius-md`   | 10px   | Buttons, small cards, icon containers, tooltips                   |
| `--radius-lg`   | 16px   | Cards, modals, dropdowns, testimonial cards                       |
| `--radius-xl`   | 24px   | Hero imagery, feature image containers, full-width content blocks |
| `--radius-full` | 9999px | Pill badges, avatar images, tag chips                             |

### 5.2 Border Rules

- **Card borders:** 1px solid `--color-sand-200` (`#E5DCC9`). Warm and subtle, barely visible against the cream background — the card defines itself through shadow and padding more than through border.
- **Input borders (default):** 1.5px solid `--color-sand-300` (`#D4C7A9`).
- **Input borders (hover):** 1.5px solid `--color-sand-400` (`#B3A991`).
- **Input borders (focus):** 1.5px solid `--color-clay-500` (`#C2552D`) + 3px outer ring of `--color-clay-50` (`#FBECE0`). The focus ring uses clay, not sand, because form focus is an action moment and actions are clay.
- **Dividers / separators:** 1px solid `--color-sand-200`.
- **Accent borders (featured card top):** 3px solid `--color-clay-500` on the top edge of featured cards or recommended service tiers.
- **Section dividers:** Avoid hard dividers between sections. Use color rhythm (alternating sand-50 and sand-100) to separate sections instead of lines. Dividers are visual noise the Warm Professional direction wants to minimize.

---

## 6. Shadows & Elevation

All shadows use a **warm brown base** (`rgba(31, 27, 22, ...)`) rather than pure black or navy. This matches the sand palette and keeps the overall feel grounded and warm. Shadows are softer and less dramatic than Authority Navy — Warm Professional wants cards to feel gently elevated, not theatrically lifted.

| Token           | Value                                                                             | Usage                                                        |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `--shadow-xs`   | `0 1px 2px rgba(31, 27, 22, 0.04)`                                                | Minimal lift — tags, badges                                  |
| `--shadow-sm`   | `0 1px 3px rgba(31, 27, 22, 0.05), 0 1px 2px rgba(31, 27, 22, 0.03)`              | Cards at rest, inputs                                        |
| `--shadow-md`   | `0 4px 8px -2px rgba(31, 27, 22, 0.06), 0 2px 4px -2px rgba(31, 27, 22, 0.04)`    | Dropdowns, popovers, sticky nav                              |
| `--shadow-lg`   | `0 12px 20px -4px rgba(31, 27, 22, 0.08), 0 4px 8px -4px rgba(31, 27, 22, 0.04)`  | Cards on hover, modal at rest                                |
| `--shadow-xl`   | `0 24px 32px -8px rgba(31, 27, 22, 0.10), 0 8px 12px -4px rgba(31, 27, 22, 0.04)` | Cards on hover (elevated), featured elements                 |
| `--shadow-glow` | `0 0 24px rgba(194, 85, 45, 0.18)`                                                | Primary CTA button hover **only** — soft clay glow           |
| `--shadow-clay` | `0 4px 14px rgba(194, 85, 45, 0.20)`                                              | Clay elements on cream backgrounds (primary buttons at rest) |

### Elevation Interaction Rules

- **Cards at rest:** `--shadow-sm`
- **Cards on hover:** Transition to `--shadow-xl` + `translateY(-4px)` — soft lift, warm brown glow beneath the card
- **Inputs at rest:** `--shadow-xs` (or none — often cards define themselves through border + padding alone)
- **Primary (clay) button at rest:** `--shadow-clay`
- **Primary button hover:** `--shadow-glow` + `translateY(-2px)`
- **Secondary button hover:** Deepened `--shadow-md` + `translateY(-2px)`
- **Sticky navigation:** Transparent at top, `--shadow-sm` when scrolled past hero

---

## 7. Buttons

### 7.1 Button Variants

**Primary (Clay) — Reserved for the main CTA**

```css
.btn-primary {
  background: var(--color-clay-500); /* #C2552D */
  color: var(--color-sand-50); /* #FBF8F3 warm cream text */
  font-family: var(--font-body); /* Inter */
  font-weight: 600;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: var(--radius-md); /* 10px */
  border: none;
  box-shadow: var(--shadow-clay);
  transition: all 300ms var(--ease-out-quart);
}
.btn-primary:hover {
  background: var(--color-clay-600); /* #A3431F */
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}
.btn-primary:active {
  background: var(--color-clay-700); /* #8A3820 */
  transform: translateY(0);
}
```

**Button text color uses `--color-sand-50` (warm cream), not pure white.** This is a small but important detail — warm cream on terracotta reads as more harmonious than stark white, and it pushes contrast slightly higher because it's not quite as bright as pure white.

Example text: `Book a free consult →` / `Get your free audit →` / `Start here →`

**Secondary (Sand Outline) — Supporting actions**

```css
.btn-secondary {
  background: transparent;
  color: var(--color-sand-950);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  padding: 14px 28px;
  border: 1.5px solid var(--color-sand-400); /* #B3A991 */
  border-radius: var(--radius-md);
  transition: all 300ms var(--ease-out-quart);
}
.btn-secondary:hover {
  border-color: var(--color-sand-950);
  background: var(--color-sand-100); /* #F3EEE4 soft sand */
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

Example text: `See our work` / `How we work` / `Read more`

**Outline Clay — Alternate CTA for cream-on-cream sections**

```css
.btn-outline-clay {
  background: transparent;
  color: var(--color-clay-600);
  border: 1.5px solid var(--color-clay-300);
  /* All other properties match secondary */
}
.btn-outline-clay:hover {
  border-color: var(--color-clay-500);
  background: var(--color-clay-50);
  color: var(--color-clay-700);
}
```

**Ghost — Navigation, minimal inline actions**

```css
.btn-ghost {
  background: transparent;
  color: var(--color-sand-700);
  padding: 14px 16px;
  border: none;
}
.btn-ghost:hover {
  color: var(--color-sand-950);
  background: var(--color-sand-100);
}
```

### 7.2 Button Sizes

| Size    | Padding   | Font Size | Radius        | Usage                                               |
| ------- | --------- | --------- | ------------- | --------------------------------------------------- |
| Small   | 10px 20px | 13px      | `--radius-md` | Inline actions, compact UI, secondary CTAs in cards |
| Default | 14px 28px | 15px      | `--radius-md` | Standard buttons throughout the site                |
| Large   | 18px 36px | 16px      | `--radius-lg` | Hero CTAs, full-width section CTAs, booking page    |

### 7.3 Button Rules

- **Only ONE clay primary button per viewport.** At any scroll position, there should be exactly one main action. Don't compete with yourself.
- **Arrow (→) is added to primary CTAs only.** It signals forward momentum. Example: `Book a free consult →`. The arrow is an inline character in Inter, not an icon.
- **Never stack two primary buttons side-by-side.** Always pair: primary + secondary, primary + ghost, or primary alone.
- **The Y-axis lift on hover** (`translateY(-2px)` + deeper shadow) creates a subtle tactile feel without being cartoonish. This is the only "delight" motion buttons use.
- **Button text always uses Inter weight 600.** Fraunces is never used in buttons — it loses its warmth at button sizes and reads as decorative rather than functional.
- **No gradient overlays on buttons.** Authority Navy used a subtle inner gradient; Coastal Clay omits it because the flat warm color is the point. The button should read as confidently flat, not chrome-y.

---

## 8. Cards & Components

### 8.1 Service Cards

**Structure:** Icon container → Title (H4 in Fraunces) → Description (Body in Inter) → Optional link

```css
.service-card {
  background: var(--color-sand-25); /* pure white for crispness */
  border: 1px solid var(--color-sand-200); /* #E5DCC9 warm beige */
  border-radius: var(--radius-lg); /* 16px */
  padding: var(--space-8); /* 32px */
  transition: all 300ms var(--ease-out-quart);
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-sand-300);
}
```

**Icon Container:**

- Size: 48x48px
- Background: `--color-clay-50` (`#FBECE0`)
- Icon color: `--color-clay-600` (`#A3431F`)
- Radius: `--radius-md` (10px)
- On card hover: background transitions to `--color-clay-500`, icon color to `--color-sand-50` (warm cream), with `scale(1.08)`. This "bloom" of warm clay under hover creates the delight moment.

**Card Title:** Fraunces 24px weight 500 opsz 48, color `--color-sand-950`.

**Card Description:** Inter 15px weight 400, color `--color-sand-700`, line-height 1.6. Maximum 3 lines before truncation or "read more" link.

**Card link:** Inter 14px weight 600, color `--color-clay-600`, with an arrow. On hover: underline slides in from left (see §10.4).

**Featured Variant (Accent Top):**

- Add `border-top: 3px solid var(--color-clay-500)` to highlight featured or recommended services.
- On hover, the top border transitions to `--color-clay-600` and thickens subtly.

### 8.2 Testimonial Cards

```css
.testimonial-card {
  background: var(--color-sand-25); /* white */
  border: 1px solid var(--color-sand-200);
  border-radius: var(--radius-lg);
  padding: var(--space-12); /* 48px — more generous than service cards */
}
```

**Quote Mark:** Large opening quotation mark (`"`) in `--color-clay-300` (`#E39870`), font-family Fraunces, font-size 64px, weight 500, italic, positioned top-left with negative margin so it partially overlaps the card edge.

**Quote Text:** Fraunces 18px weight 400 **italic**, color `--color-sand-800`, line-height 1.6. Italic Fraunces is the most expressive typographic moment on the entire site — let it breathe.

**Author Block:** Avatar (48px circle, sand-100 background with sand-950 initials in Fraunces weight 600) + Name (Inter 15px weight 600, color sand-950) + Role/Company (Inter 13px weight 400, color sand-600).

**Optional:** 5-star rating row in clay-500 stars above the quote.

### 8.3 Process Steps

Four-step horizontal layout. Example: Discovery → Audit → Build → Grow.

- **Step number container:** 44px circle, `--color-sand-950` background, `--color-sand-50` text, Fraunces 20px weight 600.
- **Final step:** `--color-clay-500` background instead of sand-950 (signals the payoff moment).
- **Arrow connectors:** `→` character in `--color-sand-400` between steps, Inter 24px.
- **Step title:** Fraunces 20px weight 500, color sand-950.
- **Step description:** Inter 14px weight 400, color sand-600.
- **Animation:** On scroll-reveal, each step fades up with 100ms staggered delay between each.

### 8.4 Trust Badges

Horizontal row of badges, each containing: small icon + text label.

- **Google rating badge:** `--color-clay-50` background, `--color-clay-700` text and star icon
- **Years in business:** `--color-sand-100` background, `--color-sand-900` text
- **Businesses served:** `--color-success-light` background, `--color-success` text
- **Location badge:** `--color-info-light` background, `--color-info` text

Each badge: 32px height, pill-shaped (`--radius-full`), Inter 13px weight 600, 12px horizontal padding.

### 8.5 Stat / Metric Cards

For displaying results like "+340% leads" or "50+ businesses."

- **Number:** Fraunces 64px weight 500 opsz 144, color `--color-sand-950`, letter-spacing -0.025em.
- **Unit / symbol** (%, +, ×, etc.): Same size but color `--color-clay-500` — the color shift gives the number visual pop without requiring decoration.
- **Label:** Inter 14px weight 500, color `--color-sand-600`, below the number with 12px margin.
- **Animation:** Counter animation counts up from 0 on scroll-into-view (1.5–2 seconds, `--ease-out-expo`).

Example:

```
340%        ← Fraunces 64px, "340" in sand-950, "%" in clay-500
more leads  ← Inter 14px, sand-600
```

---

## 9. Form Elements

### 9.1 Text Inputs

```css
.form-input {
  width: 100%;
  font-family: var(--font-body); /* Inter */
  font-size: 16px;
  font-weight: 400;
  color: var(--color-sand-900);
  padding: 14px 16px;
  border: 1.5px solid var(--color-sand-300); /* #D4C7A9 */
  border-radius: var(--radius-md); /* 10px */
  background: var(--color-sand-25); /* white */
  outline: none;
  transition: all 150ms ease;
}
.form-input::placeholder {
  color: var(--color-sand-500); /* #8B8171 */
}
.form-input:hover {
  border-color: var(--color-sand-400); /* #B3A991 */
}
.form-input:focus {
  border-color: var(--color-clay-500); /* #C2552D */
  box-shadow: 0 0 0 3px var(--color-clay-50); /* #FBECE0 */
}
.form-input:disabled {
  background: var(--color-sand-100);
  color: var(--color-sand-500);
  cursor: not-allowed;
}
```

**Why clay focus rings, not sand:** Form focus is an action moment. Actions are clay. This reinforces the visual language where "something is happening / something needs your attention" is always warm terracotta.

### 9.2 Form Labels

```css
.form-label {
  font-family: var(--font-body); /* Inter */
  font-size: 14px;
  font-weight: 600;
  color: var(--color-sand-900);
  margin-bottom: 8px;
  display: block;
}
```

Labels use Inter, not Fraunces — at label sizes Fraunces becomes decorative rather than functional, and forms need functional clarity.

### 9.3 Form Layout Rules

- **Maximum 3–4 fields** on any lead capture form. Name, email, phone, business type. Every additional field reduces completions by roughly 10%.
- **Multi-step forms** for longer data collection. Step 1: name + email. Step 2: business details. Step 3: booking. Show progress indicator: `Step 1 of 3`.
- **Submit button:** Always the primary (clay) button, full-width, large size on mobile and default size on desktop.
- **Reassurance text** below the submit button in Inter 13px color `--color-sand-500`: _"Free 15-minute call. No pitch, no pressure."_ Reassurance should be plainspoken Everyman voice.
- **Focus state:** Clay border + 3px clay-50 ring. Subtle but accessible. Never remove focus indicators.
- **Error state:** Border color `--color-error`, 3px ring of `--color-error-light`. Error message below input in `--color-error` Inter 13px.

---

## 10. Animation System

### 10.1 Easing Curves

| Token              | Value                               | Usage                                                                                               |
| ------------------ | ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| `--ease-out-expo`  | `cubic-bezier(0.16, 1, 0.3, 1)`     | **Primary easing.** Scroll-triggered reveals, section entrances. Fast start, graceful deceleration. |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)`     | Hover transitions, card lifts, button feedback. Slightly less dramatic than expo.                   |
| `--ease-in-out`    | `cubic-bezier(0.45, 0, 0.55, 1)`    | Looping animations, state changes, continuous motion.                                               |
| `--ease-spring`    | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful overshoot. Use sparingly — tooltips, toggles, small delight moments.                        |

### 10.2 Duration Scale

| Token               | Value | Usage                                                       |
| ------------------- | ----- | ----------------------------------------------------------- |
| `--duration-fast`   | 150ms | Hover color changes, focus states, instant feedback         |
| `--duration-normal` | 300ms | Card hover lifts, button state changes, dropdown open/close |
| `--duration-slow`   | 500ms | Individual element reveals, icon morphs                     |
| `--duration-slower` | 700ms | Section reveals, staggered group animations                 |
| `--duration-reveal` | 900ms | Hero text entrance, primary content reveals                 |

### 10.3 Reveal Animations

**Fade Up (Primary Reveal) — Used for all section content on scroll-into-view:**

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Duration: 700–900ms | Easing: var(--ease-out-expo) */
```

**Scale In — Icons, badges, trust signals:**

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
/* Duration: 500ms | Easing: var(--ease-spring) */
```

**Slide Right — Process steps, timeline items:**

```css
@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
/* Duration: 500ms | Easing: var(--ease-out-expo) */
```

**Blur In — Hero text, stat counters, editorial entrance:**

```css
@keyframes blurIn {
  from {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}
/* Duration: 900ms | Easing: var(--ease-out-quart) */
```

### 10.4 Interaction Animations

**Card Hover:**

- Transform: `translateY(-4px)`
- Shadow: transition from `--shadow-sm` to `--shadow-xl`
- Icon container: background transition to `--color-clay-500` (300ms)
- Duration: 300ms, `--ease-out-quart`

**Button Hover (Primary):**

- Transform: `translateY(-2px)`
- Background: `--color-clay-500` → `--color-clay-600`
- Shadow: `--shadow-clay` → `--shadow-glow`
- Duration: 300ms, `--ease-out-quart`

**Link Underline (editorial warmth):**
Underline slides in from left on hover using a `::after` pseudo-element:

```css
a {
  position: relative;
  color: var(--color-clay-600);
  text-decoration: none;
}
a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--color-clay-500);
  transition: width 300ms var(--ease-out-expo);
}
a:hover::after {
  width: 100%;
}
```

A 1.5px underline (not 2px) keeps the feel delicate and editorial rather than chunky.

### 10.5 Counter Animation

Stat numbers count up from 0 when they enter the viewport.

- Duration: 1.5–2 seconds
- Easing: `--ease-out-expo`
- Implementation: IntersectionObserver triggers the animation once, then animates using `requestAnimationFrame` or a small library like CountUp.js.
- Respect `prefers-reduced-motion` — if reduced motion is set, display the final number immediately without counting.

### 10.6 Staggered Reveals

When a grid of cards enters the viewport, each child reveals with a staggered delay:

```css
.reveal-item:nth-child(1) {
  animation-delay: 0ms;
}
.reveal-item:nth-child(2) {
  animation-delay: 80ms;
}
.reveal-item:nth-child(3) {
  animation-delay: 160ms;
}
.reveal-item:nth-child(4) {
  animation-delay: 240ms;
}
/* 60–100ms between each child */
```

### 10.7 Parallax (Very Subtle)

Hero background warmth (the radial cream-and-clay gradient) can move at 0.3–0.5× scroll speed. Body content stays at 1×. Maximum total parallax offset: 30–50px. The effect should feel like atmosphere, not a gimmick. If you can consciously notice it while using the site, it's too strong.

### 10.8 Page Transitions

Between pages, a 200ms fade covers layout shifts and keeps navigation feeling instant:

```css
@keyframes pageFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### 10.9 Reduced Motion

**All animations must respect `prefers-reduced-motion`:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Additionally, counter animations must check for reduced motion before running and display final values immediately if reduced motion is requested.

---

## 11. Grid & Layout

### 11.1 Container

```css
.container {
  max-width: 1200px; /* --container-xl */
  margin: 0 auto;
  padding: 0 32px; /* --gutter — 32px desktop, 20px mobile */
}
```

Content never stretches wider than 1200px. On ultrawide monitors, the container centers with equal margins. Navigation and full-bleed sections may span the entire viewport while content inside stays contained.

### 11.2 Grid System

12-column CSS Grid with responsive behavior:

```css
.grid {
  display: grid;
  gap: var(--space-8); /* 32px — more generous than default */
}
```

**Common layouts:**

| Layout               | Grid Columns           | Usage                                                         |
| -------------------- | ---------------------- | ------------------------------------------------------------- |
| Full width           | `1fr`                  | Hero, full-width CTAs, single-column content                  |
| Content + Sidebar    | `8fr 4fr`              | Blog posts, service detail pages                              |
| Asymmetric Editorial | `7fr 5fr` or `5fr 7fr` | Hero with image, feature sections — more editorial than 50/50 |
| Two equal            | `1fr 1fr`              | Side-by-side content blocks, testimonial pairs                |
| Three cards          | `repeat(3, 1fr)`       | Service cards, feature grids                                  |
| Four cards           | `repeat(4, 1fr)`       | Process steps, small feature grids                            |

### 11.3 Responsive Breakpoints

| Token     | Width Range | Columns          | Key Behaviors                                                                                           |
| --------- | ----------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| `mobile`  | 0–639px     | 1 column (stack) | All cards stack. Hamburger nav. Tap-to-call floating CTA. Single-column forms. Reduced section padding. |
| `tablet`  | 640–1023px  | 2 columns        | Cards in 2-col grid. Nav may still be hamburger. CTA button always visible.                             |
| `desktop` | 1024–1199px | 3 columns        | Full nav visible. 3-col card grids. Asymmetric hero layouts available.                                  |
| `wide`    | 1200px+     | 3–4 columns      | Max container width applies. Content centered with equal side margins.                                  |

### 11.4 Section Rhythm

Homepage sections alternate between cream and soft sand backgrounds to create gentle visual rhythm. Coastal Clay does **not** use dark sections for rhythm the way Authority Navy does — the entire page stays warm and light, with dark warm brown reserved for the footer.

```
[Hero               — sand-50 cream]
[Trust bar          — sand-25 white]
[Problem agitation  — sand-100 soft sand]
[Services grid      — sand-50 cream]
[Results snapshot   — sand-100 soft sand]
[Process            — sand-50 cream]
[Testimonials       — clay-50 optional emphasis (or sand-100)]
[FAQ                — sand-50 cream]
[Final CTA          — sand-100 soft sand]
[Footer             — sand-900 dark warm brown]
```

**Rule of one emphasis section per page:** `clay-50` (soft clay) is allowed for exactly one section per page — typically testimonials or the final CTA. Using it more than once dilutes its impact. If you're unsure whether to use it, default to `sand-100` instead.

---

## 12. Navigation

### 12.1 Desktop Navigation

Unlike Authority Navy's dark navigation bar, Coastal Clay uses a **light nav** that matches the warm cream background. The nav is subtle at the top of the page and gains a soft shadow after scrolling past the hero.

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(251, 248, 243, 0.85); /* sand-50 with transparency */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  padding: 20px 32px;
  transition: all 300ms var(--ease-out-quart);
}
.nav.scrolled {
  border-bottom-color: var(--color-sand-200);
  box-shadow: var(--shadow-sm);
}
```

**Structure:** Logo (left) → Links (center or right) → CTA Button (far right)

- **Logo:** Fraunces 22px weight 600 opsz 48, color `--color-sand-950`. Period / dot in `--color-clay-500` if the logo wordmark uses one.
- **Nav Links:** Inter 15px weight 500, color `--color-sand-700`. Hover: color `--color-sand-950` + clay underline (see §10.4).
- **CTA Button:** Clay primary button (always visible, never collapses into the menu).

### 12.2 Mobile Navigation

- **Hamburger icon:** Left side, `--color-sand-950` on transparent background.
- **Logo:** Centered in the nav bar.
- **CTA button:** Right side — always visible, never hidden in the menu.
- **Menu panel:** Full-screen overlay with `--color-sand-50` background (cream, not dark — consistent with the warm language). Centered Fraunces 32px nav links with a staggered fade-in animation on open. Close button in top-right.

Mobile nav intentionally keeps the warm cream language rather than inverting to dark — inverting would break the Warm Professional feel the moment the user opens the menu.

---

## 13. Page Sections

### 13.1 Hero Section

**Coastal Clay reworks the hero entirely compared to Authority Navy.** The hero is warm, light, and editorial — not dark and dramatic. Fraunces carries the weight that a navy gradient would normally carry. The headline itself is the hero.

```
Background:   sand-50 (#FBF8F3) with optional subtle radial clay warmth from top center
Padding:      128px top, 96px bottom (desktop) / 80px top, 64px bottom (mobile)
Text align:   Left (editorial) or centered (classic) — left is preferred
Max width:    800px for headline, 640px for subhead
Layout:       Single column text OR asymmetric 7fr/5fr with headline on left and image/illustration on right
```

**Content Stack:**

1. **Eyebrow:** Inter 12px weight 600, UPPERCASE, `--color-clay-500`, letter-spacing 0.1em.
   Example: `"DIGITAL MARKETING FOR SOUTHWEST FLORIDA"`
2. **Headline:** Fraunces 56px weight 500 opsz 144, SOFT 50, color `--color-sand-950`, letter-spacing -0.02em, line-height 1.1. Key phrase can be italic Fraunces for emphasis.
   Example: `"More leads. More customers. *More work for you.*"`
3. **Subheadline:** Inter 18px weight 400, `--color-sand-700`, line-height 1.6, max-width 640px. Plainspoken Everyman voice.
   Example: `"We build websites, run ads, and manage your online reputation so your phone keeps ringing and you can get back to running your business."`
4. **Button group:** Primary (clay) + Secondary (sand outline) side by side with 16px gap.
5. **Optional trust signals** below CTAs: small row of trust badges or "Trusted by X businesses in [County]" text.

**What the hero does NOT have:**

- No dark background
- No gradient mesh
- No animated hero illustrations
- No video backgrounds
- No parallax except the very subtle radial warmth

The hero's job is to land a clear promise in the visitor's lap and point them to an action. That's it.

### 13.2 Trust Bar

```
Background:   sand-25 white
Padding:      32px vertical
Layout:       Horizontal row of badges/logos, centered, evenly spaced
```

Use real client logos in grayscale or `--color-sand-500` where permission exists. If no logos yet, use trust badges (Google rating, years in business, businesses served, location) instead.

### 13.3 Content Section (Generic Template)

```
Background:   Alternating sand-50 and sand-100 (see §11.4 section rhythm)
Padding:      96px vertical (desktop) / 64px vertical (mobile)
```

**Content stack:**

1. **Eyebrow:** Inter 12px weight 600 UPPERCASE clay-500 — the section opener note
2. **Section title (H2):** Fraunces 40px weight 500 opsz 144 — the main heading
3. **Section description:** Inter 16px weight 400 sand-700, max-width 640px
4. **Content:** Cards, text, imagery
5. **Section CTA** (optional): Contextual button or link

### 13.4 Final CTA Section

Two options depending on page context:

**Option A — Warm emphasis (default):**

```
Background:   sand-100 soft sand
Padding:      96px vertical
Text align:   Centered
```

Strong closing Fraunces headline (40px), short subhead in Inter, clay primary button, small reassurance line below.

**Option B — Dark warm emphasis (dramatic contrast):**

```
Background:   sand-900 dark warm brown
Padding:      96px vertical
Text align:   Centered
Headline:     sand-50 cream
Subhead:      sand-300
CTA:          Clay primary (stands out on the dark brown)
```

Option B is used at most once per page, typically on the homepage or booking page. Overuse breaks the warm-and-light language.

### 13.5 Footer

```
Background:   sand-900 (#2A251D) dark warm brown
Padding:      96px top, 32px bottom
Layout:       4-column grid on desktop, stacked on mobile
```

- **Brand column:** Logo + tagline in `--color-sand-300` text, max-width 280px. Logo version uses sand-50 wordmark with clay-400 accent if applicable.
- **Link columns:** Column title in `--color-sand-400` (UPPERCASE, Inter 12px weight 600, tracking 0.1em). Links in `--color-sand-200`, Inter 14px. Hover: `--color-clay-400`.
- **Bottom bar:** Divider in `--color-sand-800` (barely visible against the dark brown). Copyright text in `--color-sand-500` Inter 13px. Include "Made in Southwest Florida" as a local-credibility reinforcement.

The footer is the ONLY dark section on the site in the standard configuration. It serves as a visual punctuation mark — the warm cream page comes to a grounded, confident close.

---

## 14. Accessibility

### 14.1 Color Contrast

All text-background combinations target **WCAG 2.1 AA** minimum contrast ratios. Warm palettes can be tricky for contrast — the warmth makes some combinations feel fine visually but test borderline. Verify every combination with a contrast checker before shipping.

| Combination                                 | Approximate Contrast Ratio | Target                                                   |
| ------------------------------------------- | -------------------------- | -------------------------------------------------------- |
| `sand-950` (#1F1B16) on `sand-50` (#FBF8F3) | ~15:1                      | AA + AAA ✓                                               |
| `sand-950` on `sand-100` (#F3EEE4)          | ~14:1                      | AA + AAA ✓                                               |
| `sand-700` (#5C5449) on `sand-50`           | ~7.5:1                     | AA + AAA ✓                                               |
| `sand-600` (#78705F) on `sand-50`           | ~5.1:1                     | AA (body only)                                           |
| `sand-500` (#8B8171) on `sand-50`           | ~3.8:1                     | AA for large text only — do not use for body             |
| `sand-50` on `sand-900` (#2A251D)           | ~13:1                      | AA + AAA ✓                                               |
| `clay-500` (#C2552D) on `sand-50`           | ~4.6:1                     | AA for large text, borderline for body                   |
| `clay-600` (#A3431F) on `sand-50`           | ~6.2:1                     | AA + AAA ✓ (preferred for body links)                    |
| `sand-50` on `clay-500` (button)            | ~4.6:1                     | AA for large text — button text must be 15px+ weight 600 |
| `clay-800` (#6B2A14) on `clay-50` (#FBECE0) | ~9.5:1                     | AA + AAA ✓ (for text on clay badges)                     |

**Key rules:**

- **Clay-500 for buttons:** Minimum button text size is 15px weight 600 to meet AA on the `sand-50`-on-`clay-500` combination. Never use clay-500 buttons with text smaller than 14px.
- **Clay-500 for body links:** Use `clay-600` (#A3431F) instead of `clay-500` for inline body links. Clay-500 is borderline for body text contrast. Clay-600 passes cleanly.
- **Sand-500 is display-only:** Never use sand-500 for body text. It's fine for large labels, captions, or disabled states.
- **Verify with a real contrast tool** before shipping any text-background combination. These numbers are approximate.

### 14.2 Focus Indicators

Never remove focus outlines. Coastal Clay uses a clay focus ring to match the action language:

```css
:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-clay-500),
    0 0 0 4px var(--color-clay-50);
  border-radius: inherit;
}
```

Focus rings appear on all interactive elements: buttons, links, inputs, select elements, and any `tabindex` element.

### 14.3 Motion

Respect `prefers-reduced-motion` per §10.9. All scroll-triggered animations should use IntersectionObserver and check for motion preference before applying. Counter animations must display final values immediately if reduced motion is requested.

### 14.4 Semantic HTML

- Use proper heading hierarchy (H1 → H2 → H3, never skip levels).
- All images require descriptive `alt` text. Decorative images use `alt=""`.
- Form inputs must have associated `<label>` elements or `aria-label` attributes.
- Interactive elements must be keyboard-accessible. Test every page with keyboard only.
- Use `aria-label` for icon-only buttons and `aria-describedby` for input hints.
- Landmarks: `<header>`, `<nav>`, `<main>`, `<footer>` on every page. Skip links for keyboard users.

### 14.5 Typography Accessibility

- **Fraunces at body sizes loses legibility.** Never use Fraunces for body text, long-form paragraphs, or UI labels. Inter only.
- **Minimum body font size:** 16px. Never go below 14px for any content that needs to be read (captions and metadata only).
- **Line-height minimum:** 1.5 for body text, 1.6 preferred.
- **Max line length:** 75 characters (~640px) for comfortable reading.

---

## 15. CSS Custom Properties Reference

Complete copy-paste reference for all design tokens:

```css
:root {
  /* ---- COLORS: BASE ---- */
  --color-base: #fbf8f3; /* warm cream, default page background */
  --color-surface: #ffffff; /* pure white for emphasis surfaces */

  /* ---- COLORS: SAND SCALE (structural neutrals) ---- */
  --color-sand-950: #1f1b16;
  --color-sand-900: #2a251d;
  --color-sand-800: #3e372d;
  --color-sand-700: #5c5449;
  --color-sand-600: #78705f;
  --color-sand-500: #8b8171;
  --color-sand-400: #b3a991;
  --color-sand-300: #d4c7a9;
  --color-sand-200: #e5dcc9;
  --color-sand-100: #f3eee4;
  --color-sand-50: #fbf8f3;
  --color-sand-25: #ffffff;

  /* ---- COLORS: CLAY SCALE (brand + accent) ---- */
  --color-clay-900: #4a1b0c;
  --color-clay-800: #6b2a14;
  --color-clay-700: #8a3820;
  --color-clay-600: #a3431f;
  --color-clay-500: #c2552d;
  --color-clay-400: #d47548;
  --color-clay-300: #e39870;
  --color-clay-200: #efba9a;
  --color-clay-100: #f7dac5;
  --color-clay-50: #fbece0;

  /* ---- COLORS: SEMANTIC ---- */
  --color-success: #4a7c59;
  --color-success-light: #e7efe9;
  --color-error: #b94a3f;
  --color-error-light: #f5e2df;
  --color-warning: #b88419;
  --color-warning-light: #f7ead0;
  --color-info: #4a6b7c;
  --color-info-light: #e0e7eb;

  /* ---- TYPOGRAPHY ---- */
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Inter", -apple-system, sans-serif;

  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.5rem; /* 40px */
  --text-5xl: 3.5rem; /* 56px */
  --text-6xl: 4rem; /* 64px */

  --leading-tight: 1.1;
  --leading-snug: 1.3;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;

  --tracking-tight: -0.025em;
  --tracking-snug: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  /* Fraunces variable font settings — apply with font-variation-settings */
  --fraunces-display: "opsz" 144, "SOFT" 50;
  --fraunces-subhead: "opsz" 96, "SOFT" 30;
  --fraunces-text: "opsz" 48, "SOFT" 0;
  --fraunces-small: "opsz" 14, "SOFT" 0;

  /* ---- SPACING ---- */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */
  --space-32: 8rem; /* 128px */
  --space-40: 10rem; /* 160px */

  /* ---- BORDERS & RADIUS ---- */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  --border-width-sm: 1px;
  --border-width-md: 1.5px;
  --border-width-lg: 3px;

  /* ---- SHADOWS (warm brown base) ---- */
  --shadow-xs: 0 1px 2px rgba(31, 27, 22, 0.04);
  --shadow-sm:
    0 1px 3px rgba(31, 27, 22, 0.05), 0 1px 2px rgba(31, 27, 22, 0.03);
  --shadow-md:
    0 4px 8px -2px rgba(31, 27, 22, 0.06), 0 2px 4px -2px rgba(31, 27, 22, 0.04);
  --shadow-lg:
    0 12px 20px -4px rgba(31, 27, 22, 0.08),
    0 4px 8px -4px rgba(31, 27, 22, 0.04);
  --shadow-xl:
    0 24px 32px -8px rgba(31, 27, 22, 0.1),
    0 8px 12px -4px rgba(31, 27, 22, 0.04);
  --shadow-glow: 0 0 24px rgba(194, 85, 45, 0.18);
  --shadow-clay: 0 4px 14px rgba(194, 85, 45, 0.2);

  /* ---- ANIMATION ---- */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
  --duration-reveal: 900ms;

  /* ---- LAYOUT ---- */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1200px;
  --container-2xl: 1400px;
  --gutter: 32px;
  --gutter-mobile: 20px;
}
```

---

_Linax Digital Style Guide v2.0 — Coastal Clay Palette + Fraunces/Inter_
_Confidential — For internal development use_
_Pairs with `business-context.md`_
