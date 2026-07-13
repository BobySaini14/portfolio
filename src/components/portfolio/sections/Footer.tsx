import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">© 2026 Boby Saini. All rights reserved.</p>
        <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          Built with React, Tailwind CSS and <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
        </p>
        <div className="flex gap-2">
          <a href="#" className="grid h-9 w-9 place-items-center rounded-lg glass text-white transition-transform hover:scale-110" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" className="grid h-9 w-9 place-items-center rounded-lg glass text-white transition-transform hover:scale-110" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
