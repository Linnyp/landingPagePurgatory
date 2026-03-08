# Archetype: Local Business

## When to Use
Restaurants, cafes, salons, spas, gyms, dental offices, veterinary clinics, auto repair shops, home services (plumbing, HVAC, landscaping), photography studios, real estate agents, retail shops. Audience is local, community-aware, and converting quickly. Trust is personal, not institutional. The call to action is usually a phone call, booking, or visit.

---

## Visual Tone
Warm, approachable, unpretentious. Earth tones, warm neutrals, or industry-specific color. Prominent contact information (phone number, address, hours) — these are as important as CTAs. Photography shows real spaces, real people, real products. Nothing looks like a tech startup.

---

## Typography Patterns

**Preferred pairings (Google Fonts):**

1. **DM Sans** (headings + body) — friendly, modern, approachable; works across industries
2. **Nunito** (headings) + **Open Sans** (body) — round and warm, great for food/wellness
3. **Plus Jakarta Sans** (headings) + **Inter** (body) — slightly elevated, good for boutique services
4. **Lato** (headings + body) — neutral, trustworthy, wide industry applicability

**Type behavior:**
- Headings: weight 700, normal letter-spacing (no tight tracking), comfortable line-height 1.2
- Body: weight 400, line-height 1.65, readable paragraph widths
- Contact info (phone, address): weight 600–700, larger than body, easy to scan
- Hours/location: structured as a clear scannable block, not buried in paragraphs

---

## Color Palette Patterns

**Industry-appropriate warmth:**
- Food/hospitality: warm terracottas, burnt oranges, creams — `#c2600a`, `#f5e6d3`, `#3d2b1f`
- Health/wellness/spa: sage greens, soft lavenders, warm whites — `#5a7a5a`, `#e8f0e8`, `#2d4a2d`
- Auto/home services: blues, grays, strong reds — `#1e4d8c`, `#f5f5f5`, `#c0392b`
- Beauty/salon: dusty pinks, champagne, black — `#b08a8a`, `#f5ede8`, `#1a1a1a`

**General warm-neutral stack:**
```css
--color-bg: #fefcf8;           /* warm white */
--color-bg-subtle: #f5f0e8;    /* warm cream */
--color-surface: #ffffff;
--color-border: #e8e0d4;
--color-primary: #c2600a;      /* replace with industry-appropriate */
--color-text: #2d2417;         /* warm near-black */
--color-text-subtle: #6b5a48;
--color-text-muted: #a89888;
```

---

## Layout Patterns

- **Hero:** Large background image or split with prominent image; headline + contact CTA in hero
- **Contact/CTA bar:** Immediately below hero OR sticky header — phone number, address, book-now button
- **Services:** Simple 2 or 3 column grid; no icon overkill; photo-forward for restaurants/beauty
- **About:** Personal — owner story, staff photos, community involvement; "why we started" narrative
- **Gallery:** Photo grid (4–6 images minimum); real photos are more persuasive than illustrations
- **Reviews:** Google/Yelp star ratings with real review excerpts; number of reviews prominently shown
- **Map/Location:** Embedded map or address + hours block; never skip this
- **Booking/Contact form:** Minimal fields; phone number as alternative always present

**Mobile priority:** More local searches happen on mobile than desktop. The phone number must be a `tel:` link. Address must link to Google Maps. Hours must be immediately readable without scrolling.

**Above-fold checklist:**
- [ ] Business name + category immediately clear
- [ ] Phone number or booking link visible
- [ ] Physical location or service area visible
- [ ] Primary CTA visible without scrolling

---

## Component Conventions

- **Buttons:** Filled, rounded (8–12px radius), high contrast. Large tap targets (min 44px height). Phone number styled as a button on mobile.
- **Reviews:** Star rating (display as ★ characters or SVG), reviewer first name, brief quote, source badge (Google/Yelp)
- **Gallery:** CSS grid or masonry; 2-col mobile, 3-col tablet+; hover to expand optional
- **Contact block:** Structured clearly — icon + label + value format:
  - 📞 (phone SVG icon) "Call us" → (555) 867-5309
  - 📍 (location SVG) "Find us" → 123 Main St, City, State
  - 🕐 (clock SVG) "Open" → Mon–Fri: 9am–6pm
- **Staff cards:** Photo + name + title; no elaborate bio; approachable and real

---

## Copy Tone

- Warm, personal, and community-connected. First person is acceptable ("We've served Austin since 2003").
- Headlines are benefit-first and specific: "Fresh Italian in the heart of Oak Park"
- Avoids corporate jargon entirely
- Uses: neighborhood names, years in business, staff names, local references
- CTAs are direct and friendly: "Call us today", "Book your appointment", "Order online", "Get a free estimate"
- Reviews copy: always real quotes with attribution; "Our customers say it best"
- No urgency manufactured from scarcity — trust is built through consistency, not FOMO

---

## Anti-Patterns

- Dark backgrounds (unless a specific restaurant/bar aesthetic)
- Dense feature grids with icons
- Vague corporate copy
- Pricing hidden ("Call for pricing" for services with standard rates)
- No phone number above the fold
- Stock photography (generic smiling people)
- No physical address visible
- Overly technical or formal language

---

## Reference Examples (conceptual, not URLs)
- Local bakery sites — large food photography, warm palette, simple booking
- Neighborhood dental practice — clean whites, trustworthy blue, easy online booking prominent
- Boutique gym — energetic photography, schedule and pricing visible, social community proof
- Home services companies — phone number in header, service area, Google reviews front and center
