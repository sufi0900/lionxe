// app/api/og/route.ts — LIONXE™ Dynamic OG Image Generator
// Bypasses Next.js Windows font resolution bugs with a balanced Vector SVG design

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Support both parameter structures (generic & pillar-specific)
    const title =
      searchParams.get("title") ||
      searchParams.get("pillarName") ||
      "LIONXE™ Framework";
    const subtitle =
      searchParams.get("subtitle") ||
      searchParams.get("tagline") ||
      "";
    const badge =
      searchParams.get("badge") ||
      (searchParams.get("gateNumber") ? `Gate ${searchParams.get("gateNumber")} of 4` : "");
    const law = searchParams.get("law") || "";

    // Brand Palette (#004DFD)
    const BG       = "#080F1D";
    const SURF     = "#0F172A";
    const BRAND    = "#004DFD";
    const BRAND_LT = "#5B8CFF";
    const WHITE    = "#F8FAFC";
    const MUTED    = "#94A3B8";

    // XML Sanitization
    const cleanTitle = escapeXml(title);
    const cleanSubtitle = escapeXml(subtitle);
    const cleanBadge = escapeXml(badge);
    const cleanLaw = escapeXml(law);

    // Dynamic Title Sizing based on length
    const titleFontSize = cleanTitle.length > 45 ? 42 : cleanTitle.length > 25 ? 52 : 62;

    // Pixel-Perfect Balanced Vector Card (1200x630)
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Smooth Ambient Radial Glow (No Hard Circles) -->
          <radialGradient id="topGlow" cx="50%" cy="0%" r="85%">
            <stop offset="0%" stop-color="${BRAND}" stop-opacity="0.35"/>
            <stop offset="50%" stop-color="${BRAND}" stop-opacity="0.08"/>
            <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
          </radialGradient>

          <!-- Brand Accent Gradient -->
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${BRAND}"/>
            <stop offset="100%" stop-color="${BRAND_LT}"/>
          </linearGradient>

          <!-- Grid Background Pattern -->
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${WHITE}" stroke-width="0.5" stroke-opacity="0.04"/>
          </pattern>
        </defs>

        <!-- Base Background -->
        <rect width="1200" height="630" fill="${BG}"/>
        
        <!-- Grid & Glow Overlays -->
        <rect width="1200" height="630" fill="url(#gridPattern)"/>
        <rect width="1200" height="630" fill="url(#topGlow)"/>

        <!-- Left Accent Bar -->
        <rect x="44" y="65" width="4" height="500" rx="2" fill="url(#brandGrad)"/>

        <!-- 1. Top Gate/Pillar Badge (if provided) -->
        ${cleanBadge ? `
          <g transform="translate(600, 130)">
            <rect x="-130" y="-20" width="260" height="40" rx="20" fill="${BRAND}" fill-opacity="0.18" stroke="${BRAND_LT}" stroke-opacity="0.4" stroke-width="1.5"/>
            <text x="0" y="2" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="${BRAND_LT}" text-anchor="middle" dominant-baseline="middle" letter-spacing="2.5">${cleanBadge.toUpperCase()}</text>
          </g>
        ` : ""}

        <!-- 2. LIONXE Brand Line (Icon + Text) -->
        <g transform="translate(600, ${cleanBadge ? 210 : 170})">
          <rect x="-105" y="-22" width="44" height="44" rx="10" fill="url(#brandGrad)"/>
          <text x="-83" y="1" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">L</text>
          <text x="-48" y="1" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="${BRAND_LT}" text-anchor="start" dominant-baseline="middle" letter-spacing="-0.5">LIONXE™</text>
        </g>

        <!-- 3. Primary Title -->
        <text x="600" y="${cleanBadge ? 315 : 290}" font-family="system-ui, -apple-system, sans-serif" font-size="${titleFontSize}" font-weight="900" fill="${WHITE}" text-anchor="middle" dominant-baseline="middle" letter-spacing="-1.5">
          ${cleanTitle}
        </text>

        <!-- 4. Subtitle (if provided) -->
        ${cleanSubtitle ? `
          <text x="600" y="${cleanBadge ? 390 : 365}" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="${MUTED}" text-anchor="middle" dominant-baseline="middle">
            ${cleanSubtitle}
          </text>
        ` : ""}

        <!-- 5. Governing Law Tag (if provided) -->
        ${cleanLaw ? `
          <g transform="translate(600, ${cleanSubtitle ? 465 : 420})">
            <rect x="-170" y="-18" width="340" height="36" rx="10" fill="${SURF}" stroke="${BRAND_LT}" stroke-opacity="0.3" stroke-width="1"/>
            <text x="0" y="1" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="${BRAND_LT}" text-anchor="middle" dominant-baseline="middle" letter-spacing="1.5">${cleanLaw.toUpperCase()}</text>
          </g>
        ` : ""}

        <!-- 6. Watermark (Bottom Right) -->
        <g transform="translate(1110, 560)">
          <rect x="-110" y="-12" width="16" height="16" rx="4" fill="url(#brandGrad)"/>
          <text x="-82" y="-1" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="${MUTED}">lionxe.com</text>
        </g>
      </svg>
    `.trim();

    return new Response(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error(`OG Image generation error: ${message}`);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}