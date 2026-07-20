// app/report/chapter-11/StrategicChoiceDiagram.tsx
//
// Systems diagram illustrating the strategic choice: Fragmented URL/Domain footprint
// on the left vs. a single, high-authority consolidated domain ecosystem on the right.
//
// Pattern: chapter-specific component, imported directly by the page.

"use client";

export function StrategicChoiceDiagram({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  const vbW = 600;
  const vbH = 240;

  // Generate rows of small scattered nodes for the fragmented footprint
  const nodes = [
    { x: 50, y: 75 }, { x: 80, y: 65 }, { x: 110, y: 80 }, { x: 140, y: 70 },
    { x: 60, y: 110 }, { x: 95, y: 100 }, { x: 130, y: 115 }, { x: 160, y: 105 },
    { x: 45, y: 150 }, { x: 75, y: 140 }, { x: 115, y: 155 }, { x: 145, y: 145 },
    { x: 70, y: 185 }, { x: 100, y: 175 }, { x: 135, y: 185 }, { x: 165, y: 170 }
  ];

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.06)",
      }}
    >
      {/* Header Band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* SVG Canvas with Intrinsic Aspect Ratio Lock */}
      <div className="px-4 py-6 sm:px-6" style={{ background: "var(--pale-blue)" }}>
        <div
          style={{
            width: "100%",
            maxWidth: `${vbW}px`,
            margin: "0 auto",
            position: "relative",
            height: 0,
            paddingBottom: "40.00%", // Strict 600x240 Aspect Ratio
          }}
        >
          <svg
            viewBox="0 0 600 240"
            width={600}
            height={240}
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
            {/* Background Panel Accents */}
            <rect x={15} y={40} width={200} height={170} rx={8} fill="#ffffff" stroke="#f1f5f9" strokeWidth={1} />
            <rect x={385} y={40} width={200} height={170} rx={8} fill="#ffffff" stroke="#f1f5f9" strokeWidth={1} />

            {/* LEFT SIDE: Fragmented Infrastructure Footprint */}
            {nodes.map((node, i) => (
              <g key={i}>
                <circle cx={node.x} y={node.y} r={5} fill="#fee2e2" stroke="#ef4444" strokeWidth={1} />
                <line x1={node.x} y1={node.y} x2={node.x + 8} y2={node.y + 4} stroke="#fca5a5" strokeWidth={0.5} opacity={0.7} />
              </g>
            ))}
            <text x={115} y={200} textAnchor="middle" fontSize={10} fontWeight={700} fill="#dc2626">
              CURRENT FOOTPRINT
            </text>
            <text x={115} y={212} textAnchor="middle" fontSize={8.5} fontWeight={500} fill="#6b7280">
              87 Multi-Site Doorway Nodes
            </text>

            {/* CENTER: The Strategic Crossroads Fork */}
            <g transform="translate(275, 95)">
              <circle cx={25} r={25} fill="#0A1628" />
              <text x={25} y={9} textAnchor="middle" fontSize={24} fontWeight={700} fill="#ffffff">
                ?
              </text>
              
              {/* Left Dynamic Path Line */}
              <path d="M -45,30 Q -10,30 0,0" fill="none" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="3,3" />
              {/* Right Dynamic Path Line */}
              <path d="M 50,0 Q 60,30 95,30" fill="none" stroke="#3b82f6" strokeWidth={1.5} />
            </g>

            {/* RIGHT SIDE: Unified Domain Authority Ecosystem */}
            <g transform="translate(415, 65)">
              {/* Central Authority Vault Body */}
              <rect x={0} y={0} width={140} height={100} rx={6} fill="#f0f7ff" stroke="#3b82f6" strokeWidth={1.5} />
              {/* Concentrated Authority Rays */}
              <circle cx={70} cy={50} r={22} fill="#3b82f6" opacity={0.1} />
              <circle cx={70} cy={50} r={12} fill="#3b82f6" />
              <polyline points="66,50 69,53 75,47" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              
              <text x={70} y={135} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1e3a8a">
                UNIFIED ARCHITECTURE
              </text>
              <text x={70} y={147} textAnchor="middle" fontSize={8.5} fontWeight={500} fill="#6b7280">
                Single Authority Domain Profile
              </text>
            </g>

            {/* Directional Connector Indicator Links */}
            <path d="M 225,120 L 245,120" fill="none" stroke="#cbd5e1" strokeWidth={1.5} markerEnd="url(#arrow)" />
            <path d="M 355,120 L 375,120" fill="none" stroke="#3b82f6" strokeWidth={1.5} markerEnd="url(#arrow)" />
          </svg>
        </div>
      </div>
    </div>
  );
}