"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface SurpriseButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  ariaLabel?: string;
}

export default function SurpriseButton({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  ariaLabel,
}: SurpriseButtonProps) {
  const styles = {
    primary:
      "bg-white text-rose-700 shadow-lg shadow-rose-300/30 border border-white/70",
    secondary:
      "bg-white/70 text-rose-800 border border-rose-200 shadow-md",
    ghost:
      "bg-transparent text-rose-800 border border-rose-300/60",
  };

  return (
    <motion.button
      type="button"
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={disabled ? undefined : { scale: 1.05 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      className={`
        inline-flex
        min-h-12
        items-center
        justify-center
        rounded-full
        px-7
        py-3
        text-sm
        font-semibold
        tracking-wide
        backdrop-blur-sm
        transition
        focus:outline-none
        focus:ring-4
        focus:ring-rose-300/50
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${styles[variant]}
      `}
    >
      {children}
    </motion.button>
  );
}