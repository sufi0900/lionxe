// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — L PILLAR PAGE (Server Component Wrapper)
// Full SEO: Metadata + JSON-LD Schema + AEO/GEO Optimization
// File: app/l/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import LPillarPage from "./LPillarPage";

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://lionxe.com";
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
}

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/l`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params: Record<string, string>) {
  return `${BASE_URL}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "L — The Logic & Longevity Standard",
  ctaText: "Read Pillar L",
  features: "Post-Flood Collapse Rule,Long-Term Multiplier,Historical Cleanliness,Upstream Rejection",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "L — Logic & Longevity Standard | LIONXE® Framework Pillar 1",
  description:
    "The Logic & Longevity Standard is the first and most critical gate of the LIONXE® audit framework. It evaluates whether a digital asset, business, or decision is built on a permanent, compounding foundation — or a volatile one destined to collapse. Governed by the Post-Flood Collapse Rule. Created by Sufian Mustafa.",

  keywords: [
    "LIONXE L pillar",
    "Logic and Longevity",
    "LIONXE Logic standard",
    "long-term digital strategy",
    "Post-Flood Collapse Rule",
    "digital longevity framework",
    "LIONXE framework pillar 1",
    "long-term value audit",
    "structural integrity audit",
    "digital asset longevity",
    "LIONXE audit gate 1",
    "Sufian Mustafa",
    "volatile foundation detection",
    "compounding value framework",
    "algorithm-proof strategy",
    "sustainability audit",
    "digital quality standard",
    "LIONXE scoring",
  ],

  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  alternates: { canonical: "/l" },

  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "LIONXE®",
    title: "L — Logic & Longevity Standard | LIONXE® Pillar 1",
    description:
      "The first gate of the LIONXE® audit framework. If a system cannot prove it will be structurally stronger years from now, it fails immediately. Governed by the Post-Flood Collapse Rule.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LIONXE® L Pillar — The Logic & Longevity Standard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "L — Logic & Longevity Standard | LIONXE® Pillar 1",
    description:
      "The first and most critical gate: if a system cannot prove long-term structural integrity, the audit terminates immediately.",
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
    "content-type": "original-framework",
    "ai-content-declaration": "human-created, ai-assisted",
    "content-category": "framework-pillar-deep-dive",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "brand-ecosystem": "LIONXE, Do It With AI Tools, sufianmustafa.com",
    "entity-type": "DefinedTerm, FrameworkPillar",
    "entity-name": "L — Logic & Longevity Standard",
    "entity-parent": "LIONXE Framework",
    "entity-description":
      "The first of four sequential quality gates in the LIONXE audit framework. Evaluates long-term structural viability through the Post-Flood Collapse Rule. Scored 0-25 points. Failure terminates the entire audit.",
    "framework-pillar": "L: Logic & Longevity (Gate 1 of 4)",
    "governing-law": "The Post-Flood Collapse Rule",
    "scoring": "0-25 points, minimum 15 to pass, failure terminates entire audit",
    "primary-topic": "Logic & Longevity Standard",
    "secondary-topics":
      "long-term value, structural integrity, volatile foundation detection, Post-Flood Collapse Rule, compounding value",
    "answer-type": "DefinitiveStandard, FrameworkPillar, EvaluationCriteria",
    "answer-confidence": "high",
    "related-platform:1": "Do It With AI Tools — https://doitwithai.tools",
    "related-platform:2": "Sufian Mustafa — https://sufianmustafa.com",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────

// 1. WebPage — this pillar page specifically
function webPageSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "L — Logic & Longevity Standard | LIONXE® Framework Pillar 1",
    description:
      "The Logic & Longevity Standard is the first and most critical gate of the LIONXE® audit framework. It evaluates whether a digital asset is built on a permanent, compounding foundation — or a volatile one destined to collapse. Governed by the Post-Flood Collapse Rule.",
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${PAGE_URL}/#defined-term` },
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: { "@id": `${PAGE_URL}/#defined-term` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  });
}

// 2. BreadcrumbList — Home > Framework > L Pillar
function breadcrumbSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Framework", item: `${BASE_URL}/framework` },
      { "@type": "ListItem", position: 3, name: "L — Logic & Longevity", item: PAGE_URL },
    ],
  });
}

// 3. DefinedTerm — the L pillar as a formal concept (AEO/GEO anchor)
function definedTermSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${PAGE_URL}/#defined-term`,
    name: "L — Logic & Longevity Standard",
    alternateName: [
      "L Pillar",
      "Logic Pillar",
      "Longevity Standard",
      "LIONXE Gate 1",
      "Post-Flood Collapse Rule",
    ],
    termCode: "L",
    description:
      "The first and most critical gate of the LIONXE® audit framework. Evaluates whether a digital asset, business decision, or project is built on a permanent, compounding foundation — or a volatile one destined to collapse. Governed by the Post-Flood Collapse Rule: if the trajectory trends toward zero after the initial spike, the architecture is a structural failure. Scored 0–25 points with a minimum of 15 required to pass. Failure at this gate terminates the entire LIONXE audit immediately.",
    url: PAGE_URL,
    inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
  });
}

// 4. Article — the deep-dive content itself (rich results + AI citation)
function articleSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}/#article`,
    headline: "L — The Logic & Longevity Standard: LIONXE® Framework Pillar 1",
    alternativeHeadline: "Eliminating Volatility to Anchor Frameworks in Permanent Value",
    description:
      "A comprehensive deep-dive into the first gate of the LIONXE® audit framework — the Logic & Longevity Standard. Covers the Post-Flood Collapse Rule, the four diagnostic dimensions, the three governing laws, case appraisals, the evaluation checklist, and the self-audit protocol.",
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: { "@id": `${PAGE_URL}/#webpage` },
    about: { "@id": `${PAGE_URL}/#defined-term` },
    isPartOf: {
      "@type": "CreativeWork",
      "@id": `${BASE_URL}/#framework`,
      name: "LIONXE® Framework",
    },
    articleSection: "Framework Pillars",
    keywords:
      "Logic & Longevity, Post-Flood Collapse Rule, long-term value, digital quality audit, LIONXE pillar 1, structural integrity",
    wordCount: 2800,
    image: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
  });
}

// 5. FAQPage — questions answered by this page's content (AEO/GEO)
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the LIONXE L pillar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The L pillar stands for Logic & Longevity. It is the first and most critical gate of the LIONXE audit framework. It evaluates whether a digital asset, business, or decision is built on a permanent, compounding foundation or a volatile one destined to collapse. If a system cannot prove it will be structurally stronger years from now, it fails immediately and the entire audit terminates.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Post-Flood Collapse Rule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Post-Flood Collapse Rule is the governing law of the LIONXE L pillar. It states: if the trajectory of a system trends toward zero after the initial spike, the architecture is a structural failure. This means that assets producing high returns today but carrying a high probability of collapse tomorrow are rejected immediately, regardless of current performance metrics.",
        },
      },
      {
        "@type": "Question",
        name: "How is the L pillar scored in a LIONXE audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The L pillar is scored on a scale of 0 to 25 points. A minimum score of 15 is required to pass the gate. If the L pillar fails (scores below 15), the entire LIONXE audit terminates immediately — no subsequent pillars are evaluated. This is because the LIONXE framework treats long-term viability as the foundational prerequisite for all other quality dimensions.",
        },
      },
      {
        "@type": "Question",
        name: "What does the L pillar evaluate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The L pillar evaluates four dimensions of any system or asset: (1) The Foundation — whether it is built on legacy liabilities or clean ground, (2) The Present Reality — whether current value is authentic or artificially inflated by temporary conditions, (3) The Future Potential — whether the asset will compound in value years into the future, and (4) The Operational Context — whether the system is feasible, eligible, and aligned with its environment.",
        },
      },
      {
        "@type": "Question",
        name: "What are the three governing laws of the L pillar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The three laws are: (1) The Long-Term Multiplier Rule — a framework must prove its foundations will become more valuable over time, not just maintain current levels. (2) The Historical Cleanliness Rule — any system anchored to a compromised or unstable past is rejected immediately; legacy defects cannot be optimized out later. (3) The Upstream Rejection Rule — if a project fails the L gate, the audit terminates instantly; optimization without a solid foundation is theater.",
        },
      },
      {
        "@type": "Question",
        name: "Can the L pillar be applied to non-digital decisions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The LIONXE L pillar is a universal evaluation standard. While it was originally designed for digital assets, the Logic & Longevity principles can be applied to any decision or project — business strategy, career moves, investment choices, or personal decisions. The core principle remains universal: prioritize long-term structural integrity over short-term convenience.",
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
      {/* JSON-LD Structured Data (SSR, crawler-visible) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={webPageSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={definedTermSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={articleSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      {/* Client Component */}
      <LPillarPage />
    </>
  );
}