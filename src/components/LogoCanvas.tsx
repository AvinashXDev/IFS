// import { motion } from "framer-motion";
// import logo from "../assets/l"; // Update with actual logo path

const AnimatedLogo = () => {
  return (
   <>
   <div className="relative flex justify-center items-center h-screen">
  <h1 className="text-6xl font-bold text-gray-200 relative">
    IFS
    <span className="absolute top-0 left-0 text-gray-800 transform translate-x-1 translate-y-1 blur-sm">
      IFS
    </span>
  </h1>
</div>
</>
  )
};

export default AnimatedLogo;
