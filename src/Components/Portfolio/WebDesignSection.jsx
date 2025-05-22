import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const WebDesignSection = ({ data }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="web-design-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((project, index) => (
          <motion.div
            key={index}
            className="project-card border-2 border-[#0B60B0] rounded-xl overflow-hidden bg-[#020710] transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(29, 191, 254, 0.6)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative h-48 overflow-hidden">
              <LazyLoadImage
                src={project.img}
                alt={project.title}
                effect="blur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020710] to-transparent"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold font-['Cairo'] text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 font-['Cairo'] text-sm line-clamp-3">
                {project.desc}
              </p>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-[#0B60B0] text-white rounded-tl-2xl rounded-br-2xl font-['Cairo'] text-sm hover:bg-[#1DBFFE] transition-colors duration-300"
              >
                View Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebDesignSection;
