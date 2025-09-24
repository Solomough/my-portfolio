import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          I’m Solomon Moughkaa Zahemen — a developer who believes in turning
          ideas into solutions. Faith and tech guide my journey: I build, learn,
          and innovate every day. Projects are upcoming, but the vision is clear
          — excellence in every line of code.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
