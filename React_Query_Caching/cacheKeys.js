// React_Query_Caching/cacheKeys.js

export const CACHE_KEYS = {
  // Homepage Keys for LIONXE
  HOMEPAGE: {
    HERO_CORE: 'homepage_lionxe_hero',
    TRENDING_FRAMEWORKS: 'homepage_trending_frameworks',
    FEATURED_REVIEWS: 'homepage_featured_reviews',
    RECENT_INSIGHTS: 'homepage_recent_insights',
    ECOSYSTEM_MATRIX: 'homepage_ecosystem_matrix',
  },

  // Page Specific Keys
  PAGE: {
    FEATURE_POST: (pageType) => `page_${pageType}_feature_post`,
    // Specific for single-documentType pages (e.g., lionxeReview)
    ALL_BLOGS_TOTAL: (documentType) => `page_${documentType}_all_blogs_total`,
    ALL_BLOGS_PAGINATED: (documentType, pageNum) => `page_${documentType}_all_blogs_page_${pageNum}`,

    // Keys specifically for mixed timelines/listings
    MIXED_BLOGS_TOTAL_COUNT: (category, sortBy) => `page_mixed_blogs_total_cat_${category}_sort_${sortBy}`,
    MIXED_BLOGS_PAGINATED: (page, category, sortBy) => `page_mixed_blogs_p${page}_cat_${category}_sort_${sortBy}`,
    BLOG_LISTING_INITIAL: (schemaType) => `page:${schemaType}:listing:initial`,

    // Search results definition
    SEARCH_RESULTS: (documentTypeOrScope, searchHash) => `page_${documentTypeOrScope}_search_${searchHash}`,

    // Key for all documents fetched for client-side offline search
    ALL_DOCS_FOR_OFFLINE_SEARCH: (typeIdentifier) => `page_all_docs_offline_${typeIdentifier}`,
  },

  // Content/Review Document Keys
  ARTICLE: {
    CONTENT: (slug, type) => `article_content_${type}_${slug}`, 
    RELATED_POSTS: (articleId, articleType) => `article_related_posts_${articleType}_${articleId}`,
  },

  // Global Keys
  GLOBAL: {
    ALL_POSTS: (page, category, sort) => `global_all_posts_${page}_${category}_${sort}`,
  },

  // Schema-specific rules (Cleaned for Lionxe context)
  SCHEMA: {
    LIONXE_REVIEW: { 
      LIST: (page) => `lionxereview_list_${page}`, 
      FEATURE: 'lionxereview_feature', 
      TRENDING: 'lionxereview_trending' 
    }
  }
};

export const CACHE_CONFIG = {
  DEFAULT: {
    staleTime: 5 * 60 * 1000, // 5 minutes
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    enableOffline: true
  },

  HOMEPAGE: {
    staleTime: 5 * 60 * 1000, 
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    enableOffline: true,
  },

  PAGE_FEATURE_POST: {
    staleTime: 5 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    enableOffline: true,
  },

  PAGE_ALL_BLOGS_TOTAL: {
    staleTime: 5 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    enableOffline: true,
  },

  PAGE_ALL_BLOGS_PAGINATED: {
    staleTime: 5 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    enableOffline: true,
  },

  PAGE_SEARCH_RESULTS: {
    staleTime: 5 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    enableOffline: true,
  },

  ARTICLE_CONTENT: { 
    staleTime: 30 * 60 * 1000, 
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    enableOffline: true 
  },
  
  RELATED_CONTENT: { 
    staleTime: 30 * 60 * 1000, 
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    enableOffline: true 
  },

  PAGE_ALL_DOCS_FOR_OFFLINE_SEARCH_CONFIG: {
    staleTime: 60 * 60 * 1000, // 1 hour
    maxAge: 7 * 24 * 60 * 60 * 1000,
    enableOffline: true,
  },
};

// Helper function to resolve config options safely
export const getCacheConfig = (cacheKey) => {
  if (typeof cacheKey !== 'string' || !cacheKey) {
    return CACHE_CONFIG.DEFAULT;
  }

  if (cacheKey.startsWith('page_') && cacheKey.includes('_search_')) {
    return CACHE_CONFIG.PAGE_SEARCH_RESULTS;
  }

  if (cacheKey.startsWith('page_all_docs_offline_')) {
    return CACHE_CONFIG.PAGE_ALL_DOCS_FOR_OFFLINE_SEARCH_CONFIG;
  }

  if (cacheKey.includes('_all_blogs_total') && cacheKey.startsWith('page_')) {
    return CACHE_CONFIG.PAGE_ALL_BLOGS_TOTAL;
  }
  
  if (cacheKey.includes('_all_blogs_page_') && cacheKey.startsWith('page_')) {
    return CACHE_CONFIG.PAGE_ALL_BLOGS_PAGINATED;
  }

  if (cacheKey.includes('_feature_post') && cacheKey.startsWith('page_')) { 
    return CACHE_CONFIG.PAGE_FEATURE_POST; 
  }

  if (cacheKey.startsWith('homepage_')) { return CACHE_CONFIG.HOMEPAGE; }

  // Target any custom string matching 'article_content_lionxeReview'
  if (cacheKey.startsWith('article_content_') || (cacheKey.startsWith('article_') && !cacheKey.includes('related'))) { 
    return CACHE_CONFIG.ARTICLE_CONTENT; 
  }
  
  if (cacheKey.includes('related_posts_') || cacheKey.startsWith('article_related_posts_')) { 
    return CACHE_CONFIG.RELATED_CONTENT; 
  }

  return CACHE_CONFIG.DEFAULT;
};

// Invalidation patterns
export const INVALIDATION_PATTERNS = {
  HOMEPAGE_ALL: 'homepage_.*',
  SCHEMA_ALL: (schemaType) => `.*_${schemaType}_.*`,
  PAGINATION: (schemaType) => `page_${schemaType}_all_blogs_.*`,
  ARTICLE_ALL: (slug, type) => `(article_content_${type}_${slug}|article_related_posts_${type}_.*)`,
  SEARCH_ALL: 'page_.*_search_.*',
  ALL_DOCS_FOR_OFFLINE_SEARCH_ALL: 'page_all_docs_offline_.*',
};