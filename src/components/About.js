import { React, useState } from "react";
import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";
import Background from "../assets/images/Back2.jpeg";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleGetStarted = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <section id="about" className="min-h-screen relative flex items-end pb-16">
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
        <button
          className="bg-red-500 px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition-colors font-sans"
          onClick={() => setIsModalOpen(true)}
        >
          <span>Get Started</span>
        </button>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg w-full max-w-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-200 hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4 text-white">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg bg-white/10 text-white focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg bg-white/10 text-white focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg bg-white/10 text-white focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
