// app/report/full-report/page.tsx
// Complete report: cover → exec summary → ToC → chapters 1–16.
// One Download PDF button triggers the full document.

export const dynamic = "force-dynamic";
import "@/styles/report.css";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";
import CoverPage from "@/app/report/cover/page";
import ExecutiveSummaryPage from "@/app/report/executive-summary/page";
import { TableOfContentsContent } from "@/app/report/table-of-contents/page";
import Chapter1Page from "@/app/report/chapter-1/page";
import Chapter2Page from "@/app/report/chapter-2/page";
import Chapter3Page from "@/app/report/chapter-3/page";
import Chapter4Page from "@/app/report/chapter-4/page";
import Chapter5Page from "@/app/report/chapter-5/page";
import Chapter6Page from "@/app/report/chapter-6/page";
import Chapter7Page from "@/app/report/chapter-7/page";
import Chapter8Page from "@/app/report/chapter-8/page";
import Chapter9Page from "@/app/report/chapter-9/page";
import Chapter10Page from "@/app/report/chapter-10/page";
import Chapter11Page from "@/app/report/chapter-11/page";
import Chapter12Page from "@/app/report/chapter-12/page";
import Chapter13Page from "@/app/report/chapter-13/page";
import Chapter14Page from "@/app/report/chapter-14/page";
import Chapter15Page from "@/app/report/chapter-15/page";
import Chapter16Page from "@/app/report/chapter-16/page";

export default function FullReportPage() {
  return (
    <div>
      <div className="no-print fixed right-6 top-6 z-50">
        <DownloadPdfButton slug="full-report" label="Download Full Report PDF" />
      </div>
      <div id="cover" className="print-break"><CoverPage /></div>
      <div id="executive-summary" className="print-break"><ExecutiveSummaryPage /></div>
      <div id="table-of-contents" className="print-break report-shell"><TableOfContentsContent /></div>
      <div id="chapter-1" className="print-break"><Chapter1Page /></div>
      <div id="chapter-2" className="print-break"><Chapter2Page /></div>
      <div id="chapter-3" className="print-break"><Chapter3Page /></div>
      <div id="chapter-4" className="print-break"><Chapter4Page /></div>
      <div id="chapter-5" className="print-break"><Chapter5Page /></div>
      <div id="chapter-6" className="print-break"><Chapter6Page /></div>
      <div id="chapter-7" className="print-break"><Chapter7Page /></div>
      <div id="chapter-8" className="print-break"><Chapter8Page /></div>
      <div id="chapter-9" className="print-break"><Chapter9Page /></div>
      <div id="chapter-10" className="print-break"><Chapter10Page /></div>
      <div id="chapter-11" className="print-break"><Chapter11Page /></div>
      <div id="chapter-12" className="print-break"><Chapter12Page /></div>
      <div id="chapter-13" className="print-break"><Chapter13Page /></div>
      <div id="chapter-14" className="print-break"><Chapter14Page /></div>
      <div id="chapter-15" className="print-break"><Chapter15Page /></div>
      <div id="chapter-16" className="print-break"><Chapter16Page /></div>
    </div>
  );
}