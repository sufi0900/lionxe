// app/report/chapter-5/PipelineTimeline.tsx
//
// Professional horizontal timeline for pipeline phases. 
// Uses variant prop to switch between warning (red) and success (green) gradients.

type TimelineStep = {
  label: string;
  sublabel?: string;
};

export function PipelineTimeline({
  figureNumber,
  title,
  steps,
  variant = "warning",
  caption,
}: {
  figureNumber: string;
  title: string;
  steps: TimelineStep[];
  variant?: "warning" | "success";
  caption?: string;
}) {
  // Define color arrays based on the variant
  const isWarning = variant === "warning";
  
  const colors = isWarning 
    ? ["#fecaca", "#f87171", "#dc2626"] // Light Red -> Medium Red -> Dark Red
    : ["#bbf7d0", "#4ade80", "#15803d"]; // Light Green -> Medium Green -> Dark Green

  const lineGradient = isWarning
    ? "linear-gradient(to right, #fecaca, #dc2626)"
    : "linear-gradient(to right, #bbf7d0, #15803d)";

  return (
    <div 
      className="avoid-break my-7 rounded-xl border p-6 overflow-hidden bg-white" 
      style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)" }}
    >
      <p
        className="mb-8 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="relative">
        {/* Horizontal Track Line */}
        <div 
          className="absolute top-5 left-0 right-0 h-1 rounded-full" 
          style={{ background: lineGradient, zIndex: 0 }}
        ></div>

        {/* Steps Grid */}
        <div className="relative z-10 flex justify-between items-start">
          {steps.map((step, i) => {
            // Calculate which color to use based on position
            const colorIndex = Math.floor((i / (steps.length - 1)) * (colors.length - 1));
            const nodeColor = colors[Math.min(colorIndex, colors.length - 1)];
            
            // First node text color should be dark, others white
            const isLightNode = i === 0;
            const nodeTextColor = isLightNode ? (isWarning ? "#991b1b" : "#14532d") : "white";

            return (
              <div key={i} className="flex flex-col items-center w-1/3 px-2">
                {/* Numbered Node */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md border-4 border-white"
                  style={{ background: nodeColor, color: nodeTextColor }}
                >
                  {i + 1}
                </div>
                
                {/* Step Card */}
                <div className="mt-4 w-full bg-slate-50 rounded-xl p-4 text-center border border-slate-100 shadow-sm">
                  <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>{step.label}</p>
                  {step.sublabel && (
                    <p className="mt-1 text-[11px] text-slate-500">{step.sublabel}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {caption && (
        <p className="mt-6 text-center text-xs italic" style={{ color: "var(--text-light)" }}>
          {caption}
        </p>
      )}
    </div>
  );
}