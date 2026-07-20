// scripts/export-pdf.mjs
//
// Optional: use this for batch-exporting multiple chapters from the
// terminal in one go. For single chapters, the "Download PDF" button on
// each chapter page is simpler and doesn't need a terminal at all.
//
// Requires your Next.js dev server running first:
//   npm run dev
// Then in another terminal:
//   node scripts/export-pdf.mjs chapter-1 "Chapter 1: Enterprise Profile"

import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

function findChromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/microsoft-edge",
  ].filter(Boolean);
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error("No Chrome or Edge found. Set CHROME_PATH in your environment.");
}

const slug = process.argv[2];
const chapterLabel = process.argv[3] ?? slug;

if (!slug) {
  console.error('Usage: node scripts/export-pdf.mjs <route-slug> "<Chapter Label>"');
  process.exit(1);
}

const url = `http://localhost:3000/report/${slug}`;
const outPath = path.resolve(`./${slug}.pdf`);

const headerTemplate = `
  <div style="width:100%; font-size:8px; color:#8BA4C4; padding:6px 22mm 0 22mm;
              display:flex; justify-content:space-between; font-family:Helvetica;">
    <span>THE DIGITAL INFRASTRUCTURE AUDIT</span>
    <span>${chapterLabel.toUpperCase()}</span>
  </div>`;

const footerTemplate = `
  <div style="width:100%; font-size:7.5px; color:#8A8A8A; padding:0 22mm 6px 22mm;
              display:flex; justify-content:space-between; font-family:Helvetica;">
    <span>${chapterLabel}</span>
    <span class="pageNumber"></span>
    <span>Strictly Confidential</span>
  </div>`;

const browser = await puppeteer.launch({ executablePath: findChromePath() });
const page = await browser.newPage();

await page.goto(url, { waitUntil: "networkidle0" });

await page.pdf({
  path: outPath,
  format: "A4",
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate,
  footerTemplate,
  margin: { top: "25mm", bottom: "25mm", left: "22mm", right: "22mm" },
});

await browser.close();
console.log(`Saved: ${outPath}`);
