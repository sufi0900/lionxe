// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — SCORECARD SIMULATOR PAGE (Server Component Wrapper)
// Full SEO: Metadata + JSON-LD Schemas + AEO/GEO Optimization
// File: app/scorecard/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import ScorecardClient from "./ScorecardClient";

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS & CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://lionxe.com";
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
}

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/scorecard`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params: Record<string, string>) {
  return `${BASE_URL}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "LIONXE ™ Scorecard & Interactive Audit Simulator",
  ctaText: "Simulate Audit Score",
  features: "400 Points Max,16 Criteria,Interactive Gates,Cascade Failure Engine",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "LIONXE ™ Scorecard & Interactive Audit Simulator (400-Pt System)",
  description:
    "Simulate a complete LIONXE ™ audit: score any entity across 16 criteria and 4 quality gates (400 points max) with live cascade failure detection.",

  keywords: [
    "LIONXE scorecard",
    "LIONXE audit simulator",
    "400 point audit framework",
    "quality evaluation scorecard",
    "LIONXE calculation",
    "cascade failure simulator",
    "Post-Flood Collapse Rule",
    "Weakest Link Axiom",
    "Cost-Indifferent Mandate",
    "Commodity Threshold Law",
    "Sufian Mustafa",
  ],

  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  alternates: { canonical: "/scorecard" },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "LIONXE ™",
    title: "LIONXE ™ Scorecard & Interactive Audit Simulator",
    description:
      "Simulate and calculate LIONXE ™ quality scores in real time. Features 16 sub-pillar scoring domains, 400 maximum points, and live blocking issue alerts.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LIONXE ™ Scorecard & Interactive Audit Simulator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "LIONXE ™ Scorecard & Audit Simulator",
    description: "400-point universal quality evaluation simulator.",
    images: [OG_IMAGE],
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
    "content-type": "interactive-audit-simulator",
    "ai-content-declaration": "human-created, ai-assisted",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "entity-type": "SoftwareApplication, EvaluationSystem",
    "entity-name": "LIONXE Scorecard Simulator",
    "author:url": "https://sufianmustafa.com",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA (JSON-LD)
// ─────────────────────────────────────────────────────────────────────────────

// 1. WebPage Schema
function webPageSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "LIONXE ™ Scorecard & Interactive Audit Simulator",
    description:
      "Interactive 400-point audit calculator for the LIONXE ™ universal quality evaluation standard.",
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
  });
}

// 2. BreadcrumbList Schema
function breadcrumbSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Scorecard", item: PAGE_URL },
    ],
  });
}

// 3. FAQPage Schema
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the LIONXE 400-point scoring system work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The LIONXE framework evaluates entities across 4 major gates (100 points maximum each) containing 4 sub-pillar criteria scored 0, 6, 12, 18, or 25 points. Summing all 16 criteria yields the grand total score out of 400 points.",
        },
      },
      {
        "@type": "Question",
        name: "What triggers a LIONXE blocking issue or audit disqualification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scoring 0 on any single criterion or having any pillar total fall below 15/100 triggers an automatic blocking issue. This results in immediate audit disqualification regardless of high scores elsewhere.",
        },
      },
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE SERVER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={webPageSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      <ScorecardClient />
    </>
  );
}