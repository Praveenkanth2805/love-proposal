"use client";

import { motion } from "framer-motion";
import Teddy from "../characters/Teddy";
import SurpriseButton from "../ui/SurpriseButton";
import Sparkles from "../effects/Sparkles";

interface TeddySceneProps {
  onNext: () => void;
}

export default function TeddyScene({ onNext }: TeddySceneProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#fff9ef] px-5 py-8 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(250,220,174,0.55),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_center_bottom,rgba(229,184,116,0.18),transparent_68%)]" />

      <Sparkles count={12} />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b18752]"
        >
          First little surprise
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.15,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-3 text-[clamp(1.8rem,9vw,2.4rem)] font-semibold tracking-[-0.045em] text-[#513b25]"
        >
          This one is first...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="mt-2 max-w-[290px] text-sm leading-6 text-[#8a7256]"
        >
          Something soft, warm and waiting just for you.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.72,
            y: 24,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.95,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="my-6"
        >
          <Teddy
            size={185}
            state="wave"
          />
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.05,
            duration: 0.75,
          }}
          className="text-[clamp(1.6rem,8vw,2.15rem)] font-semibold tracking-[-0.04em] text-[#513b25]"
        >
          Your little teddy
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.3,
            duration: 0.7,
          }}
          className="mt-2 max-w-[280px] text-sm leading-6 text-[#8b745b]"
        >
          Yes... the first one you were waiting for.
        </motion.p>

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
            delay: 1.65,
            duration: 0.7,
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