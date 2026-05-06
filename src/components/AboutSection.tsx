"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-500">
          About Me
        </h2>
        <div className="bg-green-500/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,255,65,0.1)] hover:shadow-[0_8px_30px_rgba(0,255,65,0.2)] transition-shadow duration-300">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hello! I am a passionate developer and designer with a deep focus on
            creating interactive and beautiful user experiences. I love working
            with modern web technologies like React, Next.js, and Tailwind CSS
            to bring ideas to life.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I&apos;m not coding, you can find me exploring new design
            trends, experimenting with animations in Framer Motion, or sharing
            my knowledge with the developer community. My goal is to build
            digital products that not only work flawlessly but also feel magical
            to use.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
