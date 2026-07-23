// ─────────────────────────────────────────────────────────────────────────────
// app/rubric/page.tsx — The LIONXE™ Audit Rubric (Server Component Wrapper)
// The canonical public standard page. Every audit's "Assessed against
// LIONXE™ Audit Rubric v1.0" link resolves here.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import RubricPageClient from "./RubricPageClient";

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://lionxe.com";
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
}

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/rubric`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "The LIONXE™ Audit Rubric v1.0 — Complete Scoring Standard | LIONXE™",
  description:
    "The complete LIONXE™ Audit Rubric v1.0: 16 universal criteria across four pillars — Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction — applicable to websites, software tools, organizations, content channels, physical projects, and personal decisions. Includes every scoring anchor, sector lenses, both evidence tracks, and an interactive scoring simulator.",
  keywords: [
    "LIONXE audit rubric", "LIONXE scoring system", "digital quality audit framework",
    "website audit rubric", "self audit framework", "digital quality standard",
    "LIONXE rubric v1.0", "audit scoring criteria", "how to audit a website", "sector agnostic audit framework", "audit scoring simulator",
    "quality certification rubric", "Sufian Mustafa", "LIONXE certification thresholds",
  ],
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",
  alternates: { canonical: "/rubric" },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "LIONXE™",
    title: "The LIONXE™ Audit Rubric v1.0 — The Complete Standard, Published in Full",
    description: "All 16 criteria, every scoring anchor, both evidence tracks, and every certification threshold. The standard behind every LIONXE™ assessment — open for anyone to self-audit with.",
    locale: "en_US",
    images: [{
      url: `${BASE_URL}/api/og?title=The+LIONXE%E2%84%A2+Audit+Rubric+v1.0&ctaText=Read+the+Standard&features=16+Criteria,4+Pillars,400+Points,Published+in+Full`,
      width: 1200, height: 630,
      alt: "The LIONXE™ Audit Rubric v1.0",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "The LIONXE™ Audit Rubric v1.0 — Published in Full",
    description: "The complete standard behind every LIONXE™ assessment: 16 criteria, 4 pillars, 400 points. Open for self-auditing in any sector.",
    images: [`${BASE_URL}/api/og?title=The+LIONXE%E2%84%A2+Audit+Rubric+v1.0`],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1, "max-video-preview": -1 },
  },
  other: {
    "content-type": "standard-specification",
    "ai-content-declaration": "human-created, ai-assisted",
    "content-category": "audit-rubric, evaluation-standard",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "rubric-version": "1.0",
    "rubric-criteria-count": "16",
    "rubric-max-score": "400",
    "entity-type": "CreativeWork, DefinedTermSet",
    "answer-type": "Standard, Rubric, Methodology",
    "answer-confidence": "high",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────

function articleSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}/#article`,
    headline: "The LIONXE™ Audit Rubric v1.0 — The Complete Evaluation Standard",
    alternativeHeadline: "16 Criteria, 4 Pillars, 400 Points — Published in Full",
    description: "The complete LIONXE™ Audit Rubric: every scoring statement, all five score anchors per criterion, evidence sources for both the independent assessment and certification tracks, the three architectural principles, and all six certification thresholds.",
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    datePublished: "2026-07-21",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: PAGE_URL,
    articleSection: "Standards",
    keywords: "LIONXE rubric, audit standard, scoring criteria, digital quality framework, self audit",
    isPartOf: { "@type": "CreativeWork", "@id": `${BASE_URL}/#framework`, name: "LIONXE™ Framework" },
  });
}

function definedTermSetSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${PAGE_URL}/#termset`,
    name: "LIONXE™ Audit Rubric v1.0 — Criteria",
    description: "The 16 evaluation criteria of the LIONXE™ Audit Rubric, organized across four pillars.",
    creator: { "@id": PERSON_ID },
    hasDefinedTerm: [
      { "@type": "DefinedTerm", termCode: "L1",  name: "Directional Clarity" },
      { "@type": "DefinedTerm", termCode: "L2",  name: "Foundational Durability" },
      { "@type": "DefinedTerm", termCode: "L3",  name: "Decision Discipline" },
      { "@type": "DefinedTerm", termCode: "L4",  name: "Resilience & Forward Risk" },
      { "@type": "DefinedTerm", termCode: "IO1", name: "Technical Foundation & Integrity" },
      { "@type": "DefinedTerm", termCode: "IO2", name: "Output & Presentation Quality" },
      { "@type": "DefinedTerm", termCode: "IO3", name: "Visibility & Reach Systems" },
      { "@type": "DefinedTerm", termCode: "IO4", name: "Operational Completeness & Upkeep" },
      { "@type": "DefinedTerm", termCode: "N1",  name: "Claim Accuracy" },
      { "@type": "DefinedTerm", termCode: "N2",  name: "Compliance With Governing Rules" },
      { "@type": "DefinedTerm", termCode: "N3",  name: "Transparency" },
      { "@type": "DefinedTerm", termCode: "N4",  name: "Absence of Manipulation" },
      { "@type": "DefinedTerm", termCode: "XE1", name: "Articulated Distinction" },
      { "@type": "DefinedTerm", termCode: "XE2", name: "Recognizable Identity" },
      { "@type": "DefinedTerm", termCode: "XE3", name: "Distinction in Practice" },
      { "@type": "DefinedTerm", termCode: "XE4", name: "Enduring Relevance" },
    ],
  });
}

function breadcrumbSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Audit Rubric", item: PAGE_URL },
    ],
  });
}

function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the LIONXE Audit Rubric?",
        acceptedAnswer: { "@type": "Answer", text: "The LIONXE™ Audit Rubric is the complete evaluation standard applied in every LIONXE™ Independent Assessment and Certification Audit. It is sector-agnostic by design — the same 16 criteria evaluate websites, software tools, organizations, content channels, physical projects, and personal decisions — organized across four pillars — Long-Term Logic (L), Internal Optimization (IO), Non-Negotiable Integrity (N), and eXceptional Distinction (XE). Each criterion is scored on a five-level scale (0, 6, 12, 18, 25) for a maximum of 100 points per pillar and 400 points total. The rubric is published in full so any reader can verify what standard a published assessment applied, and use it to self-audit their own organization." },
      },
      {
        "@type": "Question",
        name: "How does the LIONXE scoring scale work?",
        acceptedAnswer: { "@type": "Answer", text: "Every criterion is scored on the same five-level scale: 0 means affirmative evidence exists that the standard is not met or is actively violated; 6 means minimal evidence — the standard cannot be confirmed from available evidence; 12 means partial and inconsistent presence; 18 means substantial presence with minor gaps; 25 means complete and consistent presence everywhere reviewed. A pillar totalling below 15/100, or any criterion scoring 0, triggers a blocking issue flag regardless of the grand total." },
      },
      {
        "@type": "Question",
        name: "What is the no-evidence rule in the LIONXE rubric?",
        acceptedAnswer: { "@type": "Answer", text: "When no evidence can be found for a criterion, the correct score is always 6 — never 0 and never blank. A score of 0 requires affirmative evidence of failure, not simply the absence of evidence of success. This rule keeps independent assessments honest: a 6 records that the standard cannot be confirmed from public information, which may simply mean the entity has not made that aspect of its operation publicly visible. For entities pursuing certification, submitting internal documentation can raise such scores." },
      },
      {
        "@type": "Question",
        name: "Can I use the LIONXE rubric to audit my own website or business?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. The rubric is published specifically so that any founder, marketer, or operator can self-audit in any sector. Work through the pillars in order (L, IO, N, XE), gather the evidence described for each criterion before scoring, match findings to the scoring statements, flag any pillar below 15/100 as blocking, and map the grand total to the certification thresholds. Attribution is required when referencing the rubric; commercial use to conduct paid third-party audits requires written permission." },
      },
      {
        "@type": "Question",
        name: "Why do independent assessments score lower than certification audits?",
        acceptedAnswer: { "@type": "Answer", text: "Because of the Evidence Ceiling Rule. Where a factor cannot be verified from the evidence available in the applicable track, it is scored as unconfirmed at the 6-level, and the domain's achievable score is capped accordingly. An independent assessment measures what is publicly visible, not what exists — an entity may hold strong internal practices that leave no public trace, and the rubric records those as unconfirmed rather than assuming them. A certification audit raises the ceiling by supplying the internal evidence public sources cannot provide. Every published LIONXE assessment states this limitation openly." },
      },
      {
        "@type": "Question",
        name: "What is the difference between the two evidence tracks in the rubric?",
        acceptedAnswer: { "@type": "Answer", text: "The scoring statements never change between tracks — only the evidence available to verify them changes. The Independent Assessment track uses publicly accessible information only: the live website, search results, free analysis tools, and public archives. The Certification Audit track adds submitted internal documentation: strategic plans, compliance records, monitoring reports, and design systems. The same entity state earns the same score on either track; certification simply makes more states verifiable." },
      },
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={articleSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={definedTermSetSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />
      <RubricPageClient />
    </>
  );
}