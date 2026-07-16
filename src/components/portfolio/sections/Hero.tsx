import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg.asset.json";

const ROLES = [
  "Full Stack Developer (MERN)",
  "Software Development Engineer",
  "Backend Developer",
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      const next = del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((n) => n + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pt-28 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </span>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient animate-gradient">Boby Saini</span>
          </h1>

          <div className="mt-6 flex min-h-[2.5rem] items-center gap-2 text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="text-white/90">{typed}</span>
            <span className="caret inline-block h-6 w-[3px] bg-brand-blue" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Building scalable full stack applications with clean code, modern technologies,
            and exceptional user experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://docs.google.com/document/d/1S36b5P5SEjI9v1vsxUhkpmnLgex1kUTm/export?format=pdf"
              target="_blank"
              rel="noreferrer"
              download="Boby-Saini-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-white"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full glass text-white transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full glass text-white transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-8 sm:max-w-md">
            <Stat value={10} suffix="+" label="Projects" />
            <Stat value={3} suffix="+" label="Years Coding" />
            <Stat value={20} suffix="+" label="Technologies" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-brand animate-gradient" style={{ backgroundSize: "300% 300%" }} />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-background bg-card sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img src={profilePhoto.url} alt="Boby Saini" className="h-full w-full object-cover" />
            </div>
            {/* orbiting badges */}
            <FloatBadge className="-top-2 -left-4 bg-brand-blue/20 text-brand-blue">React</FloatBadge>
            <FloatBadge className="top-10 -right-6 bg-brand-purple/20 text-brand-purple" delay={-2}>Node.js</FloatBadge>
            <FloatBadge className="bottom-8 -left-8 bg-brand-cyan/20 text-brand-cyan" delay={-4}>Mongo</FloatBadge>
            <FloatBadge className="-bottom-2 right-4 bg-emerald-400/20 text-emerald-300" delay={-6}>Express</FloatBadge>
          </div>
        </motion.div>
      </div>

    </section>
  );
}

function FloatBadge({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.span
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute rounded-full glass px-3 py-1.5 text-xs font-semibold backdrop-blur ${className}`}
    >
      {children}
    </motion.span>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <div>
      <div className="font-display text-3xl font-bold text-white">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
