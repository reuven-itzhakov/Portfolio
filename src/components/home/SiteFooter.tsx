import { Code2, Github, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono">© {new Date().getFullYear()} Reuven Itzhakov</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/reuven-itzhakov/"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-card/55 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://github.com/reuven-itzhakov/"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-card/55 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://leetcode.com/u/reuven-itzhakov/"
            aria-label="LeetCode"
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-card/55 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
          >
            <Code2 className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
