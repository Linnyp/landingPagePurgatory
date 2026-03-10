import { ComponentType } from "react";

export interface GeneratedPage {
  slug: string;
  businessName: string;
  generatedAt: string;
  archetype: string;
}

export const generatedPages: GeneratedPage[] = [
  {
    slug: "linax-digital",
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
];

export const pageComponents: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "linax-digital": () => import("./linax-digital/page"),
  "linax-digital-2": () => import("./linax-digital-2/page"),
};
