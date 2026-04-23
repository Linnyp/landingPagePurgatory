"use client";

import CardNav from "@/components/CardNav";

const LOGO_SRC = "/linax-digital-logo.png";

const NAV_ITEMS = [
  {
    label: "Services",
    bgColor: "var(--color-sand-900)",
    textColor: "#FFFFFF",
    links: [
      { label: "Services", ariaLabel: "Our Services", href: "#services" },
      { label: "How It Works", ariaLabel: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    label: "Results",
    bgColor: "var(--color-sand-800)",
    textColor: "#FFFFFF",
    links: [
      { label: "Results", ariaLabel: "Our Results", href: "#results" },
      { label: "Pricing", ariaLabel: "Pricing Plans", href: "#pricing" },
    ],
  },
  {
    label: "Contact",
    bgColor: "var(--color-clay-500)",
    textColor: "#FFFFFF",
    links: [
      { label: "FAQ", ariaLabel: "Frequently Asked Questions", href: "#faq" },
      {
        label: "Book a Free Call",
        ariaLabel: "Book a Free Discovery Call",
        href: "#contact",
      },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0">
      <div className="nav-silk-bg bg-sand-frost" />
      <div className="pointer-events-auto">
        <CardNav
          logo={LOGO_SRC}
          logoAlt="Linax Digital"
          items={NAV_ITEMS}
          baseColor="transparent"
          menuColor="#1F1B16"
          buttonBgColor="#C2552D"
          buttonTextColor="#FBF8F3"
        />
      </div>
    </div>
  );
}
