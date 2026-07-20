"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageCircle, ShieldCheck } from "lucide-react";
import { faqsData } from "./faqs";

export default function FAQClient() {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  useEffect(() => {
    setActiveIndex(faqsData.map((_, index) => index));
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }

      return [...prev, index];
    });
  };

  return (
    <main className="relative overflow-hidden bg-[#050B1F] text-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-[#014FFD]/10 blur-[130px]"
      />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)]
          bg-[size:56px_56px]
        "
      />

      <section className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 inline-flex rounded-full border border-[#5271FF]/30 bg-[#014FFD]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8EA7FF]">
            Help Center
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight  text-[#004DFD] sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-slate-300 sm:text-lg sm:leading-9">
            Clear answers about LIONXE™, the four-pillar digital quality review
            framework, its scoring model, review methodology, and wider
            ecosystem.
          </p>
        </div>

        {/* Summary cards */}
        <div
          className="
            mb-10 rounded-3xl border border-[#5271FF]/20 bg-[#071127]/95
            p-6 shadow-[0_24px_90px_rgba(0,0,0,0.45)]
            sm:p-8
          "
        >
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
                text: "Built to evaluate content, websites, UX, SEO, AI visibility, and strategy.",
              },
              {
                label: "Purpose",
                value: "Better Assets",
                text: "Designed to identify strengths, weaknesses, risks, and improvement opportunities.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
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

        {/* FAQ Accordion */}
        <div className="mx-auto grid max-w-4xl gap-5">
          {faqsData.map((faq, index) => {
            const isOpen = activeIndex.includes(index);

            return (
              <div
                key={faq.question}
                className="
                  group overflow-hidden rounded-2xl border border-white/10
                  bg-[#071127]/95 shadow-[0_18px_55px_rgba(0,0,0,0.22)]
                  transition-all duration-300
                  hover:border-[#5271FF]/35 hover:bg-[#0B1430]
                  hover:shadow-[0_20px_60px_rgba(1,79,253,0.12)]
                "
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={`
                    flex w-full items-center justify-between gap-5 px-5 py-5 text-left
                    transition-all duration-300 sm:px-6
                    ${
                      isOpen
                        ? "border-b border-[#5271FF]/25 bg-[#014FFD]/10"
                        : "border-b border-transparent"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-xl border border-[#5271FF]/30 bg-[#014FFD]/10
                        text-[#8EA7FF]
                      "
                    >
                      <HelpCircle className="h-5 w-5" strokeWidth={2.3} />
                    </div>

                    <h2 className="text-base font-extrabold leading-7 text-white sm:text-lg sm:leading-8">
                      {faq.question}
                    </h2>
                  </div>

                  <ChevronDown
                    className={`
                      h-5 w-5 shrink-0 text-slate-400 transition-all duration-300
                      ${isOpen ? "rotate-180 text-[#8EA7FF]" : ""}
                    `}
                    strokeWidth={2.5}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-[520px]" : "max-h-0"}
                  `}
                >
                  <div className="px-5 py-5 sm:px-6">
                    <p className="text-base font-medium leading-8 text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-12 overflow-hidden rounded-3xl border border-[#5271FF]/25
            bg-[#071127] p-7 text-center shadow-[0_24px_90px_rgba(0,0,0,0.45)]
            sm:p-9
          "
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#5271FF]/30 bg-[#014FFD]/10 text-[#8EA7FF]">
            <MessageCircle className="h-6 w-6" strokeWidth={2.3} />
          </div>

          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8EA7FF]">
            Still have questions?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white">
            Explore the full LIONXE framework.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-8 text-slate-300">
            Learn how LIONXE evaluates digital assets through long-term logic,
            internal optimization, integrity-driven execution, and exceptional
            quality standards.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/framework"
              className="
                inline-flex min-h-[48px] items-center justify-center rounded-xl
                bg-gradient-to-r from-[#014FFD] to-[#003BC7]
                px-6 py-3 text-sm font-bold text-white
                shadow-[0_14px_34px_rgba(1,79,253,0.28)]
                transition-all duration-300 hover:-translate-y-0.5
                hover:shadow-[0_18px_44px_rgba(1,79,253,0.38)]
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
            FAQ answers are generated from the same centralized data used for
            the visible page and structured schema.
          </div>
        </div>
      </section>
    </main>
  );
}