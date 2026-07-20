// app/reviews/page.jsx
import React from 'react';
import StaticBlogsPageShell from '../blogs/StaticBlogsPageShell'; // Adjust path if shell is renamed
// import AllReviewsAggregated from './AllPosts';
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { redisHelpers } from '@/app/lib/redis';

export const revalidate = 3600;
export const dynamic = "force-dynamic";

function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://doitwithai.tools';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

function generateOGImageURL(params) {
  const baseURL = `${getBaseUrl()}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

const INITIAL_REVIEWS_LIMIT = 5;

// --- Server-side data fetching function for LIONXE Reviews ---
async function getLionxeReviewsInitialData() {
  const cacheKey = 'reviewList:lionxe-reviews:main';
  const startTime = Date.now();

  try {
    const cachedData = await redisHelpers.get(cacheKey);
    if (cachedData) {
      console.log(`[Redis Cache Hit] for ${cacheKey} in ${Date.now() - startTime}ms`);
      return { ...cachedData, __source: 'server-redis' };
    }
  } catch (redisError) {
    console.error(`Redis error for ${cacheKey}:`, redisError.message);
  }

  console.log(`[Sanity Fetch] for ${cacheKey} starting...`);

  // Target only lionxeReview and extract strategic score/verdict fields
 const firstPageReviewsQuery = `*[_type == "lionxeReview"] | order(publishedAt desc)[0...${INITIAL_REVIEWS_LIMIT + 1}]{
  _id,
  _type,
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
  mainImage,
  overview,
  pillars[] {
    pillarKey,
    title,
    score,
    status
  }
}`;

  const totalCountQuery = `count(*[_type == "lionxeReview"])`;

  try {
    const [firstPageBlogs, totalCount] = await Promise.all([
      client.fetch(firstPageReviewsQuery, {}, { next: { tags: ["lionxeReview"] } }),
      client.fetch(totalCountQuery, {}, { next: { tags: ["lionxeReview"] } })
    ]);

    const data = {
      firstPageBlogs,
      totalCount,
      timestamp: Date.now()
    };

    console.log(`[Sanity Fetch] for ${cacheKey} completed in ${Date.now() - startTime}ms`);

    if (data.firstPageBlogs?.length > 0) {
      try {
        await redisHelpers.set(cacheKey, data, { ex: 3600 });
        console.log(`[Redis Cache Set] for ${cacheKey}`);
      } catch (redisSetError) {
        console.error(`Redis set error for ${cacheKey}:`, redisSetError.message);
      }
    }
    return { ...data, __source: 'server-network' };
  } catch (error) {
    console.error(`Server-side fetch for LIONXE Reviews page failed:`, error.message);
    return null;
  }
}

export const metadata = {
  title: "LIONXE® Architectural Audits & Platform Reviews | Do It With AI Tools",
  description: "Deep dive technical reviews and core pillar diagnostics of digital assets. Explore comprehensive architectural evaluations based on logic, integrity, and operational distinction.",
  author: "Sufian Mustafa",
  keywords: "LIONXE audit, architectural evaluation, platform reviews, SEO infrastructure audit, logic and longevity, digital asset integrity, technical framework reviews",
  
  openGraph: {
    title: "LIONXE® Architectural Audits & Platform Reviews",
    description: "Deep dive technical reviews and core pillar diagnostics of digital assets evaluated by Sufian Mustafa.",
    type: "website",
    url: `${getBaseUrl()}/reviews`,
    siteName: "doitwithai.tools",
    images: [{
      url: generateOGImageURL({
        title: 'LIONXE Architectural Auditing Hub',
        category: 'Platform Audits',
        ctaText: 'Explore Framework Reviews',
        features: '4 Pillars Analysis,Blueprint Recovery,Score Tracking',
        bgColor: 'indigo',
      }),
      width: 1200,
      height: 630,
      alt: "LIONXE Architectural Audit Platform Hub"
    }],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@doitwithai",
    creator: "@doitwithai",
    domain: "doitwithai.tools",
    url: `${getBaseUrl()}/reviews`,
    title: "LIONXE® Architectural Audits & Platform Reviews",
    description: "Deep dive technical reviews and core pillar diagnostics of digital assets.",
    image: generateOGImageURL({
      title: "LIONXE® Architectural Auditing Framework Hub",
      ctaText: "View Audits",
      features: "Logic, Optimization, Integrity, Distinction",
    }),
  },

  alternates: {
    canonical: `${getBaseUrl()}/reviews`,
  },
};

export default async function ReviewsPage() {
  const initialServerData = await getLionxeReviewsInitialData();

  function breadcrumbSchema() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${getBaseUrl()}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Reviews",
            "item": `${getBaseUrl()}/reviews`
          }
        ]
      })
    };
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema()}
      />
      
      <StaticBlogsPageShell initialServerData={initialServerData} children={undefined}>
        {/* <AllReviewsAggregated
          initialServerData={initialServerData}
        /> */}
      </StaticBlogsPageShell>
    </>
  );
}