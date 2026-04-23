"use client";

import type { TestimonialItem } from "../../types";

export function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <article className="group flex cursor-default flex-col gap-6 border border-[#E5DCC9] border-t-4 border-t-clay-500 bg-white p-10 transition-[border-top-color,transform] duration-150 hover:-translate-y-0.5 hover:border-t-clay-700">
      {/* Result callout */}
      <div className="inline-flex self-start bg-sand-950 px-3.5 py-1.5 font-brand text-[10px] font-bold uppercase tracking-[0.12em] text-sand-50">
        {testimonial.resultCallout}
      </div>

      {/* Large opening quote mark */}
      <div
        aria-hidden="true"
        className="-mb-2 select-none font-brand text-[72px] font-black leading-[0.7] text-clay-500"
      >
        &ldquo;
      </div>

      <blockquote className="m-0 font-brand text-[14px] font-normal leading-[1.75] text-sand-700 not-italic">
        {testimonial.quote}
      </blockquote>

      <footer className="mt-auto border-t border-[#E5DCC9] pt-4">
        <div className="font-brand text-[13px] font-extrabold uppercase tracking-[0.04em] text-sand-950">
          {testimonial.name}
        </div>
        <div className="mt-1 font-brand text-[12px] text-sand-600">
          {testimonial.titleAndCompany}
        </div>
      </footer>
    </article>
  );
}
