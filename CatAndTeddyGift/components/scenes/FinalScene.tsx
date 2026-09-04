"use client";

import { motion } from "framer-motion";
import TeddyCatScene from "../characters/TeddyCatScene";
import Sparkles from "../effects/Sparkles";

interface FinalSceneProps {
  name: string;
  sender: string;
}

export default function FinalScene({
  name,
  sender,
}: FinalSceneProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#fff8fb] px-5 py-10 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(246,190,208,0.48),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_center_bottom,rgba(242,184,204,0.22),transparent_68%)]" />

      <Sparkles count={16} />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <TeddyCatScene mode="love" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.65,
            duration: 0.8,
          }}
          className="mt-3"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b27a8e]">
            Made just for you
          </p>

          <h1 className="mt-3 text-[clamp(2rem,10vw,2.8rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#4a2937]">
            For {name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="mt-7 space-y-5 text-[15px] leading-7 text-[#765967]"
        >
          <p>
            This little website
            <br />
            is only the beginning...
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 0.75],
              scale: [0.5, 1, 0.92],
            }}
            transition={{
              delay: 1.25,
              duration: 1,
            }}
            className="text-2xl text-[#e99ab0]"
            aria-hidden="true"
          >
            ♥
          </motion.div>

          <p className="font-medium text-[#542f3f]">
            The real teddy and cat
            <br />
            are waiting for you.
          </p>

          <p>
            So for now...
            <br />
            just keep this little surprise close.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.65,
            duration: 0.8,
          }}
          className="mt-8"
        >
          <p className="text-sm text-[#b2778d]">
            Until the real gift arrives...
          </p>

          <p className="mt-2 text-base font-semibold text-[#633548]">
            Keep smiling. ❤️
          </p>

          <div className="mx-auto mt-5 h-px w-12 bg-[#e7b4c4]" />

          <p className="mt-4 text-sm italic text-[#9a6378]">
            — {sender}
          </p>
        </motion.div>
      </div>
    </section>
  );
}