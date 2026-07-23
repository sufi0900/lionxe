"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  Globe,
  User,
  Calendar,
  Lock,
  Filter,
  Search,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC AUDITS DATA ARRAY
// To add a new audit in the future, simply copy and paste this object structure below.
// ─────────────────────────────────────────────────────────────────────────────
const STATIC_AUDITS = [
  {
    id: "brooklyn-area-rug-cleaning",
    title: "Brooklyn Area Rug Cleaning — Architectural Audit",
    slug: "brooklyn-area-rug-cleaning", // Routes to /audits/brooklyn-area-rug-cleaning
    targetEntity: "Brooklyn Area Rug Cleaning",
    targetDomain: "brooklynarearugcleaning.com",
    leadAuditor: "Sufian Mustafa",
    publishedAt: "July 2026",
    verdict: "DISQUALIFIED",
    overallScore: 60, // 12 + 30 + 6 + 12
    overview:
      "Critical cascade failure triggered at Gate 3 (Non-Negotiable Integrity). Fabricated local operational footprint and deceptive staff identity claims disqualify the asset, overriding baseline technical scores.",
    scores: {
      lScore: 12,
      ioScore: 30,
      nScore: 6, // Gate 3 integrity violation (<15)
      xeScore: 12,
    },
    category: "Structural Rejection",
  },
  /* // TEMPLATE FOR FUTURE AUDITS (Uncomment & fill when adding a new audit):
  {
    id: "example-audit-slug",
    title: "Example Entity — Architectural Audit",
    slug: "example-audit-slug",
    targetEntity: "Example Company",
    targetDomain: "example.com",
    leadAuditor: "Sufian Mustafa",
    publishedAt: "August 2026",
    verdict: "CERTIFIED", // or "DISQUALIFIED"
    overallScore: 82,
    overview: "Comprehensive audit passing all four LIONXE quality gates with strong technical alignment.",
    scores: {
      lScore: 20,
      ioScore: 22,
      nScore: 20,
      xeScore: 20,
    },
    category: "Certified",
  },
  */
];

export default function StaticAuditsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic
  const filteredAudits = useMemo(() => {
    return STATIC_AUDITS.filter((audit) => {
      // Search filter
      const matchesSearch =
        audit.targetEntity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        audit.targetDomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        audit.title.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      if (selectedCategory === "all") return matchesSearch;
      if (selectedCategory === "DISQUALIFIED" || selectedCategory === "Rejections") {
        return matchesSearch && audit.verdict === "DISQUALIFIED";
      }
      if (selectedCategory === "Certified") {
        return matchesSearch && audit.verdict === "CERTIFIED";
      }
      return matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* ── FILTER & SEARCH BAR ────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/60">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="h-3.5 w-3.5" /> Filter:
          </span>
          {[
            { label: "All Audits", value: "all" },
            { label: "Rejections / Disqualified", value: "DISQUALIFIED" },
            { label: "Certified", value: "Certified" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === tab.value
                  ? "bg-[#004DFD] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-white/10 dark:hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search audits or domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004DFD] dark:border-white/10 dark:bg-slate-800 dark:text-white"
          />
        </div>
      </div>

      {/* ── AUDIT CARDS LIST ────────────────────────────────────────────────── */}
      <div className="space-y-6">
        {filteredAudits.length === 0 ? (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400">
            No published audits match your search criteria.
          </div>
        ) : (
          filteredAudits.map((audit) => (
            <StaticAuditCard key={audit.id} audit={audit} />
          ))
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FULL-WIDTH STATIC AUDIT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function StaticAuditCard({ audit }) {
  const {
    title,
    slug,
    targetEntity,
    targetDomain,
    leadAuditor,
    publishedAt,
    verdict,
    overallScore,
    overview,
    scores,
  } = audit;

  const isDisqualified = verdict === "DISQUALIFIED" || scores.nScore < 15;
  const isNBlocking = scores.nScore < 15;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-[#0A0F1E]">
      {/* TOP HEADER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
            <Globe className="h-5 w-5 text-[#004DFD] dark:text-[#5B8CFF]" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              {targetEntity || title}
            </h3>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {targetDomain}
            </p>
          </div>
        </div>

        {/* VERDICT & SCORE DISPLAY */}
        <div className="flex items-center gap-3">
          {isDisqualified ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400">
              <ShieldAlert className="h-4 w-4" /> DISQUALIFIED
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" /> CERTIFIED
            </span>
          )}

          <div className="flex items-baseline gap-1 rounded-2xl bg-slate-100 px-4 py-1.5 dark:bg-slate-800">
            <span
              className={`text-2xl font-black tabular-nums ${
                isDisqualified ? "text-red-500" : "text-[#004DFD] dark:text-[#5B8CFF]"
              }`}
            >
              {overallScore}
            </span>
            <span className="text-xs font-bold text-slate-400">/100</span>
          </div>
        </div>
      </div>

      {/* EXECUTIVE OVERVIEW */}
      <div className="mt-5">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {overview}
        </p>

        {/* GATE 3 INTEGRITY CASCADE FAILURE WARNING */}
        {isNBlocking && (
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/[0.05] p-3.5 text-xs font-medium text-red-600 dark:text-red-400">
            <Lock className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              <strong>Cascade Failure Active:</strong> Gate 3 (Non-Negotiable Integrity) scored <strong>6/25</strong> due to deceptive operational claims. Entire audit is structurally disqualified regardless of secondary scores.
            </span>
          </div>
        )}
      </div>

      {/* 4-PILLAR SCORES GRID: L: 12, IO: 30, N: 6, XE: 12 */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <PillarPill code="L" name="Logic" score={scores.lScore} max={25} />
        <PillarPill code="IO" name="Optimization" score={scores.ioScore} max={25} />
        <PillarPill
          code="N"
          name="Integrity"
          score={scores.nScore}
          max={25}
          isFailed={scores.nScore < 15}
        />
        <PillarPill code="XE" name="Distinction" score={scores.xeScore} max={25} />
      </div>

      {/* CARD FOOTER BAR */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-white/10">
        <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5 font-semibold">
            <User className="h-3.5 w-3.5 text-[#004DFD]" /> Lead Auditor: {leadAuditor}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {publishedAt}
          </span>
        </div>

        <Link
          href={`/audits/${slug}`}
          className="inline-flex items-center gap-2 rounded-xl bg-[#004DFD] px-6 py-3 text-xs font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98] shadow-md hover:shadow-lg"
        >
          <span>View Full Assessment</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

// Sub-component for individual pillar pills
function PillarPill({ code, name, score, max = 25, isFailed = false }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border p-3 transition-colors ${
        isFailed
          ? "border-red-500/40 bg-red-500/10 text-red-500"
          : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-800/50 text-slate-900 dark:text-white"
      }`}
    >
      <div>
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
          Pillar {code}
        </span>
        <span className="text-xs font-bold truncate block">{name}</span>
      </div>
      <div className="text-right">
        <span className="text-sm font-black tabular-nums">{score}</span>
      </div>
    </div>
  );
}