import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const groups: { title: string; color: string; skills: { name: string; level: number }[] }[] = [
  {
    title: "Languages",
    color: "from-brand-blue to-brand-cyan",
    skills: [
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Frontend",
    color: "from-brand-purple to-brand-blue",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Responsive Design", level: 94 },
      { name: "Component Architecture", level: 85 },
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-400 to-brand-cyan",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 85 },
    ],
  },
  {
    title: "Database",
    color: "from-brand-cyan to-brand-purple",
    skills: [
      { name: "MongoDB", level: 87 },
      { name: "PostgreSQL", level: 80 },
      { name: "Mongoose", level: 85 },
    ],
  },
  {
    title: "AI & Tools",
    color: "from-fuchsia-500 to-brand-purple",
    skills: [
      { name: "Google Generative AI", level: 78 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 88 },
    ],
  },
  {
    title: "Concepts",
    color: "from-amber-400 to-rose-500",
    skills: [
      { name: "MERN Stack", level: 90 },
      { name: "MVC Architecture", level: 85 },
      { name: "API Testing / Debugging", level: 86 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title={<>Technical <span className="text-gradient">Toolbox</span></>}
          subtitle="The languages, frameworks, and tools I use to ship production-grade software."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              className="glass card-hover rounded-3xl p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">{g.title}</h3>
                <span className={`h-2 w-16 rounded-full bg-gradient-to-r ${g.color}`} />
              </div>
              <ul className="space-y-4">
                {g.skills.map((s, i) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-white/90">{s.name}</span>
                      <span className="text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.9, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${g.color}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
