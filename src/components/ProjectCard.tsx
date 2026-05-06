"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="bg-white/40 dark:bg-purple-900/10 backdrop-blur-md border border-purple-200/50 dark:border-purple-700/30 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 flex flex-col h-full"
      >
        <div style={{ transform: "translateZ(30px)" }} className="flex-1">
          <h3 className="text-2xl font-bold mb-3  dark:">
            {project.title}
          </h3>
          <p className="font-unifraktur  dark: mb-6 leading-relaxed text-xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-purple-100/50 dark:bg-purple-800/30 border border-purple-200/50 dark:border-purple-700/50  dark: text-sm rounded-full font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div style={{ transform: "translateZ(20px)" }} className="flex gap-4 pt-4 border-t border-purple-200/50 dark:border-purple-800/30">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium  dark: hover: dark:hover: transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium  dark: hover: dark:hover: transition-colors"
            >
              <FaGithub size={16} />
              Source Code
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}