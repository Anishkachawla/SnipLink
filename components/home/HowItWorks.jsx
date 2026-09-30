"use client";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { t: "Paste your long link", d: "Add any web address you want to share." },
  { t: "Choose a short name", d: "Type the ending you want, like launch-day." },
  { t: "Copy and share", d: "Hit Generate, copy the new link, and send it anywhere." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16 max-w-2xl mx-auto text-white">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Three steps, no account</h2>
      </Reveal>
      <div className="relative">
        <motion.div
          aria-hidden
          className="absolute left-5 top-0 bottom-0 w-px bg-violet-700 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {steps.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.15} className="relative pl-16 pb-10 last:pb-0">
            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-violet-800 border border-violet-600 font-bold">
              {i + 1}
            </span>
            <h3 className="text-xl font-bold">{s.t}</h3>
            <p className="mt-1 text-gray-300">{s.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}