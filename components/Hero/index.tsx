//hero component for LIONXE landing page
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  BarChart3,
  FileSearch,
  Gauge,
  Layers3,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Volume2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ExternalLink,
} from "lucide-react";
import { useAnimationCleanup } from "./useAnimationCleanup";

// ─── TYPES ─────────────────────────────────────────────────────────────────────

interface PillarState {
  code: string;
  name: string;
  sub: string;
  failText: string;
  score: number;
  max: number;
  pct: number;
  passing: boolean;
}

// ─── CONSTANTS ─────────────────────────────────────────────────────────────────

const BRAND = "#014FFD";

const INITIAL_PILLARS: Omit<PillarState, "passing">[] = [
  {
    code: "L",
    name: "Long-Term Logic",
    sub: "Tests whether the choice can compound beyond the current trend",
    failText: "FAILED — short-term logic creates future collapse risk",
    score: 23,
    max: 25,
    pct: 92,
  },
  {
    code: "IO",
    name: "Internal Optimization",
    sub: "Tests whether the internal structure is complete, aligned, and resilient",
    failText: "FAILED — weak internal layers cap the entire decision",
    score: 22,
    max: 25,
    pct: 88,
  },
  {
    code: "N",
    name: "Non-Negotiable Integrity",
    sub: "Tests whether the path is transparent, ethical, and compliance-safe",
    failText: "FAILED — hidden shortcuts trigger structural rejection",
    score: 24,
    max: 25,
    pct: 96,
  },
  {
    code: "XE",
    name: "Exceptional Execution",
    sub: "Tests whether the outcome is distinct enough to deserve long-term trust",
    failText: "FAILED — generic execution cannot earn durable authority",
    score: 23,
    max: 25,
    pct: 92,
  },
];

const pillarSummary = [
  {
    code: "L",
    label: "Long-Term Logic",
    question: "Will this still make sense when the trend disappears?",
  },
  {
    code: "IO",
    label: "Internal Optimization",
    question: "Are the hidden layers strong enough to support the outcome?",
  },
  {
    code: "N",
    label: "Non-Negotiable Integrity",
    question: "Is the path transparent, ethical, and defensible?",
  },
  {
    code: "XE",
    label: "Exceptional Execution",
    question: "Is the execution distinct enough to avoid becoming generic?",
  },
];

const applicationTypes = [
  { label: "Strategic Decision Review", icon: Gauge },
  { label: "Business & Project Evaluation", icon: Layers3 },
  { label: "Website & Digital Asset Audits", icon: FileSearch },
  { label: "SEO / UX / Content Systems", icon: SearchCheck },
];

const trustPoints = [
  { label: "Universal Decision Standard", icon: ShieldCheck },
  { label: "Four-Gate Evaluation", icon: BarChart3 },
  { label: "Pass / Fail Structural Logic", icon: Sparkles },
];

// ─── PILLAR ROW ────────────────────────────────────────────────────────────────

interface PillarRowProps {
  pillar: PillarState;
  onToggle: () => void;
}

const PillarRow = ({ pillar, onToggle }: PillarRowProps) => {
  const { passing, code, name, sub, failText, score, max, pct } = pillar;

  const rowTone = passing
    ? "border-[#014FFD]/25 bg-[#014FFD]/[0.045] hover:border-[#014FFD]/45 hover:bg-[#014FFD]/[0.075] dark:border-[#014FFD]/25 dark:bg-[#014FFD]/[0.07]"
    : "border-red-300/50 bg-red-50/70 hover:border-red-400/60 dark:border-red-400/25 dark:bg-red-400/[0.075]";

  const badgeTone = passing
    ? "bg-[#014FFD]/12 text-[#014FFD] dark:bg-[#014FFD]/18 dark:text-[#9AAEFF]"
    : "bg-red-100 text-red-600 dark:bg-red-400/15 dark:text-red-400";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={passing}
      aria-label={`${name}: ${passing ? "passing" : "failing"} — click to toggle`}
      className={`
        group w-full cursor-pointer rounded-xl border px-4 py-3 text-left
        transition-all duration-300
        ${rowTone}
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
            text-xs font-black tracking-wider transition-all duration-300
            ${badgeTone}
          `}
        >
          {code}
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={`text-sm font-semibold leading-tight transition-colors duration-300 ${
              passing
                ? "text-slate-900 dark:text-white"
                : "text-red-700 dark:text-red-300"
            }`}
          >
            {name}
          </p>

          <p
            className={`mt-0.5 text-xs leading-tight transition-colors duration-300 ${
              passing
                ? "text-slate-500 dark:text-slate-400"
                : "text-red-500 dark:text-red-400"
            }`}
          >
            {passing ? sub : failText}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <span
            className={`text-xs font-bold transition-colors duration-300 ${
              passing
                ? "text-slate-600 dark:text-slate-300"
                : "text-red-500"
            }`}
          >
            {passing ? `${score}/${max}` : "0/25"}
          </span>

          <div
            className={`
              relative h-5 w-9 rounded-full border transition-all duration-300
              ${
                passing
                  ? "border-[#014FFD] bg-[#014FFD]"
                  : "border-slate-300 bg-slate-200 dark:border-slate-600 dark:bg-slate-700"
              }
            `}
          >
            <div
              className={`
                absolute top-[2px] h-3.5 w-3.5 rounded-full transition-all duration-300
                ${
                  passing
                    ? "left-[18px] bg-white"
                    : "left-[2px] bg-slate-400 dark:bg-slate-500"
                }
              `}
            />
          </div>
        </div>
      </div>

      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: passing ? `${pct}%` : "8%",
            background: passing ? BRAND : "#E24B4A",
          }}
        />
      </div>
    </button>
  );
};

// ─── EVALUATION SCORECARD ─────────────────────────────────────────────────────

const EvaluationScorecard = () => {
  const [pillars, setPillars] = useState<PillarState[]>(
    INITIAL_PILLARS.map((p) => ({ ...p, passing: true }))
  );
  const [animateBars, setAnimateBars] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimateBars(true), 400);
    return () => clearTimeout(t);
  }, []);

  const togglePillar = useCallback((idx: number) => {
    setPillars((prev) => {
      const next = prev.map((p, i) =>
        i === idx ? { ...p, passing: !p.passing } : p
      );

      if (!next[idx].passing) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }

      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setPillars((prev) => prev.map((p) => ({ ...p, passing: true })));
  }, []);

  const allPass = pillars.every((p) => p.passing);
  const failCount = pillars.filter((p) => !p.passing).length;
  const firstFail = pillars.find((p) => !p.passing);

  const totalScore = pillars.reduce(
    (sum, p) => sum + (p.passing ? p.score : 0),
    0
  );

  const circ = 163.4;
  const dashOffset = circ - circ * (totalScore / 100);

  return (
    <div
      className="
        relative overflow-hidden rounded-[1.75rem] border p-6 shadow-xl
        border-slate-200/80 bg-white/90 backdrop-blur-2xl
        dark:border-white/10 dark:bg-[#070E24]/90
        transition-transform duration-150 sm:p-7
      "
      style={{
        animation: shake
          ? "lxShake 0.4s ease"
          : "lxFloat 7s ease-in-out infinite",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
        style={{
          background: allPass ? `${BRAND}18` : "rgba(226,75,74,0.12)",
          transition: "background 0.5s",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 right-5 select-none text-[9rem] font-black leading-none text-slate-100/60 dark:text-white/[0.025] sm:text-[11rem]"
      >
        X
      </div>

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p
              className="mb-1.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300"
              style={{ color: allPass ? BRAND : "#E24B4A" }}
            >
              LIONXE Decision Evaluation
            </p>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              Four-Gate Standard Test
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Toggle any gate to test how one weak layer affects the full verdict.
            </p>
          </div>

          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 64 64" className="h-16 w-16">
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                className="text-slate-200 dark:text-white/10"
              />

              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={animateBars ? dashOffset : circ}
                transform="rotate(-90 32 32)"
                style={{
                  stroke: allPass ? BRAND : "#E24B4A",
                  transition:
                    "stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1), stroke 0.4s",
                }}
              />
            </svg>

            <div
              className="absolute inset-0 flex items-center justify-center text-sm font-black transition-colors duration-300"
              style={{ color: allPass ? BRAND : "#E24B4A" }}
            >
              {totalScore}
            </div>
          </div>
        </div>

        <div className="mb-5 space-y-2.5">
          {pillars.map((pillar, i) => (
            <PillarRow
              key={pillar.code}
              pillar={pillar}
              onToggle={() => togglePillar(i)}
            />
          ))}
        </div>

        <div
          className={`
            mb-4 rounded-xl border px-4 py-3.5 transition-all duration-500
            ${
              allPass
                ? "border-emerald-300/50 bg-emerald-50/70 dark:border-emerald-400/20 dark:bg-emerald-400/[0.08]"
                : "border-red-300/50 bg-red-50/70 dark:border-red-400/20 dark:bg-red-400/[0.08]"
            }
          `}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {allPass ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <XCircle className="h-4 w-4 shrink-0 text-red-500" />
              )}

              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  allPass
                    ? "text-emerald-700 dark:text-emerald-300"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {allPass ? "Decision Standard Passed" : "Structural Rejection"}
              </span>
            </div>

            <span
              className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                allPass
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300"
                  : "bg-red-100 text-red-700 dark:bg-red-400/15 dark:text-red-300"
              }`}
            >
              {allPass
                ? "All gates cleared"
                : `${failCount} gate${failCount > 1 ? "s" : ""} failed`}
            </span>
          </div>

          <p
            className={`mt-2 text-xs leading-relaxed ${
              allPass
                ? "text-emerald-700 dark:text-emerald-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {allPass
              ? "This choice clears the LIONXE standard for long-term logic, internal strength, ethical trust, and exceptional execution."
              : `"${firstFail?.name}" failed. Under LIONXE logic, one broken gate is enough to reject the decision until the weak layer is rebuilt.`}
          </p>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div
            className={`rounded-xl border px-4 py-3 transition-all duration-500 ${
              allPass
                ? "border-[#014FFD]/20 bg-[#014FFD]/[0.05] dark:bg-[#014FFD]/[0.08]"
                : "border-red-300/30 bg-red-50/50 dark:border-red-400/15 dark:bg-red-400/[0.05]"
            }`}
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Decision score
            </p>

            <div className="mt-1 flex items-baseline gap-1">
              <span
                className="text-3xl font-black transition-colors duration-300"
                style={{ color: allPass ? BRAND : "#E24B4A" }}
              >
                {totalScore}
              </span>
              <span className="text-sm font-medium text-slate-400">/100</span>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center rounded-xl border px-4 py-3 transition-all duration-500 ${
              allPass
                ? "border-emerald-300/50 bg-emerald-50/60 dark:border-emerald-400/20 dark:bg-emerald-400/[0.07]"
                : "border-red-300/40 bg-red-50/60 dark:border-red-400/15 dark:bg-red-400/[0.06]"
            }`}
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Evaluation status
            </p>

            <p
              className={`mt-1 text-lg font-black transition-colors duration-300 ${
                allPass
                  ? "text-slate-900 dark:text-white"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {allPass ? "Approved" : "Rejected"}
            </p>
          </div>
        </div>

        {!allPass && (
          <button
            type="button"
            onClick={resetAll}
            className="
              flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2.5
              text-xs font-semibold text-slate-500 transition-all duration-200
              border-slate-200 bg-slate-50/80 hover:bg-slate-100
              dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.07]
            "
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Restore all four gates
          </button>
        )}
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

const LionxeHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { addCleanup } = useAnimationCleanup();

  useEffect(() => {
    const handleVisibility = () => {
      const state = document.hidden ? "paused" : "running";

      document.querySelectorAll<HTMLElement>(".lx-animated").forEach((el) => {
        el.style.animationPlayState = state;
      });
    };

    document.addEventListener("visibilitychange", handleVisibility);
    addCleanup(() =>
      document.removeEventListener("visibilitychange", handleVisibility)
    );

    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [addCleanup]);

  return (
    <section
      id="home"
      ref={heroRef}
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
      role="banner"
      className="
        relative z-10 flex min-h-screen items-center justify-center overflow-hidden
        bg-[#F8FAFF] px-4 pb-16 pt-[70px] text-slate-950
        dark:bg-[#050B1F] dark:text-white
        sm:px-6 lg:px-8
      "
    >
      {/* ── BACKGROUNDS ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-3] hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 68% 0%, rgba(1,79,253,0.24) 0%, transparent 70%), radial-gradient(ellipse 45% 40% at 10% 100%, rgba(7,17,39,0.34) 0%, transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-3] block dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 68% 0%, rgba(1,79,253,0.055) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 10% 100%, rgba(1,79,253,0.035) 0%, transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-2] opacity-[0.045] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 z-[-1] h-[360px] w-[360px] -translate-x-1/2 rounded-full blur-[110px]"
        style={{ background: `${BRAND}12` }}
      />

      {/* ── ORBIT RINGS ── */}
      <div
        aria-hidden="true"
        className="lx-animated pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <svg
          className="absolute"
          width="138%"
          height="138%"
          viewBox="-100 -100 200 200"
          style={{
            maxWidth: "820px",
            maxHeight: "820px",
            overflow: "visible",
          }}
        >
          {[
            { r: 76, dash: "3.5 6", dur: "12s" },
            { r: 86, dash: "4.5 7.5", dur: "17s" },
            { r: 94, dash: "2.5 8", dur: "22s" },
            { r: 100, dash: "5.5 9", dur: "29s" },
          ].map((ring, i) => (
            <circle
              key={i}
              cx="0"
              cy="0"
              r={ring.r}
              fill="none"
              stroke={BRAND}
              strokeWidth={
                i === 0 ? 0.55 : i === 1 ? 0.42 : i === 2 ? 0.35 : 0.28
              }
              strokeDasharray={ring.dash}
              style={{
                animation: `lxRing${i + 1} ${ring.dur} linear infinite`,
                opacity: 0.35,
              }}
            />
          ))}
        </svg>
      </div>

      {/* ── MAIN GRID ──
          lg:items-start added: previously items-center caused the shorter
          right column to float vertically centered against the much taller
          left column, making the two sides look disconnected. Top-aligning
          both columns gives them a shared baseline so they read as one
          balanced layout. */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:py-20">
        {/* ────────── LEFT ────────── */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          {/* Identity badges */}
          <div className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <div
              className="
                inline-flex items-center gap-2 rounded-full border px-4 py-2.5
                text-sm font-bold shadow-sm backdrop-blur-md
                border-[#014FFD]/20 bg-[#014FFD]/[0.07] text-[#014FFD]
                dark:border-[#014FFD]/25 dark:bg-[#014FFD]/10 dark:text-[#9AAEFF]
              "
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Universal Decision Standard</span>
            </div>

            <div
              className="
                inline-flex items-center gap-3 rounded-full border px-4 py-2.5
                text-sm font-semibold shadow-sm backdrop-blur-md
                border-slate-200 bg-white/80 text-slate-700
                dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300
              "
            >
              <span
                className="
                  flex h-7 w-7 items-center justify-center rounded-full
                  bg-[#014FFD] text-white shadow-[0_0_18px_rgba(1,79,253,0.35)]
                "
              >
                <Volume2 className="h-3.5 w-3.5" />
              </span>

              <span className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Pronounced
              </span>

              <span
                className="
                  rounded-lg border border-[#014FFD]/20 bg-white/70 px-3 py-1
                  text-sm font-black tracking-[0.16em] text-[#014FFD]
                  dark:border-[#014FFD]/25 dark:bg-white/[0.06] dark:text-white
                "
              >
                lee-ohn-zay
              </span>
            </div>
          </div>

          <h1
            id="hero-heading"
            style={{ textWrap: "balance" as any }}
            className="text-[2.15rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-[3rem] lg:text-[3.25rem] xl:text-[3.65rem]"
          >
            <span className="block">Most Decisions Fail —</span>
            <span className="block text-slate-700 dark:text-slate-200">
              Not From Poor Effort, But From Missing Systems.
            </span>
            <span className="mt-2 block">
              <span className="relative inline-block" style={{ color: BRAND }}>
                LIONXE<span className="text-slate-900 dark:text-white">™</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${BRAND}, transparent)`,
                  }}
                />
              </span>{" "}
              Is That System.
            </span>
          </h1>

        
          <p
            id="hero-description"
            style={{ textWrap: "pretty" as any }}
            className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600 dark:text-slate-300 sm:text-lg lg:mx-0"
          >
           LIONXE™ (pronounced: lee-ohn-zay)
 is the definitive evaluation standard built to audit, optimize, and strengthen complex digital architectures, websites, business systems, and strategic decisions through four non-negotiable gates.
           
          </p>

        
          {/* Pillar summary */}
          {/* Pillar summary */}
<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
  {pillarSummary.map((p) => (
    <div
      key={p.code}
      className="
        group flex min-h-[155px] flex-col items-center justify-center gap-3
        rounded-2xl border px-4 py-5 text-center
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(1,79,253,0.14)]
        dark:hover:shadow-[0_14px_34px_rgba(1,79,253,0.24)]
        sm:min-h-[168px]
      "
      style={{
        borderColor: `${BRAND}24`,
        background: `linear-gradient(180deg, ${BRAND}08 0%, rgba(255,255,255,0.02) 100%)`,
      }}
    >
      <span
        className="
          text-xl font-black leading-none tracking-[0.18em]
          sm:text-2xl
        "
        style={{ color: BRAND }}
      >
        {p.code}
      </span>

      <span
        className="
          text-sm font-extrabold leading-snug text-slate-800
          dark:text-slate-100 sm:text-[15px]
        "
      >
        {p.label}
      </span>

      <span
        className="
          max-w-[175px] text-[12px] font-medium leading-[1.45]
          text-slate-500 dark:text-slate-400
          sm:text-[13px]
        "
      >
        {p.question}
      </span>
    </div>
  ))}
</div>
  <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-7 text-slate-500 dark:text-slate-400 lg:mx-0">
            Built for founders, operators, creators, and technical leaders who
            want to separate what compounds from what collapses.
          </p>

          {/* Application pills */}
          <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {applicationTypes.map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className="
                    lx-animated inline-flex items-center rounded-full border px-4 py-2
                    text-sm font-medium shadow-sm backdrop-blur-md
                    border-slate-200 bg-slate-100 text-slate-700
                    transition-all duration-300 hover:text-[#014FFD]
                    dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200
                  "
                >
                  <Icon
                    className="mr-2 h-3.5 w-3.5"
                    style={{ color: BRAND }}
                  />
                  {item.label}
                </span>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://chatgpt.com/g/g-6a2ef958cc248191b9abddad7284c387-lionxe-r-audit-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl px-7 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
              style={{
                background: BRAND,
                boxShadow: `0 8px 24px ${BRAND}38`,
              }}
            >
             Ask LIONXE™ AI
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>

            <a
              href="/audits"
              className="
                inline-flex min-h-[50px] w-full items-center justify-center
                rounded-xl border px-7 py-4 text-base font-bold
                transition-all duration-300 hover:-translate-y-0.5
                border-slate-300 bg-transparent text-slate-900
                dark:border-white/15 dark:bg-white/[0.04] dark:text-white
                sm:w-auto
              "
            >
              Request Structural Audit
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap justify-center gap-5 lg:justify-start">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-slate-400"
                >
                  <Icon className="mr-2 h-4 w-4" style={{ color: BRAND }} />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* ────────── RIGHT ────────── */}
        <div className="relative mx-auto flex w-full max-w-lg flex-col justify-center lg:mx-0">
          <div
            className="
              absolute -top-6 right-4 z-20 hidden items-center gap-2
              rounded-2xl border px-4 py-2.5 text-sm shadow-lg backdrop-blur-xl
              border-slate-200/90 bg-white/95 text-slate-700
              dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200
              lg:flex
            "
          >
            <TrendingUp
              className="h-4 w-4 shrink-0"
              style={{ color: BRAND }}
            />
            <span className="whitespace-nowrap font-medium">
              Decision Gate System
            </span>
          </div>

          <div
            className="
              absolute -bottom-6 left-4 z-20 hidden items-center gap-2
              rounded-2xl border px-4 py-2.5 text-sm shadow-lg backdrop-blur-xl
              border-slate-200/90 bg-white/95 text-slate-700
              dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200
              lg:flex
            "
          >
            <XCircle className="h-4 w-4 shrink-0 text-red-500" />
            <span className="whitespace-nowrap font-medium">
              One failed gate rejects the choice
            </span>
          </div>

          <div
            aria-hidden="true"
            className="lx-glow-1 pointer-events-none absolute -inset-7 rounded-[3rem]"
          />

          <div
            aria-hidden="true"
            className="lx-glow-2 pointer-events-none absolute -inset-5 rounded-[3rem]"
          />

          <div
            aria-hidden="true"
            className="lx-glow-3 pointer-events-none absolute -inset-3 rounded-[2.5rem]"
          />

          <div className="relative z-10">
            <EvaluationScorecard />
          </div>

          <p className="mt-5 text-center text-xs text-slate-400 dark:text-slate-500">
            Interactive demonstration — toggle any gate to see how LIONXE treats
            structural weakness inside a decision, project, business, or digital asset.
          </p>
        </div>
      </div>

      {/* ── GLOBAL ANIMATIONS ── */}
      <style jsx>{`
        @keyframes lxRing1 {
          to {
            stroke-dashoffset: 240;
          }
        }

        @keyframes lxRing2 {
          to {
            stroke-dashoffset: -270;
          }
        }

        @keyframes lxRing3 {
          to {
            stroke-dashoffset: 300;
          }
        }

        @keyframes lxRing4 {
          to {
            stroke-dashoffset: -330;
          }
        }

        @keyframes lxFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes lxShake {
          0%,
          100% {
            transform: translateX(0);
          }

          20% {
            transform: translateX(-5px);
          }

          40% {
            transform: translateX(5px);
          }

          60% {
            transform: translateX(-3px);
          }

          80% {
            transform: translateX(3px);
          }
        }

        .lx-glow-1 {
          background: radial-gradient(
            ellipse 80% 65% at 50% 50%,
            rgba(1, 79, 253, 0.22) 0%,
            rgba(1, 79, 253, 0.06) 50%,
            transparent 72%
          );
          filter: blur(28px);
          animation: lxGlow1 4s ease-in-out infinite;
        }

        .lx-glow-2 {
          background: radial-gradient(
            ellipse 55% 65% at 72% 28%,
            rgba(72, 93, 255, 0.18) 0%,
            rgba(72, 93, 255, 0.05) 50%,
            transparent 78%
          );
          filter: blur(22px);
          animation: lxGlow2 5.5s ease-in-out infinite;
        }

        .lx-glow-3 {
          background: radial-gradient(
            ellipse 48% 48% at 22% 78%,
            rgba(6, 182, 212, 0.16) 0%,
            rgba(6, 182, 212, 0.035) 52%,
            transparent 78%
          );
          filter: blur(18px);
          animation: lxGlow3 7s ease-in-out infinite;
        }

        @keyframes lxGlow1 {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.07);
          }
        }

        @keyframes lxGlow2 {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1) translateX(0);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.06) translateX(-6px);
          }
        }

        @keyframes lxGlow3 {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }

          50% {
            opacity: 0.6;
            transform: scale(1.09);
          }
        }

        :global(.dark) .lx-glow-1 {
          animation-name: lxGlow1Dark;
        }

        :global(.dark) .lx-glow-2 {
          animation-name: lxGlow2Dark;
        }

        :global(.dark) .lx-glow-3 {
          animation-name: lxGlow3Dark;
        }

        @keyframes lxGlow1Dark {
          0%,
          100% {
            opacity: 0.75;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes lxGlow2Dark {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1) translateX(0);
          }

          50% {
            opacity: 0.85;
            transform: scale(1.06) translateX(-7px);
          }
        }

        @keyframes lxGlow3Dark {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }

          50% {
            opacity: 0.75;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default LionxeHero;