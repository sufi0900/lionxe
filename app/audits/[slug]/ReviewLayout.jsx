

"use client";

import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import createReviewPortableTextComponents from "./createReviewPortableTextComponents";
import FAQSection from "@/app/ai-tools/[slug]/FAQSection";
  import CommentSection from '@/app/ai-tools/[slug]/CommentSection'; // Adjust path as needed
  import AuthorBioCard from '@/app/ai-tools/[slug]/AuthorBioCard'; // Adjust path as needed

// Icons
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  User,
  Shield,
  Brain,
  Gauge,
  Sparkles,
  CheckCircle2,
  XCircle,
  MinusCircle,
  ChevronDown,
  BookOpen,
  Zap,
  Share2,
  Printer,
} from "lucide-react";

// Lazy-loaded non-critical components (same pattern as BlogLayout)
// const FAQSection = lazy(() => import("./FAQSection"));
// const AuthorBioCard = lazy(() => import("./AuthorBioCard"));
// const CommentSection = lazy(() => import("./CommentSection"));
// const RelatedReviewsSection = lazy(() => import("./RelatedReviewsSection"));

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS & MAPPINGS
// ─────────────────────────────────────────────────────────────────────────────

const PILLAR_ICON_MAP = {
  L: Brain,
  IO: Gauge,
  N: Shield,
  XE: Sparkles,
};

const PILLAR_COLOR_MAP = {
  L: "#004DFD",
  IO: "#0066FF",
  N: "#7C3AED",
  XE: "#FACC15",
};

const VERDICT_COLOR_MAP = {
  "Structural Rejection": "#EF4444",
  "Conditional Pass": "#F59E0B",
  Certified: "#10B981",
  "Under Review": "#6B7280",
};

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const config = {
    PASSED: {
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
      border: "border-emerald-200 dark:border-emerald-500/25",
      text: "text-emerald-700 dark:text-emerald-300",
      Icon: CheckCircle2,
    },
    FAILED: {
      bg: "bg-red-50 dark:bg-red-500/10",
      border: "border-red-200 dark:border-red-500/25",
      text: "text-red-700 dark:text-red-300",
      Icon: XCircle,
    },
    CONDITIONAL: {
      bg: "bg-amber-50 dark:bg-amber-500/10",
      border: "border-amber-200 dark:border-amber-500/25",
      text: "text-amber-700 dark:text-amber-300",
      Icon: MinusCircle,
    },
  }[status] || {
    bg: "bg-slate-50 dark:bg-slate-500/10",
    border: "border-slate-200 dark:border-slate-500/25",
    text: "text-slate-700 dark:text-slate-300",
    Icon: MinusCircle,
  };

  const { Icon } = config;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5
        text-xs font-extrabold uppercase tracking-[0.2em]
        ${config.bg} ${config.border} ${config.text}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
};

const ScoreRing = ({ score, max, size = 80, strokeWidth = 5, color }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = score / max;
  const offset = circumference * (1 - pct);

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-slate-200 dark:text-white/10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="absolute text-base font-black text-slate-900 dark:text-white">
        {score}
      </span>
    </div>
  );
};

const SectionHeader = ({ number, title }) => (
  <div className="flex items-center gap-4">
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
      bg-[#004DFD]/10 text-sm font-black text-[#004DFD]
      dark:bg-[#004DFD]/15 dark:text-[#7CA0FF]"
    >
      {number}
    </span>
    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
      {title}
    </h2>
  </div>
);

const ComponentSkeleton = ({ height = "200px" }) => (
  <div
    className="animate-pulse rounded-lg bg-slate-200/60 dark:bg-slate-700/60"
    style={{ height }}
  />
);

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR SECTION (Expandable Accordion)
// ─────────────────────────────────────────────────────────────────────────────

const PillarSection = ({ pillar, expanded, onToggle }) => {
  const Icon = PILLAR_ICON_MAP[pillar.pillarKey] || Brain;
  const color = PILLAR_COLOR_MAP[pillar.pillarKey] || "#004DFD";
  const maxScore = 25;

  return (
    <div
      className="overflow-hidden rounded-2xl border transition-all
        border-slate-200 dark:border-white/10
        hover:border-[#004DFD]/30 dark:hover:border-[#004DFD]/30"
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-5 text-left transition-colors sm:p-6
          hover:bg-slate-50 dark:hover:bg-white/[0.02]"
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="h-6 w-6" style={{ color }} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="text-xs font-black uppercase tracking-[0.18em]"
              style={{ color }}
            >
              Pillar: {pillar.pillarKey}
            </span>
            <StatusBadge status={pillar.status} />
          </div>
          <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
            {pillar.title}
          </h3>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <ScoreRing
            score={pillar.score}
            max={maxScore}
            size={56}
            strokeWidth={4}
            color={color}
          />
        </div>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300
            ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expandable content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
          ${expanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="border-t border-slate-200 dark:border-white/10">
          <div className="space-y-6 p-5 sm:p-6">
            {/* Mobile score */}
            <div className="flex items-center gap-3 sm:hidden">
              <ScoreRing
                score={pillar.score}
                max={maxScore}
                size={56}
                strokeWidth={4}
                color={color}
              />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {pillar.score}/{maxScore} Points
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {Math.round((pillar.score / maxScore) * 100)}% compliance
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div
              className="rounded-xl border-l-4 py-3 pl-5 pr-4"
              style={{ borderColor: color }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Governing Law
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                {pillar.governingLaw}
              </p>
            </div>

            {/* Indicators Audited */}
            {pillar.indicatorsAudited?.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Indicators Audited
                </p>
                <div className="flex flex-wrap gap-2">
                  {pillar.indicatorsAudited.map((indicator, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-lg border px-3 py-1.5
                        text-xs font-medium
                        border-slate-200 bg-slate-50 text-slate-600
                        dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                    >
                      {indicator}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Analysis subtitle */}
            {pillar.subtitle && (
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {pillar.subtitle}
              </h4>
            )}

            {/* Analysis body */}
            <div className="space-y-4">
              {pillar.analysisBody?.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-8 text-slate-600 dark:text-slate-300"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN REVIEW LAYOUT
// ─────────────────────────────────────────────────────────────────────────────

export default function ReviewLayout({
  data,
  loading,
  relatedReviews,
  relatedLoading,
  onRefresh,
}) {
  const [mounted, setMounted] = useState(false);
  const [loadStage, setLoadStage] = useState(1);

  // Initialize all pillars as expanded
  const [expandedPillars, setExpandedPillars] = useState(() => {
    const initial = {};
    data?.pillars?.forEach((_, i) => {
      initial[i] = true;
    });
    return initial;
  });

  // Memoize PortableText components
  const portableTextComponents = useMemo(
    () => createReviewPortableTextComponents(),
    []
  );

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setLoadStage(2), 10);
    const t2 = setTimeout(() => setLoadStage(3), 50);
    const t3 = setTimeout(() => setLoadStage(4), 100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const togglePillar = (index) => {
    setExpandedPillars((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Derived values
  const verdictColor = VERDICT_COLOR_MAP[data?.verdict] || "#6B7280";
  const pillars = data?.pillars || [];
  const totalScore = data?.overallScore || 0;
  const readTime = data?.estimatedReadingTime
    ? `${data.estimatedReadingTime} min read`
    : "10 min read";
  const publishedDate = data?.publishedAt
    ? new Date(data.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  if (!data) return null;

  return (
    <article className="relative min-h-screen bg-white text-slate-900 dark:bg-[#050B1F] dark:text-white">
      {/* ── Background Grid Texture ────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
          bg-[size:48px_48px]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
                   linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <header className="relative z-10 overflow-hidden border-b border-slate-200 dark:border-white/10">
        {/* Hero glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0
            bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,77,253,0.06),transparent)]
            dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,77,253,0.15),transparent)]"
        />

        {/* Verdict color stripe */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${verdictColor}, #004DFD, ${verdictColor})`,
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-36">
          {/* Back link */}
          <Link
            href="/audits"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium
              text-slate-500 transition-colors hover:text-[#004DFD]
              dark:text-slate-400 dark:hover:text-[#7CA0FF]"
          >
            <ArrowLeft className="h-4 w-4" />
            All Audits
          </Link>

          {/* Category tags */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center rounded-full border px-3 py-1
              text-xs font-bold uppercase tracking-[0.18em]
              border-[#004DFD]/25 bg-[#004DFD]/[0.07] text-[#004DFD]
              dark:border-[#004DFD]/40 dark:bg-[#004DFD]/10 dark:text-[#7CA0FF]"
            >
              {data.categoryTag || "LIONXE® Architectural Audit"}
            </span>
            {data.categorySubTag && (
              <>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  //
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {data.categorySubTag}
                </span>
              </>
            )}
          </div>

          {/* Headline */}
          <h1
            className="text-3xl font-extrabold leading-tight tracking-tight
            text-slate-900 dark:text-white
            sm:text-4xl lg:text-5xl"
          >
            {data.title}
          </h1>

          {/* Meta row */}
          <div
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3
            text-sm text-slate-500 dark:text-slate-400"
          >
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-[#004DFD] dark:text-[#7CA0FF]" />
              <span className="font-medium">
                {data.leadAuditor || "Sufian Mustafa"}
              </span>
            </span>
            {publishedDate && (
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {publishedDate}
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readTime}
            </span>
            {data.targetDomain && (
              <a
                href={data.targetDomain}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium
                  text-[#004DFD] transition-colors hover:underline
                  dark:text-[#7CA0FF]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {data.targetDomain.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            )}
          </div>

          {/* ── Verdict Stamp ────────────────────────────────────── */}
          <div
            className="mt-8 rounded-2xl border-2 p-5 sm:p-6"
            style={{
              borderColor: `${verdictColor}33`,
              backgroundColor: `${verdictColor}08`,
            }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ color: `${verdictColor}CC` }}
                >
                  LIONXE® Evaluation Verdict
                </p>
                <p
                  className="mt-1 text-2xl font-black uppercase tracking-wide sm:text-3xl"
                  style={{ color: verdictColor }}
                >
                  {data.verdict}
                </p>
              </div>
              <div className="flex items-end gap-2">
                <span
                  className="text-5xl font-black"
                  style={{ color: verdictColor }}
                >
                  {totalScore}
                </span>
                <span
                  className="pb-2 text-xl font-bold"
                  style={{ color: `${verdictColor}88` }}
                >
                  /100
                </span>
              </div>
            </div>
            {data.heroStatement && (
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {data.heroStatement}
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: data.title,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2
                text-xs font-semibold transition-colors
                border-slate-200 bg-white text-slate-600
                hover:border-[#004DFD]/40 hover:text-[#004DFD]
                dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300
                dark:hover:border-[#004DFD]/40 dark:hover:text-[#7CA0FF]"
            >
              <Share2 className="h-3.5 w-3.5" /> Share Audit
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2
                text-xs font-semibold transition-colors
                border-slate-200 bg-white text-slate-600
                hover:border-[#004DFD]/40 hover:text-[#004DFD]
                dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300
                dark:hover:border-[#004DFD]/40 dark:hover:text-[#7CA0FF]"
            >
              <Printer className="h-3.5 w-3.5" /> Print Report
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          CONTENT BODY
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* ── Scorecard Summary Bar ────────────────────────────────── */}
        {pillars.length > 0 && (
          <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = PILLAR_ICON_MAP[p.pillarKey] || Brain;
              const color = PILLAR_COLOR_MAP[p.pillarKey] || "#004DFD";
              return (
                <div
                  key={i}
                  className="rounded-2xl border p-4 text-center transition-all
                    border-slate-200 bg-slate-50/50
                    dark:border-white/10 dark:bg-white/[0.03]
                    hover:border-[#004DFD]/30 dark:hover:border-[#004DFD]/30"
                >
                  <div className="mx-auto mb-3 flex justify-center">
                    <ScoreRing
                      score={p.score}
                      max={25}
                      size={64}
                      strokeWidth={4}
                      color={color}
                    />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {p.pillarKey}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {p.title?.split("&")[0]?.trim()}
                  </p>
                  <div className="mt-2">
                    <StatusBadge status={p.status} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Section 01: Executive Summary ────────────────────────── */}
        {data.executiveSummary && (
          <section className="mb-20">
            <SectionHeader number="01" title="Executive Verdict & Core Vulnerability" />
            <div className="mt-6 space-y-4">
              {data.executiveSummary.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-8 text-slate-600 dark:text-slate-300"
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* ── Section 02: Four Pillars ─────────────────────────────── */}
        {pillars.length > 0 && (
          <section className="mb-20">
            <SectionHeader
              number="02"
              title="The Four Pillars Validation Gates"
            />
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              Each pillar below represents a sequential gate in the LIONXE
              evaluation pipeline. The asset must pass all four to achieve
              certification. Failure at any single gate triggers a structural
              rejection mandate.
            </p>
            <div className="mt-10 space-y-8">
              {pillars.map((pillar, index) => (
                <PillarSection
                  key={index}
                  pillar={pillar}
                  expanded={expandedPillars[index]}
                  onToggle={() => togglePillar(index)}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Section 03: Rectification Blueprint ──────────────────── */}
        {data.rectificationSteps?.length > 0 && (
          <section className="mb-20">
            <SectionHeader
              number="03"
              title="The LIONXE® Rectification Blueprint"
            />
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              To dismantle the volatile shortcuts and reconstruct this framework
              for long-term structural survival, the organization must execute
              the following proprietary recovery sequence.
            </p>
            <div className="mt-10 space-y-6">
              {data.rectificationSteps.map((step, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border p-6 transition-all sm:p-8
                    border-slate-200 bg-slate-50/50
                    dark:border-white/10 dark:bg-white/[0.03]
                    hover:border-[#004DFD]/30 dark:hover:border-[#004DFD]/30"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                      bg-[#004DFD]/10 text-sm font-black text-[#004DFD]
                      dark:bg-[#004DFD]/15 dark:text-[#7CA0FF]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                      {step.title}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {step.body?.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-base leading-8 text-slate-600 dark:text-slate-300"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Divider: Comprehensive Analysis ──────────────────────── */}
        {data.content && data.content.length > 0 && (
          <>
            <div className="mb-20 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2
                border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-[0.2em] text-slate-400
                dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-500"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Comprehensive Analysis
              </div>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
            </div>

            {/* ═════════════════════════════════════════════════════════
                COMPREHENSIVE BLOG SECTION (Sanity Rich Text)
            ═════════════════════════════════════════════════════════ */}
            <section className="mb-20">
              {data.comprehensiveBlogTitle && (
                <h2
                  className="mb-10 text-3xl font-extrabold tracking-tight
                  text-slate-900 dark:text-white sm:text-4xl"
                >
                  {data.comprehensiveBlogTitle}
                </h2>
              )}

              <div className="review-rich-content">
                <PortableText
                  value={data.content}
                  components={portableTextComponents}
                />
              </div>
            </section>
          </>
        )}

        {/* ── FAQ Section ──────────────────────────────────────────── */}
        {loadStage >= 4 && data.faqs?.length > 0 && (
          <section className="mb-20">
            <Suspense fallback={<ComponentSkeleton height="300px" />}>
              <FAQSection faqs={data.faqs} />
            </Suspense>
          </section>
        )}

        {/* ── Author Bio ───────────────────────────────────────────── */}
        {loadStage >= 4 && (
          <section className="mb-20">
            <Suspense fallback={<ComponentSkeleton height="200px" />}>
              <AuthorBioCard />
            </Suspense>
          </section>
        )}

        {/* ── Comments ─────────────────────────────────────────────── */}
        {loadStage >= 4 && data.displaySettings?.showComments !== false && (
          <section className="mb-20">
            <Suspense fallback={<ComponentSkeleton height="400px" />}>
              <CommentSection
                articleId={data._id}
                articleSlug={data.slug?.current}
                articleType={data._type}
                articleTitle={data.title}
              />
            </Suspense>
          </section>
        )}

        {/* ── Related Reviews ──────────────────────────────────────── */}
        {loadStage >= 4 &&
          relatedReviews?.length > 0 &&
          data.displaySettings?.showRelatedPosts !== false && (
            <section className="mb-20">
              <Suspense fallback={<ComponentSkeleton height="400px" />}>
                {/* <RelatedReviewsSection reviews={relatedReviews} /> */}
              </Suspense>
            </section>
          )}

        {/* ── Final CTA ────────────────────────────────────────────── */}
        <div
          className="rounded-3xl border p-8 text-center sm:p-12
          border-[#004DFD]/20 bg-[#004DFD]/[0.04]
          dark:border-[#004DFD]/25 dark:bg-[#004DFD]/[0.06]"
        >
          <Zap className="mx-auto mb-4 h-8 w-8 text-[#004DFD] dark:text-[#7CA0FF]" />
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
            Want Your Asset Audited?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Submit your digital architecture for a comprehensive LIONXE
            evaluation. Every pillar. Every layer. No shortcuts.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/submit-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-[#004DFD] px-7 py-4
                text-base font-bold text-white shadow-lg shadow-[#004DFD]/30
                transition-all hover:-translate-y-0.5 hover:bg-[#003ed1]
                hover:shadow-[#004DFD]/50"
            >
              Request an Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 rounded-xl border px-7 py-4
                text-base font-bold transition-all hover:-translate-y-0.5
                border-slate-300 text-slate-900 hover:border-[#004DFD]/50
                dark:border-white/15 dark:text-white dark:hover:border-[#004DFD]/40"
            >
              Explore the Framework
            </Link>
          </div>
        </div>

        {/* ── Disclaimer ───────────────────────────────────────────── */}
        <p className="mt-12 text-center text-xs leading-6 text-slate-400 dark:text-slate-500">
          This audit was conducted independently under the LIONXE® evaluation
          standard. All findings are based on publicly available data and
          proprietary analytical models. Scores are valid as of the published
          date and may not reflect subsequent changes. LIONXE® is a registered
          trademark. All rights reserved.
        </p>
      </div>
    </article>
  );
}