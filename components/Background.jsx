"use client";
import { MotionConfig, motion } from "motion/react";

// Same radial gradient as before, now shared once in the layout + two slow drifting glows.
// MotionConfig also makes every animation respect the OS "reduce motion" setting.
export default function Background({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="fixed inset-0 -z-10 overflow-hidden [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-700/30 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {children}
    </MotionConfig>
  );
}