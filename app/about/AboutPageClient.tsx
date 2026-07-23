/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Brain, Gauge, Shield, Sparkles,
  ArrowRight, Quote, Zap, Globe,
  BarChart3, Users, FileSearch, Wrench,
  CheckCircle2, ExternalLink, Layers,
  GraduationCap, MapPin, CheckCircle, Scale,
  Building2, HardHat, Wallet, Youtube, AlertTriangle
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND CONSTANTS & DOCTRINE TOKENS
// ─────────────────────────────────────────────────────────────────────────────

const BRAND_BLUE = "#004DFD";

const PILLARS_BRIEF = [
  { letter: "L",  title: "Long-Term Logic",         law: "Post-Flood Collapse Rule",   icon: Brain,   color: "#004DFD", href: "/long-term-logic"  },
  { letter: "IO", title: "Internal Optimization",   law: "Weakest Link Axiom",          icon: Gauge,   color: "#3B82F6", href: "/internal-optimization" },
  { letter: "N",  title: "Non-Negotiable Integrity",law: "Cost-Indifferent Mandate",   icon: Shield,  color: "#7C3AED", href: "/non-negotiable-integrity"  },
  { letter: "XE", title: "eXceptional Distinction",  law: "Commodity Threshold Law",    icon: Sparkles,color: "#D97706", href: "/exceptional-distinction" },
];
const DIFFERENTIATORS = [
  {
    heading: "Universal Standard, Sector-Agnostic",
    body: "LIONXE™ scoring statements describe entity states that apply universally — to digital platforms, business models, physical infrastructure, or strategic decisions.",
    icon: Scale,
  },
  {
    heading: "Cascade Disqualification Engine",
    body: "Most review systems average out weaknesses. LIONXE™ does not. A single failure at any pillar or a score below threshold terminates the audit immediately with a rejection verdict.",
    icon: Zap,
  },
  {
    heading: "Post-Flood Resilience",
    body: "We systematically reject temporary volatility. If an asset spikes revenue or traffic today on receding conditions but carries a high probability of collapse tomorrow, it fails Gate 1.",
    icon: BarChart3,
  },
  {
    heading: "Cost-Indifferent Integrity",
    body: "Ethical compliance is non-negotiable. Pillar N is the exclusive home for all deception, violation, and unverified claim findings. Widespread industry misuse is never an excuse.",
    icon: CheckCircle2,
  },
];

const SECTORS = [
  { icon: Globe,      label: "Websites & Platforms", desc: "Primary commercial focus — evaluating SEO architecture, technical depth, and topical authority." },
  { icon: Wrench,     label: "Software & SaaS Tools",desc: "Scored on functional integrity, performance standards, data security, and true usability." },
  { icon: Building2,  label: "Organizations & Models",desc: "Assessing business sustainment, diversified revenue logic, and transparent governance." },
  { icon: Youtube,    label: "Content & Media Systems",desc: "Auditing original research, documented expertise, and value-first editorial workflows." },
  { icon: HardHat,    label: "Physical Projects",     desc: "Applying the four gates to real-world infrastructure, construction, and physical assets." },
  { icon: Wallet,     label: "Strategic Decisions",   desc: "A decision framework for evaluating investments, career transitions, and family finance." },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPageClient() {
  const originRef    = useRef<HTMLElement>(null);
  const sufianRef    = useRef<HTMLElement>(null);
  const isOriginView = useInView(originRef,  { once: true, margin: "-100px" });
  const isSufianView = useInView(sufianRef,  { once: true, margin: "-100px" });

  return (
    <main className="relative bg-white text-slate-900 dark:bg-[#050B1F] dark:text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO: THE UNIVERSAL STANDARD STATEMENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-32 lg:pb-28 
        bg-gradient-to-br from-slate-50 via-white to-blue-50/40
        dark:from-[#070D1B] dark:via-[#050B1F] dark:to-[#0A0F1E]">

        {/* Background LIONXE Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-8 select-none"
        >
          <span className="text-[22vw] font-black leading-none tracking-tighter text-slate-100 dark:text-white/[0.025]">
            LIONXE
          </span>
        </div>

        {/* Grid Texture */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
          style={{
            backgroundImage:"linear-gradient(to right,rgba(0,0,0,0.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,0.08) 1px,transparent 1px)",
            backgroundSize:"56px 56px",
          }} 
        />

        {/* Ambient Glow */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#004DFD]/5 blur-[120px] dark:bg-[#004DFD]/12" 
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2
                text-sm font-semibold backdrop-blur-md
                border-[#004DFD]/25 bg-[#004DFD]/[0.06] text-[#004DFD]
                dark:border-[#004DFD]/35 dark:bg-[#004DFD]/10 dark:text-[#8EA7FF]"
            >
              <Scale className="h-4 w-4" />
              Universal Quality Evaluation Standard
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              The standard that{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-[#004DFD]">actually</span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 12" fill="none" preserveAspectRatio="none"
                >
                  <path d="M2 8 Q55 2 110 8 Q165 14 218 8"
                    stroke="#004DFD" strokeWidth="2.5" strokeLinecap="round"
                    fill="none" opacity="0.6" />
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
              LIONXE™ is a universal framework designed to evaluate and audit any entity — 
              from business models and strategic decisions to digital platforms and software systems. 
              It measures whether an asset is built to last, executed to completion, operated with absolute integrity, and distinguished from its alternatives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/framework"
                className="inline-flex items-center gap-2 rounded-xl bg-[#004DFD] px-7 py-4
                  text-base font-bold text-white shadow-lg shadow-[#004DFD]/30
                  transition-all hover:-translate-y-0.5 hover:bg-[#003edb]">
                Explore the Framework
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/audits"
                className="inline-flex items-center gap-2 rounded-xl border px-7 py-4
                  text-base font-bold transition-all hover:-translate-y-0.5
                  border-slate-300 text-slate-700 hover:border-[#004DFD]/40
                  dark:border-white/15 dark:text-white dark:hover:border-[#004DFD]/50">
                Browse Published Audits
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — THE ORIGIN: TOP-DOWN SYSTEMIC NECESSITY
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={originRef}
        className="relative px-4 py-24 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Left: Text Content (Top-Down Narrative) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isOriginView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#004DFD] dark:text-[#8EA7FF]">
                The Origin
              </p>
              <h2 className="mb-7 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl">
                Created to solve a structural gap in{" "}
                <span className="text-[#004DFD]">systemic evaluation.</span>
              </h2>

              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  Across business strategy, engineering, and digital growth, systems routinely fail not from a lack of effort, but from missing, unverified foundations. Organizations and creators frequently optimize for immediate, surface-level metrics while carrying invisible structural vulnerabilities.
                </p>
                <p>
                  LIONXE™ was created by <strong className="font-semibold text-slate-900 dark:text-white">Sufian Mustafa</strong> to eliminate this gap. Having analyzed how projects across various domains either compounded long-term value or collapsed under environmental shifts, a universal pattern emerged: systems built on temporary, concentrated, or manipulative foundations inevitably break, while those anchored in logical, complete, and honest architectures outlast.
                </p>
                <p>
                  LIONXE™ codified these observations into a rigid **Universal Audit Standard** — four sequential quality gates that govern structural durability. While the standard applies universally to any physical project, organization, or strategic choice, its primary commercial deployment focuses on **auditing websites, SaaS tools, AI systems, and digital content ecosystems**.
                </p>
              </div>
            </motion.div>

            {/* Right: Architectural Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isOriginView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                  alt="High-level engineering systems and architectural audit workspace"
                  className="w-full object-cover"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-xl dark:border-white/10 dark:bg-[#0A0F1E]">
                <p className="text-3xl font-black text-[#004DFD]">400</p>
                <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Maximum Points.<br />4 Non-Negotiable Gates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — WHAT LIONXE ACTUALLY DOES (THE PIPELINE)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-24 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Three Operational Passages
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              How LIONXE™ evaluates entities from model altitude down to execution detail.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              {
                number: "01",
                heading: "Evaluates Strategy",
                body: "Tests model-level durability, directional clarity, and post-flood risk at Gate 1 (L) before reviewing any execution mechanics.",
              },
              {
                number: "02",
                heading: "Audits Execution",
                body: "Examines technical foundations, output substance, reach systems, claim accuracy, and operational upkeep at Gates 2 & 3 (IO & N).",
              },
              {
                number: "03",
                heading: "Certifies or Disqualifies",
                body: "Issues LIONXE™ Certification for verified architectures, or triggers immediate disqualification if a single blocking issue or 0-score occurs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group px-8 py-10 md:px-10 md:py-12"
              >
                <p className="mb-4 text-6xl font-black leading-none text-slate-200 transition-colors duration-300
                  group-hover:text-[#004DFD]/30 dark:text-white/[0.05]">
                  {item.number}
                </p>
                <h3 className="mb-4 text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
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
          SECTION 4 — BOLD GOVERNING LAW STATEMENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#004DFD] px-4 py-24 sm:px-6 lg:px-8">
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
              "Any advantage built on a receding flood collapses when the water goes. If the trajectory trends toward zero after the initial spike, the architecture is a structural failure."
            </p>
            <p className="text-lg font-medium opacity-80">
              — The Post-Flood Collapse Rule, LIONXE™ Framework Pillar L
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — MEET THE ARCHITECT (SUFIAN MUSTAFA)
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sufianRef}
        className="relative px-4 py-24 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[380px_1fr] lg:gap-20">

            {/* Left: Founder Headshot */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isSufianView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#004DFD]/20 bg-gradient-to-br from-slate-100 to-blue-50/60
                dark:border-[#004DFD]/30 dark:from-slate-900 dark:to-slate-800
                aspect-[4/5] flex flex-col items-center justify-center p-4 shadow-2xl">

                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
                  <Image
                    src="/sufian-mustafa.png"
                    alt="Sufian Mustafa — Systems Architect & Creator of LIONXE™"
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>

                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#004DFD]/10 pointer-events-none" />
              </div>

              {/* Founder Verified Overlay */}
              <div className="absolute -right-2 -bottom-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#0A0F1E]/95">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#004DFD]" />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wider text-[#004DFD]">Systems Architect</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">LIONXE Governance Core</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio & Ecosystem Context */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isSufianView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#004DFD] dark:text-[#8EA7FF]">
                The Founder
              </p>
              <h2 className="mb-3 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
                Sufian Mustafa
              </h2>
              <p className="mb-6 text-sm font-bold uppercase tracking-wide text-[#004DFD] dark:text-[#5B8CFF]">
                Systems Architect · AI Strategist · Technical SEO Expert
              </p>

              <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                <p>
                  Sufian Mustafa is a Systems Architect, AI Strategist, and Technical SEO Expert based in Pakistan. He is the author and creator of the LIONXE™ evaluation standard and the founder of <strong className="font-semibold text-slate-900 dark:text-white">Do It With AI Tools™</strong>.
                </p>
                <p>
                  His background spans full-stack web engineering (Next.js, structured data, edge architectures) and search visibility systems. Recognizing that standard agency audits relied on subjective opinions or surface-level automated checklists, he spent years codifying an objective, engineering-grade standard for evaluating digital work.
                </p>
                <p>
                  LIONXE™ acts as his formal governance framework to oversee live digital properties — ensuring every deployed asset discards vanity metrics and operates strictly under permanent, compounding value conditions.
                </p>
              </div>

              {/* Academic & Geographic Credentials */}
              <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-100 pt-6 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-[#004DFD]" /> Master of Computer Science (MCS) Degree
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#004DFD]" /> Islamabad / Rawalpindi, Pakistan
                </span>
              </div>

              {/* Ecosystem Platform Links */}
              <div className="mt-8 flex flex-wrap gap-3">
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
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2
                      text-xs font-semibold transition-all hover:border-[#004DFD]/40
                      border-slate-200 text-slate-700 hover:text-[#004DFD]
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
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#004DFD] dark:text-[#8EA7FF]">
              The Difference
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Why LIONXE™ is not like anything else
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
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full opacity-[0.04] bg-[#004DFD] transition-all duration-300 group-hover:opacity-[0.08]" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#004DFD]/10">
                    <Icon className="h-6 w-6 text-[#004DFD]" strokeWidth={2} />
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
          SECTION 7 — THE FOUR PILLARS (UNIVERSAL GATES)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-24 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Four Quality Gates
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Scored 0–25 points across 4 domains per pillar (100 pts max per gate).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS_BRIEF.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.letter}
                  href={pillar.href}
                  className="group relative overflow-hidden rounded-2xl border p-6 text-left
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                    border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div
                    className="pointer-events-none absolute bottom-2 right-3 select-none
                      text-[4.5rem] font-black leading-none opacity-[0.07]
                      dark:opacity-[0.09] transition-all duration-300 group-hover:opacity-[0.15]"
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
                  <p className="relative mt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {pillar.law}
                  </p>

                  <div className="relative mt-4 flex items-center gap-1 text-xs font-bold"
                    style={{ color: pillar.color }}>
                    Explore Gate
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — SECTOR LENSES (UNIVERSAL APPLICATION)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-24 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              One Standard, Every Sector
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Layer 3 Sector Lenses adapt the universal entity scoring statements to specific arenas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, i) => {
              const Icon = sector.icon;
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
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#004DFD]/10">
                    <Icon className="h-6 w-6 text-[#004DFD]" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    {sector.label}
                  </h3>
                  <p className="text-xs leading-6 text-slate-600 dark:text-slate-400">
                    {sector.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — TERMINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-28 bg-[#030812] sm:px-6 lg:px-8">
        <div aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#004DFD]/10 blur-[100px]" />

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
              Study the 16 scoring criteria or examine published independent assessments.
            </p>

            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link href="/rubric"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl
                  bg-[#004DFD] px-8 py-4 text-base font-bold text-white
                  shadow-lg shadow-[#004DFD]/30 transition-all hover:-translate-y-0.5
                  hover:bg-[#003edb] sm:w-auto">
                View Full Rubric
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/audits"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl
                  border border-white/15 px-8 py-4 text-base font-bold text-white
                  backdrop-blur-md transition-all hover:-translate-y-0.5
                  hover:border-white/30 hover:bg-white/5 sm:w-auto">
                Browse Published Audits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}