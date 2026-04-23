"use client";

import type { ProblemItem } from "../../types";

interface ProblemCardProps {
  problem: ProblemItem;
  index: number;
  total: number;
}

export function ProblemCard({ problem, index, total }: ProblemCardProps) {
  const isLast = index === total - 1;
  return (
    <article
      className={`group cursor-default border-x-4 border-t-4 border-sand-950 bg-white p-10 transition-colors duration-150 hover:bg-clay-500 ${
        isLast ? "border-b-4" : ""
      } ${index > 0 ? "-mt-1" : ""}`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="font-brand text-[20px] font-extrabold uppercase tracking-[-0.02em] text-sand-950 transition-colors duration-150 group-hover:text-sand-50">
          {problem.name}
        </h3>
        <span className="shrink-0 font-brand text-[11px] font-black tracking-[0.1em] text-clay-500 transition-colors duration-150 group-hover:text-sand-50">
          0{index + 1}
        </span>
      </div>

      <p className="mb-5 font-brand text-[15px] leading-[1.7] text-sand-600 transition-colors duration-150 group-hover:text-white/90">
        {problem.body}
      </p>

      <p className="font-brand text-[15px] leading-[1.7] text-sand-600 transition-colors duration-150 group-hover:text-white/90">
        <span className="font-bold text-clay-500 transition-colors duration-150 group-hover:text-sand-50">
          Solution:
        </span>{" "}
        {problem.solution}
      </p>
    </article>
  );
}
