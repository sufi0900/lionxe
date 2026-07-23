// app/report/table-of-contents/page.tsx

import "@/styles/report.css";
import { Paragraph } from "@/components/report/Headings";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

const TOC = [
  {
    category: "Front Matter",
    entries: [{ title: "Executive Summary", anchor: "#executive-summary" }],
  },
  {
    category: "Part I — Foundation and Context",
    entries: [
      { number: "1", title: "Enterprise Profile and the Vision for Nationwide Digital Growth", anchor: "#chapter-1" },
      { number: "2", title: "Research Methodology and Data Integrity", anchor: "#chapter-2" },
    ],
  },
  {
    category: "Part II — Diagnostic: Factor-by-Factor Analysis",
    entries: [
      { number: "3", title: "The Infrastructure of the Documented Network", anchor: "#chapter-3" },
      { number: "4", title: "Content Quality and the Shift to Intent-Based Search", anchor: "#chapter-4" },
      { number: "5", title: "AI-Assisted Content and the Detection Misconception", anchor: "#chapter-5" },
      { number: "6", title: "Content Structure and Template Uniformity", anchor: "#chapter-6" },
      { number: "7", title: "AI Symbols, Prohibited Phrases, and the Fear-Driven Workflow", anchor: "#chapter-7" },
      { number: "8", title: "Site Architecture and Keyword Strategy", anchor: "#chapter-8" },
      { number: "9", title: "Video and Social Media Strategy", anchor: "#chapter-9" },
      { number: "10", title: "Resource Allocation and Departmental Capacity", anchor: "#chapter-10" },
    ],
  },
  {
    category: "Part III — Strategic Synthesis and Transformation",
    entries: [
      { number: "11", title: "The Strategic Landscape and the Turning Point", anchor: "#chapter-11" },
      { number: "12", title: "The LIONXE Standard: The Lens Behind This Audit", anchor: "#chapter-12" },
      { number: "13", title: "The Unified Digital Architecture: The Single Authority Brand", anchor: "#chapter-13" },
      { number: "14", title: "Two Paths Forward", anchor: "#chapter-14" },
      { number: "15", title: "Implementation Roadmap", anchor: "#chapter-15" },
      { number: "16", title: "Closing Synthesis", anchor: "#chapter-16" },
    ],
  },
];

// Removed 'export' keyword here to comply with Next.js App Router standards
function TableOfContentsContent() {
  return (
    <>
      <div className="mb-10 mt-4">
        <div className="mb-3 h-[3px] w-16" style={{ background: "var(--lionxe-blue)" }} />
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--navy)" }}>
          Table of Contents
        </h1>
      </div>
      {TOC.map((section, si) => (
        <div key={si} className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: "var(--lionxe-blue)" }}>
            {section.category}
          </p>
          <div className="space-y-0.5">
            {section.entries.map((entry, ei) => (
              <a
                key={ei}
                href={entry.anchor}
                className="flex items-baseline gap-3 border-b py-2.5 no-underline transition-colors hover:bg-gray-50"
                style={{ borderColor: "#f0f2f5", textDecoration: "none" }}
              >
                {entry.number ? (
                  <span className="flex-shrink-0 text-sm font-bold" style={{ color: "var(--navy)", minWidth: "32px" }}>
                    {`Ch ${entry.number}`}
                  </span>
                ) : (
                  <span style={{ minWidth: "32px" }} />
                )}
                <span className="text-sm" style={{ color: "var(--text-grey)" }}>{entry.title}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
      <Paragraph>
        Each chapter includes a dedicated Scope and Confidence section before
        its summary, identifying which findings are directly observed, which are
        drawn from published standards, and which are projections.
      </Paragraph>
    </>
  );
}

export default function TableOfContentsPage() {
  return (
    <main className="report-shell">
      <DownloadPdfButton slug="table-of-contents" label="Table of Contents" />
      <TableOfContentsContent />
    </main>
  );
}