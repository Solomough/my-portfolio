import React from "react";
import { motion } from "framer-motion";
import Banner from "../assets/banner.jpg"; // make sure you have this image

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Solomon Moughkaa Zahemen
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-center max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Creating modern web solutions that combine creativity, problem-solving, and faith.
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-100 transition"
        whileHover={{ scale: 1.05 }}
      >
        Explore My Work
      </motion.button>
    </section>
  );
};

export default Hero;
