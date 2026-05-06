"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Github } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <div className="flex gap-4 items-center mt-6">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors shadow-sm"
            aria-label={social.label}
          >
            <Icon size={24} />
          </motion.a>
        );
      })}
    </div>
  );
}