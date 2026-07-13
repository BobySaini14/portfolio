import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  "Built multiple MERN Stack projects",
  "REST API Development",
  "JWT Authentication",
  "MongoDB Integration",
  "Full Stack Development",
  "Open Source Contributions",
  "Continuous GitHub Activity",
  "Regular DSA Practice",
];

export default function Achievements() {
  return (
    <section className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Milestones"
          title={<><span className="text-gradient">Achievements</span> & Highlights</>}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass card-hover flex items-center gap-3 rounded-2xl p-4"
            >
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-cyan" />
              <span className="text-sm font-medium text-white/90">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
