// app/report/chapter-11/StrategicCrossroadsChart.tsx
//
// Systems choice map illustrating the strategic fork: fragmented portfolio 
// execution vs. single-domain consolidated authority architecture.
//
// Pattern: chapter-specific component, imported directly by the page.

"use client";

const SCATTERED_BLOCKS = [
  [30, 50, 38, 14], [80, 48, 35, 14], [130, 52, 40, 14],
  [185, 46, 32, 14], [225, 54, 36, 14],
  [18, 74, 44, 14], [70, 78, 30, 14], [110, 72, 42, 14],
  [160, 76, 34, 14], [205, 70, 38, 14], [250, 76, 28, 14],
  [25, 98, 36, 14], [72, 100, 40, 14], [120, 96, 32, 14],
  [162, 102, 38, 14], [210, 94, 42, 14],
  [35, 122, 30, 14], [78, 120, 44, 14], [130, 124, 34, 14],
  [178, 118, 36, 14], [224, 122, 32, 14],
  [22, 146, 40, 14], [70, 148, 32, 14], [112, 144, 38, 14],
  [160, 148, 30, 14], [200, 142, 44, 14],
  [40, 170, 34, 14], [82, 172, 38, 14], [128, 168, 36, 14],
  [174, 174, 32, 14], [215, 168, 40, 14],
  [28, 194, 42, 14], [76, 196, 30, 14], [118, 192, 34, 14],
  [162, 198, 38, 14], [208, 192, 36, 14],
];

export function StrategicCrossroadsChart({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  const vbW = 620;
  const vbH = 300;

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* Header Band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* Intrinsic Ratio Containment Canvas */}
      <div className="px-4 py-6 sm:px-6" style={{ background: "var(--pale-blue)" }}>
        <div
          style={{
            width: "100%",
            maxWidth: `${vbW}px`,
            margin: "0 auto",
            position: "relative",
            height: 0,
            paddingBottom: "48.39%", // Immutable aspect box lock (300 / 620)
          }}
        >
          <svg
            viewBox="0 0 620 300"
            width={620}
            height={300}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            <defs>
              <linearGradient id="crossroadsAuthGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--navy)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* ── LEFT CLUSTER: Fragmented Model ── */}
            <text x="140" y="28" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6b7280" letterSpacing="0.08em">
              CURRENT MODEL
            </text>

            {SCATTERED_BLOCKS.map(([x, y, w, h], i) => (
              <rect
                key={i}
                x={x}
                y={y}
                width={w}
                height={h}
                rx="2"
                fill={i < 18 ? "#dc2626" : "#eab308"}
                opacity={0.25 + (i % 5) * 0.08}
              />
            ))}

            <text x="140" y="234" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--navy)">
              87 Isolated Domains
            </text>
            <text x="140" y="249" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b7280">
              261 Fragmented Social Channels
            </text>
            <text x="140" y="263" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b7280">
              ~226,200 Doorway Pages
            </text>
            <text x="140" y="282" textAnchor="middle" fontSize={9.5} fontWeight="700" fill="#dc2626">
              Authority split. Equity leaking.
            </text>

            {/* ── CENTER SEGMENT: Strategic Crossroads Fork ── */}
            <line x1="310" y1="50" x2="310" y2="220" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6,4" />
            <circle cx="310" cy="140" r="28" fill="#ffffff" stroke="var(--navy)" strokeWidth="2" />
            <text x="310" y="149" textAnchor="middle" fontSize="26" fontWeight="800" fill="var(--navy)">
              ?
            </text>
            <text x="310" y="192" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6b7280" letterSpacing="0.1em">
              OR
            </text>

            {/* ── RIGHT SEGMENT: Consolidated Architecture ── */}
            <text x="480" y="28" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6b7280" letterSpacing="0.08em">
              CONSOLIDATED MODEL
            </text>

            {/* Premium Platform Container */}
            <rect x="410" y="60" width="140" height="152" rx="12" fill="url(#crossroadsAuthGrad)" />
            
            {/* Browser Window UI Illusion */}
            <path d="M 410 84 L 550 84" stroke="#ffffff" strokeWidth="1" opacity="0.1" />
            <circle cx="421" cy="72" r="2.5" fill="#ffffff" opacity="0.3" />
            <circle cx="430" cy="72" r="2.5" fill="#ffffff" opacity="0.3" />
            <circle cx="439" cy="72" r="2.5" fill="#ffffff" opacity="0.3" />

            {/* Hub and Spoke Topology: Concentrating Authority */}
            <line x1="480" y1="140" x2="445" y2="105" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            <line x1="480" y1="140" x2="515" y2="105" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            <line x1="480" y1="140" x2="435" y2="145" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            <line x1="480" y1="140" x2="525" y2="145" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            <line x1="480" y1="140" x2="445" y2="180" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            <line x1="480" y1="140" x2="515" y2="180" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />

            {/* Outer Nodes (Pillar Clusters) */}
            <circle cx="445" cy="105" r="6" fill="#bfdbfe" opacity="0.85" />
            <circle cx="515" cy="105" r="6" fill="#bfdbfe" opacity="0.85" />
            <circle cx="435" cy="145" r="6" fill="#bfdbfe" opacity="0.85" />
            <circle cx="525" cy="145" r="6" fill="#bfdbfe" opacity="0.85" />
            <circle cx="445" cy="180" r="6" fill="#bfdbfe" opacity="0.85" />
            <circle cx="515" cy="180" r="6" fill="#bfdbfe" opacity="0.85" />

            {/* Central Hub (The Single Authority Brand) */}
            <circle cx="480" cy="140" r="22" fill="#ffffff" opacity="0.1" />
            <circle cx="480" cy="140" r="18" fill="#1d4ed8" />
            <circle cx="480" cy="140" r="18" fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.5" />

            {/* Verified Shield Icon */}
            <path d="M480 128 L490 132 V140 C490 144, 480 149, 480 149 C480 149, 470 144, 470 140 V132 Z" fill="#ffffff" />
            <path d="M475 138.5 L478.5 142 L485.5 135" stroke="#1d4ed8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            <text x="480" y="234" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--navy)">
              1 Authority Domain
            </text>
            <text x="480" y="249" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b7280">
              Unified Platform Identity
            </text>
            <text x="480" y="263" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b7280">
              Pillar-Cluster Topical Integrity
            </text>
            <text x="480" y="282" textAnchor="middle" fontSize={9.5} fontWeight="700" fill="#22c55e">
              Authority aggregated. Valuation compounding.
            </text>
          </svg>
        </div>
      </div>

      {/* Footnote */}
      <div className="border-t px-6 py-2.5" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-[10px] leading-relaxed" style={{ color: "var(--text-grey)" }}>
          Structural mapping contrasting decentralized asset scale against corporate domain authority concentration under modern generative evaluation constraints.
        </p>
      </div>
    </div>
  );
}