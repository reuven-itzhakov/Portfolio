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
          scrolled ? "bg-card border border-border rounded-lg px-4 py-2" : ""
        }`}
        style={scrolled ? { maxWidth: "60rem" } : undefined}
      >
        <Link to="/" className="font-heading text-sm font-semibold tracking-tight">
          <span className="text-foreground">reuven</span>
          <span className="text-primary">.dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
