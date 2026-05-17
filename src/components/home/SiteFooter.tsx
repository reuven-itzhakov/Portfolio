import { Code2, Github, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono">© {new Date().getFullYear()} Reuven Itzhakov. Built with intention.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/reuven-itzhakov/" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="size-4" />
          </a>
          <a href="https://github.com/reuven-itzhakov/" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="size-4" />
          </a>
          <a href="https://leetcode.com/u/reuven-itzhakov/" aria-label="LeetCode" className="hover:text-primary transition-colors">
            <Code2 className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}