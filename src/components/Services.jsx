import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Home, Drill, Ruler, PaintBucket, Truck } from 'lucide-react';

const services = [
  { title: "General Contracting", icon: <HardHat />, desc: "Complete project management from ground-break to final inspection." },
  { title: "Residential Remodeling", icon: <Home />, desc: "Transforming kitchens and baths into high-end living spaces." },
  { title: "Structural Engineering", icon: <Ruler />, desc: "Expert foundation work and structural reinforcements." },
  { title: "Custom Woodwork", icon: <Drill />, desc: "Master carpentry, framing, and finishing that sets you apart." },
  { title: "Interior Finishing", icon: <PaintBucket />, desc: "Precision painting and trim for a polished, professional look." },
  { title: "Commercial Builds", icon: <Truck />, desc: "Timely delivery for retail and office renovation projects." },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Subtle, Sophisticated Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Our Capabilities
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Building the future, <br /> 
              <span className="font-semibold italic">restoring the past.</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed border-l-2 border-gray-100 pl-6">
            Quality craftsmanship isn't just a goal; it's our foundation. We bring decades of site experience to every blueprint.
          </p>
        </div>

        {/* The Grid: Lighter & Cleaner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Icon with soft background */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-gray-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {React.cloneElement(service.icon, { size: 28, strokeWidth: 1.5 })}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                {service.desc}
              </p>
              
              {/* Subtle accent line */}
              <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-blue-100 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;