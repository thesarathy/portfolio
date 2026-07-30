"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
   <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-bg/80 backdrop-blur-md border-b border-border">
      <Link
        href="/"
        className="font-display text-lg font-semibold tracking-tight text-fg"
      >
        Sarathy S P
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(link.href)}
            onMouseLeave={() => setHovered(null)}
            className="relative text-sm text-fg-muted transition-colors duration-300 hover:text-fg"
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                hovered === link.href ? "w-full" : "w-0"
              }`}
            />
          </Link>
        ))}
      </nav>

      {/* Mobile nav trigger — placeholder, real menu comes later */}
      <button
        className="md:hidden text-fg text-sm"
        aria-label="Open menu"
      >
        Menu
      </button>
    </header>
  );
}