
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck, Eye, Ban, Scale, Clock,
  FileSearch, Brain, Gauge, Shield, Sparkles,
  CheckCircle2, XCircle, ArrowRight,
  BookOpen, Star, Layers3, Search,
  AlertTriangle, FileText, ChevronRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Total Independence",
    desc: "Every LIONXE review is conducted without external influence. No brand, advertiser, or third party has the ability to alter a score, suppress a finding, or modify a published verdict. The evaluation belongs exclusively to the framework.",
    color: "#004DFD",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Every review publishes the complete scoring breakdown — pillar by pillar, point by point. We never publish a verdict without showing the reasoning. You always know exactly why an asset passed or failed.",
    color: "#7C3AED",
  },
  {
    icon: Ban,
    title: "Zero Paid Reviews",
    desc: "LIONXE does not accept payment, commission, or compensation of any kind in exchange for reviews, inflated scores, or positive verdicts. Our credibility is the product — not a service we sell.",
    color: "#EF4444",
  },
  {
    icon: Scale,
    title: "Consistent Methodology",
    desc: "The same four-gate LIONXE framework is applied to every asset reviewed — regardless of category, creator reputation, or audience size. A premium product receives exactly the same evaluation process as an unknown one.",
    color: "#10B981",
  },
  {
    icon: Clock,
    title: "Long-Term Perspective",
    desc: "LIONXE reviews evaluate for lasting value, not current trend performance. We ask whether this asset will compound in quality over time — not whether it is performing well this month.",
    color: "#D97706",
  },
];

const SELECTION_CRITERIA = [
  {
    method: "Active Sourcing",
    icon: Search,
    desc: "Assets that appear widely cited, frequently recommended, or positioned as industry standards are actively identified and evaluated without being requested.",
    color: "#004DFD",
  },
  {
    method: "Submission Queue",
    icon: FileText,
    desc: "Creators and teams may submit digital assets for review consideration. Submission does not guarantee review, and submission does not influence the score.",
    color: "#7C3AED",
  },
  {
    method: "Category Coverage",
    icon: Layers3,
    desc: "We maintain deliberate coverage across all six review categories — articles, tools, websites, UX/UI, SEO, and marketing strategies — to ensure the review library is representative.",
    color: "#10B981",
  },
  {
    method: "Standard Relevance",
    icon: Star,
    desc: "We prioritize assets that allow the LIONXE framework to demonstrate meaningful distinctions — where the difference between passing and failing produces genuine insight for readers.",
    color: "#D97706",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Asset Identification",        desc: "The asset is formally selected, categorized, and its claimed purpose is documented." },
  { step: "02", title: "Contextual Research",         desc: "Pre-audit research establishes what the asset claims to do and its operational context." },
  { step: "03", title: "L Gate Evaluation",           desc: "Logic & Long-Term Thinking assessment — historical foundation, present value, and long-term potential." },
  { step: "04", title: "IO Gate Evaluation",          desc: "Internal Optimization audit — every layer examined for completeness and operational excellence." },
  { step: "05", title: "N Gate Evaluation",           desc: "Non-Negotiable Integrity check — full compliance, ethical clarity, and transparency verified." },
  { step: "06", title: "XE Gate Evaluation",          desc: "eXceptional Excellence appraisal — unique value, distinction, and authority-level execution measured." },
  { step: "07", title: "Scoring & Publication",       desc: "Scores are finalized, reasoning documented, verdict rendered, and the full review is published." },
];

const REVIEW_INCLUDES = [
  { label: "LIONXE Score Badge",             present: true,  desc: "Pillar breakdown + total score" },
  { label: "Verdict Statement",              present: true,  desc: "Pass / Rejection + reasoning" },
  { label: "Per-Pillar Score (0–25 each)",   present: true,  desc: "With documented justification" },
  { label: "Key Strengths",                  present: true,  desc: "What the asset does well" },
  { label: "Identified Weaknesses",          present: true,  desc: "Specific gaps and failure points" },
  { label: "Improvement Recommendations",    present: true,  desc: "Actionable guidance for improvement" },
  { label: "Reviewer Notes",                 present: true,  desc: "Context-specific insights" },
  { label: "Undisclosed Conflicts",          present: false, desc: "Never present in any review" },
  { label: "Paid Endorsements",              present: false, desc: "Not present — ever" },
  { label: "Suppressed Findings",            present: false, desc: "All findings are published" },
];

const NEVER_DO = [
  "Accept payment, commission, or any compensation in exchange for a review",
  "Alter or suppress a finding due to creator reputation, audience size, or market position",
  "Publish a verdict without providing the full pillar-by-pillar score breakdown",
  "Apply different standards to different assets based on their category, creator, or platform",
  "Re-score or revise a published verdict due to external pressure — only genuine errors are corrected",
  "Award a LIONXE VERIFIED™ designation to any asset that has not cleared all four gates",
  "Operate any undisclosed commercial relationship that could influence a review outcome",
];

const PILLAR_SCORING_GUIDES = [
  {
    pillar: "L", name: "Logic & Long-Term Thinking", color: "#004DFD", icon: Brain,
    how: "The reviewer assesses the asset's historical foundation, present-day value legitimacy, and long-term structural viability. Evidence of compounding potential earns higher scores. Dependence on temporary conditions lowers the score significantly.",
  },
  {
    pillar: "IO", name: "Internal Optimization", color: "#0066FF", icon: Gauge,
    how: "Every internal layer is examined for completeness. Technical implementation, content architecture, structural decisions, and execution quality are each assessed. Partial optimization is penalized — only complete execution earns full marks.",
  },
  {
    pillar: "N", name: "Non-Negotiable Integrity", color: "#7C3AED", icon: Shield,
    how: "The reviewer verifies full legal compliance, ethical clarity, and absence of deceptive patterns. Any form of manipulation, hidden dark patterns, or misleading claims — regardless of scale — results in a failing score for this gate.",
  },
  {
    pillar: "XE", name: "eXceptional Excellence", color: "#D97706", icon: Sparkles,
    how: "The reviewer evaluates whether the asset possesses genuinely unique value that distinguishes it from existing alternatives. Generic execution, template-following without distinction, and absence of craft are all penalized.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const ReviewStandardsPage = () => {
  const sec3Ref = useRef<HTMLElement>(null);
  const sec5Ref = useRef<HTMLElement>(null);
  const sec6Ref = useRef<HTMLElement>(null);

  const sec3InView = useInView(sec3Ref, { once: true, margin: "-80px" });
  const sec5InView = useInView(sec5Ref, { once: true, margin: "-80px" });
  const sec6InView = useInView(sec6Ref, { once: true, margin: "-80px" });

  return (
    <main className="bg-white dark:bg-[#050B1F]">

      {/* ═══════════════════════════════════════════════════════════
          §1  HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#050B1F] to-[#0A0F1E]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,77,253,0.22),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize:"52px 52px" }} />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-widest border-[#004DFD]/50 bg-[#004DFD]/10 text-[#7CA0FF]">
              <FileSearch className="h-5 w-5" />
              Review Standards
            </div>

            <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              How LIONXE™{" "}
              <span className="text-[#004DFD]">Reviews Work</span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-lg font-medium leading-8 text-slate-300">
              Every LIONXE™ review follows the same methodology, applies the same four-gate
              framework, and is governed by the same non-negotiable editorial standards.
              No exceptions. No special treatment.
            </p>

            {/* Trust badges row */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Independent",       icon: ShieldCheck },
                { label: "Transparent",       icon: Eye         },
                { label: "No Paid Reviews",   icon: Ban         },
                { label: "Consistent",        icon: Scale       },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-[#7CA0FF]" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §2  FIVE CORE PRINCIPLES — Alternating accent cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Five Editorial Principles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Non-negotiable standards that govern every review we publish
            </p>
          </div>

          <div className="space-y-5">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity:0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true, margin:"-60px" }}
                  transition={{ duration:0.55, delay: i * 0.07 }}
                  className="group flex items-start gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]"
                  style={{ borderLeftColor: p.color, borderLeftWidth: "4px" }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor:`${p.color}12`, color: p.color }}>
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-extrabold text-slate-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="text-base leading-7 text-slate-600 dark:text-slate-400">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §3  ASSET SELECTION — 2×2 grid with funnel header
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec3Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              How Assets Are Selected
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Four pathways — all governed by the same evaluation quality
            </p>
          </div>

          {/* Funnel graphic */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={sec3InView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.6 }}
            className="mb-12 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Funnel shape */}
              <div className="overflow-hidden rounded-3xl border border-[#004DFD]/20 bg-gradient-to-b from-[#004DFD]/[0.08] to-[#004DFD]/[0.03] px-8 py-8 text-center dark:border-[#004DFD]/30">
                <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#004DFD] dark:text-[#7CA0FF]">All Candidates</p>
                <div className="mb-3 flex justify-center gap-2 text-2xl">📝 🛠️ 🌐 🎨 🔍 📣</div>
                <ChevronRight className="mx-auto h-6 w-6 rotate-90 text-[#004DFD]/40" />
                <p className="mt-3 text-sm font-bold text-slate-700 dark:text-slate-300">Filtered through selection criteria</p>
                <ChevronRight className="mx-auto mt-3 h-6 w-6 rotate-90 text-[#004DFD]/40" />
                <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-[#004DFD]/30 bg-[#004DFD]/10 px-5 py-3">
                  <ShieldCheck className="h-5 w-5 text-[#004DFD]" />
                  <span className="font-black text-[#004DFD]">LIONXE™ Review Queue</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SELECTION_CRITERIA.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.method}
                  initial={{ opacity:0, y:24 }}
                  animate={sec3InView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor:`${c.color}12` }}>
                      <Icon className="h-5 w-5" style={{ color:c.color }} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{c.method}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §4  SEVEN-STEP PROCESS — Vertical numbered timeline
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Review Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Seven structured steps — from identification to publication
            </p>
          </div>

          <div className="relative">
            {/* Spine */}
            <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-[#004DFD]/60 via-[#7C3AED]/40 to-[#D97706]/60" />

            <div className="space-y-6">
              {PROCESS_STEPS.map((step, i) => {
                const isGate = i >= 2 && i <= 5;
                const gateColors = ["#004DFD","#0066FF","#7C3AED","#D97706"];
                const bgColor = isGate ? gateColors[i - 2] : "#1E293B";

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity:0, x:-20 }}
                    whileInView={{ opacity:1, x:0 }}
                    viewport={{ once:true, margin:"-40px" }}
                    transition={{ duration:0.5, delay: i * 0.07 }}
                    className="relative flex items-start gap-6 pl-20"
                  >
                    {/* Step badge on spine */}
                    <div
                      className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-xl text-base font-black text-white shadow-lg"
                      style={{ backgroundColor: bgColor }}
                    >
                      {step.step}
                    </div>

                    <div className={`flex-1 rounded-2xl border p-6 ${
                      isGate
                        ? "border-[#004DFD]/20 bg-white dark:border-[#004DFD]/20 dark:bg-white/[0.04]"
                        : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
                    }`}>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                        {isGate && (
                          <span className="shrink-0 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider"
                            style={{ backgroundColor:`${gateColors[i-2]}15`, color:gateColors[i-2] }}>
                            Gate {i - 1}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §5  SCORING IN PRACTICE — Pillar-by-pillar guide
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec5Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Scoring in Practice
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              How each gate score is determined — the evaluator's lens per pillar
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {PILLAR_SCORING_GUIDES.map((g, i) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.pillar}
                  initial={{ opacity:0, y:24 }}
                  animate={sec5InView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.55, delay: i * 0.1 }}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
                  style={{ borderTopColor: g.color, borderTopWidth:"3px" }}
                >
                  <div className="p-7">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-xl font-black text-white"
                        style={{ backgroundColor: g.color }}>
                        {g.pillar}
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color:g.color }}>Gate Evaluation</p>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{g.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{g.how}</p>

                    <a href={`/${g.pillar.toLowerCase()}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold hover:underline"
                      style={{ color: g.color }}>
                      <BookOpen className="h-4 w-4" />
                      Read full {g.pillar} pillar criteria
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §6  WHAT A REVIEW INCLUDES — Checklist contrast card
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec6Ref}
        className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              What Every Review Contains
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Present in every published LIONXE™ review — and what never appears
            </p>
          </div>

          <motion.div
            initial={{ opacity:0, y:30 }}
            animate={sec6InView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.6 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-white/[0.04]"
          >
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_auto] border-b border-slate-100 bg-slate-50 px-7 py-4 text-xs font-black uppercase tracking-widest dark:border-white/[0.07] dark:bg-white/[0.03]">
              <span className="text-slate-500">Review Element</span>
              <span className="w-28 text-center text-emerald-600 dark:text-emerald-400">Present</span>
              <span className="w-28 text-center text-slate-400">Notes</span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-white/[0.06]">
              {REVIEW_INCLUDES.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity:0, x:-16 }}
                  animate={sec6InView ? { opacity:1, x:0 } : {}}
                  transition={{ duration:0.4, delay: i * 0.05 }}
                  className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 px-7 py-4 ${
                    !item.present ? "bg-red-50/40 dark:bg-red-500/[0.03]" : ""
                  }`}
                >
                  <span className={`text-sm font-semibold ${item.present ? "text-slate-800 dark:text-slate-200" : "text-red-600 dark:text-red-400"}`}>
                    {item.label}
                  </span>
                  <div className="flex w-28 justify-center">
                    {item.present
                      ? <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      : <XCircle className="h-5 w-5 text-red-500" />
                    }
                  </div>
                  <span className="w-28 text-right text-xs text-slate-500 dark:text-slate-400">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §7  WHAT WE NEVER DO — Dark section, red-accented list
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-20 bg-slate-900 dark:bg-[#040810] sm:px-6 lg:px-8 lg:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(239,68,68,0.08),transparent)]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <AlertTriangle className="mx-auto mb-5 h-12 w-12 text-red-500" />
            <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
              What We Never Do
            </h2>
            <p className="text-lg text-slate-300">
              These are absolute limits. None of them have exceptions.
            </p>
          </div>

          <div className="space-y-4">
            {NEVER_DO.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, x:-20 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true, margin:"-40px" }}
                transition={{ duration:0.5, delay: i * 0.07 }}
                className="flex items-start gap-5 rounded-xl border border-red-500/20 bg-red-500/[0.06] p-5"
              >
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-base leading-6 text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Commitment statement */}
          <div className="mt-10 rounded-2xl border border-[#004DFD]/40 bg-[#004DFD]/10 p-7 text-center">
            <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-[#7CA0FF]" />
            <p className="text-base font-semibold leading-7 text-slate-200">
              These commitments are not marketing language. They are structural
              limits built into how LIONXE™ operates. The credibility of every
              review depends on every one of them being upheld, every time.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §8  CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-24 bg-gradient-to-br from-[#004DFD] to-[#003eb3] sm:px-6 lg:px-8 lg:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />

        <div className="relative mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}
          >
            <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">
              Standards Without Compromise.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-blue-100">
              Read the reviews that these standards produce — transparent scoring,
              honest findings, and unambiguous verdicts.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/reviews"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-black text-[#004DFD] transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]">
                Browse All Reviews
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/framework"
                className="inline-flex items-center gap-3 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-black text-white transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.98]">
                Read the Framework
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default ReviewStandardsPage;