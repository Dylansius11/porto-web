export interface Achievement {
  tier: string;
  year: string;
  title: string;
  by: string;
  desc: string;
  badge: { bg: string; text: string };
  full?: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    tier: "FLAGSHIP",
    year: "2025",
    title: "Top 7 National Finalist",
    by: "Hacktiv8 × Meta Llama Accelerator",
    desc: "Selected from hundreds of applicants nationwide for SimplyBox, an AI-powered customer support automation platform.",
    badge: { bg: "#EEEDFE", text: "#3C3489" },
    full: true,
  },
  {
    tier: "WINNER",
    year: "2025",
    title: "Marketing Strategy Winner",
    by: "Grab Next Generation UNS",
    desc: "Chosen out of 80+ participants for designing a growth strategy projected to lift Grab's university-demographic engagement by 22%.",
    badge: { bg: "#EAF3DE", text: "#27500A" },
  },
  {
    tier: "AWARD",
    year: "2025",
    title: "Favorite Delegate",
    by: "Sandination Rocket 5.0",
    desc: "Youth Leadership and Entrepreneurship recognition for outstanding participation and contribution.",
    badge: { bg: "#FAEEDA", text: "#633806" },
  },
  {
    tier: "FINALIST",
    year: "2025",
    title: "Top 300 National Participant",
    by: "Indonesia Next 9th",
    desc: "Selected nationally from thousands of applicants for the leadership development program.",
    badge: { bg: "#E6F1FB", text: "#0C447C" },
  },
  {
    tier: "RECOGNITION",
    year: "2024",
    title: "CO-CEO Candidate & Partnership MVP",
    by: "TEDx UNS",
    desc: "Internal recognition for exceeding fundraising targets through strategic negotiation.",
    badge: { bg: "#FAECE7", text: "#712B13" },
  },
  {
    tier: "PROJECT LEAD",
    year: "2025",
    title: "BI & OJK Hackathon",
    by: "Bank Indonesia × OJK",
    desc: "Directed a cross-functional team of 4 to develop a fintech prototype, pitching to industry executives in 3 weeks.",
    badge: { bg: "#F1EFE8", text: "#444441" },
  },
];
