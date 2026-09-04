"use client";

import { motion } from "framer-motion";
import TeddyCatScene from "../characters/TeddyCatScene";
import SurpriseButton from "../ui/SurpriseButton";

interface TogetherSceneProps {
  onNext: () => void;
}

export default function TogetherScene({ onNext }: TogetherSceneProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-rose-50 px-6 text-center">
      <div className="relative z-10 flex w-full max-w-lg flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <TeddyCatScene mode="together" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div
            className="my-4 text-3xl animate-heart-pulse"
            aria-hidden="true"
          >
            ♡
          </div>

          <h2 className="text-2xl font-bold text-rose-900">
            Okay... you got both.
          </h2>

          <p className="mt-3 text-rose-700">
            But wait...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-8"
        >
          <SurpriseButton
            onClick={onNext}
            ariaLabel="Continue to the next part of the surprise"
          >
            There&apos;s more
          </SurpriseButton>
        </motion.div>
      </div>
    </section>
  );
}