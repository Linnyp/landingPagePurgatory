# KeyLime — Webflow Homepage Build Plan (live)

*Last updated: 2026-05-19 (later same day)*

> Working plan for the KeyLime Marketing homepage build in Webflow. Captures everything still outstanding from the original strategy. Anything moved out of this file is done.

---

## Site reference

| Item | Value |
| --- | --- |
| Webflow site name | `Keylime Systems` |
| Site ID | `6a05d81fcffd754a6bd212a8` |
| Template base | Agencia X (Webflow) |
| Live home page | `Home (Sales)` · id `6a05d820cffd754a6bd21311` · slug `/` |
| Variable collection | `default` · id `collection-fb43fd21-f4c2-2cec-afb2-24b7fbe77426` |
| Designer launch link | `https://keylime-systems.design.webflow.com?app=dc8209c65e3ec02254d15275ca056539c89f6d15741893a0adf29ad6f381eb99` |

Source-of-truth context files this plan reads from:

- `business-context.md` — positioning, audience, conversion strategy
- `homepage-copy.md` — locked section-by-section copy
- `site-architecture.md` §5.1 — homepage spec
- `content-strategy.md` §4.1 — homepage content brief
- `styleguide.md` — Citrus & Charcoal tokens, class architecture
- `visualTheme.md` — visual identity supplement

---

## Status snapshot

### Done

- **Pre-flight 1 — Palette swap.** All 50 color variables in the `default` collection remapped from Agencia X's cool navy / multi-hue stock palette to KeyLime Citrus & Charcoal. Neutrals → warm charcoal; Primary → single lime ramp; Secondary tints → muted semantic set; Overlays + Shadows re-tinted. Class architecture, IDs, and CSS names preserved so existing utilities re-skin automatically.
- **Pre-flight 2 — Body background.** Verified `body` `background-color` already binds to `Primary/05` (`variable-b11e3b3f-974c-1fa3-d3ef-0ad3442c2f4b`, value `#FBFBF7`). Carried correctly through the palette swap. No action needed.
- **Pre-flight 3 — Type confirmation.** Verified `body` `font-family` binds to `Main Font` (`variable-b5011639-38eb-f1a9-40a8-4f74407c0bcd`, value `Inter`). `Display 10` / `Display 9` / `Display 5` / `Paragraph Large` carry no font-family override, so all inherit Inter. Letter-spacing `-0.03em` confirmed on every checked style.
- **Pre-flight 5 — Calculator embed strategy.** Decision: **path 2** — port `MissedCallWidget.tsx` to a vanilla-JS Custom Code embed inside the hero. Same decision applies to the standalone `/calculators/missed-call-revenue` page.
- **Pre-flight 6 — Asset folder.** `keylime-homepage` folder created at the site root (id `6a0c69a1afeeb4bcf77c3f2b`). Three image slots (hero composition · home services card · beauty card) still pending operator photography uploads.
- **Pre-flight 7 — Home (Sales) SEO metadata.** Title and description updated to the KeyLime values per `homepage-copy.md`. Open Graph set to copy from SEO. Previous Agencia X stock copy removed.
- **Pre-flight 4 (partial) — Logo Default swapped.** `keylimelogo.svg` (id `6a0c7e07d71c986d8f87e808`) and `keylimelogo-white.svg` (id `6a0c808e3624c5b2b5274995`) uploaded to the `keylime-homepage` folder. The Image element inside the `Logo/Logo Default` master (image element id `0cae9ded-b3e3-5172-45de-ba00acc28851:0cae9ded-b3e3-5172-45de-ba00acc28852`) now references `keylimelogo.svg`. Header V1 + Footer V1 both use Logo Default, so both pick up the KeyLime mark via the single master edit. Logo White swap is deferred — no Logo White instances currently exist on the home page, so the `Logo/Logo White` master can't be entered via `open_component_view` until an instance is created (will happen naturally at Step 11 Final CTA right card).
- **Step P-Header (partial via API).** Header V1 master edits applied:
  - `Home` nav link → text now `How It Works` (via set_text on inner String node of the Link/Default's Link Text propElement).
  - `About` nav link → text now `Solutions`.
  - `Let's talk` CTA buttons (desktop instance `7250804a` + mobile instance `72508094`) → text now `Book a free call`.
  - `Pages` mega-menu (entire ListItem `7fd7` with nested DropdownWrapper + 35 deep links) → removed.
  - eCommerce `CommerceCartWrapper` (`7250804c`) and its `CommerceCartOpenLink` child → removed.
  - Orphan layout spacer `Block 804b` (class `MG Left Auto Tablet`) left behind by the cart removal → removed (was rendering as a visible empty box between Solutions and the CTA).
  - Snapshot confirms clean render: `Logo · How It Works · Solutions · Book a free call`.

### MCP API limitation discovered (Header V1)

`element_tool.set_link` and `element_tool.set_text` only operate on raw `Link` and existing `String` elements — they cannot override **URL props**, **text props on un-overridden new component instances**, or **boolean visibility props** on component instances like `Link/Default` or `Button Primary/Default`. `component_builder` supports inserting Link/Default instances but with no way to bake in prop overrides at insert time. New instances inherit the master's defaults (`Link item` text, `#` URL, both icon visibilities true). For Header V1 this means the following must be done in the Webflow Designer UI:

1. **URL overrides on 4 existing component instances** (text already correct via API):
   - `How It Works` Link/Default → set Link URL to `/how-it-works`
   - `Solutions` Link/Default → set Link URL to `/solutions`
   - `Book a free call` Button Primary (desktop, instance `7250804a`) → set Button Primary - Link to `https://calendly.com/keylime-marketing/discovery-call`
   - `Book a free call` Button Primary (mobile, instance `72508094`) → same Calendly URL
2. **Add 3 nav links** (Industries, Pricing, About) directly in the Designer — duplicating the existing Solutions ListItem and editing each is the fastest path. URLs: `/industries`, `/pricing`, `/about`.

The Calendly URL is a placeholder. When the real Calendly account/event is set up, replace `https://calendly.com/keylime-marketing/discovery-call` everywhere (header CTA × 2 + final CTA card at Step 11 + footer CTA at P-Footer).
- **Local mockup of the homepage hero** at `landing-page-purgatory/generated/keylime-homepage-hero/` — used as the design reference for the Webflow hero re-skin.
- **Standalone missed-call calculator widget** built locally at `landing-page-purgatory/generated/keylime-missed-call-widget/` — three editable inputs (calls/wk · avg job value · close rate) with live recalculation. Ported to Webflow as the `MissedCallWidget` component (see below).
- **`MissedCallWidget` Webflow component built and verified** (component id `575a9821-aa71-43a0-8ef4-ec005d13966d`, group `KeyLime`). Built via `whtml_builder` inserting scoped HTML + CSS into Home V1's Page Wrapper, then `transform_element_to_component`. Self-contained: root class `kl-mcw-1` (Webflow appended `-1` to avoid collision with a leftover style from an earlier failed attempt), all descendant classes consistently renamed, attributes preserved (`data-kl-mcw`, `role="group"`, `aria-label`). Snapshot confirms full Citrus & Charcoal render in the Designer canvas. **Two non-obvious findings worth keeping**: (1) `whtml_builder` *silently* rejects `<input>` and `<label>+<input>` markup — the tool returns `status: success` with a phantom element ID that doesn't persist. Workaround used here: editable fields are `contenteditable="true"` spans with `data-kl-mcw-field` data attributes, and the inline JS reads/writes `textContent` instead of `value`. (2) Inline `<script>` tags inside the HTML *do* persist via `whtml_builder` — they're parsed into a DOM element with `tag: "script"` + String child, and execute on the published site (not in the Designer canvas, which is expected).
- **Hero composition (Figma layout) built and verified** at the bottom of Home V1's Page Wrapper (root element id `ca8c97c6-8913-ed24-99c6-f103d5cc4d96`, classes `kl-hero` → `kl-hero__inner` → `kl-hero__left` + `kl-hero__panel`). Built from a Figma `frame 828px` design: left column has `h1.kl-hero__title` "How Much Are You Losing?" + `p.kl-hero__sub` + two CTAs (lime `kl-hero__cta-primary` "See What You Lose →" and outlined `kl-hero__cta-secondary` "What We Do"); right side is a `kl-hero__panel` (`#A4D639`, 441×509, `border-top-left-radius:100px` to approximate the Figma cutout SVG curve) containing a `kl-hero__phone` div (268×425 at top:84/left:173 inside panel) with the `heroiphone.png` Image bound (asset id `6a0c9c7d2eedbc1aed50c7ae`), and a `kl-hero__widget` div (266px wide at top:178/left:27) hosting a `MissedCallWidget` instance overlapping the iPhone from the left — matches the Figma layering (panel → phone → calculator → left text). Copy is the Figma placeholder ("most this and this is losing money...") — replace with `homepage-copy.md` § Hero before launch. Position values are tuned to the Figma 828px frame; resize/tune for the eventual 1280px+ desktop hero when Step 1 finalizes.

### Component IDs (looked up 2026-05-19, hold for the section work)

| Component | ID |
| --- | --- |
| `Logo/Logo Default` | `0cae9ded-b3e3-5172-45de-ba00acc28851` |
| `Logo/Logo White` | `19edb444-641c-fc2d-424a-bd125486ab93` |
| `Logo/Logo Text Default` | `39b72817-781d-6ebe-ef33-fc2cbc01df27` |
| `Logo/Logo Text White` | `4f6cae9e-dfd4-d881-b20f-7563869dd09a` |
| `Logo/Icon Default` | `9cd98d64-10f6-e1e1-1a95-f8598e46e5d9` |
| `Logo/Icon White` | `d9315e21-9030-6310-30a8-82149357ea85` |
| `Header V1` | `c5a10a2d-1ce6-df65-3882-e8a1991bf291` |
| `Footer V1` | `4ce7d77c-4018-d530-59d0-9a7e57241a43` |
| `Notification Bar/V1` | `98dcd27d-0f62-2729-def8-8d8b5dc86620` |
| `MissedCallWidget` (KeyLime group) | `575a9821-aa71-43a0-8ef4-ec005d13966d` |

### Remaining (everything below)

---

## Pre-flight tasks (still to do)

All seven preflight items resolved or deferred. Section work can begin.

### Deferred — Logo White swap (handled at Step 11)

The `Logo/Logo White` master can only be entered via `open_component_view` on an existing instance, and none exists on the home page (Header V1 + Footer V1 both use Logo Default in the stock Agencia X template). The white variant `keylimelogo-white.svg` (asset id `6a0c808e3624c5b2b5274995`) is already uploaded and ready. When Step 11's final CTA right card is built (dark background → needs Logo White), insert a Logo White instance there, then open its master and run `set_image_asset` with the asset id above.

### Open asset uploads (carried from pre-flight 6)

Three image assets still need to be uploaded into the `keylime-homepage` folder (`6a0c69a1afeeb4bcf77c3f2b`) before sections are considered shippable. The folder is ready; only the assets remain:

| Slot | Use | Status |
| --- | --- | --- |
| Hero composition | Right-side panel of hero section | Pending — interim: lime-tinted warm panel with illustrated phone (from local mockup) |
| Home Services industry card | Industries snapshot, left card | Pending |
| Beauty industry card | Industries snapshot, right card | Pending |

- **Direction (styleguide §photography):** authentic operator photography — real local businesses, real owners and teams, real work environments. No generic stock. Where photography isn't appropriate, custom illustration over iconography, simple iconography over complex illustration.
- **Tool:** drop files into the `keylime-homepage` folder (or upload directly), then reference via `set_image_asset` during section work.

---

## Section-by-section build plan

Order = top-to-bottom render order on the homepage. Donor source = the Webflow page or component to lift the section structure from.

| # | Copy section | Donor source | Edits required |
| --- | --- | --- | --- |
| **Persistent** | Header (sticky) | Component `Header V1` (or `V2`) | Logo = KeyLime mark. Right-side CTA pill = "Book a free call" → Calendly. Nav: How It Works · Solutions · Industries · Pricing · About. |
| **Persistent** | Notification bar | Component `Notification Bar V1` | Hidden at launch. Keep available for future ("New: HVAC field report — read it →"). |
| **1** | Hero (loss-led, calculator entry) | `Home (Sales)` current `Sales Home Hero`; or `Home V1 Hero Grid` if composite illustration reads warmer | H1 (`Display 10`) "See what missed calls are costing your business." · `Paragraph Large` sub · Primary `Button Primary/Large` lime variant "Calculate my missed-call revenue" → calculator · Secondary text link "See how the system works" with arrow · `Paragraph Small` microcopy "No email to start. Yours to keep." · Right-side: embed the calculator widget (per Pre-flight 5) or interim warm-neutral panel composition. |
| **2** | Industries Served bar | `Home V2` or `Services` "Logo Strip" section, repurposed as `Grid 2 Columns` | Eyebrow `Display 1`+`Text Uppercase`+`Text Color Primary 1` "BUILT FOR TWO INDUSTRIES" · Two columns: Home Services + Beauty & Personal Services with bullet lines per copy doc · `Button Text/Default` "Talk to us →" → `/contact`. Collapses `1 Col Tablet`. |
| **3** | Problem Agitation | Text-only block inside `Inner Container` on `BG Neutral 200` section | Section header `Display 9` "This is what's actually going on." · 4 `List Item Bullet` items (lime bullet) · Closing line `Display 5`+`Text Medium` "None of this is a marketing problem. It's a system problem." |
| **4** | How It Works (3-step) | `Home V1` or `Services` Process section · 3× `Our Process Card` in `Grid 3 Columns` | Header `Display 9` "A working system in three steps." · 3 numbered step cards (`List Item Number` lime · `Display 6` heading · `Paragraph Medium` body) · `Button Text Secondary/Default` "See the full process →" → `/how-it-works`. |
| **5** | Three Tiers snapshot | `Packages (without eCommerce)` 3-column `Package Single Card` grid | Header `Display 9` "Three tiers. One monthly price. Month-to-month." · 3 tier cards (Foundation · Growth ★ · Expansion) · Growth gets `Badge Primary/Default Semi Bold` "Most operators start here" — the one lime moment in the block; `Neutral Shadow 04` for elevation · `Paragraph Small` line under "$200 one-time setup. Month-to-month. Move up or down anytime." |
| **6** | Differentiator block | `Home V1` quote/manifesto section — large heading + paragraph | Heading `Display 9`+`Extra Bold` "You run the business. We run the marketing." · Body `Paragraph Large`+`Text Neutral 700` — 70-word block verbatim from copy doc. No CTA — pure pivot moment. |
| **7** | Solutions snapshot | `Services` 3-column `Service Card 01` grid + a 4th specialized lane block | Header `Display 9` "Twelve solutions, grouped by what they do for you." · 3 service cards: Capture every lead · Convert and retain · Reputation and growth · Below: `Border Radius 24px`+`BG Neutral 200` block for "Specialized work (quoted per engagement)" · `Button Text/Default` "See all solutions →" → `/solutions`. |
| **8** | Results / Proof | `Home V1` or `About` 3-up `Why Us Card 01` grid | Header `Display 9` "Built around what actually moves the needle." · 3 guarantee cards (Month-to-month / Live in 4 to 8 weeks / SMS compliance handled) · Below: italic `Paragraph Small`+`Text Neutral 500` "Quantified outcomes coming soon as KeyLime-tier engagements mature." · **No unverified stats** — guarantees stand in as proof. |
| **9** | Industries snapshot (2 cards) | `Services` or `Home V2` 2-column large image+text card grid (`Content Card 06` or `10`) | Header `Display 9` "We build the system around how you actually work." · 2 cards side-by-side · Home Services → `/industries/home-services` · Beauty & Personal Services → `/industries/beauty` · Each: image + italic subline + body + `Button Text Secondary/Default` "See [industry] →". |
| **10** | FAQ snapshot (6 items) | `About` or `Services` `Accordion 01` block | Header `Display 9` "The questions every operator asks first." · 6 Q/A items verbatim from copy doc §10 · `Button Text/Default` "See all FAQs →" → `/faq`. |
| **11** | Final CTA (two-path) | `CTA Grid 2 Col 01` (template ships this shape) | Header `Display 8` "Two ways in." · Left card (`BG Neutral 100`+`Neutral Shadow 03`+`Border Radius 24px`): calculator path with `Button Primary/Large` lime · Right card (`BG Neutral 800`+`Text Neutral 100` — the *one* dark moment on the page, purposeful): Calendly path with `Button Primary/Large White`. |
| **Persistent** | Footer | Component `Footer V1` | Brand column + Company + Tools + Legal + Get Started columns per site-architecture §4.3 · Bottom strip: © KeyLime Marketing 2026 · Privacy · Terms. |

---

## Execution order

Each step is verifiable in isolation. Snapshot the affected element after each step before moving on; publish to staging after the hero is complete for an early read.

1. **Step P-Header** — Header V1 swap (KeyLime nav + Calendly CTA)
2. **Step P-Footer** — Footer V1 swap (column links + brand block)
3. **Step 1 — Hero** re-skin (text swap on existing hero, lime CTA, microcopy, drop in the `MissedCallWidget` component instance on the right; reposition / delete the existing preview instance at the bottom of Page Wrapper at the same time)
4. **Step 2 — Industries Served bar** (repurpose Logo Strip frame OR build `Grid 2 Columns` from styleguide page)
5. **Step 3 — Problem Agitation block**
6. **Step 4 — How It Works 3-step** (clone Process section from Services or Home V1)
7. **Step 5 — Three Tiers snapshot** (clone 3-card grid from Packages without eCommerce, lime badge on Growth)
8. **Step 6 — Differentiator block** (clone editorial heading + paragraph from Home V1)
9. **Step 7 — Solutions snapshot** (clone 3-up service grid from Services, add 4th specialized lane)
10. **Step 8 — Proof / guarantees** (clone 3-up `Why Us Card` grid from About or Home V1)
11. **Step 9 — Industries snapshot 2-card** (clone 2-up from Home V2 / Services)
12. **Step 10 — FAQ accordion** (clone from About / Services)
13. **Step 11 — Final CTA two-path** (chain `CTA Grid 2 Col 01`, swap Logo White master with `keylimelogo-white.svg` once the first Logo White instance is inserted)
14. **Step 12 — Final QA + publish**

---

## Open items / blocking decisions

These don't block the build but will change details mid-build — resolve as early as possible.

1. **Calculator page existence** — Hero CTA targets `/calculators/missed-call-revenue`. That page doesn't exist yet in the Webflow site. Ship as stub or build first. **Recommendation:** build first, in parallel with the homepage section work.
2. **Calendly URL** — Placeholder in use: `https://calendly.com/keylime-marketing/discovery-call`. Need the real Calendly link before launch; swap everywhere (header CTA × 2 + final CTA right card at Step 11 + footer CTA).
3. **Tier pages** — Three Tiers snapshot links to `/tiers/foundation`, `/tiers/growth`, `/tiers/expansion` — none exist. Build first (the existing `Packages` donor pages are right there) or stub.
4. **Industry pages** — `/industries/home-services` and `/industries/beauty` are stubs. Industries snapshot cards link to these.
5. **Hero asset readiness** — Until an authentic operator photo or commissioned illustration is ready, the hero composition uses the warm-neutral placeholder from the local mockup. This is a launch-quality blocker for a clean visual but not a build blocker.
6. **`writing-voice.md` publication** — Not yet published; `homepage-copy.md` is currently the source of truth. If the voice doc ships and changes phrasing, plan a copy sweep before launch.
7. **Stripe / eCommerce template pages** — The Webflow site carries `Checkout`, `Checkout (PayPal)`, `Packages` (eCommerce), `Order Confirmation`, `SKUs Template` from the stock Agencia X eCommerce variant. KeyLime is not eCommerce — these pages are orphaned. Decide whether to delete, archive, or leave hidden.
8. **`Illustration/100–400` color family** — Peach-tinted tokens left untouched in pre-flight 1 because they aren't in styleguide.md §14. Decision pending: leave for stock decorative use, swap to warm-neutral, or delete with the eCommerce pages.
9. **Notification bar** — Out of scope for launch. Confirm hidden, but keep available for future ("New: HVAC field report — read it →").
10. **Homepage now Home V1, not Home (Sales)** — The site's homepage was switched to `Home V1` (page id `6a05d820cffd754a6bd21334`, slug `/`). Pre-flight 7 SEO metadata was applied to the previous `Home (Sales)` page; Home V1 still carries stock Agencia X copy (`title: "Home V1 - Agencia X - Webflow Ecommerce Website Template"`, `description: "Agencia X is the go-to Marketing Agency Webflow Template..."`). Re-apply the KeyLime SEO title/description per `homepage-copy.md` to Home V1 before launch. Pre-flight item P-Header references the prior page id — header swap target on Home V1 is unchanged because Header V1 is a shared component.
11. **Webflow MCP gotchas (build-time, not launch-blocking)** — Documented here so future component builds skip the rediscovery:
    - `whtml_builder` silently rejects `<input>` and `<label>`+`<input>` markup: returns `status: success` with a phantom element id that doesn't persist. Use `contenteditable="true"` spans for editable values instead, or fall back to building each `FormTextInput` via `element_builder` one at a time.
    - `<script>` tags inside `whtml_builder` HTML *do* persist and parse to a DOM-type element with `tag: "script"` and a String child holding the source. Scripts execute on the published site, not in the Designer canvas — so dynamic-only logic shows static initial values in the canvas, which is expected.
    - `whtml_builder` does not accept `<style>` tags inside HTML; pass CSS via the `css` parameter. Webflow appends a numeric suffix to class names that already exist in the site (e.g. `kl-mcw` → `kl-mcw-1`) and renames descendant selectors consistently, so scoped CSS still binds correctly. Worth pre-uniquifying class names if predictable selectors matter.
    - `transform_element_to_component` does preserve the source element's descendants (validated this run); the earlier "stripped children" symptom traced to a prior `whtml_builder` call having silently failed before the transform — the wrapper was actually empty by the time transform ran.

---

## Definition of done (homepage)

- All 11 numbered sections rendered with locked copy from `homepage-copy.md`
- Header and footer rendering with KeyLime branding + Calendly CTA
- All CTAs link to real destinations (no `#` placeholders)
- Calculator widget either embedded in hero OR linked from hero CTA
- SEO metadata applied
- Renders cleanly at Desktop (1280px), Tablet (≤991px), Mobile Landscape (≤767px), Mobile Portrait (≤479px) — using styleguide §13 responsive utilities
- No unverified stats published anywhere
- No "AI-powered" / no "HighLevel" / no "A2P 10DLC" / no citrus puns in copy
- Page passes WCAG 2.1 AA on contrast and focus states
- Published to staging URL for client review before going live

---

## References

- Original plan thread: in-conversation with Claude, 2026-05-17 → 2026-05-18
- Style architecture and tokens: `styleguide.md`
- Copy: `homepage-copy.md`
- IA + nav: `site-architecture.md`
- Content briefs: `content-strategy.md`
- Voice supplement (pending): `writing-voice.md`
- Visual identity supplement: `visualTheme.md`
- Local design reference: `landing-page-purgatory/generated/keylime-homepage-hero/`
- Local calculator widget: `landing-page-purgatory/generated/keylime-missed-call-widget/`
