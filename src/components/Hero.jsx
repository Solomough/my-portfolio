import React from "react";
import banner from "../assets/banner.jpg";
import dp from "../assets/dp.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white p-4 max-w-3xl"
      >
        <img
          src={dp}
          alt="Solomon Moughkaa Zahemen"
          className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Solomon Moughkaa Zahemen
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Visionary + Developer | Faith + Tech = Unstoppable Uniqueness
        </p>
        <p className="text-md md:text-lg">
          Building meaningful solutions while learning. Explore my work and see
          how I turn ideas into reality.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
