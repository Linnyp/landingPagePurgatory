# KeyLime Marketing — How It Works Wireframe

**Route:** `/how-it-works`  
**Primary conversion:** Pricing  
**Secondary conversion:** Book Free Consult  
**Design basis:** current KeyLime Webflow system (Agencia X structure, Citrus & Charcoal tokens), not the legacy Linax Digital styling.

## Page idea

This page answers one question in a deliberately calm sequence: *What am I buying, and how much of it do I have to run myself?* It moves from the simple commercial model, through onboarding, to a clear split between the three things the operator uses and the work KeyLime owns. The result should feel like a managed operating system, not a SaaS demo or an agency service menu.

## Desktop wireframe

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ Sticky header: KeyLime logo | How It Works | Solutions | Pricing | About    │
│                                                       [Book Free Consult]    │
├─────────────────────────────────────────────────────────────────────────────┤
│ HERO — warm near-white / subtle lime organic shape                           │
│                                                                             │
│  HOW IT WORKS                     [stylized product screenshot]            │
│  One team. One platform.          ┌────────────────────────────┐           │
│  One monthly price.               │ inbox / appointment        │           │
│                                   │ confirmation conversation  │           │
│  You run the business. We run     │ with a small lime message  │           │
│  the marketing. Here's exactly    └────────────────────────────┘           │
│  how that works.                                                         │
│  [See pricing →]  Book Free Consult →                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ THREE STEPS — Neutral 200                                                   │
│                              A working system in three steps.               │
│  ┌───────────────┬───────────────────┬──────────────────────────────────┐  │
│  │ 01            │ 02                │ 03                               │  │
│  │ Pick a system │ We onboard you    │ The system runs. We run it.       │  │
│  │ short copy    │ in 4 to 8 weeks.  │ short copy                       │  │
│  └───────────────┴───────────────────┴──────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOUNDATION — white                                                           │
│  Every account starts with the same foundation.                              │
│  Some things you need regardless of which system you pick.                  │
│                                                                             │
│  [phone] Dedicated business number        [shield] SMS carrier registration │
│  [panel] Private workspace                [zap] Baseline workflows          │
│  [map] Written gameplan                   [person] One point of contact     │
│  That's the floor. Each system adds to it.                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ YOU USE / WE RUN — Neutral 200                                               │
│  What you actually log into.          │  What we run for you.              │
│  Three things. The rest runs without   │  This is the actual work.          │
│  you.                                  │                                    │
│  ┌─────────┐ ┌─────────┐ ┌──────────┐  │  • workflows & follow-up           │
│  │ Inbox   │ │ CRM     │ │ Report   │  │  • integrations & monitoring       │
│  │ [screen]│ │ [screen]│ │ [screen] │  │  • optimization & reporting        │
│  └─────────┘ └─────────┘ └──────────┘  │  • compliance & updates             │
│  No new platform to learn...           │                                    │
│                                         │  “Human when needed; system when not.”│
├─────────────────────────────────────────────────────────────────────────────┤
│ FINAL CTA — one intentional charcoal moment                                 │
│  Pick a system. Or ask us which one fits.                                   │
│  ┌───────────────────────────┐  ┌──────────────────────────────────────┐  │
│  │ Ready to pick a system?   │  │ Not sure which one fits?             │  │
│  │ [See pricing →]           │  │ [Book Free Consult →]                │  │
│  └───────────────────────────┘  └──────────────────────────────────────┘  │
│       Still scoping the problem? Calculate my missed-call revenue →         │
├─────────────────────────────────────────────────────────────────────────────┤
│ Footer                                                                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Section specification

| Section | Layout and visual treatment | Content hierarchy | Build notes |
| --- | --- | --- | --- |
| Header | Existing `Header V1`; sticky white/near-white surface. | Existing navigation; exact CTA label: **Book Free Consult**. | Do not bring over the old Linax card-navigation or clay/orange treatment. |
| Hero | `Section` with `Top 120px`; `Container Default`; `Grid 2 Columns`, vertically centered. Warm page canvas with one subtle lime organic shape behind the media. | Eyebrow `Display 1`; H1 `Display 10 Extra Bold`; sub `Paragraph Large`; primary button plus text link. | Right media is a *real, reskinned* unified-inbox or appointment-confirmation screenshot in a `Border Radius 32px` container with `Neutral Shadow 05`. Avoid abstract AI art. |
| Three steps | `BG Neutral 200`; right-aligned section header; three equal process cards in `Grid 3 Columns`. | H2 `Display 9`; card number `Display 8` in lime; title `Display 6`; body `Paragraph Medium`. | Use connected cards / shared edges so it reads as one system, not three unrelated offerings. The same visual language can extend the homepage snapshot. |
| Account foundation | White section; heading block above a 3 × 2 icon list. | H2 `Display 9`; support `Paragraph Large`; six concise labelled items; closing `Display 5`. | Use one 1.5px-stroke Lucide/Phosphor icon family. This is infrastructure reassurance, so no screenshots or decorative image needed. |
| You use / we run | `BG Neutral 200`; desktop 5/7 column split with a vertical divider. | Left: H2 + three product cards. Right: mirrored H2 + concise operational list + closing line. | The left cards use genuine small screen crops for Inbox, CRM, and Report; the right is prose, not a second set of cards. This visual asymmetry makes ownership instantly clear. |
| Final CTA | Charcoal `BG Neutral 800`; white text; two equal cards below heading. | H2 `Display 8`; one card routes to pricing, one to Calendly; calculator remains a tertiary text link. | Pricing card: `BG Neutral 100`, charcoal primary button. Consult card: charcoal-outline / soft lime tint with white or lime-safe CTA. Keep cards `Border Radius 24px`; no third card. |
| Footer | Existing `Footer V1`. | Standard navigation and legal content. | Preserve the single dark section rhythm by visually joining it to the CTA or separating with a thin charcoal rule. |

## Responsive behavior

- At tablet and below, use `1 Col Tablet` for the hero, the process row, the foundation list, and the CTA cards.
- Hero media moves below the copy. Keep the primary CTA before media so the pricing route remains reachable without scrolling.
- The three step cards stack in numerical order; use a left-side lime rule or short connector between cards rather than trying to preserve horizontal connectors.
- The ownership split stacks as **What you actually log into** first, then **What we run for you**. The left product cards become a single-column list with 16:10 media crops.
- On mobile, retain `Display 10` only if it resolves to the template’s mobile scale; do not force desktop-sized headlines. Keep buttons full-width only below mobile landscape, and keep the calculator as a plainly visible text link below the two CTA cards.

## Design guardrails

- Use Inter only, with the system’s `-0.03em` tracking; no legacy Fraunces/Inter pairing from the local Linax code.
- Use lime only for emphasis: eyebrow, step numbers, icons, and selected CTA details. It should not become a full-bleed background.
- Alternate white and `BG Neutral 200` surfaces; charcoal is reserved for the final CTA/footer moment.
- Use `Border Radius 24px` for cards and `32px` for hero media. Default elevation is `Neutral Shadow 03`–`05`.
- Keep all copy from `context/clients/KeyLime/how-it-works-copy.md` verbatim. In particular, translate implementation terms into customer language: no HighLevel, Twilio, or A2P 10DLC in the visible page copy.
- Do not use fabricated dashboard data. Screenshot examples should be real, re-skinned, and anonymized where necessary.

## Asset checklist

1. One genuine unified-inbox or appointment-confirmation screen for the hero.
2. Three small genuine product captures: inbox, CRM, and monthly report.
3. Six consistent line icons for the account foundation list.
4. Optional: a subtle paper-grain overlay used on **one** light section only.

This is intentionally a screenshot-led page: product proof carries more trust here than decorative illustration, while the card system keeps it coherent with the existing Webflow site.
