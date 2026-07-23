// app/layout.jsx of LIONXE.com

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { Providers } from "./providers";

import "../styles/index.css";
import "../components/Hero/critical-hero.css";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useOnlineStatus } from "./useOnlineStatus";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { CacheProvider } from "@/React_Query_Caching/CacheProvider";
import Script from "next/script";
import { AlertTriangle, XCircle } from "lucide-react";

// Lazy-loaded global components
const ConditionalGlobalHeader = dynamic(
  () => import("@/components/Header/ConditionalGlobalHeader"),
  { ssr: false }
);

const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});

const Toaster = dynamic(() => import("react-hot-toast").then((m) => m.Toaster), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isOnline = useOnlineStatus();

  const [hydrated, setHydrated] = useState(false);
  const [isOfflineRetrying, setIsOfflineRetrying] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);
  const [showConstructionBar, setShowConstructionBar] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);

  const bannerRef = useRef(null);

  const handleOfflineRetry = () => {
    setIsOfflineRetrying(true);

    setTimeout(() => {
      setIsOfflineRetrying(false);

      if (navigator.onLine) {
        window.location.reload();
      }
    }, 1500);
  };

  // Dynamically calculate exact banner height on render/resize
  useEffect(() => {
    if (!showConstructionBar || !bannerRef.current) {
      setBannerHeight(0);
      return;
    }

    const updateHeight = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(bannerRef.current);

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [showConstructionBar]);

  useEffect(() => {
    setHydrated(true);

    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  useEffect(() => {
    const goOnline = () => {
      console.log("You are back online!");
    };

    const goOffline = () => {
      console.log("You are offline.");
    };

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href?.startsWith("/") || href.startsWith("//")) return;

      const staticPages = [
        "/about",
        "/rubric",
        "/audit",
        "/insights",
        "/faq",
        "/contact",
        "/privacy",
        "/terms",
      ];

      const normalizedHref = href.replace(/\/$/, "");
      const isStaticPage =
        staticPages.includes(href) || staticPages.includes(normalizedHref);

      if (isStaticPage) {
        setTimeout(() => {
          navigator.serviceWorker?.controller?.postMessage({
            type: "PRECACHE_STATIC_PAGE",
            path: href,
            url: window.location.origin + href,
          });
        }, 100);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (hydrated) {
      setRefreshCount((prevCount) => prevCount + 1);
    }
  }, [hydrated]);

  const isSlugPage =
    pathname.startsWith("/ai-tools/") ||
    pathname.startsWith("/ai-seo/") ||
    pathname.startsWith("/ai-code/") ||
    pathname.startsWith("/ai-learn-earn/") ||
    pathname.startsWith("/free-ai-resources/") ||
    (pathname.startsWith("/ai-news/") && pathname.split("/").length === 3);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* Analytics Scripts */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="vodw9TgfqC4efMfrAO9xrw"
          strategy="afterInteractive"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SHX78424XN"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SHX78424XN', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-[#030712] text-[#f7f1df]`}>
        <noscript>JavaScript is required for this app to work properly.</noscript>

        {/* ENHANCED OFFLINE BAR */}
        {!isOnline && (
          <div className="fixed bottom-6 left-1/2 z-[10001] mx-4 w-full max-w-md -translate-x-1/2">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-[2px] shadow-2xl">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-75" />

              <div className="relative rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-4 dark:from-gray-800 dark:to-gray-900">
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 animate-ping rounded-full bg-orange-400 opacity-75" />

                      <div className="relative rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-2">
                        <svg
                          className="h-5 w-5 animate-pulse text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-gray-900 dark:text-gray-100">
                      <p className="text-base font-bold leading-tight">
                        🔌 You're Offline
                      </p>

                      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        {refreshCount} components • Using cached content
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={handleOfflineRetry}
                      disabled={isOfflineRetrying}
                      className={`relative overflow-hidden rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ${
                        isOfflineRetrying
                          ? "cursor-not-allowed bg-gray-400 text-white"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                      }`}
                    >
                      {isOfflineRetrying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                          <svg
                            className="h-4 w-4 animate-spin text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />

                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </div>
                      )}

                      <div
                        className={`flex items-center space-x-2 transition-opacity duration-200 ${
                          isOfflineRetrying ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>

                        <span>Retry</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="mt-3 h-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-full animate-pulse rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
                </div>
              </div>
            </div>
          </div>
        )}

        <Providers>
          {/* LIONXE ™ SYSTEM GOVERNANCE BRANDED ANNOUNCEMENT BAR */}
          {showConstructionBar && (
            <>
              <div
                ref={bannerRef}
                id="lionxe-top-announcement-bar"
                className="fixed top-0 left-0 right-0 w-full z-[10000] bg-[#071020]/95 border-b border-[rgba(227,179,65,0.25)] text-[#f7f1df] px-3 py-1.5 sm:px-4 sm:py-2.5 text-center text-[11px] sm:text-[13px] font-medium flex items-center justify-between shadow-xl backdrop-blur-md transition-all duration-200"
              >
                <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 pr-1 sm:pr-2 min-w-0">
                  <AlertTriangle size={14} className="shrink-0 text-[#e3b341] animate-pulse" />
                  <span className="leading-tight sm:leading-snug">
                    <strong className="text-[#f2cc6b] font-bold">System Matrix Index:</strong>{" "}
                    <span className="hidden sm:inline">
                      This evaluation framework is executing optimized validation cycles under live calibration; core criteria metrics are being systematically synchronized.
                    </span>
                    <span className="sm:hidden">
                      Framework under live calibration & metric sync.
                    </span>
                  </span>
                </div>
                <button
                  onClick={() => setShowConstructionBar(false)}
                  className="p-1 text-slate-400 hover:text-[#f2cc6b] hover:bg-[rgba(227,179,65,0.1)] rounded-lg transition-all shrink-0 ml-1 sm:ml-2 focus:outline-none"
                  aria-label="Dismiss system notice"
                >
                  <XCircle size={16} />
                </button>
              </div>

              {/* MATHEMATICALLY EXACT BANNER OFFSET STYLES */}
              <style>{`
                :root {
                  --lionxe-banner-height: ${bannerHeight}px;
                }

                /* Dynamically position header directly below banner with zero overlap */
                header, 
                .header,
                .fixed.top-0:not(#lionxe-top-announcement-bar) {
                  top: var(--lionxe-banner-height) !important;
                }

                /* Dynamically adjust page main offset */
                main {
                  margin-top: var(--lionxe-banner-height) !important;
                }
              `}</style>
            </>
          )}

          {isSlugPage ? (
            <ConditionalGlobalHeader />
          ) : (
            <Header />
          )}

          {hydrated && (
            <>
              <CacheProvider>
                <main>
                  {children}
                </main>

                <Footer />
                <ScrollToTop />
              </CacheProvider>

              <Toaster position="bottom-center" />
              <SpeedInsights />
              <Analytics />
            </>
          )}
        </Providers>
      </body>
    </html>
  );
}