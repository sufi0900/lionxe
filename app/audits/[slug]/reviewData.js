/**
 * reviewData.js — Data Fetching for LIONXE Reviews
 *
 * Mirrors the existing articleData.js pattern from doitwithai.tools
 * but fetches from the `lionxeReview` Sanity schema with all
 * review-specific fields (pillars, verdict, rectification, etc.)
 */

import { client } from "@/sanity/lib/client";
import { redisHelpers } from "@/app/lib/redis";
import { urlForImage } from "@/sanity/lib/image";

// ─────────────────────────────────────────────────────────────────────────────
// FETCH ALL SLUGS (for generateStaticParams)
// ─────────────────────────────────────────────────────────────────────────────

export async function getAllReviewSlugs() {
  const query = `*[_type == "lionxeReview"]{ "slug": slug.current }`;
  try {
    const slugs = await client.fetch(query);
    console.log(`[SanityFetch] Fetched ${slugs.length} slugs for lionxeReview.`);
    return slugs;
  } catch (error) {
    console.error("Failed to fetch LIONXE review slugs:", error.message);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// FETCH SINGLE REVIEW DATA
// ─────────────────────────────────────────────────────────────────────────────

export async function getReviewData(slug) {
  const cacheKey = `lionxe-review:${slug}`;
  const startTime = Date.now();
  let data = null;

  // ── Try Redis cache first ──
  try {
    const cachedData = await redisHelpers.get(cacheKey);
    if (cachedData) {
      console.log(`[Redis Cache Hit] for ${cacheKey} in ${Date.now() - startTime}ms`);
      return { ...cachedData, __source: "server-redis" };
    }
  } catch (redisError) {
    console.error(`Redis error for ${cacheKey}:`, redisError.message);
  }

  // ── Fetch from Sanity ──
  console.log(`[SanityFetch] for ${cacheKey} starting...`);

  const query = `*[_type == "lionxeReview" && slug.current == "${slug}"][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,

    // ── Core Review Fields ──
    title,
    slug,
    categoryTag,
    categorySubTag,
    targetEntity,
    targetDomain,
    leadAuditor,
    publishedAt,
    heroStatement,
    verdict,
    overallScore,
    executiveSummary,

    // ── Pillars ──
    pillars[]{
      pillarKey,
      title,
      subtitle,
      score,
      status,
      governingLaw,
      indicatorsAudited,
      analysisBody
    },

    // ── Rectification ──
    rectificationSteps[]{
      title,
      body
    },

    // ── Comprehensive Blog ──
    comprehensiveBlogTitle,
    content[]{
      ...,
      _type == "image" => {
        asset->{ _id, url },
        alt,
        caption,
        imageDescription[]{ ... }
      },
      _type == "video" => {
        asset->{ _id, url },
        alt,
        caption
      },
    },

    // ── Display & Image ──
    mainImage{
      asset->{ _id, url },
      alt
    },
    displaySettings,

    // ── SEO & Meta ──
    metatitle,
    metadesc,
    schematitle,
    schemadesc,
    overview,

    // ── Others ──
    tags[]->{ name, slug },
    tableOfContents[],
    faqs[]{ question, answer },

    // ── Computed Fields ──
    "wordCount": length(pt::text(content)),
    "estimatedReadingTime": round(length(pt::text(content)) / 250),
    "headings": content[_type == "block" && style in ["h1","h2","h3","h4","h5","h6"]]{
      "text": pt::text(@),
      "level": style,
      "anchor": lower(pt::text(@))
    },
  }`;

  try {
    data = await client.fetch(query, {}, { next: { tags: ["lionxeReview", slug] } });
    console.log(`[SanityFetch] for ${cacheKey} completed in ${Date.now() - startTime}ms`);

    if (data) {
      // Cache in Redis for 24 hours
      try {
        await redisHelpers.set(cacheKey, data, { ex: 86400 });
        console.log(`[Redis Cache Set] for ${cacheKey}`);
      } catch (redisSetError) {
        console.error(`Redis set error for ${cacheKey}:`, redisSetError.message);
      }
      return { ...data, __source: "server-network" };
    }
    return null;
  } catch (error) {
    console.error(`Server-side fetch for review slug "${slug}" failed:`, error.message);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERATE PAGE METADATA
// ─────────────────────────────────────────────────────────────────────────────

export function generateReviewMetadata(data, params) {
  if (!data) {
    return {
      title: "Loading Review | LIONXE Framework",
      description: "The review content is currently loading.",
      robots: { index: false, follow: false },
    };
  }

  const imageUrl = data.mainImage ? urlForImage(data.mainImage).url() : null;
  const canonicalUrl = `https://www.lionxeframework.com/audits/${params.slug}`;
  const verdictText = data.verdict ? ` — Verdict: ${data.verdict}` : "";

  return {
    title: data.metatitle || `${data.title} | LIONXE Audit`,
    description:
      data.metadesc ||
      data.overview ||
      `LIONXE® Architectural Audit of ${data.targetEntity}${verdictText}. Score: ${data.overallScore}/100.`,
    keywords: data.tags?.map((tag) => tag?.name).join(",") || "",
    authors: [
      {
        name: data.leadAuditor || "Sufian Mustafa",
        url: "https://www.sufianmustafa.com",
      },
    ],
    creator: data.leadAuditor || "Sufian Mustafa",
    publisher: "LIONXE Framework",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: data.metatitle || data.title,
      description: data.metadesc || data.overview || "",
      url: canonicalUrl,
      siteName: "LIONXE Framework",
      type: "article",
      publishedTime: data.publishedAt,
      modifiedTime: data._updatedAt,
      authors: [data.leadAuditor || "Sufian Mustafa"],
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: data.mainImage?.alt || data.title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: data.metatitle || data.title,
      description: data.metadesc || data.overview || "",
      ...(imageUrl && { images: [imageUrl] }),
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  };
}