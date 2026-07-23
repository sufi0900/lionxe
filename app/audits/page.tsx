// app/audits/page.tsx — Server Component (SEO + Schema layer)
// STATIC for now. When dynamic, this file's body changes to fetch from
// Sanity and map results to StaticAuditSummary shape before passing to
// AuditsIndexClient (or a server-rendered equivalent) — metadata and
// JSON-LD generation logic below stays identical either way.

import type { Metadata } from "next";
import AuditsIndexClient from "./AuditsIndexClient";
import { STATIC_AUDITS } from "@/app/lib/audits-static-data";

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://lionxe.com";
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
}

function generateOGImageURL(params: Record<string, string>) {
  return `${getBaseUrl()}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/audits`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

const OG_IMAGE = generateOGImageURL({
  title: "LIONXE™ Assessments & Certifications",
  subtitle: "Every published audit, scored against one 16-criterion standard",
  badge: "Audit Archive",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "LIONXE™ Assessments & Certifications — All Published Audits",
  description:
    "All published LIONXE™ independent assessments and formal certifications. Each audit evaluates a digital entity, organization, or asset across 16 criteria and four pillars: Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
  keywords: [
    "LIONXE audits", "LIONXE assessments", "LIONXE certifications",
    "digital quality audit", "independent website assessment",
    "business audit standard", "Sufian Mustafa", "LIONXE audit archive",
  ],
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",
  alternates: { canonical: "/audits" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "LIONXE™",
    title: "LIONXE™ Assessments & Certifications — All Published Audits",
    description: "Every published LIONXE™ audit — independent assessments and formal certifications — scored against the same 16-criterion standard.",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "LIONXE™ Assessments & Certifications" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "LIONXE™ Assessments & Certifications",
    description: "All published LIONXE™ audits, scored against one 16-criterion standard.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1, "max-video-preview": -1 },
  },
  other: {
    "content-type": "audit-archive-index",
    "ai-content-declaration": "human-created, ai-assisted",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "total-audits": String(STATIC_AUDITS.length),
    "rubric-version": "LIONXE Audit Rubric v1.0",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────

function collectionPageSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}/#collection`,
    name: "LIONXE™ Assessments & Certifications",
    description: "All published LIONXE™ independent assessments and certification audits.",
    url: PAGE_URL,
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    isPartOf: { "@type": "CreativeWork", "@id": `${BASE_URL}/#framework`, name: "LIONXE™ Framework" },
  });
}

function itemListSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}/#itemlist`,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: STATIC_AUDITS.length,
    itemListElement: STATIC_AUDITS.map((audit, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE_URL}/audits/${audit.slug}`,
      name: audit.title,
    })),
  });
}

function breadcrumbSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",   item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Audits", item: PAGE_URL },
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={collectionPageSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={itemListSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <AuditsIndexClient />
    </>
  );
}