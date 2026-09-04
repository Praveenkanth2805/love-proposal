"use client";

import { motion, type Variants } from "framer-motion";

type TeddyState =
  | "idle"
  | "appear"
  | "float"
  | "blink"
  | "wave"
  | "happy"
  | "surprised"
  | "love";

interface TeddyProps {
  state?: TeddyState;
  size?: number;
  className?: string;
}

const bodyVariants: Variants = {
  idle: {
    y: [0, -4, 0],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  float: {
    y: [0, -12, 0],
    rotate: [0, 1, 0, -1, 0],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  appear: {
    opacity: [0, 1],
    scale: [0.72, 1.06, 1],
    y: [20, -5, 0],
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  happy: {
    y: [0, -9, 0],
    rotate: [0, -2, 2, -1, 0],
    transition: {
      duration: 1.25,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  surprised: {
    scale: [1, 1.08, 1],
    y: [0, -5, 0],
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  love: {
    y: [0, -7, 0],
    scale: [1, 1.035, 1],
    transition: {
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  blink: {
    scale: 1,
  },
  wave: {
    rotate: [0, -1, 1, -1, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const armWave = {
  rotate: [0, -20, 13, -20, 0],
  transition: {
    duration: 1.15,
    ease: "easeInOut" as const
  },
};

export default function Teddy({
  state = "idle",
  size = 200,
  className = "",
}: TeddyProps) {
  const blinking = state === "blink";
  const surprised = state === "surprised";
  const happy = state === "happy";
  const love = state === "love";

  return (
    <motion.div
  className={`relative select-none ${className}`}
  style={{
    width: size,
    height: size * 1.25,
  }}
  initial={{ opacity: 1, scale: 1, y: 0 }}
  animate={bodyVariants[state]}
  role="img"
  aria-label="Cute teddy character"
>
      <svg
        viewBox="0 0 240 300"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="teddyBody" x1="62" y1="50" x2="185" y2="285">
            <stop offset="0" stopColor="#E6B486" />
            <stop offset="0.55" stopColor="#D9A477" />
            <stop offset="1" stopColor="#C58B61" />
          </linearGradient>

          <linearGradient id="teddyFace" x1="90" y1="82" x2="150" y2="160">
            <stop offset="0" stopColor="#F4CEAA" />
            <stop offset="1" stopColor="#E5B78F" />
          </linearGradient>

          <linearGradient id="teddyBelly" x1="90" y1="178" x2="145" y2="260">
            <stop offset="0" stopColor="#F4CEAA" />
            <stop offset="1" stopColor="#E4B58C" />
          </linearGradient>

          <radialGradient id="earInner">
            <stop offset="0" stopColor="#F1C8A4" />
            <stop offset="1" stopColor="#DFAE86" />
          </radialGradient>

          <filter
            id="teddyShadow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="5" />
          </filter>

          <filter
            id="softGlow"
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <motion.ellipse
          cx="120"
          cy="284"
          rx="67"
          ry="10"
          fill="#6E4635"
          opacity="0.14"
          filter="url(#teddyShadow)"
          animate={
            state === "float"
              ? {
                  rx: [67, 56, 67],
                  opacity: [0.14, 0.07, 0.14],
                }
              : {
                  rx: 67,
                  opacity: 0.14,
                }
          }
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Ears */}
        <circle
          cx="62"
          cy="70"
          r="42"
          fill="url(#teddyBody)"
        />
        <circle
          cx="178"
          cy="70"
          r="42"
          fill="url(#teddyBody)"
        />

        <circle
          cx="62"
          cy="70"
          r="25"
          fill="url(#earInner)"
        />
        <circle
          cx="178"
          cy="70"
          r="25"
          fill="url(#earInner)"
        />

        {/* Ear highlights */}
        <circle
          cx="52"
          cy="58"
          r="9"
          fill="#F8D9BF"
          opacity="0.42"
        />
        <circle
          cx="168"
          cy="58"
          r="9"
          fill="#F8D9BF"
          opacity="0.42"
        />

        {/* Head */}
        <ellipse
          cx="120"
          cy="105"
          rx="78"
          ry="70"
          fill="url(#teddyBody)"
        />

        {/* Head highlight */}
        <ellipse
          cx="96"
          cy="72"
          rx="28"
          ry="18"
          fill="#F8D9BF"
          opacity="0.18"
        />

        {/* Face */}
        <ellipse
          cx="120"
          cy="122"
          rx="55"
          ry="43"
          fill="url(#teddyFace)"
        />

        {/* Eyes */}
        {blinking ? (
          <>
            <path
              d="M82 106 Q92 113 102 106"
              stroke="#39271F"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M138 106 Q148 113 158 106"
              stroke="#39271F"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </>
        ) : surprised ? (
          <>
            <circle cx="92" cy="104" r="9" fill="#30221D" />
            <circle cx="148" cy="104" r="9" fill="#30221D" />
            <circle cx="94" cy="101" r="3" fill="white" />
            <circle cx="150" cy="101" r="3" fill="white" />
          </>
        ) : (
          <>
            <motion.circle
              cx="92"
              cy="105"
              r="7"
              fill="#30221D"
              animate={
                happy
                  ? {
                      scaleY: [1, 0.2, 1],
                    }
                  : undefined
              }
              transition={
                happy
                  ? {
                      duration: 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : undefined
              }
            />
            <motion.circle
              cx="148"
              cy="105"
              r="7"
              fill="#30221D"
              animate={
                happy
                  ? {
                      scaleY: [1, 0.2, 1],
                    }
                  : undefined
              }
              transition={
                happy
                  ? {
                      duration: 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : undefined
              }
            />

            <circle
              cx="94"
              cy="102"
              r="2.5"
              fill="white"
            />
            <circle
              cx="150"
              cy="102"
              r="2.5"
              fill="white"
            />
          </>
        )}

        {/* Blush */}
        <ellipse
          cx="78"
          cy="130"
          rx="13"
          ry="7"
          fill="#E99A9A"
          opacity={happy || love ? 0.42 : 0.2}
        />
        <ellipse
          cx="162"
          cy="130"
          rx="13"
          ry="7"
          fill="#E99A9A"
          opacity={happy || love ? 0.42 : 0.2}
        />

        {/* Nose */}
        <ellipse
          cx="120"
          cy="125"
          rx={surprised ? 13 : 12}
          ry={surprised ? 10 : 9}
          fill="#654033"
        />

        {/* Mouth */}
        {surprised ? (
          <ellipse
            cx="120"
            cy="143"
            rx="9"
            ry="12"
            fill="#654033"
          />
        ) : (
          <>
            <path
              d="M120 134 C112 142 105 139 102 135"
              stroke="#654033"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M120 134 C128 142 135 139 138 135"
              stroke="#654033"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Body */}
        <ellipse
          cx="120"
          cy="215"
          rx="65"
          ry="72"
          fill="url(#teddyBody)"
        />

        {/* Belly */}
        <ellipse
          cx="120"
          cy="220"
          rx="40"
          ry="45"
          fill="url(#teddyBelly)"
        />

        {/* Belly highlight */}
        <ellipse
          cx="108"
          cy="199"
          rx="17"
          ry="22"
          fill="#FFF0DF"
          opacity="0.18"
        />

        {/* Left arm */}
        <motion.g
          animate={state === "wave" ? armWave : undefined}
          style={{
            transformOrigin: "55px 195px",
          }}
        >
          <ellipse
            cx="53"
            cy="202"
            rx="20"
            ry="50"
            transform="rotate(22 53 202)"
            fill="url(#teddyBody)"
          />
        </motion.g>

        {/* Right arm */}
        <ellipse
          cx="187"
          cy="202"
          rx="20"
          ry="50"
          transform="rotate(-22 187 202)"
          fill="url(#teddyBody)"
        />

        {/* Feet */}
        <ellipse
          cx="82"
          cy="272"
          rx="30"
          ry="18"
          fill="#C58B61"
        />
        <ellipse
          cx="158"
          cy="272"
          rx="30"
          ry="18"
          fill="#C58B61"
        />

        {/* Foot highlights */}
        <ellipse
          cx="75"
          cy="268"
          rx="13"
          ry="7"
          fill="#E9B98E"
          opacity="0.5"
        />
        <ellipse
          cx="151"
          cy="268"
          rx="13"
          ry="7"
          fill="#E9B98E"
          opacity="0.5"
        />

        {/* Love heart */}
        {love && (
          <>
            <motion.path
              d="M120 183
                 C108 166 78 175 78 198
                 C78 220 120 239 120 239
                 C120 239 162 220 162 198
                 C162 175 132 166 120 183Z"
              fill="#F09AAF"
              initial={{
                opacity: 0,
                scale: 0.45,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.45, 1, 1.08, 0.82],
                y: [12, -6, -18, -36],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
              style={{
                transformOrigin: "120px 205px",
              }}
            />

            <motion.circle
              cx="120"
              cy="190"
              r="22"
              fill="#F09AAF"
              opacity="0.12"
              filter="url(#softGlow)"
              animate={{
                scale: [0.8, 1.3, 0.8],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}

        {/* Tiny sparkle */}
        {(happy || love) && (
          <>
            <motion.path
              d="M43 123 L46 130 L53 133 L46 136 L43 143 L40 136 L33 133 L40 130 Z"
              fill="#F4B7C5"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.7, 1, 0.7],
                rotate: [0, 15, 30],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformOrigin: "43px 133px",
              }}
            />

            <motion.path
              d="M197 117 L200 124 L207 127 L200 130 L197 137 L194 130 L187 127 L194 124 Z"
              fill="#F4B7C5"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.7, 1, 0.7],
                rotate: [30, 15, 0],
              }}
              transition={{
                duration: 1.4,
                delay: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformOrigin: "197px 127px",
              }}
            />
          </>
        )}
      </svg>
    </motion.div>
  );
}