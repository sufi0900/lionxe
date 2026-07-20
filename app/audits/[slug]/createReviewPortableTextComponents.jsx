/**
 * createReviewPortableTextComponents.jsx
 *
 * PortableText renderer styled for the LIONXE review theme.
 * Handles: text blocks, headings, images, videos, code blocks,
 * tables, lists, links, and inline marks.
 *
 * Uses the LIONXE color palette (#004DFD, #050B1F dark bg)
 * instead of the doitwithai.tools blue-to-purple gradient.
 */

import React, { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import OptimizedImage from "@/app/ai-seo/[slug]/OptimizedImage";
import OptimizedVideo from "@/app/ai-seo/[slug]/OptimizedVideo";
import { Clipboard, Check } from "lucide-react";
import { CopyBlock, dracula } from "react-code-blocks";
// import { getFileUrl } from "./sanityFileUrl";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CODE BLOCK
// ─────────────────────────────────────────────────────────────────────────────

const CodeBlockComponent = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-8 overflow-hidden rounded-2xl border
      border-slate-200 dark:border-white/10 shadow-lg">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b px-4 py-2.5
        border-slate-200 bg-slate-100
        dark:border-white/10 dark:bg-[#0d1117]">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {language || "code"}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5
            text-xs font-medium transition-all
            text-slate-500 hover:bg-slate-200 hover:text-slate-700
            dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              Copied
            </>
          ) : (
            <>
              <Clipboard className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      {/* Code body */}
      <div className="overflow-x-auto bg-[#0d1117] p-4 text-sm">
        <CopyBlock
          text={code}
          language={language || "text"}
          theme={dracula}
          showLineNumbers
          wrapLongLines
          codeBlock
        />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const VideoComponent = ({ value }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [isUrlLoading, setIsUrlLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const url = getFileUrl(value) || value?.asset?.url || null;
        if (mounted) {
          setFileUrl(url);
          setIsUrlLoading(false);
        }
      } catch (err) {
        console.error("Video load error:", err);
        if (mounted) setIsUrlLoading(false);
      }
    };
    load();
    return () => (mounted = false);
  }, [value]);

  if (isUrlLoading) {
    return (
      <div className="my-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800 aspect-video" />
      </div>
    );
  }

  if (!fileUrl) {
    return (
      <div className="my-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center
          dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Video unavailable
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full my-8 sm:my-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="group relative">
          {/* LIONXE blue border accent (replacing the purple gradient) */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r
            from-[#004DFD]/30 via-[#7CA0FF]/20 to-[#004DFD]/30
            opacity-0 blur-sm transition-opacity duration-500
            group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-2xl border shadow-xl
            border-slate-200 bg-white p-2 sm:p-3
            dark:border-white/10 dark:bg-[#0A0F1E]
            group-hover:shadow-2xl transition-shadow duration-500">
            <div className="relative overflow-hidden rounded-xl">
              <OptimizedVideo
                src={fileUrl}
                alt={value.alt}
                caption={value.caption}
                className="rounded-xl shadow-lg"
              />
            </div>

            {value.caption && (
              <div className="mt-3 p-3 rounded-xl border
                border-slate-200 bg-slate-50
                dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// RICH TABLE
// ─────────────────────────────────────────────────────────────────────────────

const RichTableComponent = ({ value }) => {
  const caption = value?.caption;
  const rows = value?.rows || [];

  return (
    <div className="my-8 overflow-hidden rounded-2xl border shadow-lg
      border-slate-200 dark:border-white/10">
      {caption && (
        <div className="border-b px-5 py-3
          border-slate-200 bg-slate-50
          dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {caption}
          </p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`border-b last:border-b-0
                  border-slate-200 dark:border-white/10
                  ${rowIdx === 0
                    ? "bg-[#004DFD]/[0.04] dark:bg-[#004DFD]/[0.08] font-semibold"
                    : "hover:bg-slate-50 dark:hover:bg-white/[0.02]"
                  }`}
              >
                {row.cells?.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="px-5 py-3 text-slate-700 dark:text-slate-300"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE DESCRIPTION (nested portable text)
// ─────────────────────────────────────────────────────────────────────────────

const imageDescriptionComponents = {
  block: {
    normal: ({ children }) => (
      <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {children}
      </span>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-800 dark:text-white">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="font-medium text-[#004DFD] underline decoration-[#004DFD]/30
          hover:decoration-[#004DFD] dark:text-[#7CA0FF]"
      >
        {children}
      </a>
    ),
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function createReviewPortableTextComponents() {
  return {
    types: {
      // ── Code Block ──
      code: ({ value }) => {
        const code = value?.code || value?.codeString || value?.source || "";
        const language = (value?.language || value?.lang || "text").toLowerCase();
        return <CodeBlockComponent code={code} language={language} />;
      },

      // ── Video ──
      video: VideoComponent,

      // ── Image ──
      image: ({ value, index }) => {
        const imageUrl = value?.asset
          ? urlForImage(value.asset).url()
          : "/fallback-image.png";
        const isPriority = index < 3;
        const blurDataURL = value?.asset
          ? urlForImage(value.asset).width(20).height(20).blur(10).url()
          : undefined;

        return (
          <div className="relative w-full my-8 sm:my-10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="group relative">
                {/* LIONXE blue accent border */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r
                  from-[#004DFD]/30 via-[#7CA0FF]/20 to-[#004DFD]/30
                  opacity-0 blur-sm transition-opacity duration-500
                  group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-2xl border shadow-xl
                  border-slate-200 bg-white p-2 sm:p-3
                  dark:border-white/10 dark:bg-[#0A0F1E]
                  group-hover:shadow-2xl transition-shadow duration-500">
                  <div className="relative overflow-hidden rounded-xl">
                    <figure className="relative">
                      <div className="relative overflow-hidden rounded-xl">
                        <OptimizedImage
                          src={imageUrl}
                          alt={value.alt || "Article image"}
                          className="w-full h-auto object-cover rounded-xl shadow-lg"
                          priority={isPriority}
                          blurDataURL={blurDataURL}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
                          width={800}
                          height={600}
                          quality={85}
                          enableModal={true}
                        />
                        {/* Subtle hover overlay */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t
                          from-black/5 via-transparent to-transparent
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-300 pointer-events-none" />
                      </div>

                      {/* Image description */}
                      {value.imageDescription && (
                        <div className="mt-3 p-3 sm:p-4 rounded-xl border
                          border-slate-200 bg-slate-50
                          dark:border-white/10 dark:bg-white/[0.03]">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full
                                bg-[#004DFD]/10 dark:bg-[#004DFD]/20
                                flex items-center justify-center">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#004DFD] dark:bg-[#7CA0FF]" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div>
                                <PortableText
                                  value={value.imageDescription}
                                  components={imageDescriptionComponents}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },

      // ── Rich Table ──
      richTable: RichTableComponent,
    },

    // ── Block-Level Elements ──────────────────────────────────────────────
    block: {
      normal: ({ children }) => (
        <p className="mb-4 text-base leading-8 font-medium
          text-slate-700 dark:text-slate-300
          sm:text-lg sm:leading-8 transition-colors duration-300
          hover:text-slate-900 dark:hover:text-slate-100">
          {children}
        </p>
      ),

      h1: ({ children }) => {
        const anchor = typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
          : "";
        return (
          <h1
            id={anchor}
            className="mb-4 mt-12 text-3xl font-extrabold leading-tight tracking-tight
              text-slate-900 dark:text-white
              sm:text-4xl lg:text-5xl"
          >
            {children}
          </h1>
        );
      },

      h2: ({ children }) => {
        const text = Array.isArray(children) ? children.join("") : String(children || "");
        const anchor = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
        return (
          <h2
            id={anchor}
            className="mb-4 mt-14 text-2xl font-extrabold tracking-tight
              text-slate-900 dark:text-white
              sm:text-3xl
              scroll-mt-24"
          >
            {children}
          </h2>
        );
      },

      h3: ({ children }) => {
        const text = Array.isArray(children) ? children.join("") : String(children || "");
        const anchor = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
        return (
          <h3
            id={anchor}
            className="mb-3 mt-10 text-xl font-bold
              text-slate-900 dark:text-white
              sm:text-2xl
              scroll-mt-24"
          >
            {children}
          </h3>
        );
      },

      h4: ({ children }) => (
        <h4 className="mb-3 mt-8 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
          {children}
        </h4>
      ),

      h5: ({ children }) => (
        <h5 className="mb-2 mt-6 text-base font-bold text-slate-900 dark:text-white sm:text-lg">
          {children}
        </h5>
      ),

      h6: ({ children }) => (
        <h6 className="mb-2 mt-6 text-sm font-bold uppercase tracking-wider
          text-slate-700 dark:text-slate-300">
          {children}
        </h6>
      ),

      blockquote: ({ children }) => (
        <blockquote className="my-8 border-l-4 border-[#004DFD] py-4 pl-6 pr-4
          rounded-r-xl
          bg-[#004DFD]/[0.03] dark:bg-[#004DFD]/[0.06]">
          <div className="text-base italic leading-8
            text-slate-700 dark:text-slate-200">
            {children}
          </div>
        </blockquote>
      ),
    },

    // ── List Elements ────────────────────────────────────────────────────
    list: {
      bullet: ({ children }) => (
        <ul className="my-4 ml-1 space-y-2.5 text-base leading-8
          text-slate-700 dark:text-slate-300 sm:text-lg">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="my-4 ml-1 space-y-2.5 list-none counter-reset-item text-base leading-8
          text-slate-700 dark:text-slate-300 sm:text-lg">
          {children}
        </ol>
      ),
    },

    listItem: {
      bullet: ({ children }) => (
        <li className="flex items-start gap-3 pl-1">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#004DFD] dark:bg-[#7CA0FF]" />
          <span>{children}</span>
        </li>
      ),
      number: ({ children, index }) => (
        <li className="flex items-start gap-3 pl-1">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg
            bg-[#004DFD]/10 text-xs font-bold text-[#004DFD]
            dark:bg-[#004DFD]/15 dark:text-[#7CA0FF]">
            {(index ?? 0) + 1}
          </span>
          <span>{children}</span>
        </li>
      ),
    },

    // ── Inline Marks ─────────────────────────────────────────────────────
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="rounded-md border px-1.5 py-0.5 text-sm font-mono
          border-slate-200 bg-slate-100 text-[#004DFD]
          dark:border-white/10 dark:bg-white/[0.06] dark:text-[#7CA0FF]">
          {children}
        </code>
      ),
      underline: ({ children }) => (
        <span className="underline decoration-[#004DFD]/40 underline-offset-4">
          {children}
        </span>
      ),
      "strike-through": ({ children }) => (
        <span className="line-through text-slate-400 dark:text-slate-500">
          {children}
        </span>
      ),
      link: ({ value, children }) => {
        const href = value?.href || "#";
        const isExternal = href.startsWith("http");

        if (isExternal) {
          return (
            <a
              href={href}
              target={value?.blank ? "_blank" : undefined}
              rel={value?.blank ? "noopener noreferrer" : undefined}
              className="font-medium text-[#004DFD] underline decoration-[#004DFD]/30
                underline-offset-4 transition-all duration-200
                hover:decoration-[#004DFD] hover:text-[#003ed1]
                dark:text-[#7CA0FF] dark:decoration-[#7CA0FF]/30
                dark:hover:decoration-[#7CA0FF] dark:hover:text-[#a0bdff]"
            >
              {children}
            </a>
          );
        }

        return (
          <Link
            href={href}
            className="font-medium text-[#004DFD] underline decoration-[#004DFD]/30
              underline-offset-4 transition-all duration-200
              hover:decoration-[#004DFD] hover:text-[#003ed1]
              dark:text-[#7CA0FF] dark:decoration-[#7CA0FF]/30
              dark:hover:decoration-[#7CA0FF]"
          >
            {children}
          </Link>
        );
      },
    },
  };
}