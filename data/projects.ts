export type SocialType = "github" | "web" | "x" | "instagram" | "youtube" | "linkedin";

export interface ProjectStat {
  n: string;
  label: string;
}

export interface Project {
  category: string;
  badge: string;
  badgeColor: { bg: string; text: string };
  title: string;
  oneliner: string;
  desc: string;
  stats: ProjectStat[];
  role: string;
  period: string;
  context: string;
  links: Partial<Record<SocialType, string>>;
}

export const PROJECTS: Project[] = [
  {
    category: "AI · SaaS · RAG",
    badge: "TOP 7 NATIONAL",
    badgeColor: { bg: "#EEEDFE", text: "#3C3489" },
    title: "SimplyBox",
    oneliner: "AI customer support automation for SMEs.",
    desc: "Engineered an automated response system using a RAG data pipeline that decreased average client response time by 92%. Formulated a scalable SaaS GTM strategy that acquired 10+ early SME adopters.",
    stats: [
      { n: "92%", label: "RESPONSE TIME\nDROP" },
      { n: "10+", label: "EARLY\nADOPTERS" },
      { n: "TOP 7", label: "NATIONAL\nFINALISTS" },
    ],
    role: "Product Lead & Founder",
    period: "Aug 2025 – Nov 2025",
    context: "Hacktiv8 × Meta Llama",
    links: { github: "#", web: "#", x: "#", linkedin: "#" },
  },
  {
    category: "Web3 · Gaming · Strategy",
    badge: "BUILT ON SOLANA",
    badgeColor: { bg: "#E6F1FB", text: "#0C447C" },
    title: "RoyaleCard Arena",
    oneliner: "Gamified trading where strategy beats speculation.",
    desc: "A competitive strategy game on Solana where players configure card logic and trade with rules. Gamified trading mechanics so players earn AND learn simultaneously.",
    stats: [
      { n: "1st", label: "OF ITS KIND\nON SOLANA" },
      { n: "2D", label: "PIXEL-ART\nINTERFACE" },
      { n: "EARN+\nLEARN", label: "DUAL VALUE\nLOOP" },
    ],
    role: "Co-Founder",
    period: "2025 – Present",
    context: "Configure Cards. Enter the Arena.",
    links: { github: "#", web: "#", x: "https://x.com/royalecardarena", instagram: "#", linkedin: "#" },
  },
  {
    category: "AI · Data · Web3",
    badge: "F&B INTELLIGENCE",
    badgeColor: { bg: "#EAF3DE", text: "#27500A" },
    title: "LOKAL",
    oneliner: "Location intelligence for F&B businesses.",
    desc: "40–70% of F&B businesses fail in year one because owners rely on gut feeling. LOKAL simulates business performance using real market behavior data BEFORE owners operate.",
    stats: [
      { n: "70%", label: "F&B FAILURE\nRATE ADDRESSED" },
      { n: "REAL", label: "MARKET\nBEHAVIOR DATA" },
      { n: "SHARED", label: "REVENUE\nFLYWHEEL" },
    ],
    role: "Co-Founder",
    period: "2025 – Present",
    context: "Built on Solana",
    links: { github: "#", web: "#", x: "https://x.com/Lokal_AI", instagram: "#" },
  },
  {
    category: "ESG · B2B · Fintech",
    badge: "IEEYEP INCUBATION",
    badgeColor: { bg: "#FAEEDA", text: "#633806" },
    title: "Foorify",
    oneliner: "Trust as a Service for corporate food donations.",
    desc: "Indonesia's first \"Trust as a Service\" platform systematizing corporate food donations. Developed a verifiable documentation funnel allowing B2B clients to claim up to 5% in tax reductions.",
    stats: [
      { n: "1st", label: "TRUST-AS-A-\nSERVICE IN ID" },
      { n: "5%", label: "TAX REDUCTION\nFOR B2B" },
      { n: "ESG", label: "COMPLIANCE\nREADY" },
    ],
    role: "Project Manager & Founder",
    period: "Sep 2025 – Nov 2025",
    context: "IEEYEP × DAKM UNS",
    links: { github: "#", web: "#", linkedin: "#" },
  },
  {
    category: "Productivity · AI",
    badge: "PERSONAL R&D",
    badgeColor: { bg: "#F1EFE8", text: "#444441" },
    title: "Personal Tools",
    oneliner: "Notion + Trello + Spreadsheets — unified.",
    desc: "Built an all-in-one workspace combining Notion's flexibility, Trello's clarity, and spreadsheets' power. Supercharges product development without the app-switching tax.",
    stats: [
      { n: "3-in-1", label: "TOOLS\nUNIFIED" },
      { n: "0", label: "APP-SWITCHING\nTAX" },
      { n: "AI", label: "NATIVE FROM\nDAY ONE" },
    ],
    role: "Solo Builder",
    period: "2025 – Present",
    context: "Built for myself, opening to others",
    links: { github: "#", web: "#", youtube: "#" },
  },
];
