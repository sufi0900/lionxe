// app/report/chapter-11/ClickWindowChart.tsx
"use client";

const SCENARIOS = [
  {
    label: "All Queries",
    sublabel: "Baseline (No AI Overview)",
    opportunity: 40,
    barColor: "#3B82F6",
    barGlow: "#1D4ED8",
  },
  {
    label: "AI Overview Present",
    sublabel: "34–61% CTR Impact",
    opportunity: 22,
    barColor: "#F59E0B",
    barGlow: "#B45309",
  },
  {
    label: "Informational + AIO",
    sublabel: "Company's Content Category",
    opportunity: 12,
    barColor: "#dc2626",
    barGlow: "#991B1B",
  },
];

export function ClickWindowChart({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  const vbW = 580;
  const vbH = 380;
  const chartTop = 55;
  const chartBottom = 310;
  const chartH = chartBottom - chartTop;
  const barW = 90;
  const barGap = 70;
  const totalBarsW = SCENARIOS.length * barW + (SCENARIOS.length - 1) * barGap;
  const startX = (vbW - totalBarsW) / 2;

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      <div className="px-4 py-5 sm:px-6" style={{ background: "var(--pale-blue)" }}>
        <div style={{ width: "100%", maxWidth: `${vbW}px`, margin: "0 auto", position: "relative", height: 0, paddingBottom: "65.52%" }}>
          <svg
            viewBox="0 0 580 380"
            width={580}
            height={380}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={title}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
          >
            <defs>
              {SCENARIOS.map((s, i) => (
                <linearGradient key={i} id={`barGradCh11_${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={s.barColor} stopOpacity="0.95" />
                  <stop offset="100%" stopColor={s.barGlow} stopOpacity="0.85" />
                </linearGradient>
              ))}
              <pattern id="absorbedPatternCh11" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <line x1="0" y1="6" x2="6" y2="0" stroke="#cbd5e1" strokeWidth="1" />
              </pattern>
            </defs>

            {[0, 25, 50, 75, 100].map((pct) => {
              const y = chartBottom - (pct / 100) * chartH;
              return (
                <g key={pct}>
                  <line
                    x1={startX - 15}
                    y1={y}
                    x2={startX + totalBarsW + 15}
                    y2={y}
                    stroke="#d1d5db"
                    strokeWidth="0.5"
                    strokeDasharray={pct === 0 ? "none" : "4,3"}
                  />
                  <text x={startX - 22} y={y + 3} textAnchor="end" fontSize="9" fontWeight="600" fill="#9ca3af">
                    {pct}%
                  </text>
                </g>
              );
            })}

            {SCENARIOS.map((s, i) => {
              const x = startX + i * (barW + barGap);
              const filledH = (s.opportunity / 100) * chartH;
              const filledY = chartBottom - filledH;
              const absorbedH = chartH - filledH;
              const centerX = x + barW / 2;

              return (
                <g key={i}>
                  <rect x={x} y={chartTop} width={barW} height={absorbedH} rx="4" fill="url(#absorbedPatternCh11)" opacity="0.4" />
                  <rect x={x} y={chartTop} width={barW} height={absorbedH} rx="4" fill="none" stroke="#cbd5e1" strokeWidth="0.5" />

                  <rect x={x} y={filledY} width={barW} height={filledH} rx="4" fill={`url(#barGradCh11_${i})`} />

                  <text x={centerX} y={filledY + filledH / 2 + 5} textAnchor="middle" fontSize="16" fontWeight="800" fill="#ffffff">
                    {s.opportunity}%
                  </text>

                  <text x={centerX} y={chartBottom + 20} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0A1628">
                    {s.label}
                  </text>
                  <text x={centerX} y={chartBottom + 33} textAnchor="middle" fontSize="9" fontWeight="500" fill="#6b7280">
                    {s.sublabel}
                  </text>

                  {absorbedH > 45 && (
                    <text x={centerX} y={chartTop + absorbedH / 2 + 4} textAnchor="middle" fontSize="9" fill="#334155" fontWeight="700">
                      {`${100 - s.opportunity}% Absorbed`}
                    </text>
                  )}
                </g>
              );
            })}

            <g transform={`translate(${vbW / 2 - 170}, ${vbH - 20})`}>
              <rect x={0} y={0} width={12} height={12} rx="2" fill="#3B82F6" />
              <text x={18} y={10} fontSize="9.5" fontWeight="600" fill="#4b5563">
                Remaining Organic Opportunity
              </text>

              <rect x={195} y={0} width={12} height={12} rx="2" fill="url(#absorbedPatternCh11)" stroke="#cbd5e1" strokeWidth="0.5" />
              <text x={213} y={10} fontSize="9.5" fontWeight="600" fill="#4b5563">
                Absorbed by SERP Features
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="border-t px-6 py-2.5" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-[10px] leading-relaxed" style={{ color: "var(--text-grey)" }}>
          Organic click window mapped as a percentage of overall landscape queries. Framework reflects active data verified over multi-million impression models tracking 2026 digital layout optimization trends.
        </p>
      </div>
    </div>
  );
}