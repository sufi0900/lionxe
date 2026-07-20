// app/report/chapter-7/page.tsx
//
// NEW Chapter 7: AI Symbols, Prohibited Phrases, and the Fear-Driven
// Workflow. This chapter was missing from the first draft sequence and
// sits between Chapter 6 (Template Uniformity) and the chapter on Site
// Architecture (now Chapter 8).
//
// NOTE ON RENUMBERING: This insertion shifts all subsequent chapters by
// +1. The old Chapter 7 (Site Architecture) becomes Chapter 8, old
// Chapter 8 (Social Media) becomes Chapter 9, and so on through to the
// conclusion. File renames and cross-reference updates should be applied
// as a separate pass after this content is confirmed.

import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { CitationCard } from "@/components/report/CitationCard";
import { ContrastCards } from "@/components/report/ContrastCards";
import { DataTable } from "@/components/report/DataTable";
import { InlineLink } from "@/components/report/InlineLink";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";
import { Screenshot } from "@/components/report/Screenshot";

export default function Chapter7Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="chapter-7"
        label="Chapter 7: AI Symbols, Prohibited Phrases, and the Fear-Driven Workflow"
      />

      <ChapterOpener
        chapterNumber={7}
        title="AI Symbols, Prohibited Phrases, and the Fear-Driven Workflow"
        overview="This chapter examines the company's decision to prohibit specific elements of standard English grammar from its content, not because they harm quality, but because automated language models use them frequently, and what that restriction reveals about the relationship between the company and the tools it uses."
      />

      {/* 7.1 */}
      <SectionHeading>7.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapter 5 examined the assumption that third-party AI detection scores
        influence ranking, and demonstrated through observable evidence that they
        do not. Chapter 6 documented the rigid template imposed on every blog
        post. This chapter examines a related consequence of the same fear: the
        company&apos;s decision to prohibit specific elements of standard
        English grammar from its content.
      </Paragraph>
      <Paragraph>
        The prohibition extends to punctuation marks, structural connectors, and
        commonly used phrases. The restriction is applied as a blanket editorial
        rule across all content production, regardless of context or topic.
      </Paragraph>

      {/* 7.2 */}
      <SectionHeading>7.2 The Prohibited Elements</SectionHeading>
      <Paragraph>
        The company&apos;s content workflow includes explicit editorial
        restrictions banning specific grammatical elements from published
        content. These restrictions are not based on style preferences or
        audience research. They exist because the prohibited elements are
        associated with AI-generated output.
      </Paragraph>

      <MiniHeading>Punctuation</MiniHeading>
      <Paragraph>
        The most prominent restriction targets the em dash, a standard English
        punctuation mark used to insert a parenthetical remark, add emphasis, or
        introduce a clarification within a sentence. The company treats its
        presence in published content as grounds for revision, because automated
        language models generate em dashes frequently.
      </Paragraph>
      <Paragraph>
        The same restriction extends to semicolons, which connect closely
        related independent clauses, and to colons used for introducing lists or
        explanations. All three are standard components of written English that
        predate the existence of AI by centuries.
      </Paragraph>

      <DataTable
        headers={[
          "Prohibited Element",
          "Standard Grammatical Function",
          "Company's Reason for Restriction",
        ]}
        rows={[
          {
            cells: [
              "Em dash",
              "Parenthetical remarks, emphasis, clarification",
              "Frequently appears in AI-generated text",
            ],
          },
          {
            cells: [
              "Semicolon",
              "Connecting closely related independent clauses",
              "Frequently appears in AI-generated text",
            ],
          },
          {
            cells: [
              "Colon",
              "Introducing lists, explanations, or elaborations",
              "Frequently appears in AI-generated text",
            ],
          },
          {
            cells: [
              "Certain transitional phrases",
              "Structural connectors between ideas",
              "Perceived as AI indicators",
            ],
          },
        ]}
        flagText="AI"
      />

      <MiniHeading>Phrases and Structural Patterns</MiniHeading>
      <Paragraph>
        Beyond punctuation, the workflow restricts certain transitional phrases,
        structural connectors, and vocabulary choices perceived as AI
        indicators. The effect is a narrowing of the writer&apos;s available
        toolkit: the template is fixed (Chapter 6), the keyword placement is
        dictated (Chapter 4), and the range of permissible English grammar is
        artificially reduced.
      </Paragraph>

      {/* 7.3 */}
      <SectionHeading>7.3 The Origin of the Restriction</SectionHeading>
      <Paragraph>
        The restriction does not originate from a style guide, a readability
        standard, or reader feedback. It originates from the same fear
        documented in Chapter 5, Section 5.7: the belief that AI detection tools
        will flag the content, and that being flagged will result in a search
        penalty.
      </Paragraph>

      <MiniHeading>The Logic Behind the Ban</MiniHeading>
      <Paragraph>
        The reasoning is sequential: automated language models use em dashes
        frequently, third-party detection tools look for patterns associated
        with AI output, therefore removing em dashes reduces the chance of being
        flagged. The same reasoning applies to semicolons, colons, and certain
        transitional phrases.
      </Paragraph>

      <MiniHeading>Where the Logic Fails</MiniHeading>
      <Paragraph>
        The reasoning fails at every step. As documented in Chapter 5,
        third-party detection scores do not influence Google&apos;s ranking
        decisions. The tools that produce those scores are unreliable, with the
        creator of the most widely used language model abandoning its own
        detector after achieving only 26 percent accuracy.
      </Paragraph>

      <CitationCard
        quote="We are updating our AI text classifier to include the latest model, and due to its low rate of accuracy, we are instead researching more effective ways to help people identify AI-generated content. We are no longer offering the AI text classifier."
        sourceLabel="OpenAI, AI Text Classifier Update (Discontinuation Notice)"
        sourceUrl="https://openai.com/blog/ai-text-classifier-update"
      />

      <Paragraph>
        The elements being banned are features of standard English grammar, not
        signatures of artificial intelligence. Em dashes, semicolons, and colons
        were established in written English centuries before automated language
        models existed. Banning them on the basis that an AI tool also produces
        them is logically equivalent to banning the most frequently used
        letters in the alphabet because automated text contains them more often
        than any human writer would intentionally produce.
      </Paragraph>

      {/* 7.4 */}
      <SectionHeading>
        7.4 What Industry Leaders Actually Do
      </SectionHeading>
      <Paragraph>
        The evidence from the search results themselves, the same evidence
        examined in Chapter 5, directly contradicts the company&apos;s editorial
        restriction.
      </Paragraph>

      <MiniHeading>The Search Engine Land Example</MiniHeading>
      <Paragraph>
        The{" "}
        <InlineLink href="https://searchengineland.com/guide/what-is-ai-seo">
          Search Engine Land article
        </InlineLink>{" "}
        ranking at the top of Google for the high-difficulty query &ldquo;what is
        AI SEO,&rdquo; written by <InlineLink href="https://searchengineland.com/author/veruska-anconitano">Veruska Anconitano</InlineLink>, uses em dashes
        approximately 24 times within a single article. The article ranks at the
        top regardless of its use of a punctuation mark the company has banned.
      </Paragraph>
      <Paragraph>
        The editorial team at Search Engine Land does not restrict its
        writers&apos; use of standard punctuation because their content is built
        on original insights and genuine expertise. Their authority comes from
        what the content says, not from which punctuation marks it avoids.
      </Paragraph>
<Screenshot
        src="/report-assets/chapter-7/What-Is-AI-SEO-How-Artificial-Intelligence-Is-Changing-Search-Optimization.png"
        alt=""
        caption=""
      />
      <MiniHeading>How Industry Leaders Relate to AI</MiniHeading>
      <Paragraph>
        The distinction becomes clearer when examining how high-authority
        publishers and subject-matter experts actually interact with AI tools.
        Industry leaders do not allow AI to dominate their workflow. They
        dominate AI. Their content originates from their own research, their own
        expertise, and their own analytical judgment. When they use AI at all,
        it serves a subordinate function, assisting with tasks like rechecking
        facts, identifying gaps in coverage, or generating reference leads. The
        content itself is written by the expert, not by the machine.
      </Paragraph>
      <Paragraph>
        This confidence produces a fundamentally different relationship with
        formatting and with detection. An expert who has conducted original
        research and written genuine insights does not worry about whether em
        dashes, semicolons, colons, or bold text appear in the final output.
        These elements arise naturally from the writing process, and the writer
        is confident that the content is original because it is. The focus of
        industry-leading content is research depth, comprehensiveness, and the
        inclusion of information readers cannot find elsewhere. When a domain
        expert writes from firsthand knowledge, they can ask AI to verify
        citations or check references, because they know their insights are
        their own and there is nothing to disguise.
      </Paragraph>

      <CitationCard
        quote="Using AI doesn't give content any special gains. It's just content. If it is useful, helpful, original, and satisfies aspects of E-E-A-T, it might do well in Search. If it doesn't, it might not."
        sourceLabel="Google Search Central Blog, Google Search's Guidance About AI-Generated Content"
        sourceUrl="https://developers.google.com/search/blog/2023/02/google-search-and-ai-content"
      />

      <MiniHeading>The Broader Pattern</MiniHeading>
      <Paragraph>
        The same pattern holds across authoritative publications in every
        industry. High-authority sites use the full range of English grammar
        naturally, because they are not afraid of detection. They are not afraid
        of detection because their content is built on original value, not on
        automated generation that needs to be disguised.
      </Paragraph>
      <Paragraph>
        As one widely discussed analysis of AI punctuation patterns{" "}
        <InlineLink href="https://www.seangoedecke.com/em-dashes/">
          observed
        </InlineLink>
        , the presence of em dashes in text is a stylistic choice, not an
        authorship signal. The mark exists because it serves a communicative
        function in English, not because a machine invented it.
      </Paragraph>

      {/* 7.5 */}
      <SectionHeading>7.5 What the Restriction Reveals</SectionHeading>
      <Paragraph>
        The prohibition of standard grammar tells a specific story about the
        relationship between the company and the tools it uses.
      </Paragraph>

      <ContrastCards
        figureNumber="7.1"
        title="Two Approaches to Content Authority"
        leftLabel="Fear-Driven Approach (Current Workflow)"
        leftBody="Content originates from an automated draft. The writer's role is to rephrase AI output within rigid constraints. Grammar restrictions are imposed to reduce detection risk. The focus is on avoiding patterns, not on building value."
        rightLabel="Expert-Driven Approach (Industry Standard)"
        rightBody="Content originates from the writer's own research, expertise, and analysis. AI, if used at all, serves a subordinate role in fact-checking or reference gathering. Standard grammar is used freely. The focus is on depth, comprehensiveness, and original insight."
      />

      <MiniHeading>AI Dominating the Workflow</MiniHeading>
      <Paragraph>
        The restriction means that the company&apos;s editorial rules are being
        set by the characteristics of an automated tool rather than by the needs
        of the reader or the standards of the language. The tool&apos;s output
        patterns have become the basis for banning elements of English grammar.
        In effect, AI is dictating what the writers are allowed to write.
      </Paragraph>

      <MiniHeading>The Reverse of the Intended Relationship</MiniHeading>
      <Paragraph>
        The stated goal of the content workflow is to produce content that
        appears human-written. The actual effect is the opposite: it produces
        content that is artificially constrained, unnaturally stripped of
        standard punctuation, and shaped by what a detection tool is less likely
        to flag rather than by what communicates best.
      </Paragraph>
      <Paragraph>
        The content does not read as naturally human-written. It reads as
        artificially limited. A writer who is permitted to use the full range of
        English grammar writes more naturally than a writer who must avoid
        specific marks because a machine also uses them.
      </Paragraph>

      {/* 7.6 */}
      <SectionHeading>7.6 The Connection to Quality</SectionHeading>
      <Paragraph>
        The restriction does not exist in isolation. It compounds the quality
        constraints documented in the previous chapters.
      </Paragraph>

      <MiniHeading>The Cumulative Constraint</MiniHeading>
      <Paragraph>
        A writer operating within the documented workflow produces content under
        the following simultaneous restrictions:
      </Paragraph>
      <DataTable
        headers={["Constraint", "Source", "Impact on Writer"]}
        rows={[
          {
            cells: [
              "1,200-word ceiling",
              "Chapter 4",
              "Prevents depth, comprehensiveness, or topic coverage beyond surface level",
            ],
          },
          {
            cells: [
              "Keyword repetition at 13.7% of words",
              "Chapter 4",
              "Consumes available word count on repetitive insertion rather than information",
            ],
          },
          {
            cells: [
              "Rigid six-stage template",
              "Chapter 6",
              "No structural flexibility; every post follows identical sequence",
            ],
          },
          {
            cells: [
              "Automated draft-to-humanizer pipeline",
              "Chapter 5",
              "No original-research stage; writer rephrases rather than creates",
            ],
          },
          {
            cells: [
              "Ban on standard punctuation and phrases",
              "This chapter",
              "Artificially narrows the range of natural English expression",
            ],
          },
        ]}
      />
      <Paragraph>
        The space remaining for genuine, naturally written, reader-focused
        content, after all of these constraints are applied, is minimal. The
        role assigned to the writer within this system is not one of expertise,
        creativity, or editorial judgment. It is functionally equivalent to a
        data entry or repetitive task position: the writer receives a fixed
        template and a fixed pattern, fills in text according to those
        parameters, and delivers the output without exercising independent
        analytical input. The writer is not expected to possess subject-matter
        expertise. The writer is expected to follow instructions.
      </Paragraph>
      <Paragraph>
        This distinction matters because Google&apos;s ranking systems are
        designed to evaluate the qualities that this workflow eliminates. A
        writer who cannot exercise expertise, cannot pursue depth, and cannot
        deviate from a template cannot produce the signals of genuine
        authoritativeness that Google&apos;s documentation describes as ranking
        factors.
      </Paragraph>

      <CitationCard
        quote="Is the content mass-produced by or outsourced to a large number of creators, or spread across a large network of sites, so that individual pages or sites don't get as much attention or care?"
        sourceLabel="Google Search Central, Creating Helpful, Reliable, People-First Content"
        sourceUrl="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      />

      <MiniHeading>What Google Actually Evaluates</MiniHeading>
      <Paragraph>
        Google&apos;s ranking systems evaluate whether content demonstrates
        experience, expertise, authoritativeness, and trustworthiness, a
        framework the company refers to as E-E-A-T. These qualities are
        assessed through the substance of the content itself: whether it
        provides original information, whether it demonstrates first-hand
        experience, whether the author or publisher has established
        credibility on the topic, and whether readers can trust the
        information presented.
      </Paragraph>

      <CitationCard
        quote="E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. These qualities are important considerations when assessing the quality of a page. Google's automated systems are designed to identify signals of E-E-A-T to help surface the most reliable and helpful information."
        sourceLabel="Google Search Central, E-E-A-T Overview"
        sourceUrl="https://developers.google.com/search/docs/fundamentals/eeat"
      />

      <Paragraph>
        None of these qualities are affected by whether a page contains em
        dashes or semicolons. They are affected by whether the content offers
        genuine insight, original information, and value a reader cannot find
        elsewhere, qualities the cumulative restrictions documented across
        Chapters 4 through 7 systematically prevent.
      </Paragraph>

      {/* 7.7 */}
      <SectionHeading>7.7 Scope and Confidence of These Findings</SectionHeading>
      <Paragraph>
        The editorial restrictions on punctuation marks and phrases are directly
        observable in the company&apos;s documented content workflow and
        editorial guidelines. The use of em dashes in the Search Engine Land
        article is directly verifiable by reviewing the published article.
      </Paragraph>
      <Paragraph>
        The connection between the restriction and the fear of AI detection
        follows from the stated reasoning within the workflow. The observation
        that the restriction compounds the quality constraints documented in
        earlier chapters follows from the cumulative nature of the restrictions.
      </Paragraph>

      {/* 7.8 */}
      <SectionHeading>7.8 Summary of Findings</SectionHeading>
      <BulletList
        items={[
          "The content workflow prohibits em dashes, semicolons, and certain transitional phrases from published content, not based on style or readability standards, but because automated language models use them frequently.",
          "The restriction originates from the same fear documented in Chapter 5: the belief that AI detection scores influence ranking. That belief is inconsistent with the evidence, including OpenAI's own discontinuation of its detection tool due to low accuracy.",
          "The top-ranking article for \u201Cwhat is AI SEO\u201D on Search Engine Land uses em dashes approximately 24 times. Industry leaders do not restrict standard grammar because their content is built on original insight, and they dominate AI rather than allowing AI to dominate their workflow.",
          "The restriction reveals that the company\u2019s editorial rules are being set by the characteristics of an automated tool rather than by the needs of the reader. AI is dictating what the writers are allowed to write.",
          "The writer\u2019s role within this system is functionally equivalent to a repetitive task or data entry position: following a fixed template and pattern without exercising subject-matter expertise or editorial judgment.",
          "Combined with the word-count ceiling, keyword repetition, template rigidity, and automated pipeline, the grammar restriction further narrows the space available for naturally written, reader-focused content that demonstrates the E-E-A-T qualities Google\u2019s systems are designed to reward.",
        ]}
      />
      <Paragraph>
        The factors examined in Chapters 4 through 7 concern the content
        production system: its quality, tools, structure, and editorial
        constraints. The phrase &ldquo;content is king&rdquo; exists in the
        industry because content quality is the single most important factor in
        search performance, and the content documented across those chapters
        does not meet that standard. The next chapter examines the SEO
        framework into which this content is placed: the keyword strategy, the
        absence of clustering, the missing authority signals, and the gap
        between the SEO team&apos;s current role and what search engine
        optimization actually requires.
      </Paragraph>
    </main>
  );
}