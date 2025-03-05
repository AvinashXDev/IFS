import React from "react";
import { motion } from "framer-motion";
import img from "../assets/WhatsApp Image 2025-03-06 at 03.23.29_54677f88.jpg";

const LogoCanvas: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="relative w-90 h-90 max-sm:w-80 max-sm:h-80 rounded-full overflow-hidden border-4 border-[#FF7A00] shadow-lg mx-auto flex "
>
      
      <div className="absolute -z-10 w-full h-full bg-[#FF7A00] blur-2xl opacity-20 animate-pulse items-center justify-center"></div>

      <motion.img
        src={img}
        alt="Founder"
        className="w-full h-full object-cover"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default LogoCanvas;
