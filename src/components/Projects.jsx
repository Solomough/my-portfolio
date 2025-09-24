import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "An upcoming React project showcasing dynamic features.",
    status: "Coming Soon",
  },
  {
    title: "Project 2",
    description: "Another exciting project under development.",
    status: "Coming Soon",
  },
  {
    title: "Project 3",
    description: "A project that will demonstrate advanced React skills.",
    status: "Coming Soon",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-semibold">
                {project.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
