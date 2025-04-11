import React, { useState } from 'react';
import { motion } from 'framer-motion';
import interior from "../assets/interior_project.png"
import interior_2 from "../assets/interior_project_2.png"
import washroom from "../assets/Washroom.png"
import net from "../assets/pigeon net.png"
import renovation from "../assets/renovation.png"
import wall from "../assets/wall.png"


const projects = [
  {
    title: 'Stylish Bedroom & Hall Interiors',
    category: 'Residential',
    image: interior,
    description: 'Experience the perfect blend of style and comfort with our bespoke bedroom and hall interior designs.'
  },
  {
    title: 'Luxurious Airport VIP Washroom Design',
    category: 'Commercial',
    image: washroom,
    description: 'Premium, elegant, and functional washroom interiors for a superior VIP experience'
  },
  {
    title: 'Industrial Pigeon Net Installation',
    category: 'Industrial',
    image: net,
    description: 'Durable, high-quality netting solutions to protect spaces from pigeons effectively.'
  },
  {
    title: 'Sophisticated Bedroom & Hall Interiors',
    category: 'Interior',
    image: interior_2,
    description: 'Stylish, functional spaces designed for comfort and elegance'
  },
  {
    title: 'Modern Washroom Renovation',
    category: 'Renovation',
    image: renovation,
    description: 'Transform your washroom with stylish, functional, and luxurious upgrades.'
  },
  {
    title: 'Durable Outdoor Paint Solutions',
    category: 'Industrial',
    image: wall,
    description: 'Weather-resistant, high-quality paintwork for a fresh and lasting finish.'
  }
];

const categories = ['All','Interior', 'Commercial', 'Residential', 'Industrial', 'Renovation' ];

const Projects: React.FC= () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects"  className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our <span className="text-primary">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various sectors of the construction industry.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-dark-lighter text-gray-300 hover:bg-dark-light'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg bg-dark-lighter"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {/* <button className="text-primary font-medium hover:text-primary-light transition-colors flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;