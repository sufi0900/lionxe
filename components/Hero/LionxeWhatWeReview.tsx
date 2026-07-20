"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Wrench,
  Monitor,
  MousePointer2,
  Search,
  Target,
  ArrowRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// REVIEW CATEGORIES DATA
// ─────────────────────────────────────────────────────────────────────────────

const REVIEW_CATEGORIES = [
  {
    number: "01",
    title: "Article & Blog Reviews",
    description:
      "We review articles, guides, landing pages, and blog posts for clarity, depth, originality, search intent alignment, structure, usefulness, and long-term value.",
    icon: FileText,
    color: {
      primary: "#004DFD",
      light: "rgba(0, 77, 253, 0.1)",
      border: "rgba(0, 77, 253, 0.3)",
    },
    tags: ["Slug URLs", "Meta Titles", "Structure", "Content Depth"],
  },
  {
    number: "02",
    title: "Tools & Apps Reviews",
    description:
      "We analyze digital tools, AI tools, SEO platforms, SaaS products, and productivity software based on usability, features, pricing, reliability, practical value, and execution quality.",
    icon: Wrench,
    color: {
      primary: "#06B6D4",
      light: "rgba(6, 182, 212, 0.1)",
      border: "rgba(6, 182, 212, 0.3)",
    },
    tags: ["Usability", "Features", "Pricing", "Reliability"],
  },
  {
    number: "03",
    title: "Website Reviews",
    description:
      "We evaluate websites and landing pages for design clarity, structure, trust signals, navigation, content flow, technical quality, SEO foundation, and overall user experience.",
    icon: Monitor,
    color: {
      primary: "#10B981",
      light: "rgba(16, 185, 129, 0.1)",
      border: "rgba(16, 185, 129, 0.3)",
    },
    tags: ["Design", "Navigation", "Trust Signals", "Technical Quality"],
  },
  {
    number: "04",
    title: "UX/UI Reviews",
    description:
      "We review user interfaces, dashboards, apps, forms, layouts, and digital journeys to identify friction, clarity gaps, usability issues, and improvement opportunities.",
    icon: MousePointer2,
    color: {
      primary: "#8B5CF6",
      light: "rgba(139, 92, 246, 0.1)",
      border: "rgba(139, 92, 246, 0.3)",
    },
    tags: ["Usability", "Friction Points", "User Flows", "Clarity"],
  },
  {
    number: "05",
    title: "SEO Reviews",
    description:
      "We evaluate overall SEO strategy, on-page SEO, content structure, metadata, internal linking, outreach, technical SEO, topical authority, relevance, and visibility readiness.",
    icon: Search,
    color: {
      primary: "#F59E0B",
      light: "rgba(245, 158, 11, 0.1)",
      border: "rgba(245, 158, 11, 0.3)",
    },
    tags: ["On-Page", "Technical SEO", "Content Structure", "Authority"],
  },
  {
    number: "06",
    title: "Marketing Strategy Reviews",
    description:
      "We analyze digital marketing strategies, funnels, positioning, content systems, conversion paths, audience alignment, and long-term growth logic.",
    icon: Target,
    color: {
      primary: "#EC4899",
      light: "rgba(236, 72, 153, 0.1)",
      border: "rgba(236, 72, 153, 0.3)",
    },
    tags: ["Funnels", "Positioning", "Conversion", "Growth Logic"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const LionxeWhatWeReview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden py-24 px-4
        bg-white dark:bg-[#050B1F]
        sm:px-6 lg:px-8 lg:py-32
      "
    >
      {/* Diagonal accent gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.03]
          dark:opacity-[0.08]
        "
        style={{
          background:
            "linear-gradient(135deg, #004DFD 0%, transparent 30%, transparent 70%, #EC4899 100%)",
        }}
      />

      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-[0.015]
          dark:opacity-[0.03]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── HEADER ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Eyebrow */}
          <div
            className="
              mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2
              text-sm font-semibold backdrop-blur-md
              border bg-white/50
              border-slate-300 text-slate-700
              dark:border-white/20 dark:bg-white/[0.05] dark:text-slate-300
            "
          >
            <span className="text-lg">🔍</span>
            What We Review
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl font-extrabold tracking-tight
              text-slate-900 dark:text-white
              sm:text-5xl lg:text-6xl
            "
          >
          Core Evaluation Categories <br /> of the  
            <span
              className="
              text-[#004DFD]
              "
            >
              {""} LIONXE™ Framework
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-6 max-w-3xl text-lg font-medium leading-8
              text-slate-600 dark:text-slate-300
            "
          >
            From articles to marketing strategies, LIONXE™ reviews every type of
            digital asset through the same rigorous framework. No exceptions. No
            shortcuts.
          </p>
        </motion.div>

        {/* ── CATEGORIES GRID ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {REVIEW_CATEGORIES.map((category, index) => (
            <ReviewCategoryCard
              key={category.number}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── FOOTER CTA ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="/reviews"
            className="
              group inline-flex items-center gap-3 rounded-xl px-8 py-4
              text-base font-bold transition-all duration-300
              bg-slate-900 text-white
              hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20
              dark:bg-white dark:text-slate-900
              dark:hover:bg-slate-100
            "
          >
            <span>Browse All Reviews</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface ReviewCategoryCardProps {
  category: typeof REVIEW_CATEGORIES[0];
  index: number;
  isInView: boolean;
}

const ReviewCategoryCard = ({
  category,
  index,
  isInView,
}: ReviewCategoryCardProps) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card */}
      <div
        className="
          relative h-full overflow-hidden rounded-2xl
          border bg-white p-6
          transition-all duration-300
          border-slate-200
          hover:border-slate-300 hover:shadow-xl
          dark:border-white/10 dark:bg-white/[0.03]
          dark:hover:border-white/20
          sm:p-8
        "
      >
        {/* Colored accent bar on left — slides in on hover */}
        <div
          className="
            absolute left-0 top-0 h-full w-1 origin-left
            scale-x-0 transition-transform duration-500
            group-hover:scale-x-100
          "
          style={{ backgroundColor: category.color.primary }}
        />

        {/* Top section: Number + Icon */}
        <div className="mb-5 flex items-center gap-4">
          {/* Number badge */}
          <div
            className="
              flex h-14 w-14 shrink-0 items-center justify-center rounded-xl
              text-2xl font-black transition-all duration-300
              group-hover:scale-110
            "
            style={{
              backgroundColor: category.color.light,
              color: category.color.primary,
            }}
          >
            {category.number}
          </div>

          {/* Icon */}
          <div
            className="
              flex h-14 w-14 shrink-0 items-center justify-center rounded-xl
              border transition-all duration-300
              group-hover:scale-110 group-hover:shadow-lg
            "
            style={{
              borderColor: category.color.border,
              backgroundColor: category.color.light,
            }}
          >
            <Icon
              className="h-7 w-7"
              style={{ color: category.color.primary }}
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            mb-3 text-xl font-bold
            text-slate-900 dark:text-white
            sm:text-2xl
          "
        >
          {category.title}
        </h3>

        {/* Description */}
        <p
          className="
            mb-5 text-sm leading-7
            text-slate-600 dark:text-slate-400
            sm:text-base
          "
        >
          {category.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full px-3 py-1 text-xs font-medium
                bg-slate-100 text-slate-600
                dark:bg-white/[0.05] dark:text-slate-400
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom accent line — expands on hover */}
        <div
          className="
            absolute bottom-0 left-0 h-1 w-0 transition-all duration-500
            group-hover:w-full
          "
          style={{ backgroundColor: category.color.primary }}
        />
      </div>
    </motion.div>
  );
};

export default LionxeWhatWeReview;