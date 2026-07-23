"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Gauge,
  Shield,
  Sparkles,
  CheckCircle2,
  Award,
  ChevronDown,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// PIPELINE DATA — Progressive Density & Color Mechanics
// ─────────────────────────────────────────────────────────────────────────────
const GATES = [
  {
    step: "GATE 1",
    code: "L",
    name: "Long-Term Logic",
    law: "The Post-Flood Collapse Rule",
    score: "100 / 100",
    status: "PASSED",
    icon: Brain,
    cardBg: "bg-[#0A142F] border-[#004DFD]/30",
    accentColor: "#004DFD",
    textColor: "text-[#5B8CFF]",
    badgeBg: "bg-[#004DFD]/10 text-[#5B8CFF] border-[#004DFD]/30",
    iconBg: "bg-[#004DFD]/20 text-[#5B8CFF] border border-[#004DFD]/40",
    glow: "shadow-lg shadow-[#004DFD]/10",
  },
  {
    step: "GATE 2",
    code: "IO",
    name: "Internal Optimization",
    law: "The Weakest Link Axiom",
    score: "100 / 100",
    status: "OPTIMIZED",
    icon: Gauge,
    cardBg: "bg-[#0D1C44] border-[#0066FF]/50",
    accentColor: "#0066FF",
    textColor: "text-[#60A5FA]",
    badgeBg: "bg-[#0066FF]/15 text-[#60A5FA] border-[#0066FF]/40",
    iconBg: "bg-[#0066FF]/20 text-[#60A5FA] border border-[#0066FF]/40",
    glow: "shadow-xl shadow-[#0066FF]/20",
  },
  {
    step: "GATE 3",
    code: "N",
    name: "Non-Negotiable Integrity",
    law: "The Cost-Indifferent Mandate",
    score: "100 / 100",
    status: "VERIFIED",
    icon: Shield,
    cardBg: "bg-[#131B58] border-[#7C3AED]/70",
    accentColor: "#7C3AED",
    textColor: "text-[#A78BFA]",
    badgeBg: "bg-[#7C3AED]/20 text-[#C4B5FD] border-[#7C3AED]/50",
    iconBg: "bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#7C3AED]/50",
    glow: "shadow-2xl shadow-[#7C3AED]/30 ring-1 ring-[#7C3AED]/30",
  },
  {
    step: "GATE 4",
    code: "XE",
    name: "eXceptional Distinction",
    law: "The Commodity Threshold Law",
    score: "100 / 100",
    status: "DISTINCTION PROVEN",
    icon: Sparkles,
    cardBg: "bg-gradient-to-r from-[#1A1408] via-[#2A1E0B] to-[#1A1408] border-[#D97706]/70",
    accentColor: "#D97706",
    textColor: "text-[#FBBF24]",
    badgeBg: "bg-[#D97706]/20 text-[#FDE047] border-[#D97706]/50",
    iconBg: "bg-[#D97706]/25 text-[#FBBF24] border border-[#D97706]/60 shadow-[0_0_15px_rgba(217,119,6,0.3)]",
    glow: "shadow-[0_0_50px_rgba(217,119,6,0.35)] ring-1 ring-[#D97706]/50",
  },
];

export default function LionxePipelineInfographic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-blue-800 mx-auto max-w-4xl px-4 py-16 text-slate-950 dark:text-white"
    >
      {/* HEADER STATEMENT */}
      <div className="mb-12 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#004DFD]/30 bg-[#004DFD]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#004DFD] dark:text-[#5B8CFF]">
          Sequential Execution Pipeline
        </div>
        <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          LIONXE™ Quality Evaluation Simulation
        </h3>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Progressive gate progression: Each passed pillar increases structural value.
        </p>
      </div>

      {/* PIPELINE CONTAINER */}
      <div className="relative flex flex-col items-center">
        
        {/* TOP STARTING ENTRY NODE */}
        <div className="z-20 mb-2 flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-bold text-slate-700 shadow-md dark:border-white/15 dark:bg-slate-900 dark:text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#004DFD] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#004DFD]" />
          </span>
          AUDIT PIPELINE INITIATED
        </div>

        {/* VERTICAL LASER CONNECTOR LINE */}
        <div className="absolute top-10 bottom-16 w-1 bg-slate-200 dark:bg-white/10 z-0">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-[#004DFD] via-[#7C3AED] to-emerald-400 shadow-[0_0_15px_#004DFD]"
          />
        </div>

        {/* STACKED GATE CARDS */}
        <div className="z-10 w-full space-y-8 my-6">
          {GATES.map((gate, idx) => {
            const IconComp = gate.icon;
            const isLast = idx === GATES.length - 1;

            return (
              <div key={gate.step} className="relative flex flex-col items-center">
                
                {/* GATE CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.25 }}
                  className={`w-full overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 ${gate.cardBg} ${gate.glow}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    
                    {/* Left: Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-black shadow-md ${gate.iconBg}`}
                      >
                        <IconComp className="h-6 w-6" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${gate.textColor}`}>
                            {gate.step}
                          </span>
                          <span className="text-xs text-white/40">·</span>
                          <span className="text-[10px] font-mono text-white/70">
                            {gate.law}
                          </span>
                        </div>
                        <h4 className="text-lg font-black text-white sm:text-xl">
                          Pillar {gate.code} — {gate.name}
                        </h4>
                      </div>
                    </div>

                    {/* Right: Status & Score */}
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${gate.badgeBg}`}>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {gate.status}
                      </span>

                      <div className="rounded-xl bg-black/30 px-3.5 py-1.5 text-right border border-white/10">
                        <span className="text-sm font-black text-white tabular-nums">
                          {gate.score}
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>

                {/* FLOW CONNECTOR ARROW BETWEEN CARDS */}
                {!isLast && (
                  <div className="my-2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-white/20 text-[#004DFD] shadow-md">
                    <ChevronDown className="h-4 w-4 animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* TERMINAL NODE: LIONXE CERTIFIED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 mt-4 flex flex-col items-center"
        >
          <div className="group relative flex items-center gap-4 rounded-3xl border-2 border-emerald-400 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 px-8 py-5 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/50">
              <Award className="h-7 w-7" />
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-emerald-400">
                All 4 Quality Gates Cleared
              </p>
              <h4 className="text-xl font-black text-white sm:text-2xl">
                LIONXE™ VERIFIED & CERTIFIED
              </h4>
              <p className="text-xs font-mono text-emerald-200/80">
                Grand Score: 400 / 400 Points · Zero Blocking Issues Detected
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}