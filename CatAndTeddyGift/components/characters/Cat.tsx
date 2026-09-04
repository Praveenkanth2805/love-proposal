"use client";

import { motion, type Variants } from "framer-motion";

type CatState =
  | "walk"
  | "appear"
  | "idle"
  | "blink"
  | "tail-wag"
  | "sit"
  | "happy"
  | "love";

interface CatProps {
  state?: CatState;
  size?: number;
  className?: string;
}

const variants: Variants = {
  appear: {
    opacity: [0, 1],
    x: [80, -6, 0],
    scale: [0.78, 1.05, 1],
    y: [12, -3, 0],
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
  walk: {
    x: [100, 24, 0],
    y: [0, -3, 0],
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
  },
  idle: {
    y: [0, -3, 0],
    transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
  },
  sit: {
    y: [0, 3, 0],
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  happy: {
    y: [0, -8, 0],
    rotate: [0, -2, 2, 0],
    transition: { duration: 1.25, repeat: Infinity, ease: "easeInOut" },
  },
  blink: { scale: 1 },
  "tail-wag": {
    y: [0, -3, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
  love: {
    y: [0, -6, 0],
    scale: [1, 1.025, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

const tailVariants: Variants = {
  idle: {
    rotate: [-4, 5, -4],
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  },
  "tail-wag": {
    rotate: [-12, 16, -12],
    transition: { duration: 0.7, repeat: Infinity, ease: "easeInOut" },
  },
  happy: {
    rotate: [-10, 14, -10],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  },
  love: {
    rotate: [-8, 12, -8],
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Cat({
  state = "idle",
  size = 170,
  className = "",
}: CatProps) {
  const blinking = state === "blink";
  const happy = state === "happy";
  const love = state === "love";
  const sitting = state === "sit";

  const tailAnimation =
    state === "tail-wag" ||
    state === "idle" ||
    state === "happy" ||
    state === "love"
      ? state
      : undefined;

  return (
    <motion.div
  className={`relative select-none ${className}`}
  style={{ width: size, height: size * 1.22 }}
  initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
  animate={variants[state]}
  role="img"
  aria-label="Cute cat character"
>
      <svg
        viewBox="0 0 220 270"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="catBody" x1="58" y1="35" x2="170" y2="250">
            <stop offset="0" stopColor="#E6B38D" />
            <stop offset="0.55" stopColor="#D8A37D" />
            <stop offset="1" stopColor="#C58D69" />
          </linearGradient>

          <linearGradient id="catFace" x1="78" y1="48" x2="142" y2="145">
            <stop offset="0" stopColor="#F0C7A7" />
            <stop offset="1" stopColor="#E5B691" />
          </linearGradient>

          <linearGradient id="catBelly" x1="88" y1="160" x2="130" y2="245">
            <stop offset="0" stopColor="#F2CFB4" />
            <stop offset="1" stopColor="#E5B998" />
          </linearGradient>

          <radialGradient id="catEar">
            <stop offset="0" stopColor="#F4B4C0" />
            <stop offset="1" stopColor="#E89EAB" />
          </radialGradient>

          <filter id="catShadow" x="-40%" y="-50%" width="180%" height="200%">
            <feGaussianBlur stdDeviation="5" />
          </filter>

          <filter id="catGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <motion.ellipse
          cx="110"
          cy="254"
          animate={{
            rx: sitting ? 67 : 60,
            ry: sitting ? 11 : 10,
            opacity: sitting ? 0.17 : 0.14,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          fill="#684638"
          filter="url(#catShadow)"
        />

        {/* Tail */}
        <motion.g
          variants={tailVariants}
          animate={tailAnimation}
          style={{ transformOrigin: "166px 181px" }}
        >
          <motion.path
            d={
              sitting
                ? "M155 208 C197 204 205 165 185 146 C173 135 164 144 174 153 C190 167 181 190 155 190"
                : "M166 202 C205 190 205 145 181 130 C168 122 160 134 171 143 C190 159 182 180 157 181"
            }
            fill="none"
            stroke="url(#catBody)"
            strokeWidth="18"
            strokeLinecap="round"
            animate={{
              d: sitting
                ? "M155 208 C197 204 205 165 185 146 C173 135 164 144 174 153 C190 167 181 190 155 190"
                : "M166 202 C205 190 205 145 181 130 C168 122 160 134 171 143 C190 159 182 180 157 181",
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <path
            d="M181 132 C173 128 167 133 171 139"
            fill="none"
            stroke="#F0C5A4"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.45"
          />
        </motion.g>

        {/* Body */}
        <motion.ellipse
          cx="110"
          animate={{
            cy: sitting ? 202 : 190,
            rx: sitting ? 63 : 58,
            ry: sitting ? 56 : 65,
          }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          fill="url(#catBody)"
        />

        {/* Body highlight */}
        <motion.ellipse
          cx="88"
          animate={{
            cy: sitting ? 178 : 164,
            rx: sitting ? 23 : 22,
            ry: sitting ? 27 : 31,
          }}
          transition={{ duration: 0.75 }}
          fill="#F8DCC5"
          opacity="0.16"
        />

        {/* Belly */}
        <motion.ellipse
          cx="110"
          animate={{
            cy: sitting ? 207 : 198,
            rx: sitting ? 39 : 34,
            ry: sitting ? 39 : 45,
          }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          fill="url(#catBelly)"
        />

        {/* Belly highlight */}
        <motion.ellipse
          cx="101"
          animate={{ cy: sitting ? 192 : 181 }}
          transition={{ duration: 0.75 }}
          rx="13"
          ry="20"
          fill="#FFF1E5"
          opacity="0.18"
        />

        {/* Head */}
        <motion.g
          animate={{
            y: sitting ? 7 : 0,
            scale: sitting ? 0.99 : 1,
          }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          <ellipse
            cx="110"
            cy="92"
            rx="68"
            ry="60"
            fill="url(#catBody)"
          />

          <ellipse
            cx="86"
            cy="62"
            rx="27"
            ry="17"
            fill="#F8DCC5"
            opacity="0.18"
          />

          {/* Ears */}
          <path d="M58 60 L53 10 L91 42Z" fill="url(#catBody)" />
          <path d="M162 60 L167 10 L129 42Z" fill="url(#catBody)" />

          <path d="M64 49 L62 25 L82 44Z" fill="url(#catEar)" />
          <path d="M156 49 L158 25 L138 44Z" fill="url(#catEar)" />

          <path
            d="M63 38 L62 27 L71 39"
            stroke="#F8D6D8"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path
            d="M157 38 L158 27 L149 39"
            stroke="#F8D6D8"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* Face */}
          <ellipse
            cx="110"
            cy="102"
            rx="48"
            ry="39"
            fill="url(#catFace)"
          />

          {/* Eyes */}
          {blinking ? (
            <>
              <path
                d="M78 92 Q88 99 98 92"
                stroke="#33251F"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M122 92 Q132 99 142 92"
                stroke="#33251F"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              <motion.ellipse
                cx="88"
                cy="92"
                rx="8"
                ry="11"
                fill="#33251F"
                animate={
                  happy
                    ? { scaleY: [1, 0.2, 1] }
                    : { scaleY: 1 }
                }
                transition={
                  happy
                    ? {
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : undefined
                }
              />

              <motion.ellipse
                cx="132"
                cy="92"
                rx="8"
                ry="11"
                fill="#33251F"
                animate={
                  happy
                    ? { scaleY: [1, 0.2, 1] }
                    : { scaleY: 1 }
                }
                transition={
                  happy
                    ? {
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : undefined
                }
              />

              <circle cx="90" cy="89" r="3" fill="white" />
              <circle cx="134" cy="89" r="3" fill="white" />
            </>
          )}

          {/* Blush */}
          <ellipse
            cx="72"
            cy="119"
            rx="13"
            ry="7"
            fill="#E9909F"
            opacity={happy || love ? 0.42 : 0.2}
          />
          <ellipse
            cx="148"
            cy="119"
            rx="13"
            ry="7"
            fill="#E9909F"
            opacity={happy || love ? 0.42 : 0.2}
          />

          {/* Nose */}
          <path
            d="M110 112 L101 106 Q110 101 119 106Z"
            fill="#8A5360"
          />

          {/* Mouth */}
          <path
            d="M110 112 Q102 121 96 117"
            stroke="#573B36"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M110 112 Q118 121 124 117"
            stroke="#573B36"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Whiskers */}
          <path
            d="M68 111 L34 105"
            stroke="#8C6657"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M68 119 L31 121"
            stroke="#8C6657"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M152 111 L186 105"
            stroke="#8C6657"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M152 119 L189 121"
            stroke="#8C6657"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
        </motion.g>

        {/* Sitting hind legs */}
        <motion.g
          animate={{
            y: sitting ? 8 : 0,
            scale: sitting ? 1 : 0.7,
            opacity: sitting ? 1 : 0,
          }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <ellipse
            cx="75"
            cy="235"
            rx="30"
            ry="22"
            fill="url(#catBody)"
          />
          <ellipse
            cx="145"
            cy="235"
            rx="30"
            ry="22"
            fill="url(#catBody)"
          />

          <ellipse
            cx="68"
            cy="235"
            rx="13"
            ry="8"
            fill="#E8B994"
            opacity="0.5"
          />
          <ellipse
            cx="138"
            cy="235"
            rx="13"
            ry="8"
            fill="#E8B994"
            opacity="0.5"
          />
        </motion.g>

        {/* Front paws */}
        <motion.g
          animate={{
            y: sitting ? 8 : 0,
            scaleY: sitting ? 0.9 : 1,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <ellipse
            cx="82"
            cy={sitting ? 225 : 238}
            rx="18"
            ry={sitting ? 25 : 28}
            fill="url(#catBody)"
          />
          <ellipse
            cx="138"
            cy={sitting ? 225 : 238}
            rx="18"
            ry={sitting ? 25 : 28}
            fill="url(#catBody)"
          />

          <ellipse
            cx="77"
            cy={sitting ? 221 : 232}
            rx="8"
            ry="12"
            fill="#F1C3A2"
            opacity="0.42"
          />
          <ellipse
            cx="133"
            cy={sitting ? 221 : 232}
            rx="8"
            ry="12"
            fill="#F1C3A2"
            opacity="0.42"
          />
        </motion.g>

        {/* Love heart */}
        {love && (
          <>
            <motion.path
              d="M110 160 C100 146 76 153 76 170 C76 187 110 204 110 204 C110 204 144 187 144 170 C144 153 120 146 110 160Z"
              fill="#F09AAF"
              initial={{ opacity: 0, scale: 0.45 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.45, 1, 1.08, 0.8],
                y: [10, -8, -20, -38],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "110px 175px" }}
            />

            <motion.circle
              cx="110"
              cy="171"
              r="22"
              fill="#F09AAF"
              opacity="0.12"
              filter="url(#catGlow)"
              animate={{
                scale: [0.8, 1.3, 0.8],
                opacity: [0.04, 0.18, 0.04],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}

        {/* Happy sparkles */}
        {(happy || love) && (
          <>
            <motion.path
              d="M38 137 L41 144 L48 147 L41 150 L38 157 L35 150 L28 147 L35 144 Z"
              fill="#F4B7C5"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.7, 1, 0.7],
                rotate: [0, 18, 35],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "38px 147px" }}
            />

            <motion.path
              d="M182 133 L185 140 L192 143 L185 146 L182 153 L179 146 L172 143 L179 140 Z"
              fill="#F4B7C5"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.7, 1, 0.7],
                rotate: [35, 18, 0],
              }}
              transition={{
                duration: 1.4,
                delay: 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "182px 143px" }}
            />
          </>
        )}
      </svg>
    </motion.div>
  );
}