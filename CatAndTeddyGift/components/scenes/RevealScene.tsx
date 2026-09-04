"use client";

import { motion } from "framer-motion";
import TeddyCatScene from "../characters/TeddyCatScene";
import Sparkles from "../effects/Sparkles";
import Confetti from "../effects/Confetti";
import SurpriseButton from "../ui/SurpriseButton";

interface RevealSceneProps {
  onNext: () => void;
}

export default function RevealScene({ onNext }: RevealSceneProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#f58bab_0%,#e96791_38%,#c94870_100%)] px-5 py-10 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.16),transparent_45%)]" />

      <Sparkles count={14} />
      <Confetti active count={50} />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.45,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: [0.45, 1.08, 1],
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-5"
        >
          <TeddyCatScene mode="reveal" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
          className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75"
        >
          The little secret
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
          className="mt-3 text-xl font-medium leading-relaxed text-white"
        >
          Okay... here&apos;s the truth.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            opacity: 1,
            scale: [0.4, 1.18, 1],
          }}
          transition={{
            delay: 1.25,
            duration: 0.75,
            ease: "easeOut",
          }}
          className="my-4 text-3xl text-white"
          aria-hidden="true"
        >
          ♥
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.55,
            duration: 0.7,
          }}
          className="max-w-[330px] text-xl font-semibold leading-relaxed text-white"
        >
          These aren&apos;t just things you asked for.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.7,
          }}
          className="mt-3 max-w-[330px] text-xl font-semibold leading-relaxed text-white"
        >
          I&apos;m actually going to get them for you.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
            scale: 0.88,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 2.45,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 rounded-3xl border border-white/25 bg-white/12 px-8 py-6 shadow-[0_20px_70px_rgba(91,22,49,0.2)] backdrop-blur-md"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Something special
          </div>

          <div className="mt-2 text-2xl font-black tracking-[0.12em] text-white">
            THE REAL GIFT
          </div>

          <div className="mt-1 text-sm font-semibold tracking-[0.28em] text-white/90">
            IS COMING
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.15,
            duration: 0.7,
          }}
          className="mt-8"
        >
          <SurpriseButton
            onClick={onNext}
            variant="secondary"
            ariaLabel="Continue to the final message"
          >
            One last thing ❤️
          </SurpriseButton>
        </motion.div>
      </div>
    </section>
  );
}