// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — CASE STUDY 01 (Server Component Wrapper)
// File: app/case-studies/pakistan-digital-agency-home-services-audit/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import CaseStudy01Page from "./CaseStudy01Page";

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://lionxe.com";
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
}

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/case-studies/pakistan-digital-agency-home-services-audit`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params: Record<string, string>) {
  return `${BASE_URL}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "LIONXE® Audit — US Home Services Network",
  ctaText: "Read the Audit",
  features: "Score: 72/400,Does Not Pass,3 Blocking Issues,16 Criteria Evaluated",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Case Study 01: US Home Services Digital Agency Audit | LIONXE®",
  description:
    "LIONXE® audit of a Pakistan-based digital agency running hundreds of US-facing home services websites. Score: 72/400 — Does Not Pass. Three blocking issues across Long-Term Logic, sustainability, and manipulative search patterns. Full 16-criteria evaluation with evidence.",
  keywords: [
    "LIONXE case study", "LIONXE audit report", "digital agency audit",
    "doorway page risk", "microsite SEO audit", "local SEO audit",
    "home services SEO", "digital quality audit", "LIONXE certification",
    "Sufian Mustafa", "multi-site SEO risk", "domain authority dilution",
  ],
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",
  alternates: { canonical: "/case-studies/pakistan-digital-agency-home-services-audit" },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "LIONXE®",
    title: "Case Study 01: US Home Services Digital Agency Audit | LIONXE®",
    description: "Full LIONXE® audit: 72/400, Does Not Pass. A Pakistan-based agency running hundreds of US microsites — scored across 16 criteria with 3 blocking issues.",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "LIONXE® Audit Case Study — US Home Services Network" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "LIONXE® Audit: 72/400 — Does Not Pass",
    description: "Full case study: a digital agency's 87+ microsite network evaluated across 16 LIONXE criteria. 3 blocking issues.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1, "max-video-preview": -1 },
  },
  other: {
    "content-type": "audit-case-study",
    "ai-content-declaration": "human-created, ai-assisted",
    "content-category": "case-study, audit-report",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "audit-outcome": "Does Not Pass",
    "audit-score": "72/400",
    "audit-blocking-issues": "3",
    "audit-criteria-count": "16",
    "audit-rubric-version": "LIONXE Audit Rubric v1.0",
    "entity-type": "Review, AuditReport",
    "answer-type": "CaseStudy, AuditResult",
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
    headline: "LIONXE® Audit Case Study: US-Facing Home Services Digital Agency",
    alternativeHeadline: "Score: 72/400 — Does Not Pass — 3 Blocking Issues Detected",
    description: "Full 16-criteria LIONXE® audit of a Pakistan-based digital agency running hundreds of US-facing home services microsites. Evaluated across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    datePublished: "2026-06-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: PAGE_URL,
    articleSection: "Case Studies",
    wordCount: 4200,
    keywords: "LIONXE audit, case study, doorway pages, microsite risk, digital agency audit, home services SEO",
    image: { "@type": "ImageObject", url: OG_IMAGE, width: 1200, height: 630 },
  });
}

function reviewSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${PAGE_URL}/#review`,
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    datePublished: "2026-06-01",
    reviewBody: "This audit evaluated a Pakistan-based digital agency running hundreds of US-facing home services websites. The findings reveal a business built entirely on short-term SEO tactics with no long-term strategy, no defensible brand, inconsistent quality, and a core operating model that Google classifies as a spam violation. Score: 72 out of 400. Outcome: Does Not Pass.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 72,
      bestRating: 400,
      worstRating: 0,
      ratingExplanation: "LIONXE® certification score across 16 criteria (4 pillars × 4 criteria × 25 points). Minimum 300/400 required for conditional certification. This audit scored 72/400 with 3 blocking issues.",
    },
    itemReviewed: {
      "@type": "Organization",
      name: "Pakistan-Based Digital Agency (Anonymized)",
      description: "A digital agency operating hundreds of US-facing home services websites across carpet cleaning, rug cleaning, and water damage restoration niches.",
    },
  });
}

function breadcrumbSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${BASE_URL}/case-studies` },
      { "@type": "ListItem", position: 3, name: "US Home Services Agency Audit", item: PAGE_URL },
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
        name: "What did the LIONXE audit find about the home services microsite network?",
        acceptedAnswer: { "@type": "Answer", text: "The LIONXE audit found that a Pakistan-based agency running hundreds of US-facing home services microsites scored 72 out of 400, receiving a Does Not Pass outcome. The most critical finding was in the L (Long-Term Logic) pillar, which scored 6/100. The core strategy — hundreds of location-specific microsites designed to capture near-me searches — is classified by Google as a doorway page violation. Three criteria received blocking issue flags: L2 (sustainability of core strategy), L4 (risk awareness), and N4 (absence of manipulative patterns)." },
      },
      {
        "@type": "Question",
        name: "Why did the microsite strategy fail the LIONXE audit?",
        acceptedAnswer: { "@type": "Answer", text: "The microsite strategy failed because it depends on a tactic Google has been actively targeting since 2015. Creating hundreds of near-identical websites with only location names changed is classified as a doorway page strategy under Google's spam policies. The LIONXE audit identified zero contingency planning for the primary business risk — a Google algorithmic update or manual penalty that could eliminate the entire network's search visibility overnight. This failed both the L pillar (no long-term viability) and the N pillar (manipulative search patterns)." },
      },
      {
        "@type": "Question",
        name: "What is a blocking issue in a LIONXE audit?",
        acceptedAnswer: { "@type": "Answer", text: "A blocking issue in a LIONXE audit is a criterion that indicates a foundational failure so severe that other strong pillar scores cannot compensate for it. Any pillar scoring below 15/100 automatically triggers a blocking issue flag. Additionally, individual criteria scored at 0 (Absent) are flagged because they indicate complete absence of the standard rather than partial compliance. A single blocking issue is sufficient to prevent LIONXE certification regardless of the total score." },
      },
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={articleSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={reviewSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />
      <CaseStudy01Page />
    </>
  );
}