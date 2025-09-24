import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <motion.h1
        className="text-5xl font-bold mb-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm Solomon!
      </motion.h1>
      <motion.p
        className="text-xl text-center max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        I create web solutions that combine creativity, problem-solving, and faith. Welcome to my portfolio.
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-100 transition"
        whileHover={{ scale: 1.05 }}
      >
        See My Work
      </motion.button>
    </section>
  );
};

export default Hero;
