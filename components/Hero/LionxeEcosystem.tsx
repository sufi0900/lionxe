"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, ExternalLink, Sparkles, MonitorCheck, Layers, Globe } from "lucide-react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// PLATFORM DATA
// ─────────────────────────────────────────────────────────────────────────────

const PLATFORMS = {
  sufian: {
    id: "sufian",
    name: "Sufian Mustafa",
    role: "Founder & Strategic Architect",
    shortRole: "Founder",
    description:
      "Sufian Mustafa is the founder and strategic mind behind LIONXE and Do It With AI Tools. His work spans SEO strategy, AI-powered content systems, and digital quality frameworks — all built around long-term value and integrity.",
    url: "https://sufianmustafa.com",
    ctaText: "View Portfolio",
    logoSrc: "/s3.png",
    color: "#5B8CFF",
    bgColor: "#F1F5F9",
    darkBgColor: "#1E293B",
    lightBg: "rgba(30, 41, 59, 0.06)",
    logoPlaceholder: "SM",
    imageBg: "bg-gradient-to-br from-slate-700 to-slate-900",
    screenshot: "/sufianmustafa-ss.png",
  },
  lionxe: {
    id: "lionxe",
    name: "LIONXE",
    role: "Quality Framework",
    shortRole: "Framework",
    description:
      "LIONXE is the core quality framework used to audit and evaluate digital assets. It enforces standards across logic, optimization, integrity, and execution across articles, tools, websites, and strategies.",
    url: "https://lionxe.com",
    ctaText: "Explore Framework",
    color: "#004DFD",
    bgColor: "#F0F9FF",
    logoSrc: "/logoForHeader.png",
    darkBgColor: "rgba(0, 77, 253, 0.15)",
    lightBg: "rgba(0, 77, 253, 0.08)",
    logoPlaceholder: "LX",
    imageBg: "bg-gradient-to-br from-blue-900 to-slate-900",
    screenshot: "/lionxe-ss.png",
  },
  doitwithai: {
    id: "doitwithai",
    name: "Do It With AI Tools",
    role: "AI SEO Content Hub",
    shortRole: "Content Hub",
    description:
      "A practical platform applying LIONXE standards to AI SEO content creation. Demonstrates the framework in action with real digital architecture focused on long-term authority and search visibility.",
    url: "https://doitwithai.tools",
    ctaText: "Visit Platform",
    color: "#5271ff",
    bgColor: "#F0F9FF",
    darkBgColor: "rgba(8, 145, 178, 0.15)",
    lightBg: "rgba(8, 145, 178, 0.08)",
    logoPlaceholder: "AI",
    logoSrc: "/do.png",
    imageBg: "bg-gradient-to-br from-indigo-800 to-slate-900",
    screenshot: "/doitwithai-ss.png",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────


const LionxeEcosystem = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden py-24 px-4
        bg-white dark:bg-[#050B1F]
        sm:px-6 lg:px-8 lg:py-32
      "
    >
      {/* Background decoration texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.01] dark:opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[400px] rounded-full bg-[#004DFD]/4 blur-[120px] dark:bg-[#004DFD]/8"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── HEADER ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-md border-[#004DFD]/20 bg-[#004DFD]/[0.05] text-[#004DFD] dark:border-[#004DFD]/30 dark:bg-[#004DFD]/10 dark:text-[#7CA0FF]">
            <Network className="h-4 w-4" />
            Connected Ecosystem
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-slate-800 dark:text-slate-200">
              One Mind.
            </span>
            <br />
            <span className="text-[#014FFD]">
              One Framework.
            </span>
            <br />
            <span className="text-[#5271ff]">
              One Living Proof.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            A complete look at how strategist Sufian Mustafa engineered the LIONXE™ framework and uses its strict standards to build high-authority, real-world digital projects like Do It With AI Tools.
          </p>
        </motion.div>

        {/* ── DESKTOP: NETWORK LAYOUT ───────────────────────── */}
        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-6xl py-6">
            
            {/* Connection SVG Layers */}
            <svg
              className="pointer-events-none absolute inset-0 z-20 h-full w-full"
              viewBox="0 0 1000 700"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lineToLionxe" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#475569" stopOpacity="0.3" />
                  <stop offset="70%" stopColor="#004DFD" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#004DFD" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="lineToDoitwithai" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#475569" stopOpacity="0.3" />
                  <stop offset="70%" stopColor="#0891B2" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0891B2" stopOpacity="1" />
                </linearGradient>

                <marker
                  id="arrowToLionxe"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="5"
                  orient="auto"
                >
                  <path d="M1,1.5 L7.5,5 L1,8.5" fill="none" stroke="#004DFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </marker>

                <marker
                  id="arrowToHub"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="5"
                  orient="auto"
                >
                  <path d="M1,1.5 L7.5,5 L1,8.5" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </marker>

                <marker
                  id="arrowFlowDown"
                  markerWidth="12"
                  markerHeight="12"
                  refX="6"
                  refY="9"
                  orient="auto"
                >
                  <path d="M2,3 L6,9 L10,3" fill="none" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>

                <filter id="lineGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Central Active Origin Point Anchor */}
              <circle cx="300" cy="350" r="4" fill="#64748B" className="opacity-70" />
              <circle cx="300" cy="350" r="10" fill="none" stroke="#64748B" strokeWidth="1" className="opacity-25" />

              {/* 1. Sufian ➔ LIONXE */}
              <path
                d="M 300 350 C 420 240, 520 140, 692 140"
                fill="none"
                stroke="url(#lineToLionxe)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 5"
                markerEnd="url(#arrowToLionxe)"
                filter="url(#lineGlow)"
                className="ecosystem-line-flow"
              />

              {/* 2. Sufian ➔ Do It With AI Tools */}
              <path
                d="M 300 350 C 420 460, 520 560, 692 560"
                fill="none"
                stroke="url(#lineToDoitwithai)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 5"
                markerEnd="url(#arrowToHub)"
                filter="url(#lineGlow)"
                className="ecosystem-line-flow flow-delay-1"
              />

              {/* 3. LIONXE ➔ Do It With AI Tools */}
              <path
                d="M 870 300 L 870 430"
                fill="none"
                stroke="#004DFD"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 5"
                markerEnd="url(#arrowFlowDown)"
                filter="url(#lineGlow)"
                className="ecosystem-line-flow flow-delay-2"
              />

              <style jsx>{`
                .ecosystem-line-flow {
                  animation: strokeAnimate 30s linear infinite;
                }
                .flow-delay-1 {
                  animation-delay: 3s;
                }
                .flow-delay-2 {
                  animation-delay: 6s;
                }
                @keyframes strokeAnimate {
                  to {
                    stroke-dashoffset: -120;
                  }
                }
              `}</style>
            </svg>

            {/* Proportional Grid Layer Layout */}
            <div className="relative z-10 grid min-h-[700px] grid-cols-[30%_40%_30%] grid-rows-2 items-center">
              {/* LEFT COLUMN CENTER: Sufian Mustafa */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, x: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-start-1 row-span-2"
              >
                <PlatformCard platform={PLATFORMS.sufian} />
              </motion.div>

              {/* TOP RIGHT: LIONXE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-start-3 row-start-1 pb-20 relative"
              >
                <PlatformCard platform={PLATFORMS.lionxe} />

                {/* Curved Connector Line: LIONXE ➔ DoItWithAI */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                  style={{ bottom: "-96px", height: "160px", zIndex: 30 }}
                >
                  <svg
                    width="70"
                    height="140"
                    viewBox="0 0 70 140"
                    fill="none"
                    overflow="visible"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#004DFD" stopOpacity="1" />
                        <stop offset="100%" stopColor="#0891B2" stopOpacity="1" />
                      </linearGradient>

                      <filter id="connectorGlow" x="-30%" y="-20%" width="160%" height="150%">
                        <feGaussianBlur stdDeviation="1.3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <path
                      d="M 35 0 C 58 38, 58 82, 35 120"
                      fill="none"
                      stroke="#004DFD"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="7 6"
                      opacity="0.25"
                    />

                    <path
                      d="M 35 0 C 58 38, 58 82, 35 120"
                      fill="none"
                      stroke="url(#connectorGrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="7 6"
                      filter="url(#connectorGlow)"
                      className="connector-flow"
                    />

                    <path
                      d="M 25 121 L 30 132 L 45 121"
                      fill="none"
                      stroke="#0891B2"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#connectorGlow)"
                    />

                    <style jsx>{`
                      .connector-flow {
                        animation: connectorFlow 6s linear infinite;
                      }
                      @keyframes connectorFlow {
                        from { stroke-dashoffset: 0; }
                        to { stroke-dashoffset: -44; }
                      }
                    `}</style>
                  </svg>
                </div>
              </motion.div>

              {/* BOTTOM RIGHT: Do It With AI Tools */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-start-3 row-start-2 pt-20"
              >
                <PlatformCard platform={PLATFORMS.doitwithai} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── MOBILE: VERTICAL STACK ─────────────────────────────────── */}
        <div className="flex flex-col gap-10 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PlatformCard platform={PLATFORMS.sufian} />
          </motion.div>

          <MobileConnector label="Creates & Defines" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PlatformCard platform={PLATFORMS.lionxe} />
          </motion.div>

          <MobileConnector label="Powers" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PlatformCard platform={PLATFORMS.doitwithai} />
          </motion.div>
        </div>

        {/* ── STRATEGIC VERTICAL CONNECTOR BRIDGE ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-col items-center justify-center"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#004DFD] to-[#004DFD]" />
          
          <div className="inline-flex items-center gap-2 rounded-full border border-[#004DFD]/30 bg-[#004DFD]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#004DFD] dark:text-[#7CA0FF]">
            <Sparkles className="h-3.5 w-3.5" /> Live Cross-Platform Architecture
          </div>
          
          <div className="h-10 w-px bg-gradient-to-b from-[#004DFD] via-[#004DFD] to-transparent" />
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* PROGRAMMATIC 3-SCREENSHOT BROWSER SHOWCASE FRAME                   */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-2 relative mx-auto max-w-6xl"
        >
          {/* Master Glassmorphic Frame */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 p-4 shadow-2xl dark:border-white/15 dark:bg-[#080F21] sm:p-6">
            
            {/* Top Browser Bar Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Unified Platform Operating View
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-300 border border-white/10">
                <MonitorCheck className="h-3.5 w-3.5 text-[#004DFD]" />
                <span>3 Active Platform Deployments</span>
              </div>
            </div>

            {/* 3-COLUMN PROGRAMMATIC GRID COMPOSITION */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
              {Object.values(PLATFORMS).map((item, idx) => (
                <div
                  key={item.id}
                  className={`
                    group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500
                    ${item.id === "lionxe" 
                      ? "border-[#004DFD]/50 bg-slate-950/90 md:-translate-y-2 md:shadow-2xl md:shadow-[#004DFD]/20 z-20" 
                      : "border-white/10 bg-slate-950/60 hover:border-white/20 z-10"}
                  `}
                >
                  {/* Window Inner URL Bar */}
                  <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 border-b border-white/10 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5 truncate">
                      <Globe className="h-3 w-3 shrink-0 text-slate-500" />
                      <span className="truncate" style={{ color: item.color || "#004DFD" }}>
                        {item.url.replace("https://", "")}
                      </span>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-slate-500 hover:text-white transition-colors"
                      title={`Visit ${item.name}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Screenshot Canvas Holder */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.screenshot}
                      alt={`${item.name} Platform Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={idx === 1}
                    />

                    {/* Gradient Fade Overlay on Bottom of Images */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Window Bottom Badge */}
                  <div className="mt-auto p-3.5 border-t border-white/5 bg-slate-900/40">
                    <p className="text-xs font-bold text-white flex items-center justify-between">
                      <span>{item.name}</span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded" style={{ backgroundColor: item.lightBg, color: item.color || "#004DFD" }}>
                        {item.shortRole}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Global Status Bar */}
            <div className="mt-6 flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/10 p-3 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#004DFD] text-white">
                  <Layers className="h-4 w-4" />
                </div>
                <span className="font-semibold text-slate-200">
                  LIONXE™ Architectural Engine: <span className="text-[#5B8CFF]">Enforcing Uniform Quality Across All Nodes</span>
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── BOTTOM FOOTNOTE ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-700 dark:text-slate-300">
              One founder.
            </span>{" "}
            One framework.{" "}
            <span className="font-bold text-slate-700 dark:text-slate-300">
              Infinite impact.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PLATFORM CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface PlatformCardProps {
  platform: typeof PLATFORMS.sufian;
}

const PlatformCard = ({ platform }: PlatformCardProps) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl border
        backdrop-blur-xl transition-all duration-500
        border-slate-200 bg-white shadow-lg
        hover:shadow-2xl hover:-translate-y-1
        dark:border-white/10 dark:bg-white/[0.04]
      "
    >
      {/* IMAGE HEADER */}
      <div
        className={`
          relative h-52 w-full overflow-hidden
          ${platform.imageBg}
          border-b border-slate-200 dark:border-white/5
        `}
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute left-1/2 top-1/2 h-40 w-40
            -translate-x-1/2 -translate-y-1/2 rounded-full
            bg-white/15 blur-2xl
          "
        />

        <div className="relative z-10 flex h-full w-full items-center justify-center p-6 sm:p-8">
          <Image
            src={platform.logoSrc}
            alt={`${platform.name} Logo`}
            width={320}
            height={180}
            className="
              h-auto max-h-[120px] w-full max-w-[240px]
              object-contain
              transition-transform duration-700
              group-hover:scale-105
              sm:max-h-[200px] sm:max-w-[260px]
            "
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10" />
      </div>

      {/* CARD CONTENT BODY */}
      <div className="p-6">
        <div
          className="
            pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full
            opacity-[0.08] transition-all duration-500 group-hover:scale-150 group-hover:opacity-[0.15]
            dark:opacity-[0.12]
          "
          style={{ backgroundColor: platform.color || "#004DFD" }}
        />

        <div className="relative">
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: platform.lightBg,
              color: platform.color || "#004DFD",
            }}
          >
            {platform.role}
          </div>

          <h3 className="mb-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
            {platform.name}
          </h3>

          <p className="mb-5 text-xs leading-6 text-slate-600 dark:text-slate-300 sm:text-sm sm:leading-6">
            {platform.description}
          </p>

          {platform.url && (
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold transition-colors hover:underline"
              style={{ color: platform.color || "#004DFD" }}
            >
              {platform.ctaText}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}

          <div
            className="mt-4 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
            style={{ backgroundColor: platform.color || "#004DFD" }}
          />
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE CONNECTOR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface MobileConnectorProps {
  label: string;
}

const MobileConnector = ({ label }: MobileConnectorProps) => {
  return (
    <div className="flex justify-center">
      <div className="relative flex h-20 flex-col items-center justify-center gap-2">
        <div
          className="absolute h-full w-px"
          style={{
            backgroundImage: "linear-gradient(to bottom, #004DFD 50%, transparent 50%)",
            backgroundSize: "1px 10px",
            opacity: 0.3,
          }}
        />

        <div
          className="absolute h-2.5 w-2.5 rounded-full bg-[#004DFD]"
          style={{
            boxShadow: "0 0 10px 2px rgba(0,77,253,0.4)",
            animation: "flowDownMobile 2.5s ease-in-out infinite",
          }}
        />

        <div className="absolute top-1/2 -translate-y-1/2 -right-[140px] z-10">
          <span className="inline-block text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
            {label}
          </span>
        </div>

        <svg className="relative z-10" width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M1 1l7 7 7-7" stroke="#004DFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </svg>

        <style jsx>{`
          @keyframes flowDownMobile {
            0% { top: 0%; opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LionxeEcosystem;