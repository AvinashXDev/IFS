import React, { useState } from 'react';
import { Menu, X, Home, Building2, Briefcase, Phone, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', icon: <Home size={20} /> },
    // { name: 'About', icon: <Info size={20} /> },
    { name: 'Services', icon: <Building2 size={20} /> },
    { name: 'Projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', icon: <Phone size={20} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark-lighter/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10" src="/src/assets/logo.png" alt="IFS Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.name.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-light focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-light">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get a Quote
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;