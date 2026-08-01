"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

const EASE = [0.16, 1, 0.3, 1] as const; // expo.out-ish

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative min-h-screen px-6 md:px-12 pt-32 md:pt-48 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none"
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.p
        {...fadeUp(0)}
        className="relative font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-6"
      >
        {siteConfig.role}
      </motion.p>

      <h1 className="relative font-display font-semibold leading-[0.9] tracking-tight text-fg">
        <span className="block overflow-hidden">
          <motion.span {...fadeUp(0.1)} className="block text-6xl md:text-8xl lg:text-9xl">
            Sarathy
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            {...fadeUp(0.22)}
            className="block text-6xl md:text-8xl lg:text-9xl text-accent"
          >
            S P
          </motion.span>
        </span>
      </h1>

      <motion.p
        {...fadeUp(0.4)}
        className="relative text-fg-muted text-base md:text-lg max-w-xl mt-10 leading-relaxed"
      >
        {siteConfig.tagline}
      </motion.p>

      <motion.div {...fadeUp(0.55)} className="relative flex flex-wrap gap-4 mt-10">
        <Link
          href="/#projects"
          className="px-6 py-3 bg-accent text-bg text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
        >
          View Work
        </Link>
        
        <a  href={siteConfig.resumeUrl}
          className="px-6 py-3 border border-border text-fg text-sm font-medium rounded-full hover:border-accent transition-colors"
        >
          Resume
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(0.9)}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3"
      >
        <span className="font-mono text-[10px] text-fg-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-border relative overflow-hidden"
          aria-hidden
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            animate={shouldReduceMotion ? {} : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}