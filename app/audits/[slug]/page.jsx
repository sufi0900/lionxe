/**
 * app/audits/[slug]/page.jsx — LIONXE Audit Review Page
 * Server component — fetches review data, generates metadata,
 * renders full SEO wrapper + microdata + client ReviewChildComp.
 */

import {
  getAllReviewSlugs,
  getReviewData,
  generateReviewMetadata,
} from "./reviewData";

import SeoAndSchemaWrapper from "./SeoAndSchemaWrapper";
import ReviewMicrodata     from "./ReviewMicrodata";
// import ReviewChildComp     from "./ReviewChildComp";
import { PageCacheProvider } from "@/React_Query_Caching/CacheProvider";

// ── Revalidation ─────────────────────────────────────────────────────────────
export const revalidate = 7200; // 2 hours

// ── Static Params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = await getAllReviewSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://lionxe.com';
  }
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
}

// ── Data Fetching ─────────────────────────────────────────────────────────────
async function getData(slug) {
  return getReviewData(slug);
}

// ── Metadata (Next.js App Router) ─────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return generateReviewMetadata(data, params);
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default async function AuditReviewPage({ params }) {
  const data = await getData(params.slug);
  const baseUrl = getBaseUrl(); // Dynamically calculated securely on the server

  return (
    <>
      {/* 1. Full SEO: meta tags + 8 JSON-LD schemas (Passing baseUrl down) */}
      <SeoAndSchemaWrapper data={data} params={params} baseUrl={baseUrl} />

      {/* 2. Page content with cache layer */}
      <PageCacheProvider
        pageType={data?._type || "lionxeReview"}
        pageId={params.slug}
      >
        {/* 3. Main content area with Review microdata */}
        <main
          role="main"
          itemScope
          itemType="https://schema.org/Review"
        >
          {/* Inline microdata properties (hidden from visual render) */}
          <ReviewMicrodata data={data} />

          {/* Client component that renders the actual review UI */}
          {/* <ReviewChildComp serverData={data} params={params} /> */}
        </main>
      </PageCacheProvider>
    </>
  );
}