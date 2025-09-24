import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white">Solomough</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Bridging <span className="text-green-500 font-semibold">faith & technology</span>  
            to inspire, build, and impact generations.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-green-500 transition">About</a></li>
            <li><a href="#projects" className="hover:text-green-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-500 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white">Connect</h3>
          <div className="mt-4 flex gap-4 flex-wrap">
            <a href="mailto:zahemenmoughkaa@gmail.com" className="hover:text-green-500">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/Solomough" target="_blank" rel="noreferrer" className="hover:text-green-500">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/solomon-moughkaa-zahemen-a5476a377/" target="_blank" rel="noreferrer" className="hover:text-green-500">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/moughkaa46415?s=09" target="_blank" rel="noreferrer" className="hover:text-green-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/1CHDBS3HAA/" target="_blank" rel="noreferrer" className="hover:text-green-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/solomough3" target="_blank" rel="noreferrer" className="hover:text-green-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@solomough" target="_blank" rel="noreferrer" className="hover:text-green-500">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="italic">They are awaiting your manifestations</p>
        <p>© {new Date().getFullYear()} Solomough. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
}

export default Footer;
