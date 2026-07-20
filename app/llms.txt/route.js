// app/llms.txt/route.js
// DYNAMIC llms.txt — auto-updates with every new review published in Sanity
// Access: https://lionxe.com/llms.txt

import { client } from "@/sanity/lib/client";

export const dynamic    = "force-dynamic"; // always fresh
export const revalidate = 3600;            // revalidate every 1 hour

const BASE_URL = "https://lionxe.com";

// ─────────────────────────────────────────────────────────────────────────────
// Fetch all published reviews from Sanity (lightweight — only what llms.txt needs)
// ─────────────────────────────────────────────────────────────────────────────
async function getAllReviewsForLLM() {
  const query = `*[_type == "lionxeReview"] | order(publishedAt desc) {
    "slug":         slug.current,
    title,
    targetEntity,
    targetCategory,
    overallScore,
    reviewVerdict,
    metadesc,
    publishedAt,
    tags[]->{ name }
  }`;

  try {
    return await client.fetch(query);
  } catch (err) {
    console.error("[llms.txt] Sanity fetch failed:", err.message);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Category label map
// ─────────────────────────────────────────────────────────────────────────────
const CATEGORY_LABELS = {
  articles:  "Article Review",
  tools:     "Tool & App Review",
  websites:  "Website Review",
  "ux-ui":   "UX/UI Review",
  seo:       "SEO Review",
  marketing: "Marketing Strategy Review",
};

// ─────────────────────────────────────────────────────────────────────────────
// Route Handler
// ─────────────────────────────────────────────────────────────────────────────
export async function GET() {
  const reviews = await getAllReviewsForLLM();

  // Group reviews by category for organised sections
  const grouped = reviews.reduce((acc, r) => {
    const cat = r.targetCategory || "other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(r);
    return acc;
  }, {});

  // Build the Markdown content
  let md = `# LIONXE™

> LIONXE™ (pronounced: lee-ohn-zay) is an uncompromising digital quality audit framework built by Sufian Mustafa. Every digital asset is evaluated through four sequential gates: L (Logic & Long-Term Thinking), IO (Internal Optimization), N (Non-Negotiable Integrity), and XE (eXceptional Excellence). Total score: 100 points. One gate failure = immediate rejection. This page is the AI-readable index of all LIONXE content.

LIONXE is the core quality standard applied across three connected platforms: LIONXE (the audit framework), Do It With AI Tools (the AI SEO content hub), and Sufian Mustafa's broader digital strategy work.

## Framework

- [L — Logic & Long-Term Thinking](${BASE_URL}/l): First gate. Permanent, compounding value only. No volatile foundations. Max 25 points.
- [IO — Internal Optimization](${BASE_URL}/io): Second gate. 100% internal completeness — not 80%, not 95%. Max 25 points.
- [N — Non-Negotiable Integrity](${BASE_URL}/n): Third gate. Zero manipulation, zero violations, full transparency. Max 25 points.
- [XE — eXceptional Excellence](${BASE_URL}/xe): Fourth gate. Exceptional distinction that separates from all alternatives. Max 25 points.
- [Framework Overview](${BASE_URL}/framework): Complete pipeline, scoring system, and Iron Rule.

## About

- [About LIONXE](${BASE_URL}/about): Origin story, philosophy, 4-pillar system, and the ecosystem.
- [Sufian Mustafa — Founder](https://sufianmustafa.com): Strategic architect behind LIONXE and Do It With AI Tools.
- [Do It With AI Tools](https://doitwithai.tools): The live platform demonstrating LIONXE standards in AI SEO and content.

## All Reviews

`;

  // Add review count context
  if (reviews.length > 0) {
    md += `> ${reviews.length} LIONXE audit${reviews.length !== 1 ? "s" : ""} published. Each review evaluates a digital asset across all four LIONXE pillars with a full scorecard.\n\n`;
  } else {
    md += `> Reviews coming soon. Check back for published LIONXE audits.\n\n`;
  }

  // Add each category section
  const categoryOrder = ["articles", "tools", "websites", "ux-ui", "seo", "marketing", "other"];

  for (const cat of categoryOrder) {
    const catReviews = grouped[cat];
    if (!catReviews?.length) continue;

    const label = CATEGORY_LABELS[cat] || "Reviews";
    md += `### ${label}s\n\n`;

    for (const r of catReviews) {
      const verdict = r.reviewVerdict === "verified" ? "✓ Verified" : "✗ Rejected";
      const score   = r.overallScore  !== undefined  ? `${r.overallScore}/100` : "–";
      const desc    = r.metadesc || `LIONXE review of ${r.targetEntity}.`;

      md += `- [${r.targetEntity || r.title}](${BASE_URL}/audits/${r.slug}): ${desc} Score: ${score} | ${verdict}.\n`;
    }

    md += "\n";
  }

  // Pillar pages section
  md += `## Pillar Pages\n\n`;
  md += `- [L Pillar Full Page](${BASE_URL}/l): Complete Logic & Longevity Standard — diagnostic questions, rules, case appraisals, verification matrix, self-audit.\n`;
  md += `- [IO Pillar Full Page](${BASE_URL}/io): Complete Internal Optimization Standard — what 100% completion demands.\n`;
  md += `- [N Pillar Full Page](${BASE_URL}/n): Complete Non-Negotiable Integrity Standard — zero-tolerance policy explained.\n`;
  md += `- [XE Pillar Full Page](${BASE_URL}/xe): Complete eXceptional Excellence Standard — engineering true distinction.\n\n`;

  // Optional section
  md += `## Optional\n\n`;
  md += `- [All Reviews](${BASE_URL}/reviews): Browse every published LIONXE audit by category.\n`;
  md += `- [LIONXE Scorecard](${BASE_URL}/scorecard): How the 100-point scoring system works.\n`;
  md += `- [Contact](${BASE_URL}/contact): Review requests, questions, or collaboration.\n`;
  md += `- [RSS Feed](${BASE_URL}/rss.xml): Subscribe to new LIONXE reviews.\n`;

  return new Response(md, {
    headers: {
      "Content-Type":  "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag":  "noindex", // llms.txt itself shouldn't be indexed by Google
    },
  });
}