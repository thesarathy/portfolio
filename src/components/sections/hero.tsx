"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

const GREETINGS = [
  "Hello",
  "Bonjour",
  "स्वागत हे",
  "Ciao",
  "Olá",
  "おい",
  "Hallå",  
  "Guten tag",
  "Hallo",
];

function Greeting() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % GREETINGS.length), 900);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <span className="inline-block overflow-hidden align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={GREETINGS[index]}
          initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
          animate={{ y: 0 }}
          exit={shouldReduceMotion ? { y: 0 } : { y: "-100%" }}
          transition={{ duration: 0.45, ease: EASE }}
          className="inline-block"
        >
          {GREETINGS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

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
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none"
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-3"
          >
            <Greeting />
          </motion.p>
          <motion.p
            {...fadeUp(0.06)}
            className="font-mono text-xs md:text-sm text-fg-muted tracking-widest uppercase mb-8"
          >
            {siteConfig.role}
          </motion.p>

          <h1 className="font-display font-semibold leading-[0.9] tracking-tight text-fg">
            <span className="block overflow-hidden">
              <motion.span {...fadeUp(0.1)} className="block text-5xl md:text-6xl lg:text-7xl">
                Sarathy
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                {...fadeUp(0.22)}
                className="block text-5xl md:text-6xl lg:text-7xl text-accent"
              >
                S P
              </motion.span>
            </span>
          </h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-fg-muted text-lg md:text-xl max-w-xl mt-10 leading-relaxed"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 mt-12">
            <Link
              href="/#work"
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
        </div>

        <motion.div
          {...fadeUp(0.3)}
          className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden"
        >
          <Image
            src="/profile.jpg"
            alt="Sarathy S P"
            fill
            priority
            className="object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-accent/25 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.9)}
        className="absolute bottom-6 left-6 md:left-12 flex items-center gap-3"
      >
        <span className="font-mono text-[10px] text-fg-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div className="w-px h-8 bg-border relative overflow-hidden" aria-hidden>
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