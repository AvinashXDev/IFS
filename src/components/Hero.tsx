import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import LogoCanvas from './LogoCanvas';
// import { img } from 'framer-motion/client';
// import logo from "../assets/logo.png"

const Hero: React.FC = () => {
  return (
<div className="min-h-screen flex flex-col md:flex-row items-center justify-around px-5 sm:px-2 lg:px-6 xl:px-2 pt-20 max-w-screen-lg mx-auto" style={{maxWidth:1250}}>
<div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 md:pr-6 ">
<motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight">
            <span className="text-primary">Services</span> Without End
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 font-light"
        >
          <span className="mr-2">We specialize in</span>
          <Typewriter
            options={{
              strings: [
                'commercial construction',
                'residential projects',
                'industrial facilities',
                'renovation services',
                'infrastructure development',
                'sustainable building'
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: 'text-primary font-medium',
              cursorClassName: 'text-primary'
            }}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 max-w-lg"
        >
          Building the future with precision, innovation, and reliability. 
          From concept to completion, we transform visions into reality.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-row sm:flex-row gap-6"
        >
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors">
            Our Projects
          </button>
          <button className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 h-[400px] md:h-[600px] mt-10 md:mt-0"
        style={ { 
          width: "100%", 
          maxWidth: "420px", 
          height: "auto", 
          marginLeft: "95px", 
          marginRight: "50px", 
          display: "block", 
          marginTop: "5vh" 
        }}
      >
        <LogoCanvas   />
{/* <img 
  src={logo} 
  alt="Logo" 
  style={{ 
    width: "100%", 
    maxWidth: "450px", 
    height: "auto", 
    marginLeft: "auto", 
    marginRight: "auto", 
    display: "block", 
    marginTop: "10vh" 
  }}  */}

      </motion.div>
    </div>
  );
};

export default Hero;