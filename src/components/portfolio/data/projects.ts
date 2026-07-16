export type Project = {
  title: string;
  category: "Full Stack" | "Frontend" | "API";
  tech: string[];
  description: string;
  features?: string[];
  links: { label: string; href: string }[];
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "CodeCanvas AI",
    category: "Full Stack",
    tech: ["React", "Node.js", "PostgreSQL", "Google Generative AI", "REST API"],
    description:
      "A scalable AI-powered DSA learning platform with curated problem sheets, real-time code execution, AI-powered guidance, optimized backend architecture, and PostgreSQL database management.",
    features: ["AI Assistant", "DSA Sheets", "Real-time Code Execution", "Authentication", "Modern Dashboard"],
    links: [
      { label: "Live Demo", href: "https://codecanvasai-dusky.vercel.app/" },
      { label: "GitHub", href: "#" },
      { label: "Case Study", href: "#" },
    ],
    gradient: "from-brand-blue via-brand-purple to-brand-cyan",
  },
  {
    title: "Swiggy Style Food Ordering",
    category: "Frontend",
    tech: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    description:
      "A responsive food ordering application with restaurant search, category filtering, reusable React components, API integration, and Netlify deployment.",
    features: ["Search", "Filters", "Responsive UI", "API Integration", "React Hooks"],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    gradient: "from-amber-400 via-rose-500 to-brand-purple",
  },
  {
    title: "GitHub Profile Fetch",
    category: "API",
    tech: ["HTML", "CSS", "JavaScript", "GitHub REST API"],
    description:
      "A GitHub Profile Viewer that fetches real-time user information using the GitHub REST API with asynchronous JavaScript and responsive UI.",
    links: [{ label: "GitHub", href: "#" }],
    gradient: "from-emerald-400 via-brand-cyan to-brand-blue",
  },
];
