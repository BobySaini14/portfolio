import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Briefcase,
    role: "Technical Intern",
    org: "ICSCIS-2026",
    period: "Feb 2026 – Apr 2026",
    points: [
      "Developed and deployed the official conference website.",
      "Built responsive interfaces.",
      "Managed deployment and technical maintenance.",
      "Optimized website performance.",
      "Supported technical operations during the conference.",
    ],
  },
  {
    icon: Users,
    role: "Technical Volunteer",
    org: "ICSCIS 2026",
    period: "Ongoing",
    points: ["Event Coordination", "Technical Support", "Team Collaboration"],
  },
  {
    icon: Briefcase,
    role: "Hackathon Participant",
    org: "CSJMU",
    period: "Various",
    points: [
      "Built web applications using MERN Stack",
      "Frontend Development & API Integration",
      "Team Collaboration",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Experience"
          title={<>Where I've <span className="text-gradient">Contributed</span></>}
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent sm:left-1/2" />
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={it.role + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className={`relative mb-10 grid gap-4 sm:grid-cols-2 ${left ? "" : "sm:[&>div:first-child]:col-start-2"}`}
              >
                <span className="absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-brand shadow-glow sm:left-1/2">
                  <it.icon className="h-4 w-4 text-white" />
                </span>
                <div className={`glass card-hover ml-12 rounded-2xl p-6 sm:ml-0 ${left ? "sm:mr-10 sm:text-right" : "sm:ml-10"}`}>
                  <div className="text-xs uppercase tracking-widest text-brand-cyan">{it.period}</div>
                  <div className="mt-1 font-display text-xl font-bold">{it.role}</div>
                  <div className="text-sm text-muted-foreground">{it.org}</div>
                  <ul className={`mt-4 space-y-1.5 text-sm text-muted-foreground ${left ? "sm:text-right" : ""}`}>
                    {it.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
