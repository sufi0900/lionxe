// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — ABOUT / FRAMEWORK PAGE (Server Component Wrapper)
// Full SEO: Metadata + JSON-LD Schema + AEO/GEO Optimization
// File: app/about/page.tsx   (or app/framework/page.tsx — adjust route)
// ─────────────────────────────────────────────────────────────────────────────
//
// This server component provides metadata and JSON-LD, then renders the
// client-side LionxeAboutPage component which handles animations/interactivity.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import LionxeAboutPage from "./AboutPageClient"; // ← rename your client file to this

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
const PAGE_URL = `${BASE_URL}/about`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params: Record<string, string>) {
  return `${BASE_URL}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "About LIONXE® — The Digital Quality Audit Framework",
  ctaText: "Learn the Standard",
  features: "Logic,Optimization,Integrity,Distinction",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "About LIONXE® — The Digital Quality Audit Framework by Sufian Mustafa",
  description:
    "LIONXE® is a four-pillar digital quality audit framework created by Sufian Mustafa. It evaluates articles, tools, websites, UX, SEO, and marketing strategies across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction — and rejects anything that fails a single gate.",

  keywords: [
    "LIONXE",
    "about LIONXE",
    "LIONXE framework",
    "digital quality audit",
    "Sufian Mustafa",
    "digital quality standard",
    "content audit framework",
    "SEO audit framework",
    "website quality standard",
    "four pillar framework",
    "LIONXE founder",
    "digital integrity standard",
    "LIONXE certification",
    "quality evaluation framework",
    "Do It With AI Tools",
  ],

  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  alternates: { canonical: "/about" },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "LIONXE®",
    title: "About LIONXE® — The Digital Quality Audit Framework",
    description:
      "An independent four-pillar digital quality standard. LIONXE® measures, audits, and certifies digital assets against Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction — or rejects them.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "About LIONXE® — The Digital Quality Audit Framework",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "About LIONXE® — The Digital Quality Audit Framework",
    description:
      "An independent 4-pillar digital quality standard — Logic, Optimization, Integrity & Distinction.",
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
    "content-category": "about-page, framework-overview",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "brand-ecosystem": "LIONXE, Do It With AI Tools, sufianmustafa.com",
    "entity-type": "Organization, Framework",
    "entity-name": "LIONXE",
    "entity-founder": "Sufian Mustafa",
    "entity-description":
      "LIONXE is a 4-pillar digital quality audit framework. This page explains its origin, methodology, founder, and differentiation.",
    "framework-pillars":
      "L: Long-Term Logic, IO: Internal Optimization, N: Non-Negotiable Integrity, XE: eXceptional Distinction",
    "primary-topic": "About LIONXE Framework",
    "answer-type": "DefinitiveStandard, FrameworkOverview",
    "answer-confidence": "high",
    "related-platform:1": "Do It With AI Tools — https://doitwithai.tools",
    "related-platform:2": "Sufian Mustafa — https://sufianmustafa.com",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────

// 1. WebPage — this page specifically
function webPageSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "About LIONXE® — The Digital Quality Audit Framework by Sufian Mustafa",
    description:
      "LIONXE® is a four-pillar digital quality audit framework created by Sufian Mustafa. It evaluates digital assets across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
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

// 2. BreadcrumbList — Home > About
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

// 3. Organization (reference — keeps the @id alive on this page for the
//    AboutPage.mainEntity edge)
function organizationRefSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "LIONXE",
    url: BASE_URL,
    founder: { "@id": PERSON_ID },
    description:
      "LIONXE is a digital quality audit framework that evaluates digital assets through a four-pillar scoring system: Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
  });
}

// 4. Person — Sufian Mustafa (cross-site canonical @id)
function personSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Sufian Mustafa",
    url: "https://sufianmustafa.com",
    mainEntityOfPage: "https://sufianmustafa.com",
    jobTitle: "Digital Growth & AI Search Systems Architect",
    description:
      "Sufian Mustafa is the founder of LIONXE and Do It With AI Tools. His work spans technical SEO, AI-augmented web systems, and the LIONXE digital quality framework.",
    knowsAbout: [
      "Digital Quality Frameworks",
      "LIONXE Audit System",
      "Technical SEO",
      "AI SEO",
      "AI-Augmented Web Systems",
      "Next.js",
      "Sanity CMS",
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

// 5. CreativeWork — the Framework itself (deep entity definition for AI bots)
function frameworkSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${BASE_URL}/#framework`,
    name: "LIONXE® Framework",
    alternateName: "LIONXE",
    creator: { "@id": PERSON_ID },
    description:
      "A four-pillar digital quality and audit methodology. It evaluates digital assets against Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction. Failure at any single pillar triggers automatic disqualification. Pronounced lee-ohn-zay.",
    about: [
      { "@type": "Thing", name: "Long-Term Logic" },
      { "@type": "Thing", name: "Internal Optimization" },
      { "@type": "Thing", name: "Non-Negotiable Integrity" },
      { "@type": "Thing", name: "eXceptional Distinction" },
    ],
    keywords:
      "digital quality audit, website audit, content quality, SEO audit, digital certification, four-pillar framework",
    url: `${BASE_URL}/framework`,
  });
}

// 6. FAQPage — common questions answered on this About page (AEO/GEO)
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Why was the LIONXE framework created?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE was created because the digital industry lacked a consistent quality measurement standard. Every tool claimed to be industry-leading and every article promised expert insight, but no objective framework existed to distinguish work built to last from work engineered to look good temporarily. Sufian Mustafa formalized the pattern he observed — assets built on logical, optimized, and ethical foundations always outlasted — into a four-pillar auditing standard.",
        },
      },
      {
        "@type": "Question",
        name: "What makes LIONXE different from other evaluation frameworks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE differs in three structural ways: (1) It is framework-first, not opinion-first — every evaluation runs through a repeatable four-pillar system that removes subjectivity. (2) One failure terminates the entire audit — most systems average out weaknesses, but LIONXE rejects the project if any single pillar fails. (3) It systematically rejects short-term optimization — if a strategy promises high returns today but carries a high probability of collapse later, it fails immediately regardless of current performance.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Sufian Mustafa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sufian Mustafa is a Digital Growth and AI Search Systems Architect and the founder of LIONXE and Do It With AI Tools (doitwithai.tools). His work spans technical SEO, AI-augmented web systems, structured content architecture, and the LIONXE digital quality framework — all built around a vision of creating digital assets with integrity and long-term value.",
        },
      },
      {
        "@type": "Question",
        name: "Who is LIONXE designed for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE is designed for content creators building content that lasts, digital marketers who need an objective lens to evaluate campaigns and positioning, product builders creating tools and platforms for long-term adoption, and agencies and teams that want to demonstrate quality through third-party framework validation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the relationship between LIONXE and Do It With AI Tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do It With AI Tools (doitwithai.tools) is a practical demonstration of the LIONXE framework in live operation. It is an AI SEO content hub built by Sufian Mustafa that applies LIONXE standards to a real digital platform. LIONXE defines the quality standard, and Do It With AI Tools is one of the properties operating under it, serving as proof that the framework produces measurable results.",
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
      {/* JSON-LD Structured Data (SSR, crawler-visible, native <script> tags) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={webPageSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={organizationRefSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={personSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={frameworkSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      {/* Client Component — all animations/interactivity live here */}
      <LionxeAboutPage />
    </>
  );
}