"use client";

import { motion } from "framer-motion";
import SurpriseButton from "../ui/SurpriseButton";

interface SuspenseSceneProps {
  onNext: () => void;
}

export default function SuspenseScene({ onNext }: SuspenseSceneProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#171116] px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.14),transparent_50%)]" />

      <div className="relative z-10 flex max-w-md flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: 1,
            scale: [1, 1.1, 1],
          }}
          transition={{
            opacity: {
              duration: 1,
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="text-6xl text-[#f3a7bd]"
          aria-hidden="true"
        >
          ♥
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 text-2xl font-semibold text-white"
        >
          I haven&apos;t told you everything...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-8"
        >
          <SurpriseButton
            onClick={onNext}
            variant="secondary"
            ariaLabel="Continue to the next part of the surprise"
          >
            Continue
          </SurpriseButton>
        </motion.div>
      </div>
    </section>
  );
}