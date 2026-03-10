import Link from "next/link";
import { generatedPages, type GeneratedPage } from "../generated/index";

const archetypeColors: Record<string, string> = {
  "tech-saas": "#6366f1",
  "professional-services": "#0f766e",
  "local-business": "#b45309",
  ecommerce: "#dc2626",
  "creative-studio": "#9333ea",
};

export default function HubPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <header className="border-b border-zinc-800 px-8 py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-white">
              Landing Page Purgatory
            </h1>
            <p className="text-sm text-zinc-500 mt-0.5">
              Agent-generated preview canvas
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-2 py-1">
            {generatedPages.length} page{generatedPages.length !== 1 ? "s" : ""}
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-12">
        {generatedPages.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generatedPages.map((page) => (
              <PageCard key={page.slug} page={page} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-600"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-zinc-200 mb-2">
        No pages generated yet
      </h2>
      <p className="text-sm text-zinc-500 max-w-sm leading-relaxed mb-8">
        Run the agent pipeline for a client, then register the output in{" "}
        <code className="font-mono text-zinc-400 bg-zinc-900 px-1 rounded">
          generated/index.ts
        </code>
        .
      </p>
      <div className="text-left bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-xs font-mono text-zinc-400 max-w-md w-full">
        <p className="text-zinc-600 mb-2">{"// generated/index.ts"}</p>
        <p>
          <span className="text-indigo-400">export const</span>{" "}
          <span className="text-zinc-200">generatedPages</span>
          <span className="text-zinc-500">: GeneratedPage[] = [</span>
        </p>
        <p className="pl-4 text-zinc-500">{"{"}</p>
        <p className="pl-8">
          <span className="text-amber-400">slug</span>
          <span className="text-zinc-500">: </span>
          <span className="text-green-400">&apos;acme-corp&apos;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-8">
          <span className="text-amber-400">businessName</span>
          <span className="text-zinc-500">: </span>
          <span className="text-green-400">&apos;Acme Corp&apos;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-8">
          <span className="text-amber-400">generatedAt</span>
          <span className="text-zinc-500">: </span>
          <span className="text-green-400">&apos;2026-03-03&apos;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-8">
          <span className="text-amber-400">archetype</span>
          <span className="text-zinc-500">: </span>
          <span className="text-green-400">&apos;tech-saas&apos;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-4 text-zinc-500">{"}"}</p>
        <p className="text-zinc-500">{"];"}</p>
      </div>
    </div>
  );
}

function PageCard({ page }: { page: GeneratedPage }) {
  const accentColor = archetypeColors[page.archetype] ?? "#52525b";
  return (
    <Link
      href={`/${page.slug}`}
      className="group block bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-150"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${accentColor}22`, border: `1px solid ${accentColor}44` }}
        >
          <div
            className="w-full h-full rounded-lg opacity-60"
            style={{ backgroundColor: accentColor, mixBlendMode: "screen" }}
          />
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-700 group-hover:text-zinc-400 transition-colors mt-0.5"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>

      <h3 className="font-semibold text-zinc-100 text-sm mb-1 group-hover:text-white transition-colors">
        {page.businessName}
      </h3>
      <p className="text-xs text-zinc-500 font-mono mb-3">{page.slug}</p>

      <div className="flex items-center gap-2">
        <span
          className="text-xs px-2 py-0.5 rounded-full font-mono"
          style={{
            backgroundColor: `${accentColor}18`,
            color: accentColor,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {page.archetype}
        </span>
        <span className="text-xs text-zinc-600">{page.generatedAt}</span>
      </div>
    </Link>
  );
}
