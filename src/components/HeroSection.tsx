"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section id="introduction" className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-purple-600 dark:text-purple-400 font-medium mb-4 tracking-wider uppercase text-sm"
        >
          Welcome to my portfolio
        </motion.h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-purple-950 dark:text-purple-50 leading-tight">
          Frontend Developer <br className="hidden md:block" /> & Designer
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-purple-800/80 dark:text-purple-200/80 max-w-2xl leading-relaxed mb-8"
        >
          I craft beautiful, modern web experiences using Next.js and Tailwind CSS with a deep passion for pure purple aesthetics. 
          Welcome to my digital playground where design meets clean code.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  );
}