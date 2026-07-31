"use client";

import Link from "next/link";
import { useRef, useState, MouseEvent } from "react";

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

function MagneticLink({ label, href }: { label: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 1, y: y * 1 });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
      className="relative text-sm text-fg-muted hover:text-fg inline-block"
    >
      {label}
    </Link>
  );
}

export function Nav() {
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
          <MagneticLink key={link.href} label={link.label} href={link.href} />
        ))}
      </nav>

      {/* Mobile nav trigger — placeholder, real menu comes later */}
      <button className="md:hidden text-fg text-sm" aria-label="Open menu">
        Menu
      </button>
    </header>
  );
}