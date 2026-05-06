"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Top Left Orb */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-green-500/15 blur-[120px] mix-blend-screen"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Right Orb */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-green-600/10 blur-[150px] mix-blend-screen"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Center Ambient Glow */}
      <motion.div
        className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-green-700/5 blur-[100px] mix-blend-screen"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
