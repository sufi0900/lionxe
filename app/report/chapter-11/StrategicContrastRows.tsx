// app/report/chapter-11/StrategicContrastRows.tsx
//
// High-contrast matrix listing component that demonstrates standalone, non-narrative
// landscape friction points side-by-side. Evaluates what the current volume model 
// outputs (Red accent) vs what the search landscape algorithms reward (Blue/Green accent).

"use client";

const CONTRAST_ITEMS = [
  {
    current: "Volume of URLs.",
    rewarded: "Depth of coverage."
  },
  {
    current: "Authority fragmented across 87 domains and 261 social accounts.",
    rewarded: "Authority concentrated in a single, trusted domain."
  },
  {
    current: "Automated content with no original-insight stage.",
    rewarded: "Content with genuine expertise and first-hand experience."
  },
  {
    current: "Keywords treated as isolated targets in a flat list.",
    rewarded: "Structured topical architecture with pillar-cluster hierarchy."
  },
  {
    current: "Detection-score optimization.",
    rewarded: "Citation authority and E-E-A-T signals."
  }
];

export function StrategicContrastRows({
  figureNumber,
  title,
  leftLabel,
  rightLabel,
}: {
  figureNumber: string;
  title: string;
  leftLabel: string;
  rightLabel: string;
}) {
  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* ── Header Band ── */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* ── Layout Matrix Content ── */}
      <div className="p-5 space-y-4" style={{ background: "#ffffff" }}>
        
        {/* Desktop Headings Row */}
        <div className="hidden md:grid grid-cols-2 gap-5 pb-2 border-b border-slate-100">
          <p className="text-[10px] font-bold uppercase tracking-wider text-red-600">
            {leftLabel}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            {rightLabel}
          </p>
        </div>

        {/* Matrix Lane Stack Loop */}
        {CONTRAST_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch"
          >
            {/* Left Block: Current Structural Risk Factor */}
            <div
              className="rounded-lg p-3.5 border border-red-100 flex flex-col justify-center"
              style={{
                borderLeft: "4px solid #ef4444",
                background: "#fef2f2",
              }}
            >
              <span className="md:hidden text-[9px] font-bold text-red-500 uppercase tracking-wider mb-1 block">
                {leftLabel}
              </span>
              <p className="text-xs font-medium text-red-950 leading-relaxed">
                {item.current}
              </p>
            </div>

            {/* Right Block: Proposed Modern Search Reward */}
            <div
              className="rounded-lg p-3.5 border border-blue-100 flex flex-col justify-center"
              style={{
                borderLeft: "4px solid #3b82f6",
                background: "#f0f9ff",
              }}
            >
              <span className="md:hidden text-[9px] font-bold text-blue-500 uppercase tracking-wider mb-1 block">
                {rightLabel}
              </span>
              <p className="text-xs font-semibold text-blue-950 leading-relaxed">
                {item.rewarded}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}