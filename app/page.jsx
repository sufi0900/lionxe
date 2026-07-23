// ─────────────────────────────────────────────────────────────────────────────
// LIONXE.COM — HOMEPAGE (Server Component)
// Full SEO: Metadata + Universal Top-Down JSON-LD Schema + GEO/AEO Optimization
// File: app/page.jsx   |   Format: JSX (Next.js App Router)
// ─────────────────────────────────────────────────────────────────────────────

import LionxeHero from "@/components/Hero/index";
import LionxeFourPillars from "@/components/Hero/LionxeFourPillars";
import LionxeFounderOverview from "@/components/Hero/LionxeFounderOverview";
import LionxeAuditPipeline from "@/components/Hero/LionxeAuditPipeline";
import LionxeWhatWeReview from "@/components/Hero/LionxeWhatWeReview";
import LionxeEcosystem from "@/components/Hero/LionxeEcosystem";
import Contact from "@/components/Contact";

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS & CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") {
    return "https://lionxe.com";
  }
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
}

const BASE_URL = getBaseUrl();
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

function generateOGImageURL(params) {
  const baseURL = `${BASE_URL}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

function jsonLd(obj) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const OG_IMAGE = generateOGImageURL({
  title: "LIONXE ™ — Universal Quality Evaluation Framework",
  ctaText: "Explore the Standard",
  features: "Long-Term Logic,Internal Optimization,Integrity,Distinction",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA EXPORT (Top-Down Universal Hierarchy)
// ─────────────────────────────────────────────────────────────────────────────

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "LIONXE ™ | Universal Quality Evaluation & Audit Framework",
    template: "%s | LIONXE ™",
  },
  description:
    "LIONXE ™ is an uncompromising universal quality evaluation and audit framework built by Sufian Mustafa. We audit strategic choices, business models, software systems, websites, and content ecosystems across four non-negotiable gates.",

  keywords: [
    "LIONXE",
    "LIONXE framework",
    "universal quality evaluation framework",
    "quality evaluation standard",
    "Post-Flood Collapse Rule",
    "Weakest Link Axiom",
    "Cost-Indifferent Mandate",
    "Commodity Threshold Law",
    "digital quality audit",
    "website audit framework",
    "SaaS quality audit",
    "SEO quality standard",
    "Sufian Mustafa",
    "LIONXE scorecard",
    "long-term digital strategy",
    "digital integrity standard",
    "Do It With AI Tools",
  ],

  authors: [
    {
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
    },
  ],
  creator: "Sufian Mustafa",
  publisher: "LIONXE",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "LIONXE ™",
    title: "LIONXE ™ | Universal Quality Evaluation & Audit Framework",
    description:
      "A universal 4-pillar quality standard created by Sufian Mustafa. LIONXE ™ measures, audits, and certifies entities across Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LIONXE ™ — Universal Quality Evaluation & Audit Framework",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@lionxe",
    creator: "@sufianmustafa",
    title: "LIONXE ™ | Universal Quality Evaluation Framework",
    description:
      "Uncompromising 4-pillar quality evaluation standard — Long-Term Logic, Internal Optimization, Non-Negotiable Integrity & eXceptional Distinction.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Universal Quality Standard",

  other: {
    "content-type": "universal-quality-framework",
    "ai-content-declaration": "human-created, ai-assisted",
    "content-category": "quality-evaluation-framework",

    "brand-name": "LIONXE",
    "brand-alternate": "LIONXE Framework, LIONXE Audit, lionxe.com",
    "brand-founder": "Sufian Mustafa",
    "brand-ecosystem": "LIONXE, Do It With AI Tools, sufianmustafa.com",

    "entity-type": "Organization, Framework, QualityStandard",
    "entity-name": "LIONXE",
    "entity-founder": "Sufian Mustafa",
    "entity-description":
      "LIONXE is a universal 4-pillar quality evaluation framework that audits entities, strategic decisions, software systems, and digital platforms.",

    "topical-expertise":
      "universal quality auditing, systems architecture, technical SEO, digital asset evaluation, business model durability, AI search visibility",
    "framework-pillars":
      "L: Long-Term Logic, IO: Internal Optimization, N: Non-Negotiable Integrity, XE: eXceptional Distinction",
    "review-categories":
      "Websites & Digital Platforms, Software & SaaS Tools, Organizations & Models, Content & Media Systems, Physical Projects, Strategic Decisions",

    "author:url": "https://sufianmustafa.com",
    "author:expertise":
      "Systems Architecture, Quality Frameworks, Technical SEO, AI SEO, Full-Stack Engineering",
    "author:organization": "LIONXE, Do It With AI Tools",

    "related-platform:1": "Do It With AI Tools — https://doitwithai.tools",
    "related-platform:2": "Sufian Mustafa — https://sufianmustafa.com",

    "content-format": "Framework, Audit System, Quality Standard, Evaluation Platform",
    "answer-type": "DefinitiveStandard, Framework, EvaluationSystem",
    "answer-confidence": "high",
  },

  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────────────────────

// 1. WebSite Schema
function websiteSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "LIONXE ™",
    alternateName: [
      "LIONXE",
      "LIONXE Framework",
      "LIONXE Audit",
      "The LIONXE Standard",
      "lionxe.com",
      "LIONXE Quality Framework",
    ],
    url: BASE_URL,
    description:
      "LIONXE ™ is a universal quality evaluation and audit framework built by Sufian Mustafa, evaluating entities through four non-negotiable pillars: Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Distinction.",
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

// 2. Organization Schema
function organizationSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "LIONXE",
    legalName: "LIONXE Framework",
    alternateName: [
      "LIONXE",
      "LIONXE ™",
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
      caption: "LIONXE ™ Official Logo — Universal Quality Evaluation Framework",
    },
    image: { "@id": `${BASE_URL}/#logo` },
    description:
      "LIONXE is a universal quality evaluation framework that audits entities, strategic decisions, business models, software tools, websites, and content systems through a four-pillar scoring methodology.",
    slogan: "The Standard That Actually Means Something",
    foundingDate: "2024",
    founder: { "@id": PERSON_ID },
    brand: { "@id": `${BASE_URL}/#brand` },
    knowsAbout: [
      "Universal Quality Frameworks",
      "Systems Architecture",
      "SEO Audit Framework",
      "Website Quality Standard",
      "SaaS & Software Evaluation",
      "Long-Term Digital Strategy",
      "Internal Optimization",
      "Digital Integrity Standards",
      "Exceptional Distinction in Digital Work",
      "AI SEO & Search Visibility",
    ],
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

// 3. Person Schema (Canonical Anchor)
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
      url: `${BASE_URL}/images/founder/sufian-mustafa.jpg`,
      width: 800,
      height: 800,
      caption: "Sufian Mustafa — Systems Architect & Creator of LIONXE",
    },
    jobTitle: "Systems Architect, AI Strategist & Technical SEO Expert",
    description:
      "Sufian Mustafa is the creator of the LIONXE universal quality evaluation framework and founder of Do It With AI Tools. His work spans systems architecture, technical SEO, AI search visibility, and digital ecosystem engineering.",
    knowsAbout: [
      "Universal Quality Frameworks",
      "LIONXE Audit System",
      "Technical SEO",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Systems Architecture",
      "Next.js Development",
      "Sanity CMS Architecture",
      "Long-Term Business Logic",
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

// 4. Brand Schema
function brandSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": `${BASE_URL}/#brand`,
    name: "LIONXE",
    alternateName: [
      "LIONXE ™",
      "LIONXE Framework",
      "LIONXE Audit",
      "The LIONXE Standard",
      "lionxe.com",
      "LIONXE Quality Standard",
    ],
    url: BASE_URL,
    logo: { "@id": `${BASE_URL}/#logo` },
    image: [
      `${BASE_URL}/logo.png`,
      `${BASE_URL}/og-image.png`,
    ],
    description:
      "LIONXE ™ is a universal quality evaluation standard founded by Sufian Mustafa. It audits entities across four non-negotiable pillars to ensure long-term structural integrity, complete internal execution, ethical transparency, and exceptional distinction.",
    slogan: "The Standard That Actually Means Something",
    founder: { "@id": PERSON_ID },
  });
}

// 5. WebPage Schema
function webPageSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/#webpage`,
    url: BASE_URL,
    name: "LIONXE ™ | Universal Quality Evaluation & Audit Framework | Sufian Mustafa",
    description:
      "The homepage of LIONXE ™ — a universal quality evaluation framework built by Sufian Mustafa. Learn about the 4 pillars, audit pipeline, sector lenses, and ecosystem.",
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
      caption: "LIONXE ™ Universal Quality Evaluation Framework",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  });
}

// 6. BreadcrumbList Schema
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

// 7. ItemList Schema — Sector Lenses
function reviewCategoriesSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#review-categories`,
    name: "LIONXE ™ Universal Sector Lenses",
    description:
      "Six sector lenses where the LIONXE ™ universal quality framework is applied for evaluation and audit.",
    numberOfItems: 6,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Websites & Digital Platforms",
        description:
          "Evaluating site architecture, technical foundation, search visibility, user experience, and long-term authority.",
        url: `${BASE_URL}/reviews/websites`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Software & SaaS Tools",
        description:
          "Analyzing software products, AI tools, and productivity applications based on functional stability, data safety, and execution quality.",
        url: `${BASE_URL}/reviews/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Organizations & Business Models",
        description:
          "Auditing business sustainment models, dependency concentration, and transparent operations.",
        url: `${BASE_URL}/reviews/organizations`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Content & Media Systems",
        description:
          "Reviewing articles, editorial systems, and channels for first-hand research, documented expertise, and long-term value.",
        url: `${BASE_URL}/reviews/articles`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Physical Projects & Infrastructure",
        description:
          "Applying the 4 quality gates to physical assets, premises, and construction projects.",
        url: `${BASE_URL}/reviews/projects`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Strategic Decisions",
        description:
          "A decision framework for evaluating investments, resource allocation, and multi-year strategic tradeoffs.",
        url: `${BASE_URL}/reviews/decisions`,
      },
    ],
  });
}

// 8. DefinedTermSet Schema — Correct Pathway Slugs Applied
function frameworkPillarsSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${BASE_URL}/#framework-pillars`,
    name: "The LIONXE ™ Four-Pillar Framework",
    description:
      "The four sequential quality gates of the LIONXE ™ audit framework. Every entity is scored across 16 criteria for a maximum total of 400 points.",
    url: `${BASE_URL}/framework`,
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        name: "L — Long-Term Logic",
        termCode: "L",
        description:
          "The first gate. Governed by the Post-Flood Collapse Rule. Evaluates whether an entity is justified by durable, compounding benefit rather than temporary conditions. Maximum score: 100 points.",
        url: `${BASE_URL}/long-term-logic`,
        inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
      },
      {
        "@type": "DefinedTerm",
        name: "IO — Internal Optimization",
        termCode: "IO",
        description:
          "The second gate. Governed by the Weakest Link Axiom. Evaluates whether every internal layer — foundation, output, reach, and upkeep — is executed to a complete professional standard. Maximum score: 100 points.",
        url: `${BASE_URL}/internal-optimization`,
        inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
      },
      {
        "@type": "DefinedTerm",
        name: "N — Non-Negotiable Integrity",
        termCode: "N",
        description:
          "The third gate. Governed by the Cost-Indifferent Mandate. Exclusive home of all violation, deception, and false-claim findings. Maximum score: 100 points.",
        url: `${BASE_URL}/non-negotiable-integrity`,
        inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
      },
      {
        "@type": "DefinedTerm",
        name: "XE — eXceptional Distinction",
        termCode: "XE",
        description:
          "The fourth gate. Governed by the Commodity Threshold Law. Evaluates whether the entity offers something a generic alternative cannot replace. Maximum score: 100 points.",
        url: `${BASE_URL}/exceptional-distinction`,
        inDefinedTermSet: `${BASE_URL}/#framework-pillars`,
      },
    ],
  });
}

// 9. FAQPage Schema — Top-Down Alignment
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
          text: "LIONXE ™ is a universal quality evaluation and certification framework created by Sufian Mustafa. It evaluates any entity — a strategic decision, business model, software tool, website, or content system — through four sequential quality gates: L (Long-Term Logic), IO (Internal Optimization), N (Non-Negotiable Integrity), and XE (eXceptional Distinction). Each gate is scored across 4 domains (0–25 each) for a grand maximum total of 400 points.",
        },
      },
      {
        "@type": "Question",
        name: "Is LIONXE specifically for websites and software tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. LIONXE is a sector-agnostic universal standard. Its scoring statements describe entity states that apply universally across six sector lenses: websites, software tools, organizations, media channels, physical projects, and strategic decisions.",
        },
      },
      {
        "@type": "Question",
        name: "Who created the LIONXE framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIONXE was created by Sufian Mustafa, a Systems Architect, AI Strategist, and Technical SEO Expert based in Pakistan. He is also the founder of Do It With AI Tools (doitwithai.tools), which operates under LIONXE quality standards.",
        },
      },
      {
        "@type": "Question",
        name: "How does the LIONXE audit pipeline work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The LIONXE audit is a sequential pipeline. An entity is evaluated through Gate 1 (L), Gate 2 (IO), Gate 3 (N), and Gate 4 (XE). If an entity scores 0 on any criterion or below 15/100 on any pillar, a blocking issue is triggered and the audit results in immediate disqualification.",
        },
      },
      {
        "@type": "Question",
        name: "What is the connection between LIONXE and Do It With AI Tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do It With AI Tools (doitwithai.tools) is a practical live demonstration of the LIONXE framework in operation. It applies LIONXE quality standards to AI SEO content workflows, serving as proof that the framework produces compounding, durable search authority.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={websiteSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={organizationSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={personSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={brandSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={webPageSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={reviewCategoriesSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={frameworkPillarsSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema()} />

      {/* Structured Top-Down Component Flow */}
      <LionxeHero />
      <LionxeFourPillars />
      <LionxeFounderOverview />
      <LionxeAuditPipeline />
      <LionxeWhatWeReview />
      <LionxeEcosystem />
      <Contact />
    </>
  );
}