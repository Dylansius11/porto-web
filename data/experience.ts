export interface ExperienceEntry {
  date: string;
  company: string;
  location: string;
  role: string;
  bullets: string[];
  tags: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    date: "FEB 2026 – PRESENT",
    company: "Hotel Genio Syariah",
    location: "Surakarta, Indonesia",
    role: "Project Manager & System Architect",
    bullets: [
      "Reduced manual data processing time by an estimated 87% by evaluating entity-level revenue and gross margins while designing an integrated financial reporting system.",
      "Executed comprehensive workforce transformation training 18+ employees on new digital infrastructure.",
    ],
    tags: ["System Architecture", "Financial Reporting", "Workforce Transformation"],
  },
  {
    date: "FEB 2026 – PRESENT",
    company: "DISKOMINFO Karang Anyar",
    location: "Surakarta, Indonesia",
    role: "Business Analyst & System Architect",
    bullets: [
      "Engineered an automated information system to manage and process public complaints, standardizing data collection workflows for local government operations.",
    ],
    tags: ["GovTech", "Automation", "Public Sector"],
  },
  {
    date: "FEB 2026 – PRESENT",
    company: "Arthur D. Little (ADL) × DWDG",
    location: "Remote",
    role: "Business Consulting Mentee",
    bullets: [
      "Applying structured problem-solving frameworks to analyze corporate strategy cases, advancing through selection phases with hypothesis-driven analysis and quantitative rigor.",
    ],
    tags: ["Consulting", "Strategy", "Frameworks"],
  },
  {
    date: "MAR 2025 – PRESENT",
    company: "Superteam Indonesia",
    location: "Remote",
    role: "Event & Partnership Coordinator",
    bullets: [
      "Drove rapid community adoption of 80+ members in under a month by securing an official strategic partnership with the Faculty of IT and Data Science within a 4-day timeline.",
      "Achieved 75% attendee conversion rate from event registrations for Superteam's Java Road Trip Solo Edition (53+ engaged participants).",
      "Secured keynote speakers by establishing partnership with Solo's largest crypto community in less than a week.",
    ],
    tags: ["Community", "Partnerships", "Web3"],
  },
  {
    date: "APR 2024 – DEC 2024",
    company: "TEDx UNS",
    location: "Surakarta, Indonesia",
    role: "Partnership Staff",
    bullets: [
      "Led B2B Partnership negotiations, successfully securing sponsorship from PT Mirae Asset Sekuritas Indonesia which funded more than 50% of the total event budget.",
      "Chosen as CO-CEO Candidate and MVP of Partnership Team (July 2024) for outstanding performance.",
    ],
    tags: ["B2B Sales", "Negotiation", "Leadership"],
  },
];
