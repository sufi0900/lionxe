"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  GraduationCap, Code2, Boxes, PenTool, Sparkles, Moon, Rocket,
  Briefcase, Search, Layers, Plane, Lock, ChevronDown, ArrowRight, MousePointer2,
} from "lucide-react";
import "./successjourney.css";

const ACCENT = "#5271ff";

const PHASE_COLOR = {
  Foundation: "#7c8db5", Craft: "#00D9FF", Creation: "#5271ff",
  Profession: "#a78bfa", Vision: "#e6b566",
};

/* achieved milestones the climber ascends (BCS … LIONXE) */
const MILESTONES = [
  { phase: "Foundation", icon: GraduationCap, short: "BCS", when: "Academic foundation", title: "Bachelor of Computer Science", tagline: "Where the systems mind began.", body: "The student who ranked at the top and needed to know how things actually worked. That instinct to look beneath the surface became how I'd later read websites — not as pages, but as systems." },
  { phase: "Foundation", icon: Code2, short: "MCS", when: "Master of Computer Science", title: "MCS — Web Development", tagline: "The first <html> tag, and code became visible.", body: "In a Web Fundamentals class during my Master's, I wrote my first HTML tags, opened the file in a browser, and watched code turn into something I could see and use. That was the moment web development captured me." },
  { phase: "Craft", icon: Boxes, short: "Web Dev", when: "The manual years", title: "From Notepad to Next.js", tagline: "Built by hand, then by architecture.", body: "No AI, no shortcuts — Notepad, YouTube, and endless debugging. HTML/CSS/JS led to React and MERN and my first portfolio; then Next.js and Sanity CMS for serious, search-ready platforms." },
  { phase: "Craft", icon: PenTool, short: "SEO", when: "Words meet systems", title: "Content Writing & SEO", tagline: "Learning to be found.", body: "I taught myself content writing, then SEO — GA4, keyword research, schema, technical SEO — applied to my own portfolio first. Search became a system I could engineer." },
  { phase: "Craft", icon: Sparkles, short: "AI", when: "Leveling up", title: "AI & Prompt Engineering", tagline: "The accelerator, earned after the foundation.", body: "AI entered only after the manual foundation was there — so it multiplied my work instead of replacing my understanding. Prompt engineering turned weeks into days." },
  { phase: "Creation", icon: Moon, short: "Isolation", when: "~18 months", title: "The 18-Month Isolation", tagline: "Heads-down, lights-off, building.", body: "Roughly 18 months away from distractions, building through heat, power cuts, noise, and a tight budget. Not a gap — the most focused, defining stretch of the journey." },
  { phase: "Creation", icon: Rocket, short: "DoItWithAI", when: "doitwithai.tools", title: "Do It With AI Tools", tagline: "A solo, founder-led AI SEO platform.", body: "Out of that isolation came Do It With AI Tools — web engineering, SEO, AI workflows, structured content, multi-tier caching, and strict integrity calls at every step." },
  { phase: "Profession", icon: Briefcase, short: "Think Higher", when: "First role", title: "Think Higher Consultants", tagline: "The portfolio pays off.", body: "My self-built work opened the first real door — my first taste of corporate pressure, reporting, feedback, and real market expectations. Coal into diamond, under pressure." },
  { phase: "Profession", icon: Search, short: "WAYWE", when: "Current role", title: "WAYWE Gaming", tagline: "Local SEO at depth — UK & US.", body: "Carpet-cleaning-sector SEO for UK and US markets: service pages, local SEO, compliance-aware writing, and deep research into multi-location networks. (The \"Gaming\" is the company name, not the work.)" },
  { phase: "Vision", icon: Layers, short: "LIONXE®", when: "The creation", title: "The LIONXE® Framework", tagline: "My own four-pillar quality standard.", body: "Diagnosing sprawling, real-world SEO problems pushed me to build something durable: LIONXE® — a four-pillar quality and audit framework built to judge digital work that lasts." },
];

const GOAL = { phase: "Vision", icon: Plane, short: "The Gulf", title: "The Gulf Vision", tagline: "The next summit — Dubai & the GCC.", body: "The golden destination ahead: enterprise-scale digital growth, AI adoption, and international standards across the UAE, Saudi Arabia, and the wider Gulf. Not yet reached — deliberately in sight." };
const FUTURE_COUNT = 3;

const IDX_TOP = MILESTONES.length - 1;
const RUN = 172;
const RISE = 116;
const HOP = RISE * 0.62;
// CHAR_H: the full visual height of the SVG figure (viewBox height = 100px world units)
// We add extra buffer for the celebration bounce (5px screen) + safety margin
const CHAR_H = 100;
const HEADROOM_BUFFER = 56; // extra px above figure top: covers jump arc + celebrate bounce + nav bar
const BASE_DROP = RISE * 1.5;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (t) => t * t * (3 - 2 * t);

export default function SuccessJourney() {
  const [active, setActive] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const scrollyRef = useRef(null);
  const stageRef = useRef(null);
  const worldRef = useRef(null);
  const charRef = useRef(null);
  const shadowRef = useRef(null);
  const lastActive = useRef(0);
  const lastCelebrate = useRef(false);
  const rmRef = useRef(false);

  useEffect(() => {
    rmRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const update = useCallback(() => {
    const scrolly = scrollyRef.current, stage = stageRef.current, world = worldRef.current, char = charRef.current, shadow = shadowRef.current;
    if (!scrolly || !stage || !world || !char || !shadow) return;
    const sRect = stage.getBoundingClientRect();
    const stageW = sRect.width, stageH = sRect.height;
    const mobile = stageW < 760;
    const scale = clamp(stageW / 1240, mobile ? 0.6 : 0.78, 1.1);

    // neededHeadroom: minimum anchorY so the character (head top) never clips the stage edge
    // head top in world = charY - CHAR_H; at jump peak charY = baseY - HOP
    // screen Y of head top = anchorY + (charY - CHAR_H - baseY) * scale
    //                       = anchorY + (-HOP - CHAR_H) * scale
    // For screen Y >= HEADROOM_BUFFER: anchorY >= (HOP + CHAR_H) * scale + HEADROOM_BUFFER
    const neededHeadroom = (CHAR_H + HOP) * scale + HEADROOM_BUFFER;
    // anchorY must satisfy BOTH a reasonable default fraction AND the headroom requirement
    const anchorX = stageW * (mobile ? 0.5 : 0.4);
    const anchorY = Math.max(neededHeadroom, stageH * (mobile ? 0.55 : 0.62));

    const cRect = scrolly.getBoundingClientRect();
    const total = cRect.height - window.innerHeight;
    const scrolled = clamp(-cRect.top, 0, total);
    const progress = total > 0 ? scrolled / total : 0;

    const f = progress * IDX_TOP;
    let i = Math.floor(f);
    let t = f - i;
    if (i >= IDX_TOP) { i = IDX_TOP; t = 0; }

    const e = smooth(t);
    const baseX = (i + e) * RUN + RUN / 2;
    const baseY = -(i + e) * RISE;

    const air = rmRef.current ? 0 : Math.sin(Math.PI * t);
    const hopPx = HOP * air;
    const charY = baseY - hopPx;

    // Camera follows the smooth baseline (not the hop arc) to avoid a bouncy camera
    const camX = anchorX - baseX * scale;
    const camY = anchorY - baseY * scale;
    world.style.transform = `translate(${camX}px, ${camY}px) scale(${scale})`;

    char.style.left = `${baseX}px`;
    char.style.top = `${charY}px`;
    char.style.setProperty("--air", air.toFixed(3));

    shadow.style.left = `${baseX}px`;
    shadow.style.top = `${baseY}px`;
    shadow.style.setProperty("--air", air.toFixed(3));

    const a = clamp(Math.round(f), 0, IDX_TOP);
    if (a !== lastActive.current) { lastActive.current = a; setActive(a); }

    const atSummit = progress >= 0.995;
    if (atSummit !== lastCelebrate.current) { lastCelebrate.current = atSummit; setCelebrate(atSummit); }
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [update]);

  const steps = [];
  MILESTONES.forEach((m, i) => steps.push({ kind: "achieved", i, m }));
  steps.push({ kind: "goal", i: MILESTONES.length, m: GOAL });
  for (let k = 0; k < FUTURE_COUNT; k++) steps.push({ kind: "future", i: MILESTONES.length + 1 + k });

  const cur = MILESTONES[active];
  const CurIcon = cur.icon;

  return (
    <section className="sj-root" style={{ "--accent": ACCENT }} aria-label="Success journey — the climb">
      {/* ambient */}
      <div className="sj-ambient" aria-hidden><span className="sj-glow sj-glow--1" /><span className="sj-glow sj-glow--2" /><span className="sj-stars" /></div>

      {/* header */}
      <header className="sj-header">
        <div className="sj-eyebrow"><Rocket size={13} aria-hidden /> The Climb</div>
        <h1 className="sj-title">A success journey,<br /><span className="sj-title-accent">one step at a time</span></h1>
        <p className="sj-sub">Every stair is a milestone. Scroll to climb — and watch the journey rise from a Computer Science foundation all the way to the Gulf on the horizon.</p>
        <div className="sj-scrollcue"><MousePointer2 size={15} aria-hidden /> Scroll to climb <ChevronDown size={15} className="sj-bounce" aria-hidden /></div>
      </header>

      {/* scrollytelling */}
      <div className="sj-scrolly" ref={scrollyRef} style={{ height: `${IDX_TOP * 56 + 110}vh` }}>
        <div className="sj-stage" ref={stageRef}>
          <div className="sj-world" ref={worldRef}>
            {steps.map((s) => {
              const left = s.i * RUN;
              const top = -s.i * RISE;
              const height = BASE_DROP + s.i * RISE;
              const pc = s.kind === "achieved" ? PHASE_COLOR[s.m.phase] : s.kind === "goal" ? PHASE_COLOR.Vision : "#475569";
              const reached = s.kind === "achieved" && s.i <= active;
              const isCurrent = s.kind === "achieved" && s.i === active;
              const cls = ["sj-step", `sj-step--${s.kind}`, reached ? "sj-step--reached" : "", isCurrent ? "sj-step--current" : ""].join(" ");
              return (
                <div key={s.i} className={cls} style={{ left: `${left}px`, top: `${top}px`, width: `${RUN}px`, height: `${height}px`, "--pc": s.kind === "future" ? "#475569" : pc }}>
                  <div className="sj-tread" />
                  {s.kind === "achieved" && (
                    <div className="sj-step-tag">
                      <span className="sj-step-num">{String(s.i + 1).padStart(2, "0")}</span>
                      <span className="sj-step-name">{s.m.short}</span>
                    </div>
                  )}
                  {s.kind === "goal" && (
                    <div className="sj-step-tag sj-step-tag--goal">
                      <span className="sj-goal-badge"><Lock size={12} aria-hidden /></span>
                      <span className="sj-step-name">{s.m.short}</span>
                      <span className="sj-goal-flag" aria-hidden><Plane size={14} /></span>
                    </div>
                  )}
                  {s.kind === "future" && <div className="sj-step-tag sj-step-tag--future"><span>Future</span></div>}
                </div>
              );
            })}

            {/*
              THE CLIMBER
              SVG viewBox: 0 0 56 100
              Key geometry (world px, y increases downward in SVG):
                Head:    circle cx=28, cy=14, r=11.5  → top of head at y=2.5
                Torso:   roughly y=25 to y=62
                Shoulders: ~y=29
                Arms:    start at shoulder (~y=29), hang wide and down to ~y=62
                          LEFT:  M13 29 L4 58   (far left, clear of torso)
                          RIGHT: M43 29 L52 58  (far right, clear of torso)
                Legs:    y=58 to y=92
                Feet:    ellipses at y=95

              translate(-50%, -100%) positions the SVG bottom edge at the step tread.
            */}
            <div className={`sj-char ${celebrate ? "sj-char--celebrate" : ""}`} ref={charRef} aria-hidden>
              <div className="sj-char-glow" />
              <svg width="56" height="100" viewBox="0 0 56 100" className="sj-char-svg">
                {/* Feet — ground contact anchors */}
                <g className="sj-char-feet">
                  <ellipse className="sj-cfoot" cx="20" cy="95" rx="9" ry="4.5" />
                  <ellipse className="sj-cfoot" cx="36" cy="95" rx="9" ry="4.5" />
                </g>
                {/* Legs */}
                <g className="sj-char-legs">
                  <path className="sj-cleg" d="M24 60 L20 92" />
                  <path className="sj-cleg" d="M32 60 L36 92" />
                </g>
                {/* Upper body — pivots from the waist, feet stay planted */}
                <g className="sj-upper">
                  <g className="sj-char-body">
                    {/*
                      ARMS: wide paths that hang clearly away from the torso sides.
                      transform-origin: the start point of each path (the shoulder anchor).
                      Left arm hangs to the left; right arm to the right.
                    */}
                    <g className="sj-arm sj-arm--l">
                      {/* Left arm: shoulder at (13,29) → hand at (4,60) — wide left swing */}
                      <path className="sj-carm" d="M13 29 L4 60" />
                    </g>
                    <g className="sj-arm sj-arm--r">
                      {/* Right arm: shoulder at (43,29) → hand at (52,60) — wide right swing */}
                      <path className="sj-carm" d="M43 29 L52 60" />
                    </g>
                    <g className="sj-torso">
                      {/* Torso: slightly narrower at bottom for a natural shape */}
                      <path className="sj-ctorso" d="M14 29 Q28 24 42 29 L40 60 Q28 65 16 60 Z" />
                      <text className="sj-cmark" x="28" y="47" textAnchor="middle">SM</text>
                    </g>
                    <g className="sj-char-head">
                      <circle className="sj-cp" cx="28" cy="14" r="11.5" />
                      <g className="sj-eyes">
                        <circle className="sj-eye" cx="24" cy="14" r="1.4" />
                        <circle className="sj-eye" cx="32" cy="14" r="1.4" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            {/* Ground shadow — stays on the step baseline while climber leaps above it */}
            <div className="sj-shadow" ref={shadowRef} aria-hidden />
          </div>

          {/* Milestone panel */}
          <aside className="sj-panel" style={{ "--pc": PHASE_COLOR[cur.phase] }} aria-live="polite">
            {celebrate && (
              <div className="sj-panel-celebrate"><Sparkles size={14} aria-hidden /> Summit reached — the Gulf is next</div>
            )}
            <div className="sj-panel-top">
              <span className="sj-panel-icon"><CurIcon size={20} aria-hidden /></span>
              <div className="sj-panel-meta"><span className="sj-panel-phase">{cur.phase}</span><span className="sj-panel-when">{cur.when}</span></div>
              <span className="sj-panel-step">{String(active + 1).padStart(2, "0")}<i>/ {MILESTONES.length}</i></span>
            </div>
            <h2 className="sj-panel-title">{cur.title}</h2>
            <p className="sj-panel-tagline">{cur.tagline}</p>
            <p className="sj-panel-body">{cur.body}</p>
            <div className="sj-panel-track" aria-hidden><span className="sj-panel-track-fill" style={{ width: `${(active / IDX_TOP) * 100}%` }} /></div>
            {active === IDX_TOP && (
              <div className="sj-panel-next"><span className="sj-panel-next-dot" /> Next summit in sight: <strong>The Gulf</strong></div>
            )}
          </aside>
        </div>
      </div>

      {/* destination / outro */}
      <div className="sj-outro">
        <div className="sj-outro-card">
          <span className="sj-outro-badge"><Plane size={18} aria-hidden /></span>
          <h2 className="sj-outro-title">The summit ahead: <span className="sj-gold">the Gulf</span></h2>
          <p className="sj-outro-sub">The climb so far was the preparation. The next step is golden and deliberately in sight — Dubai, the UAE, and the wider GCC — with more stairs still to build beyond it.</p>
          <Link href="/gulf-vision" className="sj-outro-link">See the Gulf Vision dossier <ArrowRight size={16} aria-hidden /></Link>
        </div>
      </div>
    </section>
  );
}