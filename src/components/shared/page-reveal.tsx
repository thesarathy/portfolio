"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const PANEL_EASE = [0.83, 0, 0.17, 1] as const;
const REVEAL_DELAY = 2600; // ms — wait for the loading screen (greetings cycle) to finish
const REVEAL_DURATION = 0.9; // s — how long the shutters take to part open

export function PageReveal() {
  const [opening, setOpening] = useState(false);
  const [done, setDone] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDone(true);
      return;
    }
    const id = setTimeout(() => setOpening(true), REVEAL_DELAY);
    return () => clearTimeout(id);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!opening) return;
    const id = setTimeout(() => setDone(true), REVEAL_DURATION * 1000);
    return () => clearTimeout(id);
  }, [opening]);

  return (
    <AnimatePresence>
      {!done && (
        <>
          {/* Left shutter panel */}
          <motion.div
            aria-hidden
            className="fixed inset-y-0 left-0 w-1/2 z-[90] bg-[#0a0a0a] flex items-center justify-end"
            animate={opening ? { x: "-100%" } : { x: "0%" }}
            transition={{ duration: REVEAL_DURATION, ease: PANEL_EASE }}
          >
            {/* Inner accent edge that leads the reveal */}
            <motion.div
              className="w-[3px] h-full bg-gradient-to-t from-transparent via-accent to-transparent"
              initial={{ opacity: 0 }}
              animate={opening ? { opacity: [0, 1, 0] } : { opacity: 0 }}
              transition={{ duration: REVEAL_DURATION * 0.8, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right shutter panel */}
          <motion.div
            aria-hidden
            className="fixed inset-y-0 right-0 w-1/2 z-[90] bg-[#0a0a0a] flex items-center justify-start"
            animate={opening ? { x: "100%" } : { x: "0%" }}
            transition={{ duration: REVEAL_DURATION, ease: PANEL_EASE }}
          >
            <motion.div
              className="w-[3px] h-full bg-gradient-to-t from-transparent via-accent to-transparent"
              initial={{ opacity: 0 }}
              animate={opening ? { opacity: [0, 1, 0] } : { opacity: 0 }}
              transition={{ duration: REVEAL_DURATION * 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
