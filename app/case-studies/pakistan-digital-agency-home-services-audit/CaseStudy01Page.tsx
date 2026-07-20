"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileWarning,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronDown,
  Shield,
  Target,
  TrendingUp,
  Brain,
  Gauge,
  Sparkles,
  ArrowRight,
  Flag,
  Lightbulb,
  BookOpen,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES & DATA
// ─────────────────────────────────────────────────────────────────────────────

interface Criterion {
  id: string;
  name: string;
  score: number;
  blocking: boolean;
  evidence: string;
}

interface PillarData {
  code: string;
  name: string;
  governingLaw: string;
  total: number;
  grade: string;
  criteria: Criterion[];
}

const SCORE_LABELS: Record<number, { label: string; color: string; bg: string }> = {
  0:  { label: "Absent",      color: "text-red-600 dark:text-red-400",       bg: "bg-red-500" },
  6:  { label: "Minimal",     color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500" },
  12: { label: "Partial",     color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-500" },
  18: { label: "Substantial", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500" },
  25: { label: "Complete",    color: "text-[#004DFD]",                       bg: "bg-[#004DFD]" },
};

function getScoreInfo(score: number) {
  return SCORE_LABELS[score] || SCORE_LABELS[6];
}

function getPillarGradeColor(total: number) {
  if (total < 25)  return { label: "CRITICAL",   color: "text-red-600 dark:text-red-400",       border: "border-red-500/30",     bg: "bg-red-500" };
  if (total < 50)  return { label: "NEEDS WORK", color: "text-orange-600 dark:text-orange-400", border: "border-orange-500/30",  bg: "bg-orange-500" };
  if (total < 75)  return { label: "ACCEPTABLE",  color: "text-yellow-600 dark:text-yellow-400", border: "border-yellow-500/30",  bg: "bg-yellow-500" };
  if (total < 90)  return { label: "STRONG",     color: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500" };
  return { label: "EXCELLENT", color: "text-[#004DFD]", border: "border-[#004DFD]/30", bg: "bg-[#004DFD]" };
}

const PILLAR_ICONS = { L: Brain, IO: Gauge, N: Shield, XE: Sparkles };

const AUDIT_META = {
  title: "Case Study 01",
  clientDescriptor: "Pakistan-Based Digital Agency (Anonymized)",
  industry: "US-Facing Home Services — Carpet & Rug Cleaning",
  auditor: "Sufian Mustafa",
  date: "June 2026",
  rubricVersion: "LIONXE Audit Rubric v1.0",
  outcome: "DOES NOT PASS",
  totalScore: 72,
  maxScore: 400,
};

const PILLARS: PillarData[] = [
  {
    code: "L", name: "Long-Term Logic", governingLaw: "The Post-Flood Collapse Rule",
    total: 6, grade: "CRITICAL",
    criteria: [
      { id: "L1", name: "Long-term vision", score: 6, blocking: false,
        evidence: "The company has no documented 5 to 10 year vision accessible to or referenced by its content and SEO team. Decisions observed throughout operations were consistently reactive, including creating new websites whenever a new geographic target was identified, adding content at volume to fill site templates, and changing content rules based on immediate problems rather than from a pre-existing strategy. The parent company (operating under a gaming brand name unrelated to home services) shows no coherent long-term narrative connecting its two business directions." },
      { id: "L2", name: "Sustainability of core strategy", score: 0, blocking: true,
        evidence: "The core strategy is explicitly built on hundreds of location-specific microsites designed to capture \"near me\" searches. This practice is classified by Google as a doorway page strategy, which Google's own webmaster guidelines identify as a violation of its spam policies. The entire revenue model depends on a tactic that Google has been actively targeting since 2015 and that becomes more vulnerable with every helpful content update. No durable foundation such as an owned audience, original research, or brand authority exists beneath this tactic." },
      { id: "L3", name: "Decision-making track record", score: 0, blocking: false,
        evidence: "Every significant decision reviewed prioritized short-term metric capture over long-term positioning. The company chose to create hundreds of thin websites rather than one authoritative domain. It allocated a team of two writers and two SEO professionals to manage this entire network, making quality impossible to sustain at scale. Content was being written to hit keyword density targets rather than to serve readers, which directly contradicts Google's E-E-A-T guidelines." },
      { id: "L4", name: "Risk awareness and contingency", score: 0, blocking: true,
        evidence: "No contingency plan was identified for the primary business risk, which is a Google algorithmic update or manual penalty applied to the doorway page network. The research explicitly identified this risk, including Google's ability to detect shared IP addresses, Google Analytics accounts, and Google Search Console ownership across hundreds of nominally separate domains. Despite this documented risk being raised during research, no alternative strategy or fallback was in place." },
    ],
  },
  {
    code: "IO", name: "Internal Optimization", governingLaw: "The Weakest Link Axiom",
    total: 24, grade: "CRITICAL",
    criteria: [
      { id: "IO1", name: "Technical foundation", score: 6, blocking: false,
        evidence: "Service pages were found containing dummy placeholder content on live published URLs, including repeated filler text that had not been replaced before the pages went live. This indicates a deployment process with no quality gate before publishing. With hundreds of websites to maintain and a team of four, systematic technical auditing of page speed, mobile responsiveness, and core web vitals across all pages is not feasible." },
      { id: "IO2", name: "Content and copy quality", score: 6, blocking: false,
        evidence: "Keyword stuffing was a documented recurring problem, with primary keywords appearing 20 to 28 times per article against a standard of 12 to 15. Specific examples of unnatural keyword placement were identified. These errors required multiple correction cycles rather than being avoided through clear initial guidelines. Content was also being duplicated across multiple sites with minor variations, creating thin content risk across the network." },
      { id: "IO3", name: "Design and user experience consistency", score: 6, blocking: false,
        evidence: "The same design templates were applied across hundreds of websites with only location names changed. The template may be uniform, but its application across hundreds of sites with live dummy content, varying states of completion, and no systematic review means the actual user experience is inconsistent and often unfinished. Customers landing on different sites would encounter different stages of completion." },
      { id: "IO4", name: "Completeness of supporting elements", score: 6, blocking: false,
        evidence: "NAP (Name, Address, Phone Number) consistency was identified as a specific risk. With hundreds of websites claiming different local addresses for the same or overlapping service areas, the NAP data across the network is inherently inconsistent, which directly harms local SEO performance. Meta descriptions, image alt text, and internal linking structures were not systematically managed, and the team size makes full completion across all sites implausible." },
    ],
  },
  {
    code: "N", name: "Non-Negotiable Integrity", governingLaw: "The Cost-Indifferent Mandate",
    total: 18, grade: "CRITICAL",
    criteria: [
      { id: "N1", name: "Claim accuracy", score: 6, blocking: false,
        evidence: "Service pages contained statistical claims including \"30+ years experience,\" \"9000+ projects done,\" and \"3250+ happy customers.\" These figures were presented as factual claims without any sourcing, verification mechanism, or qualifying language. The research process involved creating multiple options for these counters, suggesting the numbers were chosen for persuasive effect rather than drawn from verified records. Claims of being a trusted local business in specific neighborhoods are also technically inaccurate since the operation is run remotely from Pakistan." },
      { id: "N2", name: "Regulatory and platform compliance", score: 6, blocking: false,
        evidence: "Banned terms were found in use during content creation, including \"professional help,\" \"certified,\" and \"chemical-free.\" These were identified and corrected during the research, indicating the team was not initially aware of US FTC advertising standards. The use of \"free pick-up and delivery\" directly contradicts the legal safety rule prohibiting the use of the word \"free.\" The fact that these issues required discovery and correction indicates no pre-existing compliance framework." },
      { id: "N3", name: "Transparency of terms", score: 6, blocking: false,
        evidence: "Customers visiting any of the company's US-facing service websites would have no way to determine that the business operates from Pakistan, that the parent company is a gaming company with no prior home services history, or that the local presence is being managed remotely. The DBA strategy is a legally accepted practice but the absence of any transparency about the actual operating entity creates an information gap between what customers believe and the actual service delivery model." },
      { id: "N4", name: "Absence of manipulative patterns", score: 0, blocking: true,
        evidence: "The core business model depends on creating hundreds of websites that appear to be independent local businesses but are in fact the same entity. This is documented in the research as a strategy intended to dominate search results by making Google show the same company multiple times for the same query. Google explicitly classifies this as a deceptive practice designed to manipulate search rankings. This is not a borderline case. It is the definitional example of manipulative search engine behavior." },
    ],
  },
  {
    code: "XE", name: "eXceptional Distinction", governingLaw: "The Commodity Threshold Law",
    total: 24, grade: "CRITICAL",
    criteria: [
      { id: "XE1", name: "Articulated value proposition", score: 6, blocking: false,
        evidence: "No specific, defensible value proposition was identified across the network. The most common positioning element found was \"30+ years experience,\" which is a claim any established competitor could also make and which was not independently verified. The company positions itself primarily through geographic targeting rather than through a genuine service or quality differentiator. Being local is not a value proposition when the business operates remotely." },
      { id: "XE2", name: "Brand identity", score: 6, blocking: false,
        evidence: "Hundreds of websites using the same template with only location names changed is the opposite of brand identity. No distinctive voice, tone, visual system, or editorial position exists that would allow a customer to recognize this company's content without a logo. The content was written to a technical specification rather than to a brand voice standard. The parent company name has no connection to the home services niche." },
      { id: "XE3", name: "Competitive differentiation in practice", score: 6, blocking: false,
        evidence: "The research explored differentiation angles including neighborhood references and local landmarks, but these were content tactics rather than genuine service differentiators. Every competitor in the rug cleaning niche also offers carpet cleaning, rug cleaning, water damage, and commercial services. No concrete element was identified that a competitor could not replicate within weeks." },
      { id: "XE4", name: "Evolution and relevance", score: 6, blocking: false,
        evidence: "The microsite strategy being used was identified in SEO research as a high-risk, declining approach as early as 2015 when Google introduced its doorway page algorithm. The company is running a strategy that the market has moved away from, and the internal research revealed the recommendation to transition to a hub-and-spoke authority model, which the company had not yet implemented." },
    ],
  },
];

const RECOMMENDATIONS = [
  {
    title: "Consolidate to a single authority domain immediately",
    criteria: ["L1", "L2", "L3"],
    body: "The single most impactful change available is to stop creating new microsites and redirect resources toward building one authoritative domain. Every dollar and hour currently being spent on new microsites accelerates the problem rather than solving it. A single domain with location pages following the /state/city/neighborhood URL structure captures all the same geographic targeting without the doorway page risk. This change addresses the L pillar blocking issue and removes the N4 integrity failure simultaneously.",
  },
  {
    title: "Create a genuine brand identity and value proposition before producing more content",
    criteria: ["XE1", "XE2"],
    body: "All content production should pause until one clear, defensible answer exists to the question: what does this company offer that a competitor cannot? This cannot be \"we are local\" when the operation is remote, and it cannot be \"30 years experience\" without verified evidence. The answer should come from the actual service delivery: the specific cleaning methods, the actual equipment used, the real results achieved for verified customers.",
  },
  {
    title: "Build a compliance and quality framework before scaling further",
    criteria: ["IO2", "N2"],
    body: "Before a single additional page is published, a one-document content standard should exist that covers every rule currently being communicated verbally or corrected after the fact. This includes the list of banned US legal terms, the keyword density rules with correctly formed examples, the NAP consistency standard for each location, and the minimum quality bar for any page going live.",
  },
];

const EXECUTIVE_SUMMARY = [
  "This audit evaluated a Pakistan-based digital agency running hundreds of US-facing home services websites. The findings reveal a business built entirely on short-term SEO tactics with no long-term strategy, no defensible brand, inconsistent quality, and a core operating model that Google classifies as a spam violation.",
  "The most critical finding is in the L pillar, which scored 6 out of 100. The company has no documented vision, no sustainable strategy, no record of long-term decision-making, and no contingency for the primary risk that threatens its entire revenue base. This is not a business with a few optimization gaps. It is a business built on a foundation that is structurally incompatible with lasting digital success.",
  "The N pillar finding at 18 out of 100 is also significant. The strategy of creating hundreds of sites to appear as multiple independent local businesses is a documented manipulation of search results. This is not a gray area. Google identifies it explicitly as a violation of its webmaster guidelines.",
  "The IO and XE pillars both score 24 out of 100, reflecting a business that prioritizes volume over quality and presence over distinction. Content is being produced to a technical specification rather than to a reader-first standard, and no genuine brand identity or competitive differentiator exists across the network.",
];

const METHODOLOGY_ITEMS = [
  { label: "Scoring scale per criterion", value: "0 (Absent), 6 (Minimal), 12 (Partial), 18 (Substantial), 25 (Complete)" },
  { label: "Criteria per pillar", value: "4 criteria × 25 points = 100 points maximum per pillar" },
  { label: "Grand total", value: "400 points across 4 pillars" },
  { label: "Passing threshold", value: "Any pillar below 15/100 = blocking issue, audit terminates" },
  { label: "Certification tiers", value: "0–199 Does Not Pass · 200–299 Below Threshold · 300–349 Conditional Pass · 350–379 Certified · 380–399 Gold · 400 Platinum" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function RadialScore({ score, max, size = 120, strokeWidth = 8 }: { score: number; max: number; size?: number; strokeWidth?: number }) {
  const pct = Math.round((score / max) * 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (pct / 100) * circumference;
  const gradeInfo = getPillarGradeColor(score);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-slate-200 dark:text-white/10" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={strokeWidth} strokeLinecap="round"
          className={gradeInfo.bg.replace("bg-", "text-")}
          stroke="currentColor"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: dashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute text-center">
        <span className="block text-2xl font-black text-slate-900 dark:text-white">{score}</span>
        <span className="block text-xs text-slate-500">/ {max}</span>
      </div>
    </div>
  );
}

function CriterionCard({ criterion }: { criterion: Criterion }) {
  const info = getScoreInfo(criterion.score);
  return (
    <div className={`rounded-2xl border p-6 ${criterion.blocking ? "border-red-300 bg-red-50/50 dark:border-red-500/30 dark:bg-red-500/[0.04]" : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02]"}`}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-[#004DFD]">{criterion.id}</p>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{criterion.name}</h4>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold ${info.color}`}>{info.label}</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1 text-lg font-black text-slate-900 dark:bg-white/[0.06] dark:text-white">
              {criterion.score}<span className="text-xs font-medium text-slate-400">/25</span>
            </span>
          </div>
          {criterion.blocking && (
            <span className="inline-flex items-center gap-1 rounded-md bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700 dark:bg-red-500/20 dark:text-red-400">
              <Flag className="h-3 w-3" /> BLOCKING
            </span>
          )}
        </div>
      </div>
      <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
        <strong className="font-semibold text-slate-700 dark:text-slate-300">Evidence:</strong> {criterion.evidence}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

const CaseStudy01Page = () => {
  const [methodologyOpen, setMethodologyOpen] = useState(false);
  const blockingCount = PILLARS.flatMap(p => p.criteria).filter(c => c.blocking).length;

  return (
    <main className="relative bg-white dark:bg-[#050B1F]">

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white px-4 py-24 dark:from-[#0A0F1E] dark:to-[#050B1F] sm:px-6 lg:px-8 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-widest border-[#004DFD]/30 bg-[#004DFD]/[0.06] text-[#004DFD] dark:border-[#004DFD]/40 dark:bg-[#004DFD]/10 dark:text-[#7CA0FF]">
            <FileWarning className="h-5 w-5" />
            LIONXE® Audit Report
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {AUDIT_META.industry}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-slate-600 dark:text-slate-400">
            {AUDIT_META.clientDescriptor} · {AUDIT_META.date} · {AUDIT_META.rubricVersion}
          </motion.p>

          {/* Outcome badge */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 inline-flex flex-col items-center gap-3 rounded-2xl border-2 border-red-300 bg-red-50 px-10 py-6 dark:border-red-500/40 dark:bg-red-500/[0.08]">
            <XCircle className="h-10 w-10 text-red-500" />
            <span className="text-2xl font-black tracking-wide text-red-700 dark:text-red-400">{AUDIT_META.outcome}</span>
            <span className="text-4xl font-black text-slate-900 dark:text-white">
              {AUDIT_META.totalScore} <span className="text-lg font-medium text-slate-500">/ {AUDIT_META.maxScore}</span>
            </span>
            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
              {blockingCount} blocking issue{blockingCount !== 1 ? "s" : ""} detected
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-slate-500 dark:text-slate-500">
            Audited by <strong className="font-semibold text-slate-700 dark:text-slate-300">{AUDIT_META.auditor}</strong> · LIONXE® Framework
          </motion.p>
        </div>
      </section>

      {/* ════════════════════ SCORE DASHBOARD ════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Pillar Score Overview</h2>
            <p className="text-base text-slate-600 dark:text-slate-400">Four pillars evaluated — all below the 15/100 passing threshold</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PILLARS.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.code as keyof typeof PILLAR_ICONS];
              const gradeInfo = getPillarGradeColor(pillar.total);
              const blockingHere = pillar.criteria.filter(c => c.blocking).length;
              return (
                <motion.div key={pillar.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center gap-6 rounded-2xl border p-6 ${gradeInfo.border} bg-white dark:bg-white/[0.02]`}>
                  <RadialScore score={pillar.total} max={100} size={100} strokeWidth={7} />
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-[#004DFD]" />
                      <span className="text-sm font-black uppercase tracking-wider text-[#004DFD]">{pillar.code}</span>
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">{pillar.name}</h3>
                    <p className={`mb-1 text-sm font-bold ${gradeInfo.color}`}>{gradeInfo.label}</p>
                    {blockingHere > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700 dark:bg-red-500/20 dark:text-red-400">
                        <Flag className="h-3 w-3" /> {blockingHere} blocking
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ AUDIT SCOPE ════════════════════ */}
      <section className="relative px-4 py-16 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-[#004DFD]" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Audit Scope</h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
              This audit evaluates the digital strategy, content operations, business model, and brand positioning of a Pakistan-based digital agency running multiple US-facing home services brands across carpet cleaning, rug cleaning, water damage restoration, and related niches. The company operates hundreds of location-specific websites targeting neighborhoods, cities, and states across the United States. Evidence was gathered through direct access to internal content strategy, published service pages, blog content, and extended operational observation.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════ PILLAR FINDINGS (×4) ════════════════════ */}
      {PILLARS.map((pillar, pillarIdx) => {
        const Icon = PILLAR_ICONS[pillar.code as keyof typeof PILLAR_ICONS];
        const gradeInfo = getPillarGradeColor(pillar.total);
        return (
          <section key={pillar.code} className={`relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 ${pillarIdx % 2 === 0 ? "bg-white dark:bg-[#050B1F]" : "bg-slate-50 dark:bg-[#0A0F1E]"}`}>
            <div className="mx-auto max-w-5xl">
              {/* Pillar header */}
              <div className="mb-12">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#004DFD]/10">
                    <Icon className="h-6 w-6 text-[#004DFD]" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#004DFD]">Pillar {pillar.code}</p>
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">{pillar.name}</h2>
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    <span className={`rounded-xl px-4 py-2 text-sm font-bold ${gradeInfo.color} ${gradeInfo.border} border`}>{gradeInfo.label}</span>
                    <span className="rounded-xl bg-slate-100 px-4 py-2 text-lg font-black text-slate-900 dark:bg-white/[0.06] dark:text-white">
                      {pillar.total}<span className="text-sm font-medium text-slate-400">/100</span>
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Governing Law: <strong className="font-semibold text-slate-700 dark:text-slate-400">{pillar.governingLaw}</strong>
                </p>
              </div>

              {/* Criterion cards */}
              <div className="space-y-6">
                {pillar.criteria.map((criterion) => (
                  <motion.div key={criterion.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                    <CriterionCard criterion={criterion} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ════════════════════ EXECUTIVE SUMMARY ════════════════════ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Executive Summary</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            {EXECUTIVE_SUMMARY.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </section>

      {/* ════════════════════ RECOMMENDATIONS ════════════════════ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Top 3 Recommendations</h2>
          </div>
          <div className="space-y-8">
            {RECOMMENDATIONS.map((rec, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#004DFD] text-2xl font-black text-white shadow-lg">{i + 1}</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{rec.title}</h3>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {rec.criteria.map((c) => (
                      <span key={c} className="rounded-md bg-[#004DFD]/10 px-2 py-0.5 text-xs font-bold text-[#004DFD]">{c}</span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{rec.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CASE STUDY NOTE ════════════════════ */}
      <section className="relative px-4 py-16 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#004DFD]/20 bg-[#004DFD]/[0.03] p-8 dark:border-[#004DFD]/20 dark:bg-[#004DFD]/[0.05]">
            <div className="mb-4 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-[#004DFD]" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">A Note on This Case Study</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <p>This audit was conducted with full internal access over an extended research period. It is presented here as an anonymized case study to illustrate how the LIONXE® Framework surfaces structural failures that are invisible from the outside but compounding in their damage over time.</p>
              <p>The company described in this audit is not unique. Hundreds of digital agencies in Pakistan, India, the Philippines, and elsewhere operate variations of this same model. The failures identified are industry-wide, not specific to one operator. The LIONXE® Framework provides a systematic lens for identifying these failures before they become irreversible.</p>
              <p>If you recognize your own business model in this case study, the first step is not a complete rebuild. It is an honest audit of where you currently stand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ METHODOLOGY ════════════════════ */}
      <section className="relative px-4 py-10 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <button onClick={() => setMethodologyOpen(!methodologyOpen)}
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 text-left transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]">
            <span className="text-base font-bold text-slate-900 dark:text-white">Scoring Methodology & Certification Tiers</span>
            <ChevronDown className={`h-5 w-5 text-[#004DFD] transition-transform duration-300 ${methodologyOpen ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {methodologyOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="space-y-4">
                    {METHODOLOGY_ITEMS.map((item, i) => (
                      <div key={i} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                        <span className="shrink-0 text-sm font-bold text-slate-900 dark:text-white sm:w-48">{item.label}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════════════ NAVIGATION ════════════════════ */}
      <section className="relative px-4 py-16 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a href="/framework" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.03]">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Explore</p>
                <p className="text-lg font-extrabold text-slate-900 dark:text-white">The LIONXE® Framework</p>
              </div>
              <ArrowRight className="h-5 w-5 text-[#004DFD]" />
            </a>
            <a href="/l" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.03]">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Deep Dive</p>
                <p className="text-lg font-extrabold text-slate-900 dark:text-white">L — The Logic Standard</p>
              </div>
              <ArrowRight className="h-5 w-5 text-[#004DFD]" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudy01Page;