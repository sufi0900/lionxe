"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/audits/AuditListCard.tsx
//
// Full-width horizontal audit card for the /audits index page.
// Props are FLAT and SOURCE-AGNOSTIC (see lib/audits-static-data.ts note) —
// this component never knows or cares whether its data came from a static
// array or a Sanity fetch. That is what makes the future migration a
// zero-structural-change swap.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import {
  ShieldCheck, Award, Flag, ChevronRight, Calendar, Brain, Gauge, Shield, Sparkles,
} from "lucide-react";
import type { StaticAuditSummary } from "@/app/lib/audits-static-data";

const T = {
  bg2: "#0D1626", surf: "#111B2E", surf2: "#182237",
  brand: "#004DFD", brandLt: "#5B8CFF",
  brandDim: "rgba(0,77,253,0.12)", brandBdr: "rgba(0,77,253,0.30)",
  gold: "#C8971F", goldDim: "rgba(200,151,31,0.12)", goldBdr: "rgba(200,151,31,0.22)",
  white: "#EAE6DC", muted: "#7B8BA2", bdr: "rgba(255,255,255,0.065)",
  fail: "#C94040", orange: "#E07840", slate: "#8B9BB2", pass: "#4A9960",
};

const CERT_META: Record<string, { label: string; color: string }> = {
  "does-not-pass":    { label: "Does Not Pass",         color: T.fail },
  "below-threshold":  { label: "Below Threshold",       color: T.slate },
  "conditional-pass": { label: "Conditional Pass",      color: T.orange },
  "certified":        { label: "LIONXE™ Certified",     color: T.pass },
  "gold":             { label: "LIONXE™ Gold Certified", color: T.gold },
  "platinum":         { label: "LIONXE™ Platinum",      color: T.brandLt },
};

const PILLAR_ICONS = { L: Brain, IO: Gauge, N: Shield, XE: Sparkles };
const PILLAR_LABELS: Record<string, string> = { L: "Long-Term Logic", IO: "Internal Optimization", N: "Non-Negotiable Integrity", XE: "eXceptional Distinction" };

function getGaugeColor(auditType: string, score: number) {
  if (auditType === "certification") return T.gold;
  return score >= 350 ? T.pass : T.fail;
}

function dashoffset(score: number, max = 400) {
  return 339 - 339 * (score / max);
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function AuditListCard({ audit, index = 0 }: { audit: StaticAuditSummary; index?: number }) {
  const certMeta = CERT_META[audit.certificationLevel];
  const gaugeColor = getGaugeColor(audit.auditType, audit.grandTotalScore);
  const isCert = audit.auditType === "certification";
  const pillars = [
    { code: "L",  score: audit.lPillarScore },
    { code: "IO", score: audit.ioPillarScore },
    { code: "N",  score: audit.nPillarScore },
    { code: "XE", score: audit.xePillarScore },
  ];

  return (
    <motion.a
      href={`/audits/${audit.slug}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
      className="group block overflow-hidden rounded-3xl transition-all hover:-translate-y-0.5"
      style={{ background: T.surf, border: `1px solid ${isCert ? T.goldBdr : T.bdr}` }}
    >
      {/* Track header strip */}
      <div className="flex items-center justify-between px-6 py-3"
        style={{ background: T.bg2, borderBottom: `1px solid ${T.bdr}` }}>
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
          style={{ color: isCert ? T.gold : T.brandLt }}>
          {isCert ? <Award className="h-3.5 w-3.5" /> : <ShieldCheck className="h-3.5 w-3.5" />}
          {isCert ? "Certification Audit" : "Independent Assessment"}
        </span>
        <span className="flex items-center gap-1.5 text-xs" style={{ color: T.muted }}>
          <Calendar className="h-3 w-3" />
          {formatDate(audit.auditDate)}
        </span>
      </div>

      {/* Main horizontal body */}
      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center lg:p-8">

        {/* Gauge */}
        <div className="flex shrink-0 items-center justify-center md:justify-start">
          <svg width="104" height="104" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
            <circle cx="60" cy="60" r="54" fill="none" stroke={gaugeColor} strokeWidth="8" strokeLinecap="round"
              strokeDasharray="339" strokeDashoffset={dashoffset(audit.grandTotalScore)}
              transform="rotate(-90 60 60)" />
            <text x="60" y="55" textAnchor="middle" fill={T.white} fontSize="24" fontWeight="700"
              fontFamily="Space Grotesk, system-ui">{audit.grandTotalScore}</text>
            <text x="60" y="73" textAnchor="middle" fill={T.muted} fontSize="11">/400</text>
          </svg>
        </div>

        {/* Entity info + pillar bars */}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-xl font-bold leading-tight" style={{ color: T.white, fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
              {audit.entityName}
            </h3>
            <span className="rounded-md px-2 py-0.5 text-xs font-semibold" style={{ background: "rgba(255,255,255,0.05)", color: T.muted }}>
              {audit.industry}
            </span>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-bold"
            style={{ background: `${certMeta.color}18`, border: `1px solid ${certMeta.color}40`, color: certMeta.color }}>
            {certMeta.label}
          </div>

          {/* Pillar bars — compact horizontal row */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
            {pillars.map((p) => {
              const Icon = PILLAR_ICONS[p.code as keyof typeof PILLAR_ICONS];
              const pct = Math.round((p.score / 100) * 100);
              const hasBlock = audit.blockingIssues.some((b) => b.code.replace(/[0-9]/g, "") === p.code);
              return (
                <div key={p.code} className="min-w-0">
                  <div className="mb-1 flex items-center gap-1 text-[11px]">
                    <Icon className="h-3 w-3 shrink-0" style={{ color: T.muted }} />
                    <span className="font-bold" style={{ color: T.white }}>{p.code}</span>
                    <span className="ml-auto font-bold tabular-nums" style={{ color: T.white }}>{p.score}</span>
                    {hasBlock && <Flag className="h-2.5 w-2.5 shrink-0" style={{ color: T.fail }} />}
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: hasBlock ? T.fail : T.brandLt }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex shrink-0 items-center md:pl-4">
          <span className="inline-flex items-center gap-1.5 rounded-xl px-5 py-3 text-sm font-bold transition-all group-hover:gap-2.5"
            style={{ background: isCert ? T.goldDim : T.brandDim, border: `1px solid ${isCert ? T.goldBdr : T.brandBdr}`, color: isCert ? T.gold : T.brandLt }}>
            Read Full Audit
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* Key findings footer */}
      {audit.keyFindings.length > 0 && (
        <div className="px-6 pb-6 lg:px-8" style={{ borderTop: `1px solid ${T.bdr}` }}>
          <ul className="mt-4 space-y-1.5">
            {audit.keyFindings.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-5" style={{ color: T.muted }}>
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: T.brandLt }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.a>
  );
}