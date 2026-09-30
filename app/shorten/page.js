"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "motion/react";
import { TextEffect } from "@/components/motion/TextEffect";
import { FadeIn } from "@/components/motion/FadeIn";
import { ShimmerButton, Spinner } from "@/components/motion/ShimmerButton";

const inputCls =
  "w-full bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 transition duration-300 ease-in-out";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });
      const result = await res.json();
      if (result.success) {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      toast.success("URL copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy URL to clipboard.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-4 md:p-8 gap-4">
      <FadeIn className="w-full max-w-lg">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 w-full flex flex-col gap-6 border border-violet-700 hover:shadow-violet-700/20 transition-shadow duration-500">
          <TextEffect as="h1" className="text-white text-3xl md:text-4xl font-extrabold text-center tracking-wide">
            Generate your shortened URL
          </TextEffect>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Enter your URL" value={url} onChange={(e) => seturl(e.target.value)} className={inputCls} />
            <input
              type="text"
              placeholder="Enter your preferred short URL"
              value={shorturl}
              onChange={(e) => setshorturl(e.target.value)}
              className={inputCls}
            />
            <ShimmerButton onClick={generate} disabled={loading || !url || !shorturl} className="py-4 rounded-lg">
              {loading ? (
                <>
                  <Spinner /> Generating...
                </>
              ) : (
                "Generate"
              )}
            </ShimmerButton>
          </div>
        </div>
      </FadeIn>

      <AnimatePresence>
        {generated && (
          <motion.div
            key={generated}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="mt-4 p-4 w-full max-w-lg bg-gray-800 rounded-lg text-center text-white flex flex-col items-center gap-2 border border-violet-700/60"
          >
            <p className="text-gray-400 text-sm">Your new short URL:</p>
            <a
              href={generated}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 underline text-lg font-medium break-all"
            >
              {generated}
            </a>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={copyToClipboard}
              className="mt-2 bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-md transition-colors text-sm cursor-pointer min-w-28"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "done" : "copy"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="inline-block"
                >
                  {copied ? "Copied ✓" : "Copy URL"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shorten;