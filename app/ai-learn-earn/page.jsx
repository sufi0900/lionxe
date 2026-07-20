"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  GraduationCap, Code2, Boxes, PenTool, Sparkles, Moon, Rocket,
  Briefcase, Search, Layers, Plane, ChevronDown, ArrowRight,
} from "lucide-react";
import "./timeline.css";

const ACCENT = "#5271ff";

const PHASE_COLOR = {
  Foundation: "#7c8db5", Craft: "#00D9FF", Creation: "#5271ff",
  Profession: "#a78bfa", Vision: "#e6b566",
};
const PHASES = ["Foundation", "Craft", "Creation", "Profession", "Vision"];

const MILESTONES = [
  { phase: "Foundation", icon: GraduationCap, when: "Academic foundation", title: "Bachelor of Computer Science", tagline: "Where the systems mind began.", body: "Long before my first website, I was the student who ranked at the top and needed to know how things actually worked — maths, physics, the structure of the universe. That instinct to look beneath the surface became how I'd later read websites: not as pages, but as systems.", tags: ["Top of class", "Systems thinking"] },
  { phase: "Foundation", icon: Code2, when: "Master of Computer Science", title: "MCS — Web Development", tagline: "The first <html> tag, and code became visible.", body: "In a Web Fundamentals class during my Master's, I wrote my first HTML tags. I went home, saved a file as .html, opened it in the browser — and watched code turn into something I could see and use. That was the moment web development captured me.", tags: ["HTML", "The spark"] },
  { phase: "Craft", icon: Boxes, when: "The manual years", title: "From Notepad to Next.js", tagline: "Built by hand, then by architecture.", body: "No AI, no shortcuts — just Notepad, YouTube, Stack Overflow, and endless cloning and debugging. HTML, CSS and JavaScript led to React and the MERN stack, and my first portfolio. When I hit the SEO and performance limits of plain React, I moved to Next.js and Sanity CMS — my architecture for serious, search-ready platforms.", tags: ["HTML/CSS/JS", "React · MERN", "Next.js · Sanity"] },
  { phase: "Craft", icon: PenTool, when: "Words meet systems", title: "Content Writing & SEO", tagline: "Learning to be found.", body: "I taught myself content writing, then SEO — GA4, keyword research, schema, technical SEO — and applied all of it to my own portfolio first. Search stopped being a mystery and became a system I could engineer.", tags: ["Technical SEO", "GA4", "Schema"] },
  { phase: "Craft", icon: Sparkles, when: "Leveling up", title: "AI & Prompt Engineering", tagline: "The accelerator — earned after the manual foundation.", body: "AI entered only after the manual foundation was already there — so it multiplied my work instead of replacing my understanding. Prompt engineering and AI-assisted development turned weeks of effort into days.", tags: ["Prompt engineering", "AI workflows"] },
  { phase: "Creation", icon: Moon, when: "The grind · ~18 months", title: "The 18-Month Isolation", tagline: "Heads-down, lights-off, building.", body: "I stepped away from distractions for roughly 18 months and built — through heat, power cuts, noise, and a tight budget. It wasn't a gap; it was the most focused, defining stretch of the whole journey.", tags: ["Deep focus", "Solo build"] },
  { phase: "Creation", icon: Rocket, when: "doitwithai.tools", title: "Do It With AI Tools", tagline: "A solo, founder-led AI SEO platform.", body: "Out of that isolation came Do It With AI Tools — a solo, founder-led AI SEO platform combining web engineering, SEO, AI workflows, structured content, caching with Redis and Cloudflare, and strict integrity calls at every step.", tags: ["Founder", "AI SEO platform"] },
  { phase: "Profession", icon: Briefcase, when: "First professional role", title: "Think Higher Consultants", tagline: "The portfolio pays off.", body: "My self-built work opened the first real door. Think Higher Consultants was my first taste of corporate pressure — content and SEO workflows, reporting, feedback, and real market expectations. Coal into diamond, under pressure.", tags: ["First role", "Corporate SEO"] },
  { phase: "Profession", icon: Search, when: "Current role", title: "WAYWE Gaming", tagline: "Local SEO at depth — carpet-cleaning sector, UK & US.", body: "At WAYWE Gaming my workstream is carpet-cleaning-sector SEO for UK and US markets — service pages, local SEO, compliance-aware writing, and deep research into multi-location networks: duplicate content, NAP consistency, crawl budget, hub-and-spoke architecture. (The \u201cGaming\u201d is the company name, not the work.)", tags: ["Local SEO", "UK / US markets"] },
  { phase: "Vision", icon: Layers, when: "The creation", title: "The LIONXE® Framework", tagline: "My own four-pillar quality standard.", body: "Diagnosing sprawling, real-world SEO problems pushed me to build something durable: LIONXE® — a four-pillar quality and audit framework. Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, Exceptional Execution. Not a library — a way of judging digital work that lasts.", tags: ["Proprietary framework", "4 pillars"] },
  { phase: "Vision", icon: Plane, when: "Now → Next", title: "The Gulf Vision", tagline: "Engineered for Dubai & the GCC.", body: "The next chapter is deliberate: Dubai, the UAE, Saudi Arabia, and the wider GCC — enterprise-scale digital growth, AI adoption, and international standards that match where I'm headed. The journey so far was the preparation. This is the expansion.", tags: ["Dubai · GCC", "The next chapter"], beacon: true },
];

export default function TimelineJourney() {
  const [activeIdx, setActiveIdx] = useState(0);
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const energyRef = useRef(null);
  const locoRef = useRef(null);
  const itemRefs = useRef([]);

  /* travelling locomotive + electrified fill, driven by scroll */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const track = trackRef.current, fill = energyRef.current, loco = locoRef.current;
      if (!track || !fill || !loco) return;
      const r = track.getBoundingClientRect();
      const center = window.innerHeight * 0.5;
      const px = Math.max(0, Math.min(r.height, center - r.top));
      fill.style.height = `${px}px`;
      loco.style.top = `${px}px`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("tl-in"); reveal.unobserve(e.target); } }),
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    root.querySelectorAll(".tl-reveal").forEach((el) => reveal.observe(el));
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const i = Number(e.target.getAttribute("data-idx"));
          if (!Number.isNaN(i)) setActiveIdx(i);
        }
      }),
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && spy.observe(el));
    return () => { reveal.disconnect(); spy.disconnect(); };
  }, []);

  const jumpToPhase = useCallback((phase) => {
    const idx = MILESTONES.findIndex((m) => m.phase === phase);
    const el = itemRefs.current[idx];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const activePhase = MILESTONES[activeIdx]?.phase;

  return (
    <section className="tl-root" style={{ "--accent": ACCENT }} ref={rootRef} aria-label="Professional journey timeline">
      <div className="tl-ambient" aria-hidden><span className="tl-glow tl-glow--1" /><span className="tl-glow tl-glow--2" /></div>

      <header className="tl-header">
        <div className="tl-eyebrow"><Rocket size={13} aria-hidden /> The Journey</div>
        <h1 className="tl-title">From my first tag<br /><span className="tl-title-accent">to a Gulf vision</span></h1>
        <p className="tl-sub">Eleven stops, five phases, one deliberate line — board the train from a Computer Science foundation all the way to an enterprise move toward the Gulf.</p>
        <div className="tl-meta"><span>11 stops</span><i /><span>5 phases</span><i /><span>1 destination</span></div>
      </header>

      <nav className="tl-phasenav" aria-label="Journey phases">
        <div className="tl-phasenav-inner">
          {PHASES.map((p) => (
            <button key={p} className={`tl-phase-btn ${activePhase === p ? "tl-phase-btn--active" : ""}`} style={{ "--pc": PHASE_COLOR[p] }} onClick={() => jumpToPhase(p)}>
              <span className="tl-phase-dot" />{p}
            </button>
          ))}
        </div>
      </nav>

      <div className="rw-track-wrap">
        {/* electrified railway track */}
        <div className="rw-track" ref={trackRef} aria-hidden>
          <div className="rw-sleepers" />
          <div className="rw-rail rw-rail--l" />
          <div className="rw-rail rw-rail--r" />
          <div className="rw-energy"><div className="rw-energy-fill" ref={energyRef} /></div>

          {/* travelling locomotive (leads the train down the line as you scroll) */}
          <div className="rw-loco" ref={locoRef}>
            <div className="rw-beam" />
            <svg viewBox="0 0 80 122" width="58" height="89" aria-hidden>
              <defs>
                <linearGradient id="rw-body" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#222f55" /><stop offset="50%" stopColor="#43578f" /><stop offset="100%" stopColor="#222f55" />
                </linearGradient>
              </defs>
              <path className="rw-loco-body" d="M16 8 C 16 4 22 2 40 2 C 58 2 64 4 64 8 L 68 84 C 68 100 56 114 40 118 C 24 114 12 100 12 84 L 16 8 Z" fill="url(#rw-body)" />
              <rect className="rw-loco-glass" x="22" y="18" width="36" height="16" rx="5" />
              <polygon className="rw-loco-windshield" points="26,84 54,84 48,102 32,102" />
              <circle className="rw-loco-light" cx="34" cy="106" r="3.4" />
              <circle className="rw-loco-light" cx="46" cy="106" r="3.4" />
            </svg>
          </div>
        </div>

        {MILESTONES.map((m, i) => {
          const Icon = m.icon;
          const side = i % 2 === 0 ? "left" : "right";
          const pc = PHASE_COLOR[m.phase];
          return (
            <div
              key={i}
              data-idx={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className={`tl-item tl-item--${side} ${activeIdx === i ? "tl-item--active" : ""} ${m.beacon ? "tl-item--beacon" : ""}`}
              style={{ "--pc": pc }}
            >
              <span className="rw-station" aria-hidden><span className="rw-station-core" /></span>
              <article className="rw-car tl-reveal">
                <span className="rw-coupler" aria-hidden />
                <div className="rw-windows" aria-hidden>{[0, 1, 2, 3, 4].map((w) => <i key={w} />)}</div>
                <div className="rw-content">
                  <div className="tl-card-top">
                    <span className="tl-card-icon"><Icon size={18} aria-hidden /></span>
                    <div className="tl-card-meta">
                      <span className="tl-card-phase">{m.phase}</span>
                      <span className="tl-card-when">{m.when}</span>
                    </div>
                    <span className="tl-card-step">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="tl-card-title">{m.title}</h2>
                  <p className="tl-card-tagline">{m.tagline}</p>
                  <p className="tl-card-body">{m.body}</p>
                  <div className="tl-card-tags">{m.tags.map((t) => <span key={t} className="tl-tag">{t}</span>)}</div>
                  {m.beacon && (
                    <Link href="/gulf-vision" className="tl-beacon-link">See the Gulf Vision dossier <ArrowRight size={15} aria-hidden /></Link>
                  )}
                </div>
                <div className="rw-bogies" aria-hidden><span className="rw-wheel"><b /></span><span className="rw-wheel"><b /></span></div>
              </article>
            </div>
          );
        })}
      </div>

      <div className="rw-terminal tl-reveal">
        <span className="rw-signal" aria-hidden><span className="rw-signal-light" /></span>
        <p className="rw-terminal-text">Final approach: the Gulf. The line stays open — the journey continues.</p>
        <ChevronDown size={18} className="tl-end-chev" aria-hidden />
      </div>
    </section>
  );
}