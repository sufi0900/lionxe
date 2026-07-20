"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Gauge, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
// ─────────────────────────────────────────────────────────────────────────────
// PILLAR DATA
// ─────────────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    id: "logic",
      path: "/logic-longevity",

    letter: "L",
    title: "Logic & Long-term Thinking",
    subtitle: "Building Systems That Last Decades",
    keyQuestions: [
      "Does this decision offer a permanent, long-term benefit?",
      "Have we analyzed its historical foundation, present reality, and future potential?",
      "Is it entirely feasible and eligible for our context?",
    ],
    principle:
      "We systematically reject immediate, short-term gains to focus exclusively on building systems engineered to be stronger for many years, ensuring lasting foundations that compound sustainably over time.",
    score: "0-25 points",
    icon: Brain,
    color: {
      primary: "#748ad6",
      glow: "rgba(0, 77, 253, 0.4)",
      light: "rgba(0, 77, 253, 0.1)",
    },
  },
  {
    id: "optimization",
      path: "/internal-optimization",

    letter: "IO",
    title: "Internal Optimization",
    subtitle: "Absolute Completion, Zero Compromise",
    keyQuestions: [
      "Is every single internal component optimized to absolute completion?",
      "Have we meticulously refined every underlying layer?",
      "Is every component fully integrated and performing at its absolute peak capacity?",
    ],
    principle:
      "True optimization demands complete and comprehensive excellence across all elements. We refuse to settle for 80% or 95% optimization—every single component must achieve 100% excellence. We choose to completely rework or reject any project that fails to meet these total operational standards.",
    score: "0-25 points",
    icon: Gauge,
    color: {
      primary: "#06B6D4",
      primaryLight: "#0891B2",
      letterLight: "#0891B2",
      glow: "rgba(6, 182, 212, 0.4)",
      light: "rgba(6, 182, 212, 0.1)",
    },
  },
  {
    id: "integrity",
      path: "/non-negotiable-integrity",

    letter: "N",
    title: "Non-Negotiable Integrity",
    subtitle: "100% Legal, Authorized & Transparent",
    keyQuestions: [
      "Is this architecture one hundred percent legal, authorized, and transparent?",
      "Are there any hidden tricks, manipulation, or unethical shortcuts?",
      "Would we be proud to explain every detail publicly?",
    ],
    principle:
      "We enforce absolute ethical clarity, completely eliminating deceptive behavior even if it costs us. We never compromise on total transparency, ensuring an unshakeable standard that commands absolute trust.",
    score: "0-25 points",
    icon: Shield,
    color: {
      primary: "#7C3AED",
      glow: "rgba(124, 58, 237, 0.4)",
      light: "rgba(124, 58, 237, 0.1)",
    },
  },
  {
    id: "execution",
      path: "/exceptional-distinction",

    letter: "XE",
    title: "eXceptional Excellence",
    subtitle: "Remarkably Unique Value",
    keyQuestions: [
      "Is there a remarkably unique value that completely separates this from alternatives?",
      "Does it stand out powerfully in a crowded landscape?",
      "Is it truly distinctive in all parts, some parts, or at least one core area?",
    ],
    principle:
      "We bypass generic, ordinary templates to engineer highly sophisticated models, ensuring our exceptional distinction commands true authority.",
    score: "0-25 points",
    icon: Sparkles,
    color: {
      primary: "#FACC15",          // Dark Mode: Vibrant Neon Yellow
      primaryLight: "#B45309",     // Light Mode: Deep Burnt Amber (WCAG AAA Compliant Contrast)
      glow: "rgba(250, 204, 21, 0.4)",
      light: "rgba(250, 204, 21, 0.1)", 
      lightBg: "rgba(180, 83, 9, 0.14)", // Light Mode: Higher contrast amber background tint
      letterLight: "#B45309",      // Light Mode: Rich corporate bronze-gold for the big XE letter
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const LionxeFourPillars = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden py-24 px-4
        bg-slate-50 dark:bg-[#0A0F1E]
        sm:px-6 lg:px-8 lg:py-12
      "
    >
      {/* Background grid texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
          bg-[size:48px_48px]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
                    linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
        "
      />

      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-0 -translate-x-1/2
          h-[300px] w-[600px] rounded-full
          bg-[#004DFD]/5 blur-[100px]
          dark:bg-[#004DFD]/10
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── HEADER ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Eyebrow */}
          <div
            className="
              mb-4 inline-flex items-center rounded-full px-4 py-2
              text-sm font-semibold backdrop-blur-md
              border border-[#004DFD]/20 bg-[#004DFD]/[0.05] text-[#004DFD]
              dark:border-[#004DFD]/30 dark:bg-[#004DFD]/10 dark:text-[#7CA0FF]
            "
          >
            <span className="mr-2 text-lg">⚡</span>
            The LIONXE Framework
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl font-extrabold tracking-tight
              text-slate-900 dark:text-white
              sm:text-5xl lg:text-6xl
            "
          >
            4 Pillars of{" "}
            <span className="text-[#004DFD]">LIONXE™ Framework</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-6 max-w-3xl text-lg font-medium leading-8
              text-slate-600 dark:text-slate-300
            "
          >
            Every digital asset is evaluated across these four dimensions. No
            shortcuts. No assumptions. Each pillar is scored 0–25 points for a
            total of 100. This is how LIONXE measures what others only describe.
          </p>
        </motion.div>

        {/* ── PILLARS GRID ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {PILLARS.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── FOOTER CTA ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/framework"
            className="
              inline-flex items-center gap-2 rounded-xl px-8 py-4
              text-base font-bold transition-all duration-300
              border-2 border-[#004DFD] bg-transparent text-[#004DFD]
              hover:bg-[#004DFD] hover:text-white hover:shadow-lg hover:shadow-[#004DFD]/30
              dark:border-[#004DFD] dark:text-[#004DFD]
              dark:hover:bg-[#004DFD] dark:hover:text-white
            "
          >
            <span>Explore the Full Framework</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 10h10M10 5l5 5-5 5" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface PillarCardProps {
  pillar: typeof PILLARS[0];
  index: number;
  isInView: boolean;
}

const PillarCard = ({ pillar, index, isInView }: PillarCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      style={{
        "--p-primary": pillar.color.primaryLight || pillar.color.primary,
        "--p-primary-dark": pillar.color.primary,
        "--p-glow": pillar.color.glow,
        "--p-light": pillar.color.lightBg || pillar.color.light,
        "--p-light-dark": pillar.color.light,
        "--p-letter": pillar.color.letterLight || pillar.color.primary,
        "--p-letter-dark": pillar.color.primary,
      } as React.CSSProperties}
    >
      {/* Glow effect on hover */}
      <div
        className="
          pointer-events-none absolute -inset-1 rounded-[2rem] opacity-0 blur-xl
          transition-opacity duration-500 group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(circle at center, var(--p-glow), transparent 70%)`,
        }}
      />

      {/* Card Wrapper */}
     {/* Card Wrapper */}
<Link
  href={pillar.path}
  aria-label={`Read more about ${pillar.title}`}
  className="
    relative block h-full overflow-hidden rounded-[2rem] p-8
    border backdrop-blur-xl transition-all duration-500
    border-slate-200 bg-white/80
    dark:border-white/10 dark:bg-white/[0.05]
    group-hover:-translate-y-2 group-hover:shadow-2xl
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#014FFD]/60
    focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50
    dark:focus-visible:ring-offset-[#0A0F1E]
    sm:p-10
  "
>
        {/* Animated corner accent */}
        <div
          className="
            absolute right-0 top-0 h-32 w-32 rounded-bl-full opacity-10
            transition-all duration-500 group-hover:scale-150 group-hover:opacity-20
            bg-[var(--p-primary)] dark:bg-[var(--p-primary-dark)]
          "
        />

        {/* Letter badge — Optimised opacity and color configurations for clean light mode contrast */}
        <div
          className={`
            pointer-events-none absolute bottom-4 right-8 select-none
            font-black leading-none
            opacity-[0.24] dark:opacity-[0.12]
            transition-opacity duration-500
            group-hover:opacity-[0.38] dark:group-hover:opacity-[0.18]
            ${pillar.letter.length > 1 ? "text-[6rem]" : "text-[8rem]"}
            text-[var(--p-letter)] dark:text-[var(--p-letter-dark)]
          `}
        >
          {pillar.letter}
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Icon with animated glow */}
          <div className="mb-6 inline-flex">
            <div
              className="
                flex h-16 w-16 items-center justify-center rounded-2xl
                transition-all duration-500
                group-hover:scale-110 group-hover:shadow-lg
                bg-[var(--p-light)] dark:bg-[var(--p-light-dark)]
              "
              style={{
                boxShadow: isHovered
                  ? `0 8px 24px var(--p-glow)`
                  : "none",
              }}
            >
              <Icon
                className="h-8 w-8 transition-transform duration-500 group-hover:scale-110 text-[var(--p-primary)] dark:text-[var(--p-primary-dark)]"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Score badge — High contrast background tint & crisp text coloring */}
          <div
            className="
              mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1
              text-xs font-bold uppercase tracking-wider
              bg-[var(--p-light)] dark:bg-[var(--p-light-dark)]
              text-[var(--p-primary)] dark:text-[var(--p-primary-dark)]
            "
          >
            {pillar.score}
          </div>

          {/* Title */}
          <h3
            className="
              mb-2 text-2xl font-extrabold
              text-slate-900 dark:text-white
              sm:text-3xl
            "
          >
            {pillar.title}
          </h3>

          {/* Subtitle */}
          <p
            className="
              mb-6 text-sm font-semibold uppercase tracking-wide
              text-slate-500 dark:text-slate-400
            "
          >
            {pillar.subtitle}
          </p>

          {/* Key Questions Section */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="h-1 w-8 rounded-full bg-[var(--p-primary)] dark:bg-[var(--p-primary-dark)]"
              />
              <span 
                className="text-xs font-bold uppercase tracking-widest text-[var(--p-primary)] dark:text-[var(--p-primary-dark)]"
              >
                Key Questions
              </span>
            </div>
            <ul className="space-y-2.5">
              {pillar.keyQuestions.map((question, idx) => (
                <li
                  key={idx}
                  className="
                    flex items-start gap-3 text-sm leading-relaxed
                    text-slate-600 dark:text-slate-300
                  "
                >
                  <span
                    className="
                      mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center
                      rounded-full text-xs font-bold
                      bg-[var(--p-light)] dark:bg-[var(--p-light-dark)]
                      text-[var(--p-primary)] dark:text-[var(--p-primary-dark)]
                    "
                  >
                    {idx + 1}
                  </span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Principle Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div 
                className="h-1 w-8 rounded-full bg-[var(--p-primary)] dark:bg-[var(--p-primary-dark)]"
              />
              <span 
                className="text-xs font-bold uppercase tracking-widest text-[var(--p-primary)] dark:text-[var(--p-primary-dark)]"
              >
                Our Principle
              </span>
            </div>
            <p
              className="
                text-sm leading-7 italic
                text-slate-700 dark:text-slate-200
                border-l-2 pl-4
                border-[var(--p-primary)] dark:border-[var(--p-primary-dark)]
              "
            >
              {pillar.principle}
            </p>
          </div>

          {/* Animated bottom border accent */}
          <div
            className="
              mt-6 h-1 w-0 rounded-full transition-all duration-500
              group-hover:w-full
              bg-[var(--p-primary)] dark:bg-[var(--p-primary-dark)]
            "
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default LionxeFourPillars;