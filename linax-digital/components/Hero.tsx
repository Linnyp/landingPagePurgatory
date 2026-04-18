"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollVideo from "./ScrollVideo";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-anim='headline']", {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
        duration: 0.9,
        ease: "power4.out",
      });

      gsap.from("[data-anim='fade-up']", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.15,
      });

      gsap.from("[data-anim='visual']", {
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.25,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative bg-[var(--color-sand-50)] pt-32 pb-0"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(194, 85, 45, 0.04) 0%, transparent 60%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col">
          <p
            data-anim="fade-up"
            className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-clay-500)]"
          >
            Digital Marketing for Southwest Florida
          </p>

          <h1
            data-anim="headline"
            className="mt-5 font-[var(--font-display)] text-[2.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-sand-950)] md:text-[3.5rem]"
          >
            More leads. More customers.{" "}
            <em className="font-medium italic">More work for you.</em>
          </h1>

          <p
            data-anim="fade-up"
            className="mt-6 max-w-[640px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-sand-700)] md:text-lg"
          >
            We build websites, run ads, and manage your online reputation so
            your phone keeps ringing and you can get back to running your
            business. No account managers. No jargon. Just the marketing your
            local business needs, done by someone who actually does the work.
          </p>

          <div
            data-anim="fade-up"
            className="mt-10 flex flex-col flex-wrap gap-4 min-[480px]:flex-row"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-clay-500)] px-7 py-4 font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-sand-50)] transition-colors duration-200 hover:bg-[var(--color-clay-600)]"
            >
              Book a free consult
              <span aria-hidden>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-sand-200)] bg-transparent px-7 py-4 font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-sand-950)] transition-colors duration-200 hover:bg-[var(--color-sand-100)]"
            >
              See what we do
            </a>
          </div>

          <ul
            data-anim="fade-up"
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-[var(--font-body)] text-[13px] font-medium text-[var(--color-sand-600)]"
          >
            <li className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-clay-500)]"
              />
              Based in Cape Coral, FL
            </li>
            <li className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-clay-500)]"
              />
              Month-to-month on SEO, Ads &amp; Reputation
            </li>
            <li className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-clay-500)]"
              />
              Founder-led
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
