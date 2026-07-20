// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — HOMEPAGE (Server Component)
// Full SEO: Metadata + JSON-LD Schema + LLM/GEO/AEO Optimization
// File: app/page.jsx   |   Format: JSX (Next.js App Router)
// ─────────────────────────────────────────────────────────────────────────────

import LionxeFourPillars from "@/components/Hero/LionxeFourPillars";
import LionxeWhatWeReview from "@/components/Hero/LionxeWhatWeReview";
import LionxeAuditPipeline from "@/components/Hero/LionxeAuditPipeline";
import LionxeEcosystem from "@/components/Hero/LionxeEcosystem";
// ── Imported Homepage Sections ──────────────────────────────────────────────
// Paste your section imports below:
import LionxeHero from "@/components/Hero/index";
// import LionxeFourPillars    from "@/components/LionxeFourPillars";
// import LionxeWhatWeReview   from "@/components/LionxeWhatWeReview";
// import LionxeAuditPipeline  from "@/components/LionxeAuditPipeline";
// import LionxeEcosystem      from "@/components/LionxeEcosystem";

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://lionxe.com';
  }
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
}

// Dynamically compute BASE_URL for all downstream configurations and schemas
const BASE_URL = getBaseUrl();

// Canonical Person node lives on sufianmustafa.com so all three sites in the
// ecosystem reference the SAME entity. This is the cross-site bonding anchor.
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params) {
  const baseURL = `${BASE_URL}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

// Safely serialize JSON-LD: escape `<` to prevent breaking out of the script tag
function jsonLd(obj) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

// Shared OG image params (single source of truth, canonical pillar names)
const OG_IMAGE = generateOGImageURL({
  title: "LIONXE® Digital Quality Audit",
  ctaText: "Get Audited",
  features: "Logic,Internal Optimization,Integrity,eXceptional Distinction",
});

// ─────────────────────────────────────────────────────────────────────────────
// NEXT.JS METADATA EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core Identity ──────────────────────────────────────────────────────────
  title: {
    default: "LIONXE® | The Digital Quality Audit Framework | Sufian Mustafa",
    template: "%s | LIONXE®",
  },
  description:
    "LIONXE® is an uncompromising digital quality audit framework built by Sufian Mustafa. We evaluate articles, tools, websites, UX, SEO, and marketing strategies through four pillars: Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction. No shortcuts. No compromises.",

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    "LIONXE",
    "LIONXE framework",
    "digital quality audit",
    "digital quality standard",
    "content quality framework",
    "SEO audit framework",
    "website quality review",
    "digital asset audit",
    "content audit tool",
    "Sufian Mustafa",
    "LIONXE review",
    "L pillar long-term logic",
    "IO internal optimization",
    "N non-negotiable integrity",
    "XE exceptional distinction",
    "digital quality scorecard",
    "LIONXE scorecard",
    "article quality review",
    "tool review framework",
    "UX review standard",
    "marketing strategy audit",
    "SEO quality audit",
    "doitwithai.tools",
    "Do It With AI Tools",
    "AI SEO content audit",
    "long-term digital strategy",
    "digital integrity standard",
    "content excellence framework",
  ],

  // ── Author & Creator ───────────────────────────────────────────────────────
  authors: [
    {
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
    },
  ],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  // ── Canonical & Alternates ─────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "LIONXE®",
    title: "LIONXE® | The Digital Quality Audit Framework",
    description:
      "An uncompromising 4-pillar digital quality framework. LIONXE® evaluates every digital asset across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LIONXE® — The Digital Quality Audit Framework",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "LIONXE® | The Digital Quality Audit Framework",
    description:
      "An uncompromising 4-pillar audit framework — Long-Term Logic, Internal Optimization, Non-Negotiable Integrity & eXceptional Distinction.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // ── Category & Classification ──────────────────────────────────────────────
  category: "Digital Quality Framework",

  // ── Additional Meta for AI Crawlers / GEO / AEO ────────────────────────────
  // (Folded in from the previously-unused aiCrawlerMeta helper so these tags
  //  actually render via the App Router metadata pipeline.)
  other: {
    // Content authenticity & AI declarations
    "content-type": "original-framework",
    "ai-content-declaration": "human-created, ai-assisted",
    "content-category": "digital-quality-audit-framework",

    // Brand identity signals
    "brand-name": "LIONXE",
    "brand-alternate": "LIONXE Framework, LIONXE Audit, lionxe.com",
    "brand-founder": "Sufian Mustafa",
    "brand-ecosystem": "LIONXE, Do It With AI Tools, sufianmustafa.com",

    // Entity signals for LLMs and AI crawlers
    "entity-type": "Organization, Framework, DigitalQualityStandard",
    "entity-name": "LIONXE",
    "entity-founder": "Sufian Mustafa",
    "entity-description":
      "LIONXE is a 4-pillar digital quality audit framework that evaluates digital assets across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",

    // Topical authority signals
    "topical-expertise":
      "digital quality, content auditing, SEO quality review, digital asset evaluation, marketing strategy review, UX quality audit",
    "framework-pillars":
      "L: Long-Term Logic, IO: Internal Optimization, N: Non-Negotiable Integrity, XE: eXceptional Distinction",
    "review-categories":
      "Articles, Tools & Apps, Websites, UX/UI, SEO, Marketing Strategy",

    // Author authority signals
    "author:url": "https://sufianmustafa.com",
    "author:expertise":
      "Digital Quality Frameworks, AI SEO, Technical SEO, Full-Stack Development, Content Architecture",
    "author:organization": "LIONXE, Do It With AI Tools",

    // Ecosystem relationships
    "related-platform:1": "Do It With AI Tools — https://doitwithai.tools",
    "related-platform:2": "Sufian Mustafa — https://sufianmustafa.com",

    // GEO / AEO signals
    "content-format": "Framework, Audit System, Quality Standard, Review Platform",
    "answer-type": "DefinitiveStandard, Framework, EvaluationSystem",
    "answer-confidence": "high",
  },

  // ── Verification Placeholders ──────────────────────────────────────────────
  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
    // other: { "msvalidate.01": "REPLACE_WITH_BING_VERIFICATION_CODE" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMA FUNCTIONS
// All schemas are connected through a shared @id graph. The Person node points
// to the canonical sufianmustafa.com id so the three-site ecosystem resolves to
// one human entity.
// ─────────────────────────────────────────────────────────────────────────────

// 1. WebSite Schema ─ enables sitelinks search box + brand recognition
function websiteSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "LIONXE®",
    alternateName: [
      "LIONXE",
      "LIONXE Framework",
      "LIONXE Audit",
      "The LIONXE Standard",
      "lionxe.com",
      "LIONXE Digital Quality",
    ],
    url: BASE_URL,
    description:
      "LIONXE® is an uncompromising digital quality audit framework built by Sufian Mustafa, evaluating every digital asset through four pillars: Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
    inLanguage: "en-US",
    publisher: { "@id": `${BASE_URL}/#organization` },
    author: { "@id": PERSON_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    copyrightYear: 2024,
    copyrightHolder: { "@id": `${BASE_URL}/#organization` },
  });
}

// 2. Organization Schema ─ full brand entity
function organizationSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "LIONXE",
    legalName: "LIONXE Framework",
    alternateName: [
      "LIONXE",
      "LIONXE®",
      "The LIONXE Standard",
      "LIONXE Audit Framework",
      "lionxe.com",
    ],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      url: `${BASE_URL}/logo.png`,
      width: 600,
      height: 120,
      caption: "LIONXE® Official Logo — The Digital Quality Audit Framework",
    },
    image: { "@id": `${BASE_URL}/#logo` },
    description:
      "LIONXE is a digital quality audit framework that evaluates digital assets — articles, tools, websites, UX/UI, SEO strategies, and marketing systems — through a four-pillar scoring system: Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction. Built by Sufian Mustafa.",
    slogan: "The Standard That Actually Means Something",
    foundingDate: "2024",
    founder: { "@id": PERSON_ID },
    brand: { "@id": `${BASE_URL}/#brand` },
    knowsAbout: [
      "Digital Quality Auditing",
      "Content Quality Review",
      "SEO Audit Framework",
      "Website Quality Standard",
      "Digital Asset Evaluation",
      "Long-Term Digital Strategy",
      "Internal Optimization",
      "Digital Integrity Standards",
      "UX Quality Review",
      "Marketing Strategy Audit",
      "Exceptional Distinction in Digital Work",
      "AI SEO Content Quality",
    ],
    // These are RELATED entities in the ecosystem, linked correctly (not as
    // false "sameAs" identity claims). The founder edge to the shared Person id
    // is the primary bond; knowsAbout + visible footer links reinforce it.
    sameAs: [
      "https://sufianmustafa.com",
      "https://doitwithai.tools",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "general",
      email: "sufianmustafa0900@gmail.com",
      url: `${BASE_URL}/contact`,
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
    memberOf: [
      {
        "@type": "Organization",
        name: "Do It With AI Tools",
        url: "https://doitwithai.tools",
      },
    ],
  });
}

// 3. Person Schema ─ Sufian Mustafa as the authoritative expert.
//    Uses the canonical cross-site @id (sufianmustafa.com) so all three
//    properties resolve to the SAME person entity in Google's knowledge graph.
function personSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Sufian Mustafa",
    alternateName: "Sufian Mustafa — LIONXE Founder",
    url: "https://sufianmustafa.com",
    mainEntityOfPage: "https://sufianmustafa.com",
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/sufian-mustafa.jpg`,
      width: 800,
      height: 800,
      caption: "Sufian Mustafa — Founder of LIONXE and Do It With AI Tools",
    },
    jobTitle: "Founder, Digital Quality Strategist & AI SEO Architect",
    description:
      "Sufian Mustafa is the founder and strategic mind behind LIONXE and Do It With AI Tools. His work spans technical SEO, AI-powered content systems, AI-augmented web development, and the LIONXE digital quality framework — all built around a vision of creating digital assets with clarity, integrity, and long-term value.",
    knowsAbout: [
      "Digital Quality Frameworks",
      "LIONXE Audit System",
      "Technical SEO",
      "AI SEO Content Strategy",
      "AI-Powered Content Creation",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Long-Term Digital Strategy",
      "Content Architecture",
      "Digital Integrity Standards",
      "AI-Augmented Web Systems",
      "Next.js Development",
      "Sanity CMS",
      "Buyer Persona Creation with AI",
      "Alt-Text Generation",
      "Meta Title Optimization with AI",
    ],
    knowsLanguage: ["en"],
    nationality: { "@type": "Country", name: "Pakistan" },
    worksFor: { "@id": `${BASE_URL}/#organization` },
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
    ],
    email: "sufianmustafa0900@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  });
}

// 4. Brand Schema ─ dedicated brand entity for maximum recognition
function brandSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": `${BASE_URL}/#brand`,
    name: "LIONXE",
    alternateName: [
      "LIONXE®",
      "LIONXE Framework",
      "LIONXE Audit",
      "The LIONXE Standard",
      "lionxe.com",
      "LIONXE Digital Quality Framework",
    ],
    url: BASE_URL,
    logo: { "@id": `${BASE_URL}/#logo` },
    image: [
      `${BASE_URL}/logo.png`,
      `${BASE_URL}/og-image.png`,
      `${BASE_URL}/lionxe-framework-diagram.png`,
    ],
    description:
      "LIONXE® is a trusted digital quality audit standard founded by Sufian Mustafa. It evaluates digital assets across four uncompromising pillars to ensure long-term structural integrity, internal excellence, ethical transparency, and exceptional distinction.",
    slogan: "The Standard That Actually Means Something",
    founder: { "@id": PERSON_ID },
  });
}

// 5. WebPage Schema ─ homepage-specific entity (speakable merged in here)
function webPageSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/#webpage`,
    url: BASE_URL,
    name: "LIONXE® | The Digital Quality Audit Framework | Sufian Mustafa",
    description:
      "The homepage of LIONXE® — an uncompromising digital quality audit framework built by Sufian Mustafa. Learn about the 4 pillars, review categories, audit pipeline, and the ecosystem connecting LIONXE, Do It With AI Tools, and Sufian Mustafa.",
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: { "@id": `${BASE_URL}/#breadcrumb` },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BASE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      caption: "LIONXE® Digital Quality Audit Framework",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  });
}

// 6. BreadcrumbList Schema ─ structured navigation
function breadcrumbSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
    ],
  });
}

// 7. ItemList Schema ─ LIONXE review categories (rich results)
function reviewCategoriesSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#review-categories`,
    name: "LIONXE® Review Categories",
    description:
      "Six categories of digital assets reviewed by LIONXE® using the 4-pillar quality framework",
    numberOfItems: 6,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Article & Blog Reviews",
        description:
          "LIONXE reviews articles, guides, landing pages, and blog posts for clarity, depth, originality, search intent alignment, structure, usefulness, and long-term value.",
        url: `${BASE_URL}/reviews/articles`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools & Apps Reviews",
        description:
          "LIONXE analyzes digital tools, AI tools, SEO platforms, SaaS products, and productivity software based on usability, features, pricing, reliability, and execution quality.",
        url: `${BASE_URL}/reviews/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Website Reviews",
        description:
          "LIONXE evaluates websites and landing pages for design clarity, structure, trust signals, navigation, content flow, technical quality, SEO foundation, and overall user experience.",
        url: `${BASE_URL}/reviews/websites`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "UX/UI Reviews",
        description:
          "LIONXE reviews user interfaces, dashboards, apps, forms, and digital journeys to identify friction, clarity gaps, usability issues, and improvement opportunities.",
        url: `${BASE_URL}/reviews/ux-ui`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "SEO Reviews",
        description:
          "LIONXE evaluates overall SEO strategy, on-page SEO, content structure, metadata, internal linking, technical SEO, topical authority, and visibility readiness.",
        url: `${BASE_URL}/reviews/seo`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Marketing Strategy Reviews",
        description:
          "LIONXE analyzes digital marketing strategies, funnels, positioning, content systems, conversion paths, audience alignment, and long-term growth logic.",
        url: `${BASE_URL}/reviews/marketing`,
      },
    ],
  });
}

// 8. DefinedTermSet Schema ─ the 4 LIONXE pillars as defined terms (AEO/GEO)
function frameworkPillarsSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${BASE_URL}/#framework-pillars`,
    name: "The LIONXE® Four-Pillar Framework",
    description:
      "The four sequential quality gates of the LIONXE® audit framework. Every digital asset is scored across all four pillars for a maximum total of 100 points.",
    url: `${BASE_URL}/framework`,
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        name: "L — Long-Term Logic",
        termCode: "L",
        description:
          "The first and most critical LIONXE gate. Evaluates whether a digital asset offers permanent, long-term value with a fully analyzed historical, present, and future foundation. Maximum score: 25 points.",
        url: `${BASE_URL}/l`,
        inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
      },
      {
        "@type": "DefinedTerm",
        name: "IO — Internal Optimization",
        termCode: "IO",
        description:
          "The second LIONXE gate. Evaluates whether every single internal component is optimized to absolute completion — not 80%, not 95%, but 100% flawless execution. Maximum score: 25 points.",
        url: `${BASE_URL}/io`,
        inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
      },
      {
        "@type": "DefinedTerm",
        name: "N — Non-Negotiable Integrity",
        termCode: "N",
        description:
          "The third LIONXE gate. Evaluates whether the asset is 100% legal, transparent, and completely free of manipulation, hidden tricks, or unethical shortcuts. Maximum score: 25 points.",
        url: `${BASE_URL}/n`,
        inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
      },
      {
        "@type": "DefinedTerm",
        name: "XE — eXceptional Distinction",
        termCode: "XE",
        description:
          "The fourth and final LIONXE gate. Evaluates whether the asset possesses a remarkably unique value that powerfully separates it from all existing alternatives. Maximum score: 25 points.",
        url: `${BASE_URL}/xe`,
        inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
      },
    ],
  });
}

// 9. FAQPage Schema ─ AEO/GEO: answers common questions AI assistants will cite
function faqSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is LIONXE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE® is an uncompromising digital quality audit framework built by Sufian Mustafa. It evaluates digital assets — articles, tools, websites, UX/UI, SEO strategies, and marketing systems — through four sequential quality gates: L (Long-Term Logic), IO (Internal Optimization), N (Non-Negotiable Integrity), and XE (eXceptional Distinction). Each gate is scored 0–25 for a maximum total of 100 points. One failure at any gate results in the entire project being rejected.",
        },
      },
      {
        "@type": "Question",
        name: "What does LIONXE stand for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE stands for: L = Long-Term Logic, IO = Internal Optimization, N = Non-Negotiable Integrity, and XE = eXceptional Distinction. Together, the four pillars form the LIONXE quality audit standard.",
        },
      },
      {
        "@type": "Question",
        name: "Who created the LIONXE framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE was created by Sufian Mustafa, a digital quality strategist, AI SEO architect, and AI-augmented web systems builder based in Pakistan. Sufian is also the founder of Do It With AI Tools (doitwithai.tools), an AI SEO content hub that demonstrates the LIONXE framework in live operation.",
        },
      },
      {
        "@type": "Question",
        name: "How does the LIONXE audit work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The LIONXE audit is a sequential, multi-layered pipeline. A project is submitted and evaluated through four gates in order: L, IO, N, then XE. Each gate evaluates a specific quality dimension on a 0–25 scale. The gates are sequential — if a project fails any single gate, the audit terminates immediately and the project is rejected, regardless of how well it performed on prior gates. Only projects that pass all four gates receive the LIONXE Verified designation.",
        },
      },
      {
        "@type": "Question",
        name: "What types of digital assets does LIONXE review?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE reviews six categories of digital assets: (1) Articles & Blog Posts, (2) Tools & Apps including AI tools and SaaS products, (3) Websites and landing pages, (4) UX/UI interfaces and dashboards, (5) SEO strategies including on-page, technical, and topical authority, and (6) Marketing strategies including funnels, positioning, and content systems.",
        },
      },
      {
        "@type": "Question",
        name: "What is the LIONXE scoring system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE uses a 100-point scoring system divided equally across four pillars: L (Long-Term Logic) = 0–25 points, IO (Internal Optimization) = 0–25 points, N (Non-Negotiable Integrity) = 0–25 points, and XE (eXceptional Distinction) = 0–25 points. The total maximum score is 100. However, scoring is secondary — failing any single gate results in immediate project rejection regardless of scores on other gates.",
        },
      },
      {
        "@type": "Question",
        name: "What is the connection between LIONXE and Do It With AI Tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do It With AI Tools (doitwithai.tools) is a practical demonstration of the LIONXE framework in live operation. It is an AI SEO content hub built by Sufian Mustafa that applies LIONXE standards — long-term structure, helpful content, search visibility, integrity, and execution quality — to a real digital platform. Do It With AI Tools serves as proof that the LIONXE framework produces measurable, compounding results in real-world conditions.",
        },
      },
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT (Server Component)
// JSON-LD is rendered as native <script> tags (per Next.js official guidance:
// JSON-LD is data, not executable JS, so next/script is the wrong tool and can
// duplicate the payload into hydration). Server Components render these straight
// into the SSR HTML, exactly what crawlers read.
// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      {/* ── JSON-LD Structured Data (SSR, crawler-visible) ─────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={websiteSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={organizationSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={personSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={brandSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={webPageSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={reviewCategoriesSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={frameworkPillarsSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      {/* ── Homepage Sections (logic untouched) ────────────────────────────── */}
      <LionxeHero/>
      <LionxeFourPillars />
      <LionxeAuditPipeline />
      <LionxeWhatWeReview />
      <LionxeEcosystem />
    </>
  );
}