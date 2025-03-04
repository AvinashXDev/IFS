import React from 'react';
import { motion } from 'framer-motion';
import dmart from "../assets/dmart_logo.png"
import amazon from "../assets/amazon_logo.png"
import batra from "../assets/batra_logo.png"
import reliance from "../assets/reliance_logo.png"
import bajaj from "../assets/bajaj_logo.png"
import sophos from "../assets/sophos_logo.png"
import snapdeal from "../assets/snapdeal_logo.png"
import walmart from "../assets/Walmart_logo.svg.png"
import flipkart from "../assets/flipkart_logo.png"
import alps from "../assets/alps_logo.png"


// import { img } from 'framer-motion/client';

// Company logos represented by Lucide icons for now
// In a real scenario, these would be actual company logos
const companyLogos = [
  { icon: <img src={dmart} alt="Logo" />
  , name: "Dmart" },
  { icon: <img src={batra} alt="Logo"/>
  , name: "Dr.Batra's" },
  { icon: <img src={amazon} alt="Logo"/>
  , name: "Amazon" },
  { icon: <img src={bajaj} alt="Logo"/>
  , name: "Bajaj Finserv" },
  { icon: <img src={sophos} alt="Logo"/>
  , name: "Sophos" },
  { icon: <img src={walmart} alt="Logo"/>
  , name: "Walmart" },
  { icon: <img src={flipkart} alt="Logo"/>
  , name: "Flipkart" },
  { icon: <img src={snapdeal} alt="Logo"/>
  , name: "Snapdeal" },
  { icon: <img src={reliance} alt="Logo"/>
  , name: "Reliance" },
  { icon: <img src={alps} alt="Logo"/>
  , name: "Alps Chemicals" }

 
];

const WorkedWith: React.FC = () => {
  return (
    <section className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Trusted By <span className="text-primary">Industry Leaders</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've collaborated with top companies across various sectors, delivering exceptional construction solutions.
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden py-10">
          {/* First row of logos moving right to left */}
          <motion.div 
            className="flex space-x-16 mb-8"
            animate={{ x: [0, -1500] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <div key={index} className="flex flex-col items-center justify-center min-w-[200px]">
                <div className="bg-dark-lighter p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors">
                  <div className="text-primary">{company.icon}</div>
                </div>
                <p className="mt-2 text-gray-400 text-sm">{company.name}</p>
              </div>
            ))}
          </motion.div>
          <motion.div 
            className="flex space-x-16"
            animate={{ x: [-1500, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...companyLogos.reverse(), ...companyLogos].map((company, index) => (
              <div key={index} className="flex flex-col items-center justify-center min-w-[200px]">
                <div className="bg-dark-lighter p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors">
                  <div className="text-primary">{company.icon}</div>
                </div>
                <p className="mt-2 text-gray-400 text-sm">{company.name}</p>
              </div>
            ))}
          </motion.div>
          
         
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;