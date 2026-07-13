import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Project = {
  title: string;
  category: "Full Stack" | "Frontend" | "API";
  tech: string[];
  description: string;
  features?: string[];
  links: { label: string; href: string }[];
  gradient: string;
};

const projects: Project[] = [
  {
    title: "CodeCanvas AI",
    category: "Full Stack",
    tech: ["React", "Node.js", "PostgreSQL", "Google Generative AI", "REST API"],
    description:
      "A scalable AI-powered DSA learning platform with curated problem sheets, real-time code execution, AI-powered guidance, optimized backend architecture, and PostgreSQL database management.",
    features: ["AI Assistant", "DSA Sheets", "Real-time Code Execution", "Authentication", "Modern Dashboard"],
    links: [
      { label: "Live Demo", href: "#" },
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

const filters = ["All", "Full Stack", "Frontend", "API"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title={<>Featured <span className="text-gradient">Projects</span></>}
          subtitle="A selection of work spanning full stack applications, AI integrations, and modern frontends."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-brand shadow-glow"
                />
              )}
              {!(filter === f) && <span className="absolute inset-0 -z-10 rounded-full glass" />}
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass card-hover group flex flex-col overflow-hidden rounded-3xl"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 grid place-items-center text-white/70">
                    <div className="flex flex-col items-center gap-2">
                      <ImageIcon className="h-10 w-10" strokeWidth={1.3} />
                      <span className="text-xs uppercase tracking-widest">Screenshot placeholder</span>
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                    {p.links.map((l, i) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                          i === 0
                            ? "bg-gradient-brand text-white hover:opacity-90"
                            : "glass text-white hover:bg-white/10"
                        }`}
                      >
                        {l.label === "GitHub" ? <Github className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
