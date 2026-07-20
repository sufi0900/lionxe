/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Settings,
  Layers,
  CheckCircle2,
  XCircle,
  Shield,
  Zap,
  AlertTriangle,
  Lightbulb,
  Target,
  ListChecks,
  Sparkles,
  Link2,
  Gauge,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const DIAGNOSTIC_QUESTIONS = [
  {
    dimension: "Granular Component Quality",
    question: "Is every individual element executed to its theoretical limit?",
    detail:
      "We dissect the raw quality, rigidity, and integrity of every material or asset used within the structure. No component gets a pass at 95%.",
    icon: Target,
  },
  {
    dimension: "Hierarchical Alignment",
    question: "Does the internal organization create seamless operational flow?",
    detail:
      "We evaluate the layout logic and underlying hierarchy to ensure zero friction between components. Chaos kills excellence.",
    icon: Layers,
  },
  {
    dimension: "Functional Speed & Load Resilience",
    question: "Does the system execute flawlessly under operational stress?",
    detail:
      "We measure how rapidly and reliably the framework performs its core purpose when pushed to its limits. Speed without breaking.",
    icon: Zap,
  },
  {
    dimension: "User Experience Layer",
    question: "Is the final presentation premium and frictionless?",
    detail:
      "We audit readability, engagement flow, and interaction quality to guarantee a world-class experience. Surface polish must match internal excellence.",
    icon: CheckCircle2,
  },
];

const CHECKLIST_ITEMS = [
  "Component-level quality audit — every element at maximum refinement",
  "Structural hierarchy verification — zero layout chaos or confusion",
  "Load time optimization — sub-second execution across the board",
  "Cross-environment consistency — flawless performance on all platforms",
  "User interaction flow — zero friction from entry to exit",
  "Visual presentation excellence — professional aesthetic execution",
  "Technical debt elimination — no shortcuts or temporary patches",
  "Internal synergy assessment — all parts working as one cohesive system",
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const IOPillarPage = () => {
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
          {/* Pillar badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-widest border-[#004DFD]/30 bg-[#004DFD]/[0.06] text-[#004DFD] dark:border-[#004DFD]/40 dark:bg-[#004DFD]/10 dark:text-[#7CA0FF]"
          >
            <Settings className="h-5 w-5" />
            LIONXE Pillar
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block text-[#004DFD]">IO</span>
            The Internal Optimization Standard
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl"
          >
            Eliminating Fractional Excellence to Demand Complete Operational Symmetry
          </motion.p>

          {/* Core definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              The Internal Optimization Standard is the <strong className="font-bold text-slate-900 dark:text-white">second critical gate</strong> of
              the LIONXE auditing framework. This standard dictates that no
              project, system, or asset may pass evaluation if its internal
              components are only partially executed.
            </p>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              We evaluate structures <strong className="font-bold text-slate-900 dark:text-white">from the inside out</strong>, completely rejecting
              the industry-standard "minimum viable product" mindset.
              <strong className="font-bold text-[#004DFD]"> If an architecture is eighty or ninety-five percent optimized,
              it is classified as a total failure.</strong> True optimization demands one hundred percent completion across every single underlying layer.
            </p>

            {/* Creator credit */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
              <Lightbulb className="h-5 w-5 text-[#004DFD]" />
              <span>
                Engineered by{" "}
                <strong className="font-bold text-slate-900 dark:text-white">
                  Sufian Mustafa
                </strong>{" "}
                — SEO strategist and architect of the LIONXE framework
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
                The Mind Behind the Standard: Why Eighty-Percent Optimization is a Total Failure
              </h2>

              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  Most modern enterprises suffer from the habit of{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    rushing to ship
                  </strong>
                  . They optimize seventy, eighty, or ninety-five percent of a
                  project and deploy it, assuming they can patch the remaining
                  cracks later.
                </p>
                <p>
                  Through deep strategic thinking, founder{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Sufian Mustafa
                  </strong>{" "}
                  recognized this as a fatal structural flaw. In highly competitive
                  ecosystems, an architecture is only as strong as its weakest
                  internal link.
                </p>
                <p>
                  A single unoptimized element — whether a broken functional pathway,
                  a chaotic layout, or a sloppy technical hierarchy — will{" "}
                  <strong className="font-semibold text-[#004DFD]">
                    compromise the entire asset
                  </strong>
                  . The IO standard was engineered to enforce complete excellence.
                </p>
                <p className="text-sm italic">
                  We believe that shipping an asset with fractional quality is{" "}
                  <strong className="not-italic font-bold text-slate-900 dark:text-white">
                    equivalent to shipping a broken product
                  </strong>
                  . If it is not entirely optimized, it does not ship. Period.
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                  alt="Precision engineering and internal optimization concept"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
              <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
                <strong>Image concept:</strong> Replace with visualization showing
                internal component alignment — gears meshing perfectly vs misaligned
                components, or detailed circuit board patterns
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
              The Evaluation Blueprint
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              What We Cover Under the IO Standard — Four Critical Dimensions
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
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Unyielding Laws of the IO Pillar
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Three absolute rules that eliminate corner-cutting
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
                  The Law of Total Completion
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  We do not recognize partial success. An asset that is ninety-five
                  percent optimized is classified as a{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    zero percent pass
                  </strong>
                  . Every single component must reach maximum refinement before
                  deployment. There is no such thing as "good enough" in the LIONXE
                  framework — only complete or incomplete.
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
                  The Weakest Link Axiom
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  The overall value, performance, and authority of any framework are{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    permanently capped by its worst-executed internal layer
                  </strong>
                  . You cannot hide substandard work behind a few highly optimized
                  features. One broken component compromises the entire structure.
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
                  The Hard Gate Rejection
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  The IO standard is an{" "}
                  <strong className="font-semibold text-[#004DFD]">
                    unyielding barrier
                  </strong>
                  . No matter how brilliant, legal, or long-term the initial project
                  logic was (passing the L Gate), if the internal execution shows
                  structural neglect, the audit terminates and the project is
                  rejected. Excellence cannot be built on sloppy foundations.
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
              Operational Reality in Focus — Substandard vs. Flawless
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=400&fit=crop"
                alt="Visual comparison of chaotic vs optimized internal systems"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
              <strong>Image concept:</strong> Replace with side-by-side comparison
              — cluttered, disorganized workspace (left) vs perfectly organized,
              optimized system (right)
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
                Automatic Rejection
              </p>
              <p className="leading-7 text-slate-700 dark:text-slate-400">
                An entity designs a project with a{" "}
                <strong>phenomenal long-term strategy</strong> and verified
                historical legitimacy. However, during the assembly phase, they rush
                the details. They skip formal schema tags, use sloppy heading
                hierarchies, deploy broken image layouts, and create chaotic
                navigation flows.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                Because the internal layers are only seventy percent completed, the
                user experience collapses, bounce rates skyrocket, and the entire
                framework degrades. The authority{" "}
                <strong className="text-red-700 dark:text-red-400">
                  automatically rejects this project
                </strong>{" "}
                for failing the IO test — despite its brilliant foundation.
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
                An entity takes the exact same foundational concept but{" "}
                <strong>refuses to ship until every internal variable is perfected</strong>
                . Every single line of code, every structural hierarchy, every speed
                metric, every aesthetic detail, and every functional layer is
                meticulously refined and professionally integrated.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                The resulting architecture is a{" "}
                <strong className="text-emerald-700 dark:text-emerald-400">
                  masterpiece of comprehensive excellence
                </strong>
                . It operates with zero friction, completely satisfies its audience,
                and commands an elite, premium authority that preserves its value for
                the long haul.
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
              What We Cover in an IO Audit
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The evaluation checklist — adapted strategically by project
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
                  <strong className="font-semibold">Note:</strong> This list serves
                  as our baseline architectural anchor. Depending on the project's
                  nature, scope, and industry context, additional criteria may be
                  applied strategically to ensure comprehensive internal excellence.
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
              How We Certify Internal Optimization
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "The Comprehensive Excellence Rating",
                desc: "The project must prove that every internal sub-layer has been executed to its absolute theoretical limit without shortcuts or compromises.",
                icon: Target,
              },
              {
                title: "The Friction Elimination Index",
                desc: "The framework must display zero operational bottlenecks, slow execution speeds, or structural vulnerabilities when put under real-world pressure.",
                icon: Zap,
              },
              {
                title: "The Structural Rigidity Pass",
                desc: "The integrated components must display total synergy, working together as a single, cohesive, unshakeable system rather than a fragmented collection of parts.",
                icon: Link2,
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
              Test Your Internal Optimization — Before Submitting for Official Evaluation
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
              "Look honestly at the current state of your project. Are you leaving certain internal elements at an eighty percent level, secretly hoping that your strong foundation or good intentions will hide the flaws?",
              "If an uncompromising expert were to audit the single worst, most rushed, or most neglected layer of your current decision or work, would that single element be enough to ruin your entire reputation or asset value?",
              "Are you pushing this decision or project forward prematurely just to escape the stress of refinement, or are you maintaining the discipline to wait until every internal element reflects complete excellence?",
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
              If your architecture wavers on even one of these points, it is time to
              pause deployment. Dismantle the surface-level shortcuts and reconstruct
              your internal framework under the strict guidelines of the LIONXE
              standard.
            </p>
            <div className="rounded-xl border border-white/20 bg-white/[0.08] p-5">
              <p className="text-sm leading-6 text-blue-100">
                <strong className="font-bold text-white">
                  Universal Application:
                </strong>{" "}
                This framework isn't limited to digital projects. You can apply the
                IO pillar's logic to <em>any decision or project</em> in your life —
                product development, service delivery, creative work, operational
                processes. The principle remains: never ship anything that isn't
                internally perfect, because one weak link destroys the entire chain.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default IOPillarPage;