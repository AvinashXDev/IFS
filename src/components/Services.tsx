import React from 'react';
import { motion } from 'framer-motion';
import { Building, Home, Factory, Hammer, Loader as Road, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and commercial facilities built to the highest standards.',
    icon: <Building size={40} className="text-primary" />
  },
  {
    title: 'Residential Projects',
    description: 'Custom homes, multi-family units, and residential developments with attention to detail.',
    icon: <Home size={40} className="text-primary" />
  },
  {
    title: 'Industrial Facilities',
    description: 'Manufacturing plants, warehouses, and industrial complexes designed for efficiency.',
    icon: <Factory size={40} className="text-primary" />
  },
  {
    title: 'Renovation Services',
    description: 'Transforming existing spaces with modern upgrades and structural improvements.',
    icon: <Hammer size={40} className="text-primary" />
  },
  {
    title: 'Infrastructure Development',
    description: 'Roads, bridges, and public works projects built to last generations.',
    icon: <Road size={40} className="text-primary" />
  },
  {
    title: 'Sustainable Building',
    description: 'Eco-friendly construction practices and energy-efficient building solutions.',
    icon: <Leaf size={40} className="text-primary" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our <span className="text-primary">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive construction solutions tailored to meet your specific needs and requirements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;