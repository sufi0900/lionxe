// ─────────────────────────────────────────────────────────────────────────────
// lib/audits-static-data.ts
//
// STATIC audit registry for the /audits index page.
// The shape of each object here is DELIBERATELY IDENTICAL to what the future
// Sanity GROQ query (AUDIT_SUMMARY_FIELDS) will return, field for field:
//   slug is a flat string here (not { current: string } as raw Sanity returns),
//   because the future dynamic fetch layer will do the one-line mapping
//   `slug: doc.slug.current` before handing data to <AuditListCard>. That
//   keeps the card component itself 100% agnostic to where the data came
//   from — swapping this static array for a Sanity fetch requires touching
//   ONLY this file (or the page that reads it), never the card or the page UI.
//
// TO ADD A NEW AUDIT: copy the object below, fill in every field, push it
// into the STATIC_AUDITS array. Nothing else in the app needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export type AuditType = "independent" | "certification";
export type CertificationLevel =
  | "does-not-pass"
  | "below-threshold"
  | "conditional-pass"
  | "certified"
  | "gold"
  | "platinum";

export interface BlockingIssue {
  code: string;
  name: string;
}

export interface StaticAuditSummary {
  id: string;                     // stable key, mirrors future Sanity _id
  slug: string;                   // flat string — see note above
  title: string;
  auditType: AuditType;
  entityName: string;
  entityLogoUrl?: string;         // optional — omit for anonymised entities
  industry: string;
  auditDate: string;              // ISO date, e.g. "2026-06-21"
  grandTotalScore: number;
  certificationLevel: CertificationLevel;
  lPillarScore: number;
  ioPillarScore: number;
  nPillarScore: number;
  xePillarScore: number;
  blockingIssues: BlockingIssue[];
  keyFindings: string[];          // shown as bullets on the card, max ~3 used
  isAnonymized: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// THE REGISTRY — add future audits here, newest first (index page sorts by
// date regardless, but keeping newest-first here matches eventual GROQ
// `order(auditDate desc)` behaviour for anyone reading this file directly).
// ─────────────────────────────────────────────────────────────────────────────

export const STATIC_AUDITS: StaticAuditSummary[] = [
  {
    id: "audit-01-brooklyn-area-rug-cleaning",
    slug: "brooklyn-area-rug-cleaning-independent-assessment",
    title: "Independent Assessment: Brooklyn Area Rug Cleaning",
    auditType: "independent",
    entityName: "Brooklyn Area Rug Cleaning",
    industry: "Home Services",
    auditDate: "2026-06-21",
    grandTotalScore: 60,
    certificationLevel: "does-not-pass",
    lPillarScore: 12,
    ioPillarScore: 30,
    nPillarScore: 6,
    xePillarScore: 12,
    blockingIssues: [
      { code: "L2", name: "Foundational Durability" },
      { code: "L4", name: "Resilience & Forward Risk" },
      { code: "N1", name: "Claim Accuracy" },
      { code: "N2", name: "Compliance With Governing Rules" },
      { code: "N4", name: "Absence of Manipulation" },
      { code: "XE2", name: "Recognizable Identity" },
    ],
    keyFindings: [
      "Owned capital after fifteen years is negligible: Domain Authority 9, 0% branded search demand, and organic traffic trending −26%.",
      "Two practices match published search-platform prohibitions: location-page duplication and dense keyword repetition.",
      "A homepage claim of 52,000+ customers stands against a total verifiable public review record of 58.",
    ],
    isAnonymized: false,
  },

  // ── Add future audits below this line ──────────────────────────────────
  // {
  //   id: "audit-02-...",
  //   slug: "...",
  //   title: "...",
  //   auditType: "independent" | "certification",
  //   entityName: "...",
  //   industry: "...",
  //   auditDate: "YYYY-MM-DD",
  //   grandTotalScore: 0,
  //   certificationLevel: "does-not-pass",
  //   lPillarScore: 0, ioPillarScore: 0, nPillarScore: 0, xePillarScore: 0,
  //   blockingIssues: [],
  //   keyFindings: [],
  //   isAnonymized: false,
  // },
];