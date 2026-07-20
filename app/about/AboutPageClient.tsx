/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */


"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain, Gauge, Shield, Sparkles,
  ArrowRight, Quote, Zap, Globe,
  BarChart3, Users, FileSearch, Wrench,
  CheckCircle2, ExternalLink, Layers,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const PILLARS_BRIEF = [
  { letter: "L",  title: "Logic & Longevity",       icon: Brain,   color: "#014FFD", href: "/l"  },
  { letter: "IO", title: "Internal Optimization",    icon: Gauge,   color: "#3B82F6", href: "/io" },
  { letter: "N",  title: "Non-Negotiable Integrity", icon: Shield,  color: "#7C3AED", href: "/n"  },
  { letter: "XE", title: "eXceptional Distinction",   icon: Sparkles,color: "#D97706", href: "/xe" },
];

const DIFFERENTIATORS = [
  {
    heading: "Framework-First, Not Opinion-First",
    body: "LIONXE doesn't publish gut-feel reviews. Every evaluation runs through a structured, repeatable four-pillar framework that removes subjectivity from quality measurement.",
    icon: Layers,
  },
  {
    heading: "One Failure Terminates the Entire Audit",
    body: "Most review systems average out weaknesses. LIONXE doesn't. If a single pillar fails, the project is rejected — because compounding value demands a complete foundation, not a partial one.",
    icon: Zap,
  },
  {
    heading: "Long-Term by Design",
    body: "We systematically reject short-term optimization. If a strategy promises flood revenue today but carries a high probability of collapse later, it fails immediately — regardless of current performance.",
    icon: BarChart3,
  },
  {
    heading: "Absolute Ethical Clarity",
    body: "We enforce zero tolerance for deception, manipulation, or shortcuts. No hidden tricks. No grey areas. The N pillar is non-negotiable — any integrity breach collapses the entire evaluation.",
    icon: CheckCircle2,
  },
];

const AUDIENCE = [
  { icon: FileSearch, label: "Content Creators", desc: "Writers, bloggers, and publishers who want to build content that lasts — not content that chases algorithms." },
  { icon: Globe,      label: "Digital Marketers", desc: "Strategists who need an objective lens to evaluate campaigns, funnels, and positioning against a real quality standard." },
  { icon: Wrench,     label: "Product Builders",  desc: "Developers and product teams building tools, SaaS platforms, and apps that aim for long-term adoption." },
  { icon: Users,      label: "Agencies & Teams",   desc: "Organizations that want to demonstrate quality to clients through objective, third-party framework validation." },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const LionxeAboutPage = () => {
  const originRef    = useRef<HTMLElement>(null);
  const sufianRef    = useRef<HTMLElement>(null);
  const isOriginView = useInView(originRef,  { once: true, margin: "-100px" });
  const isSufianView = useInView(sufianRef,  { once: true, margin: "-100px" });

  return (
    <main className="relative bg-white dark:bg-[#050B1F]">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Full-width statement section with oversized letter and 
          background gradient. Clean, editorial, commanding.
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-40
        bg-gradient-to-br from-slate-50 via-white to-blue-50/40
        dark:from-[#070D1B] dark:via-[#050B1F] dark:to-[#0A0F1E]">

        {/* Background LIONXE watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-8 select-none"
        >
          <span className="text-[22vw] font-black leading-none tracking-tighter
            text-slate-100 dark:text-white/[0.025]">
            LIONXE
          </span>
        </div>

        {/* Grid texture */}
        <div aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
          style={{
            backgroundImage:"linear-gradient(to right,rgba(0,0,0,0.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,0.08) 1px,transparent 1px)",
            backgroundSize:"56px 56px",
          }} />

        {/* Blue glow */}
        <div aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full
            bg-[#014FFD]/5 blur-[120px] dark:bg-[#014FFD]/12" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2
                text-sm font-semibold backdrop-blur-md
                border-[#014FFD]/25 bg-[#014FFD]/[0.06] text-[#014FFD]
                dark:border-[#014FFD]/35 dark:bg-[#014FFD]/10 dark:text-[#8EA7FF]"
            >
              <Globe className="h-4 w-4" />
              About the Standard
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-5xl font-black leading-[1.05] tracking-tight
                text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              The standard that{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-[#014FFD]">actually</span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 12" fill="none" preserveAspectRatio="none"
                >
                  <path d="M2 8 Q55 2 110 8 Q165 14 218 8"
                    stroke="#014FFD" strokeWidth="2.5" strokeLinecap="round"
                    fill="none" opacity="0.5" />
                </svg>
              </span>{" "}
              means something.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-xl font-medium leading-8 text-slate-600 dark:text-slate-300 max-w-2xl"
            >
              LIONXE is an independent digital quality framework. It doesn't
              award badges for effort, average scores across weaknesses, or bend
              criteria for convenience. It measures, audits, and certifies digital
              assets against one uncompromising standard — or rejects them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/framework"
                className="inline-flex items-center gap-2 rounded-xl bg-[#014FFD] px-7 py-4
                  text-base font-bold text-white shadow-lg shadow-[#014FFD]/30
                  transition-all hover:-translate-y-0.5 hover:bg-[#003FE0]">
                Explore the Framework
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/audits"
                className="inline-flex items-center gap-2 rounded-xl border px-7 py-4
                  text-base font-bold transition-all hover:-translate-y-0.5
                  border-slate-300 text-slate-700 hover:border-[#014FFD]/40
                  dark:border-white/15 dark:text-white dark:hover:border-[#014FFD]/50">
                Browse Audits
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — ORIGIN STORY
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={originRef}
        className="relative px-4 py-24 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isOriginView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#014FFD] dark:text-[#8EA7FF]">
                The Origin
              </p>
              <h2 className="mb-7 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl">
                Built because the digital world lacked a{" "}
                <span className="text-[#014FFD]">real measurement standard.</span>
              </h2>

              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  Every tool claimed to be industry-leading. Every article promised
                  expert insight. Every strategy was positioned as best-in-class. But
                  no one was checking. No consistent framework existed to distinguish
                  work built to last from work engineered to look good temporarily.
                </p>
                <p>
                  LIONXE was engineered out of this gap. Its founder,{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Sufian Mustafa
                  </strong>
                  , spent years observing how digital assets — articles, tools,
                  websites, strategies — either compounded value or silently decayed.
                  The pattern was consistent: assets built on volatile foundations
                  always collapsed. Assets built on logical, optimized, and ethical
                  foundations always outlasted.
                </p>
                <p>
                  LIONXE formalized that pattern into an{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    auditing framework
                  </strong>{" "}
                  — four pillars that together define what quality actually means in
                  digital work. Not as an opinion. As a standard.
                </p>
              </div>
            </motion.div>

            {/* Right: image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isOriginView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                  alt="The digital landscape that inspired the LIONXE quality standard"
                  className="w-full object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-xl dark:border-white/10 dark:bg-[#0A0F1E]">
                <p className="text-3xl font-black text-[#014FFD]">4</p>
                <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Pillars. One<br />uncompromising standard.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — WHAT LIONXE ACTUALLY DOES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-24 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              What LIONXE Actually Does
            </h2>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              {
                number: "01",
                heading: "Measures",
                body: "Runs every digital asset through the L-IO-N-XE audit pipeline. Each pillar is scored independently on a 0–25 scale.",
              },
              {
                number: "02",
                heading: "Audits",
                body: "Examines the full structural timeline — foundation, present state, future potential — across articles, tools, websites, UX, SEO, and strategy.",
              },
              {
                number: "03",
                heading: "Certifies or Rejects",
                body: "Either issues a LIONXE Verified status for assets that pass all four gates, or terminates the audit with a clear rejection reason.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group px-10 py-12 first:pt-0 last:pb-0 md:first:pt-12 md:last:pb-12"
              >
                <p className="mb-4 text-6xl font-black leading-none text-slate-100 transition-colors duration-300
                  group-hover:text-[#014FFD]/20 dark:text-white/[0.05]">
                  {item.number}
                </p>
                <h3 className="mb-4 text-3xl font-black text-slate-900 dark:text-white">
                  {item.heading}
                </h3>
                <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — BOLD STATEMENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#014FFD] px-4 py-24 sm:px-6 lg:px-8">
        <div aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.4) 1px,transparent 1px)",
            backgroundSize:"32px 32px",
          }} />
        <div aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-white/5 blur-[80px]" />

        <div className="relative mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Quote className="mx-auto mb-8 h-12 w-12 opacity-50" />
            <p className="mb-8 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              "If it floods revenue today but has a high probability of zero
              tomorrow — it fails the L gate immediately."
            </p>
            <p className="text-lg font-medium opacity-75">
              — The Logic & Longevity Standard, LIONXE Framework
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — MEET SUFIAN MUSTAFA
          Ecosystem deployment alignment rule implemented.
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sufianRef}
        className="relative px-4 py-24 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[420px_1fr] lg:gap-20">

            {/* Left: image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isSufianView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#014FFD]/20 bg-gradient-to-br from-slate-100 to-blue-50/60
                dark:border-[#014FFD]/25 dark:from-white/[0.04] dark:to-[#014FFD]/[0.04]
                aspect-[4/5] flex items-center justify-center shadow-2xl">

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-3xl bg-[#014FFD]/10 text-5xl font-black text-[#014FFD]">
                    SM
                  </div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">
                    Replace with Sufian's photo
                  </p>
                </div>

                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#014FFD]/8" />
              </div>

              {/* Professional Architecture Designation */}
              <div className="absolute -right-4 bottom-8 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-xl dark:border-white/10 dark:bg-[#0A0F1E]">
                <p className="text-xs font-black uppercase tracking-wider text-[#014FFD]">Architect</p>
                <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
                  LIONXE Core Governance
                </p>
              </div>
            </motion.div>

            {/* Right: bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isSufianView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#014FFD] dark:text-[#8EA7FF]">
                The Founder
              </p>
              <h2 className="mb-7 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
                Sufian Mustafa
              </h2>

              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  Sufian Mustafa is a multi-disciplinary Digital Ecosystem Architect and the founder of 
                  LIONXE™. His work focuses on engineering deep-level web quality structures built around 
                  systemic data optimization, technical scalability, and absolute framework integrity.
                </p>
                <p>
                  As an SEO strategist with deep roots in technical web architectures, he observed a consistent 
                  failure pattern across the modern product space: complex assets engineered for short-term visibility, 
                  but lacking a structural engine required to resist core algorithmic updates. 
                </p>
                <p>
                  LIONXE™ acts as his formal governance framework to solve this vulnerability. The standard functions 
                  as the blueprint overseeing live property deployments—such as the digital hub{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">Do It With AI Tools™</strong>
                  —ensuring all systems discard volatile metrics and operate entirely under unshakeable, 
                  long-term performance conditions.
                </p>
              </div>

              {/* Platforms */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { label: "lionxe.com", href: "https://lionxe.com" },
                  { label: "doitwithai.tools", href: "https://doitwithai.tools" },
                  { label: "sufianmustafa.com", href: "https://sufianmustafa.com" },
                ].map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5
                      text-sm font-semibold transition-all hover:border-[#014FFD]/40
                      border-slate-200 text-slate-700 hover:text-[#014FFD]
                      dark:border-white/15 dark:text-slate-300 dark:hover:text-[#8EA7FF]"
                  >
                    {p.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — WHAT MAKES LIONXE DIFFERENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-24 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#014FFD] dark:text-[#8EA7FF]">
              The Difference
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Why LIONXE is not like anything else
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {DIFFERENTIATORS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border bg-white p-8
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                    border-slate-200 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full opacity-[0.04] bg-[#014FFD] transition-all duration-300 group-hover:opacity-[0.08]" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#014FFD]/10">
                    <Icon className="h-6 w-6 text-[#014FFD]" strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                    {item.heading}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — THE FOUR PILLARS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-24 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Four Pillars of the Standard
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Each has a dedicated deep-dive page.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
            {PILLARS_BRIEF.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.a
                  key={pillar.letter}
                  href={pillar.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border p-6 text-left
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                    border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div
                    className="pointer-events-none absolute bottom-2 right-3 select-none
                      text-[4.5rem] font-black leading-none opacity-[0.07]
                      dark:opacity-[0.09] transition-all duration-300 group-hover:opacity-[0.12]"
                    style={{ color: pillar.color }}
                  >
                    {pillar.letter}
                  </div>

                  <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${pillar.color}15` }}>
                    <Icon className="h-6 w-6" style={{ color: pillar.color }} strokeWidth={2} />
                  </div>

                  <p className="relative text-base font-bold text-slate-900 dark:text-white leading-tight">
                    {pillar.title}
                  </p>

                  <div className="relative mt-4 flex items-center gap-1 text-xs font-bold"
                    style={{ color: pillar.color }}>
                    Read Pillar
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — WHO IT'S FOR
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-24 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Who LIONXE Is For
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Anyone building digital assets that need to last.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCE.map((person, i) => {
              const Icon = person.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white p-7
                    dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#014FFD]/10">
                    <Icon className="h-6 w-6 text-[#014FFD]" strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                    {person.label}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {person.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-28 bg-[#030812] sm:px-6 lg:px-8">
        <div aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#014FFD]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Ready to see the standard in action?
            </h2>
            <p className="mb-12 text-lg font-medium text-slate-400">
              Explore published LIONXE audits or study the framework in depth.
            </p>

            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a href="/audits"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl
                  bg-[#014FFD] px-8 py-4 text-base font-bold text-white
                  shadow-lg shadow-[#014FFD]/30 transition-all hover:-translate-y-0.5
                  hover:bg-[#003FE0] sm:w-auto">
                Browse All Audits
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/framework"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl
                  border border-white/15 px-8 py-4 text-base font-bold text-white
                  backdrop-blur-md transition-all hover:-translate-y-0.5
                  hover:border-white/30 hover:bg-white/5 sm:w-auto">
                Study the Framework
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LionxeAboutPage;