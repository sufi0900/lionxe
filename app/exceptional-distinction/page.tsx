
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  
  Layers,
  CheckCircle2,
  XCircle,
  Shield,
  
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
    dimension: "Unique Signature Value",
    question: "Does the asset introduce unmistakable, original, and uncopyable authority?",
    detail: "We audit the core depth of the material to ensure it goes far beyond standard regurgitation. It must provide unique data synthesis, proprietary insights, or elite creative execution.",
    icon: Sparkles,
  },
  {
    dimension: "Commoditization Resistance",
    question: "Can this entire architecture be instantly replicated by generic automated tools?",
    detail: "We evaluate the asset's structural moat. If an AI generator or an average competitor can duplicate the output using standard templates in five minutes, it has zero distinction.",
    icon: Shield,
  },
  {
    dimension: "Premium Presentation Depth",
    question: "Is the sensory, design, and interactive experience undeniably elite?",
    detail: "We measure the polish of the user interface, typography, and content engagement curves. The presentation must establish a clear psychological separation from low-tier digital noise.",
    icon: Layers,
  },
  {
    dimension: "Authority & Trust Resonance",
    question: "Does the asset project absolute human-directed mastery and long-term integrity?",
    detail: "We inspect layout logic, author alignment, and factual architecture. The presence of specialized expertise must feel unshakeable, establishing authentic, foundational trust.",
    icon: Target,
  },
];

const CHECKLIST_ITEMS = [
  "Unique Value Proposition validation—complete removal of commodity lookalike patterns",
  "Original insight synthesis—introducing data, frameworks, or insights unavailable elsewhere",
  "Bespoke layout differentiation—zero reliance on obvious, mass-produced digital templates",
  "Authoritative expertise alignment—clear markers of specialized, human-led mastery",
  "Advanced structural moats—insulating the asset against rapid algorithmic reproduction",
  "Premium interactive polish—high-end sensory harmony across all user touchpoints",
  "Uncompromising content depth—fully exhausting the user intent with absolute precision",
  "Strategic brand resonance—embedding a signature identity into the functional core",
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const XEPillarPage = () => {
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
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Pillar badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-widest border-[#5271ff]/30 bg-[#5271ff]/[0.06] text-[#5271ff] dark:border-[#5271ff]/40 dark:bg-[#5271ff]/10 dark:text-[#7CA0FF]"
          >
            <Sparkles className="h-5 w-5" />
            LIONXE Pillar
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block text-[#004DFD]">XE</span>
            The eXceptional Distinction Standard
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl">
            Eliciting Absolute Incomparability to Destroy Generic Commoditization
          </motion.p>

          {/* Core definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              The eXceptional Distinction Standard represents the{" "}
              <strong className="font-bold text-slate-900 dark:text-white">ultimate validation gate</strong>{" "}
              of the LIONXE framework. This standard demands that an asset possess an undeniable, elevated competitive edge that prevents it from ever blending into background market noise.
            </p>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              We audit properties based on their{" "}
              <strong className="font-bold text-slate-900 dark:text-white">irreplaceable signature value</strong>,
              completely rejecting safe templates, lookalike content, and basic automation patterns.{" "}
              <strong className="font-bold text-[#5271ff]">
                If an architecture matches the generic baseline of its industry, it is a total structural failure.
              </strong>{" "}
              True authority requires an exceptional, elite signature across design, depth, and operational strategy.
            </p>

            {/* Creator credit */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
              <Lightbulb className="h-5 w-5 text-[#5271ff]" />
              <span>
                Engineered by{" "}
                <strong className="font-bold text-slate-900 dark:text-white">Sufian Mustafa</strong>{" "}
                — AI strategist and founder of Do It With AI Tools
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
                The Mind Behind the Standard: Why Average Execution is a Fatal Digital Moat
              </h2>

              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  Most modern enterprises suffer from the illusion of{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    commodity competence
                  </strong>
                  . They produce functional layouts and optimized materials that follow identical patterns to their top-ten competitors, hoping visibility will save them.
                </p>
                <p>
                  Through meticulous ecosystem observation, founder{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Sufian Mustafa
                  </strong>{" "}
                  identified that mass automation has turned baseline quality into a cheap commodity. In AI-powered spaces, copycat structures quickly decay into absolute obscurity.
                </p>
                <p>
                  A single asset that fails to assert an explicit, elite separation—whether through original perspectives, premium design style, or unmatched strategic presentation—will{" "}
                  <strong className="font-semibold text-[#5271ff]">
                    be washed away by automated data updates
                  </strong>
                  . The XE standard exists to guarantee unshakeable, premium distinction.
                </p>
                <p className="text-sm italic">
                  We believe that deploying a digital project without a distinct competitive moat is{" "}
                  <strong className="not-italic font-bold text-slate-900 dark:text-white">
                    the exact same as shipping invisible work
                  </strong>
                  . If it does not break the standard mold to demonstrate clear dominance, it fails.
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
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
                  alt="Elite positioning and brand premium distinction concept"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
              <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
                <strong>Image concept:</strong> Replace with an abstract graphic displaying a single, vibrant glowing element breaking out from a sea of dark, identical geometric nodes.
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
              The Blueprint of Uniqueness
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Four Critical Dimensions Evaluated Under the XE Standard
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
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5271ff]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5271ff]/15">
                      <Icon className="h-6 w-6 text-[#004DFD]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#5271ff]">
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
              The Unyielding Laws of the XE Pillar
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Three absolute principles that target and destroy commodity execution
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
                  The Law of Absolute Incomparability
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  If your platform or strategy can be easily swapped with a general alternative without a measurable drop in experiential authority, it fails. We award no partial marks for lookalikes. Every interface element and layer of value must prove why it deserves to exist outside standard industry benchmarks.
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
                  The Signature Moat Requirement
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  Every asset must feature an elite, unmistakable hallmark of specialized execution. Whether through advanced design structures, proprietary workflow applications, or highly integrated strategic datasets, the architecture must possess a defensive competitive barrier that automated scraper tools or manual imitators cannot quickly capture.
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
                  The Final Gate Termination
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  The XE standard acts as the{" "}
                  <strong className="font-semibold text-[#5271ff]">ultimate defensive barrier</strong>{" "}
                  of the LIONXE pipeline. No matter how perfectly valid the core intent (L) or how hyper-optimized the internal pathways are (IO), if the final presentation lacks an elite signature value and mirrors commodity layouts, the audit terminates and the project is rejected.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: CASE APPRAISALS (with image)
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
              Distinction in Practice — Commodity Output vs. True Signature Domain
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop"
                alt="Visual representation of generic vs premium distinct systems"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
              <strong>Image concept:</strong> Replace with a side-by-side comparison displaying standard, mass-duplicated online modules on the left vs a modern, custom interactive framework on the right.
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
                  Commoditized Architecture
                </h3>
              </div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500">
                Automatic Rejection
              </p>
              <p className="leading-7 text-slate-700 dark:text-slate-400">
                An entity coordinates a project with precise operational logic and brilliant code speeds. Yet, when selecting presentation themes and informational depth, they play it safe. They mimic popular industry templates, rewrite competitor headings, and settle for standard AI-assisted paragraphs.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                Because the system looks and acts like thousands of other properties, search engine engines flag it as low-distinction filler. User engagement drops, brand retention drops to zero, and the framework{" "}
                <strong className="text-red-700 dark:text-red-400">
                  automatically fails the XE evaluation
                </strong>{" "}
                due to its complete lack of a signature competitive moat.
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
                  Incomparable Signature Architecture
                </h3>
              </div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
                LIONXE Pass
              </p>
              <p className="leading-7 text-slate-700 dark:text-slate-400">
                An entity applies the identical foundational blueprint through the platform layer of <strong>Do It With AI Tools</strong>. They refuse to ship until the project introduces a custom presentation signature, original proprietary data synthesis, and advanced interactive design pathways.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                The final platform stands completely isolated as a{" "}
                <strong className="text-emerald-700 dark:text-emerald-400">
                  masterpiece of exceptional distinction
                </strong>
                . It resists algorithm-driven commoditization, hooks visitor attention immediately, and secures premium market authority that stays strong for the long haul.
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
              What We Cover in an XE Audit
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The premium evaluation checklist — applied systematically across elite assets
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <ListChecks className="h-8 w-8 text-[#5271ff]" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Core Distinction Criteria
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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5271ff]" />
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
                  <strong className="font-semibold">Note:</strong> This checklist represents our core distinction benchmark. Depending on the target space, competition density, and technological parameters, we introduce supplementary parameters to protect the platform's long-term market insulation.
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
              How We Verify and Validate High-Tier Platform Distinction
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Unique Signature Rating",
                desc: "The project must establish that its presentation, informational value, and functional logic introduce a clear proprietary advantage that beats baseline benchmarks.",
                icon: Sparkles,
              },
              {
                title: "Commodity Defense Index",
                desc: "The overall framework must prove high defensive resistance against rapid automated reproduction, scraping, and template duplication by average competitors.",
                icon: Shield,
              },
              {
                title: "Elite Authority Pass",
                desc: "The final asset must exhibit cohesive presentation alignment, claiming elite authority in design and strategic message execution.",
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
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5271ff]/10">
                    <Icon className="h-7 w-7 text-[#5271ff]" strokeWidth={2} />
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
      <section className="relative px-4 py-20 bg-gradient-to-br from-[#004DFD] via-[#0066FF] to-[#003eb3] sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="mx-auto mb-6 h-12 w-12" />
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl">
              The Self-Auditing Protocol
            </h2>
            <p className="mb-12 text-lg text-blue-100">
              Audit Your Structural Distinction — Before Facing the LIONXE Gate
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
              "Evaluate your asset with total honesty. Does it look, sound, or behave so similarly to standard competition that an everyday user would completely forget your identity within five minutes?",
              "Are you relying entirely on safety-focused layouts and generic AI generation, entirely missing the opportunity to inject an advanced signature moat into your digital footprint?",
              "If an elite industry specialist or high-end critic inspected this work, would they instantly respect it as a unique standard of execution, or categorize it as standard commodity background noise?",
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
              If your current platform architecture matches competitor footprints on even a single criteria, you must pause deployment. Step back from the commodity shortcuts and reconstruct your asset using the uncompromising rules of the XE standard.
            </p>
            <div className="rounded-xl border border-white/20 bg-white/[0.08] p-5">
              <p className="text-sm leading-6 text-blue-100">
                <strong className="font-bold text-white">Universal Application:</strong> This architecture scales far beyond traditional digital setups. You can apply the core philosophy of the XE standard to any elite project or strategic operation — product positioning, brand building, design synthesis, or content engineering. The rule is absolute: never deploy work that looks like everything else, because standard execution brings zero authority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default XEPillarPage;