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
];

export const pageComponents: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "linax-digital-landing": () => import("./linax-digital-landing/page"),
  "linax-digital-2": () => import("./linax-digital-2/page"),
  "linax-digital-3": () => import("./linax-digital-3/page"),
  "linax-digital-landing-blue": () => import("./linax-digital-landing-blue/page"),
};
