"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoimg from "../assets/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-4 z-50 mx-4 md:mx-auto my-5 max-w-5xl border border-b-2 border-violet-800 bg-black/80 backdrop-blur-md text-white px-5 py-3 ${open ? "rounded-3xl" : "rounded-full"}`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src={logoimg} alt="logo" height={2} width={100} className="brightness-175" />
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <ul className="flex items-center gap-1 font-bold text-lg">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="relative block px-4 py-2 rounded-full">
                  {pathname === l.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-violet-800/40 border border-violet-700"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/shorten">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-violet-800 hover:bg-violet-700 font-bold px-5 py-2.5 cursor-pointer transition-colors"
            >
              Try Now
            </motion.button>
          </Link>
        </div>

        <button
          className="md:hidden text-2xl px-2 cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-1 pt-3 font-bold text-lg">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 rounded-xl ${pathname === l.href ? "bg-violet-800/40" : ""}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shorten" onClick={() => setOpen(false)} className="block text-center rounded-xl bg-violet-800 px-4 py-2">
                  Try Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;