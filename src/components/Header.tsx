"use client";

import { motion } from "framer-motion";

export default function Header() {
  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Introduction", href: "#introduction" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent py-5">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <nav className="flex gap-2 sm:gap-4 bg-black/40 border border-green-500/30 p-1.5 rounded-full backdrop-blur-md shadow-sm shadow-green-500/20">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(0, 255, 65, 0.1)",
                boxShadow: "0 4px 12px rgba(0, 255, 65, 0.2)",
                color: "#00FF41",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors cursor-pointer text-white hover:text-green-500"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  );
}
