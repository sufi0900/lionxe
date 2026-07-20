import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | LIONXE™",
  description:
    "Read the LIONXE Terms of Use to understand the rules, limitations, disclaimers, and conditions for using the LIONXE website and digital quality framework.",
  alternates: {
    canonical: "https://lionxe.com/terms",
  },
  openGraph: {
    title: "Terms of Use | LIONXE™",
    description:
      "Understand the rules and conditions for using the LIONXE website and digital quality framework.",
    url: "https://lionxe.com/terms",
    siteName: "LIONXE™",
    type: "website",
  },
};

const lastUpdated = "May 29, 2026";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white">
        {title}
      </h2>

      <div className="space-y-4 text-base leading-8 text-slate-300">
        {children}
      </div>
    </section>
  );
};

const BulletList = ({ items }: { items: string[] }) => {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-300">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-sm bg-[#5271FF] shadow-[0_0_12px_rgba(82,113,255,0.7)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const TermsOfUsePage = () => {
  return (
    <main className="relative overflow-hidden bg-[#050B1F] text-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#014FFD]/10 blur-[120px]"
      />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)]
          bg-[size:56px_56px]
        "
      />

      <section className="relative mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-10 text-center">
          <p className="mb-4 inline-flex rounded-full border border-[#5271FF]/30 bg-[#014FFD]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8EA7FF]">
            Operational Framework Rules
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Terms of Use
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            These Terms of Use explain the rules and conditions for accessing
            the LIONXE™ website, framework content, reviews, resources, and
            related digital engineering materials.
          </p>

          <p className="mt-4 text-sm font-semibold text-[#8EA7FF]">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content card */}
        <div
          className="
            rounded-3xl border border-white/10 bg-[#071127]/95
            p-6 shadow-[0_24px_90px_rgba(0,0,0,0.45)]
            sm:p-8 lg:p-10
          "
        >
          <div className="space-y-10">
            <Section title="1. Acceptance of These Terms">
              <p>
                By accessing or using <strong>LIONXE™</strong>, you agree to be
                bound by these Terms of Use. If you do not agree with these
                terms, you should not navigate or exploit this platform.
              </p>

              <p>
                These terms apply universally to all visitors, readers, users, and automated 
                systems that interface with the LIONXE™ architecture, metrics, framework documentation, 
                and published resource repositories.
              </p>
            </Section>

            <Section title="2. The Architecture Ecosystem & Ownership">
              <p>
                LIONXE™ is an elite digital quality evaluation framework engineered and owned by{" "}
                <Link
                  href="https://sufianmustafa.com"
                  target="_blank"
                  className="font-semibold text-[#8EA7FF] underline underline-offset-4 hover:text-[#5271FF]"
                >
                  Sufian Mustafa
                </Link>
                , a multi-disciplinary Digital Ecosystem Architect. The ecosystem functions as the 
                foundational governance blueprint for digital properties under its operational deployment, including{" "}
                <Link
                  href="https://doitwithai.tools"
                  target="_blank"
                  className="font-semibold text-[#8EA7FF] underline underline-offset-4 hover:text-[#5271FF]"
                >
                  Do It With AI Tools™
                </Link>
                , establishing objective code validation guidelines, systemic SEO structures, and algorithmic AI visibility auditing methodologies.
              </p>

              <p>
                Official Domain Profile:{" "}
                <Link
                  href="https://lionxe.com"
                  className="font-semibold text-[#8EA7FF] underline-offset-4 hover:underline"
                >
                  https://lionxe.com
                </Link>
              </p>
            </Section>

            <Section title="3. Authorized Platform Utilization">
              <p>
                You may use this framework for lawful, educational, professional, and performance-auditing 
                purposes only. Any attempt to compromise system integrity will trigger access restrictions.
              </p>

              <p>You explicitly agree not to use LIONXE™ to:</p>

              <BulletList
                items={[
                  "Violate any global data privacy law, web regulation, or third-party intellectual property right",
                  "Attempt to compromise, stress-test, flood with malicious queries, or inject malicious payloads into the server infrastructure",
                  "Scrape, harvest, or extract framework criteria, algorithmic text scoring metrics, or design tokens for model ingestion or competitive republication without written authority",
                  "Misrepresent LIONXE structural evaluations, scorecards, quality indices, or foundational audit conclusions",
                  "Deploy deceitful traffic routing methods, automated tracking loops, or dark pattern data extractors",
                  "Impersonate the LIONXE platform, its properties, or its founder Sufian Mustafa",
                  "Scrub or isolate copyright, trademark watermarks, or origin attribution tags from our audit sheets and graphics",
                ]}
              />
            </Section>

            <Section title="4. Core Intellectual Property Protection">
              <p>
                All structural elements running on LIONXE™, including our core 100-point auditing structures, evaluation metrics, 
                the conceptual four pillars (Logic, Internal Optimization, Non-Negotiable Integrity, eXceptional Excellence), 
                interface layouts, graphic components, custom code templates, and system branding, remain the exclusive intellectual property of Sufian Mustafa.
              </p>

              <p>
                You are encouraged to share direct hyperlinked references to our research pages and tools. However, reproducing, repackaging, 
                selling, licensing, or designing derivative software products based on the proprietary LIONXE™ structural scorecard layout 
                is strictly forbidden without an explicit enterprise licensing agreement.
              </p>
            </Section>

            <Section title="5. Scope of Framework Valuations & Audits">
              <p>
                LIONXE™ metrics, reviews, speed tests, optimization scores, and structural analysis documents are compiled for advanced 
                technical guidance and architectural evaluation.
              </p>

              <p>
                An absolute 100% optimization score or successful passing audit inside our ecosystem does not guarantee linear financial success, 
                immediate search index placement shifts, revenue curves, or permanent cross-platform indexing safety. Algorithmic environments 
                evolve consistently, and our output should be treated as engineering suggestions.
              </p>

              <p>
                We reserve the operational right to adjust, replace, alter, expand, or wipe out scoring thresholds, weights, verification loops, 
                and platform audit guidelines at any moment to adapt to modern technology updates.
              </p>
            </Section>

            <Section title="6. No Professional Advice Disclaimer">
              <p>
                The deep technical insights across our platform touch upon Core Web Vitals, semantic data parsing, AI indexing schemas, search parameters, 
                and growth code configuration. This data does not constitute formal legal counsel, corporate financial advisory, or regulated professional tech-consulting contracts.
              </p>

              <p>
                All software deployment steps and strategic optimization choices you carry out are executed at your own discretion. You carry sole 
                accountability for validating script implementations against your specific infrastructure needs.
              </p>
            </Section>

            <Section title="7. Evolution & Accuracy of Performance Metrics">
              <p>
                While we strive for absolute accuracy in data tracking and auditing protocols, systems update continuously. External digital tools, 
                search engines, foundational web layouts, LLM crawlers, and API endpoints alter parameters without notice. LIONXE™ does not assume 
                liability for layout errors or out-of-date documentation caused by rapid adjustments in upstream open-source frameworks.
              </p>
            </Section>

            <Section title="8. Edge Proxies and External Ecosystem Integrations">
              <p>
                LIONXE™ may interface with or hyperlink to external tools, sandbox testing environments, software assets, or specialized optimization resources. 
                These paths are offered strictly for developer convenience and architectural reference. We maintain zero ownership over, and hold zero responsibility 
                for, the backend processing code, hidden tracking scripts, price structures, or security vulnerabilities of external domains.
              </p>
            </Section>

            <Section title="9. Strategic Affiliate and Partnership Commitments">
              <p>
                To maintain our third pillar of <strong>Non-Negotiable Integrity</strong>, we enforce maximum disclosure. Select sections of our educational material 
                or review tracks may incorporate specialized affiliate pipelines or premium tool partnerships. If you opt to integrate those tools, LIONXE™ may receive 
                a technical commission from the provider.
              </p>
              <p>
                We never artificially inflate an enterprise score or downgrade a platform's performance evaluation to fit monetary goals. Every critique remains strictly 
                anchored by empirical code performance data and system tests.
              </p>
            </Section>

            <Section title="10. User Testing Material and Source Input Rights">
              <p>
                When you input code repositories, page metrics, metadata parameters, or layout files to execute an architectural diagnostic test on LIONXE™, 
                you confirm that you possess the legitimate authorization and access rights to process that platform asset.
              </p>

              <p>
                You grant LIONXE™ the secure, isolated processing permission required to execute calculations, map DOM elements, render templates, 
                and display audit summaries back to you. We do not retain or store your underlying custom code blocks once your analysis is finalized.
              </p>
            </Section>

            <Section title="11. System Privacy Baseline">
              <p>
                Your general platform access conditions are backed up by our strict data protocols. Please read through our official{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-[#8EA7FF] underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                to check how our infrastructure processes technical diagnostic paths without breaching privacy thresholds.
              </p>
            </Section>

            <Section title="12. Explicit Disclaimer of Warranties">
              <p>
                LIONXE™ is distributed strictly on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; runtime baseline. We offer no warranties of any kind, 
                express or implied, including but not limited to warranties of structural merchantability, system operational uptime, absolute layout rendering 
                accuracy, or security patches. We do not certify that platform resources will stay permanently accessible or completely virus-free.
              </p>
            </Section>

            <Section title="13. Strict Limitation of Liability">
              <p>
                To the maximum limit authorized under global law, LIONXE™, its founder Sufian Mustafa, and its affiliated operating properties 
                will never be held accountable for any indirect, unintended, incidental, or consequential damages. This includes, without limitation, 
                sudden drops in crawl rankings, server downtime costs, revenue loss, data corruption, domain name penalties, or operational traffic losses 
                linked to your use or inability to leverage our optimization framework.
              </p>
            </Section>

            <Section title="14. Indemnification Clause">
              <p>
                You agree to fully defend, protect, indemnify, and hold harmless LIONXE™, its development team, and its founder from any third-party legal claims, 
                liabilities, losses, architectural damage, or operational outlays (including developer investigation fees) sparked by your abuse of this ecosystem, 
                unauthorized code inputs, or direct infractions against these stated rules.
              </p>
            </Section>

            <Section title="15. Systematic Conditions Upgrades">
              <p>
                We alter these Terms of Use instantly as underlying digital frameworks and AI data scraping technologies transform. Any adjustments made update the 
                active date visible at the top of this portal. Continued navigation of our materials constitutes your agreement to the updated operational rules.
              </p>
            </Section>

            <Section title="16. Temporary or Absolute Access Bans">
              <p>
                We reserve the unilateral system right to instantly ban, place on IP denial filters, or revoke resource access paths for any client signature 
                found deploying malicious scrapers, committing asset theft, trying to reverse engineer our auditing scripts, or threatening the baseline stability 
                of our digital platforms.
              </p>
            </Section>

            <Section title="17. Global Architecture Governance & Jurisdiction">
              <p>
                These Terms of Use are interpreted and applied according to standard global commercial frameworks and internet data compliance procedures. 
                Any foundational dispute, disagreement, or contractual arbitration arising out of your utilization of LIONXE™ will be processed exclusively through 
                the direct corporate dispute channels established by the platform owner's operational base.
              </p>
            </Section>

            <Section title="18. Direct Architectural Consultation">
              <p>
                If you seek clear technical clarification regarding our structural constraints, need an enterprise framework usage license, or require deep-level audit adjustments, connect directly via our communication lines:
              </p>

              <div className="rounded-2xl border border-[#5271FF]/25 bg-[#014FFD]/10 p-5">
                <p>
                  Engineering Mail:{" "}
                  <a
                    href="mailto:contact@lionxe.com"
                    className="font-semibold text-[#8EA7FF] underline-offset-4 hover:underline"
                  >
                    contact@lionxe.com
                  </a>
                </p>

                <p className="mt-2">
                  Technical Architecture Hub:{" "}
                  <Link
                    href="https://lionxe.com/contact"
                    className="font-semibold text-[#8EA7FF] underline-offset-4 hover:underline"
                  >
                    https://lionxe.com/contact
                  </Link>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfUsePage;