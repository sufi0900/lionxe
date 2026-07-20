"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";
import {
  Brain, Gauge, Shield, Sparkles,
  CheckCircle2, XCircle, Clock, Loader2,
  Play, RotateCcw, AlertTriangle, ShieldCheck,
  Check, X,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

type StageStatus = "pending" | "active" | "passed" | "failed" | "skipped";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const STAGES = [
  {
    id: "L",
    letter: "L",
    title: "Logic & Long-Term Thinking",
    subtitle: "Foundation Gate",
    question: "Does this offer permanent, long-term value with a fully analyzed historical, present, and future foundation?",
    passNote: "Long-term strategy verified. Foundation is solid.",
    failNote: "Immediate gains prioritized. No sustainable foundation detected.",
    icon: Brain,
    color: "#004DFD",
    glow: "rgba(0,77,253,0.45)",
    lightBg: "rgba(0,77,253,0.08)",
  },
  {
    id: "IO",
    letter: "IO",
    title: "Internal Optimization",
    subtitle: "Optimization Gate",
    question: "Is every internal component optimized to absolute completion — not 80%, not 95%, but 100%?",
    passNote: "All internal layers refined to full completion.",
    failNote: "Incomplete optimization detected. Flawless execution not met.",
    icon: Gauge,
    color: "#0066FF",
    glow: "rgba(0,102,255,0.45)",
    lightBg: "rgba(0,102,255,0.08)",
  },
  {
    id: "N",
    letter: "N",
    title: "Non-Negotiable Integrity",
    subtitle: "Integrity Gate",
    question: "Is it 100% legal, transparent, and free of any manipulation, hidden tricks, or unethical shortcuts?",
    passNote: "Full ethical transparency confirmed. No violations detected.",
    failNote: "Integrity breach detected. Deceptive patterns found.",
    icon: Shield,
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.45)",
    lightBg: "rgba(124,58,237,0.08)",
  },
  {
    id: "XE",
    letter: "XE",
    title: "Exceptional Excellence",
    subtitle: "Excellence Gate",
    question: "Does it possess remarkably unique value that powerfully separates it from every existing alternative?",
    passNote: "Exceptional distinction confirmed. Authority-level execution.",
    failNote: "Generic execution detected. No distinctive edge found.",
    icon: Sparkles,
    color: "#D97706",
    glow: "rgba(217,119,6,0.45)",
    lightBg: "rgba(217,119,6,0.08)",
  },
];

const ACTIVE_DURATION  = 1800;
const PASS_DELAY       = 350;
const FAIL_PAUSE       = 500;

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const LionxeAuditPipeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView    = useInView(sectionRef, { once: true, margin: "-120px" });
  const hasAutoPlayed = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // gateConfig[i] = true → PASS, false → FAIL
  const [gateConfig, setGateConfig] = useState<boolean[]>([true, true, true, true]);
  const [statuses,   setStatuses]   = useState<StageStatus[]>(["pending","pending","pending","pending"]);
  const [outcome,    setOutcome]    = useState<"none"|"verified"|"rejected">("none");
  const [isRunning,  setIsRunning]  = useState(false);
  const [activeIdx,  setActiveIdx]  = useState(-1);
  const [particleOn, setParticleOn] = useState(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  }, []);

  const reset = useCallback(() => {
    clearTimers();
    setStatuses(["pending","pending","pending","pending"]);
    setOutcome("none");
    setIsRunning(false);
    setActiveIdx(-1);
    setParticleOn(false);
  }, [clearTimers]);

  // ── Core animation engine ──────────────────────────────────────────
  // Uses a FOR loop (not forEach) so `break` correctly stops scheduling
  // further stages the moment a fail is encountered.
  const runAudit = useCallback((config: boolean[]) => {
    reset();

    // tiny delay so reset flushes before new schedules
    const kickoff = setTimeout(() => {
      setIsRunning(true);
      setParticleOn(true);

      let t = 250; // cumulative delay cursor

      for (let i = 0; i < STAGES.length; i++) {
        const idx = i; // stable closure capture
        const passes = config[idx];

        // ── ACTIVATE this gate ──
        schedule(() => {
          setActiveIdx(idx);
          setStatuses(prev => {
            const n = [...prev]; n[idx] = "active"; return n;
          });
        }, t);
        t += ACTIVE_DURATION;

        if (!passes) {
          // ── FAIL ──
          schedule(() => {
            setStatuses(prev => {
              const n = [...prev];
              n[idx] = "failed";
              for (let j = idx + 1; j < STAGES.length; j++) n[j] = "skipped";
              return n;
            });
            setActiveIdx(-1);
            setParticleOn(false);
          }, t);
          t += FAIL_PAUSE;

          schedule(() => {
            setOutcome("rejected"); // ← ALWAYS rejected on any fail
            setIsRunning(false);
          }, t);

          break; // ← proper break; nothing scheduled after this
        } else {
          // ── PASS ──
          schedule(() => {
            setStatuses(prev => {
              const n = [...prev]; n[idx] = "passed"; return n;
            });
          }, t);
          t += PASS_DELAY;

          // Only set VERIFIED after the very last stage passes
          if (idx === STAGES.length - 1) {
            schedule(() => {
              setActiveIdx(-1);
              setParticleOn(false);
              setOutcome("verified");
              setIsRunning(false);
            }, t);
          }
        }
      }
    }, 80);
    timers.current.push(kickoff);
  }, [reset, schedule]);

  // Auto-play on scroll
  useEffect(() => {
    if (isInView && !hasAutoPlayed.current) {
      hasAutoPlayed.current = true;
      const id = setTimeout(() => runAudit([true, true, true, true]), 700);
      timers.current.push(id);
    }
  }, [isInView, runAudit]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const toggleGate = (i: number) => {
    setGateConfig(prev => {
      const n = [...prev]; n[i] = !n[i]; return n;
    });
  };

  const anyFail = gateConfig.some(v => !v);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 px-4 bg-slate-50 dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Diagonal tech-grid background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.022] dark:opacity-[0.055]"
        style={{ backgroundImage:"repeating-linear-gradient(60deg,#004DFD 0,#004DFD 1px,transparent 0,transparent 50%)", backgroundSize:"40px 40px" }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-[#004DFD]/5 blur-[130px] dark:bg-[#004DFD]/10" />

      <div className="relative mx-auto max-w-6xl">

        {/* HEADER */}
      <div className="mb-16 text-center">
  <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-md border border-[#004DFD]/25 bg-[#004DFD]/[0.06] text-[#004DFD] dark:border-[#004DFD]/40 dark:bg-[#004DFD]/10 dark:text-[#8EA7FF]">
    <span>⚙️</span>
    Multi-Layered Architectural Audit
  </div>

  <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
    The LIONXE™{" "}
    <span className="text-[#004DFD] ">
      Audit Pipeline
    </span>
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-600 dark:text-slate-300">
    Every project must advance through{" "}
    <span className="font-bold text-white">
      four foundational dimensions
    </span>{" "}
 in a strict, unyielding sequence, where each subsequent pillar is built directly upon the structural integrity of its predecessor.
   <span className=" mx-auto ml-2 mt-4 max-w-2xl text-base font-semibold leading-7 text-slate-700 dark:text-slate-300">
    <span className="rounded-lg border border-red-300/40 bg-red-50 px-2 py-1 text-red-700 dark:border-red-400/25 dark:bg-red-400/[0.08] dark:text-red-300">
       One failure collapses the entire structure.
    </span>
  </span>
  
  </p>

 

  <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-500 dark:text-slate-400">
    Configure the gates below and run the simulation to see how the LIONXE approval system responds.
  </p>
</div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">

          {/* ── PIPELINE ───────────────────────────────────────────── */}
          <div className="flex flex-col gap-0">

            {/* Entry node */}
            <div className="mb-1 flex justify-center">
              <div className="flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 dark:border-white/20 dark:bg-white/[0.05] dark:text-slate-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#004DFD] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#004DFD]" />
                </span>
                Project Submitted for Audit
              </div>
            </div>

            {/* Entry connector */}
            <PipeConnector flowing={particleOn} prevStatus="passed" />

            {/* Gates */}
            {STAGES.map((stage, i) => (
              <div key={stage.id}>
                <StageGate stage={stage} status={statuses[i]} isActive={activeIdx === i} />
                {i < STAGES.length - 1 && (
                  <PipeConnector
                    flowing={particleOn && activeIdx > i}
                    prevStatus={statuses[i]}
                  />
                )}
              </div>
            ))}

            {/* Exit connector + outcome */}
            {outcome !== "none" && (
              <>
                <PipeConnector flowing={outcome === "verified"} prevStatus={outcome === "verified" ? "passed" : "failed"} />
                <OutcomeNode outcome={outcome} />
              </>
            )}
          </div>

          {/* ── SIDEBAR ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-5">

            {/* Gate configurator */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Configure Gates
              </p>
              <p className="mb-5 text-xs text-slate-500 dark:text-slate-500">
                Toggle each pillar then run the simulation.
              </p>

              <div className="space-y-3">
                {STAGES.map((stage, i) => {
                  const Icon = stage.icon;
                  const passes = gateConfig[i];
                  return (
                    <div
                      key={stage.id}
                      className={`
                        flex items-center gap-3 rounded-xl border p-3 transition-all duration-200
                        ${passes
                          ? "border-emerald-200 bg-emerald-50/60 dark:border-emerald-500/20 dark:bg-emerald-500/[0.06]"
                          : "border-red-200 bg-red-50/60 dark:border-red-500/20 dark:bg-red-500/[0.06]"
                        }
                      `}
                    >
                      {/* Icon */}
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: stage.lightBg }}
                      >
                        <Icon className="h-4 w-4" style={{ color: stage.color }} strokeWidth={2} />
                      </div>

                      {/* Label */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight truncate">
                          {stage.letter} — {stage.title}
                        </p>
                        <p className={`text-xs font-semibold mt-0.5 ${passes ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"}`}>
                          {passes ? "Will Pass" : "Will Fail"}
                        </p>
                      </div>

                      {/* Toggle */}
                      <button
                        disabled={isRunning}
                        onClick={() => toggleGate(i)}
                        aria-label={`Toggle ${stage.title} gate`}
                        className={`
                          relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full
                          border-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004DFD]
                          disabled:cursor-not-allowed disabled:opacity-50
                          ${passes
                            ? "border-emerald-500 bg-emerald-500"
                            : "border-red-400 bg-red-400"
                          }
                        `}
                      >
                        <span
                          className={`
                            inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm
                            transition-transform duration-300
                            ${passes ? "translate-x-7" : "translate-x-0.5"}
                          `}
                        >
                          {passes
                            ? <Check className="h-3 w-3 text-emerald-500" strokeWidth={3} />
                            : <X className="h-3 w-3 text-red-400" strokeWidth={3} />
                          }
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Prediction badge */}
              <div className={`
                mt-4 flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-bold
                ${anyFail
                  ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                  : "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                }
              `}>
                {anyFail
                  ? <><AlertTriangle className="h-4 w-4 shrink-0" /> Expected Outcome: REJECTED</>
                  : <><ShieldCheck className="h-4 w-4 shrink-0" /> Expected Outcome: LIONXE VERIFIED</>
                }
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              {/* PRIMARY: Run */}
              <button
                disabled={isRunning}
                onClick={() => runAudit(gateConfig)}
                className="
                  group flex items-center justify-center gap-3 rounded-xl px-5 py-4
                  text-base font-black text-white transition-all duration-200
                  bg-[#004DFD] shadow-lg shadow-[#004DFD]/30
                  hover:bg-[#003edb] hover:shadow-[#004DFD]/50 hover:-translate-y-0.5
                  active:scale-[0.98] active:shadow-sm
                  disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0
                "
              >
                {isRunning
                  ? <><Loader2 className="h-5 w-5 animate-spin" /> Running Simulation…</>
                  : <><Play className="h-5 w-5 fill-white transition-transform group-hover:scale-110" /> Run Audit Simulation</>
                }
              </button>

              {/* SECONDARY: Reset */}
              <button
                disabled={isRunning}
                onClick={() => { reset(); setGateConfig([true, true, true, true]); }}
                className="
                  flex items-center justify-center gap-2.5 rounded-xl border px-5 py-3.5
                  text-sm font-bold transition-all duration-200
                  border-slate-300 bg-white text-slate-700
                  hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5
                  active:scale-[0.98]
                  disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0
                  dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-300
                  dark:hover:border-white/25 dark:hover:bg-white/[0.08]
                "
              >
                <RotateCcw className="h-4 w-4" /> Reset All Gates
              </button>
            </div>

            {/* Live status tracker */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Live Gate Status
              </p>
              <div className="space-y-2">
                {STAGES.map((stage, i) => (
                  <SidebarRow key={stage.id} stage={stage} status={statuses[i]} isActive={activeIdx === i} />
                ))}
              </div>
            </div>

            {/* Iron rule callout */}
          
          </div>
          
        </div>
          <div className="mt-8 rounded-2xl border border-[#004DFD]/20 bg-[#004DFD]/[0.04] p-5 dark:border-[#004DFD]/30 dark:bg-[#004DFD]/[0.07]">
              <p className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">
                <span className="font-black text-[#004DFD]">The Iron Rule —</span>{" "}
                Each pillar builds on the previous. If <em>any</em> gate fails, the entire
                project is immediately rejected, regardless of prior performance.
              </p>
            </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGE GATE
// ─────────────────────────────────────────────────────────────────────────────

const StageGate = ({
  stage,
  status,
  isActive,
}: {
  stage: typeof STAGES[0];
  status: StageStatus;
  isActive: boolean;
}) => {
  const Icon = stage.icon;

  const borderColor = {
    pending: "border-slate-200 dark:border-white/10",
    active:  "border-[#004DFD]/60",
    passed:  "border-emerald-300 dark:border-emerald-500/50",
    failed:  "border-red-400 dark:border-red-500/60",
    skipped: "border-slate-200 dark:border-white/[0.07]",
  }[status];

  const bgColor = {
    pending: "bg-white dark:bg-white/[0.03]",
    active:  "bg-white dark:bg-white/[0.06]",
    passed:  "bg-white dark:bg-white/[0.05]",
    failed:  "bg-red-50/60 dark:bg-red-500/[0.06]",
    skipped: "bg-slate-50/80 dark:bg-white/[0.02]",
  }[status];

  const letterColor = {
    pending: { bg: "rgba(148,163,184,0.1)", text: "#94A3B8" },
    active:  { bg: stage.lightBg, text: stage.color },
    passed:  { bg: "rgba(16,185,129,0.1)", text: "#10B981" },
    failed:  { bg: "rgba(239,68,68,0.1)", text: "#EF4444" },
    skipped: { bg: "rgba(148,163,184,0.06)", text: "#CBD5E1" },
  }[status];

  const statusBadge = {
    pending: { icon: <Clock   className="h-4 w-4" />, label: "Pending",    cls: "text-slate-400" },
    active:  { icon: <Loader2 className="h-4 w-4 animate-spin" />, label: "Analyzing…", cls: "text-[#004DFD]" },
    passed:  { icon: <CheckCircle2 className="h-4 w-4" />, label: "Passed",    cls: "text-emerald-500" },
    failed:  { icon: <XCircle className="h-4 w-4" />, label: "Failed",    cls: "text-red-500" },
    skipped: { icon: <Clock   className="h-4 w-4 opacity-40" />, label: "Skipped",   cls: "text-slate-300 dark:text-slate-600" },
  }[status];

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm
        transition-all duration-500
        ${borderColor} ${bgColor}
        ${status === "skipped" ? "opacity-35" : "opacity-100"}
        ${isActive ? "shadow-lg" : "shadow-sm"}
        sm:p-6
      `}
      style={
        isActive
          ? { boxShadow: `0 0 0 1px ${stage.color}50, 0 8px 28px ${stage.glow}` }
          : undefined
      }
    >
      {isActive && (
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{ background: `linear-gradient(135deg, ${stage.color}, transparent 70%)` }} />
      )}
      {status === "failed" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red-500/[0.04] to-transparent" />
      )}

      <div className="relative flex items-center gap-4 sm:gap-5">
        {/* Letter badge */}
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl font-black transition-all duration-500 ${stage.letter.length > 1 ? "h-14 w-14 text-lg" : "h-14 w-14 text-2xl"}`}
          style={{ backgroundColor: letterColor.bg, color: letterColor.text }}
        >
          {stage.letter}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <span
            className="block text-[10px] font-black uppercase tracking-[0.18em] mb-0.5 transition-colors duration-300"
            style={{
              color: status === "active" ? stage.color
                   : status === "passed" ? "#10B981"
                   : status === "failed" ? "#EF4444"
                   : "#94A3B8",
            }}
          >
            {stage.subtitle}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl leading-tight">
            {stage.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400 line-clamp-2">
            {status === "passed" ? stage.passNote
           : status === "failed" ? stage.failNote
           : stage.question}
          </p>
        </div>

        {/* Status */}
        <div className={`flex shrink-0 flex-col items-center gap-1 ${statusBadge.cls}`}>
          {statusBadge.icon}
          <span className="text-[10px] font-black uppercase tracking-wider">{statusBadge.label}</span>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PIPE CONNECTOR
// ─────────────────────────────────────────────────────────────────────────────

const PipeConnector = ({
  flowing,
  prevStatus,
}: {
  flowing: boolean;
  prevStatus: StageStatus;
}) => {
  const lineColor =
    prevStatus === "passed" ? "rgba(16,185,129,0.55)"
    : prevStatus === "failed" ? "rgba(239,68,68,0.4)"
    : "rgba(148,163,184,0.2)";

  return (
    <div className="relative mx-auto flex h-10 w-10 flex-col items-center justify-center overflow-visible">
      <div className="absolute h-full w-px transition-colors duration-500" style={{ backgroundColor: lineColor }} />

      {flowing && (
        <div
          className="absolute h-2.5 w-2.5 rounded-full bg-[#004DFD]"
          style={{
            boxShadow: "0 0 10px 3px rgba(0,77,253,0.55)",
            animation: "pipeFlow 0.9s ease-in-out infinite",
          }}
        />
      )}

      <svg className="absolute bottom-0 z-10" width="12" height="7" viewBox="0 0 12 7" fill="none">
        <path
          d="M1 1l5 4.5 5-4.5"
          stroke={
            prevStatus === "passed" ? "#10B981"
            : prevStatus === "failed" ? "#EF4444"
            : "#CBD5E1"
          }
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          opacity={prevStatus === "passed" || prevStatus === "failed" ? 0.85 : 0.3}
        />
      </svg>

      <style jsx>{`
        @keyframes pipeFlow {
          0%   { top: 5%;  opacity: 0;   }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 88%; opacity: 0;   }
        }
      `}</style>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// OUTCOME NODE
// ─────────────────────────────────────────────────────────────────────────────

const OutcomeNode = ({ outcome }: { outcome: "none" | "verified" | "rejected" }) => {
  if (outcome === "none") return null;
  const ok = outcome === "verified";
  return (
    <div className="mt-1 flex justify-center">
      <div
        className={`
          flex items-center gap-3 rounded-2xl border px-8 py-4 text-base font-black transition-all duration-500
          ${ok
            ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300"
            : "border-red-300 bg-red-50 text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300"
          }
        `}
        style={{
          boxShadow: ok
            ? "0 0 0 1px rgba(16,185,129,0.3), 0 8px 32px rgba(16,185,129,0.15)"
            : "0 0 0 1px rgba(239,68,68,0.3), 0 8px 32px rgba(239,68,68,0.15)",
        }}
      >
        {ok
          ? <><ShieldCheck className="h-6 w-6 shrink-0" /> LIONXE VERIFIED — Project Approved</>
          : <><AlertTriangle className="h-6 w-6 shrink-0" /> PROJECT REJECTED — Standard Not Met</>
        }
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SIDEBAR ROW
// ─────────────────────────────────────────────────────────────────────────────

const SidebarRow = ({
  stage, status, isActive,
}: {
  stage: typeof STAGES[0];
  status: StageStatus;
  isActive: boolean;
}) => {
  const color = status === "passed" ? "text-emerald-500"
              : status === "failed" ? "text-red-500"
              : status === "active" ? "text-[#004DFD]"
              : "text-slate-300 dark:text-slate-600";

  const label = { pending:"Pending", active:"Analyzing", passed:"Passed ✓", failed:"Failed ✗", skipped:"Skipped" }[status];

  return (
    <div className={`flex items-center gap-3 rounded-xl px-3 py-2 transition-all duration-300
      ${isActive ? "bg-[#004DFD]/[0.06] dark:bg-[#004DFD]/[0.1]" : ""}
      ${status === "failed" ? "bg-red-50/80 dark:bg-red-500/[0.07]" : ""}
      ${status === "passed" ? "bg-emerald-50/80 dark:bg-emerald-500/[0.06]" : ""}
    `}>
      <span className="text-sm font-black" style={{ color: stage.color }}>{stage.letter}</span>
      <p className="flex-1 min-w-0 truncate text-sm font-semibold text-slate-800 dark:text-slate-200">{stage.title}</p>
      <span className={`text-xs font-bold shrink-0 ${color}`}>{label}</span>
    </div>
  );
};

export default LionxeAuditPipeline;