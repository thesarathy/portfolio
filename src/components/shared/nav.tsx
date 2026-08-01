"use client";

import Link from "next/link";
import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const EASE = "cubic-bezier(0, 0.55, 0.45, 1)"; // circ.out

function MagneticLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
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
        transition: `transform 0.35s ${EASE}, color 0.3s ${EASE}`,
      }}
      className={`relative text-sm inline-block ${
        active ? "text-accent" : "text-fg-muted hover:text-fg"
      }`}
    >
      {label}
    </Link>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Mobile menu: body scroll lock + focus first link
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      firstLinkRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Active section detection
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll progress bar
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-fg"
          >
            Sarathy S P
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <MagneticLink
                key={link.href}
                label={link.label}
                href={link.href}
                active={activeId === link.id}
              />
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="Open menu"
            className="md:hidden text-fg text-sm"
          >
            Menu
          </button>
        </div>

        {/* Scroll progress bar */}
        <div className="h-px bg-border">
          <div
            className="h-full bg-accent"
            style={{
              width: `${scrollProgress}%`,
              transition: `width 0.1s linear`,
            }}
          />
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0, 0.55, 0.45, 1] }}
            className="fixed inset-0 z-[60] bg-bg flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-border">
              <span className="font-display text-lg font-semibold text-fg">
                Sarathy S P
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-fg text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.07,
                    ease: [0, 0.55, 0.45, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl font-semibold text-fg hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}