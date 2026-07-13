import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Loader2, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "sent">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => {
      setState("sent");
      setTimeout(() => setState("idle"), 2500);
    }, 1200);
  };

  return (
    <section id="contact" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's Build Something <span className="text-gradient">Amazing</span></>}
          subtitle="Have a project, opportunity, or just want to say hi? My inbox is open."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass flex flex-col gap-4 rounded-3xl p-8"
          >
            <ContactRow icon={Mail} label="Email" value="bobysaini369@gmail.com" href="mailto:bobysaini369@gmail.com" />
            <ContactRow icon={Phone} label="Phone" value="+91 6395488776" href="tel:+916395488776" />
            <ContactRow icon={MapPin} label="Location" value="Uttar Pradesh, India" />

            <div className="mt-4 border-t border-white/5 pt-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Follow</p>
              <div className="flex gap-3">
                <a href="#" className="grid h-11 w-11 place-items-center rounded-xl glass text-white transition-transform hover:scale-110" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl glass text-white transition-transform hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="Project inquiry" required />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand-blue/60 focus:bg-white/10"
              />
            </div>
            <button
              type="submit"
              disabled={state !== "idle"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
            >
              {state === "idle" && (<><Send className="h-4 w-4" /> Send Message</>)}
              {state === "loading" && (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>)}
              {state === "sent" && (<><Check className="h-4 w-4" /> Message Sent!</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-white/5">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand-blue/60 focus:bg-white/10"
      />
    </div>
  );
}
