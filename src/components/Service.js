import React from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Monitor, Layout } from "lucide-react";

function Service() {
  const services = [
    { icon: <Code />, title: "Software Engineering" },
    { icon: <Cloud />, title: "Cloud Solutions" },
    { icon: <Monitor />, title: "Web/Mobile Apps" },
    { icon: <Layout />, title: "Product Design" },
  ];
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-800 via-red-900/40 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
              }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center transition-all duration-300"
            >
              <div className="text-red-500 w-12 h-12 mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
