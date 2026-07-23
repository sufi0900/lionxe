/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code2, Search, Brain, PenTool, Layers3,
  Globe2, ArrowRight, ExternalLink,
  Quote, Star, Cpu, MapPin, GraduationCap,
  ChevronRight, Building2, Terminal, Mail,
  CheckCircle, ShieldCheck, Scale, Zap, Database, Layers,
  MonitorCheck, Globe,
  Sparkles
} from "lucide-react";
import LionxePipelineInfographic from "../framework/LionxePipelineInfographic";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const BRAND_BLUE = "#004DFD";

// ─────────────────────────────────────────────────────────────────────────────
// DATA: FOUNDATIONAL DISCIPLINES THAT SHAPED LIONXE™
// (Search Visibility & AI-Augmented Web Systems Focus)
// ─────────────────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    category: "Digital Systems Architecture",
    icon: Code2,
    color: "#004DFD",
    lightBg: "rgba(0, 77, 253, 0.08)",
    items: [
      "Decoupled frontend & backend web systems",
      "Server-side rendering & edge delivery logic",
      "Headless CMS structured data schemas",
      "High-performance caching & state distribution",
    ],
  },
  {
    category: "Search Visibility Engineering",
    icon: Search,
    color: "#10B981",
    lightBg: "rgba(16, 185, 129, 0.08)",
    items: [
      "Holistic SEO (Technical, On-Page & Off-Page)",
      "AI Search Visibility (GEO & AEO indexing)",
      "Entity graphing & Schema.org knowledge mapping",
      "Crawl budget & duplication risk auditing",
    ],
  },
  {
    category: "AI-Augmented Development Workflows",
    icon: Cpu,
    color: "#7C3AED",
    lightBg: "rgba(124, 58, 237, 0.08)",
    items: [
      "AI-assisted code generation & debugging",
      "Human-AI workflow & prompt chain design",
      "Rapid platform scaffolding & execution",
      "System-level evaluation of automated code",
    ],
  },
  {
    category: "Content Systems & Knowledge Architecture",
    icon: PenTool,
    color: "#D97706",
    lightBg: "rgba(217, 119, 6, 0.08)",
    items: [
      "Topical authority & hub-and-spoke cluster modeling",
      "Semantic intent & multi-audience content mapping",
      "Compliance-aware editorial & claim verification",
      "Multi-channel content publishing pipelines",
    ],
  },
  {
    category: "LIONXE™ Audit Engineering",
    icon: Brain,
    color: "#EC4899",
    lightBg: "rgba(236, 72, 251, 0.08)",
    items: [
      "16-criterion multi-gate rubric execution",
      "Cascade failure & non-negotiable blocking rules",
      "Unverified claim & digital manipulation detection",
      "Evidence-based asset certification standards",
    ],
  },
  {
    category: "Growth Systems Strategy & Authority",
    icon: Building2,
    color: "#0891B2",
    lightBg: "rgba(8, 145, 178, 0.08)",
    items: [
      "Interconnected platform ecosystem orchestration",
      "Compounding digital authority & brand positioning",
      "Sustainable organic growth & funnel optimization",
      "Cross-disciplinary strategy & performance alignment",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DATA: CHRONOLOGICAL PROGRESSION
// ─────────────────────────────────────────────────────────────────────────────
const TIMELINE = [
  {
    year: "Academic Foundation",
    label: "MCS & Systems Mindset",
    description:
      "Graduating top of class in computer science studies (MCS at AWKUM). Discovering web development in a Web Fundamentals class and writing raw HTML in Notepad, establishing a foundational cause-and-effect understanding of web systems.",
    isNegative: false,
  },
  {
    year: "Manual Engineering",
    label: "Full-Stack Development Sprint",
    description:
      "Months of manual problem solving across HTML, CSS, JavaScript, Bootstrap, React, and MERN stack architectures. Building early platforms completely from scratch to gain deep codebase intuition.",
    isNegative: false,
  },
  {
    year: "Architecture Shift",
    label: "Next.js & Sanity CMS Adoption",
    description:
      "Recognizing the performance and visibility limitations of standard SPA React apps. Transitioning to Next.js server-side rendering, Sanity headless CMS, and structured data architecture for search-ready execution.",
    isNegative: false,
  },
  {
    year: "18-Month Isolation",
    label: "Deep Building & Platform Creation",
    description:
      "Stepping away from public noise to execute an 18-month solo build phase under severe resource constraints. Engineering Do It With AI Tools™ from scratch while testing advanced caching, Redis, and Cloudflare edge delivery as an AI-Augmented Web Systems Builder.",
    isNegative: false,
  },
  {
    year: "Market Testing",
    label: "Agency Experience & System Audits",
    description:
      "Executing search visibility, content, and multi-location search operations across international agency client environments. Conducting deep research into an 87-site network, uncovering duplicate content, doorway page risks, and unverified trust claims.",
    isNegative: false,
  },
  {
    year: "LIONXE™ Codification",
    label: "The Universal Standard",
    description:
      "Formalizing hard-earned lessons from systems engineering and agency audits into the 4-pillar, 16-criterion LIONXE™ Quality Framework — a rigid governance standard built to eliminate digital shortcuts.",
    isNegative: false,
  },
  {
    year: "Ecosystem Expansion",
    label: "Global Framework Governance",
    description:
      "Positioning LIONXE™ and digital growth architectures for enterprise environments, brands, and digital assets requiring unshakeable technical standards and complete search visibility.",
    isNegative: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DATA: INTERCONNECTED PLATFORM NODES (3 Core Deployments)
// ─────────────────────────────────────────────────────────────────────────────
const PLATFORMS = [
  {
    id: "personal",
    name: "sufianmustafa.com",
    role: "Founder Portfolio & Identity",
    desc: "The central authority node presenting Sufian's technical journey, systems architecture breakdowns, code repositories, and professional engagements.",
    href: "https://sufianmustafa.com",
    url: "https://sufianmustafa.com",
    color: "#5B8CFF",
    lightBg: "rgba(91, 140, 255, 0.12)",
    external: true,
    screenshot: "/sufianmustafa-ss.png",
  },
  {
    id: "lionxe",
    name: "LIONXE™ Standard",
    role: "Universal Quality Standard",
    desc: "The 4-pillar audit framework that evaluates entities across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
    href: "/framework",
    url: "https://lionxe.com",
    color: "#004DFD",
    lightBg: "rgba(0, 77, 253, 0.15)",
    external: false,
    screenshot: "/lionxe-ss.png",
  },
  {
    id: "doitwithai",
    name: "Do It With AI Tools™",
    role: "AI SEO Knowledge Engine",
    desc: "The live production platform demonstrating LIONXE™ standards in operation. Features practical AI SEO workflows, prompt engineering, and structured guides.",
    href: "https://doitwithai.tools",
    url: "https://doitwithai.tools",
    color: "#5271FF",
    lightBg: "rgba(82, 113, 255, 0.12)",
    external: true,
    screenshot: "/doitwithai-ss.png",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN FOUNDER CLIENT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function FounderClient() {
  const sec2Ref = useRef<HTMLElement>(null);
  const sec3Ref = useRef<HTMLElement>(null);
  const sec5Ref = useRef<HTMLElement>(null);

  const sec2InView = useInView(sec2Ref, { once: true, margin: "-80px" });
  const sec3InView = useInView(sec3Ref, { once: true, margin: "-80px" });
  const sec5InView = useInView(sec5Ref, { once: true, margin: "-80px" });

  return (
    <main className="bg-white text-slate-900 dark:bg-[#050B1F] dark:text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          §1 HERO — IDENTITY & POSITIONING
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#050B1F] via-[#0A0F1E] to-[#050B1F]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_40%,rgba(0,77,253,0.15),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_400px]">
            
            {/* Copy Block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-[#004DFD]/40 bg-[#004DFD]/10 text-[#5B8CFF]">
                <Globe2 className="h-4 w-4" />
                Growth Systems Architect & Search Visibility Strategist
              </div>

              <h1 className="mb-5 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Sufian<br />
                <span className="text-[#004DFD]">Mustafa</span>
              </h1>

              <p className="mb-6 text-xl font-semibold leading-8 text-slate-300">
                Founder · Growth Systems Architect ·{" "}
                <span className="text-[#5B8CFF]">Search Visibility Strategist</span> ·{" "}
                <span className="text-[#8EA7FF]">AI-Augmented Web Systems Builder</span>
              </p>

              <p className="mb-8 max-w-xl text-base leading-7 text-slate-400">
                Creator of the LIONXE™ Universal Quality Framework and founder of{" "}
                <a 
                  href="https://doitwithai.tools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#5B8CFF] font-semibold hover:underline"
                >
                  Do It With AI Tools™
                </a>. Documenting systems architecture and digital insights on{" "}
                <a 
                  href="https://sufianmustafa.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#5B8CFF] font-semibold hover:underline"
                >
                  sufianmustafa.com
                </a>. Engineering the intersection of AI-augmented web systems, search visibility across traditional and AI search engines, and unyielding quality standards.
              </p>

              {/* Key Identity Badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: GraduationCap, label: "MSc Computer Science · AWKUM" },
                  { icon: ShieldCheck, label: "Creator of LIONXE™ Standard" },
                  { icon: Terminal, label: "AI-Augmented Web Systems Builder" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-slate-300">
                    <Icon className="h-4 w-4 text-[#5B8CFF]" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual Headshot Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group mx-auto w-full max-w-sm"
            >
              {/* Ambient Outer Glow Layer */}
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-[#004DFD] via-[#3B82F6] to-[#004DFD] opacity-50 blur-xl transition-all duration-500 group-hover:opacity-80" />

              {/* Main Card Container */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#004DFD]/50 bg-slate-900 p-3 shadow-[0_0_35px_rgba(0,77,253,0.35)] aspect-[4/5]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-800">
                  <Image
                    src="/sufian-mustafa.png"
                    alt="Sufian Mustafa — Growth Systems Architect & Creator of LIONXE"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#050B1F]/90 p-3 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="h-5 w-5 text-[#004DFD] shrink-0" />
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-wider text-[#5B8CFF]">Creator & Author</p>
                      <p className="text-xs font-bold text-white">LIONXE™ Quality Standard</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §2 THE CREATION OF LIONXE™
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec2Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#004DFD]">
              The Origin Narrative
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Why I Built LIONXE™
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Moving from observing digital fragility to engineering a universal governance framework.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Visual Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={sec2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65 }}
              className="lg:sticky lg:top-24"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-3 shadow-2xl dark:border-white/10">
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <LionxePipelineInfographic />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#004DFD]/20 bg-[#004DFD]/[0.03] p-6 dark:border-[#004DFD]/30 dark:bg-[#004DFD]/[0.06]">
                <Quote className="mb-3 h-7 w-7 text-[#004DFD]" />
                <p className="text-base italic leading-7 text-slate-700 dark:text-slate-300">
                  "I watched entire website networks collapse after core algorithm updates because they relied on doorway pages, thin AI copy, and unverified customer claims. Quality is not an opinion — it is a structural requirement."
                </p>
                <p className="mt-3 text-sm font-bold text-[#004DFD]">
                  — Sufian Mustafa, Creator of LIONXE™
                </p>
              </div>
            </motion.div>

            {/* Narrative Body */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={sec2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="space-y-6 text-base leading-7 text-slate-700 dark:text-slate-300"
            >
              <p>
                The seed for <strong className="font-semibold text-slate-900 dark:text-white">LIONXE™</strong> was planted during my work evaluating digital assets across corporate agencies and international search markets. While analyzing a network of over 87 service websites, I uncovered a pervasive vulnerability: businesses were manufacturing short-term visibility using near-duplicate location pages, unnatural keyword repetition, and exaggerated customer statistics.
              </p>

              <p>
                When search algorithms updated or platform enforcement struck, these fragile setups experienced sudden, catastrophic collapses. The market offered no objective standard to evaluate whether a platform, strategy, or codebase was actually built to last.
              </p>

              <p>
                I refused to participate in short-term digital noise. Entering a focused <strong className="font-semibold text-[#004DFD]">18-month isolation build phase</strong>, I honed my capabilities as an AI-augmented web systems builder, mastering Next.js server-side rendering, Sanity CMS schema design, Redis caching, and Cloudflare edge delivery. I engineered{" "}
                <a 
                  href="https://doitwithai.tools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-[#004DFD] hover:underline"
                >
                  Do It With AI Tools™
                </a>{" "}
                from scratch — using it as a live, real-world laboratory to test long-term search visibility across both traditional search engines and generative AI answer engines.
              </p>

              <p>
                From those combined engineering lessons and audit discoveries, I codified <strong className="font-semibold text-slate-900 dark:text-white">LIONXE™</strong> — a rigid, 4-pillar evaluation framework that evaluates any entity across 16 precise criteria. LIONXE™ enforces non-negotiable failure rules: a single breach of integrity or structural flaw immediately disqualifies the asset.
              </p>

              <p>
                Today, LIONXE™ serves as the overarching governance engine for all my platforms, including my personal hub{" "}
                <a 
                  href="https://sufianmustafa.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-[#004DFD] hover:underline"
                >
                  sufianmustafa.com
                </a>, ensuring that every asset, code release, and content strategy operates under permanent, compounding value logic.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §3 CHRONOLOGICAL PROGRESSION TIMELINE
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec3Ref}
        className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Architectural Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The evolution from manual web development to universal framework creation.
            </p>
          </div>

          <div className="relative">
            {/* Central Vertical Spine */}
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-slate-300 via-[#004DFD]/40 to-emerald-400 dark:from-white/10 dark:via-[#004DFD]/40 dark:to-emerald-500/50 sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => {
                const isRight = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isRight ? -20 : 20 }}
                    animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative flex items-start gap-8 pl-14 sm:pl-0 ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  >
                    {/* Content Box */}
                    <div className="w-full sm:w-[calc(50%-2rem)]">
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                        <p className="mb-1 text-xs font-black uppercase tracking-widest text-[#004DFD]">
                          {item.year}
                        </p>
                        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                          {item.label}
                        </h3>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Node Dot */}
                    <div className="absolute left-4 top-6 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#004DFD] dark:border-[#0A0F1E] sm:left-1/2 sm:-translate-x-1/2">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>

                    <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §4 FOUNDATIONAL DISCIPLINES (SHAPING LIONXE™)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Foundational Engineering Disciplines
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              The enduring core competencies and strategic pillars that shaped the creation of the LIONXE™ Quality Framework.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div
                    className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: skill.lightBg }}
                  >
                    <Icon className="h-7 w-7" style={{ color: skill.color }} strokeWidth={2} />
                  </div>

                  <h3 className="mb-4 text-lg font-extrabold text-slate-900 dark:text-white">
                    {skill.category}
                  </h3>

                  <ul className="space-y-2.5">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <Star className="mt-0.5 h-4 w-4 shrink-0" style={{ color: skill.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-5 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §5 INTERCONNECTED PLATFORMS ENGINE (PROGRAMMATIC SHOWCASE)
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec5Ref}
        className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004DFD]/30 bg-[#004DFD]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#004DFD] dark:text-[#5B8CFF]">
              <Sparkles className="h-3.5 w-3.5" /> Interconnected Ecosystem Architecture
            </div>
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Three Core Nodes
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Three operational properties built, deployed, and governed under one unshakeable quality standard.
            </p>
          </div>

          {/* Master Glassmorphic Interconnected Nodes Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sec5InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto max-w-6xl"
          >
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

              {/* 3-COLUMN PROGRAMMATIC GRID WITH STRATEGIC CONNECTION ARROWS */}
              <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
                {PLATFORMS.map((item, idx) => (
                  <div key={item.id} className="relative flex flex-col">
                    
                    {/* Strategic Connecting Flow Arrow (Card 1 ➔ Card 2 & Card 2 ➔ Card 3) */}
                    {idx < 2 && (
                      <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center justify-center">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full border border-[#004DFD]/50 bg-[#050B1F] text-[#5B8CFF] shadow-lg shadow-[#004DFD]/30 backdrop-blur-md animate-pulse">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Node Card */}
                    <div
                      className={`
                        group relative flex flex-col h-full overflow-hidden rounded-2xl border transition-all duration-500
                        ${item.id === "lionxe" 
                          ? "border-[#004DFD] bg-slate-950/90 shadow-2xl shadow-[#004DFD]/20 z-20 ring-1 ring-[#004DFD]/50" 
                          : "border-white/10 bg-slate-950/60 hover:border-white/20 z-10"}
                      `}
                    >
                      {/* Window URL Bar */}
                      <div className="flex items-center justify-between bg-slate-900/90 px-3.5 py-2.5 border-b border-white/10 text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5 truncate">
                          <Globe className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                          <span className="truncate" style={{ color: item.color || "#004DFD" }}>
                            {item.url.replace("https://", "")}
                          </span>
                        </div>
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="shrink-0 text-slate-500 hover:text-white transition-colors"
                          title={`Explore ${item.name}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>

                      {/* Screenshot Viewport Container */}
                      <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden bg-slate-950">
                        <Image
                          src={item.screenshot}
                          alt={`${item.name} Platform Preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          priority={idx === 0}
                        />

                        {/* Bottom Gradient Fade */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                      </div>

                      {/* Content Overlay Footer */}
                      <div className="mt-auto p-4 border-t border-white/10 bg-slate-900/80">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-white">
                            {item.external ? (
                              <a 
                                href={item.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-[#5B8CFF] transition-colors"
                              >
                                {item.name}
                              </a>
                            ) : (
                              <Link href={item.href} className="hover:text-[#5B8CFF] transition-colors">
                                {item.name}
                              </Link>
                            )}
                          </span>
                          <span
                            className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded"
                            style={{ backgroundColor: item.lightBg, color: item.color || "#004DFD" }}
                          >
                            {item.role}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Bottom Ecosystem Governance Status Bar */}
              <div className="mt-6 flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/10 p-3.5 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#004DFD] text-white shrink-0">
                    <Layers className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-slate-200">
                    LIONXE™ Governance Core: <span className="text-[#5B8CFF]">Enforcing Uniform Quality Across Personal, Framework & AI Hub Deployments</span>
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §6 GOVERNING PHILOSOPHY
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-20 bg-slate-900 dark:bg-[#040810] sm:px-6 lg:px-8 lg:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,77,253,0.12),transparent)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-10 text-4xl font-extrabold text-white sm:text-5xl">
              The Governing Philosophy
            </h2>

            <div className="mb-12 space-y-5 text-left">
              {[
                {
                  title: "AI is Amplification — Not Replacement",
                  body: "Every computational tool in this framework is leveraged to scale velocity, not mask a lack of strategy. AI sharpens research speed, but target parameters and ultimate standard curation remain strictly human.",
                  color: "#004DFD",
                },
                {
                  title: "Shortcuts Decay; Architecture Compounds",
                  body: "Analyzing hundreds of search footprints proves one structural constant: systems relying on unoptimized programmatic loops inevitably collapse. Sustainable digital authority demands deliberate architecture.",
                  color: "#7C3AED",
                },
                {
                  title: "Integrity as a Structural Requirement",
                  body: "In an ecosystem saturated with generative noise and exaggerated claims, absolute transparency (Pillar N) stands as the ultimate competitive hedge.",
                  color: "#D97706",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md"
                  style={{ borderLeftColor: p.color, borderLeftWidth: "4px" }}
                >
                  <h3 className="mb-3 text-xl font-bold text-white">{p.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{p.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §7 TERMINAL CTA LAYER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-24 bg-gradient-to-br from-[#004DFD] to-[#0038cb] sm:px-6 lg:px-8 lg:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">
              Systems Engineered to Perform.<br />Built for Strategic Authority.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-blue-100">
              Analyze the 16 scoring criteria inside the rubric or explore live platform deployments operating under LIONXE™ governance on{" "}
              <a 
                href="https://doitwithai.tools" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline font-bold hover:text-white"
              >
                Do It With AI Tools™
              </a>.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/rubric"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-4 text-base font-black text-[#004DFD] transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
              >
                Study Full Rubric
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="https://sufianmustafa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border-2 border-white bg-transparent px-7 py-4 text-base font-black text-white transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Founder Portfolio (sufianmustafa.com)
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-12 text-xs font-semibold uppercase tracking-widest text-blue-100 opacity-80">
              Sufian Mustafa · Growth Systems Architect & Search Visibility Strategist · Creator of LIONXE™
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}