import { motion } from "framer-motion";
import { Code2, Database, Server, Sparkles, GitBranch, Puzzle, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  { icon: Code2, label: "MERN Stack Developer" },
  { icon: Server, label: "REST API Specialist" },
  { icon: Database, label: "Backend Developer" },
  { icon: Sparkles, label: "AI Integration Enthusiast" },
  { icon: GitBranch, label: "Open Source Contributor" },
  { icon: Puzzle, label: "Problem Solver" },
];

const timeline = [
  { title: "B.Tech", org: "CSJMU, Kanpur", period: "2022 – 2026" },
  { title: "Intermediate", org: "SS Academy", period: "2019 – 2020" },
  { title: "High School", org: "NCH School", period: "2017 – 2018" },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About" title={<>About <span className="text-gradient">Me</span></>} />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a Full Stack MERN Developer specializing in JavaScript,
              React.js, Node.js, Express.js, MongoDB, and PostgreSQL. I've built complete
              full-stack applications, REST APIs, authentication systems, AI-powered platforms,
              and responsive interfaces.
            </p>
            <p>
              I enjoy designing scalable architectures, optimizing backend performance,
              and creating clean frontend experiences.
            </p>
            <p>
              Besides development, I actively participate in hackathons, contribute to
              open-source repositories, and continuously practice Data Structures and Algorithms
              using JavaScript.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass card-hover flex items-center gap-3 rounded-2xl p-4"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-white">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand-cyan text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">Academic journey</p>
              </div>
            </div>

            <ol className="relative border-l border-white/10 pl-6">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="mb-8 last:mb-0"
                >
                  <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-gradient-brand shadow-glow" />
                  <div className="text-xs uppercase tracking-widest text-brand-cyan">{t.period}</div>
                  <div className="mt-1 font-display text-lg font-semibold text-white">{t.title}</div>
                  <div className="text-sm text-muted-foreground">{t.org}</div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
