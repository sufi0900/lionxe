
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Gauge, Shield, Sparkles, ShieldCheck,
  AlertTriangle, CheckCircle2, ChevronDown, ChevronRight,
  Home, FileWarning, ArrowRight, Calendar, Flag, ExternalLink,
  BookOpen, List, ImageIcon, TrendingDown, Link2, Users, Clock,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — from LIONXE Rubric HTML (source of truth)
// ─────────────────────────────────────────────────────────────────────────────

const T = {
  bg: "#080F1D", bg2: "#0D1626", surf: "#111B2E", surf2: "#182237",
  gold: "#C8971F", goldLt: "#E5B84A",
  brand: "#004DFD", brandLt: "#5B8CFF",
  brandDim: "rgba(0,77,253,0.12)", brandBdr: "rgba(0,77,253,0.30)",
  goldDim: "rgba(200,151,31,0.12)", goldBdr: "rgba(200,151,31,0.22)",
  white: "#EAE6DC", muted: "#7B8BA2", bdr: "rgba(255,255,255,0.065)",
  fail: "#C94040", pass: "#4A9960", blue: "#3B7DD8", amber: "#E07840", teal: "#5B8CFF",
};

const FH = "'Space Grotesk', system-ui, sans-serif";

// ─────────────────────────────────────────────────────────────────────────────
// AUDIT DATA — v2: integrates publicly verifiable metrics (Moz free metrics,
// Semrush public domain overview, PageSpeed Insights) and social footprint
// evidence. Every figure cited is reproducible with free public tools.
// Static now → all fields map 1:1 to the Sanity lionxeAudit schema.
// ─────────────────────────────────────────────────────────────────────────────

const AUDIT = {
  title: "Independent Assessment: Brooklyn Area Rug Cleaning",
  entityName: "Brooklyn Area Rug Cleaning",
  entityUrl: "https://www.brooklynarearugcleaning.com/",
  entityDescriptor: "Home Services · Carpet & Rug Cleaning · Brooklyn, New York · US-Facing",
  industry: "Home Services",
  auditDate: "June 2026",
  rubricVersion: "LIONXE™ Audit Rubric v1.0",
  auditorName: "Sufian Mustafa",
  grandTotal: 60,
  lScore: 12, ioScore: 30, nScore: 6, xeScore: 12,
  certificationLevel: "Does Not Pass",

  visualEvidence: {
    heroScreenshot: "/audits/brooklyn-area-rug-cleaning-homepage.png" as string | null,
    heroCaption: "Homepage of brooklynarearugcleaning.com as reviewed in June 2026",
  },

  blockingIssues: [
    { code: "L2", name: "Foundational Durability" },
    { code: "L4", name: "Resilience & Forward Risk" },
    { code: "N1", name: "Claim Accuracy" },
    { code: "N2", name: "Compliance With Governing Rules" },
    { code: "N4", name: "Absence of Manipulation" },
    { code: "XE2", name: "Recognizable Identity" }
  ],
  publicMetrics: [
    { label: "Domain Age", value: "15 yrs", tone: "neutral", note: "Registered ~15 years, 160 days" },
    { label: "Monthly Organic Traffic", value: "~286", tone: "bad", note: "Semrush estimate, \u221226% trend" },
    { label: "Branded Search Traffic", value: "0%", tone: "bad", note: "No one searches the brand name" },
    { label: "Moz Domain Authority", value: "9", tone: "bad", note: "Very low for domain age" },
    { label: "Moz Page Authority", value: "34", tone: "neutral", note: "Homepage" },
    { label: "Semrush Authority", value: "9", tone: "bad", note: "Flagged \u2018Low authority\u2019" },
    { label: "Total Backlinks", value: "640\u20131K", tone: "neutral", note: "335 referring domains" },
    { label: "Quality Backlinks", value: "25%", tone: "bad", note: "159 of 640 assessed quality" },
    { label: "Spam Score", value: "11%", tone: "bad", note: "Moz spam signal" },
    { label: "Organic Keywords", value: "~1.1K", tone: "neutral", note: "919\u20131.1K tracked terms" },
    { label: "PageSpeed (Desktop)", value: "91", tone: "good", note: "Genuinely strong" },
    { label: "PageSpeed (Mobile)", value: "89", tone: "good", note: "Genuinely strong" },
  ],

  keyFindings: [
    "Owned capital after fifteen years is negligible: Domain Authority 9, Authority Score 9, 0% branded search demand, and organic traffic of approximately 286 monthly visits trending −26%.",
    "Two practices match published search-platform prohibitions: approximately one hundred location pages with body-identical content, and keyword repetition of approximately sixteen instances in a 1,200-word post.",
    "A homepage claim of 52,000+ customers stands against a total verifiable public review record of 58 — five on Google Maps with none added in approximately seven years, and 53 on Facebook from 2023.",
    "Load performance measures 91 desktop and 89 mobile, and directly controlled on-page elements are implemented; three of seven technical factors and five of six visibility factors are not met.",
    "Output fails across every controlled format: templated written material, templated service pages, and generated video carrying no footage of actual work, premises, or personnel.",
    "Every path to a customer runs through a single acquisition channel, with no owned audience, no active social reach, and no current review pipeline."
  ],
  executiveSummary: [
    "This assessment evaluates Brooklyn Area Rug Cleaning (brooklynarearugcleaning.com), a US-facing home services business in the carpet and rug cleaning sector. All findings rest on publicly accessible information: browser inspection, Google Search and Maps, PageSpeed Insights, web.archive.org, Moz free metrics, Semrush public domain data, and the social profiles the business links and operates. Every figure cited is reproducible by any reader using the same free tools.",
    "The entity operates a domain approximately fifteen years old. Measured against that age, accumulated position is minimal: Moz Domain Authority 9, Semrush Authority Score 9, approximately 286 monthly organic visits trending −26%, and branded search demand at 0%. The public traffic record shows a sharp rise around July 2025 followed by sustained decline.",
    "Technical measurements are mixed. Load performance measures 91 on desktop and 89 on mobile, availability was uninterrupted, and transport security is correctly configured. Against these, the underlying architecture produces thousands of near-duplicate addresses from approximately one hundred location pages, structural discoverability is degraded accordingly, and one linked outbound destination resolves to a suspended channel.",
    "Three findings fall within Non-Negotiable Integrity. Two practices match published search-platform prohibitions: the location page network and keyword repetition density. Separately, the homepage claims 52,000+ customers against a total verifiable public review record of 58, displayed alongside a testimonial panel carrying no attribution to any review platform.",
    "Final score: 60/400 — Does Not Pass, with six blocking issues at L2, L4, N1, N2, N4, and XE2. Cascade failure is confirmed at Pillar L. All four pillars are scored in full for completeness of the record."
  ],
  pillars: [
    {
      code: "L", name: "Long-Term Logic", governingLaw: "The Post-Flood Collapse Rule",
      score: 12, grade: "CRITICAL",
      criteria: [
        { id: "L1", name: "Directional Clarity", score: 6, label: "Minimal", blocking: false,
          evidence: "No organising direction is discoverable across the property. Published material accumulates without thematic structure: posts do not cluster around defined subject pillars, and no stated positioning identifies what the business is building toward. Archived versions across the observable record show the same undirected accumulation, with no evidence that any articulated direction has filtered what is published or built. A consistent narrow operating intent is visible — capture local service demand — but it is never articulated as a direction, and it rules no option out." },
        { id: "L2", name: "Foundational Durability", score: 0, label: "Absent", blocking: true,
          evidence: "The sustainment basis is direct sale of cleaning jobs acquired through non-branded search placement. Evidence of value delivered exists but is historic: five Google Maps reviews, the most recent approximately seven years old, and 53 Facebook reviews dated 2023 — positive in content, with no independent record of delivered value in the three years since. Dependence is concentrated in a single acquisition channel with no second path to a customer. Owned capital after fifteen years is negligible: Moz Domain Authority 9, Semrush Authority Score 9, 335 referring domains of which approximately 25% are assessed as quality, and branded search demand at 0% of all traffic. The public traffic record shows the trajectory of the ground beneath the model: a sharp rise around July 2025 followed by sustained decline to approximately 286 monthly organic visits, trending −26%." },
        { id: "L3", name: "Decision Discipline", score: 6, label: "Minimal", blocking: false,
          evidence: "The observable pattern favours volume produced quickly over assets developed once and developed fully: output is generated to a fixed template at scale rather than researched and built. The clearest test available is the traffic decline visible from mid-2025, a point at which the operating environment returned an unambiguous signal. Archived versions across the following year show no change in approach, no correction, and no reallocation of effort. The approach is internally consistent and was coherent under earlier conditions, which distinguishes it from erratic decision-making, though nothing in the record shows research depth or a deliberate trade-off behind it." },
        { id: "L4", name: "Resilience & Forward Risk", score: 0, label: "Absent", blocking: true,
          evidence: "No buffer against interruption is observable in any form. There is no owned audience (0% branded demand), no social channel capable of independent reach (posts return two to four engagements), no current review pipeline (most recent Google review approximately seven years old), and no email or community asset present on the property. Every path to a customer runs through a single acquisition channel, and interruption to that channel would leave no alternative route to any customer. The service category itself carries no visible risk of obsolescence, though nothing in the archived record shows the offering being renewed or adapted over time." }
      ],
    },
    {
      code: "IO", name: "Internal Optimization", governingLaw: "The Weakest Link Axiom",
      score: 30, grade: "NEEDS WORK",
      criteria: [
        { id: "IO1", name: "Technical Foundation & Integrity", score: 12, label: "Partial", blocking: false,
          evidence: "Load performance returns 91 on desktop and 89 on mobile in PageSpeed Insights, availability was uninterrupted throughout review, rendering is correct across tested viewports, and transport security is correctly configured. The underlying architecture is materially weaker: approximately one hundred location-targeted pages carry body content identical except for the place name, and multiplied across service sections this produces thousands of near-duplicate addresses, diluting index quality and consuming crawl resources on repeated content while degrading discoverability of the structure. Functional integrity is also incomplete — an outbound destination linked from the live property resolves to a suspended channel." },
        { id: "IO2", name: "Output & Presentation Quality", score: 6, label: "Minimal", blocking: false,
          evidence: "Written material follows one fixed five-part structure — introduction, why it matters, steps, when to call a professional, FAQs — with no variation across any post reviewed, and within that structure, phrasing repeats to a degree that displaces explanation: one post repeats the same phrase approximately sixteen times across roughly 1,200 words. Service pages for area rug cleaning, carpet cleaning, and commercial cleaning follow the same pattern, carrying no technician-authored process detail and no documentation of completed work. Video and imagery show the same pattern on the surfaces the entity operates: material published to Facebook and Instagram consists of generated video with no footage of actual work, no premises, and no personnel, returning two to four engagements per item. No first-hand or original content was found in any format, and presentation is template-standard throughout, applied uniformly rather than considered." },
        { id: "IO3", name: "Visibility & Reach Systems", score: 6, label: "Minimal", blocking: false,
          evidence: "Meta titles, meta descriptions, and heading hierarchy are implemented across reviewed page types. Beyond that surface, external standing is minimal after fifteen years of operation: Moz Domain Authority stands at 9, Semrush Authority Score at 9 with a low-authority flag, 335 referring domains of which approximately a quarter are assessed as quality, and a spam score of 11%. Presence in the venues the audience uses is stale rather than absent — the Google Maps listing carries five reviews with none added in approximately seven years, and no Yelp or Trustpilot presence exists. Demand coverage extends to roughly 1,100 tracked terms, converting to approximately 286 monthly organic visits — a reach outcome that is negligible measured against fifteen years on the domain." },
        { id: "IO4", name: "Operational Completeness & Upkeep", score: 6, label: "Minimal", blocking: false,
          evidence: "Descriptive metadata is present across reviewed pages and the property carries the contact surfaces the field expects. Structured data is absent where the field expects it, removing eligibility for enhanced presentation, and no identity surface exists anywhere on the property — no page names the business entity, its history, or the people who perform the work. Currency is uneven across the operated surfaces: an outbound destination linked from the live property resolves to a suspended channel, and secondary profiles carry material dating to 2023 with no activity since, with no maintenance pass across the observable window correcting either condition." }
      ],
    },
    {
      code: "N", name: "Non-Negotiable Integrity", governingLaw: "The Cost-Indifferent Mandate",
      score: 6, grade: "CRITICAL",
      criteria: [
        { id: "N1", name: "Claim Accuracy", score: 0, label: "Absent", blocking: true,
          evidence: "The homepage claims 52,000+ happy customers. The entity's publicly verifiable record consists of five Google Maps reviews, the most recent approximately seven years old, and 53 Facebook reviews dated 2023 — 58 in total across the full public footprint, with no Yelp or Trustpilot presence. The claimed figure exceeds the verifiable record by approximately three orders of magnitude. The homepage additionally displays a rotating testimonial panel whose entries are uniform in length, structure, and phrasing to a degree inconsistent with independently authored customer feedback. A claim contradicted by the entity's own verifiable record, presented alongside social proof exhibiting affirmative indicators of fabrication, scores Absent." },
        { id: "N2", name: "Compliance With Governing Rules", score: 0, label: "Absent", blocking: true,
          evidence: "Two practices on the property match published prohibitions in the search platform's spam policies. First, the location page network: approximately one hundred pages targeting separate geographic areas with body content identical except for the place name matches the platform's published definition of doorway abuse — creating substantially similar pages targeted at specific regions or cities in place of a clearly defined, browseable hierarchy. Enforcement against this pattern has been active since 2015 and was specifically reinforced by the March 2024 core update. Second, keyword repetition: a phrase appearing approximately sixteen times within a 1,200-word post, inserted at points where it does not serve the sentence, matches the platform's published definition of keyword stuffing. Both are live and indexed at the time of review." },
        { id: "N3", name: "Transparency", score: 6, label: "Minimal", blocking: false,
          evidence: "The property discloses the service areas covered and provides a means of contact. Beyond that, no identity disclosure is present: no About page, no named owner or personnel, no company history, and no verifiable business identity — in a category in which a customer admits a service provider into their home. Pricing is undisclosed at every point in the visible journey, with all enquiries routed to a contact form carrying no indication of range or basis, and displayed testimonials carry no attribution — no entry links to Google, Yelp, or any source at which a visitor could verify it independently." },
        { id: "N4", name: "Absence of Manipulation", score: 0, label: "Absent", blocking: true,
          evidence: "The location page network is constructed so that each page presents to a visitor as specific to their area while carrying content identical to every other area page — an arrangement engineered to present local relevance that does not exist. A visitor moving between two area pages encounters the same text with one word changed. The homepage testimonial panel operates on the same principle in the visitor-facing direction: manufactured social proof arranged to convey a volume of satisfied customers the verifiable record does not support, with no source a visitor can check. Both patterns are engineered to produce a false impression — one directed at automated systems, one at people." }
      ],
    },
    {
      code: "XE", name: "eXceptional Distinction", governingLaw: "The Commodity Threshold Law",
      score: 12, grade: "CRITICAL",
      criteria: [
        { id: "XE1", name: "Articulated Distinction", score: 6, label: "Minimal", blocking: false,
          evidence: "Stated positioning rests on professional, experienced, and trusted — descriptors carried by every competitor reviewed for the same service in the same geography, each of which could place these words on its own homepage without any becoming false. The one specific element offered is a 20% discount, which is a price lever rather than a statement of difference. A positioning statement exists and is internally coherent, but nothing in it distinguishes this business from any alternative in its category." },
        { id: "XE2", name: "Recognizable Identity", score: 0, label: "Absent", blocking: true,
          evidence: "Named demand is measurable and it is zero: Semrush reports 0% branded traffic, meaning that after fifteen years of operation no measurable volume of people search for this business by name. With the identifying name removed, no element of the design, written register, or presentation would distinguish the property from the service category generally. The operated social surfaces return the same result: identical generated video across channels at two to four engagements per item, one linked channel suspended, and no footage of premises, personnel, or completed work anywhere in the public footprint by which the business could be recognised." },
        { id: "XE3", name: "Distinction in Practice", score: 0, label: "Absent", blocking: false,
          evidence: "Comparison against the top-ranking competitors for the primary service queries identifies no capability, offering, guarantee, or content element present here and absent there. No proprietary method is documented, no record of completed work exists, no technician-authored expertise is published, and no exclusive access or superior economics is evidenced. Every element of the property could be reproduced by a competitor in a single working session using commonly available templates and generation tools." },
        { id: "XE4", name: "Enduring Relevance", score: 6, label: "Minimal", blocking: false,
          evidence: "The archived record shows an approach unchanged across the full observable window while the operating environment moved toward demonstrated experience, expertise, authoritativeness, and trustworthiness between 2022 and 2026. None of the four is demonstrated on the property, and no adaptation toward them is visible at any point — the traffic decline from mid-2025 produced no observable change in direction. The property has continued operating and publishing throughout, without evidence of renewal alongside that continuity." }
      ],
    }
  ],
  recommendations: [
    { order: 1, title: "Reduce the location network to areas actually served, with area-specific content",
      criteria: ["N2", "N4", "L2", "IO1"],
      body: "The location page network is the source of three blocking issues and of the architectural finding in the technical domain. Reduce it to the areas actually served and give each remaining page content that could only have been written about that area: local conditions, work performed there, references a resident would recognise. Redirect the remainder. This addresses the two compliance findings, removes the pattern engineered to present local relevance, and recovers the architecture from thousands of duplicate addresses." },
    { order: 2, title: "Replace unverifiable trust signals with a linked, current review pipeline and identity disclosure",
      criteria: ["N1", "N3", "IO3"],
      body: "Remove the 52,000+ claim and the unattributed testimonial panel. Establish a systematic review request following each completed job, link every displayed testimonial to its live source, publish an identity surface naming the people who perform the work, and disclose pricing basis before enquiry. This addresses the claim accuracy and transparency findings and simultaneously restores currency to the directory presence recorded as stale in the visibility domain." },
    { order: 3, title: "Build external standing and first-hand output in place of templated volume",
      criteria: ["IO2", "IO3", "XE2", "XE3"],
      body: "Fifteen years of completed work is the one input competitors cannot reproduce from a template. Document it: process explanations authored by the people performing the work, photographic records of completed jobs, and answers derived from direct experience. Published as a coherent body of work and used as the basis for external references and citations, the same material addresses the output quality finding, develops the external standing absent from the visibility domain, and establishes the first ground on which recognition and practical distinction could be built." }
  ],
  closingNote: [
    "This assessment used only publicly accessible information. No internal documentation or privileged access of any kind was used or cited. Every figure is independently reproducible using a browser, PageSpeed Insights, web.archive.org, Google Search and Maps, and free-tier analysis tools.",
    "This is an independent assessment: findings and scores rest on what is publicly observable, and aspects of the entity that leave no public trace are not assumed in its favour. A certification audit, in which the entity submits internal documentation, can surface a fuller picture and may produce a different result.",
    "The business is named because every finding is externally verifiable, allowing any reader to check the evidence directly. The outbound link uses rel='nofollow' and passes no authority. Findings reflect the state of the publicly accessible property as of June 2026.",
    "Each domain was scored strictly on its own question and nothing else. Measurements that are favourable are recorded as measurements, not as verdicts on the domain containing them: strong load performance is stated where it belongs and does not soften a domain whose underlying architecture is otherwise weak. Findings of non-compliance are recorded only in the pillar that governs compliance. This separation is the function of the framework — it identifies not merely that something is deficient, but which domain the deficiency belongs to and what would resolve it."
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SCORE INTEGRITY — totals are derived from criterion scores, never trusted from
// the header fields. If a criterion score changes, every total follows it.
// ─────────────────────────────────────────────────────────────────────────────

const PILLAR_TOTALS: Record<string, number> = Object.fromEntries(
  AUDIT.pillars.map((p) => [p.code, p.criteria.reduce((s, c) => s + c.score, 0)])
);
const GRAND_TOTAL = Object.values(PILLAR_TOTALS).reduce((s, v) => s + v, 0);

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

const SCORE_META: Record<string, { color: string }> = {
  "Absent": { color: T.fail }, "Minimal": { color: T.amber },
  "Partial": { color: "#8B9BB2" }, "Substantial": { color: T.pass },
  "Complete": { color: T.teal },
};

const PILLAR_ICONS: Record<string, React.ElementType> = { L: Brain, IO: Gauge, N: Shield, XE: Sparkles };
const LAWS: Record<string, string> = {
  L: "The Post-Flood Collapse Rule", IO: "The Weakest Link Axiom",
  N: "The Cost-Indifferent Mandate", XE: "The Commodity Threshold Law",
};

function getPillarGrade(score: number) {
  if (score < 25) return { label: "CRITICAL", color: T.fail };
  if (score < 50) return { label: "NEEDS WORK", color: T.amber };
  if (score < 75) return { label: "ACCEPTABLE", color: "#8B9BB2" };
  if (score < 90) return { label: "STRONG", color: T.pass };
  return { label: "EXCELLENT", color: T.teal };
}

function dashoffset(score: number, max = 400) { return 339 - (339 * (score / max)); }

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const METRIC_TONES: Record<string, string> = { good: T.pass, bad: T.fail, neutral: T.muted };

// Section heading with gold overline — the upgraded section header pattern
function SectionHeading({ overline, title }: { overline: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: T.brandLt }}>{overline}</p>
      <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: T.white, fontFamily: FH }}>{title}</h2>
      <div className="mt-4 h-px w-16" style={{ background: `linear-gradient(to right, ${T.brand}, transparent)` }} />
    </div>
  );
}

// Screenshot slot — dynamic-ready image placeholder
function ScreenshotSlot({ src, caption, aspect = "16/9" }: { src: string | null; caption: string; aspect?: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${T.bdr}`, background: T.surf }}>
      {src ? (
        <Image src={src} alt={caption} width={1200} height={675} priority
          className="h-auto w-full" style={{ objectFit: "cover" }} />
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-2 py-16"
          style={{ aspectRatio: aspect, border: `2px dashed rgba(255,255,255,0.12)`, borderRadius: "16px", margin: "-1px" }}>
          <ImageIcon className="h-8 w-8" style={{ color: T.muted, opacity: 0.5 }} />
          <span className="text-xs" style={{ color: T.muted }}>Place image at public/audits/brooklyn-area-rug-cleaning-homepage.png (1200×675)</span>
        </div>
      )}
      <figcaption className="px-5 py-3 text-xs" style={{ color: T.muted, borderTop: `1px solid ${T.bdr}` }}>{caption}</figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

export default function BrooklynAuditPage() {
  const [tocOpen, setTocOpen] = useState(true);
  const [methodOpen, setMethodOpen] = useState(false);

  const tocItems = [
    { id: "metrics", label: "Public Metrics Snapshot" },
    { id: "ceiling", label: "Evidence Ceiling" },
    { id: "methodology", label: "Methodology" },
    { id: "summary", label: "Executive Summary" },
    { id: "pillar-l", label: "Pillar L — Long-Term Logic" },
    { id: "pillar-io", label: "Pillar IO — Internal Optimization" },
    { id: "pillar-n", label: "Pillar N — Non-Negotiable Integrity" },
    { id: "pillar-xe", label: "Pillar XE — eXceptional Distinction" },
    { id: "score-table", label: "Score Summary" },
    { id: "recommendations", label: "Recommendations" },
    { id: "closing", label: "Closing Note" },
  ];

  return (
    <main style={{ background: T.bg, minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── BREADCRUMB ── */}
      <div className="px-4 pt-6 sm:px-6 lg:px-8" style={{ borderBottom: `1px solid ${T.bdr}` }}>
        <div className="mx-auto max-w-4xl">
          <nav className="flex flex-wrap items-center gap-1.5 pb-4 text-xs" style={{ color: T.muted }}>
            <a href="/" className="flex items-center gap-1 transition-colors hover:text-white"><Home className="h-3 w-3" /> Home</a>
            <ChevronRight className="h-3 w-3" />
            <a href="/audits" className="transition-colors hover:text-white">Audits</a>
            <ChevronRight className="h-3 w-3" />
            <span style={{ color: T.white }}>Brooklyn Area Rug Cleaning</span>
          </nav>
        </div>
      </div>

      {/* ── HERO — upgraded with radial glow + verdict ribbon ── */}
      <section className="relative overflow-hidden px-4 pb-8 pt-14 sm:px-6 lg:px-8"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,64,64,0.13), transparent), ${T.bg2}` }}>
        <div className="relative mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(59,125,216,0.1)", border: "1px solid rgba(59,125,216,0.3)", color: T.blue, boxShadow: "0 0 24px rgba(59,125,216,0.08)" }}>
            <ShieldCheck className="h-4 w-4" />
            LIONXE™ Independent Assessment · 01
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-4 text-3xl font-bold leading-[1.15] sm:text-5xl"
            style={{ color: T.white, fontFamily: FH, letterSpacing: "-0.02em" }}>
            {AUDIT.title}
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" style={{ color: T.muted }}>
            <a href={AUDIT.entityUrl} rel="nofollow noopener noreferrer" target="_blank"
              className="flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80" style={{ color: T.blue }}>
              <Link2 className="h-3.5 w-3.5" />brooklynarearugcleaning.com<ExternalLink className="h-3 w-3" />
            </a>
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{AUDIT.auditDate}</span>
            <span>{AUDIT.rubricVersion}</span>
            <span>Audited by <strong style={{ color: T.white }}>{AUDIT.auditorName}</strong></span>
          </motion.div>
        </div>
      </section>

      {/* ── SCORE CARD — upgraded: glow border, bigger gauge, verdict banner ── */}
      <section id="score-card" className="px-4 py-10 sm:px-6 lg:px-8" style={{ background: T.bg2, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-3xl"
            style={{ background: `linear-gradient(160deg, ${T.surf} 0%, ${T.bg2} 100%)`, border: "1px solid rgba(201,64,64,0.3)", boxShadow: "0 0 60px rgba(201,64,64,0.07), 0 24px 48px rgba(0,0,0,0.4)" }}>

            {/* Verdict ribbon */}
            <div className="flex items-center justify-between px-7 py-4"
              style={{ background: "linear-gradient(to right, rgba(201,64,64,0.14), rgba(201,64,64,0.03))", borderBottom: `1px solid rgba(201,64,64,0.2)` }}>
              <span className="flex items-center gap-2.5">
                <AlertTriangle className="h-5 w-5" style={{ color: T.fail }} />
                <span className="text-base font-black uppercase tracking-wider" style={{ color: T.fail, fontFamily: FH }}>
                  {AUDIT.certificationLevel}
                </span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: T.muted }}>
                {AUDIT.blockingIssues.length} blocking issues
              </span>
            </div>

            <div className="p-7">
              <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
                {/* Bigger gauge with glow */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 48px rgba(201,64,64,0.15)" }} />
                  <svg width="150" height="150" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="9" />
                    <motion.circle cx="60" cy="60" r="54" fill="none" stroke={T.fail} strokeWidth="9" strokeLinecap="round"
                      strokeDasharray="339" transform="rotate(-90 60 60)"
                      initial={{ strokeDashoffset: 339 }} animate={{ strokeDashoffset: dashoffset(GRAND_TOTAL) }}
                      transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }} />
                    <text x="60" y="56" textAnchor="middle" fill={T.white} fontSize="27" fontWeight="700" fontFamily="Space Grotesk, system-ui">{GRAND_TOTAL}</text>
                    <text x="60" y="74" textAnchor="middle" fill={T.muted} fontSize="11">/400</text>
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="mb-1 text-2xl font-bold" style={{ color: T.white, fontFamily: FH }}>{AUDIT.entityName}</h2>
                  <p className="mb-5 text-sm" style={{ color: T.muted }}>{AUDIT.entityDescriptor}</p>

                  <div className="space-y-2.5">
                    {AUDIT.pillars.map((p) => {
                      const Icon = PILLAR_ICONS[p.code];
                      const grade = getPillarGrade(PILLAR_TOTALS[p.code]);
                      const hasBlock = AUDIT.blockingIssues.some(b => b.code.startsWith(p.code) &&
                        (p.code !== "L" || !b.code.startsWith("XE")));
                      return (
                        <div key={p.code} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs">
                              <Icon className="h-3.5 w-3.5" style={{ color: grade.color }} />
                              <span className="font-bold" style={{ color: T.white }}>{p.code}</span>
                              <span style={{ color: T.muted }}>{p.name}</span>
                              {hasBlock && (
                                <span className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase"
                                  style={{ background: "rgba(201,64,64,0.15)", color: T.fail }}>Block</span>
                              )}
                            </div>
                            <span className="text-xs font-bold tabular-nums" style={{ color: T.white }}>
                              {PILLAR_TOTALS[p.code]}<span style={{ color: T.muted }}>/100</span>
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                            <motion.div className="h-full rounded-full"
                              style={{ background: `linear-gradient(to right, ${grade.color}, ${grade.color}CC)` }}
                              initial={{ width: 0 }} animate={{ width: `${PILLAR_TOTALS[p.code]}%` }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Blocking chips */}
              <div className="mt-6 flex flex-wrap gap-2" style={{ borderTop: `1px solid ${T.bdr}`, paddingTop: "18px" }}>
                {AUDIT.blockingIssues.map((b) => (
                  <div key={b.code} className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold"
                    style={{ background: "rgba(201,64,64,0.1)", border: "1px solid rgba(201,64,64,0.25)", color: T.fail }}>
                    <Flag className="h-3 w-3 shrink-0" />
                    <span className="font-bold">{b.code}</span>
                    <span style={{ color: T.white, opacity: 0.55 }}>·</span>
                    <span style={{ color: "#D89090" }}>{b.name}</span>
                  </div>
                ))}
              </div>

              {/* Key findings */}
              <div className="mt-5" style={{ borderTop: `1px solid ${T.bdr}`, paddingTop: "18px" }}>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: T.muted }}>Key Findings</p>
                <ul className="space-y-2">
                  {AUDIT.keyFindings.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] leading-6" style={{ color: "#93A3B8" }}>
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: T.brandLt }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Homepage screenshot slot */}
          <div className="mt-8">
            <ScreenshotSlot src={AUDIT.visualEvidence.heroScreenshot} caption={AUDIT.visualEvidence.heroCaption} />
          </div>
        </div>
      </section>

      {/* ── TOC — pill style, smooth scroll ── */}
      <section className="px-4 py-6 sm:px-6 lg:px-8" style={{ background: T.bg2 }}>
        <div className="mx-auto max-w-4xl">
          <button onClick={() => setTocOpen(!tocOpen)}
            className="mb-3 flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: T.brandLt }}>
            <List className="h-4 w-4" />
            {tocOpen ? "Hide" : "Show"} Table of Contents
            <ChevronDown className={`h-4 w-4 transition-transform ${tocOpen ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {tocOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="rounded-2xl p-5" style={{ background: T.surf, border: `1px solid ${T.bdr}` }}>
                  <ol className="space-y-0.5">
                    {tocItems.map((item, i) => (
                      <li key={item.id}>
                        <button onClick={() => scrollToId(item.id)}
                          className="group inline-flex items-center gap-2.5 rounded-lg py-1.5 pr-3 text-left text-sm transition-colors hover:text-white"
                          style={{ color: T.muted }}>
                          <span className="w-5 shrink-0 text-xs font-bold tabular-nums" style={{ color: T.brandLt }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="transition-colors group-hover:text-white">{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── PUBLIC METRICS SNAPSHOT — new section ── */}
      <section id="metrics" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-4xl">
          <SectionHeading overline="Verifiable Baseline" title="Public Metrics Snapshot" />
          <p className="mb-8 -mt-4 text-sm leading-7" style={{ color: T.muted }}>
            All figures below are drawn from free, publicly accessible tools (Moz free metrics, Semrush public domain overview, PageSpeed Insights) as of June 2026, and can be reproduced by any reader.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {AUDIT.publicMetrics.map((m) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}
                className="rounded-2xl p-4"
                style={{ background: T.surf, border: `1px solid ${m.tone === "good" ? "rgba(74,153,96,0.25)" : m.tone === "bad" ? "rgba(201,64,64,0.2)" : T.bdr}` }}>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide" style={{ color: T.muted }}>{m.label}</p>
                <p className="text-2xl font-black tabular-nums" style={{ color: METRIC_TONES[m.tone], fontFamily: FH }}>{m.value}</p>
                <p className="mt-1 text-[11px] leading-4" style={{ color: T.muted, opacity: 0.8 }}>{m.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── EVIDENCE CEILING ── */}
      <section id="ceiling" className="px-4 py-10 sm:px-6 lg:px-8" style={{ background: T.bg2, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl p-6" style={{ background: T.surf, border: `1px solid ${T.brandBdr}`, borderLeft: `3px solid ${T.brand}` }}>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: T.brandLt }}>Evidence Ceiling</p>
            <p className="text-sm leading-7" style={{ color: "#93A3B8" }}>
              This is an independent assessment, and it carries a structural limit: it reflects what is publicly observable, and nothing is assumed in the entity&rsquo;s favour beyond that. A certification audit, in which the entity submits internal documentation, has access to a fuller picture and can produce a different result.
            </p>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section id="methodology" className="px-4 py-10 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl p-6" style={{ background: T.surf, borderLeft: `3px solid ${T.blue}`, border: `1px solid rgba(59,125,216,0.2)`, borderLeftWidth: "3px", borderLeftColor: T.blue }}>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: T.blue }}>Independent Assessment — Methodology</p>
            <p className="text-sm leading-7" style={{ color: "#93A3B8" }}>
              <strong style={{ color: T.white }}>{AUDIT.entityName}</strong> did not request this evaluation and has not paid for it. All findings and figures cited are based on publicly accessible information only: browser inspection of the live website, Google Search, PageSpeed Insights, web.archive.org, Moz free metrics, Semrush public domain overview, and the business's publicly linked social profiles. Every claim in this report can be independently reproduced by any reader using the same free tools. This assessment does not constitute LIONXE™ Certification. The outbound link to the entity's site uses <code className="rounded px-1.5 text-xs" style={{ background: "rgba(255,255,255,0.07)", color: T.white }}>rel="nofollow"</code> and passes no SEO authority.{" "}
              <a href="/rubric" className="font-semibold hover:underline" style={{ color: T.blue }}>Assessed against {AUDIT.rubricVersion}.</a>
            </p>
            <button onClick={() => setMethodOpen(!methodOpen)}
              className="mt-3 flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-80" style={{ color: T.blue }}>
              <BookOpen className="h-3.5 w-3.5" />
              {methodOpen ? "Hide" : "Show"} evidence sources
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${methodOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {methodOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {["Browser inspection (live public website)", "PageSpeed Insights (Google, free)", "web.archive.org (Wayback Machine)", "Google Search & Google Maps (public)", "Moz free domain metrics", "Semrush public domain overview", "Publicly linked social profiles (FB, IG, YT)", "Browser DevTools (meta tags, markup)"].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-xs" style={{ color: T.muted }}>
                        <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: T.blue }} />{s}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE SUMMARY ── */}
      <section id="summary" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-4xl">
          <SectionHeading overline="Overview" title="Executive Summary" />
          <div className="space-y-5">
            {AUDIT.executiveSummary.map((para, i) => (
              <p key={i} className="text-[15px] leading-8" style={{ color: "#93A3B8" }}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLAR SECTIONS ── */}
      {AUDIT.pillars.map((pillar, pillarIdx) => {
        const Icon = PILLAR_ICONS[pillar.code];
        const grade = getPillarGrade(PILLAR_TOTALS[pillar.code]);
        const isEven = pillarIdx % 2 === 0;
        const blockingHere = AUDIT.blockingIssues.filter(b => {
          const prefix = b.code.replace(/[0-9]/g, "");
          return prefix === pillar.code;
        });
        return (
          <section key={pillar.code} id={`pillar-${pillar.code.toLowerCase()}`}
            className="px-4 py-16 sm:px-6 lg:px-8"
            style={{ background: isEven ? T.bg2 : T.bg, scrollMarginTop: "24px" }}>
            <div className="mx-auto max-w-4xl">
              <div className="mb-10">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ background: `${grade.color}14`, border: `1px solid ${grade.color}30`, boxShadow: `0 0 24px ${grade.color}10` }}>
                      <Icon className="h-7 w-7" style={{ color: grade.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: T.brandLt }}>Pillar {pillar.code}</p>
                      <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: T.white, fontFamily: FH }}>{pillar.name}</h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl px-3.5 py-2 text-sm font-bold"
                      style={{ background: `${grade.color}18`, border: `1px solid ${grade.color}40`, color: grade.color }}>
                      {grade.label}
                    </span>
                    <span className="text-3xl font-black" style={{ color: T.white, fontFamily: FH }}>
                      {PILLAR_TOTALS[pillar.code]}<span className="text-base font-medium" style={{ color: T.muted }}>/100</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs" style={{ color: T.muted }}>
                  Governing Law: <strong style={{ color: T.white }}>{LAWS[pillar.code]}</strong>
                </p>
                {blockingHere.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {blockingHere.map((b) => (
                      <div key={b.code} className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold"
                        style={{ background: "rgba(201,64,64,0.1)", border: "1px solid rgba(201,64,64,0.25)", color: T.fail }}>
                        <Flag className="h-3 w-3" /><span className="font-bold">{b.code}</span> — {b.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {pillar.criteria.map((crit) => {
                  const sm = SCORE_META[crit.label] || { color: T.muted };
                  return (
                    <motion.div key={crit.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                      <div className="overflow-hidden rounded-2xl"
                        style={{ background: crit.blocking ? "rgba(201,64,64,0.035)" : T.surf, border: crit.blocking ? "1px solid rgba(201,64,64,0.28)" : `1px solid ${T.bdr}`, borderLeft: `3px solid ${sm.color}` }}>
                        <div className="p-6">
                          <div className="mb-4 flex items-start justify-between gap-4">
                            <div>
                              <p className="text-sm font-bold uppercase tracking-wider" style={{ color: T.brandLt }}>{crit.id}</p>
                              <h4 className="text-lg font-bold" style={{ color: T.white, fontFamily: FH }}>{crit.name}</h4>
                            </div>
                            <div className="flex shrink-0 flex-col items-end gap-1.5">
                              <div className="flex items-center gap-2.5">
                                <span className="text-sm font-bold" style={{ color: sm.color }}>{crit.label}</span>
                                <span className="rounded-xl px-3.5 py-1.5 text-lg font-black"
                                  style={{ background: "rgba(255,255,255,0.055)", border: `1px solid ${T.bdr}`, color: T.white, fontFamily: FH }}>
                                  {crit.score}<span className="text-xs font-medium" style={{ color: T.muted }}>/25</span>
                                </span>
                              </div>
                              {crit.blocking && (
                                <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-bold"
                                  style={{ background: "rgba(201,64,64,0.14)", color: T.fail }}>
                                  <Flag className="h-3 w-3" /> BLOCKING
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-sm leading-7" style={{ color: "#93A3B8" }}>
                            <strong style={{ color: "#B8C5D6", fontWeight: 600 }}>Evidence: </strong>{crit.evidence}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── SCORE SUMMARY TABLE ── */}
      <section id="score-table" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-4xl">
          <SectionHeading overline="The Verdict" title="Score Summary" />
          <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${T.bdr}`, boxShadow: "0 16px 40px rgba(0,0,0,0.3)" }}>
            <div className="grid grid-cols-3 px-5 py-3.5 text-xs font-bold uppercase tracking-wide"
              style={{ background: T.surf2, color: T.muted, borderBottom: `1px solid ${T.bdr}` }}>
              <span>Pillar</span><span className="text-center">Score</span><span className="text-right">Grade</span>
            </div>
            {AUDIT.pillars.map((p, i) => {
              const grade = getPillarGrade(PILLAR_TOTALS[p.code]);
              return (
                <div key={p.code} className="grid grid-cols-3 items-center px-5 py-3.5"
                  style={{ background: i % 2 === 0 ? T.surf : T.bg2, borderBottom: `1px solid ${T.bdr}` }}>
                  <span className="text-sm" style={{ color: T.white }}>
                    <span className="font-bold" style={{ color: T.brandLt }}>{p.code}</span>
                    <span style={{ color: T.muted }}> — {p.name}</span>
                  </span>
                  <span className="text-center font-bold tabular-nums" style={{ color: T.white }}>{PILLAR_TOTALS[p.code]}<span style={{ color: T.muted }}>/100</span></span>
                  <span className="text-right text-xs font-bold" style={{ color: grade.color }}>{grade.label}</span>
                </div>
              );
            })}
            <div className="grid grid-cols-3 items-center px-5 py-5"
              style={{ background: "linear-gradient(to right, rgba(201,64,64,0.08), transparent)", borderTop: `1px solid rgba(255,255,255,0.1)` }}>
              <span className="text-base font-bold" style={{ color: T.white, fontFamily: FH }}>Grand Total</span>
              <span className="text-center text-3xl font-black tabular-nums" style={{ color: T.white, fontFamily: FH }}>
                {GRAND_TOTAL}<span className="text-sm font-medium" style={{ color: T.muted }}>/400</span>
              </span>
              <span className="text-right text-sm font-black" style={{ color: T.fail }}>{AUDIT.certificationLevel}</span>
            </div>
          </div>
          <p className="mt-3 text-xs" style={{ color: T.muted }}>
            6 blocking issues detected. Cascade failure confirmed at Pillar L (Gate 1). All four pillars scored in full for educational completeness.
          </p>
        </div>
      </section>

      {/* ── RECOMMENDATIONS ── */}
      <section id="recommendations" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg2, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-4xl">
          <SectionHeading overline="The Path Forward" title="Top 3 Recommendations" />
          <div className="space-y-7">
            {AUDIT.recommendations.map((rec) => (
              <motion.div key={rec.order} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
                className="flex gap-5">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl p-3.5 text-xl font-black"
                  style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}`, color: T.brandLt, fontFamily: FH, boxShadow: "0 0 20px rgba(0,77,253,0.1)" }}>
                  {rec.order}
                </div>
                <div className="flex-1 rounded-2xl p-6" style={{ background: T.surf, border: `1px solid ${T.bdr}` }}>
                  <h3 className="mb-2.5 text-base font-bold" style={{ color: T.white, fontFamily: FH }}>{rec.title}</h3>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {rec.criteria.map((c) => (
                      <span key={c} className="rounded-md px-2 py-0.5 text-xs font-bold"
                        style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}`, color: T.brandLt }}>{c}</span>
                    ))}
                  </div>
                  <p className="text-sm leading-7" style={{ color: "#93A3B8" }}>{rec.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING NOTE ── */}
      <section id="closing" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl p-7" style={{ background: "rgba(59,125,216,0.045)", border: "1px solid rgba(59,125,216,0.18)" }}>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider" style={{ color: T.blue }}>A Note on This Assessment</p>
            <div className="space-y-4">
              {AUDIT.closingNote.map((para, i) => (
                <p key={i} className="text-sm leading-7" style={{ color: "#93A3B8" }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 110%, rgba(200,151,31,0.1), transparent), linear-gradient(to bottom, ${T.bg2}, ${T.bg})` }}>
        <div className="relative mx-auto max-w-4xl text-center">
          <FileWarning className="mx-auto mb-5 h-11 w-11" style={{ color: T.brandLt }} />
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl" style={{ color: T.white, fontFamily: FH }}>
            Apply for a LIONXE™ Audit
          </h2>
          <p className="mb-9 text-lg" style={{ color: T.muted }}>
            Find out where your digital asset stands against the 16-criterion LIONXE™ standard.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/certification" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: T.gold, color: T.bg, boxShadow: "0 8px 32px rgba(200,151,31,0.25)" }}>
              Explore Certification <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/audits" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.12)`, color: T.white }}>
              View All Audits
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}