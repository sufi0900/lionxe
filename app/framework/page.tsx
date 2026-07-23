// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — FRAMEWORK OVERVIEW PAGE (Server Component Wrapper)
// Full SEO: Metadata + Universal JSON-LD Schemas + GEO/AEO Optimization
// File: app/framework/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import FrameworkClient from "./FrameworkClient";

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
const PAGE_URL = `${BASE_URL}/framework`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params: Record<string, string>) {
  return `${BASE_URL}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "LIONXE ™ Framework — Universal Quality Evaluation Standard",
  ctaText: "Study the Standard",
  features: "Logic,Internal Optimization,Integrity,eXceptional Distinction",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "LIONXE ™ Framework — Universal Quality Evaluation Standard",
  description:
    "Explore the LIONXE ™ framework: a 4-pillar, 16-criterion universal quality evaluation standard. Audits entities across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",

  keywords: [
    "LIONXE framework",
    "LIONXE pillars",
    "universal quality evaluation standard",
    "Post-Flood Collapse Rule",
    "Weakest Link Axiom",
    "Cost-Indifferent Mandate",
    "Commodity Threshold Law",
    "4 pillar audit framework",
    "digital quality audit",
    "Long-Term Logic",
    "Internal Optimization",
    "Non-Negotiable Integrity",
    "eXceptional Distinction",
    "Sufian Mustafa",
  ],

  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  alternates: { canonical: "/framework" },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "LIONXE ™",
    title: "LIONXE ™ Framework — Universal Quality Evaluation Standard",
    description:
      "A universal four-pillar quality evaluation methodology. Measures whether any entity, business model, or digital asset is built to last, optimized, honest, and distinguished.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LIONXE ™ Framework — Universal Quality Evaluation Standard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "LIONXE ™ Framework — Universal Quality Evaluation Standard",
    description:
      "Universal 4-pillar quality standard — Long-Term Logic, Internal Optimization, Non-Negotiable Integrity & eXceptional Distinction.",
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
    "content-type": "universal-framework-overview",
    "ai-content-declaration": "human-created, ai-assisted",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "entity-type": "CreativeWork, Framework, QualityStandard",
    "entity-name": "LIONXE",
    "primary-topic": "LIONXE Framework Methodology & Scoring Architecture",
    "author:url": "https://sufianmustafa.com",
    "related-platform:1": "Do It With AI Tools — https://doitwithai.tools",
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
    name: "LIONXE ™ Framework — Universal Quality Evaluation Standard",
    description:
      "The complete overview of the LIONXE ™ framework: four sequential quality gates, 16 criteria, 400 maximum points, and non-negotiable failure rules.",
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#framework` },
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
      { "@type": "ListItem", position: 2, name: "Framework", item: PAGE_URL },
    ],
  });
}

// 3. CreativeWork Schema — Deep Framework Definition
function frameworkSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${BASE_URL}/#framework`,
    name: "LIONXE ™ Framework",
    alternateName: "LIONXE Universal Quality Evaluation Standard",
    creator: { "@id": PERSON_ID },
    description:
      "A universal four-pillar quality evaluation methodology created by Sufian Mustafa. Evaluates entities across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction for a maximum score of 400 points.",
    url: PAGE_URL,
  });
}

// 4. DefinedTermSet Schema — Correct Pathway Slugs
function frameworkPillarsSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${PAGE_URL}/#pillars`,
    name: "LIONXE ™ Four Quality Gates",
    description: "The four sequential quality gates of the LIONXE ™ universal framework.",
    url: PAGE_URL,
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        name: "L — Long-Term Logic",
        termCode: "L",
        description: "Gate 1. Governed by the Post-Flood Collapse Rule. Max 100 points.",
        url: `${BASE_URL}/long-term-logic`,
      },
      {
        "@type": "DefinedTerm",
        name: "IO — Internal Optimization",
        termCode: "IO",
        description: "Gate 2. Governed by the Weakest Link Axiom. Max 100 points.",
        url: `${BASE_URL}/internal-optimization`,
      },
      {
        "@type": "DefinedTerm",
        name: "N — Non-Negotiable Integrity",
        termCode: "N",
        description: "Gate 3. Governed by the Cost-Indifferent Mandate. Max 100 points.",
        url: `${BASE_URL}/non-negotiable-integrity`,
      },
      {
        "@type": "DefinedTerm",
        name: "XE — eXceptional Distinction",
        termCode: "XE",
        description: "Gate 4. Governed by the Commodity Threshold Law. Max 100 points.",
        url: `${BASE_URL}/exceptional-distinction`,
      },
    ],
  });
}

// 5. FAQPage Schema
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the four pillars of LIONXE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The four pillars are: L = Long-Term Logic (Post-Flood Collapse Rule), IO = Internal Optimization (Weakest Link Axiom), N = Non-Negotiable Integrity (Cost-Indifferent Mandate), and XE = eXceptional Distinction (Commodity Threshold Law).",
        },
      },
      {
        "@type": "Question",
        name: "How is the LIONXE framework scored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE uses a 400-point total scoring system. Each of the 4 pillars contains 4 criteria scored 0, 6, 12, 18, or 25 points (100 points maximum per pillar). Any single criterion scored 0 or a pillar total below 15 triggers an immediate blocking issue and audit disqualification.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Cascade Failure Rule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The gates are sequential. Gate 1 (Long-Term Logic) must pass first. If an entity fails at Gate 1 or breaks integrity at Gate 3, the entire audit terminates with a rejection verdict regardless of high scores elsewhere.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={frameworkSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={frameworkPillarsSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      <FrameworkClient />
    </>
  );
}