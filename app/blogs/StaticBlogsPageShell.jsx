/**
 * StaticReviewsPageShell.jsx — LIONXE Reviews Page Shell
 *
 * The outer wrapper for the reviews listing page.
 * Matches the LIONXE theme: #004DFD primary, #050B1F dark bg,
 * grid texture, professional audit-authority aesthetic.
 */

"use client";

import React from "react";
import { Shield, Layers, Radio } from "lucide-react";

export default function StaticReviewsPageShell({ initialServerData, children }) {
  const currentDisplayCount = initialServerData?.totalCount || 0;

  return (
    <div
      className="relative min-h-screen
        bg-slate-50 dark:bg-[#050B1F]"
    >
      {/* ── Background grid texture (matching homepage) ──────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
          bg-[size:48px_48px]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
                   linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
      />

      {/* ── Top glow ─────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2
          h-[400px] w-[700px] rounded-full
          bg-[#004DFD]/[0.04] blur-[120px]
          dark:bg-[#004DFD]/[0.10]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">

        {/* ═══════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-14 text-center sm:mb-18 lg:mb-20">

          {/* Eyebrow badge */}
          <div
            className="mb-5 inline-flex items-center rounded-full px-4 py-2
              text-sm font-semibold backdrop-blur-md
              border border-[#004DFD]/20 bg-[#004DFD]/[0.05] text-[#004DFD]
              dark:border-[#004DFD]/30 dark:bg-[#004DFD]/10 dark:text-[#7CA0FF]"
          >
            <Shield className="mr-2 h-4 w-4" />
            LIONXE® Evaluation Registry
          </div>

          {/* Main headline */}
          <h1
            className="text-3xl font-extrabold tracking-tight leading-tight
              text-slate-900 dark:text-white
              sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="relative inline-block mr-2 sm:mr-3">
              LIONXE®
              <span
                className="absolute bottom-1 left-0 h-1 sm:h-1.5 w-full rounded-full
                  bg-[#004DFD] opacity-70"
              />
            </span>
            <br className="block sm:hidden" />
            <span className="text-[#004DFD]">Architectural Audits</span>
          </h1>

          {/* Sub-description */}
          <p
            className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed
              text-slate-600 dark:text-slate-400
              sm:text-base md:text-lg"
          >
            Explore forensic platform evaluations, structural scores, and
            technical blueprints. Every review rigorously breaks down asset
            infrastructures across our four core pillars:{" "}
            <strong className="text-slate-900 dark:text-white">Logic</strong>,{" "}
            <strong className="text-slate-900 dark:text-white">Optimization</strong>,{" "}
            <strong className="text-slate-900 dark:text-white">Integrity</strong>,
            and{" "}
            <strong className="text-slate-900 dark:text-white">Distinction</strong>.
          </p>

          {/* Metrics panel */}
          <div
            className="mt-10 inline-flex flex-wrap items-center justify-center
              gap-8 sm:gap-12"
          >
            {/* Stat: Assets Evaluated */}
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-black text-[#004DFD] sm:text-4xl">
                {currentDisplayCount}
              </div>
              <div
                className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em]
                  text-slate-500 dark:text-slate-400"
              >
                Assets Evaluated
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-white/10" />

            {/* Stat: 4 Pillars */}
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                <Layers className="inline h-7 w-7 mr-1 text-[#004DFD] dark:text-[#7CA0FF]" />
                4
              </div>
              <div
                className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em]
                  text-slate-500 dark:text-slate-400"
              >
                Analysis Pillars
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-white/10" />

            {/* Stat: Live */}
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 sm:text-4xl">
                <Radio className="inline h-5 w-5 mr-1 animate-pulse" />
                Live
              </div>
              <div
                className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em]
                  text-slate-500 dark:text-slate-400"
              >
                Audit Registry
              </div>
            </div>
          </div>
        </section>

        {/* ── Children (filters + review grid) ───────────────────── */}
        {children}
      </div>
    </div>
  );
}