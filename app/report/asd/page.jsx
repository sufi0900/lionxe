// app/report/executive-summary/page.tsx

import "@/styles/report.css";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function ExecutiveSummaryPage() {
  return (
    <main className="report-shell">
      <DownloadPdfButton slug="executive-summary" label="Executive Summary" />

      <div className="mb-10 mt-4">
        <div className="mb-3 h-[3px] w-16" style={{ background: "var(--lionxe-blue)" }} />
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--navy)" }}>
          Executive Summary
        </h1>
      </div>

      <SectionHeading>Purpose</SectionHeading>
      <Paragraph>
        This report presents an independent strategic assessment of the
        company&apos;s digital ecosystem: its website network, content
        operations, domain portfolio, social media presence, and team capacity.
        The analysis was conducted over a period exceeding two months using
        publicly observable evidence, the company&apos;s documented site
        inventory, and official platform documentation. The full methodology and
        data integrity standards are detailed in Chapter 2.
      </Paragraph>

      <SectionHeading>What Was Examined</SectionHeading>
      <Paragraph>
        The audit covered eight factors across the company&apos;s digital
        operations, each examined in a dedicated chapter:
      </Paragraph>
      <BulletList
        items={[
          "Infrastructure (Chapter 3): The construction pattern across 87 documented websites and the resulting URL volume",
          "Content Quality (Chapter 4): The depth, keyword placement, and reading experience of the published content",
          "AI Tool Usage (Chapter 5): The role of automated tools in the content production pipeline",
          "Content Structure (Chapter 6): The template imposed on every blog post and service page",
          "AI Symbols and Editorial Restrictions (Chapter 7): The prohibition of standard grammar driven by fear of AI detection",
          "Site Architecture (Chapter 8): The keyword strategy, internal structure, and authority framework",
          "Social Media (Chapter 9): The video and social media operations across 261 accounts",
          "Team Capacity (Chapter 10): The operational structure and departmental workflows, assessed through five lenses per department pair",
        ]}
      />

      <SectionHeading>Key Findings</SectionHeading>
      <Paragraph>
        The diagnostic chapters converge on a single observation: the current
        digital model is a unified system built around volume, automation, and
        geographic duplication. Its characteristics include:
      </Paragraph>
      <BulletList
        items={[
          "Approximately 226,200 URLs produced through location-swap duplication across 87 sites, closely aligning with patterns Google\u2019s published policies classify as doorway pages",
          "Content constrained by a fixed 1,200-word ceiling with more than 30 keyword repetitions per post, produced through an automated pipeline optimized for detection evasion rather than value creation",
          "A rigid six-stage blog template applied across 45,240 pages, structurally indistinguishable from default AI output",
          "Standard English punctuation and phrasing banned from published content because automated tools use them, with editorial rules set by the characteristics of AI rather than the needs of the reader",
          "A flat 809-row keyword list with no pillar-cluster hierarchy, no internal linking strategy, and no external link acquisition plan",
          "261 social media accounts managed by four people, publishing AI-generated content that violates platform originality policies",
          "Team members across all departments structurally constrained by the model they operate: repetitive work, no skill development, and budgets consumed by production that returns no visibility",
        ]}
      />
      <Paragraph>
        This model was built for an earlier search environment. As of 2026,
        AI-generated search results appear on approximately 48 percent of
        queries, organic click-through rates drop 34 to 61 percent when they
        appear, and the premium on domain authority and citation-worthy content
        continues to increase.
      </Paragraph>

      <MiniHeading>The Escalation Risk</MiniHeading>
      <Paragraph>
        Beyond diminishing returns, the current model carries a documented
        enforcement risk: Google&apos;s SpamBrain system detects site networks
        sharing infrastructure and content patterns, manual actions can deindex
        entire sites, and as of April 2026 competitor spam reports can trigger
        human review. Continuing to expand the network concentrates this
        exposure rather than diluting it.
      </Paragraph>

      <SectionHeading>What Is Proposed</SectionHeading>
      <Paragraph>
        The report presents a consolidated, authority-driven architecture as the
        structural alternative:
      </Paragraph>
      <BulletList
        items={[
          "A single authoritative domain replacing the 87-site network, with geographic targeting through structured location subdirectories, each carrying genuinely local content",
          "A pillar-cluster content architecture replacing the flat keyword list, with internal linking connecting related content into a topical hierarchy",
          "A five-stage content workflow positioning AI as an assistant to the writer rather than a replacement, with original research and editorial review built into the process",
          "Consolidated brand and social presence (one account per platform) publishing authentic content from the company\u2019s actual operations, with accounts qualified for platform verification",
        ]}
      />
      <Paragraph>
        The existing sites are dismantled without redirects, keeping the new
        domain fully insulated from the retired network&apos;s history. The
        broader domain portfolio retains value as a defensive asset, preventing
        competitors from acquiring high-quality domains in the company&apos;s
        market.
      </Paragraph>
      <Paragraph>
        The industry&apos;s informational keywords carry low ranking difficulty
        with substantial search volume. One researched article per topic on an
        authority domain projects toward broad keyword coverage, and a distinct
        brand name adds a second, separately measurable branded-traffic stream.
      </Paragraph>

      <SectionHeading>Quality Framework Assessment</SectionHeading>
      <Paragraph>
        This audit was structured through the LIONXE digital quality standard,
        a four-gate framework evaluating long-term viability, internal
        optimization, integrity, and exceptional distinction. That framework is
        presented in Chapter 12, which reveals it as the organizing lens behind
        the entire diagnostic. The current model fails all four gates; the
        proposed architecture passes all four. The formal side-by-side verdict
        is presented in Chapter 14, where the two paths also divide cleanly:
        the current model operates entirely within practices Google&apos;s
        policies define as violations; the proposed model operates entirely
        within published guidelines.
      </Paragraph>

      <SectionHeading>Implementation</SectionHeading>
      <Paragraph>
        The transition is sequenced across five phases: domain foundation,
        content architecture, content production, channel consolidation, and
        authority building. The existing team is redirected rather than
        replaced, with each department moving from constrained production work
        to strategic, outcome-driven roles. The detailed roadmap is presented
        in Chapter 15.
      </Paragraph>

      <SectionHeading>What This Report Asks of Leadership</SectionHeading>
      <Paragraph>
        This report does not prescribe a course of action. It presents the
        evidence, the architectural alternative, and the implementation sequence
        so that the strategic decision can be made on the basis of a complete
        picture.
      </Paragraph>
      <Paragraph>
        The decision, whether to pursue the transition in whole or in part, at
        what pace, and with what resource allocation, belongs to leadership. The
        role of this report is to ensure that decision is fully informed.
      </Paragraph>
    </main>
  );
}