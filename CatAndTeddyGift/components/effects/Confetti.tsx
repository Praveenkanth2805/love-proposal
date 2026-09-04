'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  active: boolean;
  count?: number;
}

interface Piece {
  id: number;
  x: number;
  rotation: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const colors = [
  '#F4B7C5',
  '#E9A0B5',
  '#F6C9A8',
  '#DFA8C1',
  '#E8C98A',
  '#CFA8D8',
  '#F2B6A0',
];

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export default function Confetti({
  active,
  count = 45,
}: ConfettiProps) {
  const [visible, setVisible] = useState(active);

  const pieces = useMemo<Piece[]>(
    () =>
      Array.from({ length: count }, (_, index) => {
        const seed = index + count * 17;
        const random = (offset: number) =>
          seededRandom(seed + offset * 31.7);

        return {
          id: index,
          x: -45 + random(1) * 90,
          rotation: random(2) * 720 - 360,
          delay: random(3) * 0.25,
          duration: 1.8 + random(4) * 1.5,
          size: 5 + random(5) * 6,
          color: colors[index % colors.length],
        };
      }),
    [count],
  );

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 3800);

    return () => window.clearTimeout(timer);
  }, [active]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute left-1/2 top-[42%] rounded-[2px]"
          style={{
            width: piece.size,
            height: piece.size * 1.8,
            backgroundColor: piece.color,
            boxShadow: `0 0 ${piece.size * 1.5}px ${piece.color}55`,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.6,
            rotate: 0,
          }}
          animate={{
            x: `${piece.x}vw`,
            y: ['0vh', '25vh', '75vh'],
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 0.9],
            rotate: piece.rotation,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}