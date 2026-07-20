/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | LIONXE™",
  description:
    "Read the LIONXE™ Privacy Policy governed by our Non-Negotiable Integrity pillar to understand how we secure, process, and protect your technical data.",
  alternates: {
    canonical: "https://lionxe.com/privacy-policy",
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

const PrivacyPolicyPage = () => {
  return (
    <main className="relative overflow-hidden bg-[#050B1F] text-white">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#014FFD]/10 blur-[120px]"
      />

      {/* Background grid pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)]
          bg-[size:56px_56px]
        "
      />

      <section className="relative mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-4 inline-flex rounded-full border border-[#5271FF]/30 bg-[#014FFD]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8EA7FF]">
            Pillar 3 Compliance Notice
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
            This Privacy Policy details how LIONXE™ processes, secures, and maps user and system data. We reject opaque documentation in favor of 100% system transparency.
          </p>

          <p className="mt-4 text-sm font-semibold text-[#8EA7FF]">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div
          className="
            rounded-3xl border border-white/10 bg-[#071127]/95
            p-6 shadow-[0_24px_90px_rgba(0,0,0,0.45)]
            sm:p-8 lg:p-10
          "
        >
          <div className="space-y-10">
            <Section title="1. The LIONXE™ Framework Ecosystem & Foundation">
              <p>
                LIONXE™ is an engineering-grade digital quality evaluation framework founded by{" "}
                <Link
                  href="https://sufianmustafa.com"
                  target="_blank"
                  className="font-semibold text-[#8EA7FF] underline underline-offset-4 hover:text-[#5271FF]"
                >
                  Sufian Mustafa
                </Link>
                , a multi-disciplinary Digital Ecosystem Architect. Serving as the governance 
                blueprint for digital properties under its deployment, including{" "}
                <Link
                  href="https://doitwithai.tools"
                  target="_blank"
                  className="font-semibold text-[#8EA7FF] underline underline-offset-4 hover:text-[#5271FF]"
                >
                  Do It With AI Tools™
                </Link>
                , the framework evaluates digital assets across four core pillars: Logic & Long-term Thinking, 
                Internal Optimization, Non-Negotiable Integrity, and eXceptional Excellence.
              </p>
              <p>
                This Privacy Policy is directly anchored by our third pillar—<strong>Non-Negotiable Integrity</strong>. 
                We systematically reject hidden tracking parameters, dark patterns, or deceptive monetization models, 
                ensuring an unshakeable ecosystem built on 100% legal clarity, total operational transparency, and absolute user trust.
              </p>
              <p>
                Official Domain:{" "}
                <Link
                  href="https://lionxe.com"
                  className="font-semibold text-[#8EA7FF] underline-offset-4 hover:underline"
                >
                  https://lionxe.com
                </Link>
              </p>
            </Section>

            <Section title="2. Technical & Voluntary Data Ingestion">
              <p>
                We minimize data footprint down to absolute necessity. We process voluntary submissions 
                and automated infrastructure data solely to execute site diagnostic tasks and improve system visibility.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <h3 className="mb-4 text-lg font-bold text-white">
                    Information You Securely Provide
                  </h3>
                  <BulletList
                    items={[
                      "First name and direct contact details",
                      "Corporate email addresses for authentic notifications",
                      "Source code blocks or page layouts provided for architectural testing",
                      "Domain names and system audit configurations",
                      "Resource access tokens used for premium resource downloads",
                    ]}
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <h3 className="mb-4 text-lg font-bold text-white">
                    Information Tracked via Server Infrastructure
                  </h3>
                  <BulletList
                    items={[
                      "IP addresses and edge location nodes",
                      "Browser configurations and rendering engines",
                      "Core Web Vitals and specific page-load speeds",
                      "Referral pathways and system navigation clicks",
                      "Essential technical cookies required for security session memory",
                    ]}
                  />
                </div>
              </div>
            </Section>

            <Section title="3. Purpose of Data Processing & Engineering Optimization">
              <p>
                In perfect alignment with our <strong>Internal Optimization</strong> standards, all collected technical logs 
                and user details are processed exclusively for peak system operation:
              </p>

              <BulletList
                items={[
                  "Executing comprehensive, 100-point LIONXE™ Architectural Audits on requested properties",
                  "Analyzing runtime speeds, server bottlenecks, and structural code anomalies to refine platform responsiveness",
                  "Distributing deep-level SEO strategies and tools through our verified newsletters",
                  "Hardening our network defenses against malicious scrapers, spam variants, and unauthorized bot crawlers",
                  "Maintaining absolute codebase security and database integrity across our entire infrastructure",
                ]}
              />
            </Section>

            <Section title="4. AI Data Handling & Training Zero-Tolerance">
              <p>
                As a pioneering quality hub assessing AI visibility, we enforce strict boundaries regarding machine learning model extraction. 
                <strong> Any data, technical page code, proprietary scripts, or email configurations processed by LIONXE™ are permanently protected under a zero-tolerance training exclusion.</strong>
              </p>
              <p>
                We never sell or distribute your technical assets to commercial AI model developers. While we utilize secure, non-training corporate 
                API channels of top-tier platforms (such as Claude Pro and ChatGPT Plus) to analyze system structure patterns, your direct information 
                remains ring-fenced behind secure corporate barriers and is never leaked into public large language model training sets.
              </p>
            </Section>

            <Section title="5. Security Perimeter & Third-Party Integrations">
              <p>
                We completely reject low-tier data brokers. LIONXE™ routes all web requests through a premium, edge-encrypted security perimeter 
                managed via <strong>Cloudflare</strong>. This integration ensures absolute secure proxy routing, instant threat mitigation, and automated SSL layer compliance.
              </p>
              <p>
                Additional infrastructure layers, including encrypted database solutions and premium newsletter delivery pipelines, process isolated technical fragments 
                solely under strict confidentiality agreements and in full accordance with standard compliance guidelines.
              </p>
            </Section>

            <Section title="6. Cookies and Tracking Technologies">
              <p>
                LIONXE™ utilizes standard, essential cookies to preserve your layout configurations, check theme modes, and analyze 
                macro traffic distribution trends. 
              </p>
              <p>
                We do not implement aggressive behavioral remarketing trackers. You can instantly disable cookies through your personal browser 
                management console without experiencing any severe layout degradation across our main educational sections.
              </p>
            </Section>

            <Section title="7. Zero Personal Monetization Disclosure">
              <p>
                LIONXE™ does not sell, barter, lease, or monetize your personal profile details or source code entries to any external entity. 
                Data exposure only occurs under absolute mandate: to comply with valid government legal requirements, or to protect the core safety 
                and structural integrity of our platform from targeted exploit attacks.
              </p>
            </Section>

            <Section title="8. Data Retention, Preservation, & Obliteration">
              <p>
                Technical diagnostics data, audit strings, and newsletter logs are preserved only for the duration required to complete your requested service 
                or satisfy legal record retention rules. Under our framework guidelines, any user can request absolute data obliteration—wiping all related 
                email data and audit records completely out of our active systems.
              </p>
            </Section>

            <Section title="9. Global Data Governance & Rights (GDPR / CCPA / CPRA)">
              <p>
                Because integrity has no geographic boundaries, we extend elite global privacy protections to all visitors irrespective of location:
              </p>

              <BulletList
                items={[
                  "The Right to Access: Request a clear plain-text report of all personal identifiers we hold",
                  "The Right to Rectification: Instantly modify broken or outdated technical parameters",
                  "The Right to Erasure: Trigger full data obliteration from our live databases",
                  "The Right to Restriction: Stop any automated background analytics processing loops",
                  "The Right to Portability: Export full technical audit summaries easily",
                ]}
              />
            </Section>

            <Section title="10. Children's Operational Safety">
              <p>
                LIONXE™ is engineered exclusively for professionals, developers, and digital strategists. We never collect or store records 
                from users under the age of 13. If any data entry from a minor is detected, it will be wiped immediately upon discovery.
              </p>
            </Section>

            <Section title="11. Policy Modifications">
              <p>
                We adjust this Privacy Policy as browser architectures and search engine systems evolve. Any updates will trigger an instant update 
                to the "Last updated" date visible at the top of this document. Continued navigation of our platform certifies acceptance of our revised 
                operational conditions.
              </p>
            </Section>

            <Section title="12. Uncompromising Accountability: Contact Us">
              <p>
                If you have deep questions about our architectural compliance, want to request complete data extraction, or need to verify 
                our Non-Negotiable Integrity guidelines, connect directly with our founder's support channels:
              </p>

              <div className="rounded-2xl border border-[#5271FF]/25 bg-[#014FFD]/10 p-5">
                <p>
                  Email:{" "}
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

export default PrivacyPolicyPage;