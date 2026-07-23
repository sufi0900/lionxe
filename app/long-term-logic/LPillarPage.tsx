/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Clock,
  CheckCircle2,
  XCircle,
  Shield,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Target,
  ListChecks,
  Sparkles,
  ArrowRight,
  Gauge,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const DIAGNOSTIC_QUESTIONS = [
  {
    dimension: "The Foundation",
    question: "What is the history or past of this structure?",
    detail:
      "Is it built on legacy liabilities, or does it stand on clean, authorized ground? We examine every historical element for structural defects.",
    icon: Shield,
  },
  {
    dimension: "The Present Reality",
    question:
      "Does this setup offer an authentic, legitimate benefit right now?",
    detail:
      "Or is it artificially inflated by temporary conditions? We distinguish between real value and circumstantial spikes.",
    icon: Target,
  },
  {
    dimension: "The Future Potential",
    question: "Does this architecture have the innate power to stay alive?",
    detail:
      "Not just survive — but compound in value and authority years into the future. What happens to its efficiency long-term?",
    icon: TrendingUp,
  },
  {
    dimension: "The Operational Context",
    question:
      "Is this system entirely feasible, eligible, and aligned with its environment?",
    detail:
      "Perfect alignment means the structure fits its reality seamlessly while remaining flexible enough to scale sustainably.",
    icon: CheckCircle2,
  },
];

const CHECKLIST_ITEMS = [
  "Historical foundation analysis — legacy liabilities or clean ground",
  "Present value verification — real vs artificial inflation",
  "Long-term compounding potential — years ahead, not months",
  "Market shift resistance — insulation from predictable disruptions",
  "Regulatory compliance permanence — no hidden violations",
  "Resource sustainability — operates without constant external patches",
  "Scalability without degradation — 10x growth without breaking",
  "Context alignment — perfect fit for operational reality",
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const LPillarPage = () => {
  const section2Ref = useRef<HTMLElement>(null);
  const section5Ref = useRef<HTMLElement>(null);
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });
  const isSection5InView = useInView(section5Ref, { once: true, margin: "-100px" });

  return (
    <main className="relative bg-white dark:bg-[#050B1F]">
      
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO / EXECUTIVE SUMMARY
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white px-4 py-24 dark:from-[#0A0F1E] dark:to-[#050B1F] sm:px-6 lg:px-8 lg:py-32">
        {/* Background pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Pillar badge — now shows gate position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-widest border-[#004DFD]/30 bg-[#004DFD]/[0.06] text-[#004DFD] dark:border-[#004DFD]/40 dark:bg-[#004DFD]/10 dark:text-[#7CA0FF]"
          >
            <Brain className="h-5 w-5" />
            LIONXE — Gate 1 of 4
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block text-[#004DFD]">L</span>
            The Logic & Longevity Standard
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl"
          >
            Eliminating Volatility to Anchor Frameworks in Permanent Value
          </motion.p>

          {/* Core definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              The Logic & Longevity Standard is the <strong className="font-bold text-slate-900 dark:text-white">first and most critical gate</strong> of
              the LIONXE ™ auditing framework. This standard dictates that no
              architecture, system, or asset may be deployed if it is built on a
              volatile foundation.
            </p>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              We evaluate structures through a <strong className="font-bold text-slate-900 dark:text-white">multi-year lens</strong>, demanding that
              every operational layer possesses a permanent, compounding benefit.
              <strong className="font-bold text-[#004DFD]"> If a system cannot prove it will be structurally stronger
              years from now, it fails immediately.</strong>
            </p>

            {/* Scoring context — new addition */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                <Gauge className="h-4 w-4 text-[#004DFD]" />
                Scored 0–25 points
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Minimum 15 to pass
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/80 px-5 py-3 text-sm font-semibold text-red-700 dark:border-red-500/20 dark:bg-red-500/[0.06] dark:text-red-400">
                <XCircle className="h-4 w-4" />
                Failure terminates entire audit
              </div>
            </div>

            {/* Creator credit */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
              <Lightbulb className="h-5 w-5 text-[#004DFD]" />
              <span>
                Engineered by{" "}
                <strong className="font-bold text-slate-900 dark:text-white">
                  Sufian Mustafa
                </strong>{" "}
                — Digital Growth & AI Search Systems Architect and creator of the LIONXE ™ framework
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: THE GENESIS (with image)
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={section2Ref}
        className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-white dark:bg-[#070D1B]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isSection2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
                The Genesis: Why Longevity Defeats the Immediate Gain
              </h2>

              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  Most modern frameworks are engineered for{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    instant gratification
                  </strong>
                  . They chase surface-level trends, temporary traffic loops, and
                  short-sighted wins that decay the moment external market dynamics
                  shift.
                </p>
                <p>
                  The LIONXE standard was born out of a necessity to{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    survive systemic disruptions
                  </strong>
                  . Historically, entities that optimized for fast, easy gains
                  collapsed under structural shifts — algorithmic changes,
                  regulatory updates, market saturation.
                </p>
                <p>
                  We engineered the Longevity Standard to serve as a{" "}
                  <strong className="font-semibold text-[#004DFD]">
                    shield against evolution
                  </strong>
                  , shifting the focus away from fragile, high-maintenance shortcuts
                  toward deep-level architectures that compound value over time —
                  not months, not quarters, but <em>years and decades</em>.
                </p>
                <p className="text-sm italic">
                  Our primary focus isn't on what revenue a project generates today
                  or what its past looked like — it's on its{" "}
                  <strong className="not-italic font-bold text-slate-900 dark:text-white">
                    long-term structural integrity
                  </strong>
                  . If a system promises flood revenue now but carries a high
                  probability of collapse later, we reject it. Immediate gains mean
                  nothing if the foundation cannot sustain them.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isSection2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-white/10 dark:bg-white/[0.03]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="Abstract visualization of long-term strategic foundations vs short-term tactics"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
              <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
                <strong>Image concept:</strong> Replace with illustration showing
                diverging paths — short-term spikes vs long-term compound growth,
                or shallow roots vs deep foundations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: CORE DIAGNOSTIC QUESTIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Core Inquiries
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Dissecting the Structural Timeline — Four Dimensional Planes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {DIAGNOSTIC_QUESTIONS.map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#004DFD]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#004DFD]/15">
                      <Icon className="h-6 w-6 text-[#004DFD]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#004DFD]">
                        {q.dimension}
                      </p>
                      <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white">
                        {q.question}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {q.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: THE GOVERNING RULES
          Now anchored to the doctrine's governing law name.
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#004DFD]">
              Governing Law: The Post-Flood Collapse Rule
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Unyielding Laws of the L Pillar
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              If the trajectory trends toward zero after the initial spike, the architecture is a structural failure. These three absolute rules enforce that principle.
            </p>
          </div>

          <div className="space-y-10">
            {/* Rule 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-6"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#004DFD] text-3xl font-black text-white shadow-lg">
                1
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                  The Long-Term Multiplier Rule
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  Immediate gains are completely deprioritized. A framework must
                  prove that its core foundations will naturally become{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    more valuable, stable, and authoritative
                  </strong>{" "}
                  over an extended period. We're not bound to a strict timeline —
                  different projects have different lifespans — but the trajectory
                  must be unquestionably upward and compounding.
                </p>
              </div>
            </motion.div>

            {/* Rule 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-6"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#004DFD] text-3xl font-black text-white shadow-lg">
                2
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                  The Historical Cleanliness Rule
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  Any system anchored to a compromised, illegal, or unstable past
                  is{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    rejected immediately
                  </strong>
                  . Legacy defects cannot be optimized out later. We will not waste
                  resources attempting to polish a foundation that is fundamentally
                  flawed.
                </p>
              </div>
            </motion.div>

            {/* Rule 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#004DFD] text-3xl font-black text-white shadow-lg">
                3
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                  The Upstream Rejection Rule
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  The L pillar is a{" "}
                  <strong className="font-semibold text-[#004DFD]">
                    hard gate
                  </strong>
                  . If a project fails to verify its longevity, the audit terminates
                  instantly. We refuse to waste time optimizing something that has
                  no long-term right to exist. Optimization without a solid
                  foundation is theater.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: CASE STUDIES (with image)
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={section5Ref}
        className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Case Appraisals
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Evaluating Real-World Execution — Substandard vs. Flawless
            </p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSection5InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-white/10 dark:bg-white/[0.03]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop"
                alt="Visual comparison of fragile short-term architecture vs robust long-term structure"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
              <strong>Image concept:</strong> Replace with side-by-side
              architectural comparison — fragile temporary structure (left) vs
              solid enduring foundation (right)
            </p>
          </motion.div>

          {/* Comparison cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Failure case */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isSection5InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-red-200 bg-red-50/50 p-8 dark:border-red-500/20 dark:bg-red-500/[0.04]"
            >
              <div className="mb-4 flex items-center gap-3">
                <XCircle className="h-8 w-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">
                  Substandard Architecture
                </h3>
              </div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500">
                Automatic Failure — Post-Flood Collapse Detected
              </p>
              <p className="leading-7 text-slate-700 dark:text-slate-400">
                An entity deploys a massive network of{" "}
                <strong>87 shallow, high-speed micro-structures</strong> to harvest
                rapid, immediate returns. While initial metrics spike, the
                underlying infrastructure lacks authority and relies on temporary
                loopholes.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                Within months, external conditions shift, the loopholes close, and
                the entire network collapses. This setup{" "}
                <strong className="text-red-700 dark:text-red-400">
                  fails the L test
                </strong>{" "}
                because it possesses <em>zero future potential</em> and no lasting
                foundation.
              </p>
            </motion.div>

            {/* Success case */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isSection5InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 dark:border-emerald-500/20 dark:bg-emerald-500/[0.04]"
            >
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                  Flawless Architecture
                </h3>
              </div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
                LIONXE Pass
              </p>
              <p className="leading-7 text-slate-700 dark:text-slate-400">
                An entity bypasses the easy, low-effort path to build a{" "}
                <strong>single, highly concentrated, premium asset</strong>. It
                targets a highly competitive, high-authority space that requires
                extensive upfront resources and meticulous foundational work.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                Growth is slower initially, but the asset establishes deep root
                systems. Years later, while the micro-structures have vanished, this
                premium asset stands as an{" "}
                <strong className="text-emerald-700 dark:text-emerald-400">
                  unshakeable market leader
                </strong>
                , continuously compounding its value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: WHAT WE COVER - CHECKLIST
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              What We Cover in an L Audit
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The evaluation checklist — may vary strategically by project
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <ListChecks className="h-8 w-8 text-[#004DFD]" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Core Evaluation Criteria
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {CHECKLIST_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#004DFD]" />
                  <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-500/20 dark:bg-amber-500/[0.06]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-500" />
                <p className="text-sm leading-6 text-amber-900 dark:text-amber-200">
                  <strong className="font-semibold">Note:</strong> This list is not
                  exhaustive. Depending on the project's nature, scope, and industry
                  context, additional criteria may be applied strategically to
                  ensure a comprehensive evaluation of long-term viability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: VERIFICATION MATRIX
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Passing Matrix
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              How the Authority Certifies Longevity
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "The Sustainability Index",
                desc: "The asset must prove it can function at maximum efficiency without relying on constant external patches or volatile third-party conditions.",
                icon: TrendingUp,
              },
              {
                title: "The Vulnerability Rating",
                desc: "The framework must demonstrate total insulation from predictable future market shifts, algorithmic changes, or regulatory updates.",
                icon: Shield,
              },
              {
                title: "The Context Alignment Pass",
                desc: "The architecture must seamlessly integrate into its current operational reality while remaining flexible enough to scale sustainably.",
                icon: Target,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#004DFD]/10">
                    <Icon className="h-7 w-7 text-[#004DFD]" strokeWidth={2} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: SELF-AUDIT PROTOCOL
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-gradient-to-br from-[#004DFD] to-[#0066FF] sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="mx-auto mb-6 h-12 w-12" />
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl">
              The Self-Auditing Protocol
            </h2>
            <p className="mb-12 text-lg text-blue-100">
              Test Your Own Longevity — Before Submitting for Official Evaluation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-6 text-left"
          >
            {[
              "If the temporary trends fueling your current growth completely vanished tomorrow, does your infrastructure possess an underlying asset that remains valuable?",
              "Look closely at your backend setup: are you spending 80% of your time patching short-term cracks, or are you executing a plan with a lifetime benefit?",
              "Can your current structural foundation scale to 10x its size without breaking under its own weight or violating compliance?",
            ].map((q, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
              >
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                    {i + 1}
                  </div>
                  <p className="leading-7">{q}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-white/30 bg-white/10 p-8 backdrop-blur-md"
          >
            <p className="mb-5 text-base leading-7">
              If your architecture hesitates on even one of these points, it is time
              to dismantle the surface-level shortcuts and reconstruct your
              framework under the strict guidelines of the LIONXE standard.
            </p>
            <div className="rounded-xl border border-white/20 bg-white/[0.08] p-5">
              <p className="text-sm leading-6 text-blue-100">
                <strong className="font-bold text-white">
                  Universal Application:
                </strong>{" "}
                This framework isn't limited to digital projects. You can apply the
                L pillar's logic to <em>any decision or project</em> in your life —
                business strategy, career moves, investment choices, relationships.
                The principle remains: prioritize long-term structural integrity
                over short-term convenience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: NEXT PILLAR NAVIGATION
          New addition — guides the reader to the next gate.
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-16 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row">
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                Next Pillar
              </p>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                IO — Internal Optimization
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                The second gate: every internal layer must be optimized to completion.
              </p>
            </div>
            <a
              href="/io"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#004DFD] px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
            >
              Read Pillar IO
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LPillarPage;