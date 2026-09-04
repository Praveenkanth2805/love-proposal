"use client";

import { motion } from "framer-motion";
import Teddy from "../characters/Teddy";
import Cat from "../characters/Cat";
import SurpriseButton from "../ui/SurpriseButton";
import Sparkles from "../effects/Sparkles";

interface CatSceneProps {
  onNext: () => void;
}

export default function CatScene({ onNext }: CatSceneProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#f6fbff] px-5 py-8 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(196,226,255,0.55),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_center_bottom,rgba(178,213,239,0.22),transparent_68%)]" />

      <Sparkles count={12} />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7194ae]"
        >
          One more surprise
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.18,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-3 text-[clamp(1.8rem,9vw,2.4rem)] font-semibold tracking-[-0.045em] text-[#29445a]"
        >
          Wait...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.42,
            duration: 0.7,
          }}
          className="mt-2 max-w-[290px] text-sm leading-6 text-[#6e879b]"
        >
          There&apos;s one more little friend waiting for you.
        </motion.p>

        <div className="relative mt-6 h-[285px] w-full">
          <motion.div
            initial={{ opacity: 0, x: -35, scale: 0.9 }}
            animate={{ opacity: 0.5, x: -62, scale: 0.96 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-1 left-1/2 -translate-x-[82%]"
            aria-hidden="true"
          >
            <Teddy
              size={118}
              state="idle"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 170,
              y: 12,
              scale: 0.78,
            }}
            animate={{
              opacity: 1,
              x: 10,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.55,
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-0 left-1/2 -translate-x-[12%]"
          >
            <Cat
              size={160}
              state="happy"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.7],
              y: [4, -5, 0],
            }}
            transition={{
              delay: 1.45,
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[15%] top-[23%] text-lg text-[#df9aae]"
            aria-hidden="true"
          >
            ✦
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.5, 1, 0.7],
              y: [3, -4, 0],
            }}
            transition={{
              delay: 1.8,
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[14%] top-[34%] text-sm text-[#df9aae]"
            aria-hidden="true"
          >
            ✦
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.65,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[clamp(1.65rem,8vw,2.15rem)] font-semibold tracking-[-0.04em] text-[#29445a]"
        >
          Your little cat
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.9,
            duration: 0.7,
          }}
          className="mt-2 max-w-[285px] text-sm leading-6 text-[#71899b]"
        >
          Now there are two little friends waiting for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 2.15,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mt-7"
        >
          <SurpriseButton
            onClick={onNext}
            ariaLabel="Continue to the next part of the surprise"
          >
            Next →
          </SurpriseButton>
        </motion.div>
      </div>
    </section>
  );
}