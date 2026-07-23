"use client";

// ─────────────────────────────────────────────────────────────────────────────
// app/audits/AuditsIndexClient.tsx
//
// STATIC index page shell. Reads STATIC_AUDITS directly from the data file.
// When the dynamic system goes live, this file's body is replaced by a thin
// server component that fetches from Sanity, maps the result to the same
// StaticAuditSummary shape, and renders <AuditListCard> exactly as below —
// no card, filter, or layout logic changes.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, LayoutGrid } from "lucide-react";
import AuditListCard from "./AuditListCard";
import { STATIC_AUDITS } from "@/app/lib/audits-static-data";

const T = {
  bg: "#080F1D", bg2: "#0D1626", surf: "#111B2E",
  brand: "#004DFD", brandLt: "#5B8CFF",
  brandDim: "rgba(0,77,253,0.1)", brandBdr: "rgba(0,77,253,0.25)",
  white: "#EAE6DC", muted: "#7B8BA2", bdr: "rgba(255,255,255,0.065)",
};

type Filter = "all" | "independent" | "certification";

export default function AuditsIndexClient() {
  const [filter, setFilter] = useState<Filter>("all");

  // Sorted newest-first — mirrors the eventual `order(auditDate desc)` GROQ query
  const sorted = [...STATIC_AUDITS].sort(
    (a, b) => new Date(b.auditDate).getTime() - new Date(a.auditDate).getTime()
  );
  const filtered = sorted.filter((a) => filter === "all" || a.auditType === filter);

  const independentCount = STATIC_AUDITS.filter((a) => a.auditType === "independent").length;
  const certificationCount = STATIC_AUDITS.filter((a) => a.auditType === "certification").length;

  const tabs: { value: Filter; label: string; icon: React.ElementType }[] = [
    { value: "all",           label: `All (${STATIC_AUDITS.length})`,               icon: LayoutGrid },
    { value: "independent",   label: `Assessments (${independentCount})`,           icon: ShieldCheck },
    { value: "certification", label: `Certifications (${certificationCount})`,      icon: Award },
  ];

  return (
    <main style={{ background: T.bg, minHeight: "100vh" }}>

      {/* ── HEADER ── */}
      <section className="px-4 pb-12 pt-24 sm:px-6 lg:px-8" style={{ background: `linear-gradient(to bottom, ${T.bg2}, ${T.bg})` }}>
        <div className="mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest"
            style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}`, color: T.brandLt }}>
            <Award className="h-4 w-4" />
            LIONXE™ Audit Archive
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: T.white, fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            LIONXE™ Assessments &amp; Certifications
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg" style={{ color: T.muted }}>
            Every published LIONXE™ audit — independent assessments conducted from public evidence, and formal certifications backed by submitted documentation. Each is scored against the same 16-criterion standard.
          </motion.p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="sticky top-0 z-30 px-4 py-3 sm:px-6 lg:px-8"
        style={{ background: "rgba(8,15,29,0.92)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${T.bdr}` }}>
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-1 rounded-xl p-1" style={{ background: T.surf }}>
            {tabs.map(({ value, label, icon: Icon }) => (
              <button key={value} onClick={() => setFilter(value)}
                className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all"
                style={{
                  background: filter === value ? T.brandDim : "transparent",
                  color:      filter === value ? T.brandLt : T.muted,
                  border:     filter === value ? `1px solid ${T.brandBdr}` : "1px solid transparent",
                }}>
                <Icon className="h-3.5 w-3.5" />{label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH AUDIT LIST ── */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {filtered.length === 0 ? (
            <div className="py-24 text-center" style={{ color: T.muted }}>
              <p className="text-lg">No audits match the current filter.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filtered.map((audit, i) => (
                <AuditListCard key={audit.id} audit={audit} index={i} />
              ))}
            </div>
          )}

          {/* Forward-looking note — honest about current scale, easy to delete later */}
          <p className="mt-10 text-center text-xs" style={{ color: T.muted, opacity: 0.7 }}>
            New assessments and certifications are added as they are completed.
          </p>
        </div>
      </section>
    </main>
  );
}