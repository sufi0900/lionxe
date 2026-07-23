/* eslint-disable react/no-unescaped-entities */
"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/PillarPageClient.tsx
// The ONE reusable client component for all four LIONXE™ pillar pages.
// Every pillar's page.tsx renders <PillarPageClient content={L_CONTENT} />
// (or IO_CONTENT / N_CONTENT / XE_CONTENT) — nothing about layout, styling,
// or section structure is duplicated across the four routes.
//
// To add a fifth pillar in the future: add one object to content/pillars.tsx
// matching the PillarContent interface, create one route folder with a
// three-line page.tsx (see app/long-term-logic/page.tsx for the pattern),
// and this component renders it automatically. No changes needed here.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2, XCircle, AlertTriangle, Lightbulb,
  ArrowRight, Gauge, Flag, type LucideIcon,
} from "lucide-react";
import type { PillarContent } from "@/content/pillars";

interface Props {
  content: PillarContent;
}

export default function PillarPageClient({ content: c }: Props) {
  const genesisRef = useRef<HTMLElement>(null);
  const caseRef = useRef<HTMLElement>(null);
  const genesisInView = useInView(genesisRef, { once: true, margin: "-100px" });
  const caseInView = useInView(caseRef, { once: true, margin: "-100px" });

  const Icon = c.icon as unknown as LucideIcon;

  return (
    <main className="relative bg-white dark:bg-[#050B1F]">

      {/* ═══════════════ SECTION 1 — HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white px-4 py-24 dark:from-[#0A0F1E] dark:to-[#050B1F] sm:px-6 lg:px-8 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-widest border-[#004DFD]/30 bg-[#004DFD]/[0.06] text-[#004DFD] dark:border-[#004DFD]/40 dark:bg-[#004DFD]/10 dark:text-[#7CA0FF]">
            <Icon className="h-5 w-5" />
            LIONXE™ — Gate {c.gateNumber} of 4
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="pillar-hero-title mb-6 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            <span className="block text-[#004DFD]">{c.code}</span>
            {c.name}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="pillar-hero-tagline mb-8 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl">
            {c.tagline}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-4xl">
            {c.heroParagraphs.map((p, i) => (
              <p key={i} className={`text-lg leading-8 text-slate-700 dark:text-slate-300 ${i > 0 ? "mt-6" : "mb-6"}`}>
                {p}
              </p>
            ))}

            {/* Scoring context badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                <Gauge className="h-4 w-4 text-[#004DFD]" />
                Scored 0–100 points · 4 criteria × 25
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Minimum 15 to clear this pillar
              </div>
              {c.isHardGate && (
                <div className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/80 px-5 py-3 text-sm font-semibold text-red-700 dark:border-red-500/20 dark:bg-red-500/[0.06] dark:text-red-400">
                  <XCircle className="h-4 w-4" />
                  Failure terminates the entire audit
                </div>
              )}
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
              <Lightbulb className="h-5 w-5 text-[#004DFD]" />
              <span>
                Engineered by{" "}
                <strong className="font-bold text-slate-900 dark:text-white">Sufian Mustafa</strong>{" "}
                — Digital Growth &amp; AI Search Systems Architect and creator of the LIONXE™ framework
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SECTION 2 — GENESIS + GOVERNING LAW PANEL ═══════════════ */}
      <section ref={genesisRef} className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-white dark:bg-[#070D1B]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={genesisInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
              <h2 className="mb-6 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
                {c.genesis.heading}
              </h2>
              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                {c.genesis.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={genesisInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#004DFD]/5 via-white to-slate-50 p-10 shadow-2xl dark:border-white/10 dark:from-[#004DFD]/10 dark:via-[#0A0F1E] dark:to-[#070D1B] sm:p-12">
                <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#004DFD]/10 blur-3xl" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#004DFD]/10 dark:bg-[#004DFD]/15">
                    <Icon className="h-10 w-10 text-[#004DFD]" strokeWidth={1.75} />
                  </div>
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#004DFD]">Governing Law</p>
                  <h3 className="mb-4 text-2xl font-extrabold text-slate-900 dark:text-white">{c.governingLaw}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{c.governingLawSummary}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 3 — THE FOUR CRITERIA ═══════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Four Criteria
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Each scored 0–25 · together they form the {c.code} pillar's 100-point total
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {c.criteria.map((crit, i) => {
              const CritIcon = crit.icon as unknown as LucideIcon;
              return (
                <motion.div key={crit.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#004DFD]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#004DFD]/15">
                      <CritIcon className="h-6 w-6 text-[#004DFD]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#004DFD]">{crit.id}</p>
                      <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white">{crit.name}</h3>
                    </div>
                  </div>
                  <p className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm italic leading-6 text-slate-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-400">
                    "{crit.statement}"
                  </p>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{crit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 4 — GOVERNING PRINCIPLES ═══════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#004DFD]">
              Governing Law: {c.governingLaw}
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Principles of the {c.code} Pillar
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Three rules that govern how this pillar is enforced, without exception.
            </p>
          </div>

          <div className="space-y-10">
            {c.principles.map((principle, i) => (
              <motion.div key={principle.title} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#004DFD] text-3xl font-black text-white shadow-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{principle.title}</h3>
                  <p className="leading-7 text-slate-600 dark:text-slate-400">{principle.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 5 — CASE COMPARISON ═══════════════ */}
      <section ref={caseRef} className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Case Comparison
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Two illustrative patterns — one that fails this gate, one that clears it
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={caseInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-red-200 bg-red-50/50 p-8 dark:border-red-500/20 dark:bg-red-500/[0.04]">
              <div className="mb-4 flex items-center gap-3">
                <XCircle className="h-8 w-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">{c.caseComparison.failLabel}</h3>
              </div>
              <p className="leading-7 text-slate-700 dark:text-slate-400">{c.caseComparison.failBody}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={caseInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 dark:border-emerald-500/20 dark:bg-emerald-500/[0.04]">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{c.caseComparison.passLabel}</h3>
              </div>
              <p className="leading-7 text-slate-700 dark:text-slate-400">{c.caseComparison.passBody}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 6 — PASSING MATRIX ═══════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Passing Matrix
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">How the Standard Verifies This Pillar</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {c.matrixItems.map((item, i) => {
              const MIcon = item.icon as unknown as LucideIcon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#004DFD]/10">
                    <MIcon className="h-7 w-7 text-[#004DFD]" strokeWidth={2} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 7 — SELF-AUDIT PROTOCOL ═══════════════ */}
      <section className="relative px-4 py-20 bg-gradient-to-br from-[#004DFD] to-[#0066FF] sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Flag className="mx-auto mb-6 h-12 w-12" />
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl">The Self-Audit Protocol</h2>
            <p className="mb-12 text-lg text-blue-100">Test yourself against this gate before submitting for formal evaluation</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-6 text-left">
            {c.selfAuditQuestions.map((q, i) => (
              <div key={i} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg font-bold">{i + 1}</div>
                  <p className="leading-7">{q}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-white/30 bg-white/10 p-8 backdrop-blur-md">
            <div className="rounded-xl border border-white/20 bg-white/[0.08] p-5">
              <p className="text-sm leading-6 text-blue-100">
                <strong className="font-bold text-white">Universal Application: </strong>
                {c.universalApplicationNote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SECTION 8 — NEXT PILLAR NAV ═══════════════ */}
      <section className="relative px-4 py-16 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row">
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                {c.gateNumber < 4 ? "Next Pillar" : "Continue Reading"}
              </p>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{c.nextPillar.name}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{c.nextPillar.teaser}</p>
            </div>
            <a href={`/${c.nextPillar.slug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#004DFD] px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5">
              Continue <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}