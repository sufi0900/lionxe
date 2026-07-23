// ─────────────────────────────────────────────────────────────────────────────
// app/audits/brooklyn-area-rug-cleaning-independent-assessment/page.tsx
// SERVER COMPONENT — SEO metadata + JSON-LD + renders client component
//
// STATIC VERSION: All data is hardcoded. When the dynamic Sanity system is
// ready, this file is replaced by the dynamic app/audits/[slug]/page.tsx
// route which fetches from Sanity and renders the same client component
// structure. The client component (BrooklynAuditClient.tsx) does not change
// at all during that migration — only the data source changes.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import BrooklynAuditClient from "./BrooklynAuditClient";

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://lionxe.com";
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
}

const BASE_URL   = getBaseUrl();
const PAGE_URL   = `${BASE_URL}/audits/brooklyn-area-rug-cleaning-independent-assessment`;
const PERSON_ID  = "https://sufianmustafa.com/#sufian-mustafa";

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title:
    "Independent Assessment: US-Facing Home Services Website | LIONXE™ Audit 01",
  description:
    "LIONXE™ Independent Assessment of a US-facing home services website in the Brooklyn area rug cleaning sector. Score: 60/400 — Does Not Pass. Six blocking issues identified across Long-Term Logic, Non-Negotiable Integrity, and eXceptional Distinction. All findings based on publicly accessible evidence. Assessed using LIONXE™ Audit Rubric v1.0.",

  keywords: [
    "LIONXE assessment",
    "LIONXE audit",
    "home services SEO audit",
    "carpet cleaning website audit",
    "doorway page SEO violation",
    "location swap duplicate content",
    "LIONXE rubric v1.0",
    "Sufian Mustafa",
    "digital quality assessment",
    "independent SEO audit",
    "LIONXE does not pass",
  ],

  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",
  alternates: { canonical: "/audits/brooklyn-area-rug-cleaning-independent-assessment" },

  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "LIONXE™",
    title: "LIONXE™ Audit 01 — US Home Services Website: 60/400, Does Not Pass",
    description:
      "An independent assessment of a US-facing home services website. Evaluated across 16 criteria. Score: 60/400. Six blocking issues. All findings based on publicly accessible evidence only.",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/api/og?title=LIONXE%E2%84%A2+Audit+01%3A+Home+Services+Website&ctaText=Read+the+Audit&features=Score%3A+60%2F400%2CDoes+Not+Pass%2C6+Blocking+Issues`,
        width: 1200,
        height: 630,
        alt: "LIONXE™ Audit 01 — Independent Assessment: US Home Services Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "LIONXE™ Audit 01 — 60/400, Does Not Pass",
    description:
      "Independent assessment of a US home services website. Location-swap service area pages, keyword stuffing, absent structured data. Six blocking issues.",
    images: [
      `${BASE_URL}/api/og?title=LIONXE%E2%84%A2+Audit+01%3A+Home+Services+Website&ctaText=Read+the+Audit&features=Score%3A+60%2F400%2CDoes+Not+Pass%2C6+Blocking+Issues`,
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "content-type":             "audit-report",
    "ai-content-declaration":   "human-created, ai-assisted",
    "content-category":         "independent-assessment",
    "brand-name":               "LIONXE",
    "brand-founder":            "Sufian Mustafa",
    "audit-track":              "Independent Assessment",
    "audit-score":              "60/400",
    "audit-outcome":            "Does Not Pass",
    "audit-blocking-issues":    "6",
    "audit-rubric-version":     "LIONXE Audit Rubric v1.0",
    "audit-evidence-scope":     "Public information only",
    "entity-type":              "Review, AuditReport",
    "answer-type":              "IndependentAssessment, AuditResult",
    "answer-confidence":        "high",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────

// 1. Article — the audit report as a formal published article
function articleSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}/#article`,
    headline:
      "LIONXE™ Independent Assessment: US-Facing Home Services Website — Brooklyn Area Rug Cleaning",
    alternativeHeadline:
      "Score: 60/400 — Does Not Pass — 6 Blocking Issues Identified",
    description:
      "An independent LIONXE™ assessment of a US-facing home services website in the carpet and rug cleaning sector. All 16 criteria evaluated using publicly accessible evidence only. Six blocking issues identified across the Long-Term Logic, Non-Negotiable Integrity, and eXceptional Distinction pillars.",
    author:    { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    datePublished:  "2026-06-21",
    dateModified:   new Date().toISOString().split("T")[0],
    mainEntityOfPage: PAGE_URL,
    articleSection:   "Independent Assessments",
    keywords:
      "LIONXE assessment, home services SEO, doorway pages, location swap content, keyword stuffing, Does Not Pass",
    wordCount: 5600,
    image: {
      "@type":  "ImageObject",
      url:      `${BASE_URL}/api/og?title=LIONXE%E2%84%A2+Audit+01`,
      width:    1200,
      height:   630,
    },
    about: {
      "@type":       "Organization",
      name:          "Brooklyn Area Rug Cleaning",
      description:   "A home services website operating in the carpet and rug cleaning sector in the Brooklyn, New York area.",
      url:           "https://www.brooklynarearugcleaning.com/",
    },
    isPartOf: {
      "@type":  "CreativeWork",
      "@id":    `${BASE_URL}/#framework`,
      name:     "LIONXE™ Framework",
    },
  });
}

// 2. Review — the evaluation result in schema.org Review type
function reviewSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${PAGE_URL}/#review`,
    author:    { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    datePublished: "2026-06-21",
    reviewBody:
      "Independent LIONXE™ assessment of a US-facing home services website. The evaluation found the digital strategy structurally non-viable across all four pillars, with every codified violation consolidated and scored once under Non-Negotiable Integrity. Score: 60 out of 400. Outcome: Does Not Pass. Six blocking issues were identified, including location-swap doorway pages (L2, N2, N4), a customer-count claim contradicted by the public review footprint (N1), absent contingency planning (L4), and zero brand identity measured by 0% branded search traffic (XE2). All findings are based on publicly accessible evidence only.",
    reviewRating: {
      "@type":            "Rating",
      ratingValue:        60,
      bestRating:         400,
      worstRating:        0,
      ratingExplanation:
        "LIONXE™ score across 16 criteria (4 pillars × 4 criteria × 25 points). Assessed using LIONXE™ Audit Rubric v1.0. This is an Independent Assessment — the entity did not request or pay for this evaluation.",
    },
    itemReviewed: {
      "@type":       "Organization",
      name:          "Brooklyn Area Rug Cleaning",
      description:   "A home services website operating in the carpet and rug cleaning sector targeting Brooklyn, New York and surrounding neighborhoods.",
      url:           "https://www.brooklynarearugcleaning.com/",
    },
  });
}

// 3. BreadcrumbList — Home → Audits → This assessment
function breadcrumbSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",   item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Audits", item: `${BASE_URL}/audits` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Brooklyn Area Rug Cleaning — Independent Assessment",
        item: PAGE_URL,
      },
    ],
  });
}

// 4. FAQPage — questions answered by the content of this audit (AEO)
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes service area pages with location-swap content a Google violation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google's Spam Policies define doorway abuse as creating substantially similar pages targeted at specific regions or cities that differ only by the place name. When the body content of a page targeting Brooklyn is identical to the body content of a page targeting the Bronx — with only the location name substituted — this matches Google's published definition of doorway pages. Google has enforced against this pattern since 2015 and reinforced enforcement with the March 2024 Core Update.",
        },
      },
      {
        "@type": "Question",
        name: "Why does a home services website fail the eXceptional Distinction pillar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The eXceptional Distinction pillar is governed by the Commodity Threshold Law: if an asset can be easily replaced by a generic alternative, its distinction score is zero. A website using a standard template, keyword-structured content, and claims that any competitor in the category could also make has no observable differentiator. Removing the business name from consideration, nothing on the website would allow an informed reader to associate it with a specific company rather than the service category generally.",
        },
      },
      {
        "@type": "Question",
        name: "What evidence was used in this LIONXE independent assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All findings in this assessment are based on publicly accessible evidence only: browser inspection of the publicly accessible website, Google Search, Google Maps, PageSpeed Insights, web.archive.org, Moz free metrics, Semrush public domain overview, and the publicly linked social profiles of the business. No internal documentation, confidential data, or privileged access was used or cited. Every claim in this report can be independently reproduced by any reader using the same free tools.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a LIONXE independent assessment and a LIONXE certification audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A LIONXE independent assessment is conducted without payment, request, or consent from the entity being evaluated, using only publicly accessible information. A LIONXE certification audit is a formal process where the entity submits internal documentation, pays a certification fee, and provides explicit written consent for publication. Certification audits have access to evidence not available in independent assessments. This report is an independent assessment.",
        },
      },
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      {/* JSON-LD — native <script> tags per Next.js best practice */}
      <script type="application/ld+json" dangerouslySetInnerHTML={articleSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={reviewSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      {/* Client component — same component used by the future dynamic route */}
      <BrooklynAuditClient />
    </>
  );
}