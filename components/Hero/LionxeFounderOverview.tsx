"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Cpu,
  Code2,
  GraduationCap,
  MapPin,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Award,
  Globe2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const BRAND = "#004DFD";
const BRAND_LT = "#5B8CFF";

// ─────────────────────────────────────────────────────────────────────────────
// EXPERTISE PILLARS DATA
// ─────────────────────────────────────────────────────────────────────────────
const EXPERTISE_AREAS = [
  {
    title: "Ecosystem Architecture",
    category: "Founder & Strategist",
    icon: Building2,
    color: "#004DFD",
    bgLight: "rgba(0, 77, 253, 0.08)",
    description:
      "Engineers resilient, multi-platform content ecosystems and sustainable digital business growth models.",
  },
  {
    title: "Human-AI Integration",
    category: "AI SEO Strategist",
    icon: Cpu,
    color: "#7C3AED",
    bgLight: "rgba(124, 58, 237, 0.08)",
    description:
      "Pioneers Generative Engine Optimization (GEO) and human-in-the-loop AI content workflow pipelines.",
  },
  {
    title: "Technical SEO & Code",
    category: "Systems Engineering",
    icon: Code2,
    color: "#059669",
    bgLight: "rgba(5, 150, 105, 0.08)",
    description:
      "Full-stack Next.js optimization, high-speed SSR architecture, and comprehensive Schema.org data graphs.",
  },
];

export default function LionxeFounderOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="founder-overview"
      aria-labelledby="founder-heading"
      className="relative z-10 overflow-hidden bg-[#F8FAFF] py-24 text-slate-950 dark:bg-[#050B1F] dark:text-white"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,77,253,0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#004DFD]/20 bg-[#004DFD]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#004DFD] dark:text-[#5B8CFF]">
            <ShieldCheck className="h-4 w-4" /> Architectural Leadership
          </span>
        </motion.div>

        <motion.h2
          id="founder-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
        >
          Meet the Creator Behind <span style={{ color: BRAND }}>LIONXE™</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-center text-base font-medium text-slate-600 dark:text-slate-400 sm:text-lg"
        >
          LIONXE™ was built to replace arbitrary marketing checklists with a rigid,
          engineering-grade quality standard.
        </motion.p>

        {/* MAIN GRID CONTAINER */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT COLUMN: FOUNDER CARD WITH HEADSHOT (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-2xl sm:p-10">
              {/* Top Accent Line */}
              <div
                className="absolute left-0 top-0 h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${BRAND}, ${BRAND_LT})` }}
              />

              {/* FOUNDER HEADSHOT & IDENTITY HEADER */}
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                {/* Headshot Image Container */}
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-[#004DFD]/30 p-1 shadow-md dark:border-[#5B8CFF]/40 sm:h-28 sm:w-28">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/sufian-mustafa.png"
                      alt="Sufian Mustafa — Founder of LIONXE™"
                      fill
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                  {/* Active Verified Badge */}
                  <div
                    className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#004DFD] shadow-md dark:bg-slate-900 dark:text-[#5B8CFF]"
                    title="Verified Founder & Author"
                  >
                    <CheckCircle2 className="h-5 w-5 fill-[#004DFD] text-white dark:fill-[#5B8CFF] dark:text-slate-900" />
                  </div>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    Sufian Mustafa
                  </h3>
                  <p className="mt-1 text-xs font-bold tracking-wide uppercase text-[#004DFD] dark:text-[#5B8CFF]">
                    Systems Architect & Technical SEO Expert
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Creator of LIONXE™ Standard
                  </p>
                </div>
              </div>

              {/* Bio Statement */}
              <p className="mt-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Author and creator of the LIONXE™ evaluation framework. Sufian
                specializes in code-level technical SEO, multi-platform content
                orchestration, and AI visibility pipelines designed to build assets
                that compound sustainably over decades.
              </p>

              {/* Key Credentials Pills */}
              <div className="mt-8 space-y-3 border-t border-slate-100 pt-6 dark:border-white/10">
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <GraduationCap className="h-4 w-4 shrink-0 text-[#004DFD] dark:text-[#5B8CFF]" />
                  <span>Master of Computer Science (MCS) Degree</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <MapPin className="h-4 w-4 shrink-0 text-[#004DFD] dark:text-[#5B8CFF]" />
                  <span>Islamabad / Rawalpindi, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <Globe2 className="h-4 w-4 shrink-0 text-[#004DFD] dark:text-[#5B8CFF]" />
                  <span>Founder of doitwithai.tools (AI Content Engine)</span>
                </div>
              </div>

              {/* Quote Box */}
              <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-200/60 dark:bg-slate-800/50 dark:border-white/5">
                <p className="text-xs italic leading-relaxed text-slate-600 dark:text-slate-400">
                  &ldquo;A single critical defect undermines the entire architecture. Quality is not optional, integrity is not negotiable, and distinction is not decorative.&rdquo;
                </p>
              </div>

              {/* CTA Action Bar */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/founder"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{ background: BRAND }}
                >
                  Read Full Bio & Methodology
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://sufianmustafa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  Portfolio
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3 CORE EXPERTISE CARDS (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="mb-2">
              <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Engineered for High-Level Strategy & Systems Precision
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                The LIONXE™ standard is backed by multi-disciplinary technical mastery:
              </p>
            </div>

            {EXPERTISE_AREAS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-white/20"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: item.bgLight, color: item.color }}
                    >
                      <IconComp className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {item.category}
                        </span>
                        <Sparkles
                          className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ color: item.color }}
                        />
                      </div>
                      <h5 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h5>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Sub-note on Ecosystem Interconnection */}
            <div className="rounded-2xl border border-[#004DFD]/15 bg-[#004DFD]/[0.03] p-5 dark:border-[#004DFD]/30 dark:bg-[#004DFD]/[0.08]">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 shrink-0 text-[#004DFD] dark:text-[#5B8CFF]" />
                <p className="text-xs font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">Ecosystem Synergies:</strong> LIONXE™ acts as the governing quality gate across all properties, including AI-driven optimization hubs and private consulting audits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}