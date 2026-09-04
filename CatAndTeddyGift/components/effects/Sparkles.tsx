"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface SparklesProps {
  count?: number;
}

interface Sparkle {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
}

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export default function Sparkles({ count = 18 }: SparklesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sparkles = useMemo<Sparkle[]>(
    () =>
      Array.from({ length: count }, (_, index) => {
        const seed = index + count * 23;
        const random = (offset: number) =>
          seededRandom(seed + offset * 17.3);

        return {
          id: index,
          left: random(1) * 100,
          top: random(2) * 100,
          delay: random(3) * 2,
          duration: 1.5 + random(4) * 2,
          size: 7 + random(5) * 9,
          drift: -4 + random(6) * 8,
        };
      }),
    [count],
  );

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute select-none font-light text-[#e6a5b8]"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            fontSize: sparkle.size,
          }}
          initial={{
            opacity: 0,
            scale: 0.35,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.15, 0.7, 0],
            scale: [0.35, 1, 0.55],
            x: [0, sparkle.drift, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}