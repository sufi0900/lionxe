/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck, Eye, Ban, Scale, Clock,
  FileSearch, Brain, Gauge, Shield, Sparkles,
  CheckCircle2, XCircle, ArrowRight,
  BookOpen, Star, Layers3, Search,
  AlertTriangle, FileText, ChevronRight, Lock, Award
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND CONSTANTS & DOCTRINE TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const BRAND_BLUE = "#004DFD";

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Total Commercial Independence",
    desc: "Every LIONXE™ assessment is conducted without external influence. No brand, sponsor, or third party can buy a higher score, alter a finding, or suppress a published verdict. Quality cannot be purchased.",
    color: "#004DFD",
    lightBg: "rgba(0, 77, 253, 0.08)",
  },
  {
    icon: Eye,
    title: "100% Transparent Scoring",
    desc: "Every published audit exposes the complete 16-criterion scoring breakdown point by point. We never issue a verdict without providing exact primary evidence and rationale.",
    color: "#7C3AED",
    lightBg: "rgba(124, 58, 237, 0.08)",
  },
  {
    icon: Ban,
    title: "Zero Paid Review Passes",
    desc: "We strictly reject paid-for praise or pay-to-win certification schemes. Entities enter evaluation based on objective merit, search impact, or public audit request.",
    color: "#EF4444",
    lightBg: "rgba(239, 68, 68, 0.08)",
  },
  {
    icon: Scale,
    title: "Single-Domain Violation Homing",
    desc: "Per LIONXE™ filing laws, every deceptive practice, unverified claim, or compliance breach is filed exclusively in Pillar N. Secondary gates stay unpolluted and objective.",
    color: "#10B981",
    lightBg: "rgba(16, 185, 129, 0.08)",
  },
];

const GATES = [
  {
    letter: "L",
    name: "Long-Term Logic",
    law: "The Post-Flood Collapse Rule",
    desc: "Gate 1 (0–100 Pts): Tests whether the entity is justified by permanent compounding value rather than temporary, artificial, or receding conditions.",
    href: "/long-term-logic",
    color: "#004DFD",
  },
  {
    letter: "IO",
    name: "Internal Optimization",
    law: "The Weakest Link Axiom",
    desc: "Gate 2 (0–100 Pts): Tests structural execution across foundation, output, reach, and upkeep. An entity's value is capped by its worst-executed layer.",
    href: "/internal-optimization",
    color: "#3B82F6",
  },
  {
    letter: "N",
    name: "Non-Negotiable Integrity",
    law: "The Cost-Indifferent Mandate",
    desc: "Gate 3 (0–100 Pts): Exclusive home of all violation findings. Enforces absolute accuracy in claims, compliance with rules, and absence of manipulation.",
    href: "/non-negotiable-integrity",
    color: "#7C3AED",
  },
  {
    letter: "XE",
    name: "eXceptional Distinction",
    law: "The Commodity Threshold Law",
    desc: "Gate 4 (0–100 Pts): Tests defensible irreplaceability. If an entity can be swapped for a generic alternative with no loss to the user, its distinction is zero.",
    href: "/exceptional-distinction",
    color: "#D97706",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN CLIENT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function ReviewStandardClient() {
  const sec2Ref = useRef<HTMLElement>(null);
  const sec2InView = useInView(sec2Ref, { once: true, margin: "-80px" });

  return (
    <main className="bg-white text-slate-900 dark:bg-[#050B1F] dark:text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          §1 HERO — THE UNCOMPROMISING AUDIT STANDARD
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#050B1F] via-[#0A0F1E] to-[#050B1F]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,77,253,0.18),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-[#004DFD]/40 bg-[#004DFD]/10 text-[#5B8CFF]"
          >
            <ShieldCheck className="h-4 w-4" />
            LIONXE™ Independent Audit Standard
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            An Uncompromising Standard.<br />
            <span className="text-[#004DFD]">Zero Pay-To-Win.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-lg font-medium leading-8 text-slate-300"
          >
            LIONXE™ operates as an independent evaluation authority. Every published audit follows a published, 16-criterion rubric scored objectively on a 400-point scale — designed to reward true structural durability and expose digital noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/rubric"
              className="inline-flex items-center gap-2 rounded-xl bg-[#004DFD] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#004DFD]/30 transition-all hover:-translate-y-0.5 hover:bg-[#003edb]"
            >
              Study Full 16-Criterion Rubric
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/audits"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              Browse Published Audits
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §2 FOUR PILLARS OF AUDIT INDEPENDENCE
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec2Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#004DFD]">
              Governance Core
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Principles Governing Every Audit
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              How LIONXE™ guarantees absolute objectivity across every review.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={sec2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.lightBg, color: item.color }}
                  >
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>

                  <div
                    className="mt-6 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §3 THE 4 SEQUENTIAL QUALITY GATES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Four Audit Gates
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Entities must pass each gate sequentially. Total max score: 400 points.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GATES.map((gate) => (
              <div
                key={gate.letter}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]"
                style={{ borderTopColor: gate.color, borderTopWidth: "4px" }}
              >
                <div>
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black text-white"
                    style={{ backgroundColor: gate.color }}
                  >
                    {gate.letter}
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">
                    {gate.name}
                  </h3>
                  <p className="mb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {gate.law}
                  </p>
                  <p className="text-xs leading-5 text-slate-600 dark:text-slate-400 mb-6">
                    {gate.desc}
                  </p>
                </div>

                <Link
                  href={gate.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:underline"
                  style={{ color: gate.color }}
                >
                  Explore Gate Rules
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §4 THE CASCADE FAILURE ENFORCEMENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-20 bg-slate-900 dark:bg-[#040810] sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="mx-auto mb-6 h-14 w-14 text-red-500" />

            <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
              Strict Cascade Failure Enforcement
            </h2>

            <p className="mb-8 text-lg leading-8 text-slate-300">
              Unlike traditional review platforms that calculate soft averages, LIONXE™ enforces non-negotiable failure thresholds. Quality is built on complete foundations.
            </p>

            <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 mb-10">
              <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.06] p-6 backdrop-blur-md">
                <h3 className="mb-2 text-lg font-bold text-red-400">Pillar Failure (&lt;15/100)</h3>
                <p className="text-xs leading-6 text-slate-300">
                  If any single pillar scores below the 15-point baseline threshold, a blocking issue is triggered and the entire audit results in an automatic <strong className="text-white">DISQUALIFIED</strong> verdict.
                </p>
              </div>

              <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.06] p-6 backdrop-blur-md">
                <h3 className="mb-2 text-lg font-bold text-red-400">Zero Criterion Score</h3>
                <p className="text-xs leading-6 text-slate-300">
                  Scoring 0 on any criterion (e.g., active doorway pages or deceptive credential claims) immediately terminates certification regardless of high scores elsewhere.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-xs text-slate-400">
              <strong>Official Certification Grades:</strong> Disqualified (&lt;70 or any gate failed) · Certified (70–84) · Strong Pass (85–92) · Exceptional Distinction Grade (93–100 with 400 pts max).
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §5 TERMINAL CTA LAYER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-24 bg-gradient-to-br from-[#004DFD] to-[#0038cb] sm:px-6 lg:px-8 lg:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">
              Standards Without Compromise.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-blue-100">
              Explore the audits these standards produce — transparent scoring, honest findings, and unambiguous public verdicts.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/audits"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-black text-[#004DFD] transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
              >
                Browse All Published Audits
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/framework"
                className="inline-flex items-center gap-3 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-black text-white transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Study Full Framework
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}