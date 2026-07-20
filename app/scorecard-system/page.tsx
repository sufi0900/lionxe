"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Gauge, Shield, Sparkles,
  AlertTriangle, ShieldCheck, TrendingUp,
  RotateCcw, ChevronDown, Info,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS & TYPES
// ─────────────────────────────────────────────────────────────────────────────

const FAIL_THRESHOLD = 9; // ≤ 9 triggers the Iron Rule

interface Pillar {
  id: string;
  letter: string;
  name: string;
  icon: typeof Brain;
  color: string;
  glow: string;
  trackColor: string;
}

const PILLARS: Pillar[] = [
  { id:"L",  letter:"L",  name:"Logic & Long-Term Thinking", icon:Brain,    color:"#004DFD", glow:"rgba(0,77,253,0.3)",   trackColor:"rgba(0,77,253,0.15)"   },
  { id:"IO", letter:"IO", name:"Internal Optimization",       icon:Gauge,    color:"#0066FF", glow:"rgba(0,102,255,0.3)",  trackColor:"rgba(0,102,255,0.15)"  },
  { id:"N",  letter:"N",  name:"Non-Negotiable Integrity",    icon:Shield,   color:"#7C3AED", glow:"rgba(124,58,237,0.3)", trackColor:"rgba(124,58,237,0.15)" },
  { id:"XE", letter:"XE", name:"eXceptional Excellence",      icon:Sparkles, color:"#D97706", glow:"rgba(217,119,6,0.3)",  trackColor:"rgba(217,119,6,0.15)"  },
];

// Per-pillar level thresholds
const PILLAR_LEVELS = [
  { max: 9,  label: "FAIL",         short: "Fail",        cls: "text-red-500",    bg: "bg-red-100 dark:bg-red-500/15"    },
  { max: 13, label: "WEAK",         short: "Weak",        cls: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-500/15" },
  { max: 17, label: "BELOW STD",    short: "Below Std",   cls: "text-amber-500",  bg: "bg-amber-100 dark:bg-amber-500/15"   },
  { max: 20, label: "DEVELOPING",   short: "Developing",  cls: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-100 dark:bg-yellow-500/10" },
  { max: 22, label: "STRONG",       short: "Strong",      cls: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-500/15" },
  { max: 25, label: "EXCEPTIONAL",  short: "Exceptional", cls: "text-[#004DFD]",  bg: "bg-[#004DFD]/10"                   },
];

// Overall verdict thresholds
const VERDICTS = [
  { min: 0,  label: "REJECTED",         sub: "Standards not met",              color: "#EF4444", bg: "from-red-900/40 to-red-950/60",     border: "border-red-500/50",      icon: AlertTriangle  },
  { min: 40, label: "SUBSTANDARD",      sub: "Significant gaps remain",        color: "#F97316", bg: "from-orange-900/40 to-orange-950/60", border: "border-orange-500/50",  icon: AlertTriangle  },
  { min: 60, label: "BELOW STANDARD",   sub: "Improvement required",           color: "#EAB308", bg: "from-yellow-900/30 to-yellow-950/50",  border: "border-yellow-500/50",  icon: Info           },
  { min: 75, label: "APPROACHING",      sub: "Close — refinement needed",      color: "#3B82F6", bg: "from-blue-900/30 to-blue-950/50",     border: "border-blue-500/50",    icon: TrendingUp     },
  { min: 85, label: "STRONG",           sub: "High quality — near standard",   color: "#10B981", bg: "from-emerald-900/30 to-emerald-950/50", border: "border-emerald-500/50", icon: TrendingUp     },
  { min: 95, label: "LIONXE VERIFIED™", sub: "Exceptional — all gates passed", color: "#004DFD", bg: "from-blue-900/40 to-blue-950/60",     border: "border-[#004DFD]/70",   icon: ShieldCheck    },
];

// Preset scenarios
const PRESETS = [
  { label: "All Exceptional",  scores: { L:25, IO:25, N:25, XE:25 }, color: "#004DFD"  },
  { label: "Strong Across All", scores: { L:22, IO:20, N:23, XE:21 }, color: "#10B981"  },
  { label: "Fail at N",        scores: { L:22, IO:20, N:6,  XE:21 }, color: "#EF4444"  },
  { label: "Fail at IO",       scores: { L:20, IO:5,  N:18, XE:19 }, color: "#F97316"  },
  { label: "Mediocre Asset",   scores: { L:14, IO:13, N:15, XE:12 }, color: "#EAB308"  },
  { label: "Reset to Zero",    scores: { L:0,  IO:0,  N:0,  XE:0  }, color: "#94A3B8"  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

const getPillarLevel = (score: number) =>
  PILLAR_LEVELS.find((l) => score <= l.max) ?? PILLAR_LEVELS[PILLAR_LEVELS.length - 1];

const getVerdict = (scores: Record<string, number>, total: number) => {
  const anyFail = Object.values(scores).some((s) => s <= FAIL_THRESHOLD);
  if (anyFail) return VERDICTS[0]; // REJECTED
  return [...VERDICTS].reverse().find((v) => total >= v.min) ?? VERDICTS[0];
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────

const ScorecardPage = () => {
  const [scores, setScores] = useState({ L: 22, IO: 20, N: 23, XE: 21 });

  const total   = useMemo(() => Object.values(scores).reduce((a, b) => a + b, 0), [scores]);
  const verdict = useMemo(() => getVerdict(scores, total), [scores, total]);
  const anyFail = useMemo(() => Object.values(scores).some((s) => s <= FAIL_THRESHOLD), [scores]);
  const pct     = Math.round((total / 100) * 100);

  const setScore = (id: string, val: number) =>
    setScores((prev) => ({ ...prev, [id]: Math.min(25, Math.max(0, val)) }));

  return (
    <main className="bg-white dark:bg-[#050B1F]">

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#050B1F] to-[#0A0F1E]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,77,253,0.2),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize:"52px 52px" }} />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-widest border-[#004DFD]/50 bg-[#004DFD]/10 text-[#7CA0FF]">
              <Gauge className="h-5 w-5" /> LIONXE™ Scorecard System
            </div>
            <h1 className="mb-5 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl">
              Simulate Any<br />
              <span className="text-[#004DFD]">LIONXE™ Score</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-8 text-slate-300">
              Adjust each pillar's score using the sliders below. The verdict updates live — including
              the Iron Rule. One fail collapses everything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MAIN SIMULATOR
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-16 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">

          {/* PRESET BUTTONS */}
          <div className="mb-10">
            <p className="mb-4 text-center text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Load a Preset Scenario
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setScores(p.scores)}
                  className="rounded-xl border px-4 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97]"
                  style={{ borderColor: `${p.color}40`, backgroundColor: `${p.color}10`, color: p.color }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* GRID: sliders | output */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">

            {/* ── PILLAR SLIDERS ─────────────────────────────────── */}
            <div className="space-y-6">
              {PILLARS.map((pillar) => {
                const Icon     = pillar.icon;
                const score    = scores[pillar.id as keyof typeof scores];
                const level    = getPillarLevel(score);
                const isFail   = score <= FAIL_THRESHOLD;
                const fillPct  = (score / 25) * 100;

                return (
                  <div
                    key={pillar.id}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isFail
                        ? "border-red-300 bg-red-50/60 dark:border-red-500/30 dark:bg-red-500/[0.05]"
                        : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
                    }`}
                    style={!isFail ? { boxShadow:`0 0 0 1px ${pillar.color}00` } : undefined}
                  >
                    <div className="p-6 sm:p-7">
                      {/* Header row */}
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-black text-white"
                            style={{ backgroundColor: isFail ? "#EF4444" : pillar.color }}
                          >
                            {pillar.letter}
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em]"
                              style={{ color: isFail ? "#EF4444" : pillar.color }}>
                              {isFail ? "⚠ IRON RULE TRIGGERED" : pillar.id + " Gate"}
                            </p>
                            <p className="font-bold text-slate-900 dark:text-white">{pillar.name}</p>
                          </div>
                        </div>

                        {/* Score + Level */}
                        <div className="flex shrink-0 flex-col items-end gap-1">
                          <span className="text-4xl font-black tabular-nums leading-none" style={{ color: isFail ? "#EF4444" : pillar.color }}>
                            {score}
                          </span>
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-black ${level.bg} ${level.cls}`}>
                            {level.label}
                          </span>
                        </div>
                      </div>

                      {/* Score bar */}
                      <div className="mb-5 h-3 overflow-hidden rounded-full" style={{ backgroundColor: pillar.trackColor }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: isFail ? "#EF4444" : pillar.color }}
                          animate={{ width: `${fillPct}%` }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </div>

                      {/* Slider */}
                      <div className="relative">
                        <input
                          type="range"
                          min={0}
                          max={25}
                          value={score}
                          onChange={(e) => setScore(pillar.id, parseInt(e.target.value))}
                          className="slider-custom w-full cursor-pointer"
                          style={{ "--thumb-color": isFail ? "#EF4444" : pillar.color } as React.CSSProperties}
                        />
                        {/* Range labels */}
                        <div className="mt-2 flex justify-between text-[10px] font-bold text-slate-400">
                          <span>0</span>
                          <span className="text-red-400">≤9 = FAIL</span>
                          <span>25</span>
                        </div>
                      </div>

                      {/* Number input */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Fine-tune:</span>
                        <div className="flex items-center overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
                          <button
                            onClick={() => setScore(pillar.id, score - 1)}
                            className="flex h-9 w-9 items-center justify-center border-r border-slate-200 text-slate-500 transition hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/[0.06] text-lg font-bold"
                          >−</button>
                          <input
                            type="number"
                            min={0} max={25}
                            value={score}
                            onChange={(e) => setScore(pillar.id, parseInt(e.target.value) || 0)}
                            className="w-12 bg-transparent py-2 text-center text-sm font-black tabular-nums text-slate-900 focus:outline-none dark:text-white"
                          />
                          <button
                            onClick={() => setScore(pillar.id, score + 1)}
                            className="flex h-9 w-9 items-center justify-center border-l border-slate-200 text-slate-500 transition hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/[0.06] text-lg font-bold"
                          >+</button>
                        </div>
                        <span className="text-xs text-slate-400">/ 25 pts</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── OUTPUT PANEL ────────────────────────────────────── */}
            <div className="flex flex-col gap-6">

              {/* Verdict card */}
              <div className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 ${verdict.border} ${verdict.bg}`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={verdict.label}
                    initial={{ opacity:0, y:10 }}
                    animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:-10 }}
                    transition={{ duration:0.3 }}
                    className="text-center"
                  >
                    {/* Icon */}
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${verdict.color}20`, border:`2px solid ${verdict.color}50` }}>
                      <verdict.icon className="h-8 w-8" style={{ color: verdict.color }} />
                    </div>

                    {/* Score */}
                    <div className="mb-2">
                      <span className="text-7xl font-black tabular-nums text-white">{total}</span>
                      <span className="text-3xl font-black text-white/50">/100</span>
                    </div>

                    {/* Verdict label */}
                    <p className="mb-1 text-2xl font-black" style={{ color: verdict.color }}>
                      {verdict.label}
                    </p>
                    <p className="text-sm font-medium text-white/60">{verdict.sub}</p>

                    {/* Iron Rule alert */}
                    {anyFail && (
                      <div className="mt-4 rounded-xl border border-red-500/40 bg-red-500/20 px-4 py-3">
                        <p className="text-sm font-bold text-red-300">
                          ⚠ Iron Rule Active — One gate failed. Project rejected regardless of other scores.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Score breakdown */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Breakdown
                </p>
                <div className="space-y-3">
                  {PILLARS.map((pillar) => {
                    const score   = scores[pillar.id as keyof typeof scores];
                    const level   = getPillarLevel(score);
                    const isFail  = score <= FAIL_THRESHOLD;
                    return (
                      <div key={pillar.id} className="flex items-center gap-3">
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white"
                          style={{ backgroundColor: isFail ? "#EF4444" : pillar.color }}
                        >
                          {pillar.letter}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="truncate text-sm font-semibold text-slate-700 dark:text-slate-300">{pillar.name}</span>
                            <span className={`shrink-0 text-xs font-black ${level.cls}`}>{level.short}</span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: isFail ? "#EF4444" : pillar.color }}
                              animate={{ width:`${(score/25)*100}%` }}
                              transition={{ duration:0.3 }}
                            />
                          </div>
                        </div>
                        <span className="shrink-0 text-lg font-black tabular-nums" style={{ color: isFail ? "#EF4444" : pillar.color }}>
                          {score}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Total */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <span className="font-bold text-slate-600 dark:text-slate-300">Total Score</span>
                  <span className="text-3xl font-black text-slate-900 dark:text-white">{total}<span className="text-base font-semibold text-slate-400">/100</span></span>
                </div>
              </div>

              {/* Circular gauge */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Score Gauge
                </p>
                <div className="flex justify-center">
                  <CircularGauge pct={pct} total={total} color={anyFail ? "#EF4444" : verdict.color} />
                </div>
              </div>

              {/* Reset button */}
              <button
                onClick={() => setScores({ L:0, IO:0, N:0, XE:0 })}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.08]"
              >
                <RotateCcw className="h-4 w-4" />
                Reset All to Zero
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SCORE INTERPRETATION GUIDE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              How to Read the Scores
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Every number has a precise meaning — at both the pillar and total level
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* Per-pillar levels */}
            <div>
              <h3 className="mb-6 text-2xl font-extrabold text-slate-900 dark:text-white">
                Per-Pillar Score (0–25)
              </h3>
              <div className="space-y-3">
                {[
                  { range:"0 – 9",   label:"FAIL",        color:"#EF4444", desc:"Iron Rule triggered. Entire project rejected." },
                  { range:"10 – 13", label:"WEAK",        color:"#F97316", desc:"Significant gaps. Needs substantial rework before passing." },
                  { range:"14 – 17", label:"BELOW STD",   color:"#EAB308", desc:"Some foundations present but core elements incomplete." },
                  { range:"18 – 20", label:"DEVELOPING",  color:"#3B82F6", desc:"Approaching standard. Targeted improvements required." },
                  { range:"21 – 22", label:"STRONG",      color:"#10B981", desc:"Solid execution. Minor refinements may improve the final score." },
                  { range:"23 – 25", label:"EXCEPTIONAL", color:"#004DFD", desc:"Full gate compliance. Authority-level execution." },
                ].map((row) => (
                  <div key={row.range} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <span className="w-16 shrink-0 text-center text-lg font-black tabular-nums" style={{ color: row.color }}>{row.range}</span>
                    <span className="w-28 shrink-0 rounded-full px-3 py-1 text-center text-xs font-black" style={{ backgroundColor:`${row.color}15`, color:row.color }}>{row.label}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{row.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall verdict levels */}
            <div>
              <h3 className="mb-6 text-2xl font-extrabold text-slate-900 dark:text-white">
                Overall Verdict (0–100)
              </h3>
              <div className="space-y-3">
                {[
                  { range:"Any Fail", label:"REJECTED",       color:"#EF4444", desc:"Iron Rule: one failed gate overrides all other scores." },
                  { range:"40–59",   label:"SUBSTANDARD",     color:"#F97316", desc:"Multiple pillars underperforming. Framework not met." },
                  { range:"60–74",   label:"BELOW STD",       color:"#EAB308", desc:"Some elements pass but overall standard not achieved." },
                  { range:"75–84",   label:"APPROACHING",     color:"#3B82F6", desc:"Close to standard. Targeted refinement could close the gap." },
                  { range:"85–94",   label:"STRONG",          color:"#10B981", desc:"High quality. Surpasses industry average by a significant margin." },
                  { range:"95–100",  label:"LIONXE VERIFIED™",color:"#004DFD", desc:"Exceptional across all four gates. Authority-level asset." },
                ].map((row) => (
                  <div key={row.range} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <span className="w-16 shrink-0 text-center text-xs font-black tabular-nums" style={{ color: row.color }}>{row.range}</span>
                    <span className="w-28 shrink-0 rounded-full px-2 py-1 text-center text-[10px] font-black leading-tight" style={{ backgroundColor:`${row.color}15`, color:row.color }}>{row.label}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{row.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Iron Rule callout */}
          <div className="mt-12 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-500/20 dark:bg-red-500/[0.05]">
            <div className="flex items-start gap-5">
              <AlertTriangle className="mt-1 h-8 w-8 shrink-0 text-red-500" />
              <div>
                <h3 className="mb-3 text-2xl font-black text-red-700 dark:text-red-400">The Iron Rule</h3>
                <p className="text-base leading-7 text-red-700 dark:text-red-300">
                  A project scoring <strong>24/25 across L, IO, and XE</strong> but only{" "}
                  <strong>6/25 on N</strong> receives the same final verdict as a project that
                  scores zero on everything: <strong>REJECTED</strong>. The total score becomes
                  irrelevant the moment any single gate fails. LIONXE™ does not reward partial
                  excellence — it demands complete excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider CSS */}
      <style jsx>{`
        .slider-custom {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(
            to right,
            var(--thumb-color, #004DFD) 0%,
            var(--thumb-color, #004DFD) calc(var(--val, 50) * 1%),
            rgba(148,163,184,0.3) calc(var(--val, 50) * 1%),
            rgba(148,163,184,0.3) 100%
          );
          outline: none;
          cursor: pointer;
        }
        .slider-custom::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--thumb-color, #004DFD);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          transition: transform 0.15s;
        }
        .slider-custom::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .slider-custom::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--thumb-color, #004DFD);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
      `}</style>
    </main>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// CIRCULAR GAUGE
// ─────────────────────────────────────────────────────────────────────────────

const CircularGauge = ({
  pct, total, color,
}: {
  pct: number;
  total: number;
  color: string;
}) => {
  const r = 72;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Track */}
        <circle
          cx="100" cy="100" r={r}
          fill="none"
          stroke="rgba(148,163,184,0.2)"
          strokeWidth="14"
        />
        {/* Progress */}
        <motion.circle
          cx="100" cy="100" r={r}
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circ}
          animate={{ strokeDashoffset: circ - dash }}
          transition={{ duration:0.4, ease:"easeOut" }}
          style={{ transform:"rotate(-90deg)", transformOrigin:"center", filter:`drop-shadow(0 0 6px ${color}60)` }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={total}
            initial={{ opacity:0, scale:0.8 }}
            animate={{ opacity:1, scale:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.2 }}
            className="text-5xl font-black tabular-nums"
            style={{ color }}
          >
            {total}
          </motion.span>
        </AnimatePresence>
        <span className="text-sm font-bold text-slate-400">/ 100</span>
      </div>
    </div>
  );
};

export default ScorecardPage;