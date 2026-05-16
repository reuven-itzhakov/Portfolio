import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all ${
          scrolled
            ? "glass-card rounded-full px-4 py-2"
            : ""
        }`}
        style={scrolled ? { maxWidth: "60rem" } : undefined}
      >
        <Link to="/" className="font-mono text-sm tracking-tight">
          <span className="text-primary">{"<"}</span>
          <span className="text-foreground">reuven</span>
          <span className="text-accent">{".dev"}</span>
          <span className="text-primary">{" />"}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center font-mono text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
        >
          let's_talk()
        </a>
      </div>
    </header>
  );
}
