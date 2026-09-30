import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/shorten", label: "Shorten" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
  ];
  return (
    <footer className="border-t border-violet-800/60 mt-10 px-6 py-8 text-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} SnipLink</p>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}