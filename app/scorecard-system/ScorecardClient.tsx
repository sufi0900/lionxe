/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Brain, Gauge, Shield, Sparkles,
  AlertTriangle, ShieldCheck, TrendingUp,
  RotateCcw, ChevronDown, ChevronUp, Info,
  CheckCircle2, Flag, Lock, Scale, Award, ListChecks
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// RUBRIC STRUCTURE & CANONICAL SUB-PILLARS (16 CRITERIA TOTAL)
// ─────────────────────────────────────────────────────────────────────────────

interface Criterion {
  id: string;
  name: string;
  statement: string;
}

interface PillarDef {
  id: string;
  letter: string;
  name: string;
  law: string;
  icon: typeof Brain;
  color: string;
  lightBg: string;
  border: string;
  href: string;
  criteria: Criterion[];
}

const RUBRIC_STRUCTURE: PillarDef[] = [
  {
    id: "L",
    letter: "L",
    name: "Long-Term Logic",
    law: "The Post-Flood Collapse Rule",
    icon: Brain,
    color: "#004DFD",
    lightBg: "rgba(0,77,253,0.08)",
    border: "border-[#004DFD]/30",
    href: "/long-term-logic",
    criteria: [
      { id: "L1", name: "Directional Clarity", statement: "Articulated multi-year direction that filters real choices." },
      { id: "L2", name: "Foundational Durability", statement: "Sustained model built on genuine value creation vs. receding conditions." },
      { id: "L3", name: "Decision Discipline", statement: "Research depth, patience, and accepted short-term trade-offs." },
      { id: "L4", name: "Resilience & Forward Risk", statement: "Buffers against principal shocks and active renewal against obsolescence." },
    ],
  },
  {
    id: "IO",
    letter: "IO",
    name: "Internal Optimization",
    law: "The Weakest Link Axiom",
    icon: Gauge,
    color: "#3B82F6",
    lightBg: "rgba(59,130,246,0.08)",
    border: "border-[#3B82F6]/30",
    href: "/internal-optimization",
    criteria: [
      { id: "IO1", name: "Technical Foundation & Integrity", statement: "Sound, secure, performant, and functionally intact underlying build." },
      { id: "IO2", name: "Output & Presentation Quality", statement: "Substantive, accurate, and original deliverables across all formats." },
      { id: "IO3", name: "Visibility & Reach Systems", statement: "Competent findability systems producing measurable reach outcomes." },
      { id: "IO4", name: "Operational Completeness & Upkeep", statement: "Complete supporting detail layer and active ongoing maintenance." },
    ],
  },
  {
    id: "N",
    letter: "N",
    name: "Non-Negotiable Integrity",
    law: "The Cost-Indifferent Mandate",
    icon: Shield,
    color: "#7C3AED",
    lightBg: "rgba(124,58,237,0.08)",
    border: "border-[#7C3AED]/30",
    href: "/non-negotiable-integrity",
    criteria: [
      { id: "N1", name: "Claim Accuracy", statement: "Quantitative, credential, and social proof claims verified against evidence." },
      { id: "N2", name: "Compliance With Governing Rules", statement: "Full compliance with written laws, platform rules, and sector regulations." },
      { id: "N3", name: "Transparency", statement: "Visible identity, terms, pricing, and evidence traceability for the audience." },
      { id: "N4", name: "Absence of Manipulation", statement: "Free of engineered deceptive patterns, pressure tactics, or dark UI." },
    ],
  },
  {
    id: "XE",
    letter: "XE",
    name: "eXceptional Distinction",
    law: "The Commodity Threshold Law",
    icon: Sparkles,
    color: "#D97706",
    lightBg: "rgba(217,119,6,0.08)",
    border: "border-[#D97706]/30",
    href: "/exceptional-distinction",
    criteria: [
      { id: "XE1", name: "Articulated Distinction", statement: "Specific, exclusive, and defensible difference stated clearly." },
      { id: "XE2", name: "Recognizable Identity", statement: "Distinctive voice and form recognizable without the brand name attached." },
      { id: "XE3", name: "Distinction in Practice", statement: "Verifiable advantage in access, economics, method, or expertise." },
      { id: "XE4", name: "Enduring Relevance", statement: "Active renewal of competitive edge as the operating environment shifts." },
    ],
  },
];

const ANCHOR_LEVELS = [
  { score: 0, label: "Absent", cls: "text-red-500 bg-red-500/10 border-red-500/30" },
  { score: 6, label: "Minimal (Default)", cls: "text-orange-500 bg-orange-500/10 border-orange-500/30" },
  { score: 12, label: "Partial", cls: "text-slate-400 bg-slate-500/10 border-slate-500/30" },
  { score: 18, label: "Substantial", cls: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30" },
  { score: 25, label: "Complete", cls: "text-[#004DFD] bg-[#004DFD]/10 border-[#004DFD]/30" },
];

const CERTIFICATION_TIERS = [
  { range: "0–199", level: "Does Not Pass", desc: "Structural rebuilding required before passing.", color: "#EF4444" },
  { range: "200–299", level: "Below Threshold", desc: "Foundational work required across multiple gates.", color: "#F97316" },
  { range: "300–349", level: "Conditional Pass", desc: "Near-standard execution with identified gaps.", color: "#EAB308" },
  { range: "350–379", level: "LIONXE™ Certified", desc: "Meets official quality standards across all gates.", color: "#10B981" },
  { range: "380–399", level: "LIONXE™ Gold Certified", desc: "Exceeds standard execution in key domains.", color: "#C8971F" },
  { range: "400", level: "LIONXE™ Platinum", desc: "Perfect execution across all 16 criteria.", color: "#004DFD" },
];

const ALL_CRITERIA_IDS = RUBRIC_STRUCTURE.flatMap((p) => p.criteria.map((c) => c.id));

// ─────────────────────────────────────────────────────────────────────────────
// PRESET SCENARIOS (400-POINT SCALE)
// ─────────────────────────────────────────────────────────────────────────────
const PRESETS = [
  {
    label: "No-Evidence Baseline (96/400)",
    desc: "Default rubric state where every criterion starts at 6.",
    scores: Object.fromEntries(ALL_CRITERIA_IDS.map((id) => [id, 6])),
    color: "#3B82F6",
  },
  {
    label: "LIONXE™ Platinum (400/400)",
    desc: "Perfect 25/25 score across all 16 criteria.",
    scores: Object.fromEntries(ALL_CRITERIA_IDS.map((id) => [id, 25])),
    color: "#004DFD",
  },
  {
    label: "LIONXE™ Certified (356/400)",
    desc: "Substantial/Complete performance passing all gates.",
    scores: {
      L1: 25, L2: 25, L3: 18, L4: 18,
      IO1: 25, IO2: 25, IO3: 25, IO4: 18,
      N1: 25, N2: 25, N3: 25, N4: 25,
      XE1: 18, XE2: 18, XE3: 25, XE4: 18,
    },
    color: "#10B981",
  },
  {
    label: "Gate 3 Integrity Violation (Disqualified)",
    desc: "High technical scores ruined by fabricated claims (N1 = 0).",
    scores: {
      L1: 25, L2: 25, L3: 25, L4: 25,
      IO1: 25, IO2: 25, IO3: 25, IO4: 25,
      N1: 0, N2: 12, N3: 6, N4: 0, // Triggers Gate 3 Integrity Failure
      XE1: 18, XE2: 18, XE3: 18, XE4: 18,
    },
    color: "#EF4444",
  },
  {
    label: "Reset to Zero",
    desc: "Clear all criteria to 0.",
    scores: Object.fromEntries(ALL_CRITERIA_IDS.map((id) => [id, 0])),
    color: "#64748B",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function ScorecardClient() {
  // 16 Criteria Scores State (Default = 6 per criterion = 96 total)
  const [scores, setScores] = useState<Record<string, number>>(() =>
    Object.fromEntries(ALL_CRITERIA_IDS.map((id) => [id, 6]))
  );

  // Accordion Expand/Collapse State per Pillar Card
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({
    L: true,
    IO: false,
    N: false,
    XE: false,
  });

  const togglePillarAccordion = (pillarId: string) => {
    setExpandedPillars((prev) => ({ ...prev, [pillarId]: !prev[pillarId] }));
  };

  // ── COMPUTED SCORING METRICS ──────────────────────────────────────────────
  const pillarTotals = useMemo(() => {
    const totals: Record<string, number> = {};
    RUBRIC_STRUCTURE.forEach((p) => {
      totals[p.id] = p.criteria.reduce((sum, c) => sum + (scores[c.id] || 0), 0);
    });
    return totals;
  }, [scores]);

  const grandTotal = useMemo(() => {
    return Object.values(pillarTotals).reduce((sum, val) => sum + val, 0);
  }, [pillarTotals]);

  // Blocking Issues Logic: Any single criterion at 0 OR any pillar total < 15
  const blockingCriteria = useMemo(() => {
    return ALL_CRITERIA_IDS.filter((id) => scores[id] === 0);
  }, [scores]);

  const blockingPillars = useMemo(() => {
    return RUBRIC_STRUCTURE.filter((p) => pillarTotals[p.id] < 15).map((p) => p.id);
  }, [pillarTotals]);

  const isDisqualified = blockingCriteria.length > 0 || blockingPillars.length > 0;

  // Determine Certification Tier based on 400-Point Scale
  const currentTier = useMemo(() => {
    if (isDisqualified) {
      return { level: "DISQUALIFIED", range: "0–400", desc: "Blocking issue active. Certification excluded until resolved.", color: "#EF4444" };
    }
    if (grandTotal >= 380) return CERTIFICATION_TIERS[4]; // Gold / Platinum
    if (grandTotal >= 350) return CERTIFICATION_TIERS[3]; // LIONXE Certified
    if (grandTotal >= 300) return CERTIFICATION_TIERS[2]; // Conditional Pass
    if (grandTotal >= 200) return CERTIFICATION_TIERS[1]; // Below Threshold
    return CERTIFICATION_TIERS[0]; // Does Not Pass
  }, [grandTotal, isDisqualified]);

  const handleCriterionScoreChange = (criterionId: string, val: number) => {
    setScores((prev) => ({ ...prev, [criterionId]: val }));
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-[#050B1F] dark:text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          §1 HERO — SCORECARD SIMULATOR HEADER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#050B1F] to-[#0A0F1E]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,77,253,0.2),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-[#004DFD]/50 bg-[#004DFD]/10 text-[#5B8CFF]">
              <Gauge className="h-4 w-4" /> 400-Point Audit Simulator
            </div>
            <h1 className="mb-5 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl">
              Simulate Any<br />
              <span className="text-[#004DFD]">LIONXE™ Scorecard</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-medium leading-8 text-slate-300 sm:text-lg">
              Score any entity across all 16 sub-pillar criteria (0–25 pts each) for a 400-point total score. Test the cascade failure rule live.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §2 MAIN INTERACTIVE SIMULATOR (SLIDERS & OUTPUT)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-16 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">

          {/* PRESET SCENARIOS */}
          <div className="mb-10">
            <p className="mb-4 text-center text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Load Preset Audit Scenario
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setScores(p.scores)}
                  className="rounded-xl border px-4 py-2.5 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97]"
                  style={{ borderColor: `${p.color}40`, backgroundColor: `${p.color}10`, color: p.color }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN GRID: 4 PILLAR CARDS | STICKY OUTPUT PANEL */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">

            {/* ── LEFT: 4 MAJOR PILLARS WITH EMBEDDED SUB-PILLARS ── */}
            <div className="space-y-6">
              {RUBRIC_STRUCTURE.map((p) => {
                const IconComp = p.icon;
                const pTotal = pillarTotals[p.id];
                const isPillarBlocked = pTotal < 15;
                const isExpanded = expandedPillars[p.id];

                return (
                  <div
                    key={p.id}
                    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                      isPillarBlocked
                        ? "border-red-500/50 bg-red-500/[0.03] shadow-lg shadow-red-500/10"
                        : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900/60 shadow-lg"
                    }`}
                  >
                    {/* HIGH-LEVEL PILLAR HEADER CARD */}
                    <div className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-md"
                            style={{ backgroundColor: isPillarBlocked ? "#EF4444" : p.color }}
                          >
                            {p.letter}
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className="text-xs font-black uppercase tracking-widest"
                                style={{ color: isPillarBlocked ? "#EF4444" : p.color }}
                              >
                                Gate {p.letter}
                              </span>
                              <span className="text-xs text-slate-400">·</span>
                              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                                {p.law}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                              {p.name}
                            </h3>
                          </div>
                        </div>

                        {/* Pillar Score Display (Out of 100) */}
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span
                              className="text-3xl font-black tabular-nums"
                              style={{ color: isPillarBlocked ? "#EF4444" : p.color }}
                            >
                              {pTotal}
                            </span>
                            <span className="text-xs font-bold text-slate-400"> / 100</span>
                            {isPillarBlocked && (
                              <p className="text-[10px] font-black uppercase text-red-500">
                                Blocking &lt;15
                              </p>
                            )}
                          </div>

                          {/* Accordion Toggle Button */}
                          <button
                            onClick={() => togglePillarAccordion(p.id)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                            title="Toggle Sub-Pillars"
                          >
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Progress Bar (Pillar Total / 100) */}
                      <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: isPillarBlocked ? "#EF4444" : p.color }}
                          animate={{ width: `${(pTotal / 100) * 100}%` }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </div>

                    {/* ── EMBEDDED SUB-PILLARS / CRITERIA ACCORDION ── */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-slate-100 bg-slate-50/50 p-6 dark:border-white/10 dark:bg-slate-950/40 sm:p-7"
                        >
                          <div className="mb-4 flex items-center justify-between">
                            <span className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                              <ListChecks className="h-4 w-4 text-[#004DFD]" /> 4 Sub-Pillar Scoring Domains (25 Pts Each)
                            </span>
                            <Link
                              href={p.href}
                              className="text-xs font-bold text-[#004DFD] hover:underline dark:text-[#5B8CFF]"
                            >
                              Read Full {p.letter} Rubric
                            </Link>
                          </div>

                          <div className="space-y-6">
                            {p.criteria.map((c) => {
                              const cScore = scores[c.id] || 0;
                              const isCriterionZero = cScore === 0;

                              return (
                                <div
                                  key={c.id}
                                  className={`rounded-2xl border p-4 transition-colors ${
                                    isCriterionZero
                                      ? "border-red-500/40 bg-red-500/10"
                                      : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900/80"
                                  }`}
                                >
                                  {/* Sub-Pillar Header */}
                                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                                    <div>
                                      <span className="inline-block rounded-md bg-[#004DFD]/10 px-2 py-0.5 text-xs font-black text-[#004DFD] dark:text-[#5B8CFF] mr-2">
                                        {c.id}
                                      </span>
                                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                                        {c.name}
                                      </span>
                                      {isCriterionZero && (
                                        <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-black uppercase text-red-500">
                                          <Flag className="h-3 w-3" /> BLOCKING ISSUE (0 PTS)
                                        </span>
                                      )}
                                    </div>

                                    {/* Selected Sub-Pillar Score */}
                                    <div className="flex items-baseline gap-1">
                                      <span
                                        className={`text-lg font-black tabular-nums ${
                                          isCriterionZero ? "text-red-500" : "text-slate-900 dark:text-white"
                                        }`}
                                      >
                                        {cScore}
                                      </span>
                                      <span className="text-xs text-slate-400">/ 25</span>
                                    </div>
                                  </div>

                                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                                    {c.statement}
                                  </p>

                                  {/* Anchor Buttons Selector (0, 6, 12, 18, 25) */}
                                  <div className="grid grid-cols-5 gap-2">
                                    {ANCHOR_LEVELS.map((anchor) => {
                                      const isActive = cScore === anchor.score;
                                      return (
                                        <button
                                          key={anchor.score}
                                          onClick={() => handleCriterionScoreChange(c.id, anchor.score)}
                                          className={`flex flex-col items-center justify-center rounded-xl py-2 px-1 text-xs font-black transition-all ${
                                            isActive
                                              ? `${anchor.cls} ring-2 ring-offset-2 dark:ring-offset-slate-900 shadow-sm`
                                              : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-white/5 dark:bg-slate-800 dark:text-slate-400"
                                          }`}
                                        >
                                          <span className="text-sm tabular-nums">{anchor.score}</span>
                                          <span className="text-[9px] font-normal truncate hidden sm:block">
                                            {anchor.label}
                                          </span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* ── RIGHT: STICKY OUTPUT DASHBOARD ────────────────── */}
            <div className="flex flex-col gap-6">

              {/* VERDICT CARD */}
              <div
                className="relative overflow-hidden rounded-3xl border bg-slate-900 p-8 text-center shadow-2xl transition-all"
                style={{
                  borderColor: currentTier.color,
                  boxShadow: `0 0 50px ${currentTier.color}25`,
                }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                  {isDisqualified ? (
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  ) : grandTotal >= 350 ? (
                    <Award className="h-8 w-8 text-emerald-400" />
                  ) : (
                    <Info className="h-8 w-8 text-amber-400" />
                  )}
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Grand Total Score
                </p>

                <div className="mb-3 flex items-baseline justify-center gap-1">
                  <span className="text-6xl font-black tabular-nums text-white">
                    {grandTotal}
                  </span>
                  <span className="text-xl font-bold text-slate-400">/ 400</span>
                </div>

                <div
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-wider mb-4"
                  style={{
                    backgroundColor: `${currentTier.color}20`,
                    color: currentTier.color,
                    border: `1px solid ${currentTier.color}50`,
                  }}
                >
                  {currentTier.level}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentTier.desc}
                </p>

                {/* DISQUALIFICATION WARNING BANNER */}
                {isDisqualified && (
                  <div className="mt-5 rounded-2xl border border-red-500/40 bg-red-500/20 p-4 text-left">
                    <p className="text-xs font-bold text-red-300 flex items-center gap-2 mb-1">
                      <Lock className="h-4 w-4 shrink-0" />
                      Cascade Failure Active
                    </p>
                    <p className="text-[11px] leading-relaxed text-red-200">
                      {blockingCriteria.length > 0 && (
                        <span>
                          Criteria at 0: <strong>{blockingCriteria.join(", ")}</strong>.{" "}
                        </span>
                      )}
                      {blockingPillars.length > 0 && (
                        <span>
                          Pillars &lt;15: <strong>{blockingPillars.join(", ")}</strong>.{" "}
                        </span>
                      )}
                      Entire audit is disqualified regardless of points elsewhere.
                    </p>
                  </div>
                )}
              </div>

              {/* PILLAR BREAKDOWN MINI-CARD */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-white/10 dark:bg-slate-900/60">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                  Pillar Score Breakdown (100 Max Each)
                </h4>

                <div className="space-y-3">
                  {RUBRIC_STRUCTURE.map((p) => {
                    const pTot = pillarTotals[p.id];
                    const isFail = pTot < 15;
                    return (
                      <div key={p.id} className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          Gate {p.letter} — {p.name}
                        </span>
                        <span
                          className={`font-mono font-black ${
                            isFail ? "text-red-500" : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {pTot} / 100
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RESET TO BASELINE BUTTON */}
              <button
                onClick={() =>
                  setScores(Object.fromEntries(ALL_CRITERIA_IDS.map((id) => [id, 6])))
                }
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <RotateCcw className="h-4 w-4" />
                Reset to No-Evidence Baseline (96/400)
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §3 SCORE INTERPRETATION GUIDE (400-POINT SYSTEM)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Understanding LIONXE™ Tiers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The official certification tiers mapping grand total scores across 400 points.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATION_TIERS.map((tier) => (
              <div
                key={tier.level}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-black uppercase px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${tier.color}15`, color: tier.color }}
                  >
                    {tier.level}
                  </span>
                  <span className="font-mono text-sm font-black text-slate-900 dark:text-white">
                    {tier.range} pts
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mt-2">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}