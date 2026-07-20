/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2, Search, Brain, PenTool, Layers3,
  Globe2, ArrowRight, ExternalLink,
  Quote, Star, Cpu, MapPin, GraduationCap,
  ChevronRight, Building2, Terminal, Mail,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const SKILLS = [
  {
    category: "Founder & Strategist",
    icon: Building2,
    color: "#5271ff",
    lightBg: "rgba(82,113,255,0.08)",
    items: [
      "Digital ecosystem architecture",
      "Multi-platform content orchestration",
      "Sustainable business growth systems",
      "Brand positioning & authority tracking",
    ],
  },
  {
    category: "AI Strategist",
    icon: Cpu,
    color: "#7C3AED",
    lightBg: "rgba(124,58,237,0.08)",
    items: [
      "Human-AI workflow engineering",
      "Prompt engineering & workflow design",
      "Freemium AI tool optimization",
      "AI visibility integration strategy",
    ],
  },
  {
    category: "Full-Stack Developer",
    icon: Code2,
    color: "#0891B2",
    lightBg: "rgba(8,145,178,0.08)",
    items: [
      "Next.js application development",
      "Sanity CMS architecture",
      "Technical SEO & code optimization",
      "Performance & edge deployment",
    ],
  },
  {
    category: "SEO Expert",
    icon: Search,
    color: "#10B981",
    lightBg: "rgba(16,185,129,0.08)",
    items: [
      "AI-powered search visibility",
      "Topical authority mapping",
      "On-page & technical site audits",
      "Search intent architecture",
    ],
  },
  {
    category: "Content Architect",
    icon: PenTool,
    color: "#D97706",
    lightBg: "rgba(217,119,6,0.08)",
    items: [
      "Search-optimized editorial systems",
      "Multi-channel content repurposing",
      "Structured data & meta optimization",
      "Value-first documentation workflows",
    ],
  },
  {
    category: "Framework Architect",
    icon: Brain,
    color: "#EC4899",
    lightBg: "rgba(236,72,153,0.08)",
    items: [
      "LIONXE™ quality framework design",
      "Digital asset audit methodology",
      "Ecosystem validation standards",
      "Systematic evaluation engines",
    ],
  },
];

const TIMELINE = [
  {
    year: "The Silence",
    label: "Consuming, Not Creating",
    description:
      "Scrolling through execution breakdowns from elite builders. Inspired, but recognizing the need for deep, undeniable technical expertise before trying to lead a conversation online.",
    isNegative: true,
  },
  {
    year: "The Transition",
    label: "The Radical Choice",
    description:
      "Stepping away from surface-level networking with one strict mandate: 'I will not build a public footprint until I have built a platform of authentic value.' The start of isolated development.",
    isNegative: false,
  },
  {
    year: "Deep Building",
    label: "Code & Technical SEO Alone",
    description:
      "Months spent diagnosing stack errors, mapping databases, and teaching himself modern Next.js, Sanity CMS, and crawling mechanics from the ground up. Zero outsourcing, total accountability.",
    isNegative: false,
  },
  {
    year: "The Breakthrough",
    label: "The AI Copilot Philosophy",
    description:
      "As programmatic AI scaled, choosing a different approach: studying AI systems not as hands-off text spinners, but as precision co-pilots engineered to amplify human creative output and strategic depth.",
    isNegative: false,
  },
  {
    year: "The Launch",
    label: "Do It With AI Tools™ Is Born",
    description:
      "Bringing the content hub online. A comprehensive technical asset optimized for search, built from scratch to show creators, marketers, and founders how to scale visibility safely and sustainably.",
    isNegative: false,
  },
  {
    year: "Systemization",
    label: "The LIONXE™ Standard",
    description:
      "Codifying the hard-learned lessons of isolated software building and content strategy into a structural audit framework. Moving past the standard 80% mark to engineered excellence.",
    isNegative: false,
  },
];

const PLATFORMS = [
  {
    id: "lionxe",
    name: "LIONXE™",
    role: "Framework & Quality Standard",
    desc: "The formal evaluation system built to benchmark digital assets across distinct execution gates, eliminating shortcuts at the foundational level.",
    href: "/framework",
    color: "#5271ff",
    lightBg: "rgba(82,113,255,0.07)",
    initials: "LX",
  },
  {
    id: "doitwithai",
    name: "Do It With AI Tools™",
    role: "AI SEO Knowledge Hub",
    desc: "The production ecosystem showcasing the balance of AI scale and human intuition. Features practical guides, deep tech reviews, and a Free AI Resources Hub.",
    href: "https://doitwithai.tools",
    color: "#0891B2",
    lightBg: "rgba(8,145,178,0.07)",
    initials: "AI",
    external: true,
  },
  {
    id: "personal",
    name: "Ecosystem Channels",
    role: "Cross-Platform Insights",
    desc: "Distributing technical insights across LinkedIn, Dev.to, GitHub, and YouTube, backed by long-form case studies and an exclusive newsletter network.",
    href: "#channels",
    color: "#1E293B",
    lightBg: "rgba(30,41,59,0.07)",
    initials: "EP",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const FounderPage = () => {
  const sec2Ref = useRef<HTMLElement>(null);
  const sec3Ref = useRef<HTMLElement>(null);
  const sec5Ref = useRef<HTMLElement>(null);

  const sec2InView = useInView(sec2Ref, { once: true, margin: "-80px" });
  const sec3InView = useInView(sec3Ref, { once: true, margin: "-80px" });
  const sec5InView = useInView(sec5Ref, { once: true, margin: "-80px" });

  return (
    <main className="bg-white dark:bg-[#050B1F]">

      {/* ═══════════════════════════════════════════════════════════
          §1 HERO — Identity & Positioning
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#050B1F] via-[#0A0F1E] to-[#050B1F]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_40%,rgba(82,113,255,0.15),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_60%,rgba(124,58,237,0.08),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px]">
            
            {/* Copy Block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-widest border-[#5271ff]/40 bg-[#5271ff]/10 text-[#829aff]">
                <Globe2 className="h-5 w-5" />
                Founder & AI Strategist
              </div>

              <h1 className="mb-5 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Sufian<br />
                <span className="text-[#5271ff]">Mustafa</span>
              </h1>

              <p className="mb-6 text-xl font-semibold leading-8 text-slate-300">
                Founder · Developer · AI Strategist · SEO Expert ·{" "}
                <span className="text-[#829aff]">Digital Ecosystem Architect</span>
              </p>

              <p className="mb-8 max-w-xl text-base leading-7 text-slate-400">
                Building the intersections of human creative intuition and modern algorithmic visibility. 
                Architect of the LIONXE™ quality framework and founder of Do It With AI Tools™.
              </p>

              {/* Identity Details */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: MapPin, label: "Islamabad / Rawalpindi, PK" },
                  { icon: GraduationCap, label: "MSc Computer Science · AWKUM" },
                  { icon: Layers3, label: "Do It With AI Tools™" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-300">
                    <Icon className="h-4 w-4 text-[#829aff]" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto w-full max-w-sm"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl aspect-[4/5]"
                style={{ background: "linear-gradient(135deg,#0A1635 0%,#1A254C 50%,#0A1635 100%)" }}>
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#5271ff]/40 bg-[#5271ff]/15 text-5xl font-black text-[#829aff]">
                    SM
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Sufian Mustafa Portfolio Visual
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §2 THE COMEBACK NARRATIVE — Core Journey
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec2Ref}
        className="relative px-4 py-20 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Comeback Story
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Stepping out of the crowd to construct an ecosystem built on pure technical proof.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Narrative Image / Quote Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={sec2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65 }}
              className="lg:sticky lg:top-24"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-white/10 dark:bg-white/[0.03]">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=640&fit=crop"
                  alt="Focused product development workflow representing deep platform setup"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-[#5271ff]/20 bg-[#5271ff]/[0.03] p-6 dark:border-[#5271ff]/30 dark:bg-[#5271ff]/[0.06]">
                <Quote className="mb-3 h-7 w-7 text-[#5271ff]" />
                <p className="text-base italic leading-7 text-slate-700 dark:text-slate-300">
                  "I promised myself not to contribute noise to the digital landscape. I wanted to return only when I had built a verified engine of performance."
                </p>
                <p className="mt-3 text-sm font-bold text-[#5271ff]">
                  — The Commitment to Real Execution
                </p>
              </div>
            </motion.div>

            {/* Narrative Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={sec2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="space-y-6 text-base leading-7 text-slate-700 dark:text-slate-300"
            >
              <p>
                Before launching his platform networks, Sufian Mustafa chose a period of absolute platform quiet. 
                Watching the transition of search trends, marketing playbooks, and automated noise, he recognized a clear problem: 
                <strong className="font-semibold text-slate-900 dark:text-white"> anyone can use tools to populate pages, but very few understand the strategy beneath them.</strong>
              </p>

              <p>
                Instead of jumping directly into content distribution, he paused his broader public channels. No ongoing updates. 
                No superficial guides. He committed to deep development workflows: building out a custom tech foundation, refining manual 
                and programmatic architecture, and tracking live visibility models.
              </p>

              <p>
                This resulted in months of focused technical execution. Teaching himself the precise mechanics of 
                <strong className="font-semibold text-slate-900 dark:text-white"> Next.js architectures, edge optimization, and Sanity CMS node setups</strong>, 
                he engineered an isolated digital hub without outsourcing a single element of code or design.
              </p>

              <p>
                When conversational AI shifted the digital ecosystem, Sufian rejected standard mass-automation templates. He recognized that 
                AI is a profound accelerator for <strong className="font-semibold text-[#5271ff]">amplifying human creativity and clarifying complex SEO structures</strong>, 
                not an outright substitute for original insight. This exact philosophy forms the core backbone of his entire operational strategy today.
              </p>

              <p>
                The resulting flagship model, <strong className="font-semibold text-slate-900 dark:text-white">Do It With AI Tools™</strong>, 
                grew into an exhaustive knowledge engine offering deep technical audits, comprehensive guides, and curated resources designed to guide 
                businesses and creators toward authentic, growth-focused visibility.
              </p>

              <p>
                Through this process, the standard was set. True asset quality is not achieved at a comfortable 80% completion point. 
                It requires the final, meticulous 20% where code optimization, strict topical authority, and system performance intersect. This realization is 
                precisely what birthed the formal <strong className="font-semibold text-slate-900 dark:text-white">LIONXE™ Quality Framework</strong>.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §3 EXPERT TIMELINE
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec3Ref}
        className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Progression Framework
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Moving from initial observations to full system integration
            </p>
          </div>

          <div className="relative">
            {/* Spine */}
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-slate-300 via-[#5271ff]/40 to-emerald-400 dark:from-white/10 dark:via-[#5271ff]/40 dark:to-emerald-500/50 sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => {
                const isRight = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isRight ? -20 : 20 }}
                    animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex items-start gap-8 pl-14 sm:pl-0 ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  >
                    {/* Block Content */}
                    <div className="w-full sm:w-[calc(50%-2rem)]">
                      <div className={`rounded-2xl border p-6 ${
                        item.isNegative
                          ? "border-red-200 bg-red-50/60 dark:border-red-500/20 dark:bg-red-500/[0.04]"
                          : i === TIMELINE.length - 1
                          ? "border-emerald-200 bg-emerald-50/60 dark:border-emerald-500/20 dark:bg-emerald-500/[0.05]"
                          : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
                      }`}>
                        <p className="mb-1 text-xs font-black uppercase tracking-widest text-[#5271ff]">
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

                    {/* Spine Indicator */}
                    <div className="absolute left-4 top-6 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#5271ff] dark:border-[#0A0F1E] sm:left-1/2 sm:-translate-x-1/2">
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
          §4 SKILLS ARCHITECTURE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Ecosystem Engineering Disciplines
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A comprehensive technical toolkit across six strategic layers.
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
                    className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
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
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: skill.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §5 INTERCONNECTED PLATFORMS
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sec5Ref}
        className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto mb-14 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=400&fit=crop"
              alt="Interconnected framework visualization map representing clean system integration"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
          <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
            <strong>Architecture Mapping:</strong> Visualizing the continuous optimization pipeline from LIONXE™ to platform production.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              The Core Engine
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Three operational models powered by the exact same quality standard.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PLATFORMS.map((platform, i) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 24 }}
                animate={sec5InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black text-white transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.initials}
                </div>

                <div
                  className="mb-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: platform.lightBg, color: platform.color }}
                >
                  {platform.role}
                </div>

                <h3 className="mb-3 text-2xl font-extrabold text-slate-900 dark:text-white">
                  {platform.name}
                </h3>

                <p className="mb-6 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {platform.desc}
                </p>

                <a
                  href={platform.href}
                  target={platform.external ? "_blank" : undefined}
                  rel={platform.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:underline"
                  style={{ color: platform.color }}
                >
                  Explore Layer
                  {platform.external ? <ExternalLink className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </a>

                <div className="mt-5 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: platform.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §6 DISTRIBUTION LAYER & CHANNELS
      ═══════════════════════════════════════════════════════════ */}
      <section id="channels" className="relative px-4 py-20 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              Multi-Platform Ecosystem Nodes
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              How technical insights, codebase distributions, and search strategies scale across networks.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "LinkedIn & Profiles", detail: "Authentic long-form case studies detailing AI strategy, content metrics, and core engine setups.", icon: Globe2 },
              { title: "Dev.to & GitHub", detail: "Sharing custom open component schemas, technical SEO implementations, and modern web solutions.", icon: Terminal },
              { title: "YouTube & Video Content", detail: "Step-by-step optimization walkthroughs, visual product reviews, and prompt engineering architecture.", icon: Cpu },
              { title: "TikTok & Reels", detail: "Highly engaging, clear breakdowns of freemium AI capabilities and productivity optimizations.", icon: Layers3 },
              { title: "Email Newsletters", detail: "Direct delivery of engineered search configurations and premium automation frameworks.", icon: Mail },
              { title: "Platform Hubs", detail: "Cross-repurposing deep editorial analysis on Medium and highly structured visual assets on Pinterest.", icon: Search },
            ].map((chan) => {
              const Icon = chan.icon;
              return (
                <div key={chan.title} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="mb-3 inline-flex p-2 bg-slate-100 rounded-lg dark:bg-white/5 text-[#5271ff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 font-bold text-slate-900 dark:text-white text-base">{chan.title}</h4>
                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">{chan.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          §7 GOVERNING PHILOSOPHY
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-20 bg-slate-900 dark:bg-[#040810] sm:px-6 lg:px-8 lg:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(82,113,255,0.12),transparent)]" />

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
                  body: "Every computational tool in this framework is leveraged to scale velocity, not mask a lack of perspective. AI sharpens analytical research, but target parameters and ultimate standard curation remain completely human.",
                  color: "#5271ff",
                },
                {
                  title: "Shortcuts Decay Growth",
                  body: "Isolated backend development proves one structural constant: systems relying entirely on unoptimized programmatic loops inevitably break. Sustainable search authority demands deliberate architecture.",
                  color: "#7C3AED",
                },
                {
                  title: "Technical Quality as the Only Metric",
                  body: "In a digital landscape facing limitless generative page generation, genuine structural depth stands as the ultimate competitive hedge. True quality resists quick replication.",
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
          §8 CTA CONVERSION LAYER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-24 bg-gradient-to-br from-[#5271ff] to-[#3a56cf] sm:px-6 lg:px-8 lg:py-32">
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
              Analyze the framework protocols, access premium guides inside our Free Resource Hub, or explore live application deployments.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/framework"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-4 text-base font-black text-[#5271ff] transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
              >
                Explore LIONXE™ Framework
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="https://doitwithai.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border-2 border-white bg-transparent px-7 py-4 text-base font-black text-white transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Access AI Content Hub
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-12 text-sm font-semibold text-blue-100">
              Ecosystem Engine Core · Active Development Framework · Islamabad / Rawalpindi
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default FounderPage;