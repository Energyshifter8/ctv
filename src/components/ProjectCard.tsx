"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
    >
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 text-purple-950 dark:text-purple-50">
          {project.title}
        </h3>
        <p className="text-purple-800/70 dark:text-purple-200/70 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4 pt-4 border-t border-purple-100 dark:border-purple-800/50">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
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
            className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
          >
            <Github size={16} />
            Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
}