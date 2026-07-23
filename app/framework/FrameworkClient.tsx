/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Brain, Gauge, Shield, Sparkles,
  ArrowRight, CheckCircle2, XCircle,
  FileText, Wrench, Monitor, MousePointer2,
  Search, Target, AlertTriangle, Layers3,
  BookOpen, ExternalLink, ChevronRight, Scale, Building2, HardHat, Wallet, Youtube, Layers
} from "lucide-react";
import LionxePipelineInfographic from "./LionxePipelineInfographic";
// ─────────────────────────────────────────────────────────────────────────────
// DATA: CANONICAL 4 PILLARS (100 PTS EACH · 400 PTS TOTAL)
// ─────────────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    letter: "L",
    name: "Long-Term Logic",
    law: "The Post-Flood Collapse Rule",
    subtitle: "Gate 1 · 0–100 Points (4 Domains × 25)",
    purpose: "The first and hardest gate. Evaluates whether the entity is justified by durable, compounding benefit rather than temporary or eroding conditions.",
    evaluates: [
      "Directional Clarity — Articulated multi-year direction filtering decisions",
      "Foundational Durability — Sustainable value creation vs. receding dependencies",
      "Decision Discipline — Research depth and accepted short-term trade-offs",
      "Resilience & Forward Risk — Buffer position and active renewal against obsolescence",
    ],
    whyMatters: "If an entity promises flood revenue or traffic today but carries a high probability of collapse tomorrow, it fails here immediately.",
    href: "/long-term-logic",
    color: "#004DFD",
    glow: "rgba(0,77,253,0.35)",
    lightBg: "rgba(0,77,253,0.07)",
    icon: Brain,
  },
  {
    letter: "IO",
    name: "Internal Optimization",
    law: "The Weakest Link Axiom",
    subtitle: "Gate 2 · 0–100 Points (4 Domains × 25)",
    purpose: "A deep-layer execution audit. Every internal element — foundation, output, reach, and upkeep — must meet a complete professional standard.",
    evaluates: [
      "Technical Foundation & Integrity — Sound architecture, security, and zero defects",
      "Output & Presentation Quality — Substantive, accurate, and original deliverables",
      "Visibility & Reach Systems — Competent findability systems producing real reach",
      "Operational Completeness & Upkeep — Complete supporting layer and active maintenance",
    ],
    whyMatters: "An entity's real value is capped by its worst-executed layer. Surface polish never compensates for a weak internal domain beneath it.",
    href: "/internal-optimization",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.35)",
    lightBg: "rgba(59,130,246,0.07)",
    icon: Gauge,
  },
  {
    letter: "N",
    name: "Non-Negotiable Integrity",
    law: "The Cost-Indifferent Mandate",
    subtitle: "Gate 3 · 0–100 Points (4 Domains × 25)",
    purpose: "Enforces absolute truthfulness and compliance. Exclusive home of every violation, deception, and false-claim finding in a LIONXE audit.",
    evaluates: [
      "Claim Accuracy — Quantitative, credential, and social proof claims verified",
      "Compliance With Governing Rules — Written laws, regulations, and platform rules met",
      "Transparency — Clear identity, terms, pricing, and evidence traceability",
      "Absence of Manipulation — Free of dark patterns or deceptive presentation",
    ],
    whyMatters: "Integrity that bends to cost is not integrity — it is pricing. Any breach of honesty or compliance triggers an immediate blocking issue.",
    href: "/non-negotiable-integrity",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.35)",
    lightBg: "rgba(124,58,237,0.07)",
    icon: Shield,
  },
  {
    letter: "XE",
    name: "eXceptional Distinction",
    law: "The Commodity Threshold Law",
    subtitle: "Gate 4 · 0–100 Points (4 Domains × 25)",
    purpose: "Tests irreplaceability. Evaluates whether the entity offers a defensible, non-trivially replicable advantage that a generic alternative cannot replace.",
    evaluates: [
      "Articulated Distinction — Specific, exclusive, and defensible positioning claim",
      "Recognizable Identity — Distinctive voice and form recognizable without the name",
      "Distinction in Practice — Verifiable advantage in access, method, or expertise",
      "Enduring Relevance — Active renewal of competitive edge as conditions shift",
    ],
    whyMatters: "If an entity can be swapped for a generic alternative with no loss to its audience, its distinction is zero — whatever its marketing claims.",
    href: "/exceptional-distinction",
    color: "#D97706",
    glow: "rgba(217,119,6,0.35)",
    lightBg: "rgba(217,119,6,0.07)",
    icon: Sparkles,
  },
];

const AUDIT_STEPS = [
  {
    step: "01",
    title: "Entity Submission",
    desc: "The entity entering evaluation — a website, software tool, business model, media channel, or decision — is queued for audit.",
    color: "#004DFD",
  },
  {
    step: "02",
    title: "Sequential 4-Gate Audit",
    desc: "The entity is cross-examined through Gates L, IO, N, and XE. Gate 1 (L) failure triggers immediate cascade rejection.",
    color: "#3B82F6",
  },
  {
    step: "03",
    title: "16-Domain Scoring",
    desc: "Each criterion is scored 0, 6, 12, 18, or 25 with an attached evidence note. Any score at 0 or pillar <15 triggers a blocking issue.",
    color: "#7C3AED",
  },
  {
    step: "04",
    title: "Published Report / Certification",
    desc: "The official report is issued — transparent scores, identified blocking issues, and a clear LIONXE™ Certified or Disqualified verdict.",
    color: "#D97706",
  },
];

const SCOPE_CATEGORIES = [
  { label: "Websites & Platforms", icon: Monitor, color: "#004DFD" },
  { label: "Software & SaaS Tools", icon: Wrench, color: "#06B6D4" },
  { label: "Organizations & Models", icon: Building2, color: "#10B981" },
  { label: "Content & Media Systems", icon: FileText, color: "#8B5CF6" },
  { label: "Physical Projects", icon: HardHat, color: "#F59E0B" },
  { label: "Strategic Decisions", icon: Target, color: "#EC4899" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function FrameworkClient() {
  const sec2Ref = useRef<HTMLElement>(null);
  const sec4Ref = useRef<HTMLElement>(null);
  const sec6Ref = useRef<HTMLElement>(null);

  const sec2InView = useInView(sec2Ref, { once: true, margin: "-80px" });
  const sec4InView = useInView(sec4Ref, { once: true, margin: "-80px" });
  const sec6InView = useInView(sec6Ref, { once: true, margin: "-80px" });

  return (
    <main className="bg-white text-slate-900 dark:bg-[#050B1F] dark:text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          §1 HERO — UNIVERSAL FRAMEWORK OVERVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-24 sm:px-6 lg:px-8 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#050B1F] to-[#0A0F1E]">

        {/* Radial Glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,77,253,0.22),transparent)]" />

        {/* Grid Background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"56px 56px" }} />

        <div className="relative mx-auto max-w-6xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-[#004DFD]/50 bg-[#004DFD]/10 text-[#5B8CFF]"
          >
            <Layers3 className="h-4 w-4" />
            Universal Quality Evaluation Framework
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
            className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Four Gates.
            <br />
            <span className="text-[#004DFD]">One Universal Standard.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="mx-auto mb-14 max-w-3xl text-lg font-medium leading-8 text-slate-300"
          >
            LIONXE™ is a multi-layered quality evaluation standard that measures entities
            across four sequential gates — Long-Term Logic, Internal Optimization, Non-Negotiable
            Integrity, and eXceptional Distinction. Pass all four, or be disqualified entirely.
          </motion.p>

          {/* Stat Pills — Correct 400-Point System */}
          <motion.div
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { value: "4",     label: "Sequential Gates" },
              { value: "16",    label: "Scoring Criteria" },
              { value: "400",   label: "Maximum Total Points" },
              { value: "0%",    label: "Tolerance for Shortcuts" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-5 backdrop-blur-md"
              >
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §2 PHILOSOPHY & ARCHITECTURE (CUSTOM BLUEPRINT IMAGE)
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec2Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Custom Blueprint Image */}
            <motion.div
              initial={{ opacity:0, x:-30 }}
              animate={sec2InView ? { opacity:1, x:0 } : {}}
              transition={{ duration:0.65 }}
              className="relative"
            >
              <div className="relative  w-full overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-white/10">
               <LionxePipelineInfographic/>
              </div>
              <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                <strong>LIONXE™ Blueprint:</strong> Four non-negotiable quality gates governing long-term durability.
              </p>
            </motion.div>

            {/* Text Copy */}
            <motion.div
              initial={{ opacity:0, x:30 }}
              animate={sec2InView ? { opacity:1, x:0 } : {}}
              transition={{ duration:0.65, delay:0.15 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Why This Framework Exists
              </h2>

              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                Modern systems routinely fail not from lack of effort, but from lack of <strong className="font-semibold text-slate-900 dark:text-white">rigid quality standards</strong>. Anyone can build, publish, or market — but few enforce structural integrity.
              </p>

              <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                LIONXE™ was engineered by <strong className="font-semibold text-slate-900 dark:text-white">Sufian Mustafa</strong> as a universal evaluation system that refuses to award authority to anything that hasn't earned it through genuine, verifiable quality — not vanity metrics, not age, and not volume.
              </p>

              <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                The framework asks a fundamental question at every gate: <em>"Does this layer meet an unyielding professional standard?"</em> If any single pillar fails or carries a blocking issue, the evaluation ends immediately.
              </p>

              {/* Quote Callout */}
              <div className="border-l-4 border-[#004DFD] pl-5 py-1">
                <p className="text-base italic leading-7 text-slate-700 dark:text-slate-300">
                  "A framework that tolerates shortcuts isn't a framework — it's just a checklist with better branding."
                </p>
                <p className="mt-2 text-sm font-bold text-[#004DFD]">
                  — The LIONXE Founding Principle
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §3 SCORING ARCHITECTURE (400-POINT SYSTEM DISPLAY)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The 400-Point Scoring Architecture
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              400 maximum points divided equally across 4 pillars (100 points per gate).
            </p>
          </div>

          {/* Central Scorecard */}
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-white/[0.04]">

            {/* Top Total */}
            <div className="border-b border-slate-100 bg-slate-50 px-8 py-6 text-center dark:border-white/[0.08] dark:bg-white/[0.03]">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Maximum Grand Total Score
              </p>
              <p className="mt-1 text-7xl font-black text-slate-900 dark:text-white">
                400
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#004DFD] dark:text-[#5B8CFF] mt-1">
                16 Universal Criteria × 25 Points Each
              </p>
            </div>

            {/* Pillar Rows */}
            <div className="divide-y divide-slate-100 dark:divide-white/[0.06]">
              {PILLARS.map((p) => (
                <div key={p.letter} className="flex items-center gap-5 px-8 py-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-black text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 dark:text-white truncate">{p.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{p.law}</p>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: p.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: PILLARS.indexOf(p) * 0.15 }}
                      />
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-2xl font-black text-slate-900 dark:text-white">100</p>
                    <p className="text-xs font-semibold text-slate-400">max pts</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Iron Rule Callout */}
            <div className="flex items-start gap-3 border-t border-red-100 bg-red-50/60 px-8 py-5 dark:border-red-500/20 dark:bg-red-500/[0.05]">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
              <p className="text-sm leading-6 text-red-700 dark:text-red-300">
                <strong className="font-black">Blocking Issue Rule:</strong> Any criterion scored 0, or any pillar totaling below 15/100, triggers a blocking issue that excludes certification regardless of scores on other gates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §4 FOUR PILLARS — DEEP DIVE WITH CORRECT PATHWAY SLUGS
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec4Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Four Quality Gates
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sequential gates evaluating entities from strategy down to distinction.
            </p>
          </div>

          <div className="space-y-12">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={pillar.letter}
                  initial={{ opacity:0, y:30 }}
                  animate={sec4InView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.6, delay: i * 0.12 }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03]"
                  style={{ borderLeftColor: pillar.color, borderLeftWidth:"4px" }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] ${isEven ? "" : "lg:grid-cols-[0.85fr_1fr]"}`}>

                    {/* Main Content */}
                    <div className={`p-8 sm:p-10 ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="mb-6 flex items-center gap-4">
                        <div
                          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-white"
                          style={{ backgroundColor: pillar.color }}
                        >
                          {pillar.letter}
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: pillar.color }}>
                            {pillar.subtitle}
                          </p>
                          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                            {pillar.name}
                          </h3>
                          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                            Governing Law: {pillar.law}
                          </p>
                        </div>
                      </div>

                      <p className="mb-5 text-base font-semibold leading-7 text-slate-800 dark:text-slate-200">
                        {pillar.purpose}
                      </p>

                      <p className="mb-6 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {pillar.whyMatters}
                      </p>

                      {/* Correct Pathway Slug Link */}
                      <Link
                        href={pillar.href}
                        className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5"
                        style={{ borderColor: `${pillar.color}40`, color: pillar.color, backgroundColor: pillar.lightBg }}
                      >
                        <BookOpen className="h-4 w-4" />
                        Explore {pillar.name} Gate
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Evaluates Checklist */}
                    <div
                      className={`flex flex-col justify-center gap-4 border-slate-100 p-8 sm:p-10 dark:border-white/[0.07] ${isEven ? "border-t lg:border-t-0 lg:border-l" : "border-t lg:order-1 lg:border-t-0 lg:border-r"}`}
                      style={{ backgroundColor: pillar.lightBg }}
                    >
                      <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: pillar.color }}>
                        4 Domains Evaluated
                      </p>
                      {pillar.evaluates.map((item, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: pillar.color }} />
                          <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §5 CASCADE FAILURE CALLOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-20 bg-slate-900 dark:bg-[#040810] sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration:0.6 }}
          >
            <XCircle className="mx-auto mb-6 h-16 w-16 text-red-400" />

            <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
              The Cascade Failure Rule
            </h2>

            <p className="mb-8 text-xl leading-8 text-slate-300">
              Each pillar is a sequential gate. Each gate builds directly on the previous.
              If an entity fails at Gate 1 (L), Gates 2, 3, and 4 cannot rescue it.
            </p>

            {/* Gate Flow Line */}
            <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {PILLARS.map((p, i) => (
                <div key={p.letter} className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-xl font-black text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.letter}
                  </div>
                  {i < PILLARS.length - 1 && (
                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-500" />
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.07] p-7">
              <p className="text-base leading-7 text-red-200">
                <strong className="font-black text-red-400">One failure disqualifies the entire architecture.</strong>{" "}
                A project scoring high on Logic and Optimization but failing Integrity (Gate 3) receives the same final verdict as a project failing Gate 1:{" "}
                <strong className="font-black">DISQUALIFIED</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §6 HOW AN AUDIT WORKS — TIMELINE
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec6Ref}
        className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              How a LIONXE Audit Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              From initial evaluation to published report — 4 stages, zero shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {AUDIT_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity:0, y:30 }}
                animate={sec6InView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-black text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §7 SECTOR SCOPE LENSES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Universal Sector Applications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Layer 3 Sector Lenses translate the same 16 scoring criteria across six arenas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {SCOPE_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity:0, scale:0.95 }}
                  whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once: true }}
                  transition={{ duration:0.4, delay: i * 0.07 }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: cat.color }} strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold leading-5 text-slate-700 dark:text-slate-300">
                    {cat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/rubric"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#004DFD] hover:underline dark:text-[#5B8CFF]"
            >
              Study all 16 criteria inside the LIONXE™ Rubric
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §8 TERMINAL CTA — TWO PATHS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-24 bg-gradient-to-br from-[#004DFD] to-[#0038cb] sm:px-6 lg:px-8 lg:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize:"32px 32px" }} />

        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* Read Gate Pages */}
            <motion.div
              initial={{ opacity:0, x:-20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once: true }}
              transition={{ duration:0.6 }}
              className="flex flex-col justify-between rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md"
            >
              <div>
                <BookOpen className="mb-4 h-10 w-10 text-white" />
                <h3 className="mb-3 text-2xl font-extrabold text-white">
                  Study the Four Quality Gates
                </h3>
                <p className="text-base leading-7 text-blue-100">
                  Each pillar features its own dedicated deep-dive page with full scoring anchors, governing laws, and diagnostic self-audits.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {PILLARS.map((p) => (
                  <Link
                    key={p.letter}
                    href={p.href}
                    className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.08] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/[0.18]"
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.letter}
                    </span>
                    {p.name}
                    <ChevronRight className="ml-auto h-4 w-4 opacity-60" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Explore Audits */}
            <motion.div
              initial={{ opacity:0, x:20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once: true }}
              transition={{ duration:0.6, delay:0.15 }}
              className="flex flex-col justify-between rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md"
            >
              <div>
                <FileText className="mb-4 h-10 w-10 text-white" />
                <h3 className="mb-3 text-2xl font-extrabold text-white">
                  Browse Published Audits
                </h3>
                <p className="mb-6 text-base leading-7 text-blue-100">
                  Examine the framework applied to live entities. Transparent scoring, reproducible public evidence, and non-negotiable verdicts.
                </p>
                <Link
                  href="/audits"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-base font-black text-[#004DFD] transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
                >
                  Browse All Audits
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="mb-3 text-xs font-black uppercase tracking-widest text-blue-200">
                  Framework Proof of Concept
                </p>
                <a
                  href="https://doitwithai.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.08] px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/[0.18]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5271FF] text-xs font-black">AI</div>
                  <span>Do It With AI Tools™ — Platform in action</span>
                  <ExternalLink className="ml-auto h-4 w-4 shrink-0 opacity-60" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}