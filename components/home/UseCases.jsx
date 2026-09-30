"use client";
import { Reveal } from "@/components/motion/Reveal";

const cases = [
  { t: "Social media bios", d: "Keep the link on your profile short and clean." },
  { t: "Emails and messages", d: "No more addresses wrapping across three lines." },
  { t: "Slides and print", d: "Give people something they can actually type in." },
  { t: "Anywhere readability matters", d: "A short, named link looks more professional." },
];

export default function UseCases() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto text-white grid gap-10 md:grid-cols-2 items-center">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-extrabold">Made for links people actually share</h2>
        <p className="mt-4 text-lg text-gray-200">
          Whether it&apos;s a profile, an email, or a presentation, a short link is easier to read, remember, and trust.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="divide-y divide-violet-900/70 border-y border-violet-900/70">
          {cases.map((c) => (
            <li key={c.t} className="py-4">
              <h3 className="font-bold text-lg">{c.t}</h3>
              <p className="text-gray-300">{c.d}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}