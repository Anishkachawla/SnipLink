"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  { q: "Is SnipLink free?", a: "Yes. SnipLink is a free URL shortener." },
  { q: "Do I need an account?", a: "No. Paste your link, choose a short name, and generate." },
  { q: "What if the short name I want is taken?", a: "You'll see an error message after you hit Generate. Pick a different name and try again." },
  { q: "What should I paste in the URL field?", a: "A full web address starting with https://, so your short link opens the right page." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="px-6 py-16 max-w-2xl mx-auto text-white">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Questions, answered</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="divide-y divide-violet-900/70 border border-violet-700 rounded-2xl bg-gray-900/50 backdrop-blur-md">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold cursor-pointer"
              >
                {f.q}
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-violet-400 text-2xl leading-none">+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-300">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}