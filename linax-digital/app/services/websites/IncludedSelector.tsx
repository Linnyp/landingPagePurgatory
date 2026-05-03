"use client";

import { useState } from "react";

export type IncludedItem = {
  no: string;
  title: string;
  body: string;
  icon: string;
  bullets: string[];
};

export function IncludedSelector({ items }: { items: IncludedItem[] }) {
  const [activeIndex, setActiveIndex] = useState(3);
  const active = items[activeIndex];

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
      {/* Active feature card */}
      <article
        key={active.no}
        className="relative flex h-full min-h-[360px] flex-col border-2 border-sand-950 bg-sand-50 p-9 lg:p-11"
      >
        <span className="font-brand text-[12px] font-bold tracking-[0.18em] text-clay-500">
          {`${activeIndex + 1}/${items.length}`}
        </span>
        <h3 className="mt-7 m-0 font-brand text-[22px] font-extrabold uppercase leading-[1.15] tracking-[-0.005em] text-sand-950 lg:text-[24px]">
          {active.title}
        </h3>
        <p className="mt-5 m-0 font-brand text-[15px] leading-[1.65] text-sand-700">
          {active.body}
        </p>
        <ul className="mt-6 m-0 list-disc space-y-1 pl-5 font-brand text-[14px] leading-[1.7] text-sand-900 marker:text-clay-500">
          {active.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </article>

      {/* Feature selector grid */}
      <div className="lg:pt-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.01em] text-sand-950 lg:text-[30px]">
            Select Feature
          </h3>
          <span className="font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-sand-600">
            Tap to preview
          </span>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
          {items.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={item.no}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-pressed={isActive}
                className="group flex items-center gap-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-clay-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden
                  className={`h-12 w-12 shrink-0 object-contain transition-transform duration-150 ${
                    isActive ? "scale-105" : "group-hover:scale-105"
                  }`}
                />
                <span
                  className={`font-brand text-[15px] font-extrabold uppercase leading-[1.2] tracking-[0.02em] transition-colors duration-150 ${
                    isActive
                      ? "text-clay-500 underline decoration-clay-500 decoration-2 underline-offset-[6px]"
                      : "text-sand-950 group-hover:text-clay-500"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
