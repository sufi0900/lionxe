"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Star,
  Youtube,
} from "lucide-react";

// Perfectly balanced 4-4-4 link architecture
const footerLinks = {
  pillars: [
  { label: "Logic & Longevity (L)", href: "/long-term-logic" },
    { label: "Internal Optimization (IO)", href: "/internal-optimization" },
    { label: "Non-Negotiable Integrity (N)", href: "/non-negotiable-integrity" },
    { label: "Exceptional Distinction (XE)", href: "/exceptional-distinction" },
  ],
  framework: [
    { label: "The LIONXE Framework", href: "/framework" },
    { label: "Review Standards", href: "/review-standards" },
    { label: "Scorecard System", href: "/scorecard-system" },
    { label: "Asset Audits", href: "/audits" },
  ],
  company: [
    { label: "About LIONXE", href: "/about" },
    { label: "Meet the Founder", href: "/founder" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Support", href: "/contact" },
  ],
};

const TrustpilotInvite = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-[#004DFD]/10 to-indigo-500/10 border border-[#004DFD]/20 rounded-xl shadow-sm hover:shadow-md backdrop-blur-sm transition-all duration-300 px-4 py-4 sm:px-6 sm:py-5 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
        <Link
          href="https://www.trustpilot.com/review/doitwithai.tools"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 flex-shrink-0"
        >
          <div className="text-base sm:text-lg font-bold text-white">
            Trustpilot
          </div>
          <div className="bg-[#00b67a] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded flex items-center gap-0.5 sm:gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-white"
              />
            ))}
          </div>
        </Link>
        
        <div className="hidden sm:block w-px h-4 sm:h-5 bg-gray-600 flex-shrink-0" />

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          Love our content?{" "}
          <Link
            href="https://www.trustpilot.com/review/doitwithai.tools"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#00b67a] hover:underline"
          >
            Write a review on Trustpilot
          </Link>
          . <br className="hidden sm:inline" />
          It only takes a minute!
        </p>
      </div>

      <p className="mt-2 sm:mt-3 text-xs text-center text-gray-400 px-4">
        Your honest feedback helps us improve and grow our AI community.
      </p>
    </div>
  );
};

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com/@doitwithaitools", icon: Youtube },
  { label: "Instagram", href: "https://instagram.com/doitwithaitools", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/in/sufianmustafa", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com/doitwithaitools", icon: Facebook },
  { label: "GitHub", href: "https://github.com/doitwithaitools", icon: Github },
  { label: "Email", href: "mailto:contact@lionxe.com", icon: Mail },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050B1F] text-slate-300">
      {/* Top ambient line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#004DFD]/70 to-transparent"
      />

      {/* Background radial soft light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[#004DFD]/10 blur-[120px]"
      />

      {/* Grid line layout background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:56px_56px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
          
          {/* LEFT: Branding block */}
          <div>
            <Link href="/" aria-label="Go to LIONXE homepage" className="group inline-flex items-center">
              <div className="flex h-[56px] w-[215px] items-center justify-center overflow-hidden">
                <Image
                  src="/logoForHeader.png"
                  alt="LIONXE"
                  width={280}
                  height={90}
                  className="h-auto max-h-[126px] w-full object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm font-medium leading-7 text-slate-400">
              LIONXE is a rigorous digital quality framework for evaluating
              long-term logic, internal optimization, integrity, and exceptional
              execution across modern digital assets.
            </p>

            <div className="mt-6 grid max-w-md grid-cols-2 gap-3 sm:grid-cols-4">
              {["Logic", "Optimization", "Integrity", "Execution"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#7A9FFF]"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Social channels matrix */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    className="group/social flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#004DFD]/40 hover:bg-[#0F1B3D] hover:text-white hover:shadow-[0_12px_30px_rgba(0,77,253,0.18)]"
                  >
                    <Icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover/social:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Perfect 4-4-4 grid structure */}
          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn title="Pillars" links={footerLinks.pillars} />
            <FooterColumn title="Framework" links={footerLinks.framework} />
            <FooterColumn title="Company" links={footerLinks.company} />
          </div>
        </div>

        {/* Global CTA Banner Section */}
        {/* <div className="mt-14 overflow-hidden rounded-2xl border border-[#004DFD]/20 bg-[#071127] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7A9FFF]">
                Digital quality standard
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-white">
                Build assets that compound, not expire.
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Explore the LIONXE framework and see how digital assets are
                reviewed through long-term quality, trust, execution, and AI-era
                visibility.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#004DFD] to-[#0036b1] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,77,253,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,77,253,0.38)]"
            >
              About LIONXE
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div> */}

        <div className="px-2 pt-6 sm:px-3 md:px-4">
          <TrustpilotInvite />
        </div>

        {/* BOTTOM METADATA BAR: Symmetrically handles legal guidelines */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <p>© {year} <span className="font-semibold text-slate-300">LIONXE</span>. All rights reserved.</p>
            
            {/* Horizontal Regulatory Link System */}
            <div className="flex items-center gap-4 border-slate-700 md:border-l md:pl-6">
              <Link href="/privacy-policy" className="transition-colors hover:text-white font-medium">
                Privacy Policy
              </Link>
              <span className="text-slate-700 text-xs">•</span>
              <Link href="/terms" className="transition-colors hover:text-white font-medium">
                Terms of Use
              </Link>
            </div>
          </div>

          <p>
            Founded by{" "}
            <a
              href="https://sufianmustafa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#7A9FFF] transition-colors hover:text-white"
            >
              Sufian Mustafa
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-white">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group/link inline-flex items-center text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-[#7A9FFF]"
            >
              <span className="mr-3 h-2 w-2 rounded-sm border border-[#004DFD]/30 bg-[#0B1B45] shadow-[0_0_10px_rgba(0,77,253,0.15)] transition-all duration-200 group-hover/link:rotate-45 group-hover/link:bg-[#004DFD] group-hover/link:border-[#004DFD]" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;