import { ComponentType } from "react";

export interface GeneratedPage {
  slug: string;
  businessName: string;
  generatedAt: string;
  archetype: string;
}

export const generatedPages: GeneratedPage[] = [
  {
    slug: "linax-digital-landing",
    businessName: "Linax Digital",
    generatedAt: "2026-03-10",
    archetype: "tech-saas / professional-services hybrid",
  },
  {
    slug: "linax-digital-2",
    businessName: "Linax Digital",
    generatedAt: "2026-03-10",
    archetype: "tech-saas / professional-services hybrid",
  },
  {
    slug: "linax-digital-3",
    businessName: "Linax Digital",
    generatedAt: "2026-04-14",
    archetype: "warm-professional / everyman (Coastal Clay)",
  },
  {
    slug: "linax-digital-landing-blue",
    businessName: "Linax Digital",
    generatedAt: "2026-04-17",
    archetype: "tech-saas / professional-services hybrid",
  },
  {
    slug: "linax-digital-4",
    businessName: "Linax Digital",
    generatedAt: "2026-04-22",
    archetype: "tech-saas / professional-services hybrid",
  },
  {
    slug: "keylime-revenue-calculator",
    businessName: "KeyLime Marketing",
    generatedAt: "2026-05-17",
    archetype: "professional-services / Citrus & Charcoal (Agencia X)",
  },
  {
    slug: "keylime-homepage-hero",
    businessName: "KeyLime Marketing",
    generatedAt: "2026-05-18",
    archetype: "professional-services / Citrus & Charcoal (Agencia X)",
  },
  {
    slug: "keylime-missed-call-widget",
    businessName: "KeyLime Marketing",
    generatedAt: "2026-05-18",
    archetype: "professional-services / Citrus & Charcoal (Agencia X)",
  },
  {
    slug: "keylime-problem-agitation",
    businessName: "KeyLime Marketing",
    generatedAt: "2026-05-20",
    archetype: "professional-services / Citrus & Charcoal (Agencia X)",
  },
];

export const pageComponents: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "linax-digital-landing": () => import("./linax-digital-landing/page"),
  "linax-digital-2": () => import("./linax-digital-2/page"),
  "linax-digital-3": () => import("./linax-digital-3/page"),
  "linax-digital-landing-blue": () => import("./linax-digital-landing-blue/page"),
  "linax-digital-4": () => import("./linax-digital-4/page"),
  "keylime-revenue-calculator": () =>
    import("./keylime-revenue-calculator/page"),
  "keylime-homepage-hero": () => import("./keylime-homepage-hero/page"),
  "keylime-missed-call-widget": () =>
    import("./keylime-missed-call-widget/page"),
  "keylime-problem-agitation": () =>
    import("./keylime-problem-agitation/page"),
};
