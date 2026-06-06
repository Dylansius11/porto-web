export interface SkillCategory {
  num: string;
  title: string;
  brief: string;
  skills: string[];
}

export const SKILL_CATS: SkillCategory[] = [
  {
    num: "01",
    title: "Product & Strategy",
    brief: "End-to-end ownership from problem discovery to GTM execution.",
    skills: [
      "Product Management",
      "Project Management (Agile)",
      "Go-to-Market Strategy",
      "Process Modelling",
      "Market Sizing",
      "Hypothesis-Driven Analysis",
      "Business Development",
      "Pitch Deck Creation",
      "System Architecture",
      "Financial Data Integration",
    ],
  },
  {
    num: "02",
    title: "AI & Technical",
    brief: "Building with AI agents, data pipelines, and modern toolchains.",
    skills: [
      "GenAI Integration",
      "AI Agent Orchestration",
      "AI Automation",
      "Context Engineering",
      "Data Pipeline Integration",
      "SQL",
      "Python (Pandas)",
      "Power BI",
      "Data Modeling",
      "RAG Pipelines",
      "Custom Tool Development",
      "Research & Analysis",
    ],
  },
  {
    num: "03",
    title: "Leadership & Comms",
    brief: "People, partnerships, and getting things across the line.",
    skills: [
      "Cross-functional Leadership",
      "Team Coordination",
      "Excellent Communication",
      "B2B Partnership Negotiation",
      "Community Building",
      "Public Speaking",
      "Pitch Delivery",
      "Stakeholder Management",
      "Mentorship",
    ],
  },
];

export const TOOLS = [
  "Cursor",
  "Claude",
  "Figma",
  "Notion",
  "Linear",
  "Vercel",
  "Next.js",
  "Tailwind",
  "Solana",
  "Anthropic API",
  "Spline",
  "Framer",
];

export const CERTS = [
  "Agile Scrum Fundamentals (Mind Magine)",
  "Revenue Operations Certificate (Hubspot)",
  "Green Digital Certificate (Inco)",
  "Complete Business Plan Course (Udemy)",
  "Presentation & Public Speaking (Udemy)",
  "Bloomberg Market Concepts (In Progress)",
];
