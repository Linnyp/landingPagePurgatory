# KeyLime Marketing — Content Strategy

> **Purpose.** Page-by-page content brief for KeyLime Marketing's public website plus an editorial strategy for the blog. Built from `business-context.md`, `personas.md`, `product-marketing-context.md`, `site-architecture.md`, and `Business_Product_Documentation.md`.
>
> **Authority note.** Where `business-context.md` and older context files conflict, `business-context.md` wins (per its own §1). This strategy reflects the §6 conversion-funnel update: the legacy Free Digital Presence Audit is retired and replaced by a layered funnel built around calculators and email-gated field reports. The hero is loss-led, the homepage primary CTA is the missed-call revenue calculator, and Calendly is the high-intent endpoint — not the default everywhere. `site-architecture.md` was written against the older model and will need to be regenerated to match; this strategy doc is the current source of truth on conversion paths until then.
>
> **Posture.** This is an internal strategy doc, so it's structured. The copy that ships from this plan must follow `writing-voice.md` (to be published) — plainspoken Everyman, no jargon, contractions always, no AI-ese, no citrus puns in body copy.
>
> **Three operating principles for every page:**
>
> 1. **One job per page.** Don't ask the visitor to do three things. Ask for one. Make the next thing easy.
> 2. **Lead with the problem, not the platform.** No HighLevel name-drops. No A2P 10DLC unless immediately translated. Always answer "what does this do for me?" before naming what it is.
> 3. **The right conversion for the page.** Calculators on TOFU pages. Field reports on educational pages. Calendly on tier and contact pages. `/quote` on specialized-work pages. Never use one CTA everywhere — it dulls and pattern-matches to every other local agency.

---

## 1. Strategy at a glance

**Primary content goal:** Convert search and referral traffic into either (a) a booked discovery call, or (b) a captured lead in the HighLevel CRM via calculator completion or field report download. The layered funnel sequences these — calculator first (low commitment, high pattern-break), field report second (interested but not ready), discovery call third (high intent, already understand the problem).

**Secondary goal:** Earn long-tail SEO authority for the operator searches that map directly to the system — "missed call text back," "marketing for HVAC," "salon loyalty program," "AI receptionist for small business," "local SEO for service business," "Mindbody alternative," "Housecall Pro stack cost" — and start ranking before paid acquisition has to carry the funnel.

**Tertiary goal:** Build the editorial library that the SEO Foundation service inside Growth and Expansion tiers can reference. The KeyLime blog is also proof-of-concept that the SEO service works.

**Audience reality check.** The reader is busy, skeptical, and has been pitched by agencies and SaaS sales reps before. They're not looking to be impressed. They're not looking to learn a platform. They're looking for someone who'll just run the marketing so they can run the business. Every page should respect that — short copy, plain words, real proof, no "let me check with the team."

**What we won't do:**

- No technical name-dropping. Nobody hires KeyLime because we use HighLevel. They hire us because their phone stops ringing.
- No urgency manipulation. No "don't miss out," no countdown timers, no "limited spots."
- No three-question hooks ("Tired of missed calls? Drowning in tools? Stuck on Google?"). One is fine. Three is malpractice.
- No AI/jargon talk on the homepage hero. AI is how we work, not what we sell.
- No "Contact us for pricing" on tier pages. Tier prices are published. Specialized work routes to `/quote`. Don't blur the line.
- No fake transparency. We're transparent about tier prices and add-on prices. We're honest that custom-scoped work is quoted. We don't pretend everything has a public number.
- **No "Free Digital Presence Audit" language.** It's been retired. Audit-style CTAs ("get a free audit," "we'll review your digital presence") pattern-match to every other local agency. Replaced by the calculator and field report funnel. If you see audit copy anywhere in working drafts, kill it.
- No citrus puns in body copy. The brand is named KeyLime. The reader knows.

---

## 2. The layered conversion funnel

Three lead-magnet types, each tied to a stage of intent. Every page maps to one of them as its primary CTA.

| Stage | Mechanism | Where it lives | What gets captured | Where it routes |
|-------|-----------|----------------|--------------------|-----------------|
| **TOFU pattern-break** | Missed-call revenue calculator | Homepage hero, industry pages (industry-tuned variants), embedded on solution pages where relevant | Three inputs → result. Email gate on the result screen for the saved PDF + benchmarks. | Result page CTA: "Book a discovery call" (Calendly) or "See pricing" |
| **MOFU comparison** | Stack cost calculator | Comparison pages ("KeyLime + Mindbody," "KeyLime + Housecall Pro," "KeyLime + Vagaro," etc.) | Current stack tally → KeyLime comparison. Email gate on the saved comparison PDF. | Result page CTA: "See which tier replaces your stack" or "Book a call" |
| **MOFU education** | Field reports (industry-specific, opinionated, 5–10 pages) | `/reports/[slug]` landing pages and as CTAs from blog posts | Email gate → PDF + nurture sequence enrollment | Nurture sequence routes to Calendly over 4–6 weeks |
| **BOFU high intent** | Discovery call (Calendly) | Embedded on tier pages, About, Onboarding, Contact, FAQ; persistent in header and footer | 30-minute call booking | Sales call → tier scope or `/quote` for custom work |
| **BOFU specialized work** | Quote form | `/quote`; inbound from `/solutions/seo`, `/solutions/ads`, `/solutions/websites`, Expansion tier page | Project brief → real quote within 1–2 business days | Internal — routed to founder for scope and pricing |

**Why this shape over the old single-funnel-to-audit model:**

- The audit CTA pattern-matched to every other local agency and underperformed. The calculator pattern-breaks because it makes the prospect quantify their own problem before KeyLime says a word about itself.
- The field report path captures the "interested but not ready" reader without forcing them onto a call.
- Reserving Calendly for high-intent pages keeps the discovery call signal-rich. Prospects who get to a tier page or About have already understood the problem.
- Comparison pages become the highest-converting search surface for "Mindbody alternative" / "Housecall Pro alternative" intent.

**Page-by-page primary CTA map (canonical):**

| Page                                            | Primary CTA                                | Secondary                                  |
| ----------------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| Homepage hero                                   | Missed-call revenue calculator             | "See how the system works" (text link to `/how-it-works`) |
| Tier pages (Foundation / Growth / Expansion)    | "Book a discovery call" (Calendly)         | Calculator link                            |
| Solutions hub (`/solutions`)                    | Route to relevant solution or tier page    | Calculator link                            |
| Platform solution pages                         | "Book a discovery call" (Calendly)         | Industry calculator or field report        |
| Specialized solution pages (SEO / Ads / Websites) | "Get a quote" (`/quote`)                 | Calendly                                   |
| Industries hub (`/industries`)                  | Route to vertical page                     | —                                          |
| Industry pages (Home Services / Beauty)         | Industry-matched calculator                | "See pricing" link                         |
| Comparison pages (`/compare/[stack]`)           | "Calculate your stack cost"                | "Book a call"                              |
| Field report pages (`/reports/[slug]`)          | "Download the report" (email-gated)        | Newsletter signup                          |
| About                                           | Calendly                                   | Calculator link                            |
| Onboarding                                      | Calendly                                   | Calculator link                            |
| Case Studies hub + individual                   | Calendly                                   | Tier recommendation                        |
| `/quote`                                        | Submit form                                | —                                          |
| FAQ                                             | Calendly                                   | Calculator or `/quote` (context-dependent) |
| Blog posts (TOFU)                               | Relevant field report                      | Calculator (if topic-relevant)             |
| Blog posts (MOFU)                               | Calculator or `/quote` (topic-dependent)   | Calendly                                   |
| Blog posts (BOFU)                               | Calendly or `/quote`                       | —                                          |
| Contact                                         | Calendly                                   | Form submission                            |

---

## 3. Persona shorthand (for cross-reference)

| Code        | Persona                                  | Primary need                                                              | Page priorities                                                              |
| ----------- | ---------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Mike**    | Scaling Contractor (HVAC/plumbing)       | Stop missing-call leaks, get found on Google, proof, no-BS communication  | Homepage, `/calculators/missed-call-revenue` (home services variant), `/tiers/growth`, `/solutions/speed-to-lead`, `/industries/home-services`, `/compare/housecall-pro`, `/pricing` |
| **Lena**    | Multi-Station Salon Owner (med spa, lash) | Consolidate the SaaS sprawl, cut no-shows, drive retention                | `/industries/beauty`, `/compare/mindbody`, `/compare/vagaro`, `/tiers/growth`, `/tiers/expansion`, `/solutions/rewards`, `/pricing` |
| **James**   | Legacy Operator (2nd-gen roofing)        | Brand protection, full-service handoff, structured deliverables           | `/about`, `/tiers/expansion`, `/onboarding`, `/case-studies`, `/solutions/websites`, `/reports/[legacy-operator-relevant]` |
| **Sofia**   | Solo Startup                             | Affordable pro presence, simple system, no learning curve                 | `/tiers/foundation`, `/pricing`, `/industries/[either]`, `/calculators/missed-call-revenue` |
| **Rachel**  | Office Manager Champion                  | Tool consolidation, internal ROI proof, short evaluation cycle            | `/compare/[their-stack]`, `/pricing`, `/tiers/growth`, `/faq`, `/solutions` (catalog), `/reports/[role-relevant]` |
| **Marcus**  | Multi-Location Operator                  | Per-location replication, rolled-up reporting, scope flexibility          | `/tiers/expansion`, `/quote`, `/onboarding`, `/case-studies` (later), `/reports/multi-location` |

---

## 4. Page-by-page content briefs

### 4.1 Homepage (/)

**Job-to-be-done.** A home services or beauty operator lands here from search, an ad, or a referral. In 30 seconds they need to (a) feel that this site understands their business, and (b) take a low-commitment action that quantifies their own problem. The hero is the pattern-break: every other local agency would put "Get a Free Audit" or "Schedule a Call" there. KeyLime puts a calculator there. The visitor quantifies missed-call revenue loss before KeyLime says a word about itself.

**Personas.** Mike (primary home services), Lena (primary beauty), James, Marcus. Designed for the established operator first. Sofia and Rachel will read it but it's not built around them.

**Conversion goals.** Primary: enter the missed-call revenue calculator. Secondary: click through to `/how-it-works` for system context. Tertiary: tier pages, industry pages, or `/quote` for visitors who self-identify as needing custom specialized work.

**Hero direction (loss-led):**

- **H1:** See what missed calls are costing your business.
- **Sub:** Local home services and beauty operators lose thousands a month to leads that called the next business on the list. Punch in three numbers — get yours in 60 seconds.
- **Primary button:** Calculate my missed-call revenue
- **Secondary text link:** See how the system works → `/how-it-works`

Why this framing: loss aversion is sharper than gain framing for the established-operator profile that's been burned by past agencies. The "three numbers / 60 seconds" guardrail defuses the "this is going to be a sales trap" reflex. The button is action-specific, not generic. Authentic operator photography (real shop, real job site, real owner) — not stock.

**Key messages to land below the fold (in order of priority):**

1. A managed marketing system for local service businesses — one team, one platform, one monthly price.
2. Built for two industries we know inside out: home services and beauty.
3. Three tiers — Foundation, Growth, Expansion — month-to-month, right-sized to where the business is.
4. We run the system. You use the parts you need. No platform to learn.
5. A working system within 4–8 weeks of kickoff, with a written gameplan and a single point of contact.

**Proof points to use (active, ready to publish):**

- Free discovery call — no commitment.
- Month-to-month on all three tiers.
- Setup fee covers full onboarding through go-live.
- A2P 10DLC compliance and Twilio infrastructure handled per account — translate to "we handle the SMS compliance stuff so you don't have to."
- Numeric proof points (no-show reduction, missed-call recovery, review velocity) are placeholders only until verified — do not publish unverified stats.

**Section order:**

1. **Hero** — Loss-led H1 + sub + calculator entry + secondary text link.
2. **Industries served bar** — Two-column callout: Home Services / Beauty & Personal Services. Reads as "we work with people like you."
3. **Problem agitation** — Three or four short bullets in customer language. "You miss a call, the next business gets the job." "Your reviews are scattered across five places." "You're paying for six SaaS tools that don't talk to each other." Land it without rhetorical-question stacking.
4. **How it works in three steps** — Pick a tier → We onboard you in 4–8 weeks → The system runs (and we run the system). Link to `/how-it-works` for the deeper version.
5. **The three tiers** — Snapshot of Foundation / Growth / Expansion with prices. Growth gets a "Most popular" badge. One outcome line per tier. CTA links to each tier page.
6. **The differentiator block** — "You run the business. We run the marketing." 60–80 words. The single most important block on the page.
7. **Solutions snapshot** — Compact visual or 3-grouped block: Capture every lead · Convert and retain · Reputation and growth. Plus a "Specialized work" line for SEO / Ads / Websites. Links to `/solutions`.
8. **Results / proof** — Quote row from a real client (once collected) or guarantees fallback (free discovery call, month-to-month, setup fee covers full onboarding). Use only verified numbers.
9. **Industries snapshot** — Two cards: Home Services and Beauty & Personal Services, each with 3 vertical examples (HVAC, plumbing, roofing / salons, med spas, lash studios). Links to industry pages.
10. **FAQ** — 6 items. Cost, tier movement, contracts, timelines, "how is this different from an agency / a SaaS tool," what happens after the call.
11. **Final CTA** — Warm-neutral section. Two-path: "Run the numbers first" (back to calculator) or "Skip ahead — book a free call." Both visible.
12. **Footer.**

**SEO keywords.**

- Primary: `managed marketing for local service business`
- Secondary: `marketing system small business`, `all-in-one marketing for service business`, `marketing for home services`, `salon marketing software`
- Title: `KeyLime Marketing — One Managed Marketing System for Local Service Businesses`
- Meta description: managed marketing system + three tiers + month-to-month + home services and beauty, under 155 chars.

**Voice notes.** This is the page where the Everyman tone matters most. Hemingway brevity in the hero. Vonnegut warmth in the differentiator. Twain front-porch cadence in the FAQ. No "comprehensive solutions." No "we partner with you on your journey." No "AI-powered." No HighLevel mention anywhere on the page. Test: would Mike or Lena actually read past the hero without rolling their eyes?

**Internal linking priorities.**

- Hero CTA → `/calculators/missed-call-revenue`
- Hero secondary → `/how-it-works`
- Three tiers section → `/tiers/foundation`, `/tiers/growth` (featured), `/tiers/expansion`
- Solutions snapshot → `/solutions` (and 2–3 anchor links into specific solution pages)
- Industries snapshot → `/industries/home-services`, `/industries/beauty`
- Differentiator block → `/about`
- How it works → `/how-it-works`
- FAQ → `/faq`
- Final CTA → calculator + Calendly

---

### 4.2 How It Works (/how-it-works)

**Job-to-be-done.** Plain-language explainer for the visitor who wants to know "what does 'managed marketing system' actually mean?" before clicking into a tier. Defuses the implicit "is this a SaaS or an agency" question by answering it directly — it's both, here's how. Often the second page a homepage visitor opens after running the calculator.

**Personas.** Mike (skeptical), Rachel (researching internally), Sofia (first-time buyer), James (slow due diligence).

**Conversion goals.** Primary: click through to `/pricing`. Secondary: Calendly. Tertiary: calculator (for the visitor who skipped past it from the homepage).

**Key messages:**

- One team, one platform, one monthly price.
- You pick a tier. We onboard you in 4–8 weeks. The system runs. We run the system.
- You use what you need (inbox, CRM, reports). We handle what you don't want to think about (workflows, integrations, compliance).
- Specialized work (full SEO programs, paid ads, custom websites) is layered on when you're ready — quoted based on scope.
- You're not buying software. You're buying a working marketing system run for you.

**Section order:**

1. **Hero** — "One team. One platform. One monthly price."
2. **The three steps** — Pick a tier. We onboard in 4–8 weeks. The system runs. Each step gets a short paragraph and a visual cue.
3. **What's on every account** — Twilio number, A2P 10DLC compliance, HighLevel sub-account, baseline workflows for your industry. Each translated to outcome language ("a business phone number for texts and call routing"; "the carrier-required setup that lets your business send texts without getting blocked — we handle it").
4. **What you actually use** — Unified Inbox, CRM, reports. That's it. No platform to learn.
5. **What we do behind the scenes** — Configure the workflows, set up the automations, integrate with your existing tools (Mindbody, ServiceTitan, Housecall Pro), tune the system, deliver the monthly report.
6. **When specialized work comes in** — Plain-language: most clients start with their tier and add specialized work (Ads, full SEO, custom website) once the foundation is producing. Quoted, not templated.
7. **Final CTA** — "Ready to pick a tier?" → `/pricing`. Or "Book a free call and we'll help you pick." → Calendly. Plus calculator link for visitors still scoping the problem.

**SEO keywords.**

- Primary: `how managed marketing works`
- Secondary: `marketing as a service vs agency`, `managed marketing platform`, `what is a managed marketing system`

**Voice notes.** This is the page where the third-option framing matters most. Don't compare directly to competitors by name. Show, don't tell — the structure of the page itself ("pick a tier → onboard → it runs") is the differentiator vs. open-ended retainer agency or self-serve SaaS.

**Internal linking priorities.**

- `/pricing` (primary)
- `/onboarding` (deeper dive on the 4–8 week process)
- `/solutions` (for the visitor who wants the full catalog)
- Calendly + calculator (final CTA)

---

### 4.3 Pricing (/pricing)

**Job-to-be-done.** Be the decision page. Comparison table across all three tiers, clear callout for custom-quoted specialized work, and the pricing FAQ. This is the page Rachel champions internally — she needs to be able to print/share it. It's also the page Mike scans before deciding whether to book the call.

**Personas.** All six. Mike and Lena will validate. Rachel will compare line by line. Sofia will look for the lowest entry. James and Marcus will model the annual on Expansion.

**Conversion goals.** Primary: route to the right tier page (`/tiers/[slug]`). Secondary: Calendly. Tertiary: `/quote` for visitors scoping custom specialized work.

**Key messages:**

- Three tiers. One monthly price each. Pick the one that fits today — you can move up or down anytime.
- $200 one-time setup fee per engagement. That's it for upfront costs.
- Month-to-month on all three tiers.
- Custom-scoped specialized work (full SEO program, ads management, custom Webflow build) is quoted based on the actual scope — not from a template.
- Any solution not in your tier is available as an add-on.

**Section order:**

1. **Hero** — "Three tiers. One monthly price. Move up or down anytime." Plus the setup fee disclosure right under it.
2. **Tier comparison table** — All three tiers across all 16 solutions, setup fee, contract terms. Growth column gets "Most popular" treatment and prominent CTA.
3. **What's on every tier** — A short callout below the table: Twilio number, A2P 10DLC compliance, HighLevel sub-account, written gameplan, 4–8 week onboarding, single point of contact, ongoing platform management.
4. **Custom-quoted specialized work** — Standalone block: "Need a full SEO program, ads management, or a custom website? We quote those based on scope, not from a template." Brief list of what's in this category. Primary CTA links to `/quote`.
5. **Add-on solutions** — "Anything not in your tier can be added on at a published price." Brief explainer + link to `/solutions` for the full catalog.
6. **Tier moves** — One-paragraph plain-language block. "Start at Foundation, move to Growth in three months when business grows, drop back if conditions change. Your sub-account, contacts, and configured workflows carry across."
7. **Pricing FAQ** — 6–8 questions. Top: "What's the setup fee for?", "Can I cancel anytime?", "How does an add-on work?", "When would I need a custom quote?", "What if my tier doesn't fit anymore?", "Do you replace my existing booking/CRM software?"
8. **Final CTA** — "Not sure which tier? Book a free call. We'll help you pick." → Calendly.

**SEO keywords.**

- Primary: `small business marketing pricing`
- Secondary: `marketing packages for service business`, `marketing tiers`, `marketing pricing for HVAC`, `salon marketing pricing`
- Long-tail: `how much does managed marketing cost`, `marketing pricing for small business`, `what does marketing for a salon cost`

**Voice notes.** Numbers everywhere. No softening adjectives. The comparison table is the message — let it breathe. The custom-quote callout matters as much as the tier prices: it's where the brand differentiation on "fair pricing" lives. Don't apologize for the quote-based model; explain *why* it produces a better number.

**Internal linking priorities.**

- All three tier pages (each tier column links to its dedicated page)
- `/quote` (specialized-work callout)
- `/solutions` (add-on explainer)
- Calendly (final CTA)
- `/faq` (pricing-and-contract questions)

---

### 4.4 Tier Pages (/tiers/foundation, /tiers/growth, /tiers/expansion)

**Job-to-be-done (shared).** Convert a tier-curious visitor into a booked call. Each page answers: "What do I get at this tier? Is this the right tier for my business? What does it cost? What happens next?"

**Personas (by tier):**

- Foundation: Sofia (primary), early-stage Lena, early-stage Mike, Rachel's owner before she champions Growth.
- Growth: Mike (primary), Lena (primary), Rachel's recommended landing tier, Marcus's per-location starting point if testing.
- Expansion: James (primary), Marcus (primary), Lena's scale-up tier, Mike once Growth is producing and ads/SEO/custom site are the next layer.

**Conversion goals (shared).** Primary: Calendly. Secondary: calculator link (for visitors still scoping). Tertiary: `/quote` on Growth and Expansion (for visitors planning to add custom specialized work).

**Shared template:**

1. **Hero** — Tier name, price, one-line value prop, primary CTA (`Book a discovery call`). Authentic operator photography aligned to the tier's typical persona (Sofia-type solo for Foundation; multi-truck contractor or multi-station salon for Growth; legacy operator or multi-location for Expansion).
2. **Who this tier is for** — Persona description in plain language ("You're a new operator just past your LLC milestone..." / "You're an established home services owner doing $500K to $3M..." / "You're running an established or multi-location operation...").
3. **Everything that's included** — Full list of platform solutions + specialized work (if applicable) + infrastructure (Twilio, A2P 10DLC, HighLevel sub-account, baseline workflows). Each item with a one-line outcome translation ("Lead Pipeline — every lead, contact, and customer in one place, organized the way your business actually works").
4. **What you can add on** — Published-price add-ons relevant to this tier. Brief description per add-on.
5. **What you'd quote for separately** — Custom-scoped specialized work available on top of this tier (especially on Growth and Expansion). Links to `/quote`.
6. **Onboarding timeline** — Tier-specific notes on the 4–8 week onboarding process.
7. **Tier-specific FAQ** — 3–5 questions ("Is this enough if I'm just starting?", "How fast can I see results?", "What's the difference between this and Growth/Expansion?", "Can I keep my existing booking software?").
8. **Final CTA** — "Book a free call to talk through whether [tier] fits your business." Plus a "View comparison →" link back to `/pricing`.

**Tier-specific notes:**

#### `/tiers/foundation` ($99/mo)

- **Hero copy direction:** "A real working marketing system for $99 a month." Emphasis on "real working" — not stripped-down, not a demo.
- **Who it's for:** Sofia and her variants. Make explicit that this is the right starting point for solo or pre-scale operators.
- **What's included:** Site-builder website (1 landing page), Lead Pipeline (CRM), Reputation Management, Unified Inbox, Twilio + A2P 10DLC + HighLevel sub-account.
- **Add-on emphasis:** Voice Agents and one-time Database Reactivation campaigns are the natural Foundation add-ons.
- **"When to move up" note:** Plain-language guidance on the Growth threshold ("when you're missing calls because you're hands-on with a client, when you're getting form submissions you can't respond to fast enough, when you've outgrown a one-page site").
- **SEO keywords:** `affordable marketing for small business`, `starter marketing package`, `$99 marketing for small business`, `marketing for new businesses`.

#### `/tiers/growth` ($195/mo) — flagship tier

- **Hero copy direction:** "The full lead-generation engine, run for you." Emphasis on the system producing leads, not the buyer operating it.
- **Who it's for:** Mike, Lena, the modal serious operator. Make the "this is where most operators start" framing explicit.
- **What's included:** Foundation plus Speed-to-Lead, Booking, Chatbots, Reminders, Birthday Campaigns, SEO Foundation, 3–5 page builder site.
- **Calculator nudge:** Below the hero, a "Not sure if Growth is right? See what missed calls are costing you first →" text link to `/calculators/missed-call-revenue`. The calculator does its own qualification work.
- **Add-on emphasis:** Voice Agents (after-hours capture), Lead Nurture (follow-up sequences), Rewards (for beauty operators).
- **Custom-quote callout:** Strong link to `/quote` for "want to add Google or Meta Ads management on top of Growth? Get a quote." This is the most common scope-up moment.
- **SEO keywords:** `marketing package for service businesses`, `growth marketing for HVAC`, `salon marketing software package`, `lead generation system for small business`, `missed call text back software`.

#### `/tiers/expansion` ($495/mo)

- **Hero copy direction:** "The full customer lifecycle system." Emphasis on retention, lifetime value, and digital footprint matching the quality of the business.
- **Who it's for:** James (legacy with ambition), Lena's scale-up, Marcus's per-location deployment. Make the "ambitious operator" framing explicit.
- **What's included:** Growth plus Lead Nurture, Rewards, GBP management, quarterly Database Reactivation, custom Webflow site (5–10 pages), monthly blog content.
- **Add-on emphasis:** Voice Agents, additional Database Reactivation cadence, additional automations.
- **Custom-quote callout:** Multi-strong link to `/quote` for: full SEO program beyond Foundation, Google or Meta Ads management, custom Webflow scope beyond included pages, large bespoke workflow builds. This is the tier where custom work most often gets layered on.
- **Multi-location callout for Marcus:** "Running multiple locations? Each location can be on Expansion with rolled-up reporting. Let's scope it." → `/quote`.
- **SEO keywords:** `full service marketing for local business`, `custom website + marketing`, `full marketing system for service business`, `multi-location marketing`.

**Voice notes (shared).** Lead with the outcome ("Your phones ring faster, your no-shows drop, your reviews come in steadier"), then the inclusions, then the price. Don't bury the price — but don't lead with it either. The reader is buying a system, not a price.

**Internal linking priorities (shared).**

- `/pricing` (back to comparison)
- `/solutions/[relevant]` (deep dives on the tier's flagship solutions)
- `/industries/[relevant]` (vertical specificity)
- `/onboarding` (the 4–8 week process)
- Calendly (final CTA)
- Calculator link (secondary CTA, for visitors still scoping)
- `/quote` (Growth and Expansion only — custom specialized work)

---

### 4.5 Solutions Hub (/solutions)

**Job-to-be-done.** The deep-researcher hub. Answer the visitor's question "what exactly does KeyLime do?" — organized by pain point, not by product taxonomy. Route them to either a tier page (if they're shopping for a tier) or a specific solution page (if they're trying to fix one specific problem).

**Personas.** Rachel (deep researcher), analytical buyers, Mike (looking for the specific thing — "missed call text back" — by name).

**Conversion goals.** Primary: click through to a tier page or solution page. Secondary: Calendly.

**Key messages:**

- Twelve platform solutions. Three specialized services. One managed system.
- Some are in every tier. Some are tier-specific. Anything not in your tier can be added on.
- Don't shop a checklist of features. Pick a tier and let the system work.

**Section order:**

1. **Hero** — "Twelve platform solutions. Three specialized services. One managed system."
2. **Group A — Capture every lead** — Speed-to-Lead (linked, primary card), Booking (anchor section), Chatbots (anchor), Voice Agents (linked).
3. **Group B — Convert and retain** — Lead Pipeline / CRM (anchor), Lead Nurture (linked), Appointment Reminders (anchor), Database Reactivation (linked).
4. **Group C — Reputation and growth** — Reputation Management (linked, primary card), Unified Inbox (anchor), Birthday Campaigns (anchor), Rewards (linked).
5. **Group D — Specialized work (custom-quoted)** — SEO (linked), Google & Meta Ads (linked), Custom Websites (linked). Distinct visual treatment to signal "this is the custom-scoped category."
6. **Tier inclusion table** — Compact visual showing which solutions are in which tier (snapshot of the `/pricing` table, narrower scope).
7. **CTA** — "Not sure which tier fits? See the comparison →" `/pricing`. Plus Calendly.

**SEO keywords.**

- Primary: `marketing solutions for service business`
- Secondary: `marketing automation for service business`, `marketing tools for salons`, `marketing tools for home services`
- Long-tail: `what is missed call text back`, `what is a managed marketing system`

**Voice notes.** Light page. Few words per card. Visual breathing room. Pain-point headers ("Capture every lead", "Convert and retain", "Reputation and growth") do most of the work — the cards stay short.

**Internal linking priorities.**

- 6 linked platform solutions + 3 specialized solution pages
- `/pricing` (tier inclusion question)
- Each tier page (relevant solution group)
- Calendly (final CTA)

---

### 4.6 Platform Solution Pages (/solutions/[slug] — Speed-to-Lead, Reputation Management, Lead Nurture, Voice Agents, Database Reactivation, Rewards)

**Job-to-be-done (shared).** For visitors who searched for a specific solution (often by problem-language — "missed call text back," "salon loyalty program," "AI receptionist for small business"), translate that solution into the KeyLime context: what it does, which tiers include it, how much it costs.

**Personas (by solution):**

| Solution | Primary personas |
|----------|------------------|
| Speed-to-Lead | Mike, Rachel, every home services operator |
| Reputation Management | Mike, Lena, every service operator (every tier inclusion) |
| Lead Nurture | Mike (long-cycle quotes), Lena (med spa consults), Rachel |
| Voice Agents | Mike (after-hours), evening-business operators, Marcus (per-location after-hours) |
| Database Reactivation | Lena (lapsed clients), Mike (old quotes), Marcus |
| Rewards | Lena (primary), beauty operators broadly |

**Conversion goals (shared).** Primary: Calendly. Secondary: industry-matched calculator (Speed-to-Lead, Voice Agents) or relevant field report. Tertiary: route to the most relevant tier page.

**Shared template:**

1. **Hero** — Solution name as headline, one-line outcome ("Never miss another lead while you're on the job" for Speed-to-Lead; "Reviews that come in steadily, without anyone on your team having to ask" for Reputation Management). Primary CTA.
2. **What it does** — Plain-language explanation. Not "automated SMS workflows triggered by missed-call event detection" — "if you can't pick up, the caller automatically gets a text from your business — they get an answer fast, you don't lose the job."
3. **The problem it solves** — In operator language, drawn from `personas.md` quotes. Reference the specific personas where useful.
4. **How it works in practice** — Concrete example for both target industries. Home services version + beauty version (when relevant). Show, don't tell.
5. **Which tiers include it** — Compact callout showing inclusion across Foundation / Growth / Expansion (or "available as a published add-on" if not in any tier).
6. **Pricing** — Included in tier $X. Available as add-on at $Y. Or "quoted per engagement" for specialized work variants.
7. **Related solutions** — 2–3 cross-links to complementary solution pages.
8. **Solution-specific FAQ** — 3–5 questions tuned to the solution.
9. **Final CTA** — Calendly + tier-page link.

**Page-by-page notes:**

#### `/solutions/speed-to-lead`

- **Hero direction:** "Never miss another lead while you're on the job." Or "If you can't pick up, your business does."
- **The pain point block:** Use Mike's quote: "I miss a call and the next one on the Google list gets the job. I don't even know how much business I'm losing."
- **Embedded calculator entry:** Mid-page block — "Want to see what missed calls are actually costing you? Run the numbers →" links to `/calculators/missed-call-revenue`. This is the highest-fit page for the calculator besides the homepage.
- **Concrete example (home services):** A walk-through of a Mike-type day — phone rings, on a job, can't answer. The text fires automatically. The lead replies. Booked.
- **Concrete example (beauty):** Lena working a client, salon phone rings, text fires, lead books online via the link.
- **Tier inclusion:** Growth and Expansion (+ Foundation can add it as an add-on if priced).
- **SEO keywords:** `missed call text back`, `automated text back for missed calls`, `missed call automation`, `never miss a lead service business`, `missed call SMS auto reply`.

#### `/solutions/reputation-management`

- **Hero direction:** Use the "most of your next customers are reading your reviews before they call you" framing as the opening section (adapted from writing-voice references).
- **The pain point block:** Stale reviews. 60 reviews when competitors have 300. Front-desk forgetting to ask. The cost of letting Google reflect a worse version of the business than reality.
- **What's included:** Automated review requests after job completion / appointment, review monitoring across Google and Facebook, sentiment-aware response handling, ongoing optimization of the review flow.
- **Tier inclusion:** All three tiers — emphasize this is the foundational layer.
- **Secondary CTA:** "The real ROI of review automation in beauty" field report → `/reports/reviews-roi-beauty` (when published). Same field report works for home services with appropriate variant.
- **SEO keywords:** `reputation management for small business`, `Google review automation`, `review request software`, `automated review requests`, `Birdeye alternative`, `Podium alternative`.

#### `/solutions/lead-nurture`

- **Hero direction:** "Cold leads stay warm. Quotes that didn't close get followed up on. Old customers come back." Emphasis on the work the system does that the owner doesn't have time for.
- **The pain point block:** Quotes sent two weeks ago and never followed up on. Cold leads that needed three more touches. The lifetime-value math that keeps slipping.
- **What's included:** Multi-touchpoint follow-up sequences across SMS and email. Quote follow-ups, no-show recovery, cold-lead nurture, long-cycle decision support.
- **Tier inclusion:** Expansion (included). Foundation and Growth (available as add-on).
- **SEO keywords:** `lead nurture automation for small business`, `follow up automation`, `lead nurturing sequence`, `SMS follow up service business`, `quote follow up automation`.

#### `/solutions/voice-agents`

- **Hero direction:** "An AI that picks up calls after hours, captures the lead, and books the appointment." Lead with the outcome, name the AI plainly.
- **The pain point block:** Evening and weekend leads going to voicemail or competitors. Quoting Mike or a similar persona: "Half my calls come in after 5pm. By the time I call back the next morning, they've already booked someone else."
- **Embedded calculator entry:** After the pain block — "After-hours calls cost more than missed daytime calls. See yours →" links to `/calculators/missed-call-revenue` (or a Voice-Agents-tuned variant if built).
- **What's included:** AI voice agents pick up calls after hours, capture lead information, book appointments directly into the calendar. Routes complex situations to a human callback queue.
- **Tier inclusion:** Available as a published add-on on any tier.
- **SEO keywords:** `AI receptionist for small business`, `AI phone agent for HVAC`, `after hours call answering`, `AI voice agent for salon`, `AI answering service small business`.

#### `/solutions/database-reactivation`

- **Hero direction:** "The easiest revenue most businesses leave on the table." Strong hook for the read-the-headline-and-decide visitor.
- **The pain point block:** The dormant customer list. The old quotes. The lapsed beauty client who used to come every 4 weeks and now hasn't been seen in 6 months. The math: a Lena-type business with 800 lapsed clients can recover meaningful revenue from a single well-run reactivation campaign.
- **What's included:** Targeted campaigns to past customers and dormant leads. SMS + email. Quarterly cadence on Expansion; one-time or ongoing campaign on any tier.
- **Tier inclusion:** Expansion (quarterly). Foundation and Growth (one-time campaign as add-on).
- **SEO keywords:** `database reactivation marketing`, `win back lapsed customers`, `reactivation campaign for service business`, `dormant customer reactivation`, `win back campaign small business`.

#### `/solutions/rewards`

- **Hero direction:** "Loyalty and referrals that actually work — built into the system you're already using." Beauty-leaning but applicable to home services with repeat-customer dynamics.
- **The pain point block:** Beauty operators losing regulars to the salon down the street. Home services owners watching repeat business slip without a system to encourage it. The customer who left a five-star review and never came back.
- **What's included:** Points, rewards, referral tracking, and the campaigns that drive participation. Built into the platform — not a separate app for clients to download.
- **Tier inclusion:** Expansion (included). Foundation and Growth (available as add-on).
- **SEO keywords:** `salon loyalty program`, `loyalty program for service business`, `customer rewards for salon`, `referral program software`, `beauty industry loyalty program`.

**Voice notes (shared).** Each page leads with the problem and the outcome. The "what it is" comes second. Tier inclusion comes third. Pricing comes fourth. Never the reverse. Concrete-noun specifics ("$150 per appointment" not "valuable appointments"). Industry-specific examples — show the page knows the difference between an HVAC truck day and a salon chair day.

**Internal linking priorities (shared).**

- 2–3 related solution pages
- Relevant tier page(s)
- Relevant industry page(s)
- Calendly
- Calculator or field report (secondary CTA, topic-dependent)

---

### 4.7 Specialized Solution Pages (/solutions/seo, /solutions/ads, /solutions/websites)

**Job-to-be-done (shared).** Convert a visitor who's already decided they need real ads / real SEO / a real custom site into a `/quote` request. These are the highest-intent commercial pages on the site. They also reassure tier-shopping visitors that the custom-scoped work exists and isn't sketchy.

**Personas (by solution):**

| Solution | Primary personas |
|----------|------------------|
| SEO | Mike (post-Growth-Foundation), James (anchor specialized work), analytical buyers, Marcus (per-location SEO) |
| Ads | Mike (post-Growth scope-up), Lena (Meta Ads for beauty), James, Marcus (per-location ads) |
| Websites | James (custom Webflow anchor), Lena (visual-heavy beauty brand), Marcus (flagship location) |

**Conversion goals (shared).** Primary: `/quote`. Secondary: Calendly. Tertiary: relevant field report (especially for SEO — "How local service businesses actually win at SEO" or similar, when published).

**Shared template:**

1. **Hero** — Solution name, one-line outcome ("Show up when your customers search for you" for SEO; "Ads that pay you back" for Ads; "A website that earns the click" for Websites). Primary CTA: `Get a quote →` to `/quote`.
2. **What it covers** — Plain-language scope description.
3. **The problem it solves** — In operator language.
4. **How we deliver it** — High-level process. Discovery, strategy, build, ongoing optimization, reporting.
5. **What's typical / what's not** — Plain-language scope examples ("a basic local SEO program for a single-location HVAC starts here; a multi-location program for a salon group looks like this").
6. **What we ask before quoting** — Plain list: business details, current state, scope of work needed, budget context, timeline. This sets expectations for the `/quote` form.
7. **How pricing works** — "Quoted per engagement based on scope. We don't publish a number because the right number depends on your specific business — and a templated price would either over-charge or under-deliver."
8. **Related tier inclusion** — Callout: "Some of this is included in Growth (SEO Foundation) / Expansion (custom Webflow site + monthly content). The custom-scoped version goes deeper." Links to relevant tier.
9. **FAQ** — 3–5 questions tuned to the specialized work.
10. **Final CTA** — `/quote` (primary) + Calendly (secondary).

**Page-by-page notes:**

#### `/solutions/seo`

- **Hero direction:** "Real SEO programs for service businesses that actually want to rank." Hook for Mike's burned-by-SEO-before objection: "Most SEO that fails fails because no one did the on-page work, no one optimized the GBP, and no one measured anything. We do all three."
- **What it covers:** Keyword strategy, on-page work, content production, technical fixes, citations and link building, GBP management at depth, competitive analysis, monthly reporting.
- **The "I've been burned by SEO before" section:** Direct address. Plain-language pattern.
- **What's included in tier (SEO Foundation in Growth/Expansion):** Citations, keyword mapping, GBP optimization, technical fundamentals. Custom SEO goes beyond that with content programs, link building, competitive markets.
- **SEO keywords:** `local SEO for service business`, `SEO for HVAC`, `SEO for salons`, `local search marketing service business`, `SEO program for small business`.

#### `/solutions/ads`

- **Hero direction:** "Ads that pay you back." Lead with the outcome — leads, jobs booked, appointments filled — not the channel mix.
- **What it covers:** Google Search, Performance Max, Local Services Ads, Meta (Facebook/Instagram). Full management: strategy, copy, creative, audiences, campaigns, ongoing optimization, monthly reporting.
- **Industry-specific examples:** Google + LSA for home services (Mike); Meta + Instagram for beauty (Lena). Make the channel-fit-to-industry framing explicit.
- **What we ask before quoting:** Ad budget range, current performance (if applicable), targeted geography, top services / treatments to promote, current customer pricing.
- **Account ownership note:** One paragraph — "You own the ad accounts. If we part ways, you keep them, the campaigns, and the historical data."
- **SEO keywords:** `Google Ads management for local business`, `PPC management HVAC`, `Meta Ads management for salons`, `paid ads management service business`, `Local Services Ads management`.

#### `/solutions/websites`

- **Hero direction:** "A custom website that looks like the business actually feels." Hook for James and Lena both — for James, it's about modernizing without losing brand heritage; for Lena, it's about visual brand reflecting the studio's actual quality.
- **What it covers:** Custom Webflow builds, mobile-first design, conversion optimization, integration with the KeyLime system (booking, CRM, reviews), ongoing edits and maintenance.
- **What's included in tier (Expansion):** A custom Webflow site of 5–10 pages plus monthly blog. Custom-scoped projects go beyond included pages or include heavier custom design and functionality.
- **Examples / portfolio block:** Placeholder structure now — populate as KeyLime-branded Webflow builds ship. Until then, the "what we build" section uses descriptive examples of completed site types.
- **SEO keywords:** `custom website for service business`, `Webflow site for local business`, `HVAC website design`, `salon website design`, `med spa website design`.

**Voice notes (shared).** The specialized pages have to do double duty — they educate the casual visitor and convert the high-intent visitor. Lead with the headline outcome. Address skepticism directly. Be honest about what's included in tier vs. what requires a quote. Never imply that tier-included SEO/website is "lesser" — it's the foundation; the custom-scoped work is the scale-up.

**Internal linking priorities (shared).**

- `/quote` (primary CTA)
- Relevant tier page (`/tiers/growth` for SEO, `/tiers/expansion` for Websites)
- Cross-link between SEO and Ads (the "SEO compounds while Ads produce now" pairing)
- Calendly + relevant field report (secondary)

---

### 4.8 Industries Hub (/industries)

**Job-to-be-done.** Light routing page. Two cards: Home Services / Beauty & Personal Services. Send the visitor to the right vertical page in under 15 seconds.

**Personas.** Visitors who self-identified by industry from a paid ad or referral.

**Conversion goals.** Primary: click through to the relevant industry page. Secondary: bounce-back to homepage.

**Section order:**

1. **Hero** — "Built for two industries we know inside out."
2. **Home Services card** — Brief description, vertical examples (HVAC, plumbing, roofing, electrical, garage doors, landscaping, pest control, pool service), CTA.
3. **Beauty & Personal Services card** — Brief description, vertical examples (salons, barbershops, med spas, lash and brow studios, nail salons, massage and body work), CTA.
4. **"Not in either of these?" callout** — Politely route out per the anti-persona in `product-marketing-context.md`. "Our system is built for appointment-driven, repeat-customer businesses in these two industries. If you're outside this — say, e-commerce, B2B SaaS, or pre-revenue — we're probably not the right fit. We'd rather tell you that than try to make a square peg fit." This is a powerful trust signal.

**SEO keywords.** Low priority — this is a routing page, not a search target.

**Voice notes.** Spare. Visual. Few words per card. The "not for you" callout is the brand moment.

**Internal linking priorities.**

- `/industries/home-services`, `/industries/beauty` (primary)

---

### 4.9 Industry Pages (/industries/home-services, /industries/beauty)

**Job-to-be-done (shared).** Vertical-specific landing pages that translate the KeyLime system into the operator's daily language. These are some of the highest-SEO-value pages on the site and the primary conversion pages for paid acquisition. Each page hosts an industry-tuned variant of the missed-call revenue calculator as the primary CTA — different defaults, benchmarks, and labels per vertical.

**Personas (by industry):**

| Industry | Primary personas |
|----------|------------------|
| Home Services | Mike (primary), James, Rachel-in-home-services, Marcus (multi-location HVAC etc.) |
| Beauty & Personal Services | Lena (primary), Sofia-in-beauty, Rachel-in-beauty, Marcus (multi-location salon group) |

**Conversion goals (shared).** Primary: industry-tuned missed-call revenue calculator. Secondary: route to recommended tier (Growth). Tertiary: `/quote` for visitors looking for custom specialized work.

**Shared template:**

1. **Hero** — Industry-specific value prop. Loss-led framing matching the homepage: "See what missed [calls / appointments] are costing your [HVAC / salon] business." Authentic photography (real shop / real job site / real owner). Primary CTA: industry-tuned calculator.
2. **Industry-specific pain points** — In operator language, drawn from `personas.md`. Three to five concrete pains.
3. **How KeyLime fits this industry** — Workflows, language, integrations, benchmarks tuned to the vertical. Mention specific tools KeyLime works alongside (Mindbody/Boulevard for beauty; ServiceTitan/Housecall Pro/Jobber for home services).
4. **Recommended tier** — Growth is the default recommendation, with the rationale spelled out. "Most home services operators start at Growth because Speed-to-Lead, SEO Foundation, and online Booking are the four wins that pay for the subscription in the first 30 days."
5. **Industry-specific solution highlights** — 4–5 solutions tuned to the vertical, with cross-links. (Home Services: Speed-to-Lead, Voice Agents, Reputation Management, SEO. Beauty: Rewards, Birthday Campaigns, Database Reactivation, Reputation Management, Meta Ads.)
6. **Industry-specific case study spotlight** — Placeholder until KeyLime-branded results mature.
7. **Industry-specific FAQ** — 4–5 questions including the integration question ("Do you replace my Mindbody / Boulevard / ServiceTitan / Housecall Pro?" — answer: no, we sit around it).
8. **Comparison link callout** — "Already on Mindbody/Vagaro/Housecall Pro? See how your stack stacks up." Links to relevant `/compare/[stack]`.
9. **Final CTA** — "See pricing" + Calendly + calculator (still available if visitor scrolled past).

**Page-specific notes:**

#### `/industries/home-services`

- **Hero direction:** "Marketing for HVAC, plumbing, roofing, and the trades — built for how you actually work." Loss-led sub: "Find out what missed calls are costing your business — 60 seconds, no email required to start."
- **Calculator variant:** Home services defaults — average job ticket $300–$1500, missed-call recovery rate benchmarks for trades, "jobs lost per week" framing.
- **Pain points to lead with:** Missed calls during job hours. Stale GBP. Old quotes never followed up on. Angi/HomeAdvisor dependency.
- **Tool integration callout:** ServiceTitan, Housecall Pro, Jobber stay. KeyLime sits around them. Cross-link to `/compare/housecall-pro` and (when built) `/compare/servicetitan`, `/compare/jobber`.
- **Solution emphasis:** Speed-to-Lead (the missed-call recovery story is the strongest hook for this industry). Voice Agents for after-hours. Reputation Management for the review velocity gap. SEO Foundation for local search.
- **Recommended tier:** Growth, with specialized Ads management as the next layer for serious operators.
- **SEO keywords:** `marketing for HVAC`, `marketing for plumbers`, `marketing for roofers`, `marketing for contractors`, `marketing for home services`, `marketing for landscapers`.

#### `/industries/beauty`

- **Hero direction:** "Marketing for salons, med spas, lash and brow studios, and the appointment-driven world of beauty." Loss-led sub: "Find out what missed calls and no-shows are costing your business — 60 seconds, no email required to start."
- **Calculator variant:** Beauty defaults — average service ticket $80–$400, no-show rate benchmarks (15–20%), "appointments lost per month" framing, optional retention multiplier (lapsed regulars).
- **Pain points to lead with:** Tool sprawl (Mindbody + Podium + Mailchimp + Linktree + a separate texting line). No-shows at 15–20%. Stale loyalty efforts. Lapsed clients sitting in the booking software untouched.
- **Tool integration callout:** Mindbody, Boulevard, Vagaro stay. KeyLime sits around them — layering on review automation, missed-call texting, unified inbox, birthday campaigns, rewards, and database reactivation. Cross-link to `/compare/mindbody` and `/compare/vagaro`.
- **Solution emphasis:** Rewards (the loyalty story is the strongest hook for beauty). Birthday Campaigns. Database Reactivation. Reputation Management. Meta Ads as the natural specialized-work scope-up.
- **Recommended tier:** Growth as entry, with Rewards as a published add-on at signup. Upgrade path to Expansion within 6–12 months.
- **SEO keywords:** `marketing for salons`, `marketing for med spas`, `marketing for lash studios`, `marketing for nail salons`, `marketing for barbershops`, `salon marketing system`.

**Voice notes (shared).** Each page should read like KeyLime grew up inside that industry. Use the industry's vocabulary ("ticket size" not "average revenue per customer"; "the chair" not "the workstation"; "the call" not "the inquiry"). Reference the specific tools the operator is already using. Don't pretend to know more than you do — the goal is "you understand my business," not "you're an expert in my trade."

**Internal linking priorities (shared).**

- Industry-tuned calculator (primary)
- `/tiers/growth` (primary tier recommendation)
- `/tiers/expansion` (scale-up tier)
- Relevant `/compare/[stack]` pages (cross-link to comparison surface)
- Industry-relevant solution pages (4–5 per industry)
- `/quote` (for visitors scoping ads or full SEO)
- Calendly

---

### 4.10 Comparison Pages (/compare/[stack] — Mindbody, Housecall Pro, Vagaro, plus 2–3 more at launch)

**Job-to-be-done.** Capture high-commercial-intent search traffic for "[competitor] alternative" / "[competitor] vs [other]" / "[competitor] cost." The visitor is a current customer of a point-tool SaaS who's hitting a wall — paying multiple subscriptions, jumping between tabs, missing the consolidation benefit. The page's primary job is to tally their actual current spend in the stack-cost calculator and compare it side-by-side with KeyLime's all-in price.

**Personas (by stack):**

| Stack | Primary personas |
|-------|------------------|
| Mindbody | Lena (primary — most common beauty stack), Rachel-in-beauty |
| Vagaro | Lena (small-salon variant), Sofia-in-beauty (graduating from Vagaro) |
| Boulevard | Lena (premium med spa variant) |
| Housecall Pro | Mike (primary — most common home services stack), Rachel-in-home-services |
| ServiceTitan | James, Marcus (enterprise home services) |
| Jobber | Mike (smaller-trades variant) |
| Generic SaaS stack | Rachel (the "we use 5 different tools" reader) |

**Conversion goals.** Primary: stack cost calculator completion (`/calculators/stack-cost` with the comparison pre-filled). Secondary: Calendly. Tertiary: route to recommended tier (almost always Growth or Expansion).

**Key messages:**

- We don't replace [Mindbody / Housecall Pro / Vagaro]. We sit around it. Keep your booking and dispatch where it works. We run the marketing system.
- A typical operator on this stack is paying for 3–5 other tools to fill in the gaps. Add them up.
- For [tier], you get the gaps filled, one inbox, one bill, one team that runs it.
- Month-to-month. No long-term lock-in. If it doesn't pay for itself, you walk away.

**Shared template:**

1. **Hero** — "Already on [Mindbody]? See what KeyLime adds — and what it can replace." Primary CTA: "Calculate your stack cost →" to `/calculators/stack-cost?stack=mindbody`.
2. **The honest opener** — One paragraph naming what the competitor does well. Don't trash the tool. Trash the *stack* it forces you to build around it.
3. **What [competitor] does well** — 2–3 bullets. Booking, payments, dispatch — whichever the tool is best at.
4. **Where the gaps are** — 4–6 bullets in operator language. Missed-call recovery. Review automation. Unified inbox across SMS/email/social/Google. Customer messaging that doesn't live in five different apps. Loyalty/rewards. Database reactivation.
5. **What operators add to fill the gaps** — The honest list. Podium ($X). Mailchimp ($Y). A separate texting line ($Z). Linktree. A standalone review tool. The tally adds up fast — usually $300–$600/mo before KeyLime is in the picture.
6. **The stack cost calculator (embedded)** — Pre-filled with the competitor's known cost and the typical add-on tools for this stack. Visitor adjusts. Result shows: "Your stack today: $X/mo. With KeyLime Growth replacing [list]: $195/mo. Difference: $Y/mo."
7. **What stays vs. what we replace** — Clear table. [Competitor] stays for [booking / dispatch / payments]. KeyLime replaces [Podium / Mailchimp / standalone texting tool / Linktree / review software / etc.].
8. **How the integration actually works** — Short paragraph. We pipe leads, contacts, and appointments between systems. You get one inbox in KeyLime; bookings still happen in your tool.
9. **Tier recommendation** — One paragraph. "Most [competitor] users land on Growth because [reasons]." Link to tier.
10. **FAQ specific to this stack** — 4–6 questions. "Do I have to migrate my client list?" "Will my [competitor] still work?" "What about [specific integration]?" "Can I cancel anytime?"
11. **Final CTA** — "Run the numbers" (calculator) + "Talk to us" (Calendly).

**Page-specific notes:**

#### `/compare/mindbody`

- **Hero direction:** "Already on Mindbody? Keep it. We fill the gaps."
- **Gap emphasis:** Missed-call texting, review automation, unified inbox, loyalty beyond Mindbody's built-in, lapsed-client reactivation.
- **Typical stack additions tallied:** Mindbody + Podium + Mailchimp + a separate texting tool + (often) a separate web form / lead capture tool. Calculator defaults to that combination.
- **Tier recommendation:** Growth (Lena's typical landing tier) with Rewards as add-on.
- **SEO keywords:** `Mindbody alternative`, `Mindbody add-ons`, `Mindbody marketing integration`, `what to use with Mindbody`, `Mindbody reviews automation`.

#### `/compare/housecall-pro`

- **Hero direction:** "Already on Housecall Pro? Keep it. We run the marketing around it."
- **Gap emphasis:** Missed-call texting beyond HCP's basic notification, after-hours capture, review automation at scale, customer messaging in one place, SEO/GBP work HCP doesn't do.
- **Typical stack additions tallied:** Housecall Pro + Podium + a separate review automation + Google Ads management vendor + a separate landing page builder. Calculator defaults to that combination.
- **Tier recommendation:** Growth, with Ads as a quoted scope-up via `/quote`.
- **SEO keywords:** `Housecall Pro alternative`, `Housecall Pro marketing`, `Housecall Pro add-ons`, `what to use with Housecall Pro`, `Housecall Pro reviews`.

#### `/compare/vagaro`

- **Hero direction:** "Already on Vagaro? Keep it. We fill the marketing gaps."
- **Gap emphasis:** Review automation beyond Vagaro's basic prompt, unified inbox across non-Vagaro channels, loyalty/rewards depth, lapsed-client reactivation.
- **Typical stack additions tallied:** Vagaro + Podium-or-equivalent + Mailchimp + a separate texting tool. Calculator defaults to that combination.
- **Tier recommendation:** Growth for smaller-salon operators; Expansion for multi-station salons that want monthly content and a custom site.
- **SEO keywords:** `Vagaro alternative`, `Vagaro marketing`, `Vagaro add-ons`, `Vagaro reviews automation`, `what to use with Vagaro`.

**Future comparison pages (build as demand surfaces):** Boulevard, ServiceTitan, Jobber, Squarespace + Mailchimp DIY stack.

**Voice notes (shared).** Never trash the competitor by name. The operator chose the tool for a reason — usually a good one. The story isn't "Mindbody is bad," it's "Mindbody is great at booking and payments, and most operators don't realize how much they're spending on the patchwork around it." Be specific about what we replace and what stays. Operators have been burned by "switch everything" pitches — be the page that doesn't make that mistake.

**Internal linking priorities (shared).**

- `/calculators/stack-cost` (primary, pre-filled per stack)
- Relevant tier page (Growth or Expansion)
- Relevant industry page (`/industries/beauty` or `/industries/home-services`)
- Calendly (final CTA)
- Cross-link to other comparison pages within the same industry ("If you're not sure between Mindbody and Vagaro for your shop, here's the side-by-side." — when relevant)

---

### 4.11 Calculator Pages (/calculators/missed-call-revenue, /calculators/stack-cost — plus industry variants)

**Job-to-be-done.** Single-purpose tools. Three inputs (or so), one result, one CTA on the result screen. The calculator is the lead magnet — not a teaser for one. The result PDF / saved comparison is the email gate; entering the calculator itself requires no email.

**Personas.** All six, depending on entry point. Most visitors arrive from the homepage hero or an industry page.

**Conversion goals.** Primary: completion. Secondary (on result screen): email submission to save the result PDF + enter the nurture sequence. Tertiary (on result screen): Calendly for high-intent results ("Your calculated loss is $X/mo — want to talk about a Growth-tier fix? →").

#### `/calculators/missed-call-revenue` (primary calculator)

- **Inputs (three):** Average ticket size (or appointment value). Estimated missed calls per week (or "I don't know" → benchmark default by industry). Industry (Home Services / Beauty — drives benchmark defaults).
- **Output:** Estimated monthly missed-call revenue loss. Plus a recovery estimate ("With missed-call text-back, operators in your industry typically recover 30–50% of these. Your recovered range: $X–$Y/mo.") — only publish with verified ranges; placeholder until then.
- **Result screen CTAs:**
  - Primary: "Save my result + see the playbook" (email gate → PDF + nurture sequence entry).
  - Secondary: "Talk through this with us" (Calendly).
  - Tertiary: "See the tier that fixes this" → `/tiers/growth`.
- **Industry-tuned variants:** The same calculator surfaced on industry pages with vertical-specific defaults and labels. The home services variant says "missed calls = lost jobs"; the beauty variant says "missed calls = unbooked appointments."
- **Voice notes:** The calculator copy itself should be tight. Six to ten words per label. No instructions. No "please enter." Just the input.
- **Trust signals on the entry screen:** "No email required to start." "Three numbers. Sixty seconds." "Yours to keep regardless."

#### `/calculators/stack-cost` (comparison calculator)

- **Inputs:** Current core tool (Mindbody / Vagaro / Boulevard / Housecall Pro / ServiceTitan / Jobber / Other) with known monthly cost pre-filled. Plus checkboxes for typical add-on tools (Podium, Mailchimp, separate texting, Linktree, etc.) each with editable cost.
- **Output:** Side-by-side: "Your current stack: $X/mo." vs. "With KeyLime [recommended tier]: $Y/mo + setup fee one time." Plus a "what you'd keep, what you'd replace" breakdown.
- **Result screen CTAs:**
  - Primary: "Save my comparison + tier recommendation" (email gate).
  - Secondary: "Talk through this with us" (Calendly).
  - Tertiary: Direct link to recommended tier.
- **Entry from comparison pages:** When entered from `/compare/[stack]`, the calculator is pre-filled with that stack's known cost and typical add-ons.
- **Standalone landing:** When accessed directly, the calculator opens with no pre-fill and a stack selector at the top.

**SEO keywords (combined).**

- Primary: `missed call revenue calculator`, `marketing stack cost calculator`, `salon marketing cost calculator`, `HVAC marketing ROI calculator`
- Long-tail: `how much do missed calls cost`, `Mindbody plus other tools cost`, `Housecall Pro stack cost`

**Voice notes.** The calculator is the moment the prospect stops being suspicious. Make it feel like a tool, not a Trojan horse. No "free!" or "instant!" exclamations. No "powered by KeyLime" branding on the calculator UI itself. The result page is where the brand voice comes back — calm, direct, useful.

**Internal linking priorities.**

- Inbound only from homepage hero, industry pages, comparison pages, solution pages (Speed-to-Lead, Voice Agents).
- Outbound only from result screen: tier page, Calendly, field report (relevant follow-up).

---

### 4.12 Field Report Pages (/reports/[slug])

**Job-to-be-done.** Capture the "interested but not ready to book" visitor with a short, opinionated, useful download. Each report is 5–10 pages of real insight on a specific problem — not gated whitepaper bloat. The PDF is the deliverable; the email is the entry to a 4–6 week nurture sequence that routes to Calendly.

**Personas.** Varies by report topic. Most reports target Mike or Lena directly. One or two should target Rachel (the internal champion) and Marcus (multi-location).

**Conversion goals.** Primary: email submission → PDF + nurture sequence enrollment. Secondary: Newsletter signup (lower-commitment alternative for visitors who don't want the specific report).

**Shared template:**

1. **Hero** — Report title (specific, opinionated). One-line on what's inside. Primary CTA: "Download the report →" (email gate).
2. **What's in it** — 4–6 bullets on the report's actual contents. Specifics, not "valuable insights."
3. **Who wrote it / who it's for** — Plain, short. KeyLime's name with a one-line credibility note. Specific persona/industry fit.
4. **A preview spread** — Visual mockup or actual page excerpts. Make it look like a real document, not a brochure.
5. **The form** — Max 4 fields: First name, Business name, Email, Industry (Home Services / Beauty / Other).
6. **What happens next** — Plain: "The PDF lands in your inbox in 60 seconds. Over the next few weeks, we'll send 3–4 short follow-up notes with specifics on what to do with what you read. Unsubscribe anytime."
7. **Related reports** — 1–2 cross-links if relevant.

**Launch report slate (3–4 at launch):**

| Slug | Title | Persona | Industry | Anchors |
|------|-------|---------|----------|---------|
| `/reports/missed-calls-hvac` | Why local HVAC companies lose 30% of their inbound calls (and what to do about it) | Mike | Home Services | `/solutions/speed-to-lead`, `/industries/home-services`, `/tiers/growth` |
| `/reports/review-roi-beauty` | The real ROI of review automation in beauty: numbers from 12 salons and med spas | Lena | Beauty | `/solutions/reputation-management`, `/industries/beauty` |
| `/reports/multi-location-marketing` | What changes when you go from one location to three (and what stays the same) | Marcus | Either | `/tiers/expansion`, `/quote` |
| `/reports/saas-stack-audit` | The five tools your service business can probably cancel after switching to a managed system | Rachel | Either | `/compare/[any]`, `/pricing` |

**SEO keywords (combined).**

- Primary: `[topic] for [industry]` long-tails (e.g., `missed calls HVAC report`, `review automation ROI beauty`)
- These pages also rank on the "industry + problem" combos that don't have a calculator-specific search query.

**Voice notes.** The reports themselves are the deliverable — the page just sells the report. Tight, specific, no "comprehensive analysis." Make a strong claim in the title. Back it up in the bullets. The reader needs to believe they'll learn something specific in 10 minutes.

**Internal linking priorities.**

- Inbound: relevant blog posts, solution pages, industry pages, footer "Resources" group.
- Outbound: report-relevant solution and industry pages (in the "next read" section after form submission).

---

### 4.13 About (/about)

**Job-to-be-done.** Defuse the "is this just another agency" objection and the "are they going to ghost me once they have my retainer" objection. Establish the team behind the managed system — small core team supported by vetted specialists, built to scale into dedicated service-line teams as each line matures.

**Personas.** James (primary — needs to know who he's hiring), Mike (founder/team credibility), Rachel (proof of operator chops for her internal sell), Marcus (proof of multi-location capability).

**Conversion goals.** Primary: Calendly. Secondary: calculator link (for visitors still scoping the problem).

**Key messages:**

- KeyLime exists because most local marketing buyers are forced to choose between two bad options: a SaaS platform they have to learn, or an agency that's opaque about what's being done. We built a third option.
- We focus on two industries — home services and beauty — because that's the operational shape our system is built for.
- The team is small and direct. A single point of contact per client. Vetted specialist contractors handle design, content, link building, ad operations, and custom development. As each service line matures, we transition to dedicated in-house roles.
- We're based in Southwest Florida. The initial sales push is here because we can meet operators in person. The system itself is built to deploy nationally.
- The whole company is built on plain-English communication. We won't talk down to you. We won't talk up to you. We'll talk *to* you.

**Section order:**

1. **Hero** — Founder + team photo (or operator photography illustrating the work). Headline: "We run marketing systems for local service businesses. That's it." Subhead: one-line on what KeyLime exists to do.
2. **The story** — 200–300 words. Why KeyLime exists. The third-option framing. The transition from prior agency model to the service/SaaS hybrid. Why home services and beauty. Why Southwest Florida first.
3. **How we work** — Single point of contact per client. Written gameplan deliverable. In-house team supported by vetted specialists. As we scale, dedicated service-line teams.
4. **Where we work** — Based in Southwest Florida. Serving local businesses nationally. (No "we have offices in 12 cities" pretense. We have one base and a national-ready system.)
5. **What we believe** — Plain-English communication. Fair pricing (published where it's published, quoted where it's quoted, never hidden behind a runaround). Right-sized tiers, not one-size-fits-all retainers. No long-term lock-in on the core subscription.
6. **Current client roster** — Local and niche recognition only (per `business-context.md` §4). Names without fake metrics.
7. **Direct contact** — Phone, email, location. The proof of accountability.
8. **CTA** — "Book a free call. 30 minutes. No pitch deck." Plus calculator link below for visitors who want to scope the problem before they talk.

**SEO keywords.**

- Primary: `KeyLime Marketing about`
- Low priority — this is a trust page, not a search target.

**Voice notes.** First person plural ("we") for KeyLime broadly; first-person singular for any founder anecdotes if used. Plain. No founder-mythology. No "we believe in synergy and innovation." The honest story of why a service/SaaS hybrid model exists is more compelling than any tagline.

**Internal linking priorities.**

- `/onboarding` (deeper on the process)
- `/how-it-works` (deeper on the model)
- `/case-studies` (when populated)
- Calendly + calculator (final CTA)

---

### 4.14 Onboarding (/onboarding)

**Job-to-be-done.** For the visitor who wants to know exactly what happens after they book the call. Reassures slow-decision personas (James, Marcus) before they commit. The written gameplan deliverable is a strong trust signal — feature it prominently.

**Personas.** James, Marcus, analytical buyers, any buyer with prior bad-agency experience.

**Conversion goals.** Primary: Calendly. Secondary: calculator link.

**Key messages:**

- 4–8 weeks from kickoff to a working system. We're specific about what happens in each phase.
- The $200 setup fee covers everything: provisioning, A2P 10DLC registration, baseline configuration, the written gameplan, the workflow build, and the team training.
- A written gameplan is delivered during onboarding. You can read it, share it with your team, and hold us accountable to it.
- Single point of contact throughout. No vendor coordination on the client's end.

**Section order:**

1. **Hero** — "From kickoff to a working system in 4 to 8 weeks."
2. **Week 1 — Discovery and gathering** — Discovery sessions, credential and access collection, initial business documentation buildout.
3. **Weeks 2–3 — Platform setup** — Sub-account provisioning, Twilio number assignment, A2P 10DLC registration submission, integrations with existing systems, baseline workflow configuration.
4. **Weeks 3–5 — Gameplan and build** — Written gameplan delivery, workflow build, where specialized work begins.
5. **Weeks 5–8 — Activation and training** — Final QA, A2P 10DLC approval received, team training on the parts of the platform they'll use, system activation.
6. **What's included in the $200 setup fee** — Bullet list.
7. **Single point of contact callout** — One paragraph on what to expect from your KeyLime contact.
8. **CTA** — Calendly. Calculator link below.

**SEO keywords.**

- Primary: `marketing onboarding for small business`
- Secondary: `A2P 10DLC for small business` (translated), `marketing setup process`. Low priority overall — this page is for trust, not search.

**Voice notes.** Specific timelines build trust. Vague timelines destroy it. Be honest that 8 weeks is realistic for an Expansion-tier client with custom Webflow scope, and 4 weeks is realistic for a Foundation client.

**Internal linking priorities.**

- Each phase → relevant solution or tier page where applicable
- Calendly

---

### 4.15 Case Studies (/case-studies and /case-studies/[slug])

**Job-to-be-done.** Social proof. The single biggest credibility need at launch. Don't fabricate. Build the structure, populate as KeyLime-branded results mature.

**Launch reality.** Per `business-context.md` §4, quantified results are placeholders until engagements mature. Current client roster (Four Leaf Charters, Verona Cabinets, Mycelia Foundation, Mega Kovas, ord-x, Virtue Sod) carries over from the prior agency model. Their KeyLime-branded results need to be tracked separately and ready to publish.

**Personas.** James (most), Marcus, Rachel-for-her-owner.

**Conversion goals.** Primary: Calendly. Secondary: tier recommendation per study.

**Hub page (/case-studies) section order:**

1. **Hero** — "Real businesses. Real systems. Real results." If empty at launch: "We're early in the KeyLime-branded chapter. As clients hit results, their stories will live here. In the meantime — meet a few of them and book a call."
2. **Client roster card grid** — Filterable by industry once 6+ studies exist. Photos when available. No fake metrics.
3. **What a typical engagement looks like** — Bridge content for the empty-state period. One paragraph each on a Foundation client, a Growth client, and an Expansion client.
4. **CTA** — "Want results like these? Book a free call."

**Individual case study template (/case-studies/[slug]):**

1. **Client header** — Name, vertical, location, tier, add-ons, specialized work (if any).
2. **The challenge** — 1–2 paragraphs in client's words where possible. Pre-KeyLime tool stack and pain points.
3. **What we did** — Plain-language list of services, tier, add-ons, specialized work, onboarding outcome.
4. **Results** — Numbers. Before/after. Time period. Source-of-truth note ("data from GA4, GSC, HighLevel reporting, and the client's booking system").
5. **Client quote** — Pull quote, named, with photo if permitted.
6. **What we'd do differently next time** — Optional candor block. Earns trust if used honestly.
7. **CTA** — "See if we could do this for you. Book a free call." Plus a tier-recommendation link.

**SEO keywords.**

- Per case study: `[vertical] marketing case study`, `[vertical] missed call recovery case study`, `[vertical] review velocity case study`
- Hub: low priority — not a search hub

**Voice notes.** Honest specifics. No superlatives. The "what we'd do differently" block is rare in agency case studies and on-brand for the Everyman voice — strongly recommended once a study is mature enough.

**Internal linking priorities.**

- Each case study → relevant tier page + relevant industry page
- Hub → Calendly + calculator
- Tier and industry pages → relevant case studies

---

### 4.16 Get a Quote (/quote)

**Job-to-be-done.** Capture the visitor who's already decided they need custom-scoped specialized work and route them to a real quote — not a generic "Contact us" form. This page exists because not everything is publicly priced; custom work needs scope before pricing.

**Personas.** James (Expansion + custom Webflow + full SEO + Ads), Marcus (per-location Ads, multi-location custom Webflow), Mike (post-Growth Ads scope-up), Lena (post-Growth Meta Ads scope-up).

**Conversion goals.** Primary: form submission. Tagged by project type for proper internal routing.

**Key messages:**

- Tell us what you're trying to do. We'll send you a real quote.
- We quote four categories: full SEO programs, Google/Meta Ads management, custom website projects, large workflow/automation builds.
- We don't publish a number because the right number depends on the actual scope — and a templated price would either overcharge or underdeliver.
- We respond within 1–2 business days with a written scope and price.

**Section order:**

1. **Hero** — "Tell us what you're trying to do. We'll send you a real quote."
2. **What we quote** — 4 categories with brief descriptions. Full SEO programs (beyond Foundation). Google & Meta Ads management. Custom website projects (beyond included tier pages). Large workflow / automation builds.
3. **What we need to give you an accurate quote** — Form fields explained in plain language. Business name, industry, location, current tier (or "not a client yet"), project type (multi-select), budget range or scope notes, timeline, best contact.
4. **The form itself.**
5. **Process** — "We'll review and respond within 1–2 business days with a written scope and price. If we need clarification first, we'll ask."
6. **CTA — Submit form.**

**SEO keywords.**

- Primary: `marketing quote for service business`
- Secondary: `custom SEO quote`, `Google Ads management quote`, `custom website quote service business`

**Voice notes.** Honest about the quote-based model. Don't apologize for not publishing prices on custom work — explain *why* a real quote produces a better number than a template. The reader doesn't want to be sold; they want the quote.

**Internal linking priorities.**

- Inbound only — this page is a destination.
- Heavy inbound: all 3 specialized solution pages, Expansion tier page, Growth tier page (for Ads scope-up), industry pages, footer.

---

### 4.17 FAQ (/faq)

**Job-to-be-done.** Convert visitors who want to read everything before they talk to anyone. Also: rank for question-style searches and serve as an objection-handling hub for both new buyers and prospective tier-movers.

**Personas.** Rachel (researching for owner), Mike (skeptical), Sofia (budget questions), James (slow due diligence).

**Conversion goals.** Primary: Calendly. Secondary: relevant field report or calculator (context-dependent — e.g., a missed-call question routes to the calculator; a "how does Mindbody integration work" question routes to `/compare/mindbody`). Tertiary: `/quote` for custom-work questions.

**Key messages.** 15–25 questions across 6 sections. Honest answers, never deflective.

**Section order:**

1. **Hero** — "The questions we get most."
2. **The System & Tiers** — 4–5 questions. What's a tier? What's included where? What's an add-on vs. specialized work? Can I move tiers?
3. **Pricing & Contracts** — 4–5 questions. Setup fee? Contract terms? Cancellation? Custom quoting? Add-on pricing?
4. **Onboarding** — 3–4 questions. Timeline? What's involved? Single point of contact? What if I'm already partway through with another vendor?
5. **Industries** — 2–3 questions. Do you work with my specific trade / specialty? What if I'm not in home services or beauty?
6. **Working with existing tools** — 3–4 questions. Do you replace Mindbody / Boulevard / ServiceTitan / Housecall Pro / Jobber? Do I have to move my customer list? What about my existing GBP?
7. **Compliance & Infrastructure** — 2–3 questions. What's A2P 10DLC and do I have to deal with it? Who owns my data? What happens if I cancel — do I keep my reviews / contacts / number?
8. **Final CTA** — "Still have questions? Book a free 30-minute call."

**SEO keywords.**

- Primary: question-style long-tails. `what is missed call text back`, `do I have to switch from Mindbody`, `what is A2P 10DLC`, `marketing for HVAC pricing`, `how does a managed marketing system work`.
- Schema: implement FAQPage structured data on this page (per `schema-markup` skill).

**Voice notes.** Direct. No corporate hedging. "We do" / "We don't." If the honest answer is "it depends," explain what it depends on. Never "this is a complex topic" deflection. Reference the source of truth (tier table, solutions catalog) when relevant — the FAQ is a guide, not a re-write of the rest of the site.

**Internal linking priorities.**

- Each answer that mentions a tier, solution, industry, or stack → links there
- Calculator (when a question is about scoping missed-call cost)
- Relevant comparison page (when a question is about tool integration)
- `/quote` (when "what about custom work?" is answered)
- Calendly

---

### 4.18 Contact (/contact)

**Job-to-be-done.** For visitors who prefer email or form submission to a calendar widget. Both paths feed the same HighLevel CRM. Don't push Calendly so hard that the form feels like a fallback. Also — point visitors who actually need a custom-scoped quote to `/quote` instead.

**Personas.** James (face-to-face culture, may want phone first), older operators who don't trust calendar widgets, any visitor who can't find the right form elsewhere on the site.

**Conversion goals.** Primary: Calendly. Secondary: Form submission. Tertiary: route to `/quote` for visitors who are mis-routed.

**Section order:**

1. **Hero** — "Let's talk." One-line subhead.
2. **Embedded Calendly** — Primary path.
3. **Or send a message** — Form below: Name, Business, Industry, Phone, Email, Brief description.
4. **Direct contact** — Phone (clickable on mobile), email, Southwest Florida location.
5. **"Looking for a custom quote?" callout** — Plain-language route to `/quote`. "If you're already past the discovery phase and you know you need a custom SEO program, ads management, or a custom website, go directly to our quote form. You'll get a real number faster."
6. **What happens next** — One-line plain reassurance.

**SEO keywords.** Low priority. Branded only.

**Voice notes.** Short page. Few words. Most readers are 80% sold by the time they land here — don't re-pitch.

**Internal linking priorities.** `/quote` (for mis-routed scope-up visitors). Otherwise terminal.

---

### 4.19 Blog (/blog) — deferred at launch

**Launch state.** Stub or 404 redirect until pillar pages and 4+ launch posts are ready. See §5 below for the full editorial plan.

---

## 5. Blog editorial strategy

### 5.1 Why a blog at all

Four reasons, in priority order:

1. **Long-tail SEO authority.** The Solutions catalog and tier pages target broad commercial keywords. The blog targets the long-tail problem-language searches — "missed call text back," "how to reduce no-shows in a salon," "what is A2P 10DLC," "AI receptionist for HVAC." Posts that rank for those questions become the top-of-funnel acquisition engine before paid has to carry the load.
2. **Proof-of-concept for the SEO service.** KeyLime sells SEO Foundation inside Growth and Expansion and a full custom-scoped SEO program as specialized work. The blog is where the SEO service is publicly proven to work for KeyLime itself.
3. **Lead-magnet flow.** Every post anchors a CTA to a calculator (when the topic maps to one) or a field report (when the topic maps to one). Search traffic → useful answer → captured lead. Posts about specialized work route to `/quote` instead.
4. **Sales-call deflection.** Common objections become linkable answers. "Read this and let me know if you still want to talk."

The KeyLime blog is searchable-first. Shareable is a bonus, not the goal. Don't chase virality. Chase rankings for the questions Mike and Lena actually type into Google at 9pm.

### 5.2 Content pillars

Six pillars. Four map to the system's core operating areas. Two are the industry pillars that tie everything together.

| #   | Pillar                                                | Anchor pages                                                                       | Audience cluster                  |
| --- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------- |
| 1   | **Lead capture & response** (Speed-to-Lead, Voice Agents) | `/solutions/speed-to-lead`, `/solutions/voice-agents`, `/tiers/growth`, `/calculators/missed-call-revenue` | Mike, Marcus, Rachel              |
| 2   | **Reputation & reviews**                              | `/solutions/reputation-management`, every tier page, `/reports/review-roi-beauty`  | Mike, Lena, Rachel, Marcus        |
| 3   | **Retention & lifetime value** (Rewards, Birthday, Reactivation, Lead Nurture) | `/solutions/rewards`, `/solutions/database-reactivation`, `/solutions/lead-nurture`, `/tiers/expansion` | Lena, Mike (long-cycle), Rachel   |
| 4   | **Local SEO & Google visibility**                     | `/solutions/seo`, `/tiers/growth`, `/tiers/expansion`                              | Mike, James, analytical buyers    |
| 5   | **Marketing for home services**                       | `/industries/home-services`, `/solutions/ads`, `/tiers/growth`, `/reports/missed-calls-hvac` | Mike, James, Marcus               |
| 6   | **Marketing for beauty & personal services**          | `/industries/beauty`, `/solutions/rewards`, `/tiers/expansion`, `/reports/review-roi-beauty` | Lena, Sofia-in-beauty, Marcus     |

**Why these six.** Pillars 1–4 align with the system's value propositions and link to the specific solution, tier, calculator, and field-report pages they support. Pillars 5–6 are the industry pillars — the long-tail SEO surface area for "marketing for HVAC" / "marketing for med spas" and the dozen related vertical-specific queries. Pillar 5 and 6 posts also build the editorial library for the SEO service to use as proof-of-concept and as a content engine for client work.

### 5.3 Launch post slate (12 posts)

Sequenced for the first 90 days post-blog-launch. Two pillar pages first (Speed-to-Lead/missed-call hub and Reputation/reviews hub). Then 12 cluster posts across the six pillars.

**Funnel stage key:** TOFU (problem-aware), MOFU (solution-aware), BOFU (vendor-evaluating).

| #   | Working title                                                                                          | Pillar               | Funnel | Persona target              | Primary CTA |
| --- | ------------------------------------------------------------------------------------------------------ | -------------------- | ------ | --------------------------- | ----------- |
| 1   | The missed-call math: how much business goes to your competitor when you don't pick up                 | 1 (Lead capture)     | TOFU   | Mike                        | Calculator |
| 2   | What "missed call text back" actually does (and what it doesn't)                                       | 1 (Lead capture)     | TOFU   | All home services           | Calculator |
| 3   | The case for an AI receptionist when you only have one office line                                     | 1 (Lead capture)     | MOFU   | Mike, Marcus, beauty after-hours | `/solutions/voice-agents` + `/quote` |
| 4   | Most of your next customers are reading your reviews before they call you                              | 2 (Reputation)       | TOFU   | All                         | `/reports/review-roi-beauty` |
| 5   | How to get more Google reviews without sounding desperate (or breaking Google's rules)                 | 2 (Reputation)       | MOFU   | All                         | `/solutions/reputation-management` + report |
| 6   | The five SaaS tools your salon can probably cancel after switching to a managed system                 | 3 (Retention)        | MOFU   | Lena, Rachel-in-beauty      | `/calculators/stack-cost` + `/compare/mindbody` |
| 7   | The lapsed-client math: what an 800-name dormant list is actually worth                                | 3 (Retention)        | MOFU   | Lena, Mike (old quotes)     | `/solutions/database-reactivation` |
| 8   | Local SEO for service businesses: what to do in the first 30 days, and what to leave for a real program | 4 (Local SEO)        | TOFU   | Mike, James, all home svc    | `/solutions/seo` |
| 9   | The "I've been burned by SEO" rebuttal — what actually works for local service businesses              | 4 (Local SEO)        | MOFU   | Mike (primary objection)    | `/solutions/seo` + `/quote` |
| 10  | Marketing for HVAC, plumbing, and the trades: the four things to fix before you spend on ads           | 5 (Home services)    | TOFU   | Mike                        | Calculator (HVAC variant) |
| 11  | Why salons and med spas leak money to no-shows, lapsed clients, and SaaS subscriptions — and the fix   | 6 (Beauty)           | TOFU   | Lena                        | `/calculators/stack-cost` |
| 12  | A2P 10DLC in plain English: what salons and contractors need to know about business texting           | All                  | TOFU   | All                         | `/faq` + Calendly |

**Two pillar pages (publish first, before launch posts):**

| Pillar # | Pillar page title                                                                  | Anchor URL                                          |
| -------- | ---------------------------------------------------------------------------------- | --------------------------------------------------- |
| 1        | The Missed-Call Playbook: How Local Service Businesses Stop Losing Leads on Hold   | `/blog/missed-call-playbook`                        |
| 2        | The Reviews Playbook: A Practical Guide for Local Service Businesses               | `/blog/reviews-playbook-local-service-business`     |

Pillars 3–6 don't need standalone pillar pages — the solution pages (`/solutions/rewards`, `/solutions/database-reactivation`, `/solutions/seo`) and industry pages (`/industries/home-services`, `/industries/beauty`) serve as the cluster hubs. Cluster posts for those pillars link directly to those pages.

### 5.4 Hub-and-spoke linking plan

**Primary linking model:**

```
Solution / Industry / Tier page (HUB) ←→ Pillar page (HUB) ←→ Cluster posts (SPOKES)
                                                                ↓
                                          Calculator (TOFU lead-capture)
                                          Field report (MOFU lead-capture)
                                          /quote (BOFU specialized work)
                                          Calendly (BOFU tier shopping)
```

**Concrete linking rules:**

1. **Every blog post links to:**
   - Its anchor page (solution, industry, tier, calculator, field report, or pillar page).
   - The funnel-stage-appropriate lead magnet (calculator for TOFU; field report for MOFU; `/quote` or Calendly for BOFU). Place it in-content (mid-post) and at the post footer.
   - At least one related blog post (encourages session depth).
2. **Pillar pages link to:**
   - All cluster posts in their cluster.
   - The corresponding solution / industry pages (above the fold and in the conclusion).
   - The calculator (mid-page block) and the relevant field report (at the end).
3. **Solution and industry pages link to:**
   - The pillar page for their pillar (in a "Want to learn more?" section near the bottom, once pillar pages are published).
   - 2–3 supporting blog posts that demonstrate authority.
4. **Calculators (`/calculators/*`), field reports (`/reports/*`), and `/quote` are inbound-only.**
   - Every blog post sends traffic to one or two of them, depending on funnel stage.
   - These pages don't link out (except in footer). They're termini that capture leads.
5. **Comparison pages (`/compare/*`) are surfaced from:**
   - Industry pages (cross-link callout).
   - Solution pages where integration is the question (Speed-to-Lead, Reputation Management).
   - FAQ entries about tool integration.
   - Blog post #6 (the "cancel five SaaS tools" post).
6. **Cross-pillar internal links** — reinforce the "they fit together" message:
   - Lead capture posts link to relevant Reputation posts (reviews feed Speed-to-Lead's quality, and Speed-to-Lead leads feed Reputation).
   - Retention posts link to relevant Lead Capture posts (you don't retain customers you never captured).
   - Local SEO posts link to Reputation posts (reviews and citations feed local rankings).
   - Industry posts link to relevant solution posts.

### 5.5 Editorial cadence

**First 90 days:**

- Week 1: Publish 2 pillar pages.
- Weeks 2–4: Publish 4 launch posts (priority: posts #1, #4, #10, #11 — one per major cluster, all TOFU).
- Months 2–3: Publish 8 remaining launch posts at 1/week.

**Steady state (post-launch):**

- 1 post per week, alternating across the six pillars.
- 1 pillar-page refresh per quarter (keeps anchors fresh, signals to search that the hub is maintained).
- 1 new field report per quarter (refreshes the MOFU lead-magnet library).

**Note on the Expansion-tier "1 article/month" inclusion:** That cadence is for *client* SEO programs delivered through Expansion, not for the KeyLime blog itself. The KeyLime blog runs at 1/week — fewer, sharper, longer.

### 5.6 What we won't write about

- **AI as a topic.** AI is how the work gets done, not what we sell. Anti-persona reading, off-brand for Everyman voice. (The exception is `/solutions/voice-agents`, which is a product page, not a thought-leadership take on AI.)
- **HighLevel platform deep-dives.** We don't write "How to set up HighLevel for your small business." We write "How a managed marketing system replaces 5 SaaS subscriptions." The platform is internal infrastructure, not editorial content.
- **Generic agency content.** "10 marketing trends for 2026" lists, "Why your business needs digital marketing" softball pieces. Skippable, low-credibility, easily generated by anyone — actively harms the brand.
- **Industry hype reactions.** Algorithm changes, platform drama, marketing AI takes. The audience doesn't read it and doesn't care.
- **Citrus puns.** Already covered, but worth restating. No "key to your success" headlines.
- **Listicle padding.** "27 reasons your business needs SEO." Nobody reads them. They make the brand look generic.

The bar for every post: **would Mike (HVAC owner) or Lena (salon owner) actually read this without rolling their eyes?** If no, kill it.

---

## 6. Content production checklist (per page or post)

Before any page or post ships, verify:

- Opens with something concrete — a scene, number, observation, or real question. Never "In today's digital landscape..." or "In the world of small business marketing..."
- Average sentence under 20 words.
- Contractions throughout.
- No words from the Never-Use list (delve, leverage, unlock, empower, comprehensive, solutions as filler, seamless, cutting-edge, robust, synergy, etc.).
- No HighLevel name-drop in customer-facing copy unless contextually necessary and translated.
- No A2P 10DLC or other compliance acronyms without immediate plain-language translation.
- No "Free Digital Presence Audit" language anywhere — the audit was retired. Audit-style CTAs ("get a free audit," "we'll review your digital presence") are banned.
- At most one exclamation point on the page (and only if it earns it).
- Ends on an idea or calm invitation, not a "Contact us today!"
- At least one path to a primary conversion (Calendly, calculator, field report, or `/quote`) visible without scrolling past 2 viewport heights.
- The right primary conversion for the page (calculator for homepage/industry/Speed-to-Lead/Voice Agents; stack cost calculator for comparison pages; field reports for blog posts and TOFU education; Calendly for tier/About/Contact; `/quote` for specialized solution pages).
- All claims defensible if asked about them on a call.
- Would Mike (HVAC) or Lena (salon) read it without rolling their eyes (the dual operator test)?
- No citrus puns.

If any answer is no, rewrite.

---

## 7. Open items before content production starts

These need resolution before serious copy production begins:

1. **`writing-voice.md` publication.** The full writing voice spec is referenced throughout this strategy but hasn't shipped yet. Get it published before drafting hero copy or the About page.
2. **Founder / team writing samples.** Per `business-context.md` §7, the founder will provide 2–3 paragraphs of personal writing as voice anchors. Get these before drafting the homepage hero or the About story.
3. **Verified proof numbers.** Stop using placeholder stats (no-show reduction %, missed-call recovery $, review velocity counts) until verified. Placeholder numbers in shipped copy actively damage trust.
4. **Calculator default benchmarks.** Both calculators rely on industry-tuned defaults (missed-call recovery rates, average ticket sizes, typical SaaS stack costs). Lock these defaults with sources before publishing the calculator. A wrong default makes the tool look guessy.
5. **First case study.** At least one full KeyLime-branded case study with real numbers and a client quote should be ready by month 2. Without it, `/case-studies` stays a stub and `/about` loses meaningful proof.
6. **Add-on price list.** Per `business-context.md` open item #8, the published add-on prices need to be locked in before the pricing page and tier pages ship.
7. **Tagline / brand line.** Per `business-context.md` §7, the tagline is defined after site copy is drafted. Decide whether the homepage hero can do tagline duty or whether a separate line is needed in the footer/logo lockup.
8. **Domain registration.** Per `business-context.md` open item #1, register the KeyLime Marketing domain ahead of launch.
9. **Blog launch trigger.** Don't publish the blog until 2 pillar pages + first 4 cluster posts are written. A half-empty blog signals neglect. A 6-post launch with a clear pillar structure signals seriousness.
10. **First field report.** Per `business-context.md` open item #9, confirm the first 2–3 field reports to publish. The launch slate above proposes four (`missed-calls-hvac`, `review-roi-beauty`, `multi-location-marketing`, `saas-stack-audit`) — narrow or expand based on founder priorities and available data.
11. **First comparison page slate.** Per `business-context.md` open item #10, confirm the first 3–5 comparison pages. Launch recommendation: Mindbody, Housecall Pro, Vagaro (mapped to the highest-volume SaaS-alternative searches in the two target industries). Boulevard, ServiceTitan, Jobber, and a generic-SaaS-stack page can follow.
12. **Industry case study spotlight commitments.** For each industry page, identify one anchor case-study spotlight (one home services client, one beauty client) and reserve the layout until real results are available.
13. **Site-architecture regeneration.** `site-architecture.md` was written against the old funnel (it still references `/audit` and lists it as a Level 1 page). It needs to be regenerated to match this strategy: remove `/audit`, add `/calculators/*`, `/reports/*`, `/compare/*`, update header/footer nav, update the orphan audit and minimum-conversion-touchpoint tables. Until that's done, this content strategy is the source of truth on conversion paths.

---

*KeyLime Marketing Content Strategy v2.0*
*Recreated 2026-05-16 from updated `business-context.md` and `product-marketing-context.md`*
*Pairs with `business-context.md`, `product-marketing-context.md`, `personas.md`, `Business_Product_Documentation.md`, and (pending regeneration) `site-architecture.md`.*
