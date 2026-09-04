'use client';

import { motion } from 'framer-motion';
import Teddy from './Teddy';
import Cat from './Cat';

interface TeddyCatSceneProps {
  mode?: 'together' | 'happy' | 'love' | 'reveal';
}

export default function TeddyCatScene({
  mode = 'together',
}: TeddyCatSceneProps) {
  const teddyState =
    mode === 'love'
      ? 'love'
      : mode === 'happy' || mode === 'reveal'
        ? 'happy'
        : 'idle';

  const catState =
    mode === 'love'
      ? 'love'
      : mode === 'happy' || mode === 'reveal'
        ? 'happy'
        : 'tail-wag';

  return (
    <div className="relative flex min-h-[260px] w-full items-end justify-center overflow-visible">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: -70 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <Teddy
          size={190}
          state={teddyState}
        />
      </motion.div>

      <motion.div
        className="relative z-20 -ml-8"
        initial={{
          opacity: 0,
          x: 90,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.35,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <Cat
          size={155}
          state={catState}
        />
      </motion.div>

      {mode === 'love' && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 text-3xl"
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1.1, 0.8],
            y: [20, -10, -25, -50],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          aria-hidden
        >
          ♥
        </motion.div>
      )}
    </div>
  );
}