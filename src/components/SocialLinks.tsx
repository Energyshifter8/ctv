"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
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
            className="p-3 bg-green-500/20 text-green-500 rounded-full hover:bg-green-500/30 transition-colors shadow-sm shadow-green-500/20"
            aria-label={social.label}
          >
            <Icon size={24} />
          </motion.a>
        );
      })}
    </div>
  );
}
