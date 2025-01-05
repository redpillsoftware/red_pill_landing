import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Background from "../assets/images/Back.jpeg";

function About() {
  return (
    <section id="about" className="min-h-screen relative flex items-center">
      <img
        src={Background}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-red-900/70" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-7xl mx-auto px-4 text-white"
      >
        <h2 className="text-6xl font-display font-bold mb-4 tracking-tight">
          Transform Your Vision Into Reality
        </h2>
        <p className="text-xl font-sans mb-8 font-light">
          Innovative software solutions for the modern world
        </p>
        <button className="bg-red-600 px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors font-sans">
          <span>Get Started</span>
          <ChevronRight size={20} />
        </button>
      </motion.div>
    </section>
  );
}

export default About;
