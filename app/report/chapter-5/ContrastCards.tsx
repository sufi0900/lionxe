// components/report/ContrastCards.tsx
//
// Two-column contrast visualization for list-based content.
// Left side (red gradient) shows what changes/what's wrong.
// Right side (blue gradient) shows what stays the same/what's right.
// Optimized for bullet-point content with cleaner, more professional styling.

export function ContrastCards({
  figureNumber,
  title,
  leftLabel,
  leftItems,
  rightLabel,
  rightItems,
}: {
  figureNumber: string;
  title: string;
  leftLabel: string;
  leftItems?: string[]; // For list-based content
  leftBody?: string; // For paragraph content (backwards compatibility)
  rightLabel: string;
  rightItems?: string[]; // For list-based content
  rightBody?: string; // For paragraph content (backwards compatibility)
}) {
  // Determine if using list items or body text
  const leftHasItems = leftItems && leftItems.length > 0;
  const rightHasItems = rightItems && rightItems.length > 0;

  return (
    <div className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* Header */}
      <div className="px-6 py-4" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white opacity-75">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-1 text-sm font-bold text-white">{title}</p>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
        {/* LEFT COLUMN — What Changes / Warning Side */}
        <div
          style={{
            background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
            borderRight: "1px solid var(--border-grey)",
          }}
          className="p-6"
        >
          {/* Label */}
          <div
            className="mb-4 inline-block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
            style={{ background: "var(--red-flag)" }}
          >
            {leftLabel}
          </div>

          {/* Content */}
          {leftHasItems ? (
            <ul className="space-y-2.5">
              {leftItems.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="mt-1 flex-shrink-0 text-sm font-bold"
                    style={{ color: "var(--red-flag)" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#7f1d1d" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed italic" style={{ color: "#7f1d1d" }}>
              {/* Backwards compatibility for old body prop */}
            </p>
          )}
        </div>

        {/* RIGHT COLUMN — What Stays the Same / Good Side */}
        <div
          style={{
            background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
          }}
          className="p-6"
        >
          {/* Label */}
          <div
            className="mb-4 inline-block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
            style={{ background: "#0284c7" }}
          >
            {rightLabel}
          </div>

          {/* Content */}
          {rightHasItems ? (
            <ul className="space-y-2.5">
              {rightItems.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="mt-1 flex-shrink-0 text-sm font-bold"
                    style={{ color: "#0284c7" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#0c4a6e" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--navy)" }}>
              {/* Backwards compatibility for old body prop */}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}