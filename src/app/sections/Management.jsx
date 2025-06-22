import React from "react";
import { FaUserTie, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const managementTeam = [
  {
    name: "Md. Moniruzzaman",
    title: "Managing Director",
    phone: "+8801818426501",
    email: "raansports@gmail.com",
  },
  {
    name: "Md. Jubayr",
    title: "Director",
    phone: "+8801836981359",
    email: "jubayr@raansports.com",
  },
  {
    name: "Md. Mostak Ahmed",
    title: "Marketing Director",
    phone: "+8801713012883",
    email: "mostak@raansports.com",
  },
];

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

function Management() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="center bg-white snap-start h-auto md:h-screen w-full pt-28"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-6xl md:text-9xl font-bold text-center text-blue-950 mb-10 max">
          Management
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {managementTeam.map((person, i) => (
            <motion.div
              key={i}
              variants={variants}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-100 rounded-2xl p-6 md:p-6 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-200 hover:to-yellow-500 hover:scale-115 hover:shadow-lg hover:z-50 transition duration-600 ease-in-out aspect-video"
            >
              <div className="flex items-center justify-end gap-3 mb-1 w-full">
                <img
                  src="/logo/Logo.png"
                  alt="profile"
                  width={50}
                  height={50}
                  className="w-auto h-8 md:h-10 mb-2"
                />
              </div>
              <div className="flex items-center gap-3">
                <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                  {person.name}
                </h4>
              </div>
              <p className="text-sm md:text-md text-blue-700 mb-2 italic">
                {person.title}
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2 mt-6">
                <FaPhoneAlt className="text-blue-700" />
                {person.phone}
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2 mt-1">
                <FaEnvelope className="text-blue-700" />
                {person.email}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Management;

