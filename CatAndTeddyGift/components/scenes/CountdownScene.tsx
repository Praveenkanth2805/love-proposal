'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Confetti from '../effects/Confetti';

interface CountdownSceneProps {
  onComplete: () => void;
}

export default function CountdownScene({
  onComplete,
}: CountdownSceneProps) {
  const [count, setCount] = useState(3);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setFinished(true);
          return 0;
        }

        return current - 1;
      });
    }, 900);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!finished) return;

    const timer = window.setTimeout(onComplete, 1450);

    return () => window.clearTimeout(timer);
  }, [finished, onComplete]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#100b10] px-5 text-center">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          opacity: finished ? [0.35, 0.7, 0.35] : 0.28,
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle at center,rgba(239,169,190,0.24),transparent 42%)',
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          scale: finished ? [0.8, 1.5, 2.2] : [0.85, 1.08, 0.85],
          opacity: finished ? [0.18, 0.3, 0] : [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: finished ? 1.2 : 2.8,
          repeat: finished ? 0 : Infinity,
          ease: 'easeOut',
        }}
        style={{
          background:
            'radial-gradient(circle,rgba(244,183,201,0.4),transparent 68%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d9a9b9]"
        >
          Something special is coming
        </motion.p>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={count}
              initial={{
                opacity: 0,
                scale: 0.45,
                y: 18,
                filter: 'blur(8px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                scale: 1.55,
                y: -12,
                filter: 'blur(8px)',
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_70px_rgba(239,169,190,0.12)]"
              aria-live="assertive"
              aria-label={`Countdown ${count}`}
            >
              <span className="text-[clamp(4.5rem,22vw,7rem)] font-semibold leading-none tracking-[-0.08em] text-[#fff4f7]">
                {count}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{
                opacity: 0,
                scale: 0.2,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.2, 1, 1.18, 1.7],
              }}
              transition={{
                duration: 1.25,
                ease: 'easeOut',
              }}
              className="flex h-32 w-32 items-center justify-center rounded-full border border-[#f1b5c8]/20 bg-[#f1b5c8]/5 shadow-[0_0_90px_rgba(241,181,200,0.3)]"
              aria-hidden="true"
            >
              <span className="text-5xl font-light text-[#f5c7d4]">
                ✦
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!finished && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-7 text-xs tracking-[0.18em] text-[#c9aeb8]"
            >
              Get ready...
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <Confetti
        active={finished}
        count={55}
      />
    </section>
  );
}