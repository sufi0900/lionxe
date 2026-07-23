// ─────────────────────────────────────────────────────────────────────────────
// lib/pillarSEO.ts
// Shared SEO + JSON-LD generator for all four LIONXE™ pillar pages.
// Pattern mirrors sufianmustafa.com/about's server component: getBaseUrl(),
// a dynamic OG image URL builder, and per-page Schema.org JSON-LD.
// One function generates metadata; one function generates schemas.
// Every pillar's page.tsx calls these two functions with its own content
// config — nothing about SEO is duplicated across the four routes.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";

// ── BASE URL ─────────────────────────────────────────────────────────────────

export function getBaseUrl(): string {
  if (process.env.NODE_ENV === "production") return "https://lionxe.com";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

// ── OG IMAGE URL BUILDER ─────────────────────────────────────────────────────
// Every pillar page uses the same /api/og endpoint with different params.
// See app/api/og/route.tsx for the renderer.

interface OGImageParams {
  pillarCode: string;      // "L" | "IO" | "N" | "XE"
  pillarName: string;      // e.g. "Long-Term Logic"
  tagline: string;         // short subtitle
  gateNumber: string;      // "1" | "2" | "3" | "4"
}

export function generatePillarOGImageURL(params: OGImageParams): string {
  const baseUrl = `${getBaseUrl()}/api/og`;
  const searchParams = new URLSearchParams({
    pillarCode: params.pillarCode,
    pillarName: params.pillarName,
    tagline: params.tagline,
    gateNumber: params.gateNumber,
  });
  return `${baseUrl}?${searchParams.toString()}`;
}

// ── SHARED PILLAR CONTENT SHAPE (SEO-relevant fields only) ──────────────────
// The full content shape (used by the client component) lives in
// content/pillars.tsx. This is the minimal subset generatePillarMetadata
// and generatePillarSchemas need — kept separate so this lib has no
// dependency on React/JSX.

export interface PillarSEOInput {
  code: "L" | "IO" | "N" | "XE";
  slug: string;                 // "long-term-logic", etc. — must match the folder name
  name: string;                 // "Long-Term Logic"
  governingLaw: string;         // "The Post-Flood Collapse Rule"
  gateNumber: number;           // 1–4
  metaTitle: string;
  metaDescription: string;
  tagline: string;              // short subtitle, used in OG image + Twitter card
  keywords: string[];
  criteria: Array<{ id: string; name: string; statement: string }>;
}

// ── METADATA GENERATOR ───────────────────────────────────────────────────────

export function generatePillarMetadata(p: PillarSEOInput): Metadata {
  const baseUrl = getBaseUrl();
  const pageUrl = `${baseUrl}/${p.slug}`;
  const ogImage = generatePillarOGImageURL({
    pillarCode: p.code,
    pillarName: p.name,
    tagline: p.tagline,
    gateNumber: String(p.gateNumber),
  });

  return {
    metadataBase: new URL(baseUrl),
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords.join(", "),
    authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
    creator: "Sufian Mustafa",
    publisher: "LIONXE",
    alternates: { canonical: pageUrl },

    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: pageUrl,
      siteName: "LIONXE™",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `LIONXE™ Pillar ${p.code} — ${p.name}`,
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@lionxe",
      creator: "@sufianmustafa",
      title: p.metaTitle,
      description: p.metaDescription,
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    other: {
      "content-type": "framework-pillar",
      "ai-content-declaration": "human-created, ai-assisted",
      "brand-name": "LIONXE",
      "brand-founder": "Sufian Mustafa",
      "pillar-code": p.code,
      "pillar-gate": String(p.gateNumber),
      "governing-law": p.governingLaw,
      "rubric-version": "LIONXE™ Audit Rubric v1.0",
      "entity-type": "DefinedTerm, Article",
      "answer-type": "FrameworkPillar",
      "answer-confidence": "high",
    },
  };
}

// ── SCHEMA GENERATOR ─────────────────────────────────────────────────────────
// Five schemas per pillar page, following the About page's multi-script
// pattern: Article, DefinedTerm (the pillar itself, part of the rubric's
// DefinedTermSet), BreadcrumbList, WebPage, and a FAQPage built from the
// pillar's own criteria (each criterion becomes one Q&A — this is the
// single richest AEO surface on each pillar page).

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

export function generatePillarSchemas(p: PillarSEOInput) {
  const baseUrl = getBaseUrl();
  const pageUrl = `${baseUrl}/${p.slug}`;
  const rubricUrl = `${baseUrl}/rubric`;

  const articleSchema = jsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}/#article`,
    headline: `${p.name} — The LIONXE™ ${p.code} Pillar`,
    alternativeHeadline: `Gate ${p.gateNumber} of 4 — Governed by ${p.governingLaw}`,
    description: p.metaDescription,
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${baseUrl}/#organization` },
    mainEntityOfPage: pageUrl,
    articleSection: "LIONXE Framework Pillars",
    keywords: p.keywords.join(", "),
    isPartOf: { "@type": "CreativeWork", "@id": `${baseUrl}/#framework`, name: "LIONXE™ Framework" },
  });

  // The pillar as a DefinedTerm inside the rubric's DefinedTermSet (see rubric page schema)
  const definedTermSchema = jsonLd({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${pageUrl}/#term`,
    name: p.name,
    alternateName: `Pillar ${p.code}`,
    description: p.metaDescription,
    inDefinedTermSet: `${rubricUrl}/#termset`,
    url: pageUrl,
  });

  const breadcrumbSchema = jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Framework", item: `${baseUrl}/framework` },
      { "@type": "ListItem", position: 3, name: p.name, item: pageUrl },
    ],
  });

  const webPageSchema = jsonLd({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    name: p.metaTitle,
    url: pageUrl,
    description: p.metaDescription,
    isPartOf: { "@type": "WebSite", name: "LIONXE™", url: baseUrl },
    about: { "@id": `${pageUrl}/#term` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".pillar-hero-title", ".pillar-hero-tagline"],
    },
  });

  // Each criterion becomes one FAQ entry — the richest AEO surface on the page
  const faqSchema = jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    mainEntity: p.criteria.map((c) => ({
      "@type": "Question",
      name: `What does ${c.id} — ${c.name} — evaluate in the LIONXE™ ${p.name} pillar?`,
      acceptedAnswer: { "@type": "Answer", text: c.statement },
    })),
  });

  return { articleSchema, definedTermSchema, breadcrumbSchema, webPageSchema, faqSchema };
}