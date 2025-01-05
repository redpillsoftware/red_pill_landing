import React from "react";
import { motion } from "framer-motion";
import Authzen from "../assets/images/Designer.png";
import StudyPulse from "../assets/images/StudyPulse.png";
import Bookscape from "../assets/images/Bookscape.png";
import { image } from "framer-motion/client";

function Portfolio() {
  const projects = [
    {
      title: "Keygen Alpha",
      desc: "Keygen Alpha is a secure and user-friendly platform for generating strong passwords and environment keys, ensuring your digital assets stay protected. Simplify security with customizable options tailored to your needs. Strengthen your online safety with Keygen Alpha today!",
      image: Authzen,
    },
    {
      title: "StudyPulse",
      desc: "StudyPulse is the ultimate community platform for collaborative learning, featuring admin-controlled study rooms for focused discussions. Connect, share knowledge, and boost productivity in a secure, organized environment. Join StudyPulse and power your study sessions today!",
      image: StudyPulse,
    },
    {
      title: "Bookscape",
      desc: "Bookscape is a tech-driven, reader-centric online bookstore with 1 million+ titles from 700+ publishers. It is custom designed to connect content creators and publishers to readers seamlessly. Get ready to enjoy a personalised experience that’s curated for you so that you can re-discover the joy of reading.",
      image: Bookscape,
    },
  ];
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-gray-900 via-red-900/50 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -5,
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
