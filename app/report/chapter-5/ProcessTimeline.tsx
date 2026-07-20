// app/report/chapter-5/ProcessTimeline.tsx
//
// A professional horizontal timeline component that supports 
// dynamic color gradients based on the 'variant' prop.

type TimelineStep = {
  label: string;
  description?: string;
};

export function ProcessTimeline({
  figureNumber,
  title,
  steps,
  variant = "success",
}: {
  figureNumber: string;
  title: string;
  steps: TimelineStep[];
  variant?: "warning" | "success";
}) {
  // Define color palettes for the gradients
  const warningColors = ["#fee2e2", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#991b1b"];
  const successColors = ["#dcfce7", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d"];
  
  const colors = variant === "warning" ? warningColors : successColors;
  const gradient = variant === "warning" 
    ? "linear-gradient(to right, #fee2e2, #991b1b)" 
    : "linear-gradient(to right, #dcfce7, #15803d)";
  
  // High-contrast colors for labels and descriptions
  const labelColor = variant === "warning" ? "#991b1b" : "#15803d";
  const descColor = "#334155"; // Dark slate instead of faint slate-500 for readability
  
  // Dark text specifically for the first two light-pastel nodes to fix white-on-white bug
  const darkNodeText = variant === "warning" ? "#7f1d1d" : "#14532d";

  return (
    <div className="avoid-break my-7 rounded-xl border overflow-hidden" style={{ borderColor: "var(--border-grey)", background: "white", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)" }}>
      <p className="px-5 py-3 text-xs font-bold uppercase tracking-wide" style={{ background: "var(--navy)", color: "white" }}>
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="p-8">
        {/* Desktop & Mobile: Horizontal Track */}
        <div className="relative">
          {/* Background Track - slightly thicker for better visibility */}
          <div className="absolute top-5 left-0 right-0 h-1.5 rounded-full" style={{ background: gradient }}></div>
          
          <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-2">
            {steps.map((step, i) => {
              const color = colors[i] || colors[colors.length - 1];
              
              // Apply dark text to the first two pastel nodes, white text to the darker nodes
              const isLightNode = i <= 1; 
              const nodeTextColor = isLightNode ? darkNodeText : "white";

              return (
                <div key={i} className="flex flex-col items-center text-center z-10">
                  {/* Node */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold shadow-lg border-2 border-white"
                    style={{ 
                      background: color,
                      color: nodeTextColor, // Dynamic text color fixes the visibility issue
                      // Add a subtle matching ring to light nodes so they pop off the track
                      boxShadow: isLightNode 
                        ? `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 0 3px ${color}40` 
                        : "0 4px 6px -1px rgb(0 0 0 / 0.15)" 
                    }}
                  >
                    {i + 1}
                  </div>
                  
                  {/* Label Card */}
                  <div 
                    className="mt-4 px-2 py-2 rounded-lg w-full border"
                    style={{ 
                      background: `${color}15`, 
                      borderColor: `${color}40` // Subtle border adds definition to the pale card
                    }}
                  >
                    <p className="text-xs font-bold" style={{ color: labelColor }}>
                      {step.label}
                    </p>
                    {step.description && (
                      <p 
                        className="text-[10px] mt-1 leading-tight font-medium" 
                        style={{ color: descColor }} // Upgraded from text-slate-500
                      >
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}