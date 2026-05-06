"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Introduction", href: "#introduction" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-md bg-white/80 dark:bg-purple-950/80 border-b border-purple-100 dark:border-purple-900/50 py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-center">
        <nav className="flex gap-2 sm:gap-4 bg-white/50 dark:bg-purple-900/30 p-1.5 rounded-full backdrop-blur-md border border-purple-100 dark:border-purple-800/50 shadow-sm">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(168, 85, 247, 0.15)",
                boxShadow: "0 4px 12px rgba(168, 85, 247, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm md:text-base font-semibold  dark: rounded-full transition-colors cursor-pointer"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  );
}
