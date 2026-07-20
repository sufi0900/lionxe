// components/Card/ReviewCard.jsx
"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import OptimizedImage from "@/app/ai-seo/[slug]/OptimizedImage";

// Material UI Icons
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GavelIcon from "@mui/icons-material/Gavel";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ShieldIcon from "@mui/icons-material/Shield";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function ReviewCard({ 
  post, 
  pageSlugPrefix = "audits" 
}) {
  // Destructure review data
  const {
    title,
    slug,
    targetEntity,
    targetDomain,
    leadAuditor = "Sufian Mustafa",
    publishedAt,
    verdict = "Under Review",
    overallScore = 0,
    mainImage,
    overview,
    // LIONXE pillar scores (add these to your Sanity schema)
    lScore = 0,
    ioScore = 0,
    nScore = 0,
    xeScore = 0,
  } = post || {};

  // State for expanded pillar details
  const [isExpanded, setIsExpanded] = useState(false);
const getPillarPercent = (score) => {
  const numericScore = Number(score) || 0;
  return Math.min(Math.max((numericScore / 25) * 100, 0), 100);
};
  // Clean routing URL
  const detailsUrl = `/${pageSlugPrefix}/${typeof slug === 'string' ? slug : slug?.current || ""}`;

  // Format publish date
  const formattedDate = useMemo(() => {
    if (!publishedAt) return "Pending Audit";
    return new Date(publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }, [publishedAt]);

  // Verdict styling based on official evaluation verdicts
  const verdictStyle = useMemo(() => {
    switch (verdict) {
      case "Certified":
        return {
          bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
          text: "text-emerald-600 dark:text-emerald-400",
          border: "border-emerald-500/30",
          icon: <VerifiedUserIcon className="w-4 h-4" />,
          dotColor: "bg-emerald-500",
        };
      case "Conditional Pass":
        return {
          bg: "bg-amber-500/10 dark:bg-amber-500/20",
          text: "text-amber-600 dark:text-amber-400",
          border: "border-amber-500/30",
          icon: <GavelIcon className="w-4 h-4" />,
          dotColor: "bg-amber-500",
        };
      case "Structural Rejection":
        return {
          bg: "bg-rose-500/10 dark:bg-rose-500/20",
          text: "text-rose-600 dark:text-rose-400",
          border: "border-rose-500/30",
          icon: <ReportProblemIcon className="w-4 h-4" />,
          dotColor: "bg-rose-500",
        };
      case "Under Review":
      default:
        return {
          bg: "bg-zinc-500/10 dark:bg-zinc-500/20",
          text: "text-zinc-600 dark:text-zinc-400",
          border: "border-zinc-500/30",
          icon: <QueryBuilderIcon className="w-4 h-4" />,
          dotColor: "bg-zinc-500",
        };
    }
  }, [verdict]);

  // Overall score color
  const scoreColorClass = useMemo(() => {
    if (overallScore >= 85) return "text-emerald-500";
    if (overallScore >= 70) return "text-blue-500";
    if (overallScore >= 50) return "text-amber-500";
    return "text-rose-500";
  }, [overallScore]);

  // LIONXE pillar configurations
 const pillars = useMemo(
  () => [
    {
      code: "L",
      name: "Logic & Longevity",
      shortMeaning: "Long-term strategic soundness",
      description:
        "Evaluates whether the asset is built on durable logic, sustainable foundations, and decisions that can compound over time.",
      score: lScore,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      code: "IO",
      name: "Internal Optimization",
      shortMeaning: "Technical and structural completeness",
      description:
        "Measures how well the internal system, content architecture, UX flow, technical setup, and operational layers are optimized.",
      score: ioScore,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
      textColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      code: "N",
      name: "Non-Negotiable Integrity",
      shortMeaning: "Trust, transparency, and compliance",
      description:
        "Checks whether the asset avoids manipulative tactics, shortcuts, misleading claims, hidden risks, or trust-breaking behavior.",
      score: nScore,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-500/10",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      code: "XE",
      name: "eXceptional Distinction",
      shortMeaning: "Unique value and execution quality",
      description:
        "Evaluates whether the asset stands out with meaningful differentiation, strong execution, and a level of quality beyond generic alternatives.",
      score: xeScore,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-500/10",
      textColor: "text-amber-600 dark:text-amber-400",
    },
  ],
  [lScore, ioScore, nScore, xeScore]
);
  return (
    <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      
      {/* Main Horizontal Container */}
      <div className="flex flex-col lg:flex-row gap-0">
        
        {/* LEFT SECTION: Image & Quick Stats */}
        <div className="w-full lg:w-[320px] flex-shrink-0 relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-800 dark:to-zinc-900 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-zinc-800 overflow-hidden">
          
          {/* Featured Image */}
          <Link href={detailsUrl} className="block relative w-full h-[200px] lg:h-[280px] overflow-hidden group">
            {mainImage && (
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
                <OptimizedImage
                  src={urlForImage(mainImage).width(400).height(300).fit("crop").auto("format").url()}
                  alt={title || "LIONXE Review"}
                  width={400}
                  height={300}
                  quality={85}
                  priority={false}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent" />
          </Link>

          {/* Verdict Badge */}
          <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border backdrop-blur-md text-xs font-bold uppercase tracking-wider shadow-md ${verdictStyle.bg} ${verdictStyle.text} ${verdictStyle.border}`}>
            {verdictStyle.icon}
            <span>{verdict}</span>
          </div>

          {/* Overall Score Ring */}
          <div className="absolute top-3 right-3 flex items-center justify-center h-14 w-14 rounded-xl bg-white/95 dark:bg-zinc-900/95 shadow-lg border border-slate-100 dark:border-zinc-800 backdrop-blur-sm">
            <div className="relative flex items-center justify-center">
              <svg className="w-12 h-12 transform -rotate-90">
                <circle cx="24" cy="24" r="18" className="stroke-slate-100 dark:stroke-zinc-800" strokeWidth="3" fill="transparent" />
                <circle 
                  cx="24" 
                  cy="24" 
                  r="18" 
                  className={scoreColorClass}
                  strokeWidth="4" 
                  fill="transparent"
                  strokeDasharray={113}
                  strokeDashoffset={113 - (Math.min(overallScore, 100) / 100) * 113}
                  style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
              </svg>
              <span className="absolute text-sm font-black text-zinc-900 dark:text-white">
                {overallScore}
              </span>
            </div>
          </div>

          {/* Entity Info Card */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 via-zinc-900/95 to-transparent p-4">
            <div className="flex items-center gap-2 mb-3">
              <ShieldIcon className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 truncate">
                {targetEntity || "Platform"}
              </span>
            </div>
            {targetDomain && (
              <p className="text-xs text-slate-400 font-mono lowercase truncate">
                {targetDomain}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT SECTION: Content & Sliders */}
        <div className="flex-1 flex flex-col p-6 md:p-8">
          
          {/* Title & Overview */}
          <div className="mb-6 flex-1">
            <Link href={detailsUrl}>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                {title}
              </h3>
            </Link>
            
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4">
              {overview}
            </p>
          </div>

          {/* LIONXE Pillar Sliders Section */}
          <div className="mb-6 bg-slate-50 dark:bg-zinc-800/50 rounded-xl p-5 border border-slate-200 dark:border-zinc-700">
            
            {/* Header */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between mb-4 hover:opacity-80 transition-opacity"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                LIONXE Framework Evaluation
              </h4>
              {isExpanded ? (
                <ExpandLessIcon className="w-5 h-5 text-zinc-500" />
              ) : (
                <ExpandMoreIcon className="w-5 h-5 text-zinc-500" />
              )}
            </button>

            {/* Pillar Scores */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 transition-all duration-300 ${isExpanded ? "mb-4" : ""}`}>
              {pillars.map((pillar) => (
                <div key={pillar.code} className={`${pillar.bgColor} rounded-lg p-3 border border-slate-200 dark:border-zinc-600`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                      {pillar.code}
                    </span>
                    <span className={`text-lg font-bold ${pillar.textColor}`}>
                      {pillar.score}
                    </span>
                  </div>
                  
                  {/* Mini Progress Bar */}
                  <div className="relative h-2 bg-white dark:bg-zinc-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${pillar.color} transition-all duration-500`}
style={{ width: `${getPillarPercent(pillar.score)}%` }}
                  />
                  </div>
                </div>
              ))}
            </div>

            {/* Expanded Detailed Sliders */}
            {isExpanded && (
              <div className="space-y-5 pt-4 border-t border-slate-200 dark:border-zinc-700">
                {pillars.map((pillar) => (
                  <div key={`detail-${pillar.code}`} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400">
                        {pillar.name}
                      </label>
                      <span className={`text-sm font-black ${pillar.textColor}`}>
{pillar.score}/25                      </span>
                    </div>
                    
                    {/* Interactive Slider */}
                    <div className="relative">
                      <div className="relative h-3 bg-white dark:bg-zinc-900 rounded-full overflow-hidden border border-slate-200 dark:border-zinc-600">
                        <div
                          className={`h-full bg-gradient-to-r ${pillar.color} transition-all duration-300 pointer-events-none`}
style={{ width: `${getPillarPercent(pillar.score)}%` }}                        />
                      </div>
                      
                      {/* Slider Thumb */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-b ${pillar.color} shadow-md border-2 border-white dark:border-zinc-800 transition-all duration-300 pointer-events-none`}
style={{ left: `calc(${getPillarPercent(pillar.score)}% - 10px)` }}                   />
                    </div>

                    {/* Score Segments */}
                    <div className="flex justify-between text-[10px] text-zinc-400 dark:text-zinc-600 font-mono">
                 <span>0</span>
<span>12.5</span>
<span>25</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer: Meta Info & CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-zinc-800">
            
            {/* Auditor & Date Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs">
              <div>
                <p className="font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-0.5">
                  Lead Auditor
                </p>
                <p className="font-semibold text-zinc-700 dark:text-zinc-300">
                  {leadAuditor}
                </p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-0.5">
                  Audit Date
                </p>
                <p className="font-medium text-zinc-600 dark:text-zinc-400">
                  {formattedDate}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={detailsUrl}
              className="group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
            >
              <span>Full Audit</span>
              <ArrowForwardIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}