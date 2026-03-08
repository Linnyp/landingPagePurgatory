# Archetype: Creative Studio

## When to Use
Design agencies, branding studios, architecture firms, photography studios, motion/video production, illustration, independent creative directors, UX/product design consultancies. Audience is visually sophisticated — often themselves designers or design-literate buyers. The page must demonstrate craft, voice, and creative confidence before saying anything else.

---

## Visual Tone
Editorial and deliberate. Asymmetric layouts with purpose. Typography as design element — large, bold, even violent type statements. Severely limited color palette (1–2 colors maximum, often just black/white plus one accent). Portfolio work speaks first; copy is spare and voicey. Nothing looks templated.

---

## Typography Patterns

**Preferred pairings (Google Fonts):**

1. **Bebas Neue** (display headlines) + **Inter** (body) — industrial, poster-style
2. **Syne** (headings) + **DM Sans** (body) — contemporary agency, editorial
3. **Space Grotesk** (headings + body, varying weights) — design-world standard
4. **Fraunces** (display only) + **Plus Jakarta Sans** (body) — organic editorial, boutique studios

**Type behavior:**
- Display headings: very large (6xl–8xl), weight 700–900, tight tracking (-0.03 to -0.05em), used as design objects not just text
- Section labels: font-mono or sans, uppercase, letter-spacing wide, very small, muted
- Body: weight 400, relaxed line-height 1.7–1.8, never more than 55ch wide
- Numbers/indices: large, light-weight (300–400), muted — used as graphic elements

---

## Color Palette Patterns

**Palette philosophy:** Fewer colors, used more boldly. Monochrome is a valid and often superior choice.

**Option A — Black + White + 1 Accent:**
```css
--color-bg: #0a0a0a;           /* near-black */
--color-text: #f5f5f5;
--color-primary: #f5f500;      /* electric yellow accent */
--color-surface: #141414;
--color-border: rgba(255,255,255,0.1);
```

**Option B — White + 1 Accent (lighter studios):**
```css
--color-bg: #f8f7f4;           /* warm white */
--color-text: #0a0a0a;
--color-primary: #e63329;      /* bold red */
--color-surface: #ffffff;
--color-border: #e0ddd8;
```

**Option C — Mid-tone with strong accent:**
```css
--color-bg: #f0ede6;           /* warm cream */
--color-text: #1a1612;
--color-primary: #2d4a8a;      /* deep blue */
--color-surface: #e8e4dc;
--color-border: #d0cbc1;
```

**Accent color philosophy:** The accent appears sparingly — on interactive elements, hover states, and 1–2 visual punctuation points per page. Overuse destroys the effect.

---

## Layout Patterns

- **Hero:** Full viewport statement — large display type + 1 line of context. Portfolio thumbnail or showreel may be the entire hero background.
- **Portfolio grid:** Masonry or magazine-style grid; work shown large; client name + category on hover; typically 4–8 projects
- **Selected work:** Alternating full-bleed sections — large image left, brief project context right (or vice versa); asymmetric vertical alignment
- **About/manifesto:** Long-form editorial voice, generous whitespace, pull quotes in display type
- **Services:** Minimal — a list, not a grid of cards. 4–6 services maximum, 1–2 lines each.
- **Process:** Optional; 3–4 phases described briefly; never clipart or icon-per-step
- **Recognition/press:** Logo bar or text list of publications/awards — understated, not bragged about
- **CTA:** Single contact invitation — "Let's work together" with email or inquiry form. Low pressure.

**Layout signature moves:**
- Overlapping elements (text over image, image bleeding into next section)
- Counter-aligned text (left-aligned in a right-aligned section)
- Very large section numbers as graphical elements (01 / 02 / 03)
- One section that breaks the grid intentionally
- Full-viewport portfolio pieces that demand scroll

---

## Component Conventions

- **Buttons:** Minimal — outlined or text-only with hover underline; avoid filled buttons except for the single primary CTA
- **Nav:** Minimal; often just logo + one CTA + contact link; no megamenus; sometimes hidden until scrolled
- **Portfolio cards:** No borders; image-first; text appears on hover or below with light weight
- **Pull quotes:** Display type, centered or asymmetric; 1–2 sentences maximum
- **Manifesto block:** Full-width, display-sized running type with short sentences, paragraph breaks generous
- **Awards/recognition:** Text list, no icons, understated — "AIGA Design Award, 2024"

---

## Copy Tone

- Voice and confidence over coverage. Fewer words, bolder claims.
- Headlines are statements of worldview, not product descriptions: "Design is a business decision." / "We build things worth remembering."
- Studio "about" copy uses first-person plural, expresses a clear aesthetic or philosophical position
- Avoids: "passionate team", "full-service", "end-to-end solutions", anything that sounds like a staffing agency
- Uses: specific project names/clients (with permission), direct aesthetic claims, craft vocabulary
- CTAs are invitations, not commands: "Start a project", "Let's talk", "See our work"
- No bullet-point features. No FAQs. No pricing tiers.

---

## Anti-Patterns

- Stock photography of any kind
- Icon grids and feature cards
- More than two accent colors
- Templates (if it looks like a Squarespace template, start over)
- Copy that could apply to any studio: "We create compelling digital experiences for forward-thinking brands"
- Pricing pages (creative studios work on custom scope; contact-first)
- Testimonials as cards with avatars — use a single bold client quote if at all
- More than 3 navigation items

---

## Reference Examples (conceptual, not URLs)
- Pentagram.com — portfolio-forward, minimal text, work speaks
- Sagmeister & Walsh — experimental layout, bold personality, work as primary content
- Instrument agency — clean editorial, large type, understated palette
- Collins — story-driven sections, bold typography, limited color
