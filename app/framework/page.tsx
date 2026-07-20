"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain, Gauge, Shield, Sparkles,
  ArrowRight, CheckCircle2, XCircle,
  FileText, Wrench, Monitor, MousePointer2,
  Search, Target, AlertTriangle, Layers3,
  BookOpen, ExternalLink, ChevronRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    letter: "L",
    name: "Logic & Long-Term Thinking",
    subtitle: "Foundation Gate · 0–25 Points",
    purpose: "The first and hardest gate. Evaluates whether the asset is architecturally sound enough to compound in value over years — not months.",
    evaluates: [
      "Historical foundation — clean or compromised?",
      "Present value — real or artificially inflated?",
      "Long-term structural integrity and compounding potential",
      "Feasibility within its operational context",
    ],
    whyMatters: "If a project promises flood revenue now but carries a high probability of zero value later, it fails here. Immediate gains mean nothing without a permanent foundation.",
    href: "/l",
    color: "#004DFD",
    glow: "rgba(0,77,253,0.35)",
    lightBg: "rgba(0,77,253,0.07)",
    icon: Brain,
  },
  {
    letter: "IO",
    name: "Internal Optimization",
    subtitle: "Optimization Gate · 0–25 Points",
    purpose: "A deep-layer architectural audit that leaves no internal component incomplete. Not 80%. Not 95%. Every single layer must achieve total execution.",
    evaluates: [
      "Every internal component — technical, structural, semantic",
      "Backend efficiency and resource intelligence",
      "Completeness of each underlying operational layer",
      "Rejection of anything short of flawless execution",
    ],
    whyMatters: "Partial optimization is the most dangerous failure mode — it looks functional but decays silently. We refuse to deploy anything that hasn't been refined to absolute completion.",
    href: "/io",
    color: "#0066FF",
    glow: "rgba(0,102,255,0.35)",
    lightBg: "rgba(0,102,255,0.07)",
    icon: Gauge,
  },
  {
    letter: "N",
    name: "Non-Negotiable Integrity",
    subtitle: "Integrity Gate · 0–25 Points",
    purpose: "Enforces absolute ethical clarity across every layer. Zero deception. Zero manipulation. Zero shortcuts. If it costs us, it still costs us — we never bend this gate.",
    evaluates: [
      "100% legal, authorized, and transparent architecture",
      "Absence of hidden tricks, manipulation, or dark patterns",
      "Ethical clarity across content, claims, and conduct",
      "Full compliance with platform and regulatory standards",
    ],
    whyMatters: "Trust, once broken, cannot be technically patched. We eliminate deceptive behaviour at the source — not because it's safe to do so, but because it's the only way to command undeniable market authority.",
    href: "/n",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.35)",
    lightBg: "rgba(124,58,237,0.07)",
    icon: Shield,
  },
  {
    letter: "XE",
    name: "eXceptional Excellence",
    subtitle: "Excellence Gate · 0–25 Points",
    purpose: "The final gate — and the hardest to earn. Measures whether the asset possesses a remarkably unique value that powerfully separates it from every existing alternative.",
    evaluates: [
      "Unique value that separates from all existing alternatives",
      "Powerful distinction across all, some, or at least one core area",
      "Sophistication of execution — beyond the generic template",
      "Authority-level craft that commands respect, not just traffic",
    ],
    whyMatters: "Competent execution doesn't earn authority — exceptional execution does. We bypass ordinary models to ensure every LIONXE-verified asset earns its position through genuine distinction.",
    href: "/xe",
    color: "#D97706",
    glow: "rgba(217,119,6,0.35)",
    lightBg: "rgba(217,119,6,0.07)",
    icon: Sparkles,
  },
];

const AUDIT_STEPS = [
  {
    step: "01",
    title: "Asset Submission",
    desc: "The digital asset — article, tool, website, UX, SEO strategy, or marketing plan — enters the LIONXE evaluation queue.",
    color: "#004DFD",
  },
  {
    step: "02",
    title: "Four-Gate Evaluation",
    desc: "The asset is cross-examined sequentially across all four pillars. Each gate must be cleared before the next begins.",
    color: "#0066FF",
  },
  {
    step: "03",
    title: "Scoring & Verdict",
    desc: "Each pillar is scored 0–25. Total score is calculated. Any failed gate triggers immediate rejection regardless of other scores.",
    color: "#7C3AED",
  },
  {
    step: "04",
    title: "Review Published",
    desc: "The full LIONXE audit report is published — transparent scoring, detailed reasoning, and an unambiguous pass or rejection verdict.",
    color: "#D97706",
  },
];

const SCOPE_CATEGORIES = [
  { label: "Articles & Blog Posts", icon: FileText, color: "#004DFD" },
  { label: "Digital Tools & Apps", icon: Wrench, color: "#06B6D4" },
  { label: "Websites & Landing Pages", icon: Monitor, color: "#10B981" },
  { label: "UX/UI Design & Interfaces", icon: MousePointer2, color: "#8B5CF6" },
  { label: "SEO Strategies & Audits", icon: Search, color: "#F59E0B" },
  { label: "Marketing Strategies", icon: Target, color: "#EC4899" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const FrameworkPage = () => {
  const sec2Ref = useRef<HTMLElement>(null);
  const sec4Ref = useRef<HTMLElement>(null);
  const sec6Ref = useRef<HTMLElement>(null);

  const sec2InView = useInView(sec2Ref, { once: true, margin: "-80px" });
  const sec4InView = useInView(sec4Ref, { once: true, margin: "-80px" });
  const sec6InView = useInView(sec6Ref, { once: true, margin: "-80px" });

  return (
    <main className="bg-white dark:bg-[#050B1F]">

      {/* ═══════════════════════════════════════════════════════════
          §1 HERO — Framework at a Glance
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-24 sm:px-6 lg:px-8 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#050B1F] to-[#0A0F1E] dark:from-[#050B1F] dark:to-[#0A0F1E]">

        {/* Radial glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,77,253,0.22),transparent)]" />

        {/* Fine grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"56px 56px" }} />

        <div className="relative mx-auto max-w-6xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-widest border-[#004DFD]/50 bg-[#004DFD]/10 text-[#7CA0FF]"
          >
            <Layers3 className="h-5 w-5" />
            The LIONXE™ Framework
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
            className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Four Gates.
            <br />
            <span className="text-[#004DFD]">One Unbreakable Standard.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="mx-auto mb-14 max-w-3xl text-lg font-medium leading-8 text-slate-300"
          >
            LIONXE™ is a multi-layered digital quality framework that evaluates assets
            across four sequential dimensions — Logic, Internal Optimization, Non-Negotiable
            Integrity, and eXceptional Excellence. Pass all four, or be rejected entirely.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { value: "4",     label: "Sequential Gates" },
              { value: "100",   label: "Total Points" },
              { value: "0%",    label: "Tolerance for Shortcuts" },
              { value: "∞",     label: "Long-Term Value Sought" },
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
          §2 PHILOSOPHY — Foundation (with image)
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec2Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <motion.div
              initial={{ opacity:0, x:-30 }}
              animate={sec2InView ? { opacity:1, x:0 } : {}}
              transition={{ duration:0.65 }}
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=640&fit=crop"
                  alt="The architectural precision and strategic thinking behind the LIONXE framework"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
              <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                <strong>Image concept:</strong> Replace with a visual representing
                structured, precision-engineered architecture — blueprint, geometric
                framework, or layered system diagram
              </p>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity:0, x:30 }}
              animate={sec2InView ? { opacity:1, x:0 } : {}}
              transition={{ duration:0.65, delay:0.15 }}
              className="space-y-7"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Why This Framework Exists
              </h2>

              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                The internet isn't failing because of a lack of content. It's failing
                because of a lack of <strong className="font-semibold text-slate-900 dark:text-white">standards</strong>.
                Anyone can publish. No one enforces quality.
              </p>

              <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                LIONXE was engineered by{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">Sufian Mustafa</strong>{" "}
                to solve exactly this: a rigorous, sequential evaluation system that
                refuses to award authority to anything that hasn't earned it through
                genuine quality — not traffic, not age, not volume.
              </p>

              <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                The framework asks a single question at every gate: <em>"Is this element
                optimized to absolute completion?"</em> Not 80%. Not 95%. If a single
                gate fails, the evaluation ends. There are no partial passes and
                no compensatory scoring.
              </p>

              {/* Quote callout */}
              <div className="border-l-4 border-[#004DFD] pl-5">
                <p className="text-base italic leading-7 text-slate-700 dark:text-slate-300">
                  "A framework that tolerates shortcuts isn't a framework — it's
                  just a checklist with better branding."
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
          §3 SCORING ARCHITECTURE — Visual 100-point System
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Scoring Architecture
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              100 points. 4 gates. Each weighted equally. All non-negotiable.
            </p>
          </div>

          {/* Central scorecard */}
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-white/[0.04]">

            {/* Top total */}
            <div className="border-b border-slate-100 bg-slate-50 px-8 py-6 text-center dark:border-white/[0.08] dark:bg-white/[0.03]">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Maximum Possible Score
              </p>
              <p className="mt-1 text-7xl font-black text-slate-900 dark:text-white">
                100
              </p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Points · LIONXE Verified
              </p>
            </div>

            {/* Pillar rows */}
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
                    <p className="text-2xl font-black text-slate-900 dark:text-white">25</p>
                    <p className="text-xs font-semibold text-slate-400">points</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Iron rule */}
            <div className="flex items-start gap-3 border-t border-red-100 bg-red-50/60 px-8 py-5 dark:border-red-500/20 dark:bg-red-500/[0.05]">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
              <p className="text-sm leading-6 text-red-700 dark:text-red-300">
                <strong className="font-black">The Iron Rule:</strong> If any single gate
                fails, the evaluation terminates immediately. No partial passes.
                No compensatory scoring. No exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §4 FOUR PILLARS — Alternating Deep-Dive Layout
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec4Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Four Pillars in Detail
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Each pillar builds on the last. Miss one — lose the evaluation.
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

                    {/* Main content */}
                    <div className={`p-8 sm:p-10 ${!isEven ? "lg:order-2" : ""}`}>
                      {/* Header row */}
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
                        </div>
                      </div>

                      {/* Purpose */}
                      <p className="mb-5 text-base font-semibold leading-7 text-slate-800 dark:text-slate-200">
                        {pillar.purpose}
                      </p>

                      {/* Why it matters */}
                      <p className="mb-6 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {pillar.whyMatters}
                      </p>

                      {/* Link to full pillar page */}
                      <a
                        href={pillar.href}
                        className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                        style={{ borderColor: `${pillar.color}40`, color: pillar.color, backgroundColor: pillar.lightBg }}
                      >
                        <BookOpen className="h-4 w-4" />
                        Read Full {pillar.letter} Pillar Page
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Evaluates checklist */}
                    <div
                      className={`flex flex-col justify-center gap-4 border-slate-100 p-8 sm:p-10 dark:border-white/[0.07] ${isEven ? "border-t lg:border-t-0 lg:border-l" : "border-t lg:order-1 lg:border-t-0 lg:border-r"}`}
                      style={{ backgroundColor: pillar.lightBg }}
                    >
                      <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: pillar.color }}>
                        What We Evaluate
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
          §5 THE IRON RULE — Full Callout
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-20 bg-slate-900 dark:bg-[#040810] sm:px-6 lg:px-8">

        {/* Glow */}
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
              The Iron Rule
            </h2>

            <p className="mb-8 text-xl leading-8 text-slate-300">
              Each pillar is a sequential gate. Each gate builds on the last.
              If a project fails at Gate 1, Gates 2, 3, and 4 become irrelevant.
            </p>

            {/* Gate flow */}
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
                <strong className="font-black text-red-400">One failure collapses the entire evaluation.</strong>{" "}
                A project scoring 25/25 on Logic, Optimization, and Integrity but failing
                Excellence receives the same verdict as a project failing Gate 1:{" "}
                <strong className="font-black">REJECTED</strong>. LIONXE does not negotiate
                with partial quality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §6 HOW AN AUDIT WORKS — Step Timeline
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
              From submission to published verdict — four stages, zero shortcuts
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {AUDIT_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity:0, y:30 }}
                animate={sec6InView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line (desktop) */}
                {i < AUDIT_STEPS.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 border-t-2 border-dashed border-slate-200 dark:border-white/10 lg:block" style={{ width: "calc(100% - 64px)", left: "calc(50% + 32px)" }} />
                )}

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                  {/* Step number */}
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
          §7 FRAMEWORK SCOPE — What LIONXE Reviews
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              What the Framework Reviews
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The same four gates. Applied to every category.
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

          {/* Link to full what-we-review */}
          <div className="mt-10 text-center">
            <a
              href="/what-we-review"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#004DFD] hover:underline dark:text-[#7CA0FF]"
            >
              See full review category breakdown
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §8 FINAL CTA — Two Paths
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-24 bg-gradient-to-br from-[#004DFD] to-[#0044D4] sm:px-6 lg:px-8 lg:py-32">

        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize:"32px 32px" }} />

        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* Read pillar pages */}
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
                  Read the Pillar Pages
                </h3>
                <p className="text-base leading-7 text-blue-100">
                  Go deep. Each pillar has its own dedicated page with full diagnostic
                  questions, governing rules, case appraisals, and a self-audit protocol.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {PILLARS.map((p) => (
                  <a
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
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Explore audits */}
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
                  Explore Live LIONXE Audits
                </h3>
                <p className="mb-6 text-base leading-7 text-blue-100">
                  See the framework applied in real-world reviews. Real assets.
                  Real scores. Transparent reasoning. LIONXE in action.
                </p>
                <a
                  href="/reviews"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-base font-black text-[#004DFD] transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
                >
                  Browse All Audits
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-blue-200">
                  Also Explore
                </p>
                <a
                  href="https://doitwithai.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.08] px-5 py-4 text-sm font-bold text-white transition-all hover:bg-white/[0.18]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0891B2] text-xs font-black">AI</div>
                  <span>Do It With AI Tools™ — Framework in action</span>
                  <ExternalLink className="ml-auto h-4 w-4 shrink-0 opacity-60" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default FrameworkPage;