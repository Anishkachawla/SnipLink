"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { TextEffect } from "@/components/motion/TextEffect";
import { FadeIn } from "@/components/motion/FadeIn";
import { ShimmerButton, Spinner } from "@/components/motion/ShimmerButton";

const inputCls =
  "bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 w-full transition duration-300 ease-in-out";
const labelCls = "block text-gray-300 text-sm font-bold mb-2";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error or server unavailable. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <FadeIn className="w-full max-w-lg">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 w-full flex flex-col gap-4 border border-violet-700 text-white">
          <TextEffect as="h1" className="text-3xl md:text-4xl font-extrabold text-center tracking-wide">
            Contact Us
          </TextEffect>
          <p className="text-lg leading-relaxed text-center text-gray-200">
            Have questions, feedback, or suggestions? We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className={labelCls}>Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputCls} placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className={labelCls}>Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputCls} placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className={labelCls}>Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className={`${inputCls} resize-y`} placeholder="Your Message" />
            </div>
            <ShimmerButton type="submit" disabled={isSubmitting} className="py-4 rounded-lg">
              {isSubmitting ? (
                <>
                  <Spinner /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </ShimmerButton>
          </form>
        </div>
      </FadeIn>
    </div>
  );
};

export default Contact;