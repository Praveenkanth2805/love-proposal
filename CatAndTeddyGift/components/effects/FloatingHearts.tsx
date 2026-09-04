"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface FloatingHeartsProps {
  count?: number;
}

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  rotate: number;
  symbol: string;
}

const symbols = ["♡", "♥", "·", "✦"];

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export default function FloatingHearts({
  count = 16,
}: FloatingHeartsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useMemo<FloatingHeart[]>(
    () =>
      Array.from({ length: count }, (_, index) => {
        const seed = index + count * 13;
        const random = (offset: number) =>
          seededRandom(seed + offset * 19.7);

        return {
          id: index,
          left: 5 + random(1) * 90,
          delay: random(2) * 5,
          duration: 7 + random(3) * 5,
          size: 10 + random(4) * 14,
          drift: -30 + random(5) * 60,
          rotate: -25 + random(6) * 50,
          symbol: symbols[index % symbols.length],
        };
      }),
    [count],
  );

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {items.map((item) => (
        <motion.span
          key={item.id}
          className="absolute bottom-[-30px] select-none font-light text-[#d98ca5]"
          style={{
            left: `${item.left}%`,
            fontSize: item.size,
          }}
          initial={{
            y: 0,
            x: 0,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: [0, "-45vh", "-95vh"],
            x: [0, item.drift, item.drift * -0.5],
            opacity: [0, 0.08, 0.28, 0],
            rotate: [0, item.rotate, item.rotate * -0.5, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {item.symbol}
        </motion.span>
      ))}
    </div>
  );
}