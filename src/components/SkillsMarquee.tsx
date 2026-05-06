"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "UI/UX Design", "GraphQL", "PostgreSQL", "Git",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", // Duplicate for seamless looping
];

export default function SkillsMarquee() {
  return (
    <section className="py-12 border-y border-purple-100/50 dark:border-purple-800/30 bg-white/30 dark:bg-purple-950/20 backdrop-blur-sm overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap gap-12 px-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {skills.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="text-2xl md:text-4xl font-bold text-purple-900/10 dark:text-purple-100/10 tracking-widest uppercase hover:text-purple-600/50 dark:hover:text-purple-300/50 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
