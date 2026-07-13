import { motion } from "framer-motion";
import { Code2, Rocket, Puzzle, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const cards = [
  { icon: Code2, title: "Clean Code", text: "I write scalable and maintainable code following industry best practices." },
  { icon: Rocket, title: "Fast Learner", text: "I quickly adapt to new technologies, frameworks, and codebases." },
  { icon: Puzzle, title: "Problem Solver", text: "I love breaking down complex technical challenges into elegant solutions." },
  { icon: Users, title: "Team Player", text: "Strong collaboration, communication, and code-review skills." },
];

export default function WhyHireMe() {
  return (
    <section className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Me"
          title={<>Why <span className="text-gradient">Hire Me</span></>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass card-hover group relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
