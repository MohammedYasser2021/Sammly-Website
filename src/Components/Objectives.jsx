import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import objectivesBg from '../assets/objectivesBg.jpg';

const Objectives = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div 
      className="relative w-full py-16" 
      style={{ 
        backgroundImage: `url(${objectivesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <motion.div 
        className="container mx-auto px-4 relative "
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 
          className="font-cairo font-bold text-4xl text-center mb-10 bg-gradient-to-r from-[#1DBFFE] to-[#0B60B0] bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Objectives
        </motion.h2>
        
        {/* Mobile-first approach with simplified structure */}
        <div className="w-full md:w-[660px] md:mx-auto lg:ml-auto lg:mr-0">
          {/* Mobile view (stacked cards) */}
          <div className="block md:hidden space-y-5">
            <motion.div 
              className="bg-[#0B60B0]/10 backdrop-blur-md rounded-xl p-6 border border-[#1DBFFE]/10"
              variants={cardVariants}
            >
              <p className="font-cairo font-normal text-2xl text-white text-left">
                Enhance customer<br />
                engagement across<br />
                platforms.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#0B60B0]/10 backdrop-blur-md rounded-xl p-6 border border-[#1DBFFE]/10"
              variants={cardVariants}
            >
              <p className="font-cairo font-normal text-2xl text-white text-left">
                Increase brand<br />
                awareness in targeted<br />
                markets
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#0B60B0]/10 backdrop-blur-md rounded-xl p-6 border border-[#1DBFFE]/10"
              variants={cardVariants}
            >
              <p className="font-cairo font-normal text-2xl text-white text-left">
                Drive traffic to the website<br />
                and convert leads into<br />
                customers.
              </p>
            </motion.div>
          </div>
          
          {/* Desktop view (original layout) */}
          <div className="hidden md:block">
            <div className="flex flex-row gap-5 mb-5">
              <motion.div 
                className="w-[320px] group bg-[#0B60B0]/10 backdrop-blur-md rounded-xl p-6 border border-[#1DBFFE]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B60B0]/20 hover:border-[#1DBFFE]/30 hover:shadow-[0_8px_24px_rgba(29,191,254,0.15)]"
                variants={cardVariants}
              >
                <p className="font-cairo font-normal text-2xl text-white text-left">
                  Enhance customer<br />
                  engagement across<br />
                  platforms.
                </p>
              </motion.div>
              
              <motion.div 
                className="w-[320px] group bg-[#0B60B0]/10 backdrop-blur-md rounded-xl p-6 border border-[#1DBFFE]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B60B0]/20 hover:border-[#1DBFFE]/30 hover:shadow-[0_8px_24px_rgba(29,191,254,0.15)]"
                variants={cardVariants}
              >
                <p className="font-cairo font-normal text-2xl text-white text-left">
                  Increase brand<br />
                  awareness in targeted<br />
                  markets
                </p>
              </motion.div>
            </div>
            
            <div className="flex justify-start">
              <motion.div 
                className="w-[320px] group bg-[#0B60B0]/10 backdrop-blur-md rounded-xl p-6 border border-[#1DBFFE]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B60B0]/20 hover:border-[#1DBFFE]/30 hover:shadow-[0_8px_24px_rgba(29,191,254,0.15)]"
                variants={cardVariants}
              >
                <p className="font-cairo font-normal text-2xl text-white text-left">
                  Drive traffic to the website<br />
                  and convert leads into<br />
                  customers.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Objectives;
