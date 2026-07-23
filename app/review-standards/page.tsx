// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — REVIEW STANDARD PAGE (Server Component Wrapper)
// Full SEO: Metadata + JSON-LD Schema + AEO/GEO Search Optimization
// File: app/review-standard/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import ReviewStandardClient from "./ReviewStandardClient";

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
const PAGE_URL = `${BASE_URL}/review-standard`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params: Record<string, string>) {
  return `${BASE_URL}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "LIONXE ™ Review & Audit Standard — Universal Quality Protocol",
  ctaText: "Read the Standard",
  features: "Independence,Transparency,Zero Paid Reviews,Cascade Failure Enforcement",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "LIONXE ™ Review & Audit Standard — Universal Evaluation Protocol",
  description:
    "The governing standards behind every LIONXE ™ audit: total commercial independence, transparent scoring, zero pay-to-win, and strict cascade failure rules.",

  keywords: [
    "LIONXE review standard",
    "LIONXE audit protocol",
    "independent digital audit",
    "transparent scoring methodology",
    "cascade failure rule",
    "universal quality evaluation",
    "Sufian Mustafa",
    "website evaluation standard",
    "LIONXE certification criteria",
  ],

  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  alternates: { canonical: "/review-standard" },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "LIONXE ™",
    title: "LIONXE ™ Review & Audit Standard — Universal Evaluation Protocol",
    description:
      "Explore the rigid rules governing LIONXE ™ assessments: 100% independent evaluation, published scoring breakdowns, and zero tolerance for deceptive practices.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LIONXE ™ Review & Audit Standard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "LIONXE ™ Review Standard — Independent Audit Protocol",
    description:
      "Commercial independence, 100% transparent scoring, and non-negotiable quality enforcement.",
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
    "content-type": "audit-standard-policy",
    "ai-content-declaration": "human-created, ai-assisted",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "entity-type": "CreativeWork, Standard, AuditPolicy",
    "entity-name": "LIONXE Review Standard",
    "primary-topic": "LIONXE Audit Policy & Transparency Directives",
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
    name: "LIONXE ™ Review & Audit Standard — Universal Evaluation Protocol",
    description:
      "The official auditing protocol and independence policy governing all LIONXE ™ evaluations, scoring breakdowns, and certification verdicts.",
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
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
      { "@type": "ListItem", position: 2, name: "Review Standard", item: PAGE_URL },
    ],
  });
}

// 3. FAQPage Schema — Direct Answer Engagements (AEO / GEO)
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Can an entity pay to receive a passing LIONXE score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. LIONXE strictly forbids paid reviews or pay-to-win certification schemes. Every audit is conducted independently based exclusively on public, reproducible primary evidence notes.",
        },
      },
      {
        "@type": "Question",
        name: "How does LIONXE handle deceptive claims and violations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per LIONXE filing laws, every unverified claim, deceptive credential, dark pattern, or regulatory non-compliance finding is filed exclusively in Gate 3 (Pillar N: Non-Negotiable Integrity). Any breach in this domain triggers an immediate blocking issue and disqualifies the asset.",
        },
      },
      {
        "@type": "Question",
        name: "What is the maximum total score in a LIONXE audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The grand maximum total score is 400 points across 16 criteria (4 criteria per pillar × 25 points each). Entities scoring 70–84 earn Certified status, while scores below 70 or any gate failure result in Disqualified status.",
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

      <ReviewStandardClient />
    </>
  );
}