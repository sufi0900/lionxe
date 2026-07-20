/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
// app/audits/[slug]/SeoAndSchemaWrapper.jsx
// Client component — all SEO meta tags + JSON-LD schema for LIONXE review pages

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
// app/audits/[slug]/SeoAndSchemaWrapper.jsx
// Client component — all SEO meta tags + JSON-LD schema for LIONXE review pages

"use client";

import React, { useMemo } from "react";
import Head from "next/head";
import Script from "next/script";
import { urlForImage } from "@/sanity/lib/image";

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — maps reviewCategory to schema.org @type for itemReviewed
// ─────────────────────────────────────────────────────────────────────────────
function getItemReviewedType(category) {
  const map = {
    articles: "Article",
    tools: "SoftwareApplication",
    websites: "WebSite",
    "ux-ui": "WebApplication",
    seo: "WebSite",
    marketing: "Service",
  };
  return map[category] || "Thing";
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN WRAPPER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function SeoAndSchemaWrapper({ data, params, baseUrl }) {
  const slug = params.slug;
  const canonicalUrl = `${baseUrl}/audits/${slug}`;
  const imageUrl = data?.mainImage ? urlForImage(data.mainImage).url() : null;
  const readingTime = data ? Math.ceil((data.wordCount || 1000) / 250) : null;

  // Memoize every schema so they don't rebuild on every parent re-render
  const reviewSchema = useMemo(() => genReviewSchema(data, canonicalUrl, imageUrl, baseUrl), [data, canonicalUrl, imageUrl, baseUrl]);
  const webPageSchema = useMemo(() => genWebPageSchema(data, canonicalUrl, imageUrl, baseUrl), [data, canonicalUrl, imageUrl, baseUrl]);
  const breadcrumbSchema = useMemo(() => genBreadcrumbSchema(data, canonicalUrl, baseUrl), [data, canonicalUrl, baseUrl]);
  const faqSchema = useMemo(() => genFaqSchema(data, canonicalUrl), [data, canonicalUrl]);
  const websiteSchema = useMemo(() => genWebsiteSchema(baseUrl), [baseUrl]);
  const organizationSchema = useMemo(() => genOrganizationSchema(baseUrl), [baseUrl]);
  const pillarRatingSchema = useMemo(() => genPillarRatingSchema(data, canonicalUrl), [data, canonicalUrl]);
  const speakableSchema = useMemo(() => genSpeakableSchema(canonicalUrl), [canonicalUrl]);

  return (
    <>
      {/* ──────────────────────────────────────────────────────────
          HEAD: meta tags, OG, Twitter, canonical
          ────────────────────────────────────────────────────────── */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Fallback title (generateMetadata handles the real one) */}
        <title>{data?.metatitle || "Loading Review"} | LIONXE™</title>
        <meta name="description" content={data?.metadesc || "LIONXE digital quality audit review."} />
        <meta 
          name="keywords" 
          content={[
            data?.targetEntity,
            "LIONXE review",
            "digital quality audit",
            "LIONXE framework",
            "Sufian Mustafa",
            ...(data?.tags?.map((t) => t?.name) || []),
          ].filter(Boolean).join(",")} 
        />
        
        {/* Authorship */}
        <meta name="author" content={data?.leadAuditor || "Sufian Mustafa"} />
        <meta name="creator" content={data?.leadAuditor || "Sufian Mustafa"} />
        <meta name="publisher" content="LIONXE™" />
        
        {/* Robots */}
        <meta name="robots" content={data ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" : "noindex,nofollow"} />
        <meta name="googlebot" content={data ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" : "noindex,nofollow"} />
        <meta name="bingbot" content={data ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" : "noindex,nofollow"} />

        {/* ── Data-dependent tags ── */}
        {data && (
          <>
            {/* Article/review timing */}
            <meta name="article:published_time" content={data.publishedAt} />
            <meta name="article:modified_time" content={data._updatedAt || data.publishedAt} />
            <meta name="article:author" content={data.leadAuditor || "Sufian Mustafa"} />
            <meta name="article:section" content="Digital Quality Reviews" />
            {data.tags?.map((tag, i) => (
              <meta key={`at-${i}`} name="article:tag" content={tag?.name} />
            ))}

            {/* Content classification */}
            <meta name="classification" content="Technology,DigitalQuality,SEO,Reviews" />
            <meta name="category" content={`LIONXE ${data.targetCategory || "Review"}`} />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <meta name="subject" content={`LIONXE Quality Audit: ${data.targetEntity}`} />
            <meta name="topic" content="Digital Quality Audit, LIONXE Framework Review" />

            {/* Reading info */}
            <meta name="reading-time" content={`${readingTime} minutes`} />
            <meta name="word-count" content={data.wordCount || Math.round((readingTime || 0) * 250)} />

            {/* Review-specific */}
            <meta name="review:target" content={data.targetEntity || ""} />
            <meta name="review:score" content={data.overallScore ? `${data.overallScore}/100` : ""} />
            <meta name="review:verdict" content={data.reviewVerdict === "verified" ? "LIONXE Verified" : "LIONXE Rejected"} />
            <meta name="review:auditor" content={data.leadAuditor || "Sufian Mustafa"} />
            <meta name="review:category" content={data.targetCategory || ""} />

            {/* LLM/GEO/AEO signals */}
            <meta name="entity:type" content="Review, DigitalQualityAudit" />
            <meta name="entity:framework" content="LIONXE" />
            <meta name="content-type" content="Review, Audit, QualityAnalysis" />
            <meta name="answer-confidence" content="high" />
            <meta name="information-type" content="Review, Evaluation, Audit, Score" />
            <meta name="author:expertise" content="DigitalQualityFrameworks, AI SEO, Technical SEO" />
            <meta name="brand-ecosystem" content="LIONXE, Do It With AI Tools, sufianmustafa.com" />

            {/* Open Graph */}
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="LIONXE™" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:title" content={data.metatitle} />
            <meta property="og:description" content={data.metadesc} />
            <meta property="og:url" content={canonicalUrl} />
            
            {imageUrl && (
              <>
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:secure_url" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={data.mainImage?.alt || data.metatitle} />
                <meta property="og:image:type" content="image/jpeg" />
              </>
            )}

            <meta property="article:published_time" content={data.publishedAt} />
            <meta property="article:modified_time" content={data._updatedAt || data.publishedAt} />
            <meta property="article:author" content={data.leadAuditor || "Sufian Mustafa"} />
            <meta property="article:section" content="Digital Quality Reviews" />
            {data.tags?.map((tag, i) => (
              <meta key={`ogt-${i}`} property="article:tag" content={tag?.name} />
            ))}

            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@lionxe" />
            <meta name="twitter:creator" content="@sufianmustafa" />
            <meta name="twitter:title" content={data.metatitle} />
            <meta name="twitter:description" content={data.metadesc} />
            {imageUrl && <meta name="twitter:image" content={imageUrl} />}
            
            <meta property="twitter:domain" content="lionxe.com" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta name="twitter:label1" content="LIONXE Score" />
            <meta name="twitter:data1" content={data.overallScore ? `${data.overallScore}/100` : "–"} />
            <meta name="twitter:label2" content="Audited by" />
            <meta name="twitter:data2" content={data.leadAuditor || "Sufian Mustafa"} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />
            <link rel="alternate" type="application/rss+xml" title="LIONXE™ Reviews RSS Feed" href={`${baseUrl}/rss.xml`} />
          </>
        )}

        {/* Theme + performance configs */}
        <meta name="theme-color" content="#004DFD" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </Head>

      {/* ──────────────────────────────────────────────────────────
          JSON-LD SCHEMA INJECTION STRATEGY
          strategy="beforeInteractive" for critical identities
          strategy="afterInteractive" for content-specific properties
          ────────────────────────────────────────────────────────── */}
      {/* 1. WebSite — site-level identity */}
      {websiteSchema && <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={websiteSchema} strategy="beforeInteractive" />}
      
      {/* 2. Organization — LIONXE brand entity */}
      {organizationSchema && <Script id="schema-organization" type="application/ld+json" dangerouslySetInnerHTML={organizationSchema} strategy="beforeInteractive" />}
      
      {/* 3. WebPage — this specific review page */}
      {webPageSchema && <Script id="schema-webpage" type="application/ld+json" dangerouslySetInnerHTML={webPageSchema} strategy="beforeInteractive" />}
      
      {/* 4. Review — core review schema containing ratings score */}
      {reviewSchema && <Script id="schema-review" type="application/ld+json" dangerouslySetInnerHTML={reviewSchema} strategy="afterInteractive" />}
      
      {/* 5. BreadcrumbList */}
      {breadcrumbSchema && <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema} strategy="afterInteractive" />}
      
      {/* 6. LIONXE Pillar Ratings (Custom ItemList mapping) */}
      {pillarRatingSchema && <Script id="schema-pillar-ratings" type="application/ld+json" dangerouslySetInnerHTML={pillarRatingSchema} strategy="afterInteractive" />}
      
      {/* 7. FAQPage — active when the review carries built-in FAQs */}
      {faqSchema && <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={faqSchema} strategy="afterInteractive" />}
      
      {/* 8. Speakable — optimizes content parsed by voice search systems */}
      {speakableSchema && <Script id="schema-speakable" type="application/ld+json" dangerouslySetInnerHTML={speakableSchema} strategy="afterInteractive" />}
    </>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// SCHEMA GENERATION FUNCTIONS
// ═════════════════════════════════════════════════════════════════════════════

// 1. Core Review schema engine
function genReviewSchema(data, canonicalUrl, imageUrl, baseUrl) {
  if (!data) return null;
  const itemReviewedType = getItemReviewedType(data.targetCategory);
  const verdict = data.reviewVerdict === "verified" ? "LIONXE Verified" : "LIONXE Rejected";
  
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": `${canonicalUrl}#review`,
      "name": data.schematitle || data.metatitle || data.title,
      "description": data.schemadesc || data.metadesc || data.overview || "",
      "url": canonicalUrl,
      "datePublished": data.publishedAt,
      "dateModified": data._updatedAt || data.publishedAt,
      "author": {
        "@type": "Person",
        "@id": `${baseUrl}/#sufian-mustafa`,
        "name": data.leadAuditor || "Sufian Mustafa",
        "url": "https://sufianmustafa.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "LIONXE™",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`,
        },
      },
      // Target dynamic parsing mapping directly into schema structures
      "itemReviewed": {
        "@type": itemReviewedType,
        "name": data.targetEntity || "",
        ...(data.targetDomain && { "url": data.targetDomain }),
        "description": `${data.targetEntity} — evaluated by LIONXE™ across the 4-pillar quality framework.`,
      },
      // Metric framework conversion maps inside schema loops
      "reviewRating": {
        "@type": "Rating",
        "@id": `${canonicalUrl}#rating`,
        "ratingValue": data.overallScore || 0,
        "bestRating": 100,
        "worstRating": 0,
        "ratingExplanation": `${verdict}. Evaluated across L(Logic), IO(Internal Optimization), N(Non-Negotiable Integrity), and XE(eXceptional Excellence).`,
      },
      "reviewBody": data.executiveSummary ? data.executiveSummary.substring(0, 600) : data.overview || "",
      "keywords": [
        data.targetEntity,
        "LIONXE review",
        "digital quality audit",
        "LIONXE framework",
        ...(data.tags?.map((t) => t?.name) || []),
      ].filter(Boolean).join(","),
      "inLanguage": "en-US",
      "isPartOf": { "@id": `${baseUrl}/#website` },
      "image": imageUrl ? {
        "@type": "ImageObject",
        "url": imageUrl,
        "width": 1200,
        "height": 630,
        "caption": data.mainImage?.alt || data.metatitle,
      } : undefined,
      "potentialAction": [
        { "@type": "ReadAction", "target": [canonicalUrl] },
        { "@type": "ShareAction", "target": [canonicalUrl] },
      ],
    }),
  };
}

// 2. Specific Page node tracker mapping
function genWebPageSchema(data, canonicalUrl, imageUrl, baseUrl) {
  if (!data) return null;
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonicalUrl,
      "url": canonicalUrl,
      "name": data.metatitle || data.title,
      "description": data.metadesc || data.overview,
      "inLanguage": "en-US",
      "isPartOf": { "@id": `${baseUrl}/#website` },
      "datePublished": data.publishedAt,
      "dateModified": data._updatedAt || data.publishedAt,
      "author": {
        "@type": "Person",
        "name": data.leadAuditor || "Sufian Mustafa",
      },
      "publisher": {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
      },
      "breadcrumb": { "@id": `${canonicalUrl}#breadcrumb` },
      "primaryImageOfPage": imageUrl ? { "@type": "ImageObject", "url": imageUrl } : undefined,
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": "main",
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".overview", ".executive-summary"],
      },
    }),
  };
}

// 3. Dynamic multi-layer Breadcrumb structural logic tracking
function genBreadcrumbSchema(data, canonicalUrl, baseUrl) {
  if (!data) return null;
  const categoryMap = {
    articles: { name: "Article Reviews", path: "/reviews/articles" },
    tools: { name: "Tools & Apps Reviews", path: "/reviews/tools" },
    websites: { name: "Website Reviews", path: "/reviews/websites" },
    "ux-ui": { name: "UX/UI Reviews", path: "/reviews/ux-ui" },
    seo: { name: "SEO Reviews", path: "/reviews/seo" },
    marketing: { name: "Marketing Strategy Reviews", path: "/reviews/marketing" },
  };
  const cat = categoryMap[data.targetCategory] || { name: "Reviews", path: "/reviews" };
  
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: { "@type": "WebPage", "@id": `${baseUrl}/`, "url": `${baseUrl}/` },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Reviews",
          item: { "@type": "WebPage", "@id": `${baseUrl}/reviews`, "url": `${baseUrl}/reviews` },
        },
        {
          "@type": "ListItem",
          position: 3,
          name: cat.name,
          item: { "@type": "WebPage", "@id": `${baseUrl}${cat.path}`, "url": `${baseUrl}${cat.path}` },
        },
        {
          "@type": "ListItem",
          position: 4,
          name: data.schematitle || data.metatitle || data.title,
          item: { "@type": "WebPage", "@id": canonicalUrl, "url": canonicalUrl },
        },
      ],
    }),
  };
}

// 4. Schema payload validation parsing for explicit target FAQs
function genFaqSchema(data, canonicalUrl) {
  if (!data?.faqs?.length) return null;
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      "mainEntity": data.faqs.map((faq, i) => ({
        "@type": "Question",
        "@id": `${canonicalUrl}#faq-${i + 1}`,
        "name": faq.question,
        "answerCount": 1,
        "acceptedAnswer": {
          "@type": "Answer",
          "@id": `${canonicalUrl}#faq-answer-${i + 1}`,
          "text": faq.answer,
          "dateCreated": data.publishedAt,
          "url": `${canonicalUrl}#faq-${i + 1}`,
          "author": {
            "@type": "Person",
            "name": data.leadAuditor || "Sufian Mustafa",
          },
        },
      })),
    }),
  };
}

// 5. Global platform structure identifier mapping definitions
function genWebsiteSchema(baseUrl) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "name": "LIONXE™",
      "alternateName": ["LIONXE", "LIONXEFramework", "lionxe.com"],
      "url": baseUrl,
      "description": "LIONXE™ is an uncompromising digital quality audit framework evaluating digital assets through four pillars: Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Excellence.",
      "inLanguage": "en-US",
      "publisher": { "@id": `${baseUrl}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    }),
  };
}

// 6. Organization platform entity identification matrix parameters
function genOrganizationSchema(baseUrl) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "LIONXE™",
      "alternateName": ["LIONXE", "LIONXEFramework", "The LIONXE Standard"],
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 600,
        "height": 120,
        "caption": "LIONXE™ Official Logo",
      },
      "description": "LIONXE is a digital quality audit framework evaluating digital assets across four pillars: Logic, Internal Optimization, Non-Negotiable Integrity, and eXceptional Excellence. Built by Sufian Mustafa.",
      "slogan": "The Standard That Actually Means Something",
      "foundingDate": "2024",
      "founder": { "@id": `${baseUrl}/#sufian-mustafa` },
      "sameAs": ["https://sufianmustafa.com", "https://doitwithai.tools"],
    }),
  };
}

// 7. Dynamic evaluation metric mapping structures for 4-Pillar breakdowns
function genPillarRatingSchema(data, canonicalUrl) {
  if (!data?.pillarScores) return null;
  const { logicScore, optimizationScore, integrityScore, excellenceScore } = data.pillarScores || {};
  const pillars = [
    { letter: "L", name: "Logic & Long-Term Thinking", score: logicScore },
    { letter: "IO", name: "Internal Optimization", score: optimizationScore },
    { letter: "N", name: "Non-Negotiable Integrity", score: integrityScore },
    { letter: "XE", name: "eXceptional Excellence", score: excellenceScore },
  ].filter((p) => p.score !== undefined && p.score !== null);

  if (!pillars.length) return null;
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${canonicalUrl}#pillar-ratings`,
      "name": `LIONXE™ Pillar Score Breakdown — ${data.targetEntity}`,
      "description": `Individual pillar scores for ${data.targetEntity} across the LIONXE™ 4-pillar quality framework.`,
      "numberOfItems": pillars.length,
      "itemListElement": pillars.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        "name": `${p.letter} — ${p.name}`,
        "item": {
          "@type": "Rating",
          "name": `${p.letter} Pillar Score`,
          "ratingValue": p.score,
          "bestRating": 25,
          "worstRating": 0,
          "ratingExplanation": `LIONXE ${p.letter} gate: ${p.name}. Score: ${p.score}/25.`,
        },
      })),
    }),
  };
}

// 8. Content node identification for screen reader execution signals
function genSpeakableSchema(canonicalUrl) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "speakable": {
        "@type": "SpeakableSpecification",
        "xpath": ["/html/head/title", "/html/head/meta[@name='description']/@content"],
      },
      "url": canonicalUrl,
    }),
  };
}