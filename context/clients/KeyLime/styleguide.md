# KeyLime Systems — Website Style Guide

### Built on the Agencia X (Webflow) template · Citrus & Charcoal palette · v4.0

> A build-reference style guide for the live KeyLime Systems Webflow site. This document mirrors the **actual class architecture, type scale, spacing, shadows, and component system of the Agencia X template** the site is built on — so that any new component or page built from it will match the rest of the site exactly. The **only** intentional divergence from the stock template is color: every color token has been remapped to the **green/charcoal Citrus & Charcoal palette**. Class names, scale steps, and structural conventions are reproduced verbatim from Webflow.

---

## How to use this guide

This is a **reference for matching the existing site**, not an aspirational redesign. When building a new page or component in the Webflow Designer:

1. **Reuse existing classes** wherever possible — the class names below are the real classes already in the project (e.g. `Display 8`, `Button Primary`, `MG Bottom 24px`, `BG Neutral 200`). Apply them rather than writing new styles.
2. **Compose with utility classes** — layout, spacing, color, and radius are all handled by single-purpose utility classes that stack as combo classes.
3. **Match the type scale** — all headings come from the `Display 1`–`Display 12` scale; all body copy from `Paragraph Small/Medium/Large` or the base paragraph.
4. **Stay on palette** — only the tokens in §2 are in use. The template ships a multi-hue accent system; the KeyLime build collapses it to a single lime accent over a warm charcoal neutral scale.

The site's design tokens live in one Webflow **Variable Collection** named `default`. CSS variable names (e.g. `--neutral--800`) are listed alongside each token.

---

## Table of Contents

1. [Foundations & Design Principles](#1-foundations--design-principles)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Layout & Grid](#5-layout--grid)
6. [Border Radius](#6-border-radius)
7. [Shadows & Elevation](#7-shadows--elevation)
8. [Buttons](#8-buttons)
9. [Form Elements](#9-form-elements)
10. [Components](#10-components)
11. [Utility Class Reference](#11-utility-class-reference)
12. [Webflow Class Naming Conventions](#12-webflow-class-naming-conventions)
13. [Breakpoints & Responsive Behavior](#13-breakpoints--responsive-behavior)
14. [Design Token Reference](#14-design-token-reference)

---

## 1. Foundations & Design Principles

The KeyLime Systems site is a marketing-agency website built on the **Agencia X** Webflow template. The template's structure is modern, modular, and card-driven: generous section padding, a deep multi-step display type scale, soft elevation, and fully pill-shaped buttons.

The KeyLime build keeps **100% of that structure** and re-skins it in the **Citrus & Charcoal** palette so the site reads as confident, editorial, and credibly modern rather than as a generic template.

**Core principles**

- **Class-first, not style-first.** The template is built so pages are assembled from existing named classes and utilities. New work should do the same — this is what guarantees visual consistency.
- **One accent, used with discipline.** The stock template uses four accent hues (red/blue/yellow/green). The KeyLime build uses a **single lime accent** over a warm charcoal neutral scale. Lime appears only for emphasis, highlights, links, and key interactive states.
- **Warm-neutral structure.** Section rhythm comes from alternating warm near-white (`Neutral 100`/`Neutral 200`) surfaces, not from heavy dark blocks. Charcoal (`Neutral 800`) is reserved for text, the footer, and occasional emphasis sections.
- **Soft, layered elevation.** Cards and floating elements use the `Neutral Shadow` set; lime-tinted `Primary Shadow` is used sparingly for accent emphasis.
- **Tight typographic tracking.** Every display and paragraph style carries `letter-spacing: -0.03em`. This is a defining detail of the template — keep it on all new text.

**Primary font:** Inter (loaded as the Webflow variable `--main-font`). All text on the site — headings and body — uses Inter. Do **not** introduce a second typeface; matching the site means matching its single-family system.

---

## 2. Color System

The template organizes color into four groups: a **Neutral** scale, a **Primary** scale, **Secondary** families, and **Overlays**. The KeyLime build keeps all four groups and every class name, but remaps the values to the Citrus & Charcoal palette.

> **Webflow color classes.** Color is applied through utility classes, not raw hex: `BG Neutral 200`, `Text Neutral 800`, `BG Primary 01`, `Text Color Primary 1`, `BG Secondary Green 300`, etc. Use these classes so new elements inherit palette changes automatically.

### 2.1 Neutral Scale — structural backbone

Carries backgrounds, surfaces, borders, dividers, and all text colors. Eight steps, warm-neutral (a subtle green-warm undertone tying to the brand lime). Remapped from the template's cool navy-neutrals to warm charcoal.

| Token / Variable     | Hex       | Webflow classes                          | Usage                                                            |
| -------------------- | --------- | ----------------------------------------- | ---------------------------------------------------------------- |
| `--neutral--100`     | `#FFFFFF` | `BG Neutral 100`, `Text Neutral 100`      | Pure white. Surface emphasis, text on dark backgrounds.          |
| `--neutral--200`     | `#F0F2EB` | `BG Neutral 200`, `Text Neutral 200`      | **Alternating section surface** (warm near-white). Card hover.   |
| `--neutral--300`     | `#DCDDD7` | `BG Neutral 300`, `Text Neutral 300`      | Light borders, subtle dividers, inactive card borders.           |
| `--neutral--400`     | `#C7C9C3` | `BG Neutral 400`                          | Default input/border color, section dividers.                    |
| `--neutral--500`     | `#898B85` | `BG Neutral 500`                          | Placeholders, disabled text, light captions.                     |
| `--neutral--600`     | `#4F524B` | `BG Neutral 600`, `Text Neutral 600`      | **Secondary text** — body copy, support copy, metadata.          |
| `--neutral--700`     | `#292B26` | `BG Neutral 700`, `Text Neutral 700`      | Strong headings alternative, footer, dark emphasis sections.     |
| `--neutral--800`     | `#1C1E1A` | `BG Neutral 800`, `Text Neutral 800`      | **Primary text.** Warm charcoal. Headings, dark UI, primary button. |

**Page background:** `#FBFBF7` (warm near-white) — applied at `body`. Stored in the slot the template uses for the body background (`--primary--05`).

### 2.2 Primary Scale — the lime accent

The template's `Primary` group is its accent family. The KeyLime build makes it a **single lime ramp** — the one brand accent. Applied via `BG Primary 01`–`04` and `Text Color Primary 1`–`4`.

| Token / Variable  | Hex       | Webflow classes                       | Usage                                                          |
| ----------------- | --------- | -------------------------------------- | -------------------------------------------------------------- |
| `--primary--01`   | `#A4D639` | `BG Primary 01`, `Text Color Primary 1` | **Key Lime — the brand accent.** Highlights, accent fills, active states, eyebrow labels. |
| `--primary--02`   | `#6FA51F` | `BG Primary 02`, `Text Color Primary 2` | Hover state for lime elements; strong text accent on near-white. |
| `--primary--03`   | `#588817` | `BG Primary 03`, `Text Color Primary 3` | Pressed state; lime icon color on light surfaces.              |
| `--primary--04`   | `#436C0E` | `BG Primary 04`, `Text Color Primary 4` | Deepest lime — high-contrast text accent, inline body links.   |
| `--primary--05`   | `#FBFBF7` | (body background)                      | Warm near-white page canvas.                                   |

> **Accent discipline.** Lime is never used as a large background fill or as decoration. It marks calls to action, highlights, and moments that demand attention. When lime appears, it means something.

### 2.3 Secondary Scales — semantic support colors

The template ships four Secondary families (Red/Blue/Yellow/Green), each with 100–400 tints, used for colored card backgrounds and badges. The KeyLime build keeps the **class structure and the 100–400 tint steps**, but tunes the values to a restrained semantic set that coexists with brand lime:

- **Secondary Green** stays on-brand as soft lime tints (use for success states, positive stats, soft accent cards).
- **Secondary Red / Yellow / Blue** become muted error / warning / info colors — distinct from the brand lime, used only for status and rare accent variety.

| Family / Classes                                | 400       | 300       | 200       | 100       | Role                          |
| ------------------------------------------------ | --------- | --------- | --------- | --------- | ----------------------------- |
| **Secondary Green** — `BG Secondary Green 100–400` | `#BBE05E` | `#CDE886` | `#DFF0B0` | `#ECF6CF` | Success, positive, soft lime accent |
| **Secondary Red** — `BG Secondary Red 100–400`     | `#C56B61` | `#D49B94` | `#E8CDC9` | `#F5E2DF` | Error, destructive, validation |
| **Secondary Yellow** — `BG Secondary Yellow 100–400` | `#D6963F` | `#E3B679` | `#EFD6B0` | `#F7E5C9` | Warning, caution               |
| **Secondary Blue** — `BG Secondary Blue 100–400`   | `#6E89A3` | `#9AAEC0` | `#C5D0DC` | `#E0E6EE` | Info, neutral notices          |

> Note: in Webflow the blue class is spelled `BG Secondary Bue` (template typo). The class still resolves — match the existing spelling when applying it.

### 2.4 Overlays

Used over imagery and in modals/dropdowns. Charcoal-based dark overlays; white overlays unchanged.

| Token / Variable          | Value                       | Webflow classes        |
| ------------------------- | --------------------------- | ---------------------- |
| `--dark-overlay--80`      | `rgba(28, 30, 26, 0.80)`    | `Dark Overlay 80%`     |
| `--dark-overlay--65`      | `rgba(28, 30, 26, 0.65)`    | `Dark Overlay 65%`     |
| `--dark-overlay--50`      | `rgba(28, 30, 26, 0.50)`    | `Dark Overlay 50%`     |
| `--dark-overlay--40`      | `rgba(28, 30, 26, 0.40)`    | `Dark Overlay 40%`     |
| `--white-overlay--80`     | `rgba(255, 255, 255, 0.80)` | `White Overlay 80%`    |
| `--white-overlay--65`     | `rgba(255, 255, 255, 0.65)` | `White Overlay 65%`    |
| `--white-overlay--50`     | `rgba(255, 255, 255, 0.50)` | `White Overlay 50%`    |
| `--white-overlay--40`     | `rgba(255, 255, 255, 0.40)` | `White Overlay 40%`    |
| `--white-overlay--20`     | `rgba(255, 255, 255, 0.20)` | `White Overlay 20%`    |

---

## 3. Typography

**Font family:** Inter — single family, all weights. Webflow variable `--main-font`.

**Weights in use:**

| Name        | Weight | Webflow class  |
| ----------- | ------ | -------------- |
| Regular     | 400    | (default)      |
| Medium      | 500    | `Text Medium`  |
| Semi Bold   | 600    | `Semi Bold`    |
| Extra Bold  | 800    | `Extra Bold`   |

**Universal rule:** every display and paragraph style uses `letter-spacing: -0.03em`. Apply it to any new text style.

### 3.1 Display Scale

The template's heading system is a 12-step `Display` scale. These are the **real classes** — apply `Display 8`, `Display 5`, etc. directly. Each can be combined with a weight class (`Text Medium`, `Extra Bold`).

| Class        | Font size | Line height | Letter spacing | Typical use                              |
| ------------ | --------- | ----------- | -------------- | ---------------------------------------- |
| `Display 12` | 98px      | 1em         | -0.03em        | Oversized hero display                   |
| `Display 11` | 72px      | 1em         | -0.03em        | Large hero headline                      |
| `Display 10` | 60px      | 1em         | -0.03em        | Hero headline / page H1                  |
| `Display 9`  | 48px      | 1.209em     | -0.03em        | Section headline (H2)                    |
| `Display 8`  | 36px      | 1.111em     | -0.03em        | Sub-section headline (H3)                |
| `Display 7`  | 30px      | 1.2em       | -0.03em        | Large card heading                       |
| `Display 6`  | 24px      | 1.333em     | -0.03em        | Card heading (H4)                        |
| `Display 5`  | 20px      | 1.4em       | -0.03em        | Small heading / lead-in                  |
| `Display 4`  | 18px      | 1.333em     | -0.03em        | Emphasis text, large label               |
| `Display 3`  | 16px      | 1.375em     | -0.03em        | Standard label / strong body             |
| `Display 2`  | 14px      | 1.429em     | -0.03em        | Small label, metadata                    |
| `Display 1`  | 12px      | 1.5em       | -0.03em        | Eyebrow, caption, smallest label         |

**Heading-tag mapping.** Native tags (`h1`–`h6`) exist in the project but visual sizing is controlled by `Display` classes. For semantics: H1 → `Display 10`, H2 → `Display 9`, H3 → `Display 8`, H4 → `Display 6`, H5 → `Display 5`, H6 → `Display 3`. Always set the heading level for accessibility, then apply the matching `Display` class for size.

### 3.2 Paragraph Styles

| Class               | Font size | Line height | Letter spacing | Use                              |
| ------------------- | --------- | ----------- | -------------- | -------------------------------- |
| `Paragraph Large`   | 18px      | 1.555em     | -0.03em        | Intro / lead paragraphs          |
| `Paragraph Medium`  | 16px      | 1.5em       | -0.03em        | Standard body copy               |
| Base paragraph (`p`)| 14px      | 1.571em     | -0.03em        | Default body text, weight 400    |
| `Paragraph Small`   | 12px      | 1.5em       | -0.03em        | Fine print, captions, footnotes  |

Body default color: `--neutral--600` (`#4F524B`). Headings default to `--neutral--800` (`#1C1E1A`).

---

## 4. Spacing System

Spacing is applied through single-purpose **margin, padding, and gap utility classes** rather than per-element styles. The scale is built on a 4px base.

**Spacing scale (px):** 0 · 4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 64 · 72 · 80 · 96 · 120 · 140 · 160 · 200

### 4.1 Margin utilities

- **Bottom:** `MG Bottom 4px`, `MG Bottom 8px`, `MG Bottom 12px`, `MG Bottom 16px`, `MG Bottom 24px`, `MG Bottom 32px`, `MG Bottom 40px`, `MG Bottom 48px`, `MG Bottom 64px`, `MG Bottom 72px`, `MG Bottom 80px`, `MG Bottom 0`
- **Top:** `MG Top 0`, `MG Top 2px`, `MG Top 8px`, `MG Top 16px`, `MG Top 24px`, `MG Top 48px`, `MG Top 64px`
- **Responsive variants exist**, e.g. `MG Bottom 16px MBL` (mobile landscape), `MG Bottom 24px Tablet`, `MG Bottom 20px Tablet`.

`MG Bottom 24px` is the most common rhythm unit between stacked elements. `MG Bottom 16px` for tight groupings, `MG Bottom 64px`/`80px` between sub-sections.

### 4.2 Padding utilities

- **Section padding:** `Top Bottom 100px`, `Top Bottom 140px`, `Top Bottom 200px`, `Top 120px`, `Top 70px - Bottom 140px`, `Top 100px - Bottom 200px`, and similar directional combos.
- **Element padding:** `PD 24px`, `PD Sides 24px`, `PD 48px - 40px`, `PD 48px - 32px`, `PD 64px Top And Bottom`, `PD Top 24px`, `PD Top 60px`, `PD Top 120px`, `PD Bottom 40px`, plus tablet zero-out helpers like `PD Top 0 Tablet` / `PD 0 Tablet`.

### 4.3 Gap utilities (flex/grid)

- **All-direction gap:** `Gap 6px`, `Gap 8px`, `Gap 12px`, `Gap 16px`, `Gap 22px`, `Gap 24px`, `Gap 28px`, `No Gap`
- **Row gap:** `Gap Row 4px`, `Gap Row 12px`, `Gap Row 16px`, `Gap Row 24px`, `Gap Row 28px`, `Gap Row 32px`, `Gap Row 48px`, `Gap Row 110px Desktop`
- **Column gap:** `Gap Column 8px`, `Gap Column 28px - Row 32px`
- **Wrapping combos:** `Gap 8px - Flex Wrap`, `Gap 16px - Flex Wrap`, `Gap Col 40 - Row 16px - Flex Wrap`

---

## 5. Layout & Grid

### 5.1 Container

`Container Default` — the standard page-width wrapper:

```css
.container-default {
  max-width: 1292px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}
```

Nest content inside `Container Default` on every section. `Inner Container` is used for narrower content blocks within a section.

### 5.2 Section

`Section` — the standard vertical section block:

```css
.section {
  padding-top: 160px;
  padding-bottom: 160px;
}
```

For tighter or asymmetric rhythm use the section-padding utilities listed in §4.2 (`Top Bottom 100px`, `Top 70px - Bottom 140px`, etc.) as combo classes on the section.

### 5.3 Grid

Column grids are utility classes: `Grid 1 Column`, `Grid 2 Columns`, `Grid 3 Columns`, `Grid 4 Columns`, `Grid 6 Columns`, plus `Grid Auto Column` / `Grid Auto - 1Fr` for auto-fit layouts. Most collapse to `1 Col Tablet` / `1 Col MBP` (mobile portrait) combo classes for responsive stacking.

### 5.4 Flex helpers

`Flex Horizontal`, `Flex Vertical`, `Flex Wrap`, `Center`, `Align Center`, `Align Start`, `Align Stretch`, `Align Self Bottom`, `Justify Start`, `Justify Center MBL`, `Justify End`, `Space Between`, `Space Between - Align Stretch`.

### 5.5 Position & sizing helpers

`Position Relative`, `Position Absolute`, `Position Sticky`, `Position Static Tablet`, `Position Static MBL`, `Width 100%`, `W & H 100%`, `Height 100%`, `Width 100% Tablet`, `Width 100% Mobile Portrait`, `Overflow Hidden`, `Overflow Visible`, `Z Index 1`.

---

## 6. Border Radius

Radius is applied through utility classes. The template's scale:

| Class                          | Radius                                  | Use                               |
| ------------------------------- | ---------------------------------------- | --------------------------------- |
| `Border Radius 8px`             | 8px all corners                          | Inputs, small chips, tight cards  |
| `Border Radius 16px`            | 16px all corners                         | Standard cards, media blocks      |
| `Border Radius 24px`            | 24px all corners                         | Large cards, feature blocks       |
| `Border Radius 32px`            | 32px all corners                         | Hero media, large containers      |
| `Border Radius Bottom 32px`     | 32px bottom corners only                 | Inverted / stacked card edges     |
| `Border Radius Bottom 64px`     | 64px bottom corners only                 | Large section/hero bottom curves  |
| `Border Radius Bottom Corners 0`| Resets bottom corners to 0               | Squaring a stacked element        |

**Buttons** use a fully pill-shaped `80px` radius — see §8. Circular elements use `50%` (`Circle`, `Button Primary Circle`).

---

## 7. Shadows & Elevation

Three shadow sets, each running 01 (subtlest) → 06 (deepest), applied as utility classes (`Neutral Shadow 03`, `Primary Shadow 02`, etc.).

- **Neutral Shadow** — default elevation for cards and floating UI. Charcoal-tinted.
- **Primary Shadow** — accent elevation; lime-tinted. Use sparingly for emphasis on accent elements.
- **Secondary Shadow** — status/variety elevation; rarely needed.

### 7.1 Neutral Shadow (charcoal-tinted)

| Class             | Box-shadow                               |
| ----------------- | ----------------------------------------- |
| `Neutral Shadow 01` | `0 1px 2px 0 rgba(28, 30, 26, 0.10)`    |
| `Neutral Shadow 02` | `0 1px 4px 0 rgba(28, 30, 26, 0.08)`    |
| `Neutral Shadow 03` | `0 2px 6px 0 rgba(28, 30, 26, 0.14)`    |
| `Neutral Shadow 04` | `0 4px 14px 0 rgba(28, 30, 26, 0.18)`   |
| `Neutral Shadow 05` | `0 12px 26px 0 rgba(28, 30, 26, 0.18)`  |
| `Neutral Shadow 06` | `0 22px 36px 0 rgba(28, 30, 26, 0.22)`  |

### 7.2 Primary Shadow (lime-tinted)

| Class             | Box-shadow                                  |
| ----------------- | --------------------------------------------- |
| `Primary Shadow 01` | `0 1px 2px 0 rgba(111, 165, 31, 0.14)`     |
| `Primary Shadow 02` | `0 1px 4px 0 rgba(111, 165, 31, 0.20)`     |
| `Primary Shadow 03` | `0 2px 6px 0 rgba(111, 165, 31, 0.22)`     |
| `Primary Shadow 04` | `0 4px 14px 0 rgba(111, 165, 31, 0.24)`    |
| `Primary Shadow 05` | `0 12px 16px 0 rgba(111, 165, 31, 0.24)`   |
| `Primary Shadow 06` | `0 22px 36px 0 rgba(111, 165, 31, 0.30)`   |

### 7.3 Secondary Shadow (status-tinted)

`Secondary Shadow 01`–`06` follow the same offsets as Neutral Shadow, tinted with the muted Secondary Red (`rgba(185, 74, 63, 0.12 → 0.26)`). Use only with status-colored elements.

---

## 8. Buttons

All buttons share a fully **pill-shaped 80px radius**, a `1px` solid border, `12px 24px` padding, an Inter `18px / 1.333em` label at weight 500, `letter-spacing: -0.03em`, `text-decoration: none`, and a `transform` transition of `300ms ease` (used for a subtle scale/lift on hover).

### 8.1 Button Primary

The main call-to-action. Charcoal fill, white label.

```css
.button-primary {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid var(--neutral--800);   /* #1C1E1A */
  border-radius: 80px;
  background-color: var(--neutral--800);   /* #1C1E1A */
  box-shadow: 0 1px 4px 0 rgba(28, 30, 26, 0.08);  /* Neutral Shadow 02 */
  color: var(--neutral--100);              /* #FFFFFF */
  font-size: 18px;
  line-height: 1.333em;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-align: center;
  text-decoration: none;
  transition: transform 300ms ease;
}
```

**Lime accent variant:** for a high-emphasis CTA, swap the background and border to `--primary--01` (`#A4D639`) with `--neutral--800` text. Use at most once per view to preserve accent discipline.

### 8.2 Secondary Button

Lower-emphasis action. Light fill, charcoal label, neutral border.

```css
.secondary-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid var(--neutral--400);   /* #C7C9C3 */
  border-radius: 80px;
  background-color: transparent;            /* or #FFFFFF */
  box-shadow: 0 1px 4px 0 rgba(28, 30, 26, 0.08);
  color: var(--neutral--800);
  font-size: 18px;
  line-height: 1.333em;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-align: center;
  text-decoration: none;
  transition: transform 300ms ease;
}
```

### 8.3 Tertiary Button

Outlined, text-forward action. Slightly taller top padding.

```css
.tertiary-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px 12px 24px;
  border: 1px solid var(--primary--02);    /* lime — use --neutral--400 for a neutral outline */
  border-radius: 80px;
  background-color: transparent;
  color: var(--neutral--800);
  line-height: 16px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: transform 300ms ease;
}
```

### 8.4 Circle & icon buttons

- **`Button Primary Circle`** — 48×48px, `border-radius: 50%`, charcoal fill, white icon, `18px` icon. Often paired with `Button Primary Circle Absolute` (positioned top-right inside a card).
- **`Secondary Button Circle`** — 48×48px circle, light fill, `20px / 600` icon.
- **`Button Circle Line`**, **`Tertiary Button Icon`** (34×34, `8px 4px 4px 4px` padding, `6px` radius), `Icon Button Wrapper`, `Card Link Circle` — used for compact in-card actions.
- **Slider controls:** `Slider BTN V1`, `Slider BTN V2`, `Slider BTN V3`.

### 8.5 Button add-ons

`Primary Button Icon`, `Secondary Button Icon`, `Link Arrow` (`display: inline; margin-left: 6px;` — the arrow that follows text links), `Icon Left`, `Icon Right`, `Buttons Row` (flex wrapper for grouped buttons).

---

## 9. Form Elements

The template provides two input families plus standard controls.

### 9.1 Inputs

- **`Input`** — the standard boxed text input. Pair with `Input Wrapper`, `Inputs Wrapper`, `Input Icon` / `Input Icon Wrapper`, `Inside Input`.
- **`Input Line`** / **`Inside Line Input`** — minimal underline-style input. Pair with `Input Line Icon Wrapper`, `Inputs Line Components`.
- **`Text Area`** — multi-line input; `Text Area Wrapper`, `Text Area Line`, `Text Area Icon Wrapper`, `Text Area Components`.
- **`Select`** — dropdown select; `Select Wrapper`, `Select Icon Wrapper`, `Selects`.

Typical input styling: `Border Radius 8px`, `1px solid var(--neutral--400)` border, `--neutral--500` placeholder text, `--neutral--800` entered text.

### 9.2 Controls & states

- **`Checkbox`** / `Checkbox Wrapper` / `Checkbox Text`
- **`Radio Button`** / `Radio Button Wrapper`
- **`Toggle Wrapper`** / `Toggle Button Wrapper` / `Toggle Button BG` / `Toggle Button Circle Inside` / `Toggle Item Wrapper`
- **States & feedback:** `Error State`, `Error Message Wrapper`, `Success Message Wrapper`, `Success Message Icon Top`, `Empty State`
- **Form structure:** `Form Wrapper`, `Grid Form`, `Main Contact Form`, `Contact Form BTN`, `label`

---

## 10. Components

The template is component-rich. Below is the class inventory for new pages — reuse these rather than rebuilding. Numbered variants (`Content Card 01`, `Content Card 02`, …) are alternate layouts of the same component family.

### 10.1 Cards

| Family               | Classes                                                       |
| -------------------- | -------------------------------------------------------------- |
| Content cards        | `Content Card 01`–`Content Card 14`, `Content Card Grid 01/03/10` |
| Service cards        | `Service Card 01`, `Service Card 02`, `Our Service Card`       |
| Testimonial cards    | `Testimonial Card 01`–`04`, `Testimonial Grid 01`, `Testimonial Marquee Wrapper` |
| Team cards           | `Team Member Card 01`–`03`, `Team Member Card Wrapper`, `Team Member Grid 2 Col` |
| Feature / value cards| `Why Us Card 01`, `Our Values Card`, `Our Process Card`, `Our Perks Card` |
| Stat cards           | `Stat Card`, `Stat Grid 3 Col`, `About Stat`                   |
| Location cards       | `Location Card 01`, `Location Card 02`, `Location Slider Wrapper 01/02` |
| Misc cards           | `Slider Card`, `Dark Card`, `Livechat Card`, `Typography Card`, `Package Single Card`, `Pricing`/`Package` blocks |

Card scaffolding: `Card`, `Card Wrapper`, `Card Image`, `Card Heading`, `Card Badge`, `Card Link Wrapper`, `Card Link Circle`, `Card Arrow Right`.

### 10.2 Navigation

`Header`, `Header Wrapper`, `Header Container Wrapper`, `Header Transparent`, `Header Logo`, `Header Nav Link`, `Nav Menu Wrapper`, `Nav Menu Center`, `Nav Menu Left Side`, `Nav Menu Right Side`, `List Nav Menu`, `Link Nav Item`, `Dropdown Wrapper`, `Dropdown Card`, `Dropdown Column Wrapper`, `Dropdown Arrow`, `Dropdown Toogle` *(template spelling)*, `Hamburger Menu`, `Hamburger Menu Line`, `Notification Bar`, `Notification Bar Close Icon`.

### 10.3 Sections

- **CTA sections:** `CTA Section 01`–`06`, with `Inverted` variants and `CTA Grid 2 Col 01`–`06`.
- **Hero:** `Hero`, `Sales Home Hero`, `Home V1/V2/V3 Hero Grid`, `Hero Title Grid 2 Col`.
- **Footer:** `Footer Wrapper`, `Footer Top`, `Footer Middle Card`, `Footer Bottom`, `Footer Left/Right/Center`, `Footer Top Grid 2 Col`, `Footer Middle Grid 2 Col`.
- **Logo strip:** `Logo Strip Grid 01`, `Logo Strip V15`, `Logo Strip V16`, `Logo Strip Image Wrapper`.

### 10.4 Interactive

- **Accordion:** `Accordion 01`, `Accordion Tab`, `Accordion Heading`, `Accordion Body`, `Accordion Item Wrapper 01/02`, `Accordion Grid Auto`.
- **Tabs:** `Tabs Wrapper`, `Tabs Menu 01/02/03 Wrapper`, `Tab Item 01`, `Tab Item 02`.
- **Slider:** `Slider Wrapper`, `Slider Mask`, `Slider Nav`, `Slider Card`, `Slide Card Grid`.
- **Marquee:** `Marquee`, `Marquee Wrapper`, `Marquee Col`.

### 10.5 Badges & small UI

`Badge`, `Badge Dark`, `Badge Home`, `Category Badge`, `Card Badge`, `Badge Link Wrapper`, `Pagination`, `Page Count`, `Avatar Image`, `Avatar Wrapper`, `Avatar Dot`, `Divider`, `Line`, `List Item Bullet`, `List Item Number`.

---

## 11. Utility Class Reference

Quick-pick list of the stackable utility classes. Combine freely as combo classes.

**Background color:** `BG Neutral 100`–`800` · `BG Primary 01`–`04` · `BG Secondary Green/Red/Yellow/Bue 100`–`400` · `BG Neutral 800 - BR 64px`

**Text color:** `Text Neutral 100`–`800` · `Text Color Primary 1`–`4`

**Text weight & treatment:** `Text Medium` · `Semi Bold` · `Extra Bold` · `Text Center` · `Text Left` · `Text Uppercase` · `Capitalize Every Word` · `Text Decoration None`

**Type scale:** `Display 1`–`Display 12` · `Paragraph Small` · `Paragraph Medium` · `Paragraph Large`

**Margin:** `MG Bottom {4–80}px` · `MG Top {0–64}px` · `MG Bottom 0` · `MG Left 4px` · `MG Right 6px`

**Padding:** `PD 24px` · `PD Sides 24px` · `PD 48px - 40px` · `PD Top {2–120}px` · `PD Bottom 40px` · `PD 0 Tablet`

**Gap:** `Gap {6–28}px` · `Gap Row {4–48}px` · `Gap Column 8px` · `No Gap` · `Gap 16px - Flex Wrap`

**Radius:** `Border Radius 8px` · `16px` · `24px` · `32px` · `Border Radius Bottom 32px` · `64px` · `Border Radius Bottom Corners 0`

**Shadow:** `Neutral Shadow 01`–`06` · `Primary Shadow 01`–`06` · `Secondary Shadow 01`–`06`

**Layout:** `Container Default` · `Inner Container` · `Section` · `Grid 1`–`6 Columns` · `Flex Horizontal` · `Flex Vertical` · `Center` · `Align Center/Start/Stretch` · `Justify Start/Center/End` · `Space Between` · `Width 100%` · `W & H 100%` · `Overflow Hidden`

**Visibility:** `Hidden` · `Show On Tablet` · `Show On Mobile` · `Hidden On Tablet` · `Hidden On Mobile Landscape`

**Overlays:** `Dark Overlay 40/50/65/80%` · `White Overlay 20/40/50/65/80%`

---

## 12. Webflow Class Naming Conventions

Follow the template's existing conventions so new classes are indistinguishable from stock ones:

- **Components** use Title Case names, often numbered for variants: `Content Card 04`, `Service Card 02`, `CTA Section 03`.
- **Utilities** are descriptive and value-explicit: `MG Bottom 24px`, `BG Neutral 200`, `Gap Row 32px`, `Border Radius 16px`.
- **Combo classes** layer on a base: a base component (`Content Card 01`) + utilities (`BG Neutral 200`, `Border Radius 24px`, `Neutral Shadow 03`).
- **Responsive variants** append the breakpoint: `MG Bottom 24px Tablet`, `100% Tablet`, `1 Col MBP`, `Justify Center MBL`.
- **Wrappers** are suffixed `Wrapper`; containers `Container`; grids `Grid`.
- **Match existing spellings, including template typos** — `BG Secondary Bue`, `Dropdown Toogle`, `Tabs Menu 01 Wrapper ` (trailing space). Renaming them breaks existing bindings.

---

## 13. Breakpoints & Responsive Behavior

Webflow standard breakpoints (largest to smallest):

| Breakpoint        | Width      | Notes                                  |
| ----------------- | ---------- | --------------------------------------- |
| XXL               | 1920px+    | Optional oversized desktop              |
| XL                | 1440px+    | Large desktop                           |
| **Desktop (main)**| ≤ 1280px   | Base canvas — design here first         |
| Tablet            | ≤ 991px    | `…Tablet` utilities apply               |
| Mobile Landscape  | ≤ 767px    | `…MBL` utilities apply                  |
| Mobile Portrait   | ≤ 479px    | `…MBP` utilities apply                  |

**Common responsive patterns:**

- Multi-column grids collapse with `1 Col Tablet` / `1 Col MBP`.
- Section/element padding is reduced with `PD Top 0 Tablet`, `PD 0 Tablet`.
- Width helpers `100% Tablet`, `Width 100% Mobile Portrait` make fixed-width blocks fluid.
- Alignment shifts with `Center Tablet`, `Justify Center MBL`, `Text Center Tablet`.
- Visibility toggles: `Hidden On Tablet`, `Show On Mobile`, `Hidden On Mobile Landscape`.

The fixed-width section padding from §4.2 should always be paired with a tablet/mobile reduction so sections don't over-pad on small screens.

---

## 14. Design Token Reference

The site's tokens live in one Webflow Variable Collection (`default`). Below is the full token map as remapped for the KeyLime build, in a portable CSS form.

```css
:root {
  /* ---- FONT ---- */
  --main-font: "Inter", -apple-system, sans-serif;

  /* ---- NEUTRAL SCALE (structural backbone) ---- */
  --neutral--100: #ffffff;
  --neutral--200: #f0f2eb;
  --neutral--300: #dcddd7;
  --neutral--400: #c7c9c3;
  --neutral--500: #898b85;
  --neutral--600: #4f524b;
  --neutral--700: #292b26;
  --neutral--800: #1c1e1a;
  --neutral--transparent: rgba(0, 0, 0, 0);

  /* ---- PRIMARY SCALE (lime brand accent) ---- */
  --primary--01: #a4d639;  /* Key Lime — brand accent */
  --primary--02: #6fa51f;  /* hover */
  --primary--03: #588817;  /* pressed */
  --primary--04: #436c0e;  /* deepest accent / links */
  --primary--05: #fbfbf7;  /* warm near-white page background */

  /* ---- SECONDARY SCALES (semantic support) ---- */
  --secondary--green-400: #bbe05e;
  --secondary--green-300: #cde886;
  --secondary--green-200: #dff0b0;
  --secondary--green-100: #ecf6cf;
  --secondary--red-400: #c56b61;
  --secondary--red-300: #d49b94;
  --secondary--red-200: #e8cdc9;
  --secondary--red-100: #f5e2df;
  --secondary--yellow-400: #d6963f;
  --secondary--yellow-300: #e3b679;
  --secondary--yellow-200: #efd6b0;
  --secondary--yellow-100: #f7e5c9;
  --secondary--blue-400: #6e89a3;
  --secondary--blue-300: #9aaec0;
  --secondary--blue-200: #c5d0dc;
  --secondary--blue-100: #e0e6ee;

  /* ---- OVERLAYS ---- */
  --dark-overlay--80: rgba(28, 30, 26, 0.8);
  --dark-overlay--65: rgba(28, 30, 26, 0.65);
  --dark-overlay--50: rgba(28, 30, 26, 0.5);
  --dark-overlay--40: rgba(28, 30, 26, 0.4);
  --white-overlay--80: rgba(255, 255, 255, 0.8);
  --white-overlay--65: rgba(255, 255, 255, 0.65);
  --white-overlay--50: rgba(255, 255, 255, 0.5);
  --white-overlay--40: rgba(255, 255, 255, 0.4);
  --white-overlay--20: rgba(255, 255, 255, 0.2);

  /* ---- NEUTRAL SHADOW TOKENS (charcoal-tinted) ---- */
  --neutral-shadow--01: rgba(28, 30, 26, 0.1);
  --neutral-shadow--02: rgba(28, 30, 26, 0.08);
  --neutral-shadow--03: rgba(28, 30, 26, 0.14);
  --neutral-shadow--04: rgba(28, 30, 26, 0.18);
  --neutral-shadow--05: rgba(28, 30, 26, 0.18);
  --neutral-shadow--06: rgba(28, 30, 26, 0.22);

  /* ---- PRIMARY SHADOW TOKENS (lime-tinted) ---- */
  --primary-shadow--01: rgba(111, 165, 31, 0.14);
  --primary-shadow--02: rgba(111, 165, 31, 0.2);
  --primary-shadow--03: rgba(111, 165, 31, 0.22);
  --primary-shadow--04: rgba(111, 165, 31, 0.24);
  --primary-shadow--05: rgba(111, 165, 31, 0.24);
  --primary-shadow--06: rgba(111, 165, 31, 0.3);

  /* ---- SECONDARY SHADOW TOKENS (status-tinted) ---- */
  --secondary-shadow--01: rgba(185, 74, 63, 0.12);
  --secondary-shadow--02: rgba(185, 74, 63, 0.14);
  --secondary-shadow--03: rgba(185, 74, 63, 0.18);
  --secondary-shadow--04: rgba(185, 74, 63, 0.22);
  --secondary-shadow--05: rgba(185, 74, 63, 0.26);
  --secondary-shadow--06: rgba(185, 74, 63, 0.12);
}
```

### Composed shadow values

```css
/* Neutral elevation */
--shadow-neutral-01: 0 1px 2px 0 var(--neutral-shadow--01);
--shadow-neutral-02: 0 1px 4px 0 var(--neutral-shadow--02);
--shadow-neutral-03: 0 2px 6px 0 var(--neutral-shadow--03);
--shadow-neutral-04: 0 4px 14px 0 var(--neutral-shadow--04);
--shadow-neutral-05: 0 12px 26px 0 var(--neutral-shadow--05);
--shadow-neutral-06: 0 22px 36px 0 var(--neutral-shadow--06);

/* Primary (lime) elevation */
--shadow-primary-01: 0 1px 2px 0 var(--primary-shadow--01);
--shadow-primary-02: 0 1px 4px 0 var(--primary-shadow--02);
--shadow-primary-03: 0 2px 6px 0 var(--primary-shadow--03);
--shadow-primary-04: 0 4px 14px 0 var(--primary-shadow--04);
--shadow-primary-05: 0 12px 16px 0 var(--primary-shadow--05);
--shadow-primary-06: 0 22px 36px 0 var(--primary-shadow--06);
```

### Key structural values

```css
/* Layout */
--container-max-width: 1292px;
--container-side-padding: 24px;
--section-padding-y: 160px;

/* Radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
--radius-pill: 80px;     /* buttons */
--radius-circle: 50%;

/* Buttons */
--button-padding: 12px 24px;
--button-font-size: 18px;
--button-line-height: 1.333em;
--button-font-weight: 500;
--button-letter-spacing: -0.03em;
--button-transition: transform 300ms ease;

/* Typography */
--letter-spacing-base: -0.03em;   /* applies to all display + paragraph styles */
```

---

_KeyLime Systems Website Style Guide v4.0 — Agencia X structure + Citrus & Charcoal palette_
_Build reference for the live Webflow site. Class names, type scale, spacing, and components mirror the production site; color tokens are remapped to the green/charcoal brand palette._
_Pairs with `business-context.md` and `visualTheme.md`._
