"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const greetings = [
  "Hello",
  "Namaste",
  "Vanakkam",
  "Bonjour",
  "Hola",
  "Ciao",
  "Konnichiwa",
  "Annyeong",
  "Hallo",
  "Olá",
  "Salaam",
  "Nǐ hǎo",
  "Privet",
  "Shalom",
  "Sawasdee",
  "Merhaba",
  "Welcome",
];

export function LoadingScreen() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDone(true);
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next === greetings.length) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
          return prev;
        }
        return next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const progress = Math.round(((index + 1) / greetings.length) * 100);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient glow, pulsing gently */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative h-24 md:h-32 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={greetings[index]}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="relative font-display italic font-medium text-5xl md:text-8xl text-fg tracking-tight"
              >
                {/* Light sweep across the word each time it appears */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent bg-clip-text text-transparent pointer-events-none"
                  initial={{ backgroundPosition: "-200% 0" }}
                  animate={{ backgroundPosition: "200% 0" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  {greetings[index]}
                </motion.span>
                {greetings[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Loading bar */}
          <div className="relative mt-10 w-56 md:w-72 h-1 bg-border rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "linear" }}
            />
          </div>

          <p className="font-mono text-xs text-fg-muted tracking-widest mt-4 tabular-nums">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}