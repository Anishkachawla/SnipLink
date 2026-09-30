"use client";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";

const host = (process.env.NEXT_PUBLIC_HOST || "sniplink-alpha.vercel.app").replace(/^https?:\/\//, "");
const inView = { once: true, margin: "-100px" };

export default function LinkDemo() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <Reveal>
        <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-8">
          Same destination, a fraction of the length
        </h2>
      </Reveal>
      <div className="bg-gray-900/50 backdrop-blur-md border border-violet-700 rounded-2xl p-6 md:p-10 flex flex-col items-center gap-5 text-white">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inView}
          className="w-full text-center text-gray-400 text-sm md:text-base break-all bg-gray-800 rounded-lg px-4 py-3 line-clamp-2"
        >
          https://www.example.com/products/spring-collection/category/shoes?utm_source=newsletter&utm_medium=email&utm_campaign=april-launch&ref=homepage-banner
        </motion.p>
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={inView}
          transition={{ delay: 0.5 }}
          className="text-violet-400 text-2xl"
        >
          ↓
        </motion.span>
        <motion.p
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={inView}
          transition={{ type: "spring", delay: 0.9, stiffness: 220, damping: 16 }}
          className="text-violet-300 text-xl md:text-2xl font-semibold bg-violet-700/20 border border-violet-600 rounded-full px-6 py-3 break-all text-center"
        >
          {host}/spring-shoes
        </motion.p>
      </div>
    </section>
  );
}