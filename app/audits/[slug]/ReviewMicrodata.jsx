// app/audits/[slug]/ReviewMicrodata.jsx
// Renders inline microdata properties for LIONXE review pages
// Used inside <main itemScope itemType="https://schema.org/Review">

import { urlForImage } from "@/sanity/lib/image";

export default function ReviewMicrodata({ data }) {
  if (!data) return null;

  const imageUrl = data.mainImage ? urlForImage(data.mainImage).url() : null;

  return (
    <>
      {/* Core review identity */}
      <meta itemProp="name"        content={data.schematitle || data.metatitle || data.title || ""} />
      <meta itemProp="description" content={data.schemadesc  || data.metadesc  || data.overview || ""} />
      <meta itemProp="datePublished" content={data.publishedAt || ""} />
      <meta itemProp="dateModified"  content={data._updatedAt || data.publishedAt || ""} />
      <meta itemProp="url"           content={`https://lionxe.com/audits/${data.slug?.current || ""}`} />

      {/* Author (lead auditor) */}
      <div itemProp="author" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content={data.leadAuditor || "Sufian Mustafa"} />
        <meta itemProp="url"  content="https://sufianmustafa.com" />
      </div>

      {/* Publisher (LIONXE) */}
      <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="LIONXE™" />
        <meta itemProp="url"  content="https://lionxe.com" />
        <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
          <meta itemProp="url" content="https://lionxe.com/logo.png" />
        </div>
      </div>

      {/* Overall rating */}
      {data.overallScore !== undefined && (
        <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
          <meta itemProp="ratingValue" content={String(data.overallScore)} />
          <meta itemProp="bestRating"  content="100" />
          <meta itemProp="worstRating" content="0" />
        </div>
      )}

      {/* Item reviewed */}
      {data.targetEntity && (
        <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Thing">
          <meta itemProp="name" content={data.targetEntity} />
          {data.targetDomain && (
            <meta itemProp="url" content={data.targetDomain} />
          )}
        </div>
      )}

      {/* Review body (executive summary preview) */}
      {data.executiveSummary && (
        <meta
          itemProp="reviewBody"
          content={data.executiveSummary.substring(0, 500)}
        />
      )}

      {/* Featured image */}
      {imageUrl && (
        <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
          <meta itemProp="url"    content={imageUrl} />
          <meta itemProp="width"  content="1200" />
          <meta itemProp="height" content="630" />
          {data.mainImage?.alt && (
            <meta itemProp="caption" content={data.mainImage.alt} />
          )}
        </div>
      )}

      {/* Pillar scores as individual ratings */}
      {data.pillarScores && (
        <>
          {data.pillarScores.logicScore !== undefined && (
            <meta
              itemProp="description"
              content={`L (Logic): ${data.pillarScores.logicScore}/25`}
            />
          )}
          {data.pillarScores.optimizationScore !== undefined && (
            <meta
              itemProp="description"
              content={`IO (Optimization): ${data.pillarScores.optimizationScore}/25`}
            />
          )}
          {data.pillarScores.integrityScore !== undefined && (
            <meta
              itemProp="description"
              content={`N (Integrity): ${data.pillarScores.integrityScore}/25`}
            />
          )}
          {data.pillarScores.excellenceScore !== undefined && (
            <meta
              itemProp="description"
              content={`XE (Excellence): ${data.pillarScores.excellenceScore}/25`}
            />
          )}
        </>
      )}

      {/* Review verdict */}
      {data.reviewVerdict && (
        <meta
          itemProp="description"
          content={`Verdict: ${data.reviewVerdict === "verified" ? "LIONXE Verified" : "LIONXE Rejected"}`}
        />
      )}

      {/* Tags as keywords */}
      {data.tags?.length > 0 && (
        <meta
          itemProp="keywords"
          content={data.tags.map((t) => t?.name).filter(Boolean).join(", ")}
        />
      )}
    </>
  );
}
