//  app/rubric/RubricPageClient.tsx — Client Component (LIONXE Rubric Overview)

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Gauge, Shield, Sparkles, ShieldCheck, Award,
  ChevronDown, ChevronRight, Home, ArrowRight, Flag,
  BookOpen, Scale, Search, FileCheck, AlertTriangle,
  CheckCircle2, Lightbulb, Globe, Wrench, Building2, Youtube,
  HardHat, Wallet, Calculator, RotateCcw, Layers, Zap, ListChecks, Ban, Focus,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — Color Doctrine v3
// Brand accent = LIONXE blue #004DFD (light variant #5B8CFF for text on dark).
// Gold #C8971F reserved for certification contexts only.
// Scoring: 0 red · 6 orange · 12 slate · 18 green · 25 LIONXE blue (= Platinum).
// ─────────────────────────────────────────────────────────────────────────────

const T = {
  bg: "#080F1D", bg2: "#0D1626", surf: "#111B2E", surf2: "#182237",
  brand: "#004DFD", brandLt: "#5B8CFF",
  brandDim: "rgba(0,77,253,0.12)", brandBdr: "rgba(0,77,253,0.30)",
  gold: "#C8971F", goldDim: "rgba(200,151,31,0.12)", goldBdr: "rgba(200,151,31,0.22)",
  white: "#EAE6DC", muted: "#7B8BA2", bdr: "rgba(255,255,255,0.065)",
  fail: "#C94040", orange: "#E07840", slate: "#8B9BB2", pass: "#4A9960",
};
const FH = "'Space Grotesk', system-ui, sans-serif";

const ANCHOR_COLORS: Record<number, string> = {
  0: T.fail, 6: T.orange, 12: T.slate, 18: T.pass, 25: T.brandLt,
};
const ANCHOR_FILLS: Record<number, string> = {
  0: T.fail, 6: T.orange, 12: T.slate, 18: T.pass, 25: T.brand,
};

// ─────────────────────────────────────────────────────────────────────────────
// RUBRIC DATA — domain criteria (Layer 2) + sector lenses (Layer 3)
// ─────────────────────────────────────────────────────────────────────────────

const RUBRIC = [
  {
    code: "L", name: "Long-Term Logic",
    governingLaw: "The Post-Flood Collapse Rule",
    description: "Tests whether the entity is justified by durable benefit rather than by conditions that are temporary, concentrated, or eroding. Any advantage built on a receding flood collapses when the water goes.",
    altitude: "Assessed at model and strategy altitude only — never at execution detail, which belongs to Pillar IO.",
    criteria: [
      { id: "L1", name: "Directional Clarity",
        statement: "Does an articulated multi-year direction exist — proportionate to the entity's natural cycle — that observably filters real decisions?",
        measures: "This domain covers the entity's stated direction and its grip on actual behaviour. A direction is not a slogan: it earns its score by being specific enough to rule options out, proportionate to the sector's natural planning cycle, and stable enough that decisions across time trace back to it. No fixed year-count applies — a two-year horizon is a full-score horizon where two years is the honest cycle.",
        factors: [
          "An articulated direction exists and is discoverable",
          "It is specific enough to filter decisions, not merely aspirational",
          "Its horizon is proportionate to the sector's natural cycle",
          "Major observable decisions align with it",
          "The direction is stable over time rather than rewritten to fit each moment"
        ],
        boundary: "Whether the direction can survive its environment (L2); how well it is executed (IO); whether it is distinctive (XE1).",
        anchors: [
          { score: 0, text: "No direction is evident. Observable choices are reactive to the immediate moment with no organising logic." },
          { score: 6, text: "A stated aspiration exists but is too vague to rule any option out — or no direction can be confirmed from available evidence." },
          { score: 12, text: "A direction exists and shapes some decisions, but significant choices are made without reference to it." },
          { score: 18, text: "A clear, proportionate direction shapes most major decisions, with limited contradictions." },
          { score: 25, text: "A clear, proportionate direction is consistently articulated, stable over time, and every major observable decision aligns with it." }
        ],
        lens: [
          { sector: "Website", example: "Positioning and content strategy that visibly organise the property — clusters serving defined pillars rather than disconnected publishing" },
          { sector: "Software tool", example: "A roadmap that shipped releases actually follow" },
          { sector: "Organization", example: "A strategy that rules real options out, not a wall poster" },
          { sector: "Physical & daily life", example: "The house chosen for the life actually planned in it" }
        ],
        assessEvidence: "Stated positioning across the property; whether published work organises around defined themes or accumulates without structure; consistency of direction across the observable record (archives, dated material); whether major visible changes trace to a stated direction.",
        certEvidence: "Strategic plans and roadmaps with dates; board or leadership materials showing the direction in use; decision memos referencing it; planning-cycle documentation." },
      { id: "L2", name: "Foundational Durability",
        statement: "Is the entity's model built on a sustainable basis that creates real value — or on concentrated, extractive, or receding conditions?",
        measures: "This domain covers what the entity stands on: how it sustains itself, whether that sustainment comes from value genuinely delivered or value extracted, how concentrated its dependencies are, and whether the ground beneath them is strengthening or receding. An entity may be solvent and still be standing on nothing durable. Durability is assessed as durability; the compliance character of any mechanism belongs to Pillar N and is not assessed here.",
        factors: [
          "Basis of sustainment — how the entity funds or supports its continued operation",
          "Value orientation — whether the model is built on value delivered to those it serves or on extraction from them",
          "Evidence that value is being delivered in the present, not only historically",
          "Concentration of dependence on any single channel, client, platform, or mechanism",
          "Trajectory of the ground the model rests on — strengthening or receding",
          "Owned, compounding capital versus rented position"
        ],
        boundary: "Whether any mechanism conflicts with a written rule (N2); the accuracy of claims about the model (N1); the engineering quality of what is built (IO); the stated plan itself (L1).",
        anchors: [
          { score: 0, text: "The model rests on concentrated dependencies whose ground is receding, with no owned capital accumulated and no present evidence of value delivered." },
          { score: 6, text: "The basis of sustainment and its value orientation cannot be established from available evidence." },
          { score: 12, text: "Some durable basis exists, while significant parts of the model depend on concentrated or receding conditions." },
          { score: 18, text: "The model rests substantially on value delivered and owned capital, with identified minor dependencies." },
          { score: 25, text: "Sustainment is founded on demonstrated present value, dependencies are diversified, and owned capital is compounding across the observable record." }
        ],
        lens: [
          { sector: "Website", example: "How the property earns; whether audience value or extraction drives it; traffic-source concentration; accumulated authority as owned capital" },
          { sector: "Software tool", example: "Pricing basis and value delivered per unit paid; provider and channel dependency" },
          { sector: "Organization", example: "Revenue basis and client concentration; value delivered versus extracted; equity built versus reach rented" },
          { sector: "Physical & daily life", example: "What sustains the asset's worth; clear title and durable value rather than a depreciating or contested holding" }
        ],
        assessEvidence: "Basis of monetisation visible on the property; evidence of value delivered in the present rather than historically only (recency and substance of independent feedback); audience and traffic concentration from public tools; accumulated authority and referring-domain profile; trend across the longest available public window.",
        certEvidence: "Revenue composition and margin by line; client and channel concentration figures; retention and repeat-purchase data; customer outcome records; asset registers and contracts governing critical dependencies." },
      { id: "L3", name: "Decision Discipline",
        statement: "Do observable decisions show research, patience, and deliberate acceptance of short-term cost where it purchases durable benefit — calibrated to real constraints?",
        measures: "This domain reads conduct rather than statements: the pattern by which the entity actually decides. It rewards research depth before commitment, willingness to absorb a short-term cost — in money, time, or appearance — for durable gain, and honest course-correction when the environment answers back. Discipline is always measured relative to real means: a thoroughly researched modest decision scores above a careless expensive one.",
        factors: [
          "Research depth before major commitments",
          "Willingness to accept short-term cost for durable benefit",
          "Calibration to real constraints — discipline relative to means, never absolute spend",
          "Responsiveness — course-correction when results contradict assumptions",
          "Consistency of the pattern across decisions"
        ],
        boundary: "The quality of what decisions produced (IO); the plan they follow (L1); preparedness for shocks (L4).",
        anchors: [
          { score: 0, text: "Observable decisions consistently take the fastest available path at the cost of durable benefit, with no evidence of research or correction." },
          { score: 6, text: "Evidence of any decision process is minimal; discipline cannot be confirmed." },
          { score: 12, text: "Roughly half of observable decisions show research and long-term reasoning; the remainder are expedient." },
          { score: 18, text: "Most observable decisions show research depth and accepted trade-offs, with isolated lapses." },
          { score: 25, text: "Decisions consistently show research, patience, deliberate short-term sacrifice for durable gain, and correction when results demand it — within real means." }
        ],
        lens: [
          { sector: "Website", example: "A researched cornerstone asset built once and properly, versus volume produced quickly" },
          { sector: "Software tool", example: "The refactor accepted now instead of debt carried indefinitely" },
          { sector: "Organization", example: "The complete, evidenced case built before presenting, rather than premature partial reveals" },
          { sector: "Physical & daily life", example: "The researched purchase within a fixed budget; the loan taken so the durable asset is kept" }
        ],
        assessEvidence: "Comparative depth of visible work products; evidence of iteration or correction across archived versions; whether the entity responded to observable adverse events; consistency of care across outputs of different ages.",
        certEvidence: "Decision records and options analyses; research conducted before commitments; post-mortems and correction records; budget and trade-off documentation." },
      { id: "L4", name: "Resilience & Forward Risk",
        statement: "Are the entity's principal shocks and its exposure to obsolescence identified, with proportionate buffers and evidence of renewal?",
        measures: "This domain covers preparedness against two kinds of failure: sudden shocks that interrupt operation, and slow obsolescence that erodes the relevance of what the entity does. It assesses threat identification, buffers proportionate to means, redundancy in critical paths, and whether the entity is keeping its offering current against foreseeable change in its field.",
        factors: [
          "Identification of the principal threats to continuity",
          "Buffers and reserves proportionate to size and means",
          "Redundancy in critical paths — no single point of total failure",
          "Exposure to obsolescence in the entity's sector or service category",
          "Evidence of ongoing renewal of the offering against foreseeable change"
        ],
        boundary: "Renewal of competitive distinction specifically (XE4); the durability of the current model (L2); the discipline behind decisions (L3); risks arising from non-compliance, which N assesses as compliance while this domain assesses only preparedness.",
        anchors: [
          { score: 0, text: "A principal threat is unacknowledged, no buffer exists, a single failure would be terminal, and the offering shows no renewal against foreseeable change." },
          { score: 6, text: "Risk posture and renewal cannot be established from available evidence." },
          { score: 12, text: "Some threats are acknowledged with partial buffers, while significant exposures remain unaddressed." },
          { score: 18, text: "Principal threats are identified with proportionate buffers and some redundancy, with minor gaps in forward renewal." },
          { score: 25, text: "Threats and obsolescence exposure are identified, buffered proportionately, critical paths are redundant, and the offering is demonstrably renewed against foreseeable change." }
        ],
        lens: [
          { sector: "Website", example: "Audience reachable through more than one path; assets not held by a single gatekeeper; offering kept current as the field changes" },
          { sector: "Software tool", example: "No single point of failure in stack or supply chain; roadmap addressing category shift" },
          { sector: "Organization", example: "Continuity planning and reserves proportionate to size; service line renewal against market change" },
          { sector: "Physical & daily life", example: "A reserve against interruption; systems that still function when one input fails" }
        ],
        assessEvidence: "Diversity of reachable channels and owned audience assets; observable single points of failure; whether the service category faces visible substitution or decline; evidence of the offering being updated across the archived record.",
        certEvidence: "Risk registers and continuity plans; reserve positions and insurance; scenario planning; product or service renewal roadmaps; incident and recovery history." }
    ],
  },
  {
    code: "IO", name: "Internal Optimization",
    governingLaw: "The Weakest Link Axiom",
    description: "Tests whether every internal element is executed to a complete professional standard. The entity's real value is capped by its worst-executed layer, because the audience always finds that layer. The four domains below partition the internals of any built system: the foundation it runs on, the output it produces, the systems by which it is found, and the supporting layer that completes and maintains it.",
    altitude: "Assessed at execution altitude — how well each internal element is built, produced, distributed, and maintained.",
    criteria: [
      { id: "IO1", name: "Technical Foundation & Integrity",
        statement: "Is the underlying build sound, secure, performant, and functionally intact throughout — not only on its principal surfaces?",
        measures: "This domain covers the machine the entity runs on and whether all of it actually works. It combines the engineering fundamentals — performance, stability, security, architecture — with functional integrity: whether every part the audience can reach operates as intended. A build may be fast on its front surface and structurally unsound beneath it; this domain scores the composite, not the best-performing factor.",
        factors: [
          "Load performance and responsiveness under real conditions",
          "Stability, availability, and error rates",
          "Correct operation across the devices and contexts the audience uses",
          "Security fundamentals appropriate to the field",
          "Soundness of the underlying architecture — organisation, duplication level, and efficiency",
          "Machine-readability and discoverability of the structure",
          "Functional integrity — every reachable path, control, and destination operates as intended"
        ],
        boundary: "Whether an architectural pattern conflicts with a written rule (N2); the quality of what the structure carries (IO2); how the entity becomes findable (IO3); completeness of the supporting detail layer and its maintenance (IO4).",
        anchors: [
          { score: 0, text: "The build fails on multiple fundamentals; performance, stability, architecture, or functional integrity are pervasively deficient." },
          { score: 6, text: "Only the principal surface is sound; the build degrades materially beyond it — or soundness cannot be established." },
          { score: 12, text: "Technical factors are mixed: some meet the field's standard while others clearly do not." },
          { score: 18, text: "Nearly all technical factors meet the current standard, with a small number of bounded exceptions." },
          { score: 25, text: "Every technical factor reviewed meets the current standard, verified with the field's standard instruments, with no functional defects found." }
        ],
        lens: [
          { sector: "Website", example: "Load performance and Core Web Vitals, uptime, cross-device operation, transport security, site architecture and duplication level, crawlability and indexation, working links and controls" },
          { sector: "Software tool", example: "Performance, uptime, scalability, security, architectural quality, defect rate" },
          { sector: "Organization", example: "Operational infrastructure, systems, and tooling the work depends on" },
          { sector: "Physical & daily life", example: "Foundation, structure, wiring, plumbing, ventilation — and whether each actually functions" }
        ],
        assessEvidence: "Performance testing with public instruments across multiple page types; availability and error observation; testing across viewports and devices; transport security and header inspection; inspection of URL organisation and duplication level; indexation and crawlability checks; systematic testing of reachable links, controls, and destinations.",
        certEvidence: "Infrastructure and architecture documentation; monitoring and uptime records; security audit reports; defect registers and technical debt inventories; QA test coverage." },
      { id: "IO2", name: "Output & Presentation Quality",
        statement: "Is everything the entity produces and presents — in every format and on every surface it controls — substantive, accurate, and made for the audience receiving it?",
        measures: "This domain covers the entity's output in all its forms, not one form. Written material, service and product descriptions, video, imagery, published posts on any surface the entity controls, and the presentation through which all of it reaches the audience are assessed together on one question: is this substantive and made for the person receiving it, or produced to fill space. The presentational layer is included because how output is presented is part of its quality.",
        factors: [
          "Depth and completeness of written output relative to what the audience needs",
          "Substance of service, product, and offer descriptions",
          "Quality of video, imagery, and other non-written output on every controlled surface",
          "Originality — first-hand knowledge and documented experience rather than restated commodity material",
          "Accuracy and verifiability of what is presented",
          "Clarity and professionalism of the presentation through which output reaches the audience",
          "Consistency of quality across formats, surfaces, and ages of material"
        ],
        boundary: "Whether a production practice conflicts with a written rule (N2); whether claims inside the output are true (N1); how output is distributed or made findable (IO3); the supporting metadata around it (IO4).",
        anchors: [
          { score: 0, text: "Output across formats is produced to fill space, with no discernible substance for the audience receiving it." },
          { score: 6, text: "Some output carries substance while a significant portion across formats is thin, restated, or without practical use — or quality cannot be established." },
          { score: 12, text: "Output quality is mixed — roughly half of what was reviewed across formats meets a professional standard." },
          { score: 18, text: "Output is substantive, accurate, and evidently made for the audience across most formats and surfaces, with isolated exceptions." },
          { score: 25, text: "Every format and surface reviewed carries substantive, accurate, original output, presented clearly and consistently." }
        ],
        lens: [
          { sector: "Website", example: "Written material, service and homepage copy, offers, imagery and video, and material published on every social surface the entity controls, together with the presentation of all of it" },
          { sector: "Software tool", example: "Output accuracy and usefulness, plus interface presentation quality" },
          { sector: "Organization", example: "The product or service as delivered, plus every material the customer receives" },
          { sector: "Physical & daily life", example: "Materials and workmanship, plus the finish through which the result is experienced" }
        ],
        assessEvidence: "Full review of representative output across every format and controlled surface, including social channels; assessment of depth, accuracy, and originality; comparison against what a competent alternative provides; evaluation of presentation quality; consistency check across formats and ages.",
        certEvidence: "Editorial and production standards; subject-matter expertise records; sourcing and verification procedures; brand and presentation guidelines; customer outcome data." },
      { id: "IO3", name: "Visibility & Reach Systems",
        statement: "Are the systems that make the entity findable and reachable by its intended audience implemented competently — and are they producing measurable reach?",
        measures: "This domain covers everything the entity does to be found and reached, together with the measurable outcome of that work. It is a systems domain rather than a single technique: the optimisation of what the entity controls directly, the development of standing and reputation beyond its own boundaries, presence in the places its audience actually looks, and the reach those efforts actually produce. Effort without outcome and outcome without effort both score below a domain where the systems function and the reach follows.",
        factors: [
          "Optimisation of directly controlled surfaces for discovery",
          "Development of external standing, references, and authority beyond the entity's own boundaries",
          "Presence and currency in the venues and directories the audience actually uses",
          "Coverage of the demand the entity intends to serve",
          "Measurable reach outcomes relative to the entity's age and effort",
          "Health and quality of the reach profile rather than its raw volume"
        ],
        boundary: "Whether an acquisition practice conflicts with a written rule (N2); whether reach figures are claimed accurately (N1); the quality of what is delivered once reached (IO2); demand for the entity by name specifically, which is recognition (XE2); what accumulated standing means for the model's foundation (L2).",
        anchors: [
          { score: 0, text: "No functioning visibility system is evident, and measurable reach is negligible relative to the entity's age." },
          { score: 6, text: "Isolated optimisation exists on controlled surfaces only, with no external development and no meaningful reach — or reach cannot be established." },
          { score: 12, text: "Some visibility systems function while others are absent or dormant; reach is modest relative to age and effort." },
          { score: 18, text: "Visibility systems function across most areas with credible external standing, producing reach consistent with the entity's age, with minor gaps." },
          { score: 25, text: "Controlled surfaces are optimised, external standing is genuine and developing, presence is current wherever the audience looks, and measurable reach is strong relative to age." }
        ],
        lens: [
          { sector: "Website", example: "On-page optimisation, off-page authority development and referring-domain profile, local presence and directory currency, keyword coverage, organic traffic outcomes, authority scores and profile health" },
          { sector: "Software tool", example: "Listing presence, integration ecosystems, developer and marketplace visibility, adoption reach" },
          { sector: "Organization", example: "Market presence, referral networks, professional standing, and the reach these produce" },
          { sector: "Physical & daily life", example: "Location, access, connection to the routes and services through which people arrive" }
        ],
        assessEvidence: "Inspection of on-surface optimisation across page types; referring-domain profile, authority scores, and profile health from public tools; presence and currency in relevant directories and venues; coverage of the demand the entity targets; organic traffic level and trend relative to domain age.",
        certEvidence: "Search console and analytics data; link acquisition programme records; directory and listing management processes; campaign performance data; reach and share-of-voice analysis." },
      { id: "IO4", name: "Operational Completeness & Upkeep",
        statement: "Is the supporting layer complete across every surface the entity operates, and is the whole actively maintained rather than left to decay?",
        measures: "This domain covers the layer that supports everything else — descriptive, structural, and identifying elements — together with the maintenance that keeps the entity current across every surface it operates, including those beyond its principal one. Incompleteness and decay produce the same result for an audience: the impression that no one is attending to the entity.",
        factors: [
          "Completeness of descriptive and supporting elements throughout",
          "Structured and machine-readable supporting information where the field expects it",
          "Alternatives and fallbacks for elements not perceivable by all audiences",
          "Presence of the identity, contact, and legal surfaces the field expects",
          "Currency of every surface the entity operates, including secondary and external ones",
          "Evidence of active maintenance, correction, and freshness over time"
        ],
        boundary: "Whether a supporting element is deceptive rather than merely absent (N); the engineering soundness of the build (IO1); the substance the elements describe (IO2); whether the entity is findable (IO3).",
        anchors: [
          { score: 0, text: "The supporting layer is largely absent or left at defaults, with affirmative evidence of neglect across surfaces." },
          { score: 6, text: "Supporting elements are completed on the principal surface only; secondary surfaces and maintenance are neglected — or completeness cannot be established." },
          { score: 12, text: "Supporting elements are present but inconsistently finished, and maintenance across surfaces is intermittent." },
          { score: 18, text: "The supporting layer is complete nearly everywhere and actively maintained, with a small number of identified gaps." },
          { score: 25, text: "Every supporting element reviewed is complete and current across every surface the entity operates, with nothing left as a default, placeholder, or abandoned property." }
        ],
        lens: [
          { sector: "Website", example: "Descriptive metadata, structured data, image alternatives, identity and legal pages, currency of every linked or operated external profile, maintenance cadence" },
          { sector: "Software tool", example: "Documentation, error and empty states, changelogs, support surfaces" },
          { sector: "Organization", example: "Records, procedures, labelling, and housekeeping across all locations" },
          { sector: "Physical & daily life", example: "Finishing work and upkeep across the whole property, not the show rooms only" }
        ],
        assessEvidence: "Inspection of supporting elements across representative pages; structured-data validation; alternative-text checks; presence of expected identity and legal surfaces; currency check of every external profile the entity links or operates; freshness and update cadence across the archived record.",
        certEvidence: "Content and asset inventories; maintenance schedules and ownership; QA checklists; correction audit trails; documentation upkeep records." }
    ],
  },
  {
    code: "N", name: "Non-Negotiable Integrity",
    governingLaw: "The Cost-Indifferent Mandate",
    description: "Tests whether the entity remains honest and compliant even where dishonesty is cheaper, faster, or common practice. Integrity that bends to cost is not integrity; it is pricing. This pillar is the exclusive home of every violation, deception, and false-claim finding in a LIONXE™ audit — no other pillar characterises a practice as a breach.",
    altitude: "Assessed at both altitudes: the honesty of the model and the honesty of its execution.",
    criteria: [
      { id: "N1", name: "Claim Accuracy",
        statement: "Can every significant claim the entity makes — quantitative, credential, historical, and social proof — be verified against real evidence?",
        measures: "This domain covers the truthfulness of what the entity asserts about itself. Every number, credential, history statement, and item of displayed social proof is a claim, and each is either verifiable or decorative. The most serious finding available here is a claim contradicted by the entity's own visible record — a gap between what is asserted and what its own footprint supports.",
        factors: [
          "Quantitative claims — volumes, results, scale, duration",
          "Credential and certification claims",
          "Historical and experience claims",
          "Authenticity of displayed social proof — reviews, testimonials, ratings",
          "Consistency between claims and the entity's own verifiable record"
        ],
        boundary: "Whether relationships behind a claim are disclosed (N3); whether a claim is presented through an engineered deceptive pattern (N4); the quality of the substance the claim describes (IO2).",
        anchors: [
          { score: 0, text: "Significant claims are contradicted by the entity's own verifiable record, or displayed social proof shows affirmative evidence of fabrication." },
          { score: 6, text: "Claims are present but largely unverifiable from available evidence." },
          { score: 12, text: "Some significant claims are verifiable; others cannot be substantiated." },
          { score: 18, text: "Nearly all significant claims are verifiable, with minor unsubstantiated statements." },
          { score: 25, text: "Every significant claim reviewed is verifiable, and displayed social proof is authentic and traceable." }
        ],
        lens: [
          { sector: "Website", example: "Customer and results claims measured against the verifiable record; authenticity of testimonials and ratings" },
          { sector: "Software tool", example: "Performance and capability claims reproducible by a third party" },
          { sector: "Organization", example: "Credentials, history, and outcome claims that withstand checking" },
          { sector: "Physical & daily life", example: "The seller's stated history and condition of the item, verified independently" }
        ],
        assessEvidence: "Extraction of every significant claim; independent verification against public records, directories, review platforms, and archives; comparison of claimed scale against the visible footprint; assessment of displayed social proof for authenticity signals and traceability.",
        certEvidence: "Source data behind quantitative claims; certification and credential documents; customer records supporting outcome claims; review-collection process documentation." },
      { id: "N2", name: "Compliance With Governing Rules",
        statement: "Does the entity comply with the written laws, regulations, and platform policies that govern its arena — even where violation is cheaper or widely practised?",
        measures: "This domain covers adherence to the written rules of the entity's own arena, and it is the exclusive home of every rule-breach finding in a LIONXE audit. No other criterion in this rubric may characterise a practice as a violation. Widespread practice is never a defence: under the Cost-Indifferent Mandate, 'everyone does it' is evidence about the category, not exculpation for the entity.",
        factors: [
          "Platform and marketplace policies governing the entity's distribution",
          "Applicable laws and sector regulations",
          "Licensing, permits, and authorisations",
          "Intellectual property and rights compliance",
          "Data and privacy obligations where applicable"
        ],
        boundary: "Deception not covered by any written rule (N4); disclosure adequacy (N3); the durability consequences of a practice (L2); its engineering consequences (IO1).",
        anchors: [
          { score: 0, text: "A practice on the entity is a direct match to a published prohibition in its arena, present and active at the time of review." },
          { score: 6, text: "Compliance cannot be confirmed from available evidence." },
          { score: 12, text: "Compliance holds in some areas while identified practices in others conflict with governing rules." },
          { score: 18, text: "Compliance holds across nearly all reviewed areas, with minor identified gaps." },
          { score: 25, text: "No conflict with any applicable governing rule was found anywhere reviewed." }
        ],
        lens: [
          { sector: "Website", example: "The search platform's published policies — including patterns it defines as prohibited — plus advertising and sector rules" },
          { sector: "Software tool", example: "Platform, API, and marketplace terms; data protection obligations" },
          { sector: "Organization", example: "Licensing, labour, tax, and sector regulation" },
          { sector: "Physical & daily life", example: "Title and clearance obtained; the licence earned rather than bought; verified ownership before purchase" }
        ],
        assessEvidence: "Comparison of observable practices against the published rules of the arena, cited specifically; checks of public registries and licence records where applicable; review of disclosures required by regulation; identification of patterns that match published prohibitions.",
        certEvidence: "Licences, permits, and registrations; compliance policies and monitoring records; legal review documentation; correspondence with regulators or platforms; remediation records." },
      { id: "N3", name: "Transparency",
        statement: "Can the audience see who it is dealing with, on what terms, and what interests shape what it is being shown?",
        measures: "This domain covers disclosure — whether the audience is given what it needs to verify the story it is told. It assesses identity, terms, material relationships, and the traceability of evidence the entity presents. Disclosure is judged, not perfection: an entity that plainly discloses a limitation scores above one that conceals a strength.",
        factors: [
          "Identity and ownership disclosed and verifiable",
          "Terms, pricing, and obligations visible before commitment",
          "Material relationships disclosed — affiliations, sponsorships, commissions",
          "Traceability of presented evidence to its source",
          "Operational reality represented accurately"
        ],
        boundary: "Whether a disclosed claim is true (N1); whether concealment is engineered as an active deceptive pattern (N4); the design of where disclosures appear (IO3).",
        anchors: [
          { score: 0, text: "Material information is concealed, or the entity presents itself as something other than what it is." },
          { score: 6, text: "Minimal disclosure exists; the audience cannot verify who it is dealing with or on what terms." },
          { score: 12, text: "Some disclosure is present while other material information remains unavailable." },
          { score: 18, text: "Disclosure is substantially complete, with minor omissions." },
          { score: 25, text: "Identity, terms, relationships, and evidence sources are all disclosed clearly and verifiably." }
        ],
        lens: [
          { sector: "Website", example: "Identity and contact surfaces, pricing and terms, affiliate and sponsorship disclosure, sourcing of displayed evidence" },
          { sector: "Software tool", example: "Data use, limitations, pricing model, and dependency disclosure" },
          { sector: "Organization", example: "Ownership, terms of engagement, and conflicts of interest disclosed" },
          { sector: "Physical & daily life", example: "Known defects disclosed before the transaction" }
        ],
        assessEvidence: "Search for identity, contact, and legal surfaces; assessment of pricing and terms visibility before commitment; identification of undisclosed material relationships; checking whether presented evidence links to a verifiable source.",
        certEvidence: "Corporate registration and ownership records; contracts and standard terms; disclosure policies; conflict-of-interest registers." },
      { id: "N4", name: "Absence of Manipulation",
        statement: "Is the entity free of patterns engineered to deceive — whether the target is a person or a system, and whether or not a written rule names it?",
        measures: "This domain covers engineered deception as such: patterns constructed to make something appear other than what it is. It is deliberately broader than N2, which addresses written rules; a pattern can be manipulative without yet being prohibited. Both audiences count equally — a design that misleads a person and a construction that misleads an automated system fail this domain identically.",
        factors: [
          "Interface patterns engineered to produce unintended actions",
          "Manufactured urgency, scarcity, or pressure",
          "Presenting the entity as something it is not",
          "Staged or manufactured social proof mechanics",
          "Showing different substance to different audiences or systems"
        ],
        boundary: "Breaches of written rules as such (N2); whether individual claims are false (N1); whether disclosures are absent (N3); the design quality of the experience (IO3).",
        anchors: [
          { score: 0, text: "An engineered deceptive pattern is present and material to how the entity presents itself." },
          { score: 6, text: "Manipulative patterns cannot be ruled out from available evidence." },
          { score: 12, text: "Some presentation is straightforward while identified elements are engineered to mislead." },
          { score: 18, text: "No material manipulative pattern was found, with minor questionable presentation choices." },
          { score: 25, text: "Nothing reviewed was engineered to mislead any audience, human or automated." }
        ],
        lens: [
          { sector: "Website", example: "Interface pressure patterns, manufactured urgency, staged proof mechanics, presenting as something other than what the entity is" },
          { sector: "Software tool", example: "Dark patterns in flows, cancellation friction, misleading defaults" },
          { sector: "Organization", example: "Misrepresentation to customers, partners, or oversight bodies" },
          { sector: "Physical & daily life", example: "Staged appearances that conceal the real condition of what is being offered" }
        ],
        assessEvidence: "Walkthrough of commitment and cancellation paths for engineered friction; identification of urgency and scarcity mechanics against actual conditions; assessment of whether presentation matches reality; checks for differing presentation to different audiences.",
        certEvidence: "Interface and campaign approval records; A/B testing history and rationale; complaint and dispute logs; internal marketing standards." }
    ],
  },
  {
    code: "XE", name: "eXceptional Distinction",
    governingLaw: "The Commodity Threshold Law",
    description: "Tests whether the entity offers something a generic alternative could not replace. If it can be swapped out with no loss to its audience, its distinction is zero — whatever its marketing says. The four domains move from claimed, to recognised, to proven, to sustained.",
    altitude: "Assessed at both altitudes: distinction claimed at model level and distinction proven in execution.",
    criteria: [
      { id: "XE1", name: "Articulated Distinction",
        statement: "Does the entity state a specific, defensible difference — or only claims every peer in its category could also make?",
        measures: "This domain covers the claim layer of distinction: whether the entity can articulate what makes it different in terms specific enough to be checked. Category-generic descriptors and price levers are not distinction. The test applied throughout is simple: could a direct competitor place this same statement on its own surface without it becoming false?",
        factors: [
          "Specificity — the claim identifies something concrete",
          "Defensibility — the claim withstands checking",
          "Exclusivity — a peer could not truthfully make the same claim",
          "Relevance — the difference matters to the audience it addresses",
          "Consistency of the claim across the entity's surfaces"
        ],
        boundary: "Whether the claim is true (N1); whether it is provable in practice (XE3); whether the entity is recognisable (XE2).",
        anchors: [
          { score: 0, text: "No claim of difference is made, or every claim made is one any peer could equally make." },
          { score: 6, text: "A difference is gestured at but stated too generically to be checked." },
          { score: 12, text: "Some stated differences are specific while others are category-generic." },
          { score: 18, text: "A specific, defensible difference is stated, with minor reliance on generic language." },
          { score: 25, text: "A specific, defensible, exclusive difference is stated consistently and matters to the audience it addresses." }
        ],
        lens: [
          { sector: "Website", example: "A stated difference no competitor page could also carry truthfully" },
          { sector: "Software tool", example: "A capability rivals lack, stated plainly and specifically" },
          { sector: "Organization", example: "Positioning with a concrete, defensible basis" },
          { sector: "Physical & daily life", example: "A stated advantage that is genuinely exclusive — and true" }
        ],
        assessEvidence: "Extraction of every stated difference; substitution test against direct competitors' equivalent surfaces; assessment of specificity and relevance; consistency check across the entity's surfaces.",
        certEvidence: "Positioning documentation; competitive analysis; the internal basis for differentiation claims." },
      { id: "XE2", name: "Recognizable Identity",
        statement: "Would the entity be recognised by its audience with its name removed — and is there measurable demand for it by name?",
        measures: "This domain covers recognition: what remains when the label is taken away. It assesses distinctiveness of voice, form, and standards, together with whether the audience actually seeks the entity out by name. Where public data on named demand exists, it provides the most direct available measurement of whether an identity exists in the market's mind at all.",
        factors: [
          "Distinctiveness of voice and expression",
          "Distinctiveness of visual and formal identity",
          "Measurable demand for the entity by name",
          "Consistency of identity across every surface",
          "Whether the identity would survive removal of the name"
        ],
        boundary: "Whether the identity is stated as a claim (XE1); whether an advantage is provable (XE3); design quality as usability (IO3).",
        anchors: [
          { score: 0, text: "Nothing distinguishes the entity from its category; with the name removed, no element identifies it, and there is no demand for it by name." },
          { score: 6, text: "A nominal identity exists but is indistinguishable from category convention." },
          { score: 12, text: "Some elements are distinctive while others are category-standard; named demand is marginal." },
          { score: 18, text: "A recognisable identity is present across most surfaces with measurable named demand, with minor inconsistencies." },
          { score: 25, text: "The entity is unmistakably recognisable without its name, consistently across surfaces, with substantial demand for it by name." }
        ],
        lens: [
          { sector: "Website", example: "Recognisable with the logo removed; measurable branded search demand" },
          { sector: "Software tool", example: "An interface and voice recognisable at a glance" },
          { sector: "Organization", example: "A reputation that arrives before the name does" },
          { sector: "Physical & daily life", example: "The place people describe to others without needing to name it" }
        ],
        assessEvidence: "Name-removal assessment across surfaces; comparison of voice and form against category conventions; branded versus non-branded demand from public analysis tools; consistency check across all public surfaces.",
        certEvidence: "Brand guidelines and their enforcement; brand awareness or recall research; audience surveys; share-of-voice analysis." },
      { id: "XE3", name: "Distinction in Practice",
        statement: "Does a verifiable advantage exist that a competitor could not trivially replicate — in access, economics, method, or expertise?",
        measures: "This domain covers the proof layer: whether claimed distinction survives contact with reality. It assesses advantages that are both verifiable and non-trivial to copy. The operative standard is replication cost — anything a competent competitor could reproduce in an afternoon with the same commonly available tools is not distinction, whatever the marketing says.",
        factors: [
          "Exclusive access to inputs, data, distribution, or relationships",
          "Superior economics at equal or better quality",
          "Proprietary method, process, or system",
          "Documented first-hand expertise the audience can verify",
          "Replication cost — how hard the advantage is to copy"
        ],
        boundary: "Whether the advantage is claimed (XE1); whether it is recognised (XE2); whether it is maintained over time (XE4); the quality of ordinary deliverables (IO2).",
        anchors: [
          { score: 0, text: "No advantage exists that a competitor could not replicate trivially with commonly available tools." },
          { score: 6, text: "An advantage is asserted but cannot be verified from available evidence." },
          { score: 12, text: "A verifiable advantage exists in some areas but is absent or trivially replicable in others." },
          { score: 18, text: "A verifiable, non-trivially replicable advantage exists, with limited scope." },
          { score: 25, text: "A verifiable advantage exists that competitors could not replicate without substantial investment, and it is evident throughout the entity." }
        ],
        lens: [
          { sector: "Website", example: "Documented first-hand expertise, original research, or proprietary material competitors cannot copy" },
          { sector: "Software tool", example: "A verifiable technical or data advantage" },
          { sector: "Organization", example: "Exclusive access, superior economics, or proprietary method" },
          { sector: "Physical & daily life", example: "Provably better terms at equal quality, or access others cannot obtain" }
        ],
        assessEvidence: "Feature-by-feature comparison against top competitors; identification of anything present here and absent there; assessment of how easily each advantage could be replicated; verification of first-hand expertise where claimed.",
        certEvidence: "Proprietary process documentation; exclusive agreements; cost structure analysis; intellectual property holdings; expertise and credential evidence." },
      { id: "XE4", name: "Enduring Relevance",
        statement: "Is the distinction being actively renewed as the environment shifts — or is it a past advantage decaying in place?",
        measures: "This domain covers trajectory. Distinction has a shelf life: environments move, and an advantage that is not renewed becomes an artefact. It assesses whether the entity is actively maintaining its edge against observable change, whether it has adapted when the environment moved, and whether current investment is going into the distinction or only into holding position.",
        factors: [
          "Evidence of renewal and reinvestment in the distinction",
          "Adaptation to observable shifts in the environment",
          "Currency of the advantage against present conditions",
          "Trajectory — strengthening, holding, or decaying across the observable record"
        ],
        boundary: "The original existence of the advantage (XE3); the durability of the underlying model (L2); the discipline behind decisions (L3).",
        anchors: [
          { score: 0, text: "The distinction is a past advantage with no renewal, and the environment has moved decisively past it." },
          { score: 6, text: "Renewal cannot be confirmed from available evidence." },
          { score: 12, text: "Some renewal is evident while significant elements remain unadapted to present conditions." },
          { score: 18, text: "The distinction is substantially maintained and adapted, with minor areas left unattended." },
          { score: 25, text: "The distinction is actively renewed, currently relevant, and strengthening across the observable record." }
        ],
        lens: [
          { sector: "Website", example: "Adaptation as the search and content environment shifts" },
          { sector: "Software tool", example: "The advantage maintained and extended across releases" },
          { sector: "Organization", example: "The edge renewed as the market moves" },
          { sector: "Physical & daily life", example: "The choice that still holds up years later" }
        ],
        assessEvidence: "Comparison of the current state against archived versions across the longest available window; assessment of whether the entity adapted at observable inflection points; evaluation of the advantage's currency against present conditions.",
        certEvidence: "Innovation pipeline and roadmap; reinvestment figures; market monitoring processes; records of strategic adaptation." }
    ],
  }
];
const SCALE_LEVELS = [
  { score: 0,  label: "Absent or directly contradicted", desc: "Affirmative evidence exists that the standard is not being met, or that it is being actively violated. Not simply the absence of evidence." },
  { score: 6,  label: "Minimal — mostly absent", desc: "Minimal evidence found. The standard may or may not be met in reality but available evidence does not confirm it. Also the correct score when no evidence can be found at all — the no-evidence rule." },
  { score: 12, label: "Partial — inconsistent", desc: "Present in some parts of the entity but absent or weak in others. Roughly half of what was reviewed meets the standard." },
  { score: 18, label: "Substantial — minor gaps", desc: "Present across most of the entity with identified minor exceptions. The standard is clearly being met in the majority of cases." },
  { score: 25, label: "Complete — no gaps found", desc: "Consistently present everywhere reviewed, verified with the evidence available in the applicable track. The colour of a perfect criterion is the colour of LIONXE™ Platinum — a perfect total is sixteen of these." },
];

const PRINCIPLES = [
  { icon: Layers, tag: "Principle 01", title: "Scoring statements describe entity states, not verification methods.",
    body: "Every anchor describes what the entity's real-world situation looks like at that level — whether verified from a public website, a submitted board document, or a physical inspection. The evidence panels tell you how to verify it for each track and sector." },
  { icon: Search, tag: "Principle 02", title: "The scope of review expands when internal documents are submitted.",
    body: "Where a statement says reviewed, it means reviewed within whatever evidence scope is available: public sources only in an independent assessment; all submitted documentation plus public sources in a certification audit." },
  { icon: Lightbulb, tag: "Principle 03", title: "When no evidence exists, the score is always 6 — never blank, never 0 by default.",
    body: "A 0 requires affirmative evidence of failure. A 6 records that available evidence does not confirm the standard. No criterion may ever be left unscored — and a 6 caused by invisible strength is the natural incentive to certify." },
];

const RULES = [
  { icon: Gauge, tag: "Altitude Rule", title: "Every pillar has an assessment altitude.",
    body: "Pillar L is assessed at model and strategy altitude only; Pillar IO at execution altitude; N and XE at both. Evidence may only be filed at its pillar's altitude — page speed can never be an L finding, and a mission statement can never be an IO finding." },
  { icon: Zap, tag: "Fast-Fail Clause", title: "An entity that cannot be evaluated fails at the first gate.",
    body: "If failure is so fundamental that evaluation itself is impossible — a website that does not load, an entity that cannot be identified, a structure that is condemned — the audit terminates with a documented fast-fail. No further pillars are scored." },
  { icon: Scale, tag: "Proportionality Rule", title: "Every judgment is relative to real means and natural cycles.",
    body: "Discipline, investment, and resilience are measured against the entity's actual constraints and its sector's natural planning cycle — never against an absolute spending or timeline benchmark. A thoroughly researched budget decision outscores a lazy expensive one." },
  { icon: Calculator, tag: "Composite Scoring Rule", title: "A domain scores on all its factors, never on its strongest one.",
    body: "Each criterion covers a defined set of factors. A score of 25 requires every factor in that set to be met; a domain in which one factor performs well and others do not scores at the level the composite supports. Strength in a single factor is recorded as a measured finding, never as a favourable verdict on the domain." },
  { icon: Search, tag: "Evidence Ceiling Rule", title: "Factors that cannot be verified cap the score, and the cap is disclosed.",
    body: "Where a factor cannot be verified from the evidence available in the applicable track, it is scored as unconfirmed at the 6-level and the domain's achievable score is capped accordingly. Independent assessments therefore carry a structural ceiling: they measure what is publicly visible, not what exists. Every published assessment states this openly, and certification audits raise the ceiling by supplying the internal evidence public sources cannot provide." },
];

const FILING_LAWS = [
  { n: "Law 1", icon: Focus, title: "Domain Purity",
    body: "A criterion's assessment discusses only its own domain. No cross-references, no \u201chowever, elsewhere\u201d, no foreshadowing of other findings. Where a domain is strong, the criterion records it as strong without qualification; weakness is recorded by whichever criterion owns the weak domain." },
  { n: "Law 2", icon: Shield, title: "Violation Homing",
    body: "Every violation, deception, false claim, and rule-breach is assessed exclusively in Pillar N. No criterion in L, IO, or XE characterises any practice as a breach — where a fact has a compliance dimension, that dimension is assessed in N and nowhere else." },
  { n: "Law 3", icon: Layers, title: "The Facet Rule",
    body: "A single real-world condition may have facets in more than one domain. Each criterion assesses only its own facet, in its own domain\u2019s language. Three criteria may observe the same object; none quotes another\u2019s reading." },
  { n: "Law 4", icon: FileCheck, title: "Primary Evidence",
    body: "Every piece of evidence has one primary home — the domain whose question it answers most directly. Facet assessments elsewhere rest on that criterion\u2019s own observation, never on borrowed evidence, so no finding is counted twice." },
];

const SECTORS = [
  { icon: Globe, name: "Websites & digital platforms", note: "The primary audit focus — where most published LIONXE™ assessments live." },
  { icon: Wrench, name: "Software tools & products", note: "SaaS platforms, AI tools, and apps — scored on what they do, not what they say." },
  { icon: Building2, name: "Businesses & organizations", note: "Companies, agencies, and business models — the formal certification market." },
  { icon: Youtube, name: "Content & media channels", note: "Channels and publications — one real long-form outweighs fifty manufactured shorts." },
  { icon: HardHat, name: "Physical projects & construction", note: "Homes, premises, infrastructure — the same four gates, in concrete." },
  { icon: Wallet, name: "Personal & daily-life decisions", note: "Purchases, family finance, career moves — the framework as a way of deciding." },
];

const TIERS = [
  { level: "Does Not Pass",         range: "0–199",   color: "#C94040" },
  { level: "Below Threshold",       range: "200–299", color: "#8B9BB2" },
  { level: "Conditional Pass",      range: "300–349", color: "#E07840" },
  { level: "LIONXE Certified",      range: "350–379", color: "#4A9960" },
  { level: "LIONXE Gold Certified", range: "380–399", color: "#C8971F" },
  { level: "LIONXE Platinum",       range: "400",     color: "#5B8CFF" },
];

const PILLAR_ICONS: Record<string, React.ElementType> = { L: Brain, IO: Gauge, N: Shield, XE: Sparkles };

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getTier(total: number) {
  if (total < 200) return TIERS[0];
  if (total < 300) return TIERS[1];
  if (total < 350) return TIERS[2];
  if (total < 380) return TIERS[3];
  if (total < 400) return TIERS[4];
  return TIERS[5];
}

function SectionHeading({ overline, title, sub }: { overline: string; title: string; sub?: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: T.brandLt }}>{overline}</p>
      <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: T.white, fontFamily: FH }}>{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-sm leading-7" style={{ color: T.muted }}>{sub}</p>}
      <div className="mt-4 h-px w-16" style={{ background: `linear-gradient(to right, ${T.brand}, transparent)` }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CRITERION CARD — v2.0: statement + what-it-measures + anchors + lens + evidence
// ─────────────────────────────────────────────────────────────────────────────

function CriterionCard({ crit, track }: { crit: any; track: "assess" | "cert" }) {
  const [open, setOpen] = useState(false);

  return (
    <div id={crit.id} className="overflow-hidden rounded-2xl" style={{ background: T.surf, border: `1px solid ${T.bdr}`, scrollMarginTop: "24px" }}>
      <button onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-6 py-4 text-left transition-colors hover:bg-white/[0.02]">
        <span className="rounded-lg px-2.5 py-1 text-sm font-black" style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}`, color: T.brandLt, fontFamily: FH }}>
          {crit.id}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-bold" style={{ color: T.white, fontFamily: FH }}>{crit.name}</span>
          <span className="block truncate text-xs" style={{ color: T.muted }}>{crit.statement}</span>
        </span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} style={{ color: T.brandLt }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="px-6 pb-6">
              {/* Statement */}
              <p className="mb-4 rounded-xl p-4 text-sm font-medium leading-7"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${T.bdr}`, color: "#B8C5D6" }}>
                {crit.statement}
              </p>

              {/* What this measures */}
              <div className="mb-4 rounded-xl p-4" style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}` }}>
                <p className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: T.brandLt }}>
                  <BookOpen className="h-3.5 w-3.5" /> What this domain measures
                </p>
                <p className="text-sm leading-7" style={{ color: "#A9BBD4" }}>{crit.measures}</p>
              </div>

              {/* Factors in this domain */}
              <div className="mb-4 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${T.bdr}` }}>
                <p className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: T.white }}>
                  <ListChecks className="h-3.5 w-3.5" style={{ color: T.brandLt }} /> What belongs in this domain
                </p>
                <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {crit.factors.map((f: string) => (
                    <li key={f} className="flex items-start gap-2 text-xs leading-5" style={{ color: T.muted }}>
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0" style={{ color: T.brandLt }} />{f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Boundary */}
              <div className="mb-5 flex items-start gap-2.5 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.02)", border: `1px dashed ${T.bdr}` }}>
                <Ban className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: T.muted }} />
                <p className="text-xs leading-5" style={{ color: T.muted }}>
                  <strong style={{ color: "#9BAAC0" }}>Not in this domain: </strong>{crit.boundary}
                </p>
              </div>

              {/* Filing boundaries */}
              <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl p-4" style={{ background: "rgba(74,153,96,0.06)", border: "1px solid rgba(74,153,96,0.2)" }}>
                  <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: T.pass }}>
                    <CheckCircle2 className="h-3 w-3" /> What belongs here
                  </p>
                  <p className="text-xs leading-5" style={{ color: T.muted }}>{crit.belongs}</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(201,64,64,0.05)", border: "1px solid rgba(201,64,64,0.18)" }}>
                  <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: T.fail }}>
                    <AlertTriangle className="h-3 w-3" /> What never belongs here
                  </p>
                  <p className="text-xs leading-5" style={{ color: T.muted }}>{crit.neverBelongs}</p>
                </div>
              </div>

              {/* Score anchors */}
              <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: T.muted }}>Score anchors</p>
              <div className="mb-5 overflow-hidden rounded-xl" style={{ border: `1px solid ${T.bdr}` }}>
                {crit.anchors.map((anc: any, i: number) => (
                  <div key={anc.score} className="flex gap-4 px-4 py-3"
                    style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderBottom: i < 4 ? `1px solid ${T.bdr}` : "none" }}>
                    <span className="w-8 shrink-0 text-center text-lg font-black tabular-nums" style={{ color: ANCHOR_COLORS[anc.score], fontFamily: FH }}>{anc.score}</span>
                    <span className="text-sm leading-6" style={{ color: T.muted }}>{anc.text}</span>
                  </div>
                ))}
              </div>

              {/* Sector lens */}
              <p className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: T.muted }}>Across sectors</p>
              <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {crit.lens.map((l: any) => (
                  <div key={l.sector} className="rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${T.bdr}` }}>
                    <p className="mb-0.5 text-[11px] font-bold uppercase tracking-wide" style={{ color: T.brandLt }}>{l.sector}</p>
                    <p className="text-xs leading-5" style={{ color: T.muted }}>{l.example}</p>
                  </div>
                ))}
              </div>

              {/* Evidence panel (active track) */}
              <div className="rounded-xl p-4"
                style={{ background: track === "assess" ? T.brandDim : T.goldDim, border: `1px solid ${track === "assess" ? T.brandBdr : T.goldBdr}` }}>
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                  style={{ color: track === "assess" ? T.brandLt : T.gold }}>
                  {track === "assess" ? <Search className="h-3.5 w-3.5" /> : <FileCheck className="h-3.5 w-3.5" />}
                  {track === "assess" ? "Public evidence to gather" : "Additional submitted evidence to request"}
                </p>
                <p className="text-sm leading-7" style={{ color: T.muted }}>
                  {track === "assess" ? crit.assessEvidence : crit.certEvidence}
                </p>
              </div>

              <p className="mt-3 text-[11px]" style={{ color: T.muted, opacity: 0.7 }}>
                v1.1 name: {crit.formerly} — scores map 1:1 between versions.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INTERACTIVE SIMULATOR — self-scoring calculator per the rubric
// ─────────────────────────────────────────────────────────────────────────────

const SIM_SCORES = [0, 6, 12, 18, 25];

function Simulator() {
  const allIds: string[] = RUBRIC.flatMap((p: any) => p.criteria.map((c: any) => c.id));
  // Defaults to 6 everywhere — the no-evidence rule made interactive
  const [scores, setScores] = useState<Record<string, number>>(
    () => Object.fromEntries(allIds.map((id) => [id, 6]))
  );

  const pillarTotal = (p: any) => p.criteria.reduce((sum: number, c: any) => sum + scores[c.id], 0);
  const grandTotal = RUBRIC.reduce((sum: number, p: any) => sum + pillarTotal(p), 0);
  const tier = getTier(grandTotal);
  const blockingCriteria = allIds.filter((id) => scores[id] === 0);
  const blockingPillars = RUBRIC.filter((p: any) => pillarTotal(p) < 15).map((p: any) => p.code);
  const dashoffset = 339 - (339 * (grandTotal / 400));

  const reset = () => setScores(Object.fromEntries(allIds.map((id) => [id, 6])));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
      {/* Scoring panel */}
      <div className="space-y-5">
        {RUBRIC.map((p: any) => {
          const pt = pillarTotal(p);
          const pBlocked = pt < 15;
          return (
            <div key={p.code} className="rounded-2xl p-5" style={{ background: T.surf, border: `1px solid ${pBlocked ? "rgba(201,64,64,0.3)" : T.bdr}` }}>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-bold" style={{ color: T.white, fontFamily: FH }}>
                  <span style={{ color: T.brandLt }}>{p.code}</span> — {p.name}
                </p>
                <span className="flex items-center gap-2">
                  {pBlocked && (
                    <span className="rounded px-2 py-0.5 text-[10px] font-bold uppercase" style={{ background: "rgba(201,64,64,0.15)", color: T.fail }}>
                      Blocking &lt;15
                    </span>
                  )}
                  <span className="text-sm font-black tabular-nums" style={{ color: pBlocked ? T.fail : T.white, fontFamily: FH }}>
                    {pt}<span className="text-xs font-medium" style={{ color: T.muted }}>/100</span>
                  </span>
                </span>
              </div>
              <div className="space-y-2.5">
                {p.criteria.map((c: any) => (
                  <div key={c.id} className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs" style={{ color: T.muted }}>
                      <strong style={{ color: T.white }}>{c.id}</strong> {c.name}
                    </span>
                    <div className="flex gap-1">
                      {SIM_SCORES.map((s) => {
                        const active = scores[c.id] === s;
                        return (
                          <button key={s} onClick={() => setScores({ ...scores, [c.id]: s })}
                            className="w-9 rounded-lg py-1.5 text-xs font-black tabular-nums transition-all"
                            style={{
                              background: active ? ANCHOR_FILLS[s] : "rgba(255,255,255,0.04)",
                              border: `1px solid ${active ? ANCHOR_FILLS[s] : T.bdr}`,
                              color: active ? (s === 12 ? "#0B1220" : "#FFFFFF") : T.muted,
                              fontFamily: FH,
                            }}>
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Result card — sticky */}
      <div className="lg:sticky lg:top-6 h-fit">
        <div className="rounded-2xl p-6 text-center"
          style={{ background: `linear-gradient(160deg, ${T.surf} 0%, ${T.bg2} 100%)`, border: `1px solid ${tier.color}40`, boxShadow: `0 0 48px ${tier.color}12` }}>
          <p className="mb-4 text-xs font-bold uppercase tracking-wider" style={{ color: T.muted }}>Your Simulated Verdict</p>
          <div className="relative mx-auto mb-4" style={{ width: 140, height: 140 }}>
            <svg width="140" height="140" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="9" />
              <circle cx="60" cy="60" r="54" fill="none" stroke={tier.color} strokeWidth="9" strokeLinecap="round"
                strokeDasharray="339" strokeDashoffset={dashoffset} transform="rotate(-90 60 60)"
                style={{ transition: "stroke-dashoffset 0.5s ease, stroke 0.3s ease" }} />
              <text x="60" y="56" textAnchor="middle" fill={T.white} fontSize="26" fontWeight="700" fontFamily="Space Grotesk, system-ui">{grandTotal}</text>
              <text x="60" y="74" textAnchor="middle" fill={T.muted} fontSize="11">/400</text>
            </svg>
          </div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
            style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}45`, color: tier.color }}>
            {grandTotal >= 350 ? <Award className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
            {tier.level}
          </div>

          {(blockingCriteria.length > 0 || blockingPillars.length > 0) && (
            <div className="mb-4 rounded-xl p-3 text-left" style={{ background: "rgba(201,64,64,0.08)", border: "1px solid rgba(201,64,64,0.25)" }}>
              <p className="mb-1 flex items-center gap-1.5 text-xs font-bold" style={{ color: T.fail }}>
                <Flag className="h-3 w-3" /> Blocking issues
              </p>
              <p className="text-xs leading-5" style={{ color: T.muted }}>
                {blockingCriteria.length > 0 && <>Criteria at 0: <strong style={{ color: T.fail }}>{blockingCriteria.join(", ")}</strong>. </>}
                {blockingPillars.length > 0 && <>Pillars below 15/100: <strong style={{ color: T.fail }}>{blockingPillars.join(", ")}</strong>. </>}
                Certification is excluded until these are resolved.
              </p>
            </div>
          )}

          <p className="mb-4 text-[11px] leading-5" style={{ color: T.muted, opacity: 0.85 }}>
            Every criterion starts at 6 — the no-evidence rule in action. Score honestly: a 0 requires affirmative evidence of failure.
          </p>

          <div className="flex flex-col gap-2">
            <button onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.12)`, color: T.white }}>
              <RotateCcw className="h-3.5 w-3.5" /> Reset to no-evidence baseline
            </button>
            <a href="/certification"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5"
              style={{ background: T.brand, color: "#FFFFFF", boxShadow: "0 8px 24px rgba(0,77,253,0.3)" }}>
              Get this verified formally <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

export default function RubricPage() {
  const [track, setTrack] = useState<"assess" | "cert">("assess");

  return (
    <main style={{ background: T.bg, minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* BREADCRUMB */}
      <div className="px-4 pt-6 sm:px-6 lg:px-8" style={{ borderBottom: `1px solid ${T.bdr}` }}>
        <div className="mx-auto max-w-5xl">
          <nav className="flex items-center gap-1.5 pb-4 text-xs" style={{ color: T.muted }}>
            <a href="/" className="flex items-center gap-1 transition-colors hover:text-white"><Home className="h-3 w-3" /> Home</a>
            <ChevronRight className="h-3 w-3" />
            <span style={{ color: T.white }}>Audit Rubric</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-12 pt-16 sm:px-6 lg:px-8"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,77,253,0.14), transparent), ${T.bg2}` }}>
        <div className="relative mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest"
            style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}`, color: T.brandLt, boxShadow: "0 0 24px rgba(0,77,253,0.1)" }}>
            <Scale className="h-4 w-4" />
            LIONXE™ Official Standard · v2.0
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-5 text-4xl font-bold leading-[1.12] sm:text-5xl"
            style={{ color: T.white, fontFamily: FH, letterSpacing: "-0.02em" }}>
            The LIONXE™ Audit Rubric
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.16 }}
            className="mb-7 max-w-3xl text-base leading-8" style={{ color: "#93A3B8" }}>
            The complete evaluation standard behind every LIONXE™ assessment and certification — published in full. Sixteen universal criteria across four pillars, each describing the real-world state of the entity being evaluated: a website, a software tool, an organization, a content channel, a construction project, or a personal decision. The standard never changes between sectors or tracks; only the evidence used to verify it changes.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: T.muted }}>
            <span>Version <strong style={{ color: T.white }}>2.0</strong></span>
            <span>Published <strong style={{ color: T.white }}>July 2026</strong></span>
            <span>Criteria <strong style={{ color: T.white }}>16 across 4 pillars</strong></span>
            <span>Maximum score <strong style={{ color: T.white }}>400 points</strong></span>
            <span>Auditor <strong style={{ color: T.white }}>Sufian Mustafa</strong></span>
          </motion.div>
        </div>
      </section>

      {/* WHAT CHANGED IN v2.0 */}
      <section className="px-4 py-6 sm:px-6 lg:px-8" style={{ background: T.bg2 }}>
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl p-5" style={{ background: T.surf, borderLeft: `3px solid ${T.brand}`, border: `1px solid ${T.brandBdr}`, borderLeftWidth: "3px", borderLeftColor: T.brand }}>
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: T.brandLt }}>What changed in v2.0</p>
            <p className="text-sm leading-7" style={{ color: T.muted }}>
              Version 2.0 makes the rubric fully sector-agnostic. Every scoring statement was rewritten to describe universal entity states — no criterion names a webpage, a metric, or a technology. Sector-specific guidance moved into per-criterion lens panels. Three new cross-cutting rules were added (Altitude, Fast-Fail, Proportionality), and all fixed timelines were removed in favour of horizons proportionate to each sector's natural cycle. The structure — 16 criteria, the 0/6/12/18/25 scale, blocking rules, certification tiers, and both evidence tracks — is unchanged, so all v1.1 scores map 1:1 to v2.0.
            </p>
          </div>
        </div>
      </section>

      {/* SECTOR MAP */}
      <section id="sectors" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeading overline="One Standard, Every Sector" title="Where the Rubric Applies"
            sub="The scoring statements describe entity states — conditions that can be true of anything built, run, published, or decided. These six lenses translate the same standard into each arena." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                  className="rounded-2xl p-5" style={{ background: T.surf, border: `1px solid ${T.bdr}` }}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}` }}>
                    <Icon className="h-5 w-5" style={{ color: T.brandLt }} />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold" style={{ color: T.white, fontFamily: FH }}>{s.name}</h3>
                  <p className="text-xs leading-5" style={{ color: T.muted }}>{s.note}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACK TOGGLE */}
      <section className="px-4 py-8 sm:px-6 lg:px-8" style={{ background: T.bg2 }}>
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl p-5" style={{ background: T.surf, border: `1px solid ${T.bdr}` }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: T.muted }}>Show evidence sources for</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button onClick={() => setTrack("assess")}
                className="flex items-center gap-3 rounded-xl p-4 text-left transition-all"
                style={{ background: track === "assess" ? T.brandDim : "rgba(255,255,255,0.02)", border: `1px solid ${track === "assess" ? T.brandBdr : T.bdr}` }}>
                <ShieldCheck className="h-6 w-6 shrink-0" style={{ color: T.brandLt }} />
                <div>
                  <p className="text-sm font-bold" style={{ color: track === "assess" ? T.white : T.muted, fontFamily: FH }}>Independent Assessment</p>
                  <p className="text-xs" style={{ color: T.muted }}>Public information only</p>
                </div>
              </button>
              <button onClick={() => setTrack("cert")}
                className="flex items-center gap-3 rounded-xl p-4 text-left transition-all"
                style={{ background: track === "cert" ? T.goldDim : "rgba(255,255,255,0.02)", border: `1px solid ${track === "cert" ? "rgba(200,151,31,0.4)" : T.bdr}` }}>
                <Award className="h-6 w-6 shrink-0" style={{ color: T.gold }} />
                <div>
                  <p className="text-sm font-bold" style={{ color: track === "cert" ? T.white : T.muted, fontFamily: FH }}>Certification Audit</p>
                  <p className="text-xs" style={{ color: T.muted }}>Public + submitted documentation</p>
                </div>
              </button>
            </div>
            <p className="mt-3 text-xs leading-5" style={{ color: T.muted }}>
              {track === "assess"
                ? "Showing the public evidence used when the entity has not submitted documentation — the track behind all published independent assessments."
                : "Showing the additional internal documentation requested during a formal certification audit — used together with all public evidence."}
            </p>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="px-4 py-6 sm:px-6 lg:px-8" style={{ background: T.bg }}>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {[["sectors","Sectors"],["principles","Principles"],["laws","Filing Laws"],["scale","Scoring Scale"],["pillar-l","Pillar L"],["pillar-io","Pillar IO"],["pillar-n","Pillar N"],["pillar-xe","Pillar XE"],["thresholds","Tiers"],["simulator","Simulator"],["self-audit","Self-Audit"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollToId(id)}
                className="rounded-full px-4 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${T.bdr}`, color: T.muted }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES + CROSS-CUTTING RULES */}
      <section id="principles" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeading overline="Read Before Scoring" title="Principles & Cross-Cutting Rules"
            sub="Three architectural principles govern how every criterion is applied. Three cross-cutting rules — new in v2.0 — govern where evidence may be filed, when audits terminate early, and how judgments scale to real means." />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[...PRINCIPLES, ...RULES].map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.tag} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                  className="rounded-2xl p-6" style={{ background: T.surf, border: `1px solid ${T.bdr}` }}>
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}` }}>
                      <Icon className="h-4.5 w-4.5" style={{ color: T.brandLt, width: 18, height: 18 }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: T.brandLt }}>{p.tag}</span>
                  </div>
                  <h3 className="mb-2 text-sm font-bold leading-6" style={{ color: T.white, fontFamily: FH }}>{p.title}</h3>
                  <p className="text-sm leading-7" style={{ color: T.muted }}>{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FILING LAWS */}
      <section id="laws" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg2, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeading overline="How Findings Are Filed" title="The Four Filing Laws"
            sub="These laws govern where every finding belongs and how every assessment is written. They are what keeps the sixteen domains mutually exclusive in practice, not only on paper — and they apply identically to every sector and both evidence tracks." />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {FILING_LAWS.map((law) => {
              const Icon = law.icon;
              return (
                <motion.div key={law.n} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                  className="rounded-2xl p-6" style={{ background: T.surf, border: `1px solid ${T.bdr}` }}>
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}` }}>
                      <Icon style={{ color: T.brandLt, width: 18, height: 18 }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: T.brandLt }}>{law.n}</span>
                  </div>
                  <h3 className="mb-2 text-sm font-bold leading-6" style={{ color: T.white, fontFamily: FH }}>{law.title}</h3>
                  <p className="text-sm leading-7" style={{ color: T.muted }}>{law.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCORING SCALE */}
      <section id="scale" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeading overline="Five Levels" title="The Scoring Scale"
            sub="Applied identically to every criterion in every sector. A one to two sentence evidence note is recorded with every score before the number is finalised. A pillar total below 15/100, or any criterion at 0, triggers a blocking issue flag regardless of the grand total." />
          <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${T.bdr}` }}>
            {SCALE_LEVELS.map((s, i) => (
              <div key={s.score} className="flex gap-5 px-6 py-5"
                style={{ background: i % 2 === 0 ? T.surf : T.bg, borderBottom: i < 4 ? `1px solid ${T.bdr}` : "none" }}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${ANCHOR_FILLS[s.score]}1A`, border: `1px solid ${ANCHOR_FILLS[s.score]}45` }}>
                  <span className="text-lg font-black tabular-nums" style={{ color: ANCHOR_COLORS[s.score], fontFamily: FH }}>{s.score}</span>
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold" style={{ color: T.white, fontFamily: FH }}>{s.label}</p>
                  <p className="text-sm leading-6" style={{ color: T.muted }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      {RUBRIC.map((pillar: any, idx: number) => {
        const Icon = PILLAR_ICONS[pillar.code];
        return (
          <section key={pillar.code} id={`pillar-${pillar.code.toLowerCase()}`}
            className="px-4 py-16 sm:px-6 lg:px-8"
            style={{ background: idx % 2 === 0 ? T.bg : T.bg2, scrollMarginTop: "24px" }}>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}`, boxShadow: "0 0 24px rgba(0,77,253,0.1)" }}>
                    <Icon className="h-7 w-7" style={{ color: T.brandLt }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: T.brandLt }}>Pillar {pillar.code}</p>
                    <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: T.white, fontFamily: FH }}>{pillar.name}</h2>
                  </div>
                </div>
                <span className="rounded-xl px-4 py-2 text-sm font-bold" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${T.bdr}`, color: T.muted }}>
                  Max 100 pts
                </span>
              </div>

              <p className="mb-3 max-w-3xl text-sm leading-7" style={{ color: "#93A3B8" }}>{pillar.description}</p>
              <div className="mb-8 flex flex-wrap gap-3">
                <span className="rounded-lg px-3 py-1.5 text-xs font-semibold" style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}`, color: T.brandLt }}>
                  Governing Law: {pillar.governingLaw}
                </span>
                <span className="rounded-lg px-3 py-1.5 text-xs font-semibold" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${T.bdr}`, color: T.muted }}>
                  {pillar.altitude}
                </span>
              </div>

              <div className="space-y-4">
                {pillar.criteria.map((crit: any) => (
                  <CriterionCard key={crit.id} crit={crit} track={track} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CERTIFICATION THRESHOLDS */}
      <section id="thresholds" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeading overline="Outcomes" title="Certification Thresholds"
            sub="The grand total maps to six certification levels. Gold is worn only by the Gold tier; a perfect criterion and a perfect total share the LIONXE™ blue." />
          <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${T.bdr}` }}>
            {TIERS.map((tier, i) => (
              <div key={tier.level} className="grid grid-cols-2 items-center px-6 py-4"
                style={{ background: i % 2 === 0 ? T.surf : T.bg2, borderBottom: i < 5 ? `1px solid ${T.bdr}` : "none" }}>
                <span className="text-sm font-bold" style={{ color: tier.color, fontFamily: FH }}>{tier.level}</span>
                <span className="text-right font-mono text-sm font-bold" style={{ color: T.white }}>{tier.range} <span style={{ color: T.muted }}>/400</span></span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-xl p-4"
            style={{ background: "rgba(201,64,64,0.06)", border: "1px solid rgba(201,64,64,0.2)" }}>
            <Flag className="mt-0.5 h-4 w-4 shrink-0" style={{ color: T.fail }} />
            <p className="text-sm leading-6" style={{ color: T.muted }}>
              <strong style={{ color: T.fail }}>Blocking issue rule:</strong> A criterion scored 0, or a pillar below 15/100, is displayed prominently on every published assessment and categorically excludes certification until resolved. The Fast-Fail Clause additionally terminates any audit where evaluation itself is impossible.
            </p>
          </div>
        </div>
      </section>

      {/* SIMULATOR */}
      <section id="simulator" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg2, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeading overline="Try the Standard" title="Interactive Scoring Simulator"
            sub="Score any entity — your website, your tool, your organization, or a decision you are weighing — against all 16 criteria and watch the verdict compute live. Every criterion starts at 6, exactly as the no-evidence rule requires." />
          <div className="mb-4 flex items-center gap-2 rounded-xl p-3" style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}` }}>
            <Calculator className="h-4 w-4 shrink-0" style={{ color: T.brandLt }} />
            <p className="text-xs leading-5" style={{ color: "#A9BBD4" }}>
              This simulator is a self-assessment aid, not a certification. Formal LIONXE™ scores require evidence notes for every criterion and are issued only through a published assessment or certification audit.
            </p>
          </div>
          <Simulator />
        </div>
      </section>

      {/* SELF-AUDIT GUIDE + ATTRIBUTION */}
      <section id="self-audit" className="px-4 py-16 sm:px-6 lg:px-8" style={{ background: T.bg, scrollMarginTop: "24px" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeading overline="Use It Yourself" title="How to Self-Audit With This Rubric"
            sub="The rubric is published so any founder, marketer, or operator can evaluate their own work — in any sector. These are the same steps used in a formal LIONXE™ assessment." />
          <div className="space-y-4">
            {[
              { n: 1, t: "Work through the pillars in order — L, then IO, then N, then XE.", d: "The sequence reflects structural dependency: there is no point optimizing something with no long-term right to exist, and distinction only matters once foundation, execution, and integrity are verified." },
              { n: 2, t: "For each criterion, gather the evidence first — before assigning any score.", d: "Open the criterion above, read its evidence panel and sector lens, and collect what they describe for your own entity. Scoring before evidence produces flattery, not assessment." },
              { n: 3, t: "Match what you found to the anchors, then record the score with a one-sentence evidence note.", d: "The anchors describe entity states — pick the one that honestly describes yours. If you cannot find evidence either way, the score is 6: never 0, never blank." },
              { n: 4, t: "Sum each pillar. Flag any pillar below 15/100 and any criterion at 0 as blocking issues.", d: "Blocking issues are your priority list. No strength elsewhere compensates for them — that is the cascade principle the framework is built on." },
              { n: 5, t: "Map your grand total to the certification thresholds — or use the simulator above.", d: "0–199 means structural rebuilding, not optimization. 300+ means the foundations are real. 350+ is certification territory." },
            ].map((step) => (
              <motion.div key={step.n} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                className="flex gap-5 rounded-2xl p-6" style={{ background: T.surf, border: `1px solid ${T.bdr}` }}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-black"
                  style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}`, color: T.brandLt, fontFamily: FH }}>
                  {step.n}
                </div>
                <div>
                  <h3 className="mb-1.5 text-sm font-bold leading-6" style={{ color: T.white, fontFamily: FH }}>{step.t}</h3>
                  <p className="text-sm leading-7" style={{ color: T.muted }}>{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl p-5"
            style={{ background: T.brandDim, border: `1px solid ${T.brandBdr}` }}>
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0" style={{ color: T.brandLt }} />
            <p className="text-sm leading-7" style={{ color: T.muted }}>
              <strong style={{ color: T.white }}>Attribution:</strong> The LIONXE™ Audit Rubric is the original intellectual property of Sufian Mustafa. You are welcome to use it to evaluate your own organization and to reference it in your own content with attribution — cite it as the LIONXE™ Audit Rubric v2.0 with a link to this page. Commercial use of the rubric to conduct paid audits for third parties requires written permission.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 110%, rgba(0,77,253,0.12), transparent), linear-gradient(to bottom, ${T.bg2}, ${T.bg})` }}>
        <div className="relative mx-auto max-w-4xl text-center">
          <Award className="mx-auto mb-5 h-11 w-11" style={{ color: T.brandLt }} />
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl" style={{ color: T.white, fontFamily: FH }}>
            See the Rubric Applied
          </h2>
          <p className="mb-9 text-lg" style={{ color: T.muted }}>
            Read published assessments scored against this exact standard, or apply for a formal certification audit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/audits" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: T.brand, color: "#FFFFFF", boxShadow: "0 8px 32px rgba(0,77,253,0.3)" }}>
              View Published Audits <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/certification" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.12)`, color: T.white }}>
              Apply for Certification
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}