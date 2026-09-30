import Image from "next/image";
import Link from "next/link";
import vectorimg from "../assets/vector.png";
import { TextEffect } from "@/components/motion/TextEffect";
import { FadeIn, Float } from "@/components/motion/FadeIn";
import { ShimmerButton } from "@/components/motion/ShimmerButton";
import LinkDemo from "@/components/home/LinkDemo";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import UseCases from "@/components/home/UseCases";
import Faq from "@/components/home/Faq";
import Cta from "@/components/home/Cta";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 md:px-24 py-10 max-w-7xl mx-auto min-h-[70vh]">
        <Float className="w-full md:w-1/2">
          <Image src={vectorimg} alt="SnipLink illustration" className="rounded-3xl bg-transparent w-full h-auto" priority />
        </Float>
        <div className="text-white md:w-1/2 flex flex-col gap-4">
          <TextEffect as="h1" className="text-3xl md:text-5xl font-bold">
            Instantly Shorten and Share Your Links!
          </TextEffect>
          <TextEffect as="p" delay={0.5} className="text-lg text-gray-200">
            Make your long URLs short and sweet. Our free URL shortener helps you create concise links for easy sharing.
          </TextEffect>
          <FadeIn delay={1} className="flex flex-wrap items-center gap-3">
            <Link href="/shorten">
              <ShimmerButton className="rounded-full px-10 py-3 bg-violet-800">Try Now</ShimmerButton>
            </Link>
            <a href="#how-it-works" className="rounded-full border border-violet-700 px-8 py-3 font-bold hover:bg-violet-800/30 transition-colors">
              See how it works
            </a>
          </FadeIn>
        </div>
      </section>

      <LinkDemo />
      <Features />
      <HowItWorks />
      <UseCases />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}