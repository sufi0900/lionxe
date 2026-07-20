//here is ReusableCachedReviews/ReusableCachedAllBlogsGeneral .jsx code
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import ReviewCard from "@/components/Card/Page"; // Points to your updated review card file
import { usePageCache } from '@/React_Query_Caching/usePageCache';
import { useUnifiedCache } from '@/React_Query_Caching/useUnifiedCache';
 
const ReusableCachedReviews = ({
  currentPage = 1,
  limit = 24,
  selectedCategory = 'all', 
  sortBy = 'publishedAt desc',
  onDataLoad,
  initialPageData = null,
  initialTotalCount = null,
}) => {
  const [paginationStaleWarning, setPaginationStaleWarning] = useState(false);
  const [filterChangeDetected, setFilterChangeDetected] = useState(false);
  const [prevSelectedCategory, setPrevSelectedCategory] = useState(selectedCategory);
  const [prevSortBy, setPrevSortBy] = useState(sortBy);
 
  useEffect(() => {
    if (selectedCategory !== prevSelectedCategory || sortBy !== prevSortBy) {
      setFilterChangeDetected(true);
      setPrevSelectedCategory(selectedCategory);
      setPrevSortBy(sortBy);
    }
  }, [selectedCategory, prevSelectedCategory, sortBy, prevSortBy]);
 
  const start = useMemo(() => (currentPage - 1) * limit, [currentPage, limit]);
 
  const getFilterGroqString = useCallback((verdictFilter) => {
    return verdictFilter === 'all'
      ? `_type=="lionxeReview"`
      : `_type=="lionxeReview" && verdict=="${verdictFilter}"`;
  }, []);
 
  // FIX: Swapped out individual score fields for the core "pillars" array layout inside the query projection
  const pageQuery = useMemo(() => {
    
return `*[${getFilterGroqString(selectedCategory)}]
  | order(${sortBy}) {
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
      score,
      status,
      title
    }
  }[${start}...${start + limit}]`;
  }, [getFilterGroqString, selectedCategory, sortBy, start, limit]);
 
  const totalCountQuery = useMemo(() => {
    return `count(*[${getFilterGroqString(selectedCategory)}])`;
  }, [getFilterGroqString, selectedCategory]);
 
  const reviewsGroup = useMemo(() => 'lionxe-reviews-content-group', []);
 
  const pageCacheKey = useMemo(() => {
    return `page:lionxe-reviews:p${currentPage}:${selectedCategory}:${sortBy.replace(/\s+/g, '-')}`;
  }, [currentPage, selectedCategory, sortBy]);
 
  const totalCountCacheKey = useMemo(() => {
    return `total:lionxe-reviews:${selectedCategory}:${sortBy.replace(/\s+/g, '-')}`;
  }, [selectedCategory, sortBy]);
 
  const stablePageOptions = useMemo(
    () => ({
      componentName: `LionxeReviewsPage_${currentPage}_${selectedCategory}_${sortBy}`,
      enableOffline: true,
      group: reviewsGroup,
      initialData: currentPage === 1 && selectedCategory === 'all' ? initialPageData : null,
      schemaType: ["lionxeReview"],
    }),
    [currentPage, selectedCategory, sortBy, reviewsGroup, initialPageData]
  );
 
  const stableTotalOptions = useMemo(
    () => ({
      componentName: `LionxeReviewsTotal_${selectedCategory}_${sortBy}`,
      enableOffline: true,
      group: reviewsGroup,
      initialData: selectedCategory === 'all' ? initialTotalCount : null,
      schemaType: ["lionxeReview"],
    }),
    [selectedCategory, sortBy, reviewsGroup, initialTotalCount]
  );
 
  const {
    data: postsData,
    isLoading: isPostsLoading,
    error: postsError,
    refresh: refreshPosts,
    isStale: isPostsStale,
  } = useUnifiedCache(pageCacheKey, pageQuery, {}, stablePageOptions);
 
  const {
    data: totalData,
    isLoading: isTotalLoading,
    error: totalError,
    refresh: refreshTotal,
    isStale: isTotalStale,
  } = useUnifiedCache(totalCountCacheKey, totalCountQuery, {}, stableTotalOptions);
 
  usePageCache(pageCacheKey, refreshPosts, pageQuery, `LionxeReviewsPage${currentPage}(${selectedCategory})`);
  usePageCache(totalCountCacheKey, refreshTotal, totalCountQuery, `LionxeReviewsTotalCount(${selectedCategory})`);
 
  const postsToDisplay = postsData || [];
  const isLoading = isPostsLoading || isTotalLoading;
  const totalCount = typeof totalData === 'number' ? totalData : 0;
  const totalPages = Math.ceil(totalCount / limit);
 
  useEffect(() => {
    if (isPostsStale || isTotalStale) {
      setPaginationStaleWarning(true);
      if (typeof window !== 'undefined' && window.navigator.onLine) {
        refreshPosts(false);
        refreshTotal(false);
      }
    } else if ((postsData && !isPostsStale) && (totalData !== undefined && !isTotalStale) && paginationStaleWarning) {
      setPaginationStaleWarning(false);
    }
  }, [isPostsStale, isTotalStale, postsData, totalData, paginationStaleWarning, refreshPosts, refreshTotal]);
 
  useEffect(() => {
    if (!isLoading && filterChangeDetected) {
      setFilterChangeDetected(false);
    }
  }, [isLoading, filterChangeDetected]);
 
  useEffect(() => {
    if (onDataLoad && postsData !== null && typeof totalData === 'number' && !isLoading) {
      onDataLoad(currentPage, totalPages, totalCount);
    }
  }, [currentPage, totalPages, totalCount, onDataLoad, postsData, totalData, isLoading]);
 
  const hasErrorAndNoData = (postsError || totalError) && (!postsData || postsData.length === 0);
 
  return (
    <div className="space-y-6">
      {filterChangeDetected && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/20 dark:border-blue-800 text-center text-blue-800 dark:text-blue-200 font-medium">
          Filtering parameters updating...
        </div>
      )}
 
      {paginationStaleWarning && !filterChangeDetected && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 dark:bg-yellow-900/20 dark:border-yellow-800 text-center text-yellow-800 dark:text-yellow-200 font-medium">
          Synchronizing review engine database live data...
        </div>
      )}
 
      {hasErrorAndNoData ? (
        <div className="text-center py-12 text-red-500">
          Failed to fetch architectural review metrics. Please try checking your connection.
        </div>
      ) : isLoading && !postsToDisplay.length ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="h-80 bg-slate-100 dark:bg-zinc-800 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : !postsToDisplay.length ? (
        <div className="text-center py-12 text-gray-500">
          No architectural audits found matching these target filter sets.
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto px-4 space-y-4">
          {postsToDisplay.map((post) => {
            // FIX MAPPER: Locate the internal pillar items safely from the Sanity nested array structure
            const targetPillars = post.pillars || [];
            const lObj = targetPillars.find(p => p.pillarKey === "L");
            const ioObj = targetPillars.find(p => p.pillarKey === "IO");
            const nObj = targetPillars.find(p => p.pillarKey === "N");
            const xeObj = targetPillars.find(p => p.pillarKey === "XE");

            return (
             <ReviewCard
  key={post._id}
  post={{
    ...post,
    slug: post.slug?.current || post.slug,

    lScore:
      post.pillars?.find((pillar) => pillar.pillarKey === "L")?.score ?? 0,

    ioScore:
      post.pillars?.find((pillar) => pillar.pillarKey === "IO")?.score ?? 0,

    nScore:
      post.pillars?.find((pillar) => pillar.pillarKey === "N")?.score ?? 0,

    xeScore:
      post.pillars?.find((pillar) => pillar.pillarKey === "XE")?.score ?? 0,
  }}
  pageSlugPrefix="audits"
/>
            );
          })}
        </div>
      )}
    </div>
  );
};
 
export default ReusableCachedReviews;