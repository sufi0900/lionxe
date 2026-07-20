//here is the AllReviewsAggregated/AllPosts page code .jsx

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useCallback, useMemo } from "react";

import FilterIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import ReusableCachedReviews from "./ReusableCachedAllBlogsGeneral";
import { PageCacheProvider } from '@/React_Query_Caching/CacheProvider';
import { useCachedSearch } from '@/React_Query_Caching/useCachedSearch';
import SearchResults from '@/React_Query_Caching/SearchResults';

export const revalidate = false;
export const dynamic = "force-dynamic";

export default function AllReviewsAggregated({ initialServerData }) {
  
  // Category maps are updated to represent official Audit Evaluation Verdicts
  const categoryDisplayNames = useMemo(() => ({
    "Certified": "Certified",
    "Conditional Pass": "Conditional Pass",
    "Under Review": "Under Review",
    "Structural Rejection": "Rejections"
  }), []);

  const cardsPerPage = 24;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    initialServerData?.totalCount ? Math.ceil(initialServerData.totalCount / cardsPerPage) : 1
  );
  const [totalCount, setTotalCount] = useState(initialServerData?.totalCount || 0);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('publishedAt desc');
  const [showFilters, setShowFilters] = useState(false);

  // Focus search capabilities tightly on single document schema matching fields
  const searchHookOptions = useMemo(() => ({
    documentType: ["lionxeReview"],
    searchFields: ['title', 'targetEntity', 'heroStatement', 'overview'],
    pageSlugPrefix: 'reviews',
    componentName: 'LionxeReviewsPageSearch',
    minSearchLength: 1,
  }), []);

  const searchHook = useCachedSearch(searchHookOptions);

  const handleReviewsDataLoad = useCallback((fetchedCurrentPg, fetchedTotalPgs, fetchedTotalCnt) => {
    setCurrentPage(fetchedCurrentPg);
    setTotalPages(fetchedTotalPgs);
    setTotalCount(fetchedTotalCnt);
  }, []);

  const handleInitiateSearch = useCallback(() => {
    const trimmedText = searchHook.searchText.trim();
    if (trimmedText.length > 0) {
      searchHook.handleSearch();
      setCurrentPage(1);
    } else {
      searchHook.resetSearch();
      setCurrentPage(1);
    }
  }, [searchHook.searchText, searchHook.handleSearch, searchHook.resetSearch]);

  const handleCategoryFilter = useCallback((verdictGroup) => {
    setSelectedCategory(verdictGroup);
    setCurrentPage(1);
    searchHook.resetSearch();
  }, [searchHook]);

  const handleSortChange = useCallback((newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
    searchHook.resetSearch();
  }, [searchHook]);

  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [totalPages]);

  return (
    <PageCacheProvider pageType="reviews" pageId="lionxe-posts">

      <section className="mb-12">
        <div className="rounded-2xl p-6 md:p-8 shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          
          {/* Search Bar Container */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search platforms, core indicators, or audits..."
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent px-6 py-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 shadow-sm"
                value={searchHook.searchText}
                onChange={(e) => searchHook.updateSearchText(e.target.value)}
                onKeyDown={searchHook.handleKeyDown}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleInitiateSearch}
                className="flex items-center justify-center rounded-xl px-6 py-4 font-medium transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
              >
                <SearchIcon className="mr-2 h-5 w-5" />
                Search Audits
              </button>
              {searchHook.isSearchActive && (
                <button
                  onClick={searchHook.resetSearch}
                  className="flex items-center justify-center rounded-xl px-6 py-4 font-medium transition-all duration-200 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                >
                  <ClearIcon className="mr-2 h-5 w-5" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Filter Toggle Mobile Layout */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-300 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FilterIcon />
              {showFilters ? 'Hide Evaluation Filters' : 'Show Evaluation Filters'}
            </button>
          </div>

          {/* Filters Block */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              
              {/* Verdict Categories */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryFilter('all')}
                  disabled={searchHook.isSearchActive}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700 shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300'
                  } ${searchHook.isSearchActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  All Framework Audits
                </button>
                {Object.entries(categoryDisplayNames).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => handleCategoryFilter(key)}
                    disabled={searchHook.isSearchActive}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === key
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700 shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300'
                    } ${searchHook.isSearchActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              {/* Advanced Scoring & Date Sort Dropdowns */}
              <div className="flex items-center gap-3">
                <SortIcon className="text-gray-500 dark:text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  disabled={searchHook.isSearchActive}
                  className={`px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm ${searchHook.isSearchActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option className="bg-white dark:bg-gray-800" value="publishedAt desc">Latest Audits</option>
                  <option className="bg-white dark:bg-gray-800" value="publishedAt asc">Oldest Audits</option>
                  <option className="bg-white dark:bg-gray-800" value="overallScore desc">Highest Architecture Score (0-100)</option>
                  <option className="bg-white dark:bg-gray-800" value="overallScore asc">Lowest Architecture Score (0-100)</option>
                  <option className="bg-white dark:bg-gray-800" value="title asc">Platform A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Quantitative Count Layout */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="text-lg text-gray-600 dark:text-gray-400">
            {searchHook.isSearchActive ? (
              <>Showing <span className="font-semibold text-blue-600 dark:text-blue-400">{searchHook.searchResults.length}</span> audit results</>
            ) : (
              <>Showing <span className="font-semibold text-blue-600 dark:text-blue-400">{Math.min(cardsPerPage, totalCount)}</span> of <span className="font-semibold text-blue-600 dark:text-blue-400">{totalCount}</span> evaluations
                {selectedCategory !== 'all' && (
                  <span className="ml-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    Status: {categoryDisplayNames[selectedCategory]}
                  </span>
                )}
              </>
            )}
          </div>
          <CalendarTodayIcon className="text-gray-400 dark:text-gray-500" />
        </div>
      </div>

      {/* Dynamic Data Grid Engine */}
      {searchHook.isSearchActive ? (
        <SearchResults
          searchResults={searchHook.searchResults}
          isLoading={searchHook.isSearchLoading}
          error={searchHook.searchError}
          isSearchActive={searchHook.isSearchActive}
          searchText={searchHook.searchText}
          pageSlugPrefix={searchHook.pageSlugPrefix}
          showNoResults={searchHook.showNoResults}
          cacheSource={searchHook.cacheSource}
          isStale={searchHook.isStale}
          onResetSearch={searchHook.resetSearch}
          onRefreshSearch={searchHook.refreshSearch}
          className="mb-16"
        />
      ) : (
        <ReusableCachedReviews
          currentPage={currentPage}
          limit={cardsPerPage}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          onDataLoad={handleReviewsDataLoad}
          initialPageData={currentPage === 1 ? initialServerData?.firstPageBlogs : undefined}
          initialTotalCount={initialServerData?.totalCount}
        />
      )}

      {/* Pagination Module */}
      {!searchHook.isSearchActive && (
        <div className="flex justify-center mt-8 sm:mt-12">
          <nav className="flex items-center space-x-1 rounded-lg p-1 bg-transparent"> 
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 min-w-[80px] sm:min-w-[100px] ${
                currentPage === 1
                  ? 'bg-gray-100 dark:bg-gray-900 text-gray-400 cursor-not-allowed'
                  : 'bg-transparent text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-300'
              }`}
            >
              <span>Prev</span>
            </button>

            <div className="flex items-center mx-3 sm:mx-4">
              <span className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm sm:text-base shadow-md min-w-[50px] text-center">
                {currentPage}
              </span>
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 min-w-[80px] sm:min-w-[100px] ${
                currentPage >= totalPages
                  ? 'bg-gray-100 dark:bg-gray-900 text-gray-400 cursor-not-allowed'
                  : 'bg-transparent text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-300'
              }`}
            >
              <span>Next</span>
            </button>
          </nav>
        </div>
      )}
    </PageCacheProvider>
  );
}