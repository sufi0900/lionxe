// app/report/chapter-11/page.tsx

import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { DataTable } from "@/components/report/DataTable";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";
import { BulletList } from "@/components/report/BulletList";

// Chapter-specific bulletproof visual architecture components
import { ClickWindowChart } from "./ClickWindowChart";
import { StrategicContrastRows } from "./StrategicContrastRows";
import { StrategicCrossroadsChart } from "./StrategicCrossroadsChart";

export default function Chapter11Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="chapter-11"
        label="Chapter 11: The Strategic Landscape and the Path Forward"
      />

      <ChapterOpener
        chapterNumber={11}
        title="The Strategic Landscape and the Path Forward"
        overview="This chapter synthesizes the diagnostic findings from Chapters 3 through 10 into a single picture, places that picture against the direction search is moving in 2026, and frames the strategic question the remaining chapters are designed to address."
      />

      {/* 11.1 */}
      <SectionHeading>11.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapters 3 through 10 examined the company&apos;s digital ecosystem
        factor by factor: the infrastructure, the content, the tools, the
        template, the architecture, the social channels, and the operational
        capacity of the team. Each chapter presented its findings against the
        published standards that apply.
      </Paragraph>
      <Paragraph>
        This chapter serves a different function. It synthesizes the diagnostic
        findings into a single picture, places that picture against the direction
        search is moving in 2026 and beyond, and frames the strategic question
        that the remaining chapters of this report are designed to address.
      </Paragraph>
      <Paragraph>
        No new diagnostic evidence is introduced here. The chapter draws entirely
        on the findings already established and on the publicly documented
        trajectory of the search landscape.
      </Paragraph>

      {/* 11.2 */}
      <SectionHeading>11.2 The Cumulative Diagnostic Picture</SectionHeading>
      <Paragraph>
        Taken individually, each factor documented in Chapters 3 through 10
        represents a structural limitation. Taken together, they form a pattern.
        The following table summarizes the core finding of each diagnostic
        chapter and the standard it was measured against.
      </Paragraph>

      <DataTable
        headers={["Ch", "Factor", "Core Finding"]}
        align={["center", "left", "left"]}
        rows={[
          {
            cells: [
              "3",
              "Infrastructure",
              "87 sites produce ~226,200 URLs through location-swap duplication. The pattern aligns with Google\u2019s doorway page definition.",
            ],
          },
          {
            cells: [
              "4",
              "Content Quality",
              "Fixed 1,200-word ceiling, 30+ keyword repetitions per post, and query-variation targeting inconsistent with intent-based search.",
            ],
          },
          {
            cells: [
              "5",
              "AI Usage",
              "Two-stage pipeline (AI draft \u2192 humanizer) optimizes for a detection score Google does not use, without adding original insight.",
            ],
          },
          {
            cells: [
              "6",
              "Template",
              "A single six-stage template applied across 45,240 blog pages matches the default output of automated language models.",
            ],
          },
          {
            cells: [
              "7",
              "Architecture",
              "A flat 720-row keyword list with no pillar-cluster hierarchy, no internal linking, and no backlink strategy.",
            ],
          },
          {
            cells: [
              "8",
              "Social Media",
              "261 accounts across 3 platforms managed by 3 coordinators, with AI-generated content that violates platform originality policies.",
            ],
          },
          {
            cells: [
              "10",
              "Resource Allocation",
              "Five-lens departmental assessment reveals a complete investment-return shortfall for content and SEO teams across workflow, skill growth, expected output, business return, and budget. New hires and interns entering these teams compound the gap rather than close it.",
            ],
          },
        ]}
      />

      <Paragraph>
        The pattern these findings describe is not a collection of isolated
        issues. It is a single operational model, built around volume,
        automation, and geographic duplication, applied consistently across every
        dimension of the company&apos;s digital presence. The individual findings
        are symptoms. The model is the condition.
      </Paragraph>

      {/* 11.3 */}
      <SectionHeading>11.3 The Shifting Search Landscape</SectionHeading>
      <Paragraph>
        The standards against which the diagnostic chapters measured the
        company&apos;s current model are not static. They are moving, and the
        direction of that movement makes the gap between the current model and
        the standard it must meet wider, not narrower.
      </Paragraph>

      <MiniHeading>The Rise of AI-Generated Search Results</MiniHeading>
      <Paragraph>
        Google&apos;s AI Overviews, the generative summaries that populate above
        traditional organic listings, now appear across structural search intents with increasing frequency. According to tracking metrics published in the{" "}
        <a 
          href="https://www.seerinteractive.com/insights/google-ai-overviews-analysis" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Seer Interactive AI Overview Dataset
        </a>
        , automated answers appear on approximately 48 percent of all informational search queries as of early 2026, marking a 58 percent increase year over year.
      </Paragraph>
      <Paragraph>
        When an AI Overview is present, click compression on traditional SERP URLs drops rapidly. Case tracking compiled in the{" "}
        <a 
          href="https://ahrefs.com/blog/google-ai-overviews-study/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Ahrefs Search CTR Reduction Report
        </a>{" "}
        indicates that organic click-through rates underneath generative answer blocks collapse by 34 to 61 percent depending on query complexity.
      </Paragraph>
      <Paragraph>
        For informational queries, the category most relevant to the
        company&apos;s blog content, the impact is at the upper end of that
        range. Surface-level answers to common questions, precisely the type of
        content the company&apos;s pipeline produces at scale, are the queries
        most likely to be answered directly within the AI Overview, leaving no
        reason for the searcher to click through to the page that provided the
        information.
      </Paragraph>

      <MiniHeading>The Shift Toward Citation Authority</MiniHeading>
      <Paragraph>
        The sites that benefit in this environment are not the ones that produce
        the most pages. They are the ones that earn explicit citations within the
        AI-generated answers. Research from the{" "}
        <a 
          href="https://ahrefs.com/blog/seo-trends/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Ahrefs Search Engine Evaluation Models
        </a>{" "}
        indicates that sites cited directly inside AI Overviews capture approximately 35 percent more organic clicks than uncited properties on the same results page.
      </Paragraph>
      <Paragraph>
        This represents a structural shift in how visibility is earned. The
        currency of search is moving from ranking position toward citation
        authority, and citation authority is built through the qualities the
        diagnostic chapters found absent in the company&apos;s current model:
        original content, concentrated domain strength, genuine expertise
        signals, and a coherent topical architecture.
      </Paragraph>

      <MiniHeading>Zero-Click Search</MiniHeading>
      <Paragraph>
        The broader trend reinforces the same direction. According to data published in the{" "}
        <a 
          href="https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          SparkToro Zero-Click Search Study
        </a>{" "}
        and verified across consumer trend lines by the{" "}
        <a 
          href="https://www.pewresearch.org/internet/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Pew Research Center Internet Datasets
        </a>
        , approximately 60 percent of searches end without a user clicking to an external destination. The searcher resolves their query using on-page interactive features.
      </Paragraph>
      <Paragraph>
        For a network of 87 sites publishing thin, templated, location-swapped
        content without a consolidated authority profile, this trend means that
        the already-limited window for earning organic traffic is narrowing
        further with each expansion of AI-generated results.
      </Paragraph>

      {/* ── Figure 11.1 ── */}
      <ClickWindowChart
        figureNumber="11.1"
        title="The Shrinking Organic Click Window"
      />

      <Paragraph>
        Figure 11.1 illustrates the structural challenge facing the company&apos;s
        content strategy. For informational queries, the category that encompasses
        nearly all of the company&apos;s 45,240 blog pages, the organic click
        opportunity has narrowed to a fraction of what it was before AI Overviews
        became prevalent. The company&apos;s current content model, designed to
        produce surface-level answers to common questions, generates precisely the
        type of material that AI Overviews are most likely to absorb, leaving the
        searcher with no reason to visit the source page.
      </Paragraph>

      {/* 11.4 */}
      <SectionHeading>
        11.4 The Position of the Current Model
      </SectionHeading>
      <Paragraph>
        The diagnostic findings and the landscape trajectory converge on a single
        observation: the company&apos;s current digital model was built for an
        environment that no longer exists, and the environment it now operates in
        rewards the opposite of what the model produces.
      </Paragraph>

      {/* ── Figure 11.2 ── */}
      <StrategicContrastRows
        figureNumber="11.2"
        title="What the Current Model Produces vs. What the Current Environment Rewards"
        leftLabel="WHAT THE CURRENT MODEL PRODUCES"
        rightLabel="WHAT THE CURRENT ENVIRONMENT REWARDS"
      />

      <Paragraph>
        Each of these misalignments was already documented as a limitation
        against today&apos;s standards. The trajectory of the search landscape
        means these limitations will become more consequential over time, not
        less.
      </Paragraph>

      {/* ── 11.5 ── */}
      <SectionHeading>11.5 The Strategic Question</SectionHeading>
          <Paragraph>
        This report does not prescribe a course of action. It presents the
        evidence and the landscape within which that evidence must be evaluated.
        The strategic question that emerges from the diagnostic findings can be
        stated in three parts.
      </Paragraph>

      {/* Strategic Question Callout */}
      <div
        className="avoid-break my-8 overflow-hidden rounded-xl"
        style={{
          boxShadow: "0 6px 24px rgb(10 22 40 / 0.12)",
        }}
      >
        {/* Label band */}
        <div
          className="px-6 py-2.5"
          style={{ background: "var(--navy)" }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.15em]"
            style={{ color: "var(--white)" }}
          >
            The Central Strategic Question
          </p>
        </div>
        {/* Question body — three distinct parts */}
        <div
          className="border-l-4 px-8 py-6"
          style={{
            borderColor: "var(--lionxe-blue)",
            background: "linear-gradient(135deg, #f0f4fa 0%, #e8edf5 100%)",
          }}
        >
         
          <p
            className="text-[16px] font-bold leading-7"
            style={{ color: "var(--navy)" }}
          >
            The question is whether to continue investing in the current model
            or to transition to a consolidated, authority-driven architecture
            designed for the environment search is moving toward.
          </p>
        </div>
      </div>

 <Paragraph>
        The chapters that follow examine the components of the second path: what
        a unified digital architecture would look like, how the content operating
        model would change, how the brand and channel presence would consolidate,
        and what the implementation of that transition would require.
      </Paragraph>
      <Paragraph>
        The decision itself belongs to leadership. The role of the remaining
        chapters is to ensure that decision is informed by a clear picture of
        what each path entails.
      </Paragraph>
   

      {/* ── Figure 11.3 ── */}
      <StrategicCrossroadsChart
        figureNumber="11.3"
        title="The Strategic Crossroads"
      />

     

      {/* 11.6 */}
      <SectionHeading>11.6 Scope and Confidence of These Findings</SectionHeading>
      <BulletList
        items={[
          <>
            The cumulative diagnostic summary in section 11.2 draws entirely on
            the findings established in Chapters 3 through 10. No new evidence
            is introduced in this chapter.
          </>,
          <>
            The search landscape data, including AI Overview prevalence,
            click-through rate impacts, zero-click trends, and citation
            authority research, is drawn from published industry research
            conducted by{" "}
            <a
              href="https://www.seerinteractive.com/news/fast-company-featured-ai-search-study-from-seer-interactive"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lionxe-blue)" }}
            >
              Seer Interactive
            </a>{" "}
            (25.1 million impressions, 42 organizations),{" "}
            <a
              href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lionxe-blue)" }}
            >
              Pew Research Center
            </a>{" "}
            (68,879 tracked searches),{" "}
            <a
              href="https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lionxe-blue)" }}
            >
              SparkToro/Similarweb
            </a>{" "}
            (U.S. clickstream panel, January through April 2026),{" "}
            <a
              href="https://www.omnibound.ai/blog/ai-seo-statistics"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lionxe-blue)" }}
            >
              Ahrefs
            </a>{" "}
            (300,000 keywords), and{" "}
            <a
              href="https://www.semrush.com/blog/ai-seo-statistics/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lionxe-blue)" }}
            >
              Semrush
            </a>{" "}
            (10 million+ tracked keywords).
          </>,
          <>
            These are third-party research findings, not Google&apos;s own
            documentation, and are presented as the best available industry
            evidence rather than as confirmed internal Google metrics.
          </>,
          <>
            The observation that the current model&apos;s characteristics are
            structurally misaligned with the direction of the search landscape
            follows from comparing the diagnostic findings to the documented
            trajectory. It is a structural assessment, not a prediction about
            specific future algorithm changes.
          </>,
        ]}
      />
    </main>
  );
}