// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — FOUNDER PAGE (Server Component Wrapper)
// Full SEO: Metadata + Canonical Person Schema + GEO/AEO Optimization
// File: app/founder/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import FounderClient from "./FounderClient";

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
const PAGE_URL = `${BASE_URL}/founder`;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params: Record<string, string>) {
  return `${BASE_URL}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "Sufian Mustafa — Founder & Systems Architect | LIONXE ™",
  ctaText: "Read Biography & Methodology",
  features: "Systems Architecture,Technical SEO,AI Search Visibility,LIONXE Framework",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Sufian Mustafa — Digital Growth Architect & LIONXE ™ Creator",
  description:
    "Official background of Sufian Mustafa: Digital Growth & AI Search Systems Architect, AI-Augmented Web Systems Builder, founder of Do It With AI Tools, and creator of the LIONXE ™ quality framework.",

  keywords: [
    "Sufian Mustafa",
    "Sufian Mustafa founder",
    "LIONXE creator",
    "Digital Growth & AI Search Systems Architect",
    "AI-Augmented Web Systems Builder",
    "Technical SEO Architect",
    "Do It With AI Tools founder",
    "LIONXE framework author",
    "AI SEO strategist",
    "Next.js Sanity SEO builder",
    "universal quality framework creator",
  ],

  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  alternates: { canonical: "/founder" },

  openGraph: {
    type: "profile",
    url: PAGE_URL,
    siteName: "LIONXE ™",
    title: "Sufian Mustafa — Digital Growth & AI Search Systems Architect",
    description:
      "Background and methodology of Sufian Mustafa, author of LIONXE ™ and founder of Do It With AI Tools. Specializing in full-stack web architectures, technical SEO, and AI search visibility.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sufian Mustafa — Founder & Creator of LIONXE ™ Framework",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "Sufian Mustafa — Systems Architect & LIONXE ™ Creator",
    description:
      "Digital Growth & AI Search Systems Architect, AI-Augmented Web Systems Builder, and creator of LIONXE ™.",
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
    "content-type": "founder-profile",
    "ai-content-declaration": "human-created, ai-assisted",
    "brand-name": "LIONXE",
    "brand-founder": "Sufian Mustafa",
    "brand-ecosystem": "LIONXE, Do It With AI Tools, sufianmustafa.com",
    "entity-type": "Person, Architect, Founder",
    "entity-name": "Sufian Mustafa",
    "primary-topic": "Sufian Mustafa Biography & LIONXE Framework Creation",
    "author:url": "https://sufianmustafa.com",
    "author:expertise":
      "Systems Architecture, Technical SEO, AI SEO, Full-Stack Next.js Engineering, Quality Framework Design",
    "related-platform:1": "Do It With AI Tools — https://doitwithai.tools",
    "related-platform:2": "Sufian Mustafa — https://sufianmustafa.com",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA (JSON-LD)
// ─────────────────────────────────────────────────────────────────────────────

// 1. ProfilePage Schema
function profilePageSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "Sufian Mustafa — Founder Biography & Systems Architecture Profile",
    description:
      "The official founder page of Sufian Mustafa, Digital Growth & AI Search Systems Architect and creator of the LIONXE ™ Quality Framework.",
    inLanguage: "en-US",
    mainEntity: { "@id": PERSON_ID },
    isPartOf: { "@id": `${BASE_URL}/#website` },
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
      { "@type": "ListItem", position: 2, name: "Founder", item: PAGE_URL },
    ],
  });
}

// 3. Person Schema (Cross-Site Canonical Entity Anchor)
function personSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Sufian Mustafa",
    alternateName: ["Sufian Mustafa — LIONXE Founder", "Sufian Mustafa Architect"],
    url: "https://sufianmustafa.com",
    mainEntityOfPage: "https://sufianmustafa.com",
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/founder/sufian-mustafa.jpg`,
      width: 800,
      height: 800,
      caption: "Sufian Mustafa — Founder of LIONXE and Do It With AI Tools",
    },
    jobTitle: "Digital Growth & AI Search Systems Architect",
    description:
      "Sufian Mustafa is a Digital Growth & AI Search Systems Architect and AI-Augmented Web Systems Builder. He is the author of the LIONXE ™ universal quality framework and founder of Do It With AI Tools.",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Abdul Wali Khan University Mardan (AWKUM)",
      degree: "Master of Computer Science (MCS)",
    },
    knowsAbout: [
      "Universal Quality Frameworks",
      "LIONXE Audit System",
      "Systems Architecture",
      "Technical SEO",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Next.js Development",
      "Sanity CMS Architecture",
      "Redis Caching Systems",
      "Multi-Location Local SEO Auditing",
    ],
    founder: [
      { "@id": `${BASE_URL}/#organization` },
      {
        "@type": "Organization",
        name: "Do It With AI Tools",
        url: "https://doitwithai.tools",
      },
    ],
    sameAs: [
      "https://doitwithai.tools",
      "https://doitwithai.tools/about",
      "https://sufianmustafa.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  });
}

// 4. FAQPage Schema
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Sufian Mustafa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sufian Mustafa is a Digital Growth & AI Search Systems Architect, AI-Augmented Web Systems Builder, founder of Do It With AI Tools (doitwithai.tools), and the author of the LIONXE ™ Universal Quality Evaluation Framework.",
        },
      },
      {
        "@type": "Question",
        name: "What led Sufian Mustafa to create LIONXE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While executing technical SEO operations and evaluating a 87-site local search network, Sufian observed widespread doorway page abuse, thin AI copy, and unverified customer trust claims. When search algorithms updated, these fragile setups collapsed. LIONXE was created as a rigid 4-pillar, 16-criterion governance framework to eliminate digital shortcuts and measure true structural durability.",
        },
      },
      {
        "@type": "Question",
        name: "What is Sufian Mustafa's technical background?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sufian holds a Master of Computer Science (MCS) degree from AWKUM. His technical work spans Next.js App Router architectures, Sanity headless CMS schema design, Redis caching, Cloudflare delivery, technical SEO, JSON-LD schema graphing, and AI search visibility (GEO/AEO).",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={profilePageSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={personSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      <FounderClient />
    </>
  );
}