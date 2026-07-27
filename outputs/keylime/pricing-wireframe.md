# KeyLime Marketing — Pricing Wireframe

**Route:** `/pricing`  
**Primary conversion:** Book Free Consult  
**Source copy:** `context/clients/KeyLime/pricing-copy.md`

```text
┌───────────────────────────────────────────────────────────────────────────┐
│ Sticky Header: logo | How It Works | Solutions | Pricing | Calculator | FAQ│
│                                                      [Book Free Consult]   │
├───────────────────────────────────────────────────────────────────────────┤
│ HERO — warm near-white, restrained lime accent                             │
│  SIMPLE, PUBLISHED PRICING                                                  │
│  Three systems. One monthly price.                                         │
│  Supporting copy + [Book Free Consult] [Calculate revenue →]              │
│  $200 one-time setup · Month-to-month · Live in 4–8 weeks                  │
├───────────────────────────────────────────────────────────────────────────┤
│ SYSTEMS — Neutral 200                                                       │
│  [Foundation $99] [Growth $195 ★ recommended] [Expansion $495]            │
│  concise “for” copy, included highlights, CTA per card                     │
│  shared foundation/terms strip                                              │
├───────────────────────────────────────────────────────────────────────────┤
│ SETUP + FLEXIBILITY — white                                                 │
│  Setup is $200. The rest is month-to-month.                                │
│  intro copy | no lock-in | carries across | one point of contact           │
├───────────────────────────────────────────────────────────────────────────┤
│ FULL COMPARISON — Neutral 200                                               │
│  See what each system includes.                                             │
│  horizontally scrollable comparison table on mobile                        │
│  shared infrastructure foundation note                                      │
├───────────────────────────────────────────────────────────────────────────┤
│ CUSTOM WORK — white, 2-col callout                                         │
│  Need something beyond your system?                                        │
│  Published add-ons | Custom-scoped work     [Talk about custom work →]    │
├───────────────────────────────────────────────────────────────────────────┤
│ FAQ — Neutral 200, native accordion                                         │
│  Five pricing objections                                                    │
├───────────────────────────────────────────────────────────────────────────┤
│ FINAL CTA — charcoal                                                        │
│  Not sure which system fits? We’ll help you pick.                           │
│  [Book Free Consult] [Calculate my missed-call revenue →]                  │
└───────────────────────────────────────────────────────────────────────────┘
```

## Build direction

- Use the existing page’s warm-neutral/charcoal local system; lime accent is represented by the existing accent token until the global KeyLime Webflow palette lands locally.
- Keep Growth as the single elevated card: accent badge, slightly stronger shadow, no oversized color fill.
- Cards and CTA panels use `24px`–`32px` rounded corners. Buttons stay pill-shaped.
- The comparison table is the information-dense section. Give it a scroll container on mobile; do not compress it into unreadable cards.
- The final CTA is the sole intentional dark page moment, following the How It Works page rhythm.
