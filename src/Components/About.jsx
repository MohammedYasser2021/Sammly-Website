import React from 'react'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutImg1 from '../assets/about1.jpg';
import AboutImg2 from '../assets/about2.jpg';

const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Setup animation controls
  const controls = useAnimation();
  
  // Setup the intersection observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  useEffect(() => {
    setIsMounted(true);
    
    // Start animation when element comes into view
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Define animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-[550px] bg-[#030915] py-16">
      <div className="container mx-auto px-4">
        <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
          <motion.h2 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={headingVariants}
         className="text-4xl font-bold text-center mb-12 font-['Cairo']"
        style={{
          fontFamily: 'Cairo',
          background: 'linear-gradient(90deg, #1DBFFE 0%, #0B60B0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
          >
            About Us
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10">
            {/* Image container - first on large screens */}
            <div 
              className={`w-full lg:w-1/2 relative transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex justify-center lg:justify-start relative">
                <img 
                  src={AboutImg1}
                  alt="Team collaboration" 
                  className={`w-[80%] sm:w-[70%] md:w-[65%] lg:w-[75%] aspect-[4/3] object-cover rounded-lg shadow-xl transition-all duration-300 ${isHovered ? 'translate-y-[-5px]' : ''}`}
                  style={{
                    boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.14)' : '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
              
              {/* Second image positioned to the right */}
              <div 
                className={`absolute -bottom-6 sm:-bottom-10 right-0 transition-all duration-500 delay-300 ${isHovered ? 'translate-y-[-8px] translate-x-[-5px]' : ''}`}
                style={{
                  boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.14)' : '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
                  zIndex: 10
                }}
              >
                <img 
                  src={AboutImg2}
                  alt="Digital marketing" 
                  className="w-[55%] sm:w-[50%] md:w-[45%] lg:w-[55%] aspect-[4/3.8] object-cover rounded-lg shadow-lg"
                  style={{
                    border: isHovered ? '2px solid rgba(29, 191, 254, 0.5)' : 'none'
                  }}
                />
              </div>
            </div>
            
            {/* Text content - second on large screens */}
            <div className={`w-full lg:w-1/2 mt-16 lg:mt-0 transition-all duration-700 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <span 
                  className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#1DBFFE] to-[#0B60B0] opacity-70"
                ></span>
                <p 
                  className="text-white text-lg sm:text-xl md:text-2xl leading-[1.6] sm:leading-[1.8] md:leading-[2] pl-2"
                  style={{ fontFamily: 'Cairo', fontWeight: 500 }}
                >
                  Sammly is a team of marketing professionals providing innovative solution in social media, graphic design, and web development. We build strong client relationship to create tailored strategies that drive success in the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
