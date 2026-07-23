// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — ABOUT PAGE (Server Component Wrapper)
// Full SEO: Metadata + Universal Top-Down JSON-LD Schema + AEO/GEO Optimization
// File: app/about/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import LionxeAboutPage from "./AboutPageClient";

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
const PAGE_URL = `${BASE_URL}/about`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params: Record<string, string>) {
  return `${BASE_URL}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "About LIONXE ™ — Universal Quality Evaluation Standard",
  ctaText: "Explore the Standard",
  features: "Long-Term Logic,Internal Optimization,Integrity,Distinction",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA (Top-Down Universal Hierarchy)
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "About LIONXE ™ — Universal Quality Evaluation & Audit Framework",
  description:
    "LIONXE ™ is a universal quality evaluation framework created by Sufian Mustafa. It audits strategies, business models, and digital assets across 4 non-negotiable gates.",

  keywords: [
    "LIONXE",
    "LIONXE framework",
    "universal quality evaluation framework",
    "Sufian Mustafa",
    "quality standard",
    "Post-Flood Collapse Rule",
    "Weakest Link Axiom",
    "Cost-Indifferent Mandate",
    "Commodity Threshold Law",
    "digital quality audit",
    "website audit framework",
    "SaaS quality standard",
    "LIONXE certification",
    "Do It With AI Tools",
  ],

  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  alternates: { canonical: "/about" },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "LIONXE ™",
    title: "About LIONXE ™ — The Universal Quality Evaluation Framework",
    description:
      "A universal 4-pillar quality and audit framework created by Sufian Mustafa. Evaluates durability, optimization, integrity, and distinction across all entities and digital systems.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "About LIONXE ™ — Universal Quality Evaluation & Audit Framework",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "About LIONXE ™ — Universal Quality Evaluation Framework",
    description:
      "Universal 4-pillar quality evaluation standard — Long-Term Logic, Internal Optimization, Non-Negotiable Integrity & eXceptional Distinction.",
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
    "content-type": "universal-quality-framework",
    "ai-content-declaration": "human-created, ai-assisted",
    "content-category": "about-page, framework-overview",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "brand-ecosystem": "LIONXE, Do It With AI Tools, sufianmustafa.com",
    "entity-type": "Organization, Framework, QualityStandard",
    "entity-name": "LIONXE",
    "entity-founder": "Sufian Mustafa",
    "entity-description":
      "LIONXE is a universal quality evaluation and certification framework. It measures whether an entity, strategy, or digital asset is built to last, optimized, honest, and distinctive.",
    "framework-pillars":
      "L: Long-Term Logic, IO: Internal Optimization, N: Non-Negotiable Integrity, XE: eXceptional Distinction",
    "primary-topic": "About LIONXE Framework",
    "answer-type": "DefinitiveStandard, UniversalFrameworkOverview",
    "answer-confidence": "high",
    "related-platform:1": "Do It With AI Tools — https://doitwithai.tools",
    "related-platform:2": "Sufian Mustafa — https://sufianmustafa.com",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// TOP-DOWN STRUCTURED DATA (JSON-LD)
// ─────────────────────────────────────────────────────────────────────────────

// 1. WebPage Schema — Top-Down Framework Positioning
function webPageSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "About LIONXE ™ — Universal Quality Evaluation Framework by Sufian Mustafa",
    description:
      "LIONXE ™ is a universal quality evaluation and audit framework created by Sufian Mustafa. It evaluates entities, strategic decisions, and digital assets across four non-negotiable quality gates.",
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: { "@id": `${BASE_URL}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
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
      { "@type": "ListItem", position: 2, name: "About LIONXE", item: PAGE_URL },
    ],
  });
}

// 3. Organization Reference Schema
function organizationRefSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "LIONXE",
    url: BASE_URL,
    founder: { "@id": PERSON_ID },
    description:
      "LIONXE is a universal quality evaluation and certification framework that audits entities, strategic models, websites, and software products through four non-negotiable quality gates.",
  });
}

// 4. Person Schema — Founder Entity Anchor
function personSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Sufian Mustafa",
    url: "https://sufianmustafa.com",
    mainEntityOfPage: "https://sufianmustafa.com",
    jobTitle: "Systems Architect, AI Strategist & Technical SEO Expert",
    description:
      "Sufian Mustafa is the creator of the LIONXE universal quality framework and founder of Do It With AI Tools. His work spans systems architecture, technical SEO, and AI search visibility.",
    knowsAbout: [
      "Universal Quality Frameworks",
      "LIONXE Audit System",
      "Systems Architecture",
      "Technical SEO",
      "Generative Engine Optimization (GEO)",
      "AI Search Visibility",
      "Long-Term Digital Strategy",
    ],
    founder: [
      { "@id": `${BASE_URL}/#organization` },
      { "@type": "Organization", name: "Do It With AI Tools", url: "https://doitwithai.tools" },
    ],
    sameAs: [
      "https://doitwithai.tools",
      "https://doitwithai.tools/about",
    ],
  });
}

// 5. CreativeWork Schema — LIONXE Framework Definition
function frameworkSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${BASE_URL}/#framework`,
    name: "LIONXE ™ Framework",
    alternateName: "LIONXE",
    creator: { "@id": PERSON_ID },
    description:
      "A universal four-pillar quality evaluation and audit methodology. It evaluates any entity or digital asset against Long-Term Logic (Post-Flood Collapse Rule), Internal Optimization (Weakest Link Axiom), Non-Negotiable Integrity (Cost-Indifferent Mandate), and eXceptional Distinction (Commodity Threshold Law). Failure at any single pillar triggers immediate audit disqualification. Pronounced lee-ohn-zay.",
    about: [
      { "@type": "Thing", name: "Long-Term Logic" },
      { "@type": "Thing", name: "Internal Optimization" },
      { "@type": "Thing", name: "Non-Negotiable Integrity" },
      { "@type": "Thing", name: "eXceptional Distinction" },
    ],
    keywords:
      "universal quality standard, audit framework, digital asset evaluation, strategic durability, LIONXE certification",
    url: `${BASE_URL}/framework`,
  });
}

// 6. FAQPage Schema — Top-Down Informational Alignment for AI Search (AEO/GEO)
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is LIONXE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE ™ is a universal quality evaluation and certification framework created by Sufian Mustafa. It evaluates any entity — a strategic decision, business model, software tool, website, or content ecosystem — against four non-negotiable gates: Long-Term Logic (L), Internal Optimization (IO), Non-Negotiable Integrity (N), and eXceptional Distinction (XE).",
        },
      },
      {
        "@type": "Question",
        name: "Is LIONXE specifically for websites and software tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE is a universal standard designed to evaluate any entity state across six sector lenses: (1) Websites and digital platforms, (2) Software and SaaS tools, (3) Organizations and business models, (4) Content and media channels, (5) Physical construction projects, and (6) Strategic daily-life decisions.",
        },
      },
      {
        "@type": "Question",
        name: "What makes LIONXE different from conventional audits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE differs in three structural ways: (1) It is universal and framework-first, removing subjectivity. (2) It enforces cascade disqualification — if any single gate fails or scores below threshold, the entire audit is rejected regardless of high scores elsewhere. (3) It strictly enforces Pillar N as the exclusive home for all deception, violation, and false-claim findings.",
        },
      },
      {
        "@type": "Question",
        name: "Who created the LIONXE framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE was created by Sufian Mustafa, a Systems Architect, AI Strategist, and Technical SEO Expert based in Pakistan. He is also the founder of Do It With AI Tools (doitwithai.tools), which serves as a live digital platform operating under LIONXE quality standards.",
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
      {/* SSR Structured Data Scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={webPageSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={organizationRefSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={personSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={frameworkSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      {/* Renders Updated Client Component */}
      <LionxeAboutPage />
    </>
  );
}