// app/report/chapter-8/page.tsx
//
// Chapter 8: SEO Strategy and the Absence of Search Optimization.
// Originally numbered Chapter 7 (Site Architecture) before the insertion
// of the new Chapter 7 on AI Symbols and Prohibited Phrases.

import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { DataTable } from "@/components/report/DataTable";
import { CitationCard } from "@/components/report/CitationCard";
import { InlineLink } from "@/components/report/InlineLink";
import { ContrastCards } from "@/components/report/ContrastCards";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

const clusterItems = [
  { title: "How to Choose a Carpet Cleaner", sub: "Cost comparison blog" },
  {
    title: "Best Carpet Cleaning Methods",
    sub: "DIY vs. professional blog",
  },
  { title: "Carpet Stain Removal Guide", sub: "Frequency and tips blog" },
];

export default function Chapter8Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="chapter-8"
        label="Chapter 8: SEO Strategy and the Absence of Search Optimization"
      />

      <ChapterOpener
        chapterNumber={8}
        title="SEO Strategy and the Absence of Search Optimization"
        overview="This chapter examines the company's search engine optimization framework: the keyword strategy, the absence of topic clustering, the missing authority signals, and the gap between the SEO team's current role and what search engine optimization actually requires."
      />

      {/* 8.1 */}
      <SectionHeading>8.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapters 4 through 7 documented the content production system: its
        quality, the tools used to create it, the template imposed on it, and
        the editorial restrictions applied to it. The cumulative finding of
        those chapters is that the content the company publishes is, by the
        standards Google&apos;s systems are designed to evaluate, functionally
        absent as a ranking asset. The phrase &ldquo;content is king&rdquo;
        exists in the industry because content quality is the single most
        important factor in search performance. The content documented in this
        report does not meet that standard.
      </Paragraph>
      <Paragraph>
        This chapter examines the SEO framework into which that content is
        placed. The finding is parallel: the SEO strategy is equally absent.
        There is no keyword clustering, no link acquisition plan, no domain
        authority building, and no optimization work being performed by the
        team responsible for it. The chapter examines each of these gaps in
        turn.
      </Paragraph>

      {/* 8.2 */}
      <SectionHeading>
        8.2 The 720-Row Keyword Sheet and the Absence of Clustering
      </SectionHeading>
      <Paragraph>
        The company&apos;s keyword strategy is organized as a spreadsheet
        containing 720 rows. Each row specifies a primary keyword and a set of
        secondary keywords, and each row is treated as an instruction to produce
        one piece of content targeting that phrase. The rows have no declared
        relationship to one another.
      </Paragraph>

      <MiniHeading>Not a Single-Site Strategy</MiniHeading>
      <Paragraph>
        A critical detail that the flat-list presentation obscures is that these
        720 rows do not serve a single website. The company operates a
        multi-regional portfolio documented in Chapter 3, and the 720 keywords
        are distributed across that portfolio. Individual sites receive a small
        number of blog assignments from the list, typically between five and
        twelve posts per site, depending on the market. The 720 rows are not a
        clustering plan for any one domain. They are a master list from which
        individual sites draw a handful of assignments.
      </Paragraph>
      <Paragraph>
        Within those per-site assignments, there is no documented strategy for
        selecting which parent keyword or pillar keyword cluster a given blog is
        intended to strengthen. The blogs assigned to a site are drawn from the
        sheet and written, one per row, without a plan that connects them into a
        structure designed to build topical authority around the site&apos;s
        core services.
      </Paragraph>

      <MiniHeading>Loose Relevance Without Deep Clustering</MiniHeading>
      <Paragraph>
        Some of the 720 keywords share topical overlap with one another. A
        keyword about carpet stain removal and a keyword about upholstery
        cleaning are not entirely unrelated. This incidental relevance means the
        rows are not 720 completely independent topics. However, incidental
        overlap is not clustering. Industry-leading SEO practitioners do not
        rely on chance topical proximity between spreadsheet rows. They design
        deliberate cluster structures where every supporting page is written
        with the explicit purpose of strengthening a specific parent topic.
      </Paragraph>

      <DataTable
        headers={["Architectural Element", "Present in Documented Network"]}
        align={["left", "center"]}
        rows={[
          {
            cells: [
              "Flat keyword list (720 rows, distributed across portfolio)",
              "Yes",
            ],
          },
          { cells: ["Pillar pages designated for core services", "No"] },
          {
            cells: [
              "Cluster relationships linking blogs to pillar topics",
              "No",
            ],
          },
          {
            cells: [
              "Internal linking strategy connecting related pages",
              "No",
            ],
          },
          { cells: ["Topical hierarchy or content map per site", "No"] },
          { cells: ["External link acquisition plan", "No"] },
        ]}
      />

      {/* 8.3 */}
      <SectionHeading>8.3 How Keyword Clustering Works</SectionHeading>
      <Paragraph>
        Because the documented network contains no clustering strategy, this
        section explains what clustering is, how it functions, and why its
        absence matters. The explanation is kept brief by design. The purpose
        here is to define the problem, not to prescribe a solution.
      </Paragraph>

      <MiniHeading>The Clustering Structure</MiniHeading>
      <Paragraph>
        Keyword clustering begins with the selection of a parent topic: a
        keyword with high search volume and high purchase intent that
        represents a service the business wants to dominate in search results.
        Rather than writing a single blog post targeting that keyword, the
        practitioner creates a comprehensive pillar page covering the topic
        thoroughly, then writes a series of supporting cluster pages, each
        addressing a specific subtopic, question, or variation related to the
        parent.
      </Paragraph>
      <Paragraph>
        Each cluster page links back to the pillar page. The effect is
        cumulative: every piece of content published within the cluster
        strengthens the pillar page&apos;s authority signal for the parent
        keyword. Search engines observe that the site has built a deep,
        interconnected resource around the topic and reward it accordingly.
        The company&apos;s 16 service pages each represent a potential pillar
        topic that could serve as the anchor for this kind of structure.
      </Paragraph>

      {/* ── Clustering Visual — Figure 8.1 ── */}
      <div
        className="avoid-break my-7 overflow-hidden rounded-xl border"
        style={{
          borderColor: "var(--border-grey)",
          boxShadow: "0 4px 14px rgb(10 22 40 / 0.10)",
        }}
      >
        {/* figure header */}
        <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
          <p className="text-xs font-bold tracking-wide text-white">
            FIGURE 8.1 &mdash; HOW KEYWORD CLUSTERING WORKS
          </p>
        </div>

        <div
          className="flex flex-col items-center px-4 py-6 sm:px-6"
          style={{ background: "var(--pale-blue)" }}
        >
          {/* ── Pillar Page ── */}
          <div
            className="rounded-xl px-6 py-4 text-center"
            style={{
              background: "var(--navy)",
              maxWidth: "420px",
              width: "100%",
            }}
          >
            <p
              className="text-[10px] font-bold tracking-widest"
              style={{ color: "var(--light-blue)" }}
            >
              PILLAR PAGE
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              &ldquo;Carpet Cleaning in [City]&rdquo;
            </p>
            <p className="mt-1 text-[11px]" style={{ color: "var(--pale-blue)" }}>
              High Search Volume &middot; High Purchase Intent
            </p>
          </div>

          {/* connector: pillar → label */}
          <div
            className="my-1"
            style={{
              width: "2px",
              height: "18px",
              background: "var(--lionxe-blue)",
            }}
          />

          <p
            className="px-4 text-center text-[10px] font-semibold italic"
            style={{ color: "var(--lionxe-blue)" }}
          >
            Each cluster page links back to the pillar, strengthening its
            authority
          </p>

          {/* connector: label → horizontal bar */}
          <div
            className="my-1"
            style={{
              width: "2px",
              height: "14px",
              background: "var(--lionxe-blue)",
            }}
          />

          {/* horizontal bar */}
          <div
            className="w-full"
            style={{
              maxWidth: "480px",
              height: "2px",
              background: "var(--lionxe-blue)",
            }}
          />

          {/* ── Three cluster columns ── */}
          <div
            className="mt-0 grid w-full grid-cols-1 gap-3 sm:grid-cols-3"
            style={{ maxWidth: "480px" }}
          >
            {clusterItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* vertical drop from horizontal bar */}
                <div
                  style={{
                    width: "2px",
                    height: "14px",
                    background: "var(--lionxe-blue)",
                  }}
                />

                {/* cluster box */}
                <div
                  className="w-full rounded-lg border-2 px-3 py-3 text-center"
                  style={{
                    borderColor: "var(--lionxe-blue)",
                    background: "white",
                  }}
                >
                  <p
                    className="text-[9px] font-bold tracking-widest"
                    style={{ color: "var(--lionxe-blue)" }}
                  >
                    CLUSTER PAGE
                  </p>
                  <p className="mt-1 text-[11px]" style={{ color: "var(--navy)" }}>
                    &ldquo;{item.title}&rdquo;
                  </p>
                </div>

                {/* connector: cluster → sub */}
                <div
                  style={{
                    width: "2px",
                    height: "10px",
                    background: "var(--border-grey)",
                  }}
                />

                {/* sub-cluster box */}
                <div
                  className="w-full rounded border px-2 py-2 text-center"
                  style={{
                    borderColor: "var(--border-grey)",
                    background: "white",
                  }}
                >
                  <p className="text-[10px]" style={{ color: "var(--text-grey)" }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MiniHeading>What the Documented Network Does Instead</MiniHeading>
      <Paragraph>
        The documented network replaces clustering with volume. The 720-row
        keyword sheet produces content at scale, but without structural
        relationships between the pages on any individual site. Blog posts do
        not link upward to the service pages they are meant to support. Service
        pages do not link to the detailed content that would deepen their
        topical coverage. The location-specific variants generated by the swap
        mechanism documented in Chapter 3 create hundreds of URLs, but those
        URLs carry no internal linking strategy connecting them into a coherent
        resource.
      </Paragraph>
      <Paragraph>
        The architecture produces breadth without depth. From the perspective of
        a system evaluating topical authority, each site in the portfolio looks
        like a small collection of isolated blog posts rather than an organized
        body of expertise. Given the content quality issues documented in
        Chapters 4 through 7, even if a clustering structure were imposed on
        these blogs, the thin, templated, AI-derived content would prevent it
        from delivering meaningful ranking improvement. The content problem and
        the structure problem compound each other.
      </Paragraph>

      {/* 8.4 */}
      <SectionHeading>8.4 Keyword Cannibalization</SectionHeading>
      <Paragraph>
        When multiple pages on the same site target the same search intent
        without a structural relationship between them, they compete against each
        other rather than against external competitors. This condition is
        referred to as keyword cannibalization.
      </Paragraph>

      <MiniHeading>How It Occurs in the Documented Network</MiniHeading>
      <Paragraph>
        The 720-row keyword sheet, combined with the location-swap construction
        from Chapter 3, produces a large number of pages that target closely
        related or identical intents. A blog post on a given topic competes with
        the service page covering the same subject, and both compete with the
        location-specific versions of each generated across 104 service areas.
      </Paragraph>
      <Paragraph>
        The result is that for any given query, the search engine must choose
        between multiple pages from the same site, none of which has been
        designated as the primary resource. Without a clear signal from the
        site&apos;s own architecture about which page should be preferred, the
        engine makes the determination itself, often splitting crawl attention
        and ranking signals across several candidates rather than concentrating
        them on one authoritative page.
      </Paragraph>

      <MiniHeading>The Structural Consequence</MiniHeading>
      <Paragraph>
        Cannibalization dilutes the ranking potential of the pages the company
        most needs to perform. Instead of one comprehensive, well-linked resource
        earning the full weight of the site&apos;s authority for a given topic,
        that weight is scattered across dozens of near-identical pages. The pages
        most likely to rank are weakened by competition from within the same
        portfolio.
      </Paragraph>
      <Paragraph>
        This is compounded by the scale documented in Chapter 3. With
        approximately 226,200 URLs across the network, the number of pages
        competing internally for the same set of intents is not a minor
        duplication issue. It is a structural characteristic of the architecture
        itself.
      </Paragraph>

      {/* 8.5 */}
      <SectionHeading>
        8.5 Content, Authority, and the Missing SEO Infrastructure
      </SectionHeading>
      <Paragraph>
        The clustering gap and the cannibalization it produces are symptoms of
        a larger absence: the documented network has no substantive SEO
        strategy. The content is thin (Chapter 4), the tools are misaligned
        (Chapter 5), the template prevents depth (Chapter 6), the grammar
        restrictions strip natural expression (Chapter 7), and the keyword
        structure provides no topical framework (this chapter). This section
        examines what else is missing from the SEO infrastructure.
      </Paragraph>

      <MiniHeading>The Content-Quality Barrier</MiniHeading>
      <Paragraph>
        The phrase &ldquo;content is king&rdquo; is not a marketing slogan. It
        reflects the reality that Google&apos;s ranking systems are designed to
        evaluate the substance, originality, and depth of content above all
        other on-page factors. Every structural improvement the company could
        make to its keyword strategy, its internal linking, or its site
        architecture would produce limited results if the content itself does
        not demonstrate the qualities those systems are built to reward. The
        content documented in Chapters 4 through 7 does not.
      </Paragraph>

      <MiniHeading>On-Page and Technical SEO: Present but Insufficient</MiniHeading>
      <Paragraph>
        The company does perform on-page SEO tasks and technical SEO
        maintenance on its websites. Meta titles, meta descriptions, header
        tags, schema markup, and site speed optimizations are implemented to
        some extent across the portfolio. These tasks are necessary, and their
        presence means the sites are not entirely unoptimized from a technical
        standpoint.
      </Paragraph>
      <Paragraph>
        However, on-page and technical SEO operate within the limits of the
        content they are applied to. Optimizing meta titles and header tags on a
        1,200-word, AI-derived, template-locked blog post that contains no
        original insight does not transform that post into a resource search
        engines will prefer over competing content. Technical optimization on
        thin content is analogous to applying polish to a hollow shell. The
        surface may meet a checklist, but the substance beneath it does not
        satisfy the evaluation criteria that determine ranking.
      </Paragraph>

      <MiniHeading>Domain Authority and the Missing Link Strategy</MiniHeading>
      <Paragraph>
        Domain authority, the measure of a website&apos;s overall credibility
        and ranking potential as perceived by search engines, is built
        primarily through the acquisition of external links from reputable,
        relevant sources. When an independent, authoritative site links to a
        page, that link functions as a third-party endorsement of the
        page&apos;s value. Google&apos;s ranking systems have used link signals
        as a core component of quality evaluation since the introduction of
        PageRank, and Google continues to state that links are among the
        signals it uses to determine relevance and authority.
      </Paragraph>
      <Paragraph>
        The documented network has no workflow, plan, or system for acquiring
        external links. There is no backlink tracking, no outreach process, and
        no resource allocated to building the domain authority that would allow
        the published content to compete for high-value queries. The company is
        investing in producing pages that enter the search ecosystem without the
        authority signal that gives them a realistic chance of ranking.
      </Paragraph>

      <CitationCard
        quote="Every page you care about should have a link from at least one other page on your site. Think about what other resources on your site could help your readers understand a given page on your site, and link to those pages in context."
        sourceLabel="Google Search Central, SEO Link Best Practices"
        sourceUrl="https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
      />

      <MiniHeading>The SEO Team: Uploading, Not Optimizing</MiniHeading>
      <Paragraph>
        The role of the company&apos;s SEO team, as observable from the
        documented workflow, is not search engine optimization. It is content
        uploading. The SEO team receives the blogs produced by the content
        pipeline, uploads them to the appropriate websites, and applies the
        on-page SEO tasks described above. This is a repetitive, high-volume
        task that consumes the team&apos;s entire operational capacity.
      </Paragraph>
      <Paragraph>
        The name of the function is &ldquo;search engine
        optimization.&rdquo; The word &ldquo;optimization&rdquo; implies
        analysis, strategy, refinement, and improvement. The documented
        workflow allocates none of the SEO team&apos;s time to these
        activities. The volume of content being produced is so high that the
        team spends all of its available hours processing uploads. There is no
        remaining capacity for the work that would actually improve the
        portfolio&apos;s search performance: competitive analysis, keyword
        research refinement, clustering strategy, link acquisition, or
        performance monitoring and iteration.
      </Paragraph>

      <ContrastCards
        figureNumber="8.2"
        title="What the SEO Team Does vs. What SEO Requires"
        leftLabel="CURRENT ROLE: CONTENT UPLOADING"
        leftBody="The SEO team receives finished blogs from the content pipeline, uploads them to the appropriate sites, and applies on-page SEO tasks. This repetitive, high-volume process consumes the team's entire operational capacity."
        rightLabel="WHAT SEO ACTUALLY REQUIRES"
        rightBody="Competitive analysis, keyword research and clustering strategy, internal link architecture, external link acquisition, performance monitoring, content quality oversight, and iterative optimization based on ranking data."
      />

      {/* 8.6 */}
      <SectionHeading>8.6 Scope and Confidence of These Findings</SectionHeading>
      <Paragraph>
        The 720-row keyword sheet, the absence of pillar-cluster relationships,
        the lack of internal linking strategy, the absence of an external link
        acquisition plan, and the SEO team&apos;s operational role are directly
        observable in the company&apos;s documented workflow and site
        architecture. The per-site allocation of five to twelve blogs from the
        master list is directly observable in the distribution of published
        content across the portfolio.
      </Paragraph>
      <Paragraph>
        The concept of keyword clustering, the function of internal linking,
        the role of external links in ranking, and the importance of domain
        authority are well established in Google&apos;s published documentation
        and in the broader body of search evaluation research. Google&apos;s
        guidance on link best practices is cited directly.
      </Paragraph>
      <Paragraph>
        The observation that the documented architecture produces keyword
        cannibalization follows from the structure itself: a flat list of
        keyword targets, combined with the location-swap mechanism, produces
        multiple pages per site targeting identical or closely related intents
        without structural differentiation. This is a structural
        characteristic, not a projection.
      </Paragraph>

      {/* 8.7 */}
      <SectionHeading>8.7 Summary of Findings</SectionHeading>
      <BulletList
        items={[
          "The 720-row keyword sheet is not a single-site clustering plan. It is a master list distributed across a multi-regional portfolio, with individual sites receiving five to twelve blogs each. There is no documented strategy for which pillar keyword cluster each blog is intended to strengthen.",
          "The network has no keyword clustering structure. Some keywords share incidental topical relevance, but no deliberate cluster design connects supporting content to parent topics. The 16 service pages could serve as pillar pages but do not.",
          "The flat-list model, combined with the location-swap construction from Chapter 3, produces keyword cannibalization: multiple pages on the same site compete for the same intent without a designated primary resource.",
          "Content is the foundation of search performance. The content documented in Chapters 4 through 7 is too thin, templated, and AI-derived to serve that function. Even if a clustering structure existed, the content quality would prevent it from delivering results.",
          "On-page and technical SEO tasks are performed, but optimization applied to thin content produces limited results. No external link acquisition plan, no backlink tracking, and no domain authority building exists.",
          "The SEO team\u2019s role is content uploading, not optimization. The volume of content production consumes all available capacity, leaving no time for the strategic work that search engine optimization actually requires.",
        ]}
      />
      <Paragraph>
        The factors examined in Chapters 3 through 8 concern the web presence:
        its infrastructure, content, tools, structure, editorial constraints,
        and SEO framework. The next chapter examines a parallel channel: the
        company&apos;s video and social media strategy, where the same patterns
        of volume, automation, and structural fragmentation are present across a
        different medium.
      </Paragraph>
    </main>
  );
}