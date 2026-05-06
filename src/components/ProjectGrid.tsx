"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectGrid() {
  return (
    <section id="portfolio" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
          Featured Projects
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl text-lg">
          A selection of my recent work. You can easily add more projects by
          editing the data file.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
