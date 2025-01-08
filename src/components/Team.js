import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/images/Profile.png";
import Rucha from "../assets/images/Rucha.png";
import Kirti from "../assets/images/Kirti.png";

function Team() {
  const team = [
    { name: "Sumeet Patil", role: "CEO and Founder", image: Profile },
    { name: "Kirti Bhosale", role: "CTO and Co-Founder", image: Kirti },
    { name: "Rucha Butala", role: "Director of Engineering", image: Rucha },
  ];

  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-br from-gray-900 via-red-900/30 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Our Team
        </h2>
        <div
          className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)" }}
              className="flex-shrink-0 snap-center w-64 bg-white/10 backdrop-blur-sm p-4 rounded-xl sm:w-72 md:w-80 lg:w-96"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
