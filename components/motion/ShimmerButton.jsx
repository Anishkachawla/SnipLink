"use client";
import { motion } from "motion/react";

// KokonutUI-inspired shimmer sweep on the primary CTA
export function ShimmerButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      {...props}
      className={`relative overflow-hidden bg-violet-700 hover:bg-violet-600 text-white font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${className}`}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        animate={{ x: ["0%", "500%"] }}
        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      />
      <span className="relative inline-flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
}

export function Spinner() {
  return <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />;
}