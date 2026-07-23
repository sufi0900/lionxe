"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageCircle, ShieldCheck, Search, Maximize2, Minimize2 } from "lucide-react";
import { faqsData } from "./faqs";

export default function FAQClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  // Filter FAQs based on user search input
  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqsData;
    const term = searchTerm.toLowerCase();
    return faqsData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const toggleFAQ = (originalIndex: number) => {
    setOpenIndices((prev) =>
      prev.includes(originalIndex)
        ? prev.filter((i) => i !== originalIndex)
        : [...prev, originalIndex]
    );
  };

  const expandAll = () => {
    setOpenIndices(faqsData.map((_, idx) => idx));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  return (
    <main className="relative overflow-hidden bg-[#050B1F] text-white min-h-screen">
      {/* Background glow visual elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#004DFD]/15 blur-[140px]"
      />

      {/* Grid texture background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)]
          bg-[size:56px_56px]
        "
      />

      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <p className="mb-4 inline-flex rounded-full border border-[#5271FF]/30 bg-[#004DFD]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8EA7FF]">
            Help Center & Knowledge Base
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Frequently Asked <span className="text-[#004DFD]">Questions</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-slate-300 sm:text-lg">
            Clear answers about LIONXE™, the four-pillar digital quality review
            framework, scoring methodologies, AI search visibility, and our broader ecosystem.
          </p>
        </div>

        {/* Framework Pillars Overview */}
        <div className="mb-10 rounded-3xl border border-[#5271FF]/20 bg-[#071127]/95 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Framework",
                value: "4 Pillars",
                text: "Long-Term Logic, Internal Optimization, No Negativity, and Exceptional Execution.",
              },
              {
                label: "Review Focus",
                value: "Digital Quality",
                text: "Engineered to evaluate content, websites, UX, SEO, AI search visibility, and code structure.",
              },
              {
                label: "Purpose",
                value: "Better Assets",
                text: "Designed to uncover technical risks, authority gaps, and compounding growth opportunities.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-[#5271FF]/30"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8EA7FF]">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-extrabold text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Global Controls */}
        <div className="mx-auto max-w-4xl mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions or keywords..."
              className="w-full rounded-2xl border border-white/10 bg-[#071127]/95 py-3.5 pl-12 pr-4 text-sm font-medium text-white placeholder-slate-400 focus:border-[#004DFD] focus:outline-none focus:ring-1 focus:ring-[#004DFD]"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={expandAll}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              Expand All
            </button>
            <button
              onClick={collapseAll}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              <Minimize2 className="h-3.5 w-3.5" />
              Collapse All
            </button>
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="mx-auto grid max-w-4xl gap-4">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-[#071127]/95 p-10 text-center">
              <p className="text-lg font-bold text-slate-300">No matching questions found</p>
              <p className="mt-2 text-sm text-slate-400">
                Try searching with different keywords or clear your search input.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 text-sm font-semibold text-[#8EA7FF] hover:underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const originalIndex = faqsData.findIndex(
                (item) => item.question === faq.question
              );
              const isOpen = openIndices.includes(originalIndex);

              return (
                <div
                  key={faq.question}
                  className="
                    group overflow-hidden rounded-2xl border border-white/10
                    bg-[#071127]/95 shadow-[0_18px_55px_rgba(0,0,0,0.22)]
                    transition-all duration-300
                    hover:border-[#5271FF]/35 hover:bg-[#0B1430]
                  "
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(originalIndex)}
                    aria-expanded={isOpen}
                    className={`
                      flex w-full items-center justify-between gap-5 px-5 py-5 text-left
                      transition-all duration-300 sm:px-6
                      ${
                        isOpen
                          ? "border-b border-[#5271FF]/25 bg-[#004DFD]/10"
                          : "border-b border-transparent"
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#5271FF]/30 bg-[#004DFD]/10 text-[#8EA7FF]">
                        <HelpCircle className="h-5 w-5" strokeWidth={2.3} />
                      </div>

                      <h2 className="text-base font-extrabold leading-7 text-white sm:text-lg">
                        {faq.question}
                      </h2>
                    </div>

                    <ChevronDown
                      className={`
                        h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300
                        ${isOpen ? "rotate-180 text-[#8EA7FF]" : ""}
                      `}
                      strokeWidth={2.5}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 py-5 sm:px-6 animate-fadeIn">
                      <p className="text-base font-medium leading-8 text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Call To Action */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-[#5271FF]/25 bg-[#071127] p-7 text-center shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:p-9">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#5271FF]/30 bg-[#004DFD]/10 text-[#8EA7FF]">
            <MessageCircle className="h-6 w-6" strokeWidth={2.3} />
          </div>

          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA7FF]">
            Still Have Questions?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white">
            Explore the full LIONXE™ framework.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-8 text-slate-300">
            Learn how LIONXE evaluates digital assets through long-term logic,
            internal optimization, integrity-driven execution, and exceptional quality standards.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/framework"
              className="
                inline-flex min-h-[48px] items-center justify-center rounded-xl
                bg-gradient-to-r from-[#004DFD] to-[#003BC7]
                px-6 py-3 text-sm font-bold text-white
                shadow-[0_14px_34px_rgba(0,77,253,0.28)]
                transition-all duration-300 hover:-translate-y-0.5
                hover:shadow-[0_18px_44px_rgba(0,77,253,0.38)]
              "
            >
              View Framework
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex min-h-[48px] items-center justify-center rounded-xl
                border border-white/10 bg-white/[0.045]
                px-6 py-3 text-sm font-bold text-slate-200
                transition-all duration-300 hover:border-[#5271FF]/35
                hover:bg-[#0F1B3D] hover:text-white
              "
            >
              Contact LIONXE
            </Link>
          </div>

          <div className="mx-auto mt-7 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium leading-6 text-slate-400">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#8EA7FF]" />
            FAQ answers are derived from centralized data synced between this page and structured Schema.org markup.
          </div>
        </div>
      </section>
    </main>
  );
}