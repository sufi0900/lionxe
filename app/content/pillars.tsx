// ─────────────────────────────────────────────────────────────────────────────
// content/pillars.tsx
// The single source of content for all four LIONXE™ pillar pages.
// Each export is consumed by the ONE shared <PillarPageClient content={...} />
// component and by lib/pillarSEO.ts (via the seo subset each object exposes).
// Update content here — never in the page.tsx files or the client component.
// ─────────────────────────────────────────────────────────────────────────────

import {
  Brain, Gauge, Shield, Sparkles,
  Compass, Mountain, Route, Umbrella,
  Server, FileText, Radar, ClipboardCheck,
  FileCheck, Scale, Eye, Ban,
  MessagesSquare, Trophy, TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ── SHARED TYPES ──────────────────────────────────────────────────────────

export interface PillarCriterion {
  id: string;
  name: string;
  icon: LucideIcon | React.ComponentType<any> | any; // <--- Fixes icon type error for criteria
  statement: string;
  description: string;
}

export interface PillarPrinciple {
  title: string;
  body: string;
}

export interface PillarCaseComparison {
  failLabel: string;
  failBody: string;
  passLabel: string;
  passBody: string;
}

export interface PillarMatrixItem {
  title: string;
  desc: string;
  icon: LucideIcon | React.ComponentType<any> | any; // <--- Fixes icon type error for matrix items
}

export interface PillarNextLink {
  slug: string;
  name: string;
  teaser: string;
}

export interface PillarContent {
  code: string;
  slug: string;
  name: string;
  gateNumber: number;
  icon: LucideIcon | React.ComponentType<any> | any; // <--- Fixes icon type error for main pillar
  tagline: string;
  heroParagraphs: string[];
  isHardGate?: boolean;
  governingLaw: string;
  governingLawSummary: string;
  genesis: {
    heading: string;
    paragraphs: string[];
  };
  criteria: PillarCriterion[];
  principles: PillarPrinciple[];
  caseComparison: PillarCaseComparison;
  matrixItems: PillarMatrixItem[];
  selfAuditQuestions: string[];
  universalApplicationNote: string;
  nextPillar: {
    slug: string;
    name: string;
    teaser: string;
  };
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}
// ─────────────────────────────────────────────────────────────────────────────
// L — LONG-TERM LOGIC
// ─────────────────────────────────────────────────────────────────────────────

export const L_CONTENT: PillarContent = {
  code: "L",
  slug: "long-term-logic",
  gateNumber: 1,
  icon: Brain,
  name: "Long-Term Logic",
  tagline: "Durable benefit over the conditions that merely feel good today.",
  governingLaw: "The Post-Flood Collapse Rule",
  governingLawSummary:
    "Any advantage built on a receding flood collapses the moment the water goes. An entity is tested against what it stands on, not against how strong the current looks right now.",
  isHardGate: true,
  heroParagraphs: [
    "Long-Term Logic is the first gate of the LIONXE™ standard, and it is a hard gate: an entity that fails here does not advance to the remaining three, regardless of how well it is executed, how honest it is, or how distinctive it appears. There is no point refining something that has no durable right to exist.",
    "This pillar does not demand a fixed multi-year horizon — a two-year plan can score perfectly where two years is the honest cycle of its field. What it demands is that a direction exists, that the ground beneath the entity is owned rather than rented, that its decisions show research and patience rather than convenience, and that it holds a credible answer for its most likely shock.",
  ],
  genesis: {
    heading: "Why Longevity Outranks the Immediate Win",
    paragraphs: [
      "Most evaluation frameworks reward what is visible this quarter: traffic spikes, launch numbers, a good month. Long-Term Logic asks a different question first — what happens after the conditions that produced this result change, as they always eventually do.",
      "An entity can look identical from the outside at two very different depths: one built on a mechanism the environment is actively closing, and one built on ground it owns outright. Both can show the same chart for a while. Only one of them is still standing when the chart stops helping.",
      "This is why Long-Term Logic sits at Gate 1. Every other pillar assumes there is something worth optimizing, keeping honest, and distinguishing. If the foundation itself has no durable right to exist, that assumption is false, and no amount of excellence downstream changes the answer.",
    ],
  },
  criteria: [
    {
      id: "L1", name: "Directional Clarity", icon: Compass,
      statement: "Does an articulated multi-year direction exist — proportionate to the entity's natural cycle — that observably filters real decisions?",
      description: "Not a slogan on a wall. A direction earns its score by being specific enough to rule real options out, and by actually showing up in the decisions the entity makes — not only in what it says about itself.",
    },
    {
      id: "L2", name: "Foundational Durability", icon: Mountain,
      statement: "Is the entity's model built on owned, compounding ground — or on conditions that are temporary, concentrated, or receding?",
      description: "This asks what the entity is standing on. Owned capital compounds with time; a rented position — a single channel, a borrowed audience, a loophole — erodes the moment the terms change.",
    },
    {
      id: "L3", name: "Decision Discipline", icon: Route,
      statement: "Do observable decisions show research, patience, and deliberate acceptance of short-term cost where it purchases durable benefit — calibrated to real constraints?",
      description: "Read from conduct, not statements. Discipline is measured against the entity's real means: a modest decision made after real research outscores an expensive one made without it.",
    },
    {
      id: "L4", name: "Resilience & Forward Risk", icon: Umbrella,
      statement: "Are the entity's principal shocks and its exposure to obsolescence identified, with proportionate buffers and evidence of renewal?",
      description: "What happens when something breaks, or when the field itself moves on. A credible buffer, a redundant path, and visible renewal against foreseeable change all belong here.",
    },
  ],
  principles: [
    { title: "The Compounding Mandate",
      body: "A foundation must strengthen with time, not merely persist. An entity that is exactly as strong next year as it is today has already begun to lose ground relative to one that compounds — flat is a form of decline under this pillar." },
    { title: "The Owned Ground Rule",
      body: "Capital that is owned — earned authority, a direct relationship with an audience, accumulated trust — survives changes in the surrounding environment. Capital that is only rented — a single borrowed channel, a temporary arrangement — does not, and no amount of current performance substitutes for the difference." },
    { title: "The Cascade Gate",
      body: "This pillar is evaluated first, and a failure here ends the audit. It would waste an evaluator's time, and mislead the entity, to polish the execution of something with no durable right to exist. Optimization without a foundation is theatre." },
  ],
  caseComparison: {
    failLabel: "Fails Long-Term Logic",
    failBody: "An entity built its entire visible result on a mechanism it did not own — a loophole in how a platform ranked things, a temporary arrangement it had no control over. For a period, the numbers looked strong. Then the mechanism closed, as these things do, and there was nothing underneath to catch the fall. Nothing about its daily execution was necessarily careless; the foundation itself simply had no durable right to the result it was producing.",
    passLabel: "Passes Long-Term Logic",
    passBody: "A comparable entity chose the slower path: building a position it actually owned, in a category with real and durable demand, accepting a longer runway to meaningful results in exchange for a result that does not depend on anyone else's rules staying the same. Its growth curve looked less exciting in year one. It is still standing in year five, compounding rather than repeating.",
  },
  matrixItems: [
    { title: "The Sustainability Check", icon: TrendingUp,
      desc: "Does the entity function at a durable level without relying on constant external patches or conditions it does not control?" },
    { title: "The Exposure Check", icon: Shield,
      desc: "Is the entity meaningfully insulated from the shifts its own field is already signalling — not immune to change, but not standing directly in its path?" },
    { title: "The Ownership Check", icon: Mountain,
      desc: "Is the ground beneath the entity's result something it owns, or something it is borrowing on terms it does not control?" },
  ],
  selfAuditQuestions: [
    "If the specific condition currently driving your best results disappeared tomorrow, would anything of value remain?",
    "Look at where your effort actually goes: is most of it spent maintaining something fragile, or building something that gets sturdier with each pass?",
    "Could your current foundation support ten times its present scale, or would it buckle under its own weight before that point?",
  ],
  universalApplicationNote:
    "This pillar is not limited to digital platforms. The same test applies to a career decision, an investment, or a purchase: does this rest on something durable, or on a condition that is convenient only for now? Long-Term Logic is a way of deciding, not only a way of auditing.",
  nextPillar: { slug: "internal-optimization", name: "IO — Internal Optimization", teaser: "The second gate: every internal layer must be executed to a complete professional standard." },

  metaTitle: "Long-Term Logic — LIONXE™ Pillar L | Gate 1 of 4",
  metaDescription: "Long-Term Logic is Gate 1 of the LIONXE™ framework — the hard gate governed by the Post-Flood Collapse Rule. Learn the four criteria that test whether an entity is built on durable, owned ground or on conditions that are temporary and receding.",
  keywords: ["LIONXE Long-Term Logic", "Post-Flood Collapse Rule", "durability audit framework", "long-term thinking standard", "Sufian Mustafa", "LIONXE pillar L", "directional clarity", "foundational durability"],
};

// ─────────────────────────────────────────────────────────────────────────────
// IO — INTERNAL OPTIMIZATION
// ─────────────────────────────────────────────────────────────────────────────

export const IO_CONTENT: PillarContent = {
  code: "IO",
  slug: "internal-optimization",
  gateNumber: 2,
  icon: Gauge,
  name: "Internal Optimization",
  tagline: "Every internal layer, executed to a complete professional standard.",
  governingLaw: "The Weakest Link Axiom",
  governingLawSummary:
    "An entity's real value is capped by its worst-executed layer, because an audience always finds that layer eventually. Strength elsewhere does not purchase forgiveness for it.",
  isHardGate: false,
  heroParagraphs: [
    "Internal Optimization is Gate 2 — reached only once an entity has established that it has a durable right to exist. This pillar assumes the foundation is sound and asks a narrower, harder question: is everything built on top of it executed completely, or does the audience eventually find the layer nobody finished?",
    "This pillar is deliberately broad. It is not one technique measured in isolation — not just speed, not just writing quality, not just design. It covers four domains that together account for the internals of any built system: the structure it runs on, what it produces and presents, whether it can be found and reached, and the supporting layer that keeps the whole thing complete and current.",
  ],
  genesis: {
    heading: "Why a Single Strength Cannot Carry a Whole Domain",
    paragraphs: [
      "It is common for an entity to be excellent in one narrow respect and mediocre everywhere else — fast but poorly organised, well-designed but thin in substance, technically sound but invisible to the people it is meant to reach. Internal Optimization exists because an audience does not experience an entity one layer at a time; it experiences the whole, and the whole is only as strong as its weakest part.",
      "This is why each of the four criteria below is scored as a composite across everything that belongs to it, never on its single best-performing factor. A domain with one genuine strength and several unaddressed weaknesses is recorded honestly as a mixed result — the strength is real and is stated as such, but it does not raise the domain's score on its own.",
      "The practical implication is that there is no shortcut through this gate. An entity cannot optimise one visible surface and coast on the rest; the audience — and this framework — eventually reaches every layer.",
    ],
  },
  criteria: [
    {
      id: "IO1", name: "Technical Foundation & Integrity", icon: Server,
      statement: "Is the underlying build sound, secure, performant, and functionally intact throughout — not only on its principal surfaces?",
      description: "The machine the entity runs on: how it performs, how stable it is, how it is architected, and whether every reachable part of it actually works as intended — not only the parts a first-time visitor sees.",
    },
    {
      id: "IO2", name: "Output & Presentation Quality", icon: FileText,
      statement: "Is everything the entity produces and presents — in every format and on every surface it controls — substantive, accurate, and made for the audience receiving it?",
      description: "Everything handed to the audience, in every form it takes — written, visual, video, the offer itself — judged on one question: was this made for the person receiving it, or produced to occupy space.",
    },
    {
      id: "IO3", name: "Visibility & Reach Systems", icon: Radar,
      statement: "Are the systems that make the entity findable and reachable by its intended audience implemented competently — and are they producing measurable reach?",
      description: "The systems that make an entity findable — how it is optimised, how it has developed standing beyond its own walls, and whether that effort converts into audience actually reached.",
    },
    {
      id: "IO4", name: "Operational Completeness & Upkeep", icon: ClipboardCheck,
      statement: "Is the supporting layer complete across every surface the entity operates, and is the whole actively maintained rather than left to decay?",
      description: "The detail layer nobody praises and everybody notices when it is missing, across every surface the entity operates — including the ones beyond its main address — kept current rather than abandoned.",
    },
  ],
  principles: [
    { title: "The Weakest Link Axiom",
      body: "The governing law of this pillar is also its first principle: an entity is only as strong as its worst-executed layer. A brilliant single feature does not offset a broken supporting system — the audience will find the broken one." },
    { title: "The Composite Standard",
      body: "Every criterion here is scored on the full set of factors that belong to it, not on the single factor that happens to perform best. A domain where one element is genuinely strong and several others are not is recorded as a mixed, honest result — never as a pass earned by its best part alone." },
    { title: "The Full-Surface Rule",
      body: "An entity's obligations under this pillar extend to every surface it operates, not only the primary one a visitor sees first. A well-maintained front door and an abandoned side entrance are, together, an incomplete result." },
  ],
  caseComparison: {
    failLabel: "Fails Internal Optimization",
    failBody: "An entity performs well on the one measure it optimised for and pays little attention to the rest — a fast surface concealing a disorganised structure underneath, or polished visuals sitting on top of content that says very little. Visitors who go one layer deeper than the first impression consistently find something unfinished.",
    passLabel: "Passes Internal Optimization",
    passBody: "A comparable entity is unremarkable at first glance and consistent at every depth: the underlying structure holds up, what it produces has genuine substance, it can actually be found by the people looking for it, and the supporting details are complete wherever you check. Nothing about it is spectacular in isolation. Nothing about it falls apart under inspection either.",
  },
  matrixItems: [
    { title: "The Composite Verification", icon: Gauge,
      desc: "Every factor within each domain is checked — not only the one most likely to look good in a screenshot." },
    { title: "The Depth Check", icon: Server,
      desc: "Verification does not stop at the first surface; it follows the entity into its structure, its secondary pages, and its maintained-or-abandoned edges." },
    { title: "The Reach Verification", icon: Radar,
      desc: "Effort is distinguished from outcome: systems that exist on paper but produce no measurable reach are recorded honestly as such." },
  ],
  selfAuditQuestions: [
    "Pick the layer of your own work you are least proud of. If a stranger found it first, what would they conclude about everything else?",
    "Is your visibility the result of a functioning system, or of one early success that has not been repeated or built upon since?",
    "When did you last check the surfaces you do not visit often — the secondary pages, the older posts, the profiles you set up once and left?",
  ],
  universalApplicationNote:
    "The same logic governs a physical build, a piece of software, or a service business: a beautiful showroom does not compensate for a leaking roof, and a brilliant flagship feature does not compensate for a support system nobody maintained.",
  nextPillar: { slug: "non-negotiable-integrity", name: "N — Non-Negotiable Integrity", teaser: "The third gate: honesty and compliance that hold even where dishonesty would be cheaper." },

  metaTitle: "Internal Optimization — LIONXE™ Pillar IO | Gate 2 of 4",
  metaDescription: "Internal Optimization is Gate 2 of the LIONXE™ framework, governed by the Weakest Link Axiom. Four domains — technical foundation, output quality, visibility systems, and operational upkeep — scored as a composite, never on a single strength.",
  keywords: ["LIONXE Internal Optimization", "Weakest Link Axiom", "technical foundation audit", "content quality standard", "visibility and reach audit", "Sufian Mustafa", "LIONXE pillar IO", "composite scoring rule"],
};

// ─────────────────────────────────────────────────────────────────────────────
// N — NON-NEGOTIABLE INTEGRITY
// ─────────────────────────────────────────────────────────────────────────────

export const N_CONTENT: PillarContent = {
  code: "N",
  slug: "non-negotiable-integrity",
  gateNumber: 3,
  icon: Shield,
  name: "Non-Negotiable Integrity",
  tagline: "Honesty and compliance that hold even where dishonesty would be cheaper.",
  governingLaw: "The Cost-Indifferent Mandate",
  governingLawSummary:
    "Integrity that bends when it becomes costly is not integrity — it is pricing. This pillar holds regardless of how brilliant the long-term logic or how complete the execution beneath it.",
  isHardGate: false,
  heroParagraphs: [
    "Non-Negotiable Integrity is Gate 3, and it is exactly as absolute as its name. No matter how durable the foundation or how completely executed the internals, an entity that relies on deception — of a system or of a person — fails this gate outright.",
    "This is the exclusive home of every violation, compliance breach, and deceptive pattern this framework identifies. No other pillar characterises anything as a violation; if a fact anywhere in an evaluation has a compliance or honesty dimension, it is judged here, and only here.",
  ],
  genesis: {
    heading: "Why Integrity Cannot Be Traded Against Anything Else",
    paragraphs: [
      "Every other pillar in this framework can be improved incrementally — a foundation strengthened, an execution refined, a distinction sharpened. Integrity does not work that way. A pattern engineered to mislead is either present or it is not; there is no partial credit for a deception that is only sometimes active.",
      "This is also the pillar most often justified by its surroundings — 'the whole category does this,' 'it's standard practice here.' Under the Cost-Indifferent Mandate, that is never a defence. Widespread practice is evidence about the category, not permission for the entity being evaluated.",
      "And it is deliberately audience-neutral: a pattern that manipulates an automated system and a pattern that manipulates a person are treated as equally serious failures. This framework does not consider deceiving a machine to be a lesser offence than deceiving a human.",
    ],
  },
  criteria: [
    {
      id: "N1", name: "Claim Accuracy", icon: FileCheck,
      statement: "Can every significant claim the entity makes — quantitative, credential, historical, and social proof — be verified against real evidence?",
      description: "Every number, credential, and testimonial an entity presents about itself is a claim, and every claim is either verifiable or it is decoration. The most serious version of this failure is a claim contradicted by the entity's own visible record.",
    },
    {
      id: "N2", name: "Compliance With Governing Rules", icon: Scale,
      statement: "Does the entity comply with the written laws, regulations, and platform policies that govern its arena — even where violation is cheaper or widely practised?",
      description: "Adherence to the written rules of the entity's own arena — the exclusive home of every rule-breach finding this framework makes. Widespread violation across a category is never treated as a defence for any one entity within it.",
    },
    {
      id: "N3", name: "Transparency", icon: Eye,
      statement: "Can the audience see who it is dealing with, on what terms, and what interests shape what it is being shown?",
      description: "Whether an audience can verify the story it is being told — who is behind the entity, on what terms, and which relationships shape what is presented to them.",
    },
    {
      id: "N4", name: "Absence of Manipulation", icon: Ban,
      statement: "Is the entity free of patterns engineered to deceive — whether the target is a person or a system, and whether or not a written rule names it?",
      description: "Patterns engineered to make something appear other than it is, whether aimed at an automated system or a person — deliberately broader than written-rule compliance, and identical in severity for either target.",
    },
  ],
  principles: [
    { title: "The Cost-Indifferent Mandate",
      body: "Integrity that holds only until it becomes inconvenient was never integrity — it was a cost calculation. This pillar tests whether honesty survives contact with a genuine incentive to abandon it." },
    { title: "The Equal-Audience Rule",
      body: "A pattern that misleads an automated system and a pattern that misleads a human being are scored identically. This framework does not treat deceiving a machine as a smaller failure than deceiving a person." },
    { title: "The No-Defence-in-Numbers Rule",
      body: "That an entire category engages in a practice does not excuse any single entity's participation in it. Widespread practice is itself a finding about the category — not a mitigating factor for the entity being evaluated." },
  ],
  caseComparison: {
    failLabel: "Fails Non-Negotiable Integrity",
    failBody: "An entity presents a number about itself that its own visible record cannot support — a scale of activity, a volume of satisfied customers, a history — well beyond what any independent check confirms. Alongside it sits proof designed to look authentic without actually being traceable to any real source a visitor could check.",
    passLabel: "Passes Non-Negotiable Integrity",
    passBody: "A comparable entity makes a more modest claim and backs every part of it: figures a visitor can verify against public evidence, terms disclosed plainly before anything is asked of the visitor, and proof that links back to a real, checkable source. It may look less impressive on first read. It is telling the truth.",
  },
  matrixItems: [
    { title: "The Verification Index", icon: Eye,
      desc: "Every operational layer and every claim is checked for openness — free of hidden mechanics or unverifiable assertions." },
    { title: "The Compliance Rating", icon: Scale,
      desc: "Documented adherence to the written rules of the entity's own arena, with no discount for practices that are merely common." },
    { title: "The Trust Preservation Pass", icon: Shield,
      desc: "Confirmation that the baseline experience is free of patterns engineered to mislead either a person or a system." },
  ],
  selfAuditQuestions: [
    "If a specific number you currently state about yourself were checked against your own visible record today, would it hold up?",
    "If every internal decision behind your current approach were made public tomorrow, would you stand behind it, or would it need explaining?",
    "Is there a practice you continue only because it is standard in your field — and would you still defend it if it were not?",
  ],
  universalApplicationNote:
    "This pillar applies with equal force outside any digital context: a relationship, a partnership, or a professional network that tolerates dishonesty because 'that's just how it's done' fails this same test. One compromise here does not stay contained — it changes what the entire foundation is worth.",
  nextPillar: { slug: "exceptional-distinction", name: "XE — eXceptional Distinction", teaser: "The fourth gate: something a generic alternative genuinely could not replace." },

  metaTitle: "Non-Negotiable Integrity — LIONXE™ Pillar N | Gate 3 of 4",
  metaDescription: "Non-Negotiable Integrity is Gate 3 of the LIONXE™ framework, governed by the Cost-Indifferent Mandate. The exclusive home of every violation and deception finding — claim accuracy, compliance, transparency, and absence of manipulation.",
  keywords: ["LIONXE Non-Negotiable Integrity", "Cost-Indifferent Mandate", "claim accuracy audit", "compliance audit framework", "transparency standard", "Sufian Mustafa", "LIONXE pillar N", "absence of manipulation"],
};

// ─────────────────────────────────────────────────────────────────────────────
// XE — eXCEPTIONAL DISTINCTION
// ─────────────────────────────────────────────────────────────────────────────

export const XE_CONTENT: PillarContent = {
  code: "XE",
  slug: "exceptional-distinction",
  gateNumber: 4,
  icon: Sparkles,
  name: "eXceptional Distinction",
  tagline: "Something a generic alternative genuinely could not replace.",
  governingLaw: "The Commodity Threshold Law",
  governingLawSummary:
    "If an entity can be swapped for a generic alternative with no loss to its audience, its distinction is zero — whatever its marketing claims. This is the final gate, reached only by what has already proven durable, well-executed, and honest.",
  isHardGate: false,
  heroParagraphs: [
    "eXceptional Distinction is Gate 4 — the last question this framework asks, and the only one that concerns itself with what makes an entity worth choosing over an interchangeable alternative. It is reached only by entities that have already cleared durability, execution, and integrity, because distinction built on top of a weak foundation is not worth verifying.",
    "This pillar moves through four layers in sequence: what the entity claims about its own difference, whether that difference is actually recognised, whether it can be proven against a real competitive test, and whether it is being renewed as its environment moves on.",
  ],
  genesis: {
    heading: "Why Being Good Is Not the Same as Being Distinct",
    paragraphs: [
      "An entity can be fast, honest, well-built, and completely interchangeable with a dozen others doing the same thing to the same standard. eXceptional Distinction is the pillar that asks whether there is anything here a generic alternative could not equally provide.",
      "The test throughout this pillar is replication cost. A claim any competitor could make with a straight face is not distinction. A design any competitor could copy over a weekend is not distinction. What survives this pillar is whatever a competitor would need real time, real access, or real investment to reproduce.",
      "Distinction also has a shelf life. An advantage that was genuine three years ago and has not been renewed since is, by this pillar's standard, decaying rather than sustained — environments move, and standing still relative to a moving environment is its own kind of falling behind.",
    ],
  },
  criteria: [
    {
      id: "XE1", name: "Articulated Distinction", icon: MessagesSquare,
      statement: "Does the entity state a specific, defensible difference — or only claims every peer in its category could also make?",
      description: "The claim layer: whether the entity can name its own difference in terms specific enough to check. The standard is simple — could a direct competitor place the exact same words on its own page without them becoming false?",
    },
    {
      id: "XE2", name: "Recognizable Identity", icon: Eye,
      statement: "Would the entity be recognised by its audience with its name removed — and is there measurable demand for it by name?",
      description: "What remains when the label is taken away. Where public data exists, demand for the entity specifically by name is the most direct available proof that an identity exists in its market's mind at all.",
    },
    {
      id: "XE3", name: "Distinction in Practice", icon: Trophy,
      statement: "Does a verifiable advantage exist that a competitor could not trivially replicate — in access, economics, method, or expertise?",
      description: "Whether claimed distinction survives contact with reality. The operative test is replication cost — anything reproducible in an afternoon with commonly available tools is not distinction, whatever the marketing says.",
    },
    {
      id: "XE4", name: "Enduring Relevance", icon: TrendingUp,
      statement: "Is the distinction being actively renewed as the environment shifts — or is it a past advantage decaying in place?",
      description: "Distinction has a shelf life. This asks whether the entity is actively renewing its edge as its environment moves, or coasting on an advantage the environment has already passed.",
    },
  ],
  principles: [
    { title: "The Commodity Threshold Law",
      body: "The test that governs this entire pillar: if the entity could be replaced by a generic alternative with no loss to its audience, its distinction score is zero, regardless of how the entity describes itself." },
    { title: "The Replication Cost Test",
      body: "Distinction is measured by what it would cost a competitor to copy — in time, access, or investment. Anything reproducible in an afternoon using commonly available tools does not clear this pillar, no matter how it is marketed." },
    { title: "The Renewal Requirement",
      body: "An advantage that is not actively maintained decays as its environment moves, even without anything changing on the entity's own side. Standing still is a form of falling behind under this pillar." },
  ],
  caseComparison: {
    failLabel: "Fails eXceptional Distinction",
    failBody: "An entity is executed competently and describes itself as different, but everything it points to — its positioning language, its design, its offer — is something any capable competitor could reproduce with the same commonly available tools in a single working session. Nobody searches for it by name; nothing about it would be missed if it quietly became something else.",
    passLabel: "Passes eXceptional Distinction",
    passBody: "A comparable entity holds something specific that took real time or real access to build — a documented method, a genuinely earned reputation, an advantage a competitor would need serious investment to match. People seek it out specifically, by name, and it continues renewing that edge as its field changes around it.",
  },
  matrixItems: [
    { title: "The Substitution Test", icon: Sparkles,
      desc: "Could a generic alternative replace this entity with no loss to the audience it serves? If yes, distinction is zero regardless of how it is marketed." },
    { title: "The Replication Cost Audit", icon: Trophy,
      desc: "What would it genuinely cost a capable competitor to reproduce this advantage — an afternoon, or a serious investment?" },
    { title: "The Renewal Check", icon: TrendingUp,
      desc: "Is this edge being actively maintained as its environment shifts, or is it a snapshot of an advantage that no longer reflects present conditions?" },
  ],
  selfAuditQuestions: [
    "Remove your name and logo from your own work. Would anything left over still identify it as yours?",
    "What would a well-resourced competitor need — time, access, or investment — to reproduce your strongest claimed advantage?",
    "When did you last renew the thing that makes you different, rather than simply continuing to describe it the same way?",
  ],
  universalApplicationNote:
    "The same test applies to a person's career, a small shop, or a body of creative work: being competent is not the same as being irreplaceable. This pillar asks the harder question — not whether you are good, but whether you could be quietly swapped for someone equally good with nothing lost.",
  nextPillar: { slug: "framework", name: "The Complete Framework", teaser: "See how all four pillars combine into a single 400-point standard, and how certification works." },

  metaTitle: "eXceptional Distinction — LIONXE™ Pillar XE | Gate 4 of 4",
  metaDescription: "eXceptional Distinction is Gate 4 of the LIONXE™ framework, governed by the Commodity Threshold Law. The final test — whether a generic alternative could replace the entity with no loss to its audience.",
  keywords: ["LIONXE eXceptional Distinction", "Commodity Threshold Law", "brand differentiation audit", "competitive distinction framework", "Sufian Mustafa", "LIONXE pillar XE", "replication cost test"],
};

// ─────────────────────────────────────────────────────────────────────────────

export const ALL_PILLARS: PillarContent[] = [L_CONTENT, IO_CONTENT, N_CONTENT, XE_CONTENT];