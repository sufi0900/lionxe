/**
 * ReviewChildComp.jsx — Client-Side Review Wrapper
 *
 * Mirrors the ArticleChildComp pattern: handles unified caching,
 * skeleton loading, error states, and passes data to ReviewLayout.
 */

"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";

// Caching System Imports — same hooks as doitwithai.tools
import { useUnifiedCache } from "@/React_Query_Caching/useUnifiedCache";
import { usePageCache } from "@/React_Query_Caching/usePageCache";
import { CACHE_KEYS } from "@/React_Query_Caching/cacheKeys";

// Skeleton for loading state
import SlugSkeleton from "@/components/Blog/Skeleton/SlugSkeleton";

// Dynamic import for ReviewLayout (client-only, heavy component)
const ReviewLayout = dynamic(() => import("./ReviewLayout"), {
  loading: () => null,
  ssr: false,
});

export default function ReviewChildComp({ serverData, params }) {
  const currentSlug = params.slug;
  const schemaType = "lionxeReview";

  const [showSkeleton, setShowSkeleton] = useState(!serverData);
  const [initialMount, setInitialMount] = useState(true);

  // ── Article Content Cache ───────────────────────────────────────────────
  const articleCacheOptions = useMemo(
    () => ({
      componentName: "lionxeReviewContent",
      enableOffline: true,
      initialData: serverData,
      forceRefresh: false,
      staleTime: 2 * 60 * 60 * 1000, // 2 hours
    }),
    [serverData]
  );

  const articleQuery = useMemo(
    () => `*[_type == $schemaType && slug.current == $currentSlug][0]`,
    []
  );

  const articleQueryParams = useMemo(
    () => ({ schemaType, currentSlug }),
    [currentSlug]
  );

  const {
    data: cachedArticleData,
    isLoading: articleLoading,
    error: articleError,
    refresh: refreshArticle,
  } = useUnifiedCache(
    CACHE_KEYS.ARTICLE.CONTENT(currentSlug, schemaType),
    articleQuery,
    articleQueryParams,
    { ...articleCacheOptions, schemaType }
  );

  const finalData = cachedArticleData || serverData;
  const currentPostId = finalData?._id;

  // ── Skeleton Logic ──────────────────────────────────────────────────────
  useEffect(() => {
    if (initialMount) {
      setInitialMount(false);
      if (serverData) setShowSkeleton(false);
      return;
    }

    if (articleLoading && !finalData) {
      setShowSkeleton(true);
    } else if (finalData) {
      const timer = setTimeout(() => setShowSkeleton(false), 50);
      return () => clearTimeout(timer);
    }
  }, [articleLoading, finalData, serverData, initialMount]);

  // ── Related Reviews Cache ───────────────────────────────────────────────
  const relatedOptions = useMemo(
    () => ({
      componentName: "lionxeRelatedReviews",
      enableOffline: true,
      enabled: !!currentPostId && !!finalData,
      staleTime: 2 * 60 * 60 * 1000,
    }),
    [currentPostId, finalData]
  );

  const relatedQuery = useMemo(
    () =>
      `*[_type == $schemaType && _id != $currentPostId] | order(_createdAt desc)[0...3]{
        _id, title, slug, overallScore, verdict, targetEntity,
        mainImage{ asset->{ _id, url }, alt },
        publishedAt, categorySubTag, overview
      }`,
    []
  );

  const relatedQueryParams = useMemo(
    () => ({ schemaType, currentPostId: currentPostId || "unknown" }),
    [currentPostId]
  );

  const {
    data: relatedReviews,
    isLoading: relatedLoading,
    refresh: refreshRelated,
  } = useUnifiedCache(
    CACHE_KEYS.ARTICLE.RELATED_POSTS(currentPostId || "unknown", schemaType),
    relatedQuery,
    relatedQueryParams,
    { ...relatedOptions, schemaType }
  );

  // ── Page Cache Hooks ────────────────────────────────────────────────────
  usePageCache(
    CACHE_KEYS.ARTICLE.CONTENT(currentSlug, schemaType),
    refreshArticle,
    articleQuery,
    "lionxeReviewContent",
    { enabled: true }
  );

  usePageCache(
    CACHE_KEYS.ARTICLE.RELATED_POSTS(currentPostId || "unknown", schemaType),
    refreshRelated,
    relatedQuery,
    "lionxeRelatedReviews",
    { enabled: !!currentPostId && !!finalData }
  );

  const handleRefresh = useCallback(() => refreshArticle(true), [refreshArticle]);

  // ── Error State ─────────────────────────────────────────────────────────
  if (articleError && !finalData) {
    const isOffline =
      !navigator.onLine ||
      articleError.message.includes("offline") ||
      articleError.message.includes("network");

    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#050B1F]">
        <div className="text-center px-4">
          <p className="mb-4 text-lg text-slate-600 dark:text-slate-300">
            {isOffline
              ? "You appear to be offline. Please check your connection."
              : "Failed to load the review. Please try again."}
          </p>
          <button
            onClick={handleRefresh}
            className="rounded-xl bg-[#004DFD] px-6 py-3 text-sm font-bold text-white
              transition-all hover:bg-[#003ed1]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // ── Skeleton State ──────────────────────────────────────────────────────
  if (showSkeleton || (!finalData && articleLoading)) {
    return (
      <div className="relative min-h-screen bg-white dark:bg-[#050B1F]">
        <div className="sticky top-0 z-40 h-16 w-full bg-white shadow-md dark:bg-[#050B1F]" />
        <SlugSkeleton />
      </div>
    );
  }

  // ── No Data State ───────────────────────────────────────────────────────
  if (!finalData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#050B1F]">
        <div className="text-center px-4">
          <p className="text-slate-500 dark:text-slate-400">
            No review data available. Please check the URL or try again.
          </p>
          <button
            onClick={handleRefresh}
            className="mt-4 rounded-xl bg-[#004DFD] px-6 py-3 text-sm font-bold text-white
              transition-all hover:bg-[#003ed1]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // ── Render Review ───────────────────────────────────────────────────────
  return (
    <ReviewLayout
      data={finalData}
      loading={false}
      relatedReviews={relatedReviews || []}
      relatedLoading={relatedLoading}
      onRefresh={handleRefresh}
    />
  );
}