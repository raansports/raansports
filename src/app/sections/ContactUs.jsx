import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="h-screen flex justify-center items-center"
    >
      <div className="w-full max-w-[1240px] mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <span className="mr-4 material-symbols-outlined">
              email
            </span>
            <p>raansports@gmail.com</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-4" size={24} />
            <p>+880 1818 426 501</p>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-4" size={24} />
            <p>Raan Sports Knit Wear Ltd. <br />
            Plot- B/167-168, BSCIC- I/A, Sashongaon, <br /> Fatullah, Narayanganj, Bangladesh</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactUs

