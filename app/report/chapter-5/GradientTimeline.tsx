// components/report/GradientTimeline.tsx
//
// A professional, strictly-sized horizontal timeline for sequential steps.
// Uses native SVG linearGradients for the track color transitions.
// CRITICAL: No inline style widths/heights are applied to the SVG to 
// prevent Puppeteer 0px height collapse bugs.

type TimelineStep = {
  label: string;
  sublabel: string;
  highlight?: boolean;
};

export function GradientTimeline({
  figureNumber,
  title,
  steps,
  caption,
  gradientStart,
  gradientEnd,
  accentColor,
}: {
  figureNumber: string;
  title: string;
  steps: TimelineStep[];
  caption?: string;
  gradientStart: string; 
  gradientEnd: string;   
  accentColor: string;   
}) {
  // Puppeteer-safe explicit static dimensions
  const svgW = 950;
  const svgH = 240;
  const startX = 90;
  const endX = 860;
  const lineY = 150;
  
  // Calculate spacing dynamically based on number of steps
  const spacing = steps.length > 1 ? (endX - startX) / (steps.length - 1) : 0;

  // Generate a unique ID for the gradient to prevent SVG conflicts
  const gradId = `grad-${figureNumber.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div className="avoid-break my-7">
      <p
        className="mb-3 text-xs font-bold uppercase tracking-wide"
        style={{ color: "#94a3b8" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      {/* Wrapper handles horizontal scrolling on small screens if needed */}
      <div className="overflow-x-auto rounded-xl border bg-white" style={{ borderColor: "#e2e8f0" }}>
        <div style={{ width: "950px" }}>
          <svg
            viewBox="0 0 950 240"
            width="950"
            height="240"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={gradientStart} />
                <stop offset="100%" stopColor={gradientEnd} />
              </linearGradient>
              <filter id="ttShadow" x="-10%" y="-10%" width="120%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* The Gradient Track Line */}
            <line
              x1={startX}
              y1={lineY}
              x2={endX}
              y2={lineY}
              stroke={`url(#${gradId})`}
              strokeWidth="6"
              strokeLinecap="round"
            />

            {steps.map((step, i) => {
              const x = startX + i * spacing;
              const isLast = i === steps.length - 1;
              const nodeR = isLast ? 14 : 10;
              
              return (
                <g key={i}>
                  {/* Connector line from track to text box */}
                  <line
                    x1={x}
                    y1={lineY - nodeR - 2}
                    x2={x}
                    y2={lineY - 55}
                    stroke={accentColor}
                    strokeWidth="1.5"
                    strokeDasharray="4,3"
                    opacity="0.5"
                  />

                  {/* Text Box Background */}
                  <rect
                    x={x - 70}
                    y={lineY - 115}
                    width="140"
                    height="58"
                    rx="8"
                    fill="#ffffff"
                    stroke={isLast ? accentColor : "#cbd5e1"}
                    strokeWidth={isLast ? "2" : "1"}
                    filter="url(#ttShadow)"
                  />

                  {/* Step Label Text */}
                  <text
                    x={x}
                    y={lineY - 86}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="800"
                    fill={isLast ? accentColor : "#0A1628"}
                  >
                    {step.label}
                  </text>

                  {/* Step Sublabel Text */}
                  <text
                    x={x}
                    y={lineY - 68}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight="500"
                    fill="#64748b"
                  >
                    {step.sublabel}
                  </text>

                  {/* Timeline Node Circle */}
                  <circle
                    cx={x}
                    cy={lineY}
                    r={nodeR}
                    fill={isLast ? accentColor : "#ffffff"}
                    stroke={accentColor}
                    strokeWidth={isLast ? "0" : "2.5"}
                  />
                  
                  {/* Inner dot for non-highlighted nodes */}
                  {!isLast && (
                    <circle
                      cx={x}
                      cy={lineY}
                      r="4"
                      fill={accentColor}
                      opacity="0.6"
                    />
                  )}

                  {/* Checkmark for final node */}
                  {isLast && (
                    <path
                      d={`M${x - 5} ${lineY + 1} l3 3 l6 -7`}
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {caption && (
        <p
          className="mt-3 text-xs italic leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}