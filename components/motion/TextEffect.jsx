"use client";
import { motion } from "motion/react";

// motion-primitives style text-effect: per-word blur-in
export function TextEffect({ children, as = "p", className = "", delay = 0 }) {
  const Tag = motion[as];
  const words = String(children).split(" ");
  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, filter: "blur(8px)", y: 8 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.4 } },
          }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}