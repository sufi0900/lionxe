// app/report/cover/page.tsx
//
// COVER — fits one A4 page. Puppeteer printable area with 25mm margins
// + header/footer templates is ~225mm. Every element is sized to fit
// within that budget with no overflow.

import "@/styles/report.css";
import Image from "next/image";

export default function CoverPage() {
  return (
    <main
      className="cover-shell"
      style={{ background: "var(--navy)", color: "white" }}
    >
      {/* Branding strip */}
      <div
        className="mb-2 h-[3px] w-16"
        style={{ background: "var(--lionxe-blue)" }}
      />
      <p
        className="text-[10px] font-bold uppercase tracking-[0.14em]"
        style={{ color: "var(--light-blue)" }}
      >
        Strategic Digital Ecosystem Audit
      </p>

      {/* Logo + company — single row */}
      <div className="mt-4 flex items-center gap-4">
        <div
          className="flex flex-shrink-0 items-center justify-center rounded-xl"
          style={{
            width: "64px",
            height: "64px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <p
            className="text-center text-[7px] font-bold uppercase tracking-wider"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
         <Image
              src="/report-assets/wavey-gaming-logo.jpg"
              alt="Wavey Gaming Logo"
          style={{ borderRadius: "8px" }}
              width={64}
              height={64}
            />
          </p>
        </div>
        <div>
          <p
            className="text-[9px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Wavey Gaming
          </p>
          <p
            className="mt-0.5 text-[13px] font-semibold"
            style={{ color: "var(--light-blue)" }}
          >
            Carpet &amp; Rug Cleaning Division
          </p>
        </div>
      </div>

      {/* Title */}
      <h1
        className="mt-6 text-[28px] font-bold leading-[1.25] tracking-tight sm:text-[34px]"
        style={{ color: "white" }}
      >
        Digital Infrastructure,
        <br />
        Content Operations,
        <br />
        and Strategic
        <br />
        Positioning Assessment
      </h1>

      {/* Accent + description */}
      <div
        className="mt-4 h-[2.5px] w-28"
        style={{ background: "var(--lionxe-blue)" }}
      />
      <p
        className="mt-3 max-w-md text-[13px] leading-[1.6]"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        A comprehensive analysis of the company&apos;s website network,
        content workflows, domain portfolio, social media operations, and
        long-term competitive positioning within the modern search landscape.
      </p>

      {/* Divider */}
      <div
        className="mt-5 h-px w-full"
        style={{ background: "rgba(255,255,255,0.12)" }}
      />

      {/* Meta strip — compact single row */}
      <div className="mt-3 flex flex-wrap justify-between gap-3">
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wide"
            style={{ color: "rgba(255,255,255,0.35)" }}>Prepared By</p>
          <p className="mt-0.5 text-[11px] font-semibold text-white">Sufian Mustafa</p>
          <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.45)" }}>
            Digital Growth &amp; AI Search Systems Architect</p>
        </div>
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wide"
            style={{ color: "rgba(255,255,255,0.35)" }}>Division</p>
          <p className="mt-0.5 text-[11px] font-semibold text-white">Carpet &amp; Rug Cleaning</p>
          <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.45)" }}>Wavey Gaming Group</p>
        </div>
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wide"
            style={{ color: "rgba(255,255,255,0.35)" }}>Date</p>
          <p className="mt-0.5 text-[11px] font-semibold text-white">[Month Year]</p>
        </div>
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wide"
            style={{ color: "rgba(255,255,255,0.35)" }}>Classification</p>
          <p className="mt-0.5 text-[11px] font-semibold text-white">Strictly Confidential</p>
          <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.45)" }}>Executive review only</p>
        </div>
      </div>

      {/* Research note — compact */}
      <div
        className="mt-4 rounded-lg px-3.5 py-2"
        style={{ background: "rgba(26,107,255,0.10)", border: "1px solid rgba(26,107,255,0.2)" }}
      >
        <p className="text-[8px] font-bold uppercase tracking-wide"
          style={{ color: "var(--light-blue)" }}>Research Note</p>
        <p className="mt-0.5 text-[9px] leading-[13px]"
          style={{ color: "rgba(255,255,255,0.6)" }}>
          Approximately three months of independent research using
          professional-grade SEO tools (Ahrefs, SEMrush, Google Search
          Console) and direct observation of the company&apos;s documented
          assets. Data collected at company premises and through dedicated
          personal research sessions.
        </p>
      </div>

      {/* Confidentiality — minimal */}
      <p className="mt-3 text-[8px] leading-[12px]"
        style={{ color: "rgba(255,255,255,0.25)" }}>
        Proprietary analysis for internal executive review. Produced on the
        author&apos;s personal printer; no copy shared with staff or third
        parties. Distribution outside leadership not authorized without
        written consent.
      </p>
    </main>
  );
}