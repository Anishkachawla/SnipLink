"use client";
import React from "react";
import Link from "next/link";
import { TextEffect } from "@/components/motion/TextEffect";
import { FadeIn } from "@/components/motion/FadeIn";
import { ShimmerButton } from "@/components/motion/ShimmerButton";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <FadeIn className="w-full max-w-lg">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 w-full flex flex-col gap-6 border border-violet-700 text-white">
          <TextEffect as="h1" className="text-3xl md:text-4xl font-extrabold text-center tracking-wide">
            About SnipLink
          </TextEffect>
          <p className="text-lg leading-relaxed text-center text-gray-200">
            Welcome to SnipLink, your ultimate solution for simplifying long and cumbersome URLs. We believe that sharing links should be effortless and elegant.
          </p>
          <p className="text-lg leading-relaxed text-center text-gray-200">
            Our mission is to provide a fast, reliable, and user-friendly service that transforms your lengthy web addresses into short, memorable, and shareable links. Whether it&apos;s for social media, email, or simply for better readability, SnipLink makes your links cleaner and more professional.
          </p>
          <p className="text-lg leading-relaxed text-center text-gray-200">
            With SnipLink, you get more than just a short URL; you get a tool designed to make your online presence smoother and more efficient. Try it out and experience the power of brevity!
          </p>
          <Link href="/shorten">
            <ShimmerButton className="py-4 rounded-lg w-full">Try SnipLink Now</ShimmerButton>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;