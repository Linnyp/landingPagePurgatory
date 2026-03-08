# Archetype: Ecommerce

## When to Use
Direct-to-consumer product brands, online retail, subscription boxes, physical goods with a digital storefront, product launch pages. Audience is browsing-aware, visually driven, and comparison-shopping. The page must create desire, establish value, and reduce friction to purchase. Social proof (reviews, UGC, counts) is more powerful here than in any other archetype.

---

## Visual Tone
Product-forward. Large, high-quality imagery is non-negotiable. Clean white or near-white backgrounds let products breathe. An urgency accent color (red, orange, or vibrant yellow) appears on price, sale badges, and countdown elements. The overall feel is curated retail — like a premium product page, not a corporate website.

---

## Typography Patterns

**Preferred pairings (Google Fonts):**

1. **Inter** (headings + body) — clean, neutral; product speaks louder
2. **DM Sans** (headings) + **Inter** (body) — slightly warmer, good for lifestyle brands
3. **Outfit** (headings) + **Inter** (body) — modern, friendly, fashion/beauty adjacent
4. **Raleway** (headings) + **Source Sans 3** (body) — aspirational, elevated lifestyle

**Type behavior:**
- Product name: weight 700–800, display size, prominent
- Price: weight 700–800, large, accent color or near-black; original price struck through if on sale
- "Add to cart" / "Buy now": weight 600+, large button
- Reviews: star display, weight 400 body, reviewer name in muted
- Body/descriptions: weight 400, readable (not too small), benefit-forward sentences

---

## Color Palette Patterns

**Background stacks:**
- Bg: `#ffffff` or `#fafafa`
- Subtle bg: `#f5f5f5` (product card backgrounds)
- Surface: `#ffffff`
- Border: `#e5e5e5` – `#d4d4d4`

**Urgency accent options:**
- Sale red: `#dc2626` / `#b91c1c`
- Vibrant orange: `#ea580c` / `#c2410c`
- Bright yellow: `#ca8a04` / `#a16207`

**Brand accent options (vary by product category):**
- Beauty/skincare: blush pink `#f43f5e`, mauve `#be185d`
- Athletic/outdoor: electric blue `#2563eb`, forest green `#16a34a`
- Food/beverage: warm brown `#92400e`, terracotta `#c2600a`
- Luxury/fashion: black `#0a0a0a`, champagne `#c9a96e`

**Text stack:**
- Primary: `#111111`
- Secondary: `#525252`
- Muted: `#a3a3a3`
- Urgency/sale: `--color-urgency` (separate from primary)

**Sample complete palette — lifestyle DTC:**
```css
--color-bg: #ffffff;
--color-bg-subtle: #f9f9f9;
--color-surface: #ffffff;
--color-border: #e5e5e5;
--color-primary: #111111;
--color-primary-hover: #333333;
--color-urgency: #dc2626;
--color-text: #111111;
--color-text-subtle: #525252;
--color-text-muted: #a3a3a3;
```

---

## Layout Patterns

- **Hero:** Full-bleed product lifestyle photography; headline overlaid or beside image
- **Social proof bar:** Review count + star average + media logos ("As seen in...") immediately below hero
- **Product showcase:** Large product image(s) left; name, price, variant selectors, benefits bullets, CTA right
- **Benefits/features:** 3-column icon + headline + 2-sentence format; NOT spec sheets
- **How it works / Usage:** 3-step numbered process with product imagery
- **Reviews:** Grid of 3–6 cards with star rating, reviewer name, verified badge, photo if available
- **Comparison table:** This product vs. alternatives (columns) — highlight the win
- **FAQ:** 5–7 product-specific questions; return policy, shipping, ingredients/materials always included
- **UGC/Instagram:** Grid of customer photos (or [PLACEHOLDER] grid)
- **CTA:** Sticky bottom bar on mobile with Add to Cart button

**Price anchoring:**
- Show original price struck through next to sale price
- "You save $X" in urgency color
- Annual vs monthly savings if subscription

**Urgency triggers (use honestly):**
- "X in stock" near the CTA
- "Ships in X days if ordered today"
- Social proof counters: "X people viewing right now" — only if real

---

## Component Conventions

- **Buy button:** Full width on mobile, large on desktop, accent/primary color, weight 700 text; slight shadow on hover
- **Star ratings:** Yellow/gold stars; display exact score ("4.8") + count ("(2,341 reviews)")
- **Product images:** Large, clean, multiple angles if possible; Next.js `<Image>` with proper sizing
- **Variant selectors:** Color swatches or pill buttons; selected state clear
- **Sale badge:** Pill or corner ribbon, urgency color, text "SALE" or "% OFF"
- **Review cards:** Stars + quote + name + "Verified Purchase" badge + date
- **Comparison table:** Sticky first column (this product), check/X marks for feature rows

---

## Copy Tone

- Benefits-first, direct, outcome-oriented. "Lose 10 lbs in 30 days" not "A comprehensive wellness solution."
- Headlines create desire: "Your skin in 4 weeks" or name the specific result
- Product descriptions: sensory and specific — smell, texture, feel, before/after
- Avoids: "premium", "luxury" (say why it's worth the price instead), "innovative"
- Uses: numbers, timelines, guarantees, customer results
- CTAs: urgent and clear ("Add to Cart — Ships Free Today", "Claim My Discount", "Start My Trial")
- Review copy: verbatim customer language whenever possible — it outsells polished copy

---

## Anti-Patterns

- No product imagery above the fold
- Hiding price (show it early — mystery pricing increases bounce)
- Small CTA buttons on mobile
- No return/refund policy visible
- Copy focused on features vs. outcomes
- Dark backgrounds for the main product content area
- Fake countdown timers or manufactured scarcity
- Reviews without star ratings, dates, or attribution

---

## Reference Examples (conceptual, not URLs)
- Athletic Greens / AG1 — benefit-forward hero, clinical proof, strong guarantee
- Allbirds — lifestyle photography, minimal copy, material transparency
- Glossier — user-first content, real photography, community-driven social proof
- Casper — comparison tables, objection handling FAQs, clear guarantee
