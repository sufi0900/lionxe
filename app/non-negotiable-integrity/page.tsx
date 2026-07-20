/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  CheckCircle2,
  XCircle,
  Shield,
  Lock,
  AlertTriangle,
  Lightbulb,
  Target,
  ListChecks,
  Sparkles,
  Eye,
  FileCheck,
  UserCheck,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const DIAGNOSTIC_QUESTIONS = [
  {
    dimension: "Legal Authorization & Compliance",
    question: "Does every element possess one hundred percent legal authorization?",
    detail:
      "We verify that every structural element, piece of data, and digital property strictly adheres to governing terms of service and regulatory requirements. No shortcuts, no gray areas.",
    icon: FileCheck,
  },
  {
    dimension: "Absolute Transparency Matrix",
    question: "Are there any hidden mechanics or manipulative loops?",
    detail:
      "We audit for secret tricks, deceptive funnels, or concealed systems intended to mislead users. Complete openness is mandatory — no exceptions.",
    icon: Eye,
  },
  {
    dimension: "Verifiable Authenticity",
    question: "Are all outward-facing claims backed by absolute truth?",
    detail:
      "We dissect testimonials, statistics, and data to ensure zero exaggeration or artificial inflation. Every claim must be provable and honest.",
    icon: Scale,
  },
  {
    dimension: "Conduct & Environment",
    question: "Does the framework exploit human vulnerabilities?",
    detail:
      "We evaluate for negative behaviors, deceptive language, or manipulative psychological triggers. Ethical treatment of users is non-negotiable.",
    icon: UserCheck,
  },
];

const CHECKLIST_ITEMS = [
  "Legal authorization verification — 100% compliance with all regulations",
  "Terms of service adherence — zero unauthorized implementations",
  "Transparency audit — no hidden mechanics or secret systems",
  "Claims authenticity check — all statements backed by verifiable proof",
  "Manipulation pattern scan — zero exploitative psychological triggers",
  "Data integrity verification — honest representation of all metrics",
  "Partnership legitimacy — all collaborations fully authorized",
  "User protection standard — ethical treatment guaranteed throughout",
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const NPillarPage = () => {
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
            <ShieldCheck className="h-5 w-5" />
            LIONXE Pillar
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block text-[#004DFD]">N</span>
            The Non-Negotiable Integrity Standard
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl"
          >
            Enforcing Absolute Ethical Clarity to Mandate Total Transparency
          </motion.p>

          {/* Core definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              The Non-Negotiable Integrity Standard is the <strong className="font-bold text-slate-900 dark:text-white">ultimate protective gate</strong> of
              the LIONXE auditing framework. This standard dictates that no
              project, system, or strategy may pass evaluation if it relies on
              deceptive, short-sighted, or legally compromised tactics.
            </p>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              We evaluate structures through a lens of <strong className="font-bold text-slate-900 dark:text-white">absolute truth and authorization</strong>,
              completely eliminating hidden manipulation, bad-faith behavior, or ethical compromises.
              <strong className="font-bold text-[#004DFD]"> No matter how brilliant the long-term logic or flawless the internal execution,
              if an architecture fails to maintain one hundred percent transparency, it is permanently disqualified.</strong>
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
                The Mind Behind the Standard: Why Zero-Compromise Defeats the Unethical Shortcut
              </h2>

              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  In highly competitive environments, the temptation to cut ethical
                  corners is{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    immense
                  </strong>
                  . Most modern competitors readily employ deceptive tactics,
                  exaggeration, or unauthorized shortcuts under the justification
                  that "everyone does it."
                </p>
                <p>
                  Through deep strategic thinking, founder{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Sufian Mustafa
                  </strong>{" "}
                  recognized that compromised integrity creates an invisible
                  structural rot that guarantees future collapse.
                </p>
                <p>
                  Mustafa engineered the N Standard to serve as an{" "}
                  <strong className="font-semibold text-[#004DFD]">
                    unyielding ethical wall
                  </strong>
                  . Under this organizational philosophy, we would rather possess
                  zero vanity metrics, zero black-hat backlinks, and zero short-term
                  traffic than compromise on legality and transparency.
                </p>
                <p className="text-sm italic">
                  True authority cannot be built on a lie.{" "}
                  <strong className="not-italic font-bold text-slate-900 dark:text-white">
                    Absolute integrity is the only way to command permanent human
                    trust
                  </strong>{" "}
                  and protect long-term brand equity.
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                  alt="Ethical integrity and transparency concept"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
              <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
                <strong>Image concept:</strong> Replace with visualization showing
                transparency — clear glass structures vs opaque walls, or scales of
                justice with light shining through
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
              What We Cover Under the N Standard — Four Integrity Dimensions
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
              The Unyielding Laws of the N Pillar
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Three absolute rules that eliminate situational ethics
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
                  The Eighty-Nine Percent Illusion Law
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  We do not accept partial honesty. Even if an architecture is
                  ninety-nine percent legal and ethical, a{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    single percent of deliberate deception
                  </strong>{" "}
                  or unauthorized manipulation reduces the entire asset's integrity
                  score to zero. Honesty is binary — you either have it or you don't.
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
                  The Cost-Indifferent Mandate
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  True integrity only exists when you stick to it{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    even when it costs you
                  </strong>
                  . If maintaining compliance requires sacrificing immediate revenue,
                  competitive positioning, or rapid growth, the standard demands that
                  the sacrifice be made without hesitation. Ethics are not
                  negotiable.
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
                  The Absolute Kill-Switch
                </h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  The N pillar is an{" "}
                  <strong className="font-semibold text-[#004DFD]">
                    immediate operational termination point
                  </strong>
                  . If a project fails to verify its absolute transparency, the audit
                  process is aborted instantly, overriding any high marks earned in
                  previous pillars. Integrity failure means total failure.
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
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=400&fit=crop"
                alt="Visual comparison of deceptive vs transparent practices"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
              <strong>Image concept:</strong> Replace with side-by-side comparison
              — hidden shadows and concealed elements (left) vs open, transparent,
              well-lit structure (right)
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
                An entity deploys a{" "}
                <strong>high-performing digital marketing asset</strong> with great
                long-term viability and flawless internal optimization. However, to
                accelerate results, they utilize a manipulative backlink scheme that
                explicitly violates Google's Terms of Service.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                Furthermore, they publish exaggerated claims — asserting they
                "rigorously tested 1,000 tools" when they only tested five. While
                this generates massive initial visibility, it{" "}
                <strong className="text-red-700 dark:text-red-400">
                  fails the N test completely
                </strong>{" "}
                due to deception and hidden tricks. The authority triggers automatic
                rejection.
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
                An entity executing the same project{" "}
                <strong>refuses to implement unethical shortcuts</strong>. They
                document their processes with absolute honesty, make no false claims,
                ensure total transparency regarding their data sources, and build
                their network through completely authorized, legitimate partnerships.
              </p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                Even if competitors grow faster initially by using manipulative
                tricks, this framework remains clean, legal, and unshakeable. When
                regulatory updates eventually penalize the deceptive competitors,
                this architecture{" "}
                <strong className="text-emerald-700 dark:text-emerald-400">
                  stands tall, commanding undisputed market trust
                </strong>{" "}
                and permanent authority.
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
              What We Cover in an N Audit
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
                  as our baseline ethical anchor. Depending on the project's nature,
                  scope, and industry context, additional criteria may be applied
                  strategically to ensure comprehensive integrity verification.
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
              How We Certify Integrity
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "The Transparency Verification Index",
                desc: "The project must prove that all operational layers, data points, and systems are completely open, honest, and free of hidden agendas or manipulative mechanics.",
                icon: Eye,
              },
              {
                title: "The Authorization and Legitimacy Rating",
                desc: "The framework must display documented, ironclad legal permission for every asset, script, layout, or structural component it utilizes.",
                icon: Lock,
              },
              {
                title: "The Trust Preservation Pass",
                desc: "The architecture must demonstrate that its baseline execution completely eliminates manipulative patterns, ensuring long-term security for the end-user.",
                icon: Shield,
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
              Test Your Integrity — Before Submitting for Official Evaluation
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
              'Are you currently implementing a specific tactic, hidden trick, or slight exaggeration just because ninety-nine percent of your competitors or peers do it? If everyone else lied, would you accept it in your own house?',
              "If every backend mechanism, hidden shortcut, and internal communication regarding your current decision were completely exposed to the public tomorrow, would you stand behind it with pride, or would your authority shatter?",
              "Look closely at the environments you participate in and the partnerships you build. Do they tolerate negative behavior, abusive language, manipulative shortcuts, or a lack of transparency? If a relationship fails the test of absolute integrity, have you maintained the discipline to step away?",
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
              If your architecture or decision wavers on even one of these points, it
              is time to pause and re-evaluate. Dismantle the hidden shortcuts and
              rebuild your framework under the strict ethical guidelines of the
              LIONXE standard.
            </p>
            <div className="rounded-xl border border-white/20 bg-white/[0.08] p-5">
              <p className="text-sm leading-6 text-blue-100">
                <strong className="font-bold text-white">
                  Universal Application:
                </strong>{" "}
                This framework isn't limited to business projects. You can apply the
                N pillar's logic to <em>any decision or relationship</em> in your
                life — including the curation of your professional networks and
                interpersonal friendships. The principle remains: absolute integrity
                is non-negotiable, and one compromise poisons the entire foundation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default NPillarPage;