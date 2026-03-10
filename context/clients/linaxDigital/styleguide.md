# Authority Navy — Style Guide
### Linax Digital | v1.0

> A comprehensive design system for a modern, sophisticated, and approachable digital marketing agency website. Built on the 60-30-10 rule with the Authority Navy color palette.

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

The Linax Digital website communicates **sophistication without coldness** and **authority without rigidity**. The design language aims to make local business owners — who may be skeptical of agencies — feel that they are dealing with experts who are also approachable, local, and trustworthy.

**Core Principles:**

- **Confidence through white space.** Generous spacing communicates professionalism. Cramped layouts feel desperate.
- **Authority through restraint.** The navy palette commands trust. The amber accent is used sparingly — only for actions and highlights — so it maintains its "pop."
- **Warmth through motion.** Subtle, purposeful animations create a feeling of life and approachability without being distracting or gimmicky.
- **Clarity through hierarchy.** At any scroll position, the visitor should immediately understand what to read, what to do next, and where they are on the page.

**Visual Tone:** Modern, sleek, sophisticated but warm. Think premium consultancy — not Silicon Valley startup, not corporate enterprise.

---

## 2. Color System

### 2.1 The 60-30-10 Rule

| Ratio | Role | Color | Usage |
|-------|------|-------|-------|
| **60%** | Dominant | `#F7F8FA` Cool White | Backgrounds, surfaces, white space, page canvas |
| **30%** | Secondary | `#1B3A5C` Deep Navy | Headers, navigation, text, dark sections, footers |
| **10%** | Accent | `#F18F01` Amber Orange | CTAs, highlights, active states, key interactions |

### 2.2 Navy Scale (Primary Brand Color)

The navy scale provides the structural backbone of the entire design. Navy 700 (`#1B3A5C`) is the primary brand color.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-navy-900` | `#0E2240` | Darkest backgrounds (footer), deep contrast |
| `--color-navy-800` | `#132E54` | Navigation bar, hero backgrounds, dark sections |
| `--color-navy-700` | `#1B3A5C` | **Primary brand color.** Headings, primary text on light backgrounds, secondary buttons |
| `--color-navy-600` | `#234A72` | Hover states on navy elements, secondary headings |
| `--color-navy-500` | `#2D5F8A` | Links, interactive elements, focus rings |
| `--color-navy-400` | `#4A7FA8` | Icon colors, secondary link states |
| `--color-navy-300` | `#7BA3C4` | Muted text on dark backgrounds, borders on dark surfaces |
| `--color-navy-200` | `#A8C5DC` | Body text on dark backgrounds, nav link default state |
| `--color-navy-100` | `#D4E2EE` | Light borders, dividers, subtle backgrounds |
| `--color-navy-50`  | `#ECF2F8` | Hover backgrounds on light surfaces, subtle tints, focus ring outer |

### 2.3 Amber Scale (Accent / Action Color)

Amber is reserved **exclusively** for elements that demand attention: CTAs, active states, and highlights. Never use amber as a background for large areas.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-amber-600` | `#D47A00` | Hover state for primary buttons, pressed state |
| `--color-amber-500` | `#F18F01` | **Primary action color.** CTA buttons, key highlights, active indicators |
| `--color-amber-400` | `#FFA633` | Eyebrow text on dark backgrounds, secondary amber accents |
| `--color-amber-300` | `#FFBE66` | Testimonial quote marks, decorative accents |
| `--color-amber-200` | `#FFD699` | Light amber for subtle warmth accents |
| `--color-amber-100` | `#FFF0D6` | Badge backgrounds (e.g., Google rating badge) |
| `--color-amber-50`  | `#FFF8EC` | Callout/note backgrounds, subtle warning states |

### 2.4 Neutral Scale

These neutrals have a **cool blue undertone** to harmonize with the navy palette. They are not pure gray — they subtly reinforce the brand.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-gray-900` | `#1A1A2E` | Primary body text color (on light backgrounds) |
| `--color-gray-800` | `#2D2D3F` | Strong body text, bold labels |
| `--color-gray-700` | `#44445A` | Default body text |
| `--color-gray-600` | `#5E5E73` | Secondary body text, descriptions |
| `--color-gray-500` | `#7A7A8E` | Muted text, placeholders, captions |
| `--color-gray-400` | `#9C9CAD` | Disabled text, footer secondary text |
| `--color-gray-300` | `#BDBDCB` | Borders on light backgrounds |
| `--color-gray-200` | `#DDDDE6` | Input borders (default), card borders, dividers |
| `--color-gray-100` | `#EDEDF2` | Subtle separators, table row alternating backgrounds |
| `--color-gray-50`  | `#F7F7FA` | Page background alternative, card hover tints |

### 2.5 Semantic Colors

| Token | Hex | Light Variant | Usage |
|-------|-----|---------------|-------|
| `--color-success` | `#2D936C` | `#E8F5EF` | Positive results, confirmations, growth stats |
| `--color-error` | `#D94F4F` | `#FDEEEE` | Errors, form validation, destructive actions |
| `--color-warning` | `#E5A30E` | `#FEF6E0` | Warnings, caution states |
| `--color-info` | `#2E86AB` | `#E6F3F8` | Informational callouts, tooltips |

### 2.6 Background Treatments

**Page Background:**
- Default: `#F7F8FA` (cool white)
- Alternative sections: `#FFFFFF` (pure white) to create visual rhythm between page sections
- Dark sections: Linear gradient from `#0E2240` to `#1B3A5C` (navy-900 → navy-700)

**Hero Background:**
```css
background: linear-gradient(165deg, var(--color-navy-900) 0%, var(--color-navy-700) 100%);
```
With subtle radial gradient overlays for depth:
```css
/* Amber glow — bottom left */
radial-gradient(ellipse 50% 80% at 70% 100%, rgba(241,143,1,0.08) 0%, transparent 60%),
/* Blue glow — top left */
radial-gradient(ellipse 40% 50% at 10% 30%, rgba(46,134,171,0.06) 0%, transparent 50%)
```
Add a single-pixel top highlight for a "lit from above" effect:
```css
border-top: 1px solid rgba(255,255,255,0.1);
```

---

## 3. Typography

### 3.1 Font Stack

| Role | Font | Weights | Fallback |
|------|------|---------|----------|
| **Display / Headings** | Plus Jakarta Sans | 500, 600, 700, 800 | sans-serif |
| **Body Text** | DM Sans | 300, 400, 500, 600 | sans-serif |
| **Monospace / Data** | JetBrains Mono | 400, 500 | monospace |

**Why these fonts:**

**Plus Jakarta Sans** has rounded terminals that feel approachable without sacrificing professionalism. It splits the difference between sophisticated and warm perfectly — it reads as "expert you can trust" rather than "corporate machine." Used for all headings, navigation labels, button text, and anywhere that needs authority.

**DM Sans** is the ideal body companion: clean, highly legible at small sizes, and subtly humanist. It doesn't fight with the display font for attention. Used for all paragraphs, descriptions, form labels, and general UI text.

**JetBrains Mono** adds a technical, data-driven feel when displaying statistics, badges, code snippets, or section labels. It signals precision and competence.

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
```

### 3.2 Type Scale

| Element | Size | Weight | Font | Letter Spacing | Line Height | Color |
|---------|------|--------|------|----------------|-------------|-------|
| Hero / H1 | 48px (`3rem`) | 800 | Plus Jakarta Sans | -0.025em | 1.2 | `--color-navy-800` or `#FFFFFF` on dark |
| H2 (Section Title) | 36px (`2.25rem`) | 800 | Plus Jakarta Sans | -0.025em | 1.2 | `--color-navy-800` |
| H3 (Subsection) | 30px (`1.875rem`) | 700 | Plus Jakarta Sans | 0 | 1.35 | `--color-navy-800` |
| H4 (Card Title) | 24px (`1.5rem`) | 700 | Plus Jakarta Sans | 0 | 1.35 | `--color-navy-800` |
| H5 (Small Heading) | 20px (`1.25rem`) | 600 | Plus Jakarta Sans | 0 | 1.35 | `--color-navy-700` |
| Body | 16px (`1rem`) | 400 | DM Sans | 0 | 1.6 | `--color-gray-700` |
| Body Small | 14px (`0.875rem`) | 400 | DM Sans | 0 | 1.6 | `--color-gray-600` |
| Body XS / Caption | 12px (`0.75rem`) | 400 | DM Sans | 0 | 1.6 | `--color-gray-500` |
| Eyebrow / Overline | 12px (`0.75rem`) | 500 | JetBrains Mono | 0.1em | 1.2 | `--color-amber-500` |
| Stat Number | 48px (`3rem`) | 800 | Plus Jakarta Sans | -0.025em | 1.2 | `--color-navy-800` |
| Nav Link | 14px (`0.875rem`) | 500 | DM Sans | 0 | 1.0 | `--color-navy-200` (dark bg) |
| Button Text | 14px (`0.875rem`) | 600 | Plus Jakarta Sans | 0 | 1.0 | Varies by variant |

### 3.3 Typography Rules

- **Headings** always use Plus Jakarta Sans. Never use DM Sans for headings.
- **Body text** always uses DM Sans. Never use Plus Jakarta Sans for paragraphs.
- **Eyebrow labels** (e.g., "OUR SERVICES") use JetBrains Mono in uppercase with wide letter-spacing and amber color.
- **Stat numbers** (e.g., "340%") use Plus Jakarta Sans at hero size. The unit or symbol (%, +, etc.) is colored amber.
- **Maximum body text line length:** 65–75 characters (~640px container). Longer lines reduce readability.
- **Never use all-caps for headings.** Reserve uppercase for eyebrow labels and small badges only.
- **Emphasis:** Use `font-weight: 600` (semibold) for inline emphasis rather than italic. Reserve italic for testimonial quotes.

### 3.4 Text Color Rules

| Context | Color Token |
|---------|-------------|
| Primary text on light background | `--color-gray-900` (#1A1A2E) |
| Secondary text on light background | `--color-gray-600` (#5E5E73) |
| Muted/caption text on light background | `--color-gray-500` (#7A7A8E) |
| Heading text on light background | `--color-navy-800` (#132E54) |
| Primary text on dark (navy) background | `#FFFFFF` |
| Secondary text on dark background | `--color-navy-200` (#A8C5DC) |
| Muted text on dark background | `--color-navy-300` (#7BA3C4) |
| Link text | `--color-navy-500` (#2D5F8A) |
| Link hover | `--color-navy-700` (#1B3A5C) |

---

## 4. Spacing System

Based on an **8px base grid** with a scale that provides consistent rhythm across all elements.

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--space-1` | 0.25rem | 4px | Tight inline gaps, icon-to-text micro gaps |
| `--space-2` | 0.5rem | 8px | Icon gaps, tag padding, badge spacing |
| `--space-3` | 0.75rem | 12px | Compact padding, tight card padding |
| `--space-4` | 1rem | 16px | Default element spacing, grid gap minimum |
| `--space-5` | 1.25rem | 20px | Form group spacing |
| `--space-6` | 1.5rem | 24px | Card padding, grid gaps, card-to-card spacing |
| `--space-8` | 2rem | 32px | Section inner padding, large card padding |
| `--space-10` | 2.5rem | 40px | Between content blocks within a section |
| `--space-12` | 3rem | 48px | Between major content blocks |
| `--space-16` | 4rem | 64px | Section separators (minimum) |
| `--space-20` | 5rem | 80px | Major section padding (vertical) |
| `--space-24` | 6rem | 96px | Hero vertical padding, large section padding |
| `--space-32` | 8rem | 128px | Maximum section padding, hero top spacing |

### Spacing Application Rules

- **Between homepage sections:** `--space-16` to `--space-24` (64–96px). This is non-negotiable — generous section spacing is the difference between "premium agency" and "desperate freelancer."
- **Between content blocks within sections:** `--space-8` to `--space-12` (32–48px).
- **Between elements within a block (e.g., heading to paragraph):** `--space-4` to `--space-6` (16–24px).
- **Card internal padding:** `--space-6` to `--space-8` (24–32px).
- **Grid gaps (card grids):** `--space-6` (24px).
- **Form group spacing (label to input, input to next group):** `--space-5` (20px).
- **Container gutter (page edge padding):** 24px on desktop, 16px on mobile.

---

## 5. Borders & Radius

### 5.1 Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Inputs, tags, small badges, inline code blocks |
| `--radius-md` | 10px | Buttons, small cards, icon containers, tooltips |
| `--radius-lg` | 16px | Cards, modals, dropdowns, testimonial cards |
| `--radius-xl` | 24px | Hero sections, full-width content blocks, large containers |
| `--radius-full` | 9999px | Pill badges, avatar images, tag chips, nav links |

### 5.2 Border Rules

- **Card borders:** 1px solid `--color-gray-100` (#EDEDF2). Subtle enough to define shape without creating visual noise.
- **Input borders (default):** 1.5px solid `--color-gray-200` (#DDDDE6).
- **Input borders (hover):** 1.5px solid `--color-gray-300` (#BDBDCB).
- **Input borders (focus):** 1.5px solid `--color-navy-500` (#2D5F8A) + 3px outer ring of `--color-navy-50` (#ECF2F8).
- **Dividers/separators:** 1px solid `--color-gray-100`.
- **Accent borders (card-top highlight):** 3px solid `--color-amber-500` on the top edge of featured cards.
- **Section decorative borders:** Use the navy gradient bottom border on section headings:
  ```css
  border-bottom: 4px solid var(--color-navy-700);
  ```

---

## 6. Shadows & Elevation

All shadows use a navy-tinted base (`rgba(26,26,46,...)`) rather than pure black for a warmer, more cohesive appearance.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 2px rgba(26,26,46,0.04)` | Minimal lift — tags, badges |
| `--shadow-sm` | `0 1px 3px rgba(26,26,46,0.06), 0 1px 2px rgba(26,26,46,0.04)` | Cards at rest, inputs |
| `--shadow-md` | `0 4px 6px -1px rgba(26,26,46,0.06), 0 2px 4px -1px rgba(26,26,46,0.04)` | Dropdowns, popovers |
| `--shadow-lg` | `0 10px 15px -3px rgba(26,26,46,0.06), 0 4px 6px -2px rgba(26,26,46,0.03)` | Cards on hover, modal at rest |
| `--shadow-xl` | `0 20px 25px -5px rgba(26,26,46,0.08), 0 10px 10px -5px rgba(26,26,46,0.02)` | Cards on hover (elevated), featured elements |
| `--shadow-glow` | `0 0 20px rgba(241,143,1,0.15)` | Primary CTA button hover **only** — amber glow |
| `--shadow-navy` | `0 4px 14px rgba(27,58,92,0.18)` | Navy elements on light backgrounds (nav bar, dark cards) |

### Elevation Interaction Rules

- **Cards at rest:** `--shadow-sm`
- **Cards on hover:** Transition to `--shadow-xl` + `translateY(-4px)`
- **Buttons at rest:** `--shadow-sm` to `--shadow-md` depending on variant
- **Primary button hover:** `--shadow-glow` + `translateY(-2px)`
- **Secondary button hover:** Deepened `--shadow-navy` + `translateY(-2px)`
- **Sticky navigation:** `--shadow-md` when scrolled

---

## 7. Buttons

### 7.1 Button Variants

**Primary (Amber) — Reserved for the main CTA only**

```css
.btn-primary {
  background: var(--color-amber-500);      /* #F18F01 */
  color: #FFFFFF;
  font-family: var(--font-display);        /* Plus Jakarta Sans */
  font-weight: 600;
  font-size: 14px;
  padding: 14px 28px;
  border-radius: var(--radius-md);         /* 10px */
  border: none;
  box-shadow: 0 2px 8px rgba(241,143,1,0.3);
}
.btn-primary:hover {
  background: var(--color-amber-600);      /* #D47A00 */
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(241,143,1,0.35);
}
```

Example text: `Get Your Free Audit →` / `Free Strategy Call →` / `Get Started →`

**Secondary (Navy) — Supporting actions**

```css
.btn-secondary {
  background: var(--color-navy-700);       /* #1B3A5C */
  color: #FFFFFF;
  box-shadow: var(--shadow-navy);
}
.btn-secondary:hover {
  background: var(--color-navy-800);       /* #132E54 */
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(27,58,92,0.25);
}
```

Example text: `View Our Results` / `See Case Studies` / `Learn More`

**Outline — Tertiary actions, light backgrounds**

```css
.btn-outline {
  background: transparent;
  color: var(--color-navy-700);
  border: 1.5px solid var(--color-navy-200);
}
.btn-outline:hover {
  border-color: var(--color-navy-700);
  background: var(--color-navy-50);
  transform: translateY(-2px);
}
```

**Ghost — Navigation, minimal actions**

```css
.btn-ghost {
  background: transparent;
  color: var(--color-navy-600);
  padding: 14px 16px;
}
.btn-ghost:hover {
  color: var(--color-navy-800);
  background: var(--color-navy-50);
}
```

### 7.2 Button Sizes

| Size | Padding | Font Size | Radius | Usage |
|------|---------|-----------|--------|-------|
| Small | 10px 20px | 12px | `--radius-md` | Inline actions, table actions, compact UI |
| Default | 14px 28px | 14px | `--radius-md` | Standard buttons throughout the site |
| Large | 18px 36px | 16px | `--radius-lg` | Hero CTAs, full-width section CTAs, booking page |

### 7.3 Button Rules

- **Only ONE amber primary button per viewport.** At any scroll position, there should be one clear action. Don't compete with yourself.
- **Arrow (→) is added to primary CTAs only.** It signals momentum and direction. Example: `Get Your Free Audit →`
- **Never stack two primary buttons side-by-side.** Always pair: primary + outline, primary + ghost, or primary + secondary.
- **The Y-axis lift on hover (-2px translate + deeper shadow)** creates a subtle "tactile" feel without being cartoonish.
- **All buttons include a subtle inner gradient overlay** for a polished, slightly dimensional appearance:
  ```css
  .btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 50%);
    pointer-events: none;
  }
  ```

---

## 8. Cards & Components

### 8.1 Service Cards

**Structure:** Icon container → Title (H4) → Description (Body Small) → Optional link

```css
.service-card {
  background: var(--color-surface);           /* #FFFFFF */
  border: 1px solid var(--color-gray-100);    /* #EDEDF2 */
  border-radius: var(--radius-lg);            /* 16px */
  padding: var(--space-6);                    /* 24px */
  transition: all 300ms cubic-bezier(0.25, 1, 0.5, 1);
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-navy-100);
}
```

**Icon Container:**
- Size: 48x48px
- Background: `--color-navy-50` (#ECF2F8)
- Radius: `--radius-md` (10px)
- On card hover: background transitions to `--color-amber-500`, icon color to white, with `scale(1.08)` — this "bloom" of accent color creates delight.

**Featured Variant (Accent Top):**
- Add `border-top: 3px solid var(--color-amber-500)` to highlight featured or recommended services.
- On hover, the top border transitions to navy.

### 8.2 Testimonial Cards

```css
.testimonial-card {
  background: var(--color-surface);
  border: 1px solid var(--color-gray-100);
  border-radius: var(--radius-lg);
  padding: var(--space-8);                    /* 32px */
}
```

**Quote Mark:** Large opening quotation mark in `--color-amber-300` (#FFBE66), font-size 36px, Georgia serif.

**Quote Text:** DM Sans, 16px, italic, `--color-gray-700`.

**Author Block:** Avatar (44px circle with navy gradient) + Name (Plus Jakarta Sans, 14px, semibold, navy-800) + Role/Company (DM Sans, 12px, gray-500).

### 8.3 Process Steps

Four-step horizontal layout: Discovery Call → Audit & Strategy → Build & Launch → Grow & Optimize.

- **Step number:** 40px circle, navy-700 background, white text, Plus Jakarta Sans 700.
- **Final step:** Amber-500 background instead of navy (signals the "payoff").
- **Arrow connectors:** `→` character in gray-300 between steps.
- **Animation:** On scroll-reveal, each step fades up with 100ms staggered delay between each.

### 8.4 Trust Badges

Horizontal row of badges, each containing: icon circle (32px) + text.

- Google rating: Amber-100 background, amber-600 icon
- Google Partner: Navy-50 background, navy-600 icon
- Businesses served: Success-light background, success icon
- Location: Info-light background, info icon

### 8.5 Stat/Metric Cards

For displaying results like "+340% leads" or "50+ businesses."

- **Number:** Plus Jakarta Sans, 48px, weight 800, navy-800. Unit/symbol in amber-500.
- **Label:** DM Sans, 14px, gray-500, below the number.
- **Animation:** Counter animation that counts up from 0 on scroll-into-view (1.5–2 seconds, ease-out-expo).

---

## 9. Form Elements

### 9.1 Text Inputs

```css
.form-input {
  width: 100%;
  font-family: var(--font-body);              /* DM Sans */
  font-size: 16px;
  color: var(--color-gray-800);               /* #2D2D3F */
  padding: 14px 16px;
  border: 1.5px solid var(--color-gray-200);  /* #DDDDE6 */
  border-radius: var(--radius-md);            /* 10px */
  background: var(--color-surface);           /* #FFFFFF */
  outline: none;
  transition: all 150ms ease;
}
.form-input::placeholder {
  color: var(--color-gray-400);               /* #9C9CAD */
}
.form-input:hover {
  border-color: var(--color-gray-300);        /* #BDBDCB */
}
.form-input:focus {
  border-color: var(--color-navy-500);        /* #2D5F8A */
  box-shadow: 0 0 0 3px var(--color-navy-50); /* #ECF2F8 */
}
```

### 9.2 Form Labels

```css
.form-label {
  font-family: var(--font-display);           /* Plus Jakarta Sans */
  font-size: 14px;
  font-weight: 600;
  color: var(--color-navy-700);               /* #1B3A5C */
  margin-bottom: 8px;
  display: block;
}
```

### 9.3 Form Layout Rules

- **Maximum 3–4 fields** on any lead capture form. Name, email, phone, business type. Every additional field reduces completions by ~10%.
- **Multi-step forms** for longer data collection. Step 1: name + email. Step 2: business details. Step 3: booking. Show progress indicator ("Step 1 of 3").
- **Submit button:** Always use the primary (amber) button, full-width, large size.
- **Reassurance text** below the submit button in 12px gray-400: "Free 15-minute call. No pitch, no pressure."
- **Focus state:** Navy border + 3px navy-50 ring. Subtle but accessible. Never remove focus indicators.

---

## 10. Animation System

### 10.1 Easing Curves

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | **Primary easing.** Scroll-triggered reveals, section entrances. Fast start, graceful deceleration. |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Hover transitions, card lifts, button feedback. Slightly less dramatic than expo. |
| `--ease-in-out` | `cubic-bezier(0.45, 0, 0.55, 1)` | Looping animations, state changes, continuous motion. |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful overshoot. Use sparingly — tooltips, toggles, toast notifications. |

### 10.2 Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Hover color changes, focus states, instant feedback |
| `--duration-normal` | 300ms | Card hover lifts, button state changes, dropdown open/close |
| `--duration-slow` | 500ms | Individual element reveals, icon morphs |
| `--duration-slower` | 700ms | Section reveals, staggered group animations |
| `--duration-reveal` | 900ms | Hero text entrance, primary content reveals |

### 10.3 Reveal Animations

**Fade Up (Primary Reveal) — Used for all section content on scroll-into-view:**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Duration: 700–900ms | Easing: ease-out-expo */
```

**Scale In — Icons, badges, trust signals:**
```css
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
}
/* Duration: 500ms | Easing: ease-spring */
```

**Slide Right — Process steps, timeline items:**
```css
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-30px); }
  to   { opacity: 1; transform: translateX(0); }
}
/* Duration: 500ms | Easing: ease-out-expo */
```

**Blur In — Hero text, stat counters, premium feel:**
```css
@keyframes blurIn {
  from { opacity: 0; filter: blur(10px); transform: translateY(10px); }
  to   { opacity: 1; filter: blur(0);    transform: translateY(0); }
}
/* Duration: 900ms | Easing: ease-out-quart */
```

### 10.4 Interaction Animations

**Card Hover:**
- Transform: `translateY(-4px)`
- Shadow: transition from `--shadow-sm` to `--shadow-xl`
- Icon background: color transition to amber (300ms)
- Duration: 300ms, ease-out-quart

**Button Hover:**
- Transform: `translateY(-2px)`
- Shadow: deepened + glow (primary) or deepened navy (secondary)
- Duration: 300ms, ease-out-quart

**Link Underline:**
- Underline slides in from left on hover using a `::after` pseudo-element:
  ```css
  a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-amber-500);
    transition: width 300ms var(--ease-out-expo);
  }
  a:hover::after { width: 100%; }
  ```

### 10.5 Counter Animation

Stat numbers (340%, 50+, etc.) count up from 0 when they enter the viewport.

- Duration: 1.5–2 seconds
- Easing: ease-out-expo
- Implementation: Use IntersectionObserver to trigger, then animate the number using requestAnimationFrame or a library like CountUp.js.

### 10.6 Staggered Reveals

When a grid of cards enters the viewport, each child has a staggered delay:

```css
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 80ms; }
.card:nth-child(3) { animation-delay: 160ms; }
.card:nth-child(4) { animation-delay: 240ms; }
/* 60–100ms between each child */
```

### 10.7 Parallax (Subtle)

Hero background elements (gradient orbs, decorative patterns) move at 0.3–0.5x scroll speed. Body content stays at 1x. Keep this extremely subtle — no more than 30–50px of total parallax offset. It should feel like atmosphere, not a gimmick.

### 10.8 Page Transitions

Between pages, a quick fade (200ms) covers layout shifts and keeps navigation feeling instant:
```css
@keyframes pageFade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

### 10.9 Reduced Motion

**All animations must respect `prefers-reduced-motion`:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 11. Grid & Layout

### 11.1 Container

```css
.container {
  max-width: 1200px;  /* var(--container-xl) */
  margin: 0 auto;
  padding: 0 24px;    /* var(--gutter) */
}
```

Content should **never stretch wider** than 1200px. On ultrawide monitors, the container centers with equal margins. The navigation bar can go full-width (bleed) while content stays contained.

### 11.2 Grid System

12-column CSS Grid with responsive behavior:

```css
.grid {
  display: grid;
  gap: var(--space-6); /* 24px */
}
```

**Common Layouts:**

| Layout | Grid Columns | Usage |
|--------|-------------|-------|
| Full width | 1fr | Hero, full-width CTAs, single-column content |
| Content + Sidebar | 8fr 4fr | Blog posts, service detail pages |
| Two equal | 1fr 1fr | Side-by-side content blocks, testimonial pairs |
| Three cards | repeat(3, 1fr) | Service cards, feature grids |
| Four cards | repeat(4, 1fr) | Process steps, small feature grids |

### 11.3 Responsive Breakpoints

| Token | Width Range | Columns | Key Behaviors |
|-------|-------------|---------|---------------|
| `mobile` | 0 – 639px | 1 column (stack) | All cards stack. Hamburger nav. Tap-to-call floating CTA. Single-column forms. |
| `tablet` | 640 – 1023px | 2 columns | Cards in 2-col grid. Nav may still be hamburger. CTA button always visible. |
| `desktop` | 1024 – 1199px | 3 columns | Full nav visible. 3-col card grids. Sidebar layouts available. |
| `wide` | 1200px+ | 3–4 columns | Max container width applies. Content centered. Full layouts. |

### 11.4 Section Rhythm

Homepage sections alternate between light and white backgrounds to create visual rhythm:

```
[Hero — Navy gradient background]
[Trust Bar — White background]
[Problem Agitation — Cool white (#F7F8FA) background]
[Services Grid — White background]
[Results Snapshot — Cool white background]
[Process — White background]
[Testimonials — Cool white background]
[FAQ — White background]
[Final CTA — Navy gradient background]
[Footer — Navy-900 background]
```

---

## 12. Navigation

### 12.1 Desktop Navigation

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-navy-800);          /* #132E54 */
  backdrop-filter: blur(16px);
  padding: 16px 24px;
}
```

**Structure:** Logo (left) → Links (center or right) → CTA Button (far right)

- **Logo:** Plus Jakarta Sans, 18px, weight 800, white. Period/dot in amber.
- **Nav Links:** DM Sans, 14px, weight 500, navy-200. Hover: white.
- **CTA Button:** Amber primary button (always visible, never collapses into menu).

**Scroll Behavior:** Sticky on scroll. On initial page load, the nav can be transparent over the hero and transition to solid navy-800 with `--shadow-md` after scrolling past the hero section.

### 12.2 Mobile Navigation

- **Hamburger icon:** Left side.
- **CTA button:** Right side — always visible, never hidden in the menu.
- **Menu panel:** Full-screen overlay with navy-900 background, centered links, staggered fade-in animation.

---

## 13. Page Sections

### 13.1 Hero Section

```
Background:    Navy gradient (165deg, navy-900 → navy-700) with radial gradient overlays
Padding:       96px top, 80px bottom (desktop) / 64px top, 48px bottom (mobile)
Text align:    Center
Max width:     700px for headline and subhead (centered within container)
```

**Content Stack:**
1. **Eyebrow:** JetBrains Mono, 12px, uppercase, amber-400, wide tracking. (e.g., "DIGITAL MARKETING FOR LOCAL BUSINESSES")
2. **Headline:** Plus Jakarta Sans, 48px, weight 800, white. Key word/phrase in amber-400 using `<em>` tag. (e.g., "More Leads. More Customers. *More Revenue.*")
3. **Subheadline:** DM Sans, 18px, weight 400, navy-200. (e.g., "We build and optimize the complete digital presence for local service businesses so the phone keeps ringing.")
4. **Button Group:** Primary (amber) + Outline (white border/text) side by side.

### 13.2 Trust Bar

```
Background:    White
Padding:       24px vertical
Layout:        Horizontal row of logos/badges, centered, with subtle separators
```

### 13.3 Content Section (Generic)

```
Background:    Alternating #FFFFFF and #F7F8FA
Padding:       80px vertical (desktop) / 48px vertical (mobile)
```

**Content Stack:**
1. **Eyebrow:** JetBrains Mono, amber, uppercase
2. **Section Title (H2):** Plus Jakarta Sans, 36px, navy-800
3. **Section Description:** DM Sans, 16px, gray-600, max-width 640px
4. **Content (cards, text, etc.)**
5. **Section CTA** (optional): Contextual button

### 13.4 CTA Section (Full-Width)

```
Background:    Navy gradient (matches hero)
Padding:       80px vertical
Text align:    Center
```

Strong closing headline in white, reinforce value prop, primary amber CTA button. Include a risk-reversal statement in small navy-200 text below the button.

### 13.5 Footer

```
Background:    var(--color-navy-900) (#0E2240)
Padding:       96px top, 24px bottom
Layout:        4-column grid (brand column wider than link columns)
```

- **Brand column:** Logo + tagline (navy-300 text, max-width 280px)
- **Link columns:** Column title in navy-300, uppercase, 12px, semibold. Links in navy-200, 14px. Hover: amber-400.
- **Bottom bar:** Copyright text in navy-400, small text.

---

## 14. Accessibility

### 14.1 Color Contrast

All text-background combinations meet **WCAG 2.1 AA** minimum contrast ratios:

| Combination | Contrast Ratio | Passes |
|-------------|---------------|--------|
| Navy-800 on White | 12.5:1 | AA + AAA |
| Gray-700 on White | 7.2:1 | AA + AAA |
| Gray-600 on White | 5.1:1 | AA |
| White on Navy-800 | 12.5:1 | AA + AAA |
| Navy-200 on Navy-800 | 5.8:1 | AA |
| Amber-500 on Navy-800 | 4.7:1 | AA (large text) |
| White on Amber-500 | 3.1:1 | AA (large text only) |

> **Note:** White text on amber buttons meets AA for large text (18px+ bold). Button text at 14px bold is borderline — consider increasing button font size to 15–16px or using navy-900 text on amber for maximum accessibility.

### 14.2 Focus Indicators

Never remove focus outlines. Use the navy focus ring:
```css
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-navy-500), 0 0 0 4px var(--color-navy-50);
}
```

### 14.3 Motion

Respect `prefers-reduced-motion` (see Section 10.9). All scroll-triggered animations should use IntersectionObserver and check for motion preference before applying.

### 14.4 Semantic HTML

- Use proper heading hierarchy (H1 → H2 → H3, never skip levels).
- All images require descriptive `alt` text.
- Form inputs must have associated `<label>` elements.
- Interactive elements must be keyboard-accessible.
- Use `aria-label` for icon-only buttons.

---

## 15. CSS Custom Properties Reference

Complete copy-paste reference for all design tokens:

```css
:root {
  /* ---- COLORS ---- */
  --color-base:            #F7F8FA;
  --color-surface:         #FFFFFF;

  --color-navy-900:        #0E2240;
  --color-navy-800:        #132E54;
  --color-navy-700:        #1B3A5C;
  --color-navy-600:        #234A72;
  --color-navy-500:        #2D5F8A;
  --color-navy-400:        #4A7FA8;
  --color-navy-300:        #7BA3C4;
  --color-navy-200:        #A8C5DC;
  --color-navy-100:        #D4E2EE;
  --color-navy-50:         #ECF2F8;

  --color-amber-600:       #D47A00;
  --color-amber-500:       #F18F01;
  --color-amber-400:       #FFA633;
  --color-amber-300:       #FFBE66;
  --color-amber-200:       #FFD699;
  --color-amber-100:       #FFF0D6;
  --color-amber-50:        #FFF8EC;

  --color-gray-900:        #1A1A2E;
  --color-gray-800:        #2D2D3F;
  --color-gray-700:        #44445A;
  --color-gray-600:        #5E5E73;
  --color-gray-500:        #7A7A8E;
  --color-gray-400:        #9C9CAD;
  --color-gray-300:        #BDBDCB;
  --color-gray-200:        #DDDDE6;
  --color-gray-100:        #EDEDF2;
  --color-gray-50:         #F7F7FA;

  --color-success:         #2D936C;
  --color-success-light:   #E8F5EF;
  --color-error:           #D94F4F;
  --color-error-light:     #FDEEEE;
  --color-warning:         #E5A30E;
  --color-warning-light:   #FEF6E0;
  --color-info:            #2E86AB;
  --color-info-light:      #E6F3F8;

  /* ---- TYPOGRAPHY ---- */
  --font-display:          'Plus Jakarta Sans', sans-serif;
  --font-body:             'DM Sans', sans-serif;
  --font-mono:             'JetBrains Mono', monospace;

  --text-xs:    0.75rem;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.125rem;
  --text-xl:    1.25rem;
  --text-2xl:   1.5rem;
  --text-3xl:   1.875rem;
  --text-4xl:   2.25rem;
  --text-5xl:   3rem;
  --text-6xl:   3.75rem;

  --leading-tight:    1.2;
  --leading-snug:     1.35;
  --leading-normal:   1.6;
  --leading-relaxed:  1.75;

  --tracking-tight:   -0.025em;
  --tracking-normal:  0;
  --tracking-wide:    0.025em;
  --tracking-wider:   0.05em;
  --tracking-widest:  0.1em;

  /* ---- SPACING ---- */
  --space-1:   0.25rem;
  --space-2:   0.5rem;
  --space-3:   0.75rem;
  --space-4:   1rem;
  --space-5:   1.25rem;
  --space-6:   1.5rem;
  --space-8:   2rem;
  --space-10:  2.5rem;
  --space-12:  3rem;
  --space-16:  4rem;
  --space-20:  5rem;
  --space-24:  6rem;
  --space-32:  8rem;

  /* ---- BORDERS & RADIUS ---- */
  --radius-sm:    6px;
  --radius-md:    10px;
  --radius-lg:    16px;
  --radius-xl:    24px;
  --radius-full:  9999px;

  /* ---- SHADOWS ---- */
  --shadow-xs:   0 1px 2px rgba(26,26,46,0.04);
  --shadow-sm:   0 1px 3px rgba(26,26,46,0.06), 0 1px 2px rgba(26,26,46,0.04);
  --shadow-md:   0 4px 6px -1px rgba(26,26,46,0.06), 0 2px 4px -1px rgba(26,26,46,0.04);
  --shadow-lg:   0 10px 15px -3px rgba(26,26,46,0.06), 0 4px 6px -2px rgba(26,26,46,0.03);
  --shadow-xl:   0 20px 25px -5px rgba(26,26,46,0.08), 0 10px 10px -5px rgba(26,26,46,0.02);
  --shadow-glow: 0 0 20px rgba(241,143,1,0.15);
  --shadow-navy: 0 4px 14px rgba(27,58,92,0.18);

  /* ---- ANIMATION ---- */
  --ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart:  cubic-bezier(0.25, 1, 0.5, 1);
  --ease-in-out:     cubic-bezier(0.45, 0, 0.55, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);

  --duration-fast:    150ms;
  --duration-normal:  300ms;
  --duration-slow:    500ms;
  --duration-slower:  700ms;
  --duration-reveal:  900ms;

  /* ---- LAYOUT ---- */
  --container-sm:    640px;
  --container-md:    768px;
  --container-lg:    1024px;
  --container-xl:    1200px;
  --container-2xl:   1400px;
  --gutter:          24px;
}
```

---

*Linax Digital Style Guide v1.0 — Authority Navy Palette*
*Confidential — For internal development use*
