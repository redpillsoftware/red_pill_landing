import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-red-900/30 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.15)",
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-center space-x-4"
            >
              <Mail className="text-red-500" />
              <div>
                <h3 className="font-bold text-white">Email</h3>
                <p className="text-gray-300">contact.redpill@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.15)",
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-center space-x-4"
            >
              <Phone className="text-red-500" />
              <div>
                <h3 className="font-bold text-white">Phone</h3>
                <p className="text-gray-300">+91 (996) 709-6936</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.15)",
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-center space-x-4"
            >
              <MapPin className="text-red-400" />
              <div>
                <h3 className="font-bold text-white">Location</h3>
                <p className="text-gray-300">B3 Radha Krishna Vihar, Pune</p>
              </div>
            </motion.div>
          </div>

          <motion.form
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            whileHover={{ boxShadow: "0 0 25px rgba(239, 68, 68, 0.2)" }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea className="w-full p-3 bg-white/5 border border-gray-700 rounded-lg h-32 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"></textarea>
              </div>
              <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
