"use client";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ShimmerButton } from "@/components/motion/ShimmerButton";

export default function Cta() {
  return (
    <section className="px-6 py-16">
      <Reveal className="max-w-4xl mx-auto text-center text-white rounded-3xl border border-violet-700 bg-gradient-to-b from-violet-700/30 to-gray-900/50 backdrop-blur-md px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold">Shorten your first link now</h2>
        <p className="mt-3 text-lg text-gray-200">Paste it, name it, share it.</p>
        <Link href="/shorten" className="inline-block mt-8">
          <ShimmerButton className="rounded-full px-10 py-3 bg-violet-800">Try SnipLink Now</ShimmerButton>
        </Link>
      </Reveal>
    </section>
  );
}