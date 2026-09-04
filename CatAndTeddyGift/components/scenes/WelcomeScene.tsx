"use client";

import { motion } from "framer-motion";
import SurpriseButton from "../ui/SurpriseButton";
import Sparkles from "../effects/Sparkles";
import { giftConfig } from "@/lib/config";

interface WelcomeSceneProps {
  onStart: () => void;
}

export default function WelcomeScene({ onStart }: WelcomeSceneProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#fff9fc] px-5 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(248,206,220,0.5),transparent_42%)]" />
      <Sparkles count={14} />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a87587]"
        >
          A little something
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-[clamp(2.2rem,11vw,4rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#432936]"
        >
          For {giftConfig.lovedOneName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="mt-5 max-w-[300px] text-[15px] leading-7 text-[#765965]"
        >
          I made something special for you...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.65,
            duration: 0.7,
          }}
          className="mt-8"
        >
          <SurpriseButton
            onClick={onStart}
            ariaLabel="Open your surprise"
          >
            Open Surprise
          </SurpriseButton>
        </motion.div>
      </div>
    </section>
  );
}