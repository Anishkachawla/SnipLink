"use client";
import { Reveal } from "@/components/motion/Reveal";

const host = (process.env.NEXT_PUBLIC_HOST || "sniplink-alpha.vercel.app").replace(/^https?:\/\//, "");

const items = [
  { title: "Choose your own short name", text: "Pick something people can remember and type, like /my-portfolio, instead of a random string.", wide: true },
  { title: "No signup", text: "Paste, name, generate. You don't need an account." },
  { title: "Copy in one click", text: "Your new link is ready to copy the moment it's created." },
  { title: "Straight to the destination", text: "Anyone who opens your short link lands on the original page right away." },
  { title: "Free to use", text: "SnipLink is a free URL shortener." },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-16 max-w-5xl mx-auto">
      <Reveal>
        <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-10">
          Everything you need to share a link
        </h2>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08} className={it.wide ? "md:col-span-2" : ""}>
            <div className="h-full bg-gray-900/50 backdrop-blur-md border border-violet-800 hover:border-violet-500 transition-colors duration-300 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-gray-300">{it.text}</p>
              {it.wide && (
                <div className="mt-5 flex items-center rounded-lg bg-gray-800 px-4 py-3 text-sm md:text-base overflow-hidden">
                  <span className="text-gray-500 truncate">{host}/</span>
                  <span className="text-violet-300">my-portfolio</span>
                  <span className="ml-0.5 h-5 w-px bg-violet-400 animate-pulse" />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}