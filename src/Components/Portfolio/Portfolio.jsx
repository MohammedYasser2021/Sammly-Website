import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MediaBuyingSection from './MediaBuyingSection';
import MotionGraphicsSection from './MotionGraphicsSection';
import GraphicsSection from './GraphicsSection';
import './Portfolio.css';

// Import data from separate files
import { MediaBuyingData } from './data/MediaBuyingData';
import { MotionGraphics } from './data/MotionGraphicsData';
import { graphicsData } from './data/GraphicsData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('mediaBuying');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="portfolio-container bg-[#020710] py-16" ref={ref}>
      <motion.h2
        className="text-4xl font-bold text-center mb-12 font-['Cairo']"
        style={{
          fontFamily: 'Cairo',
          background: 'linear-gradient(90deg, #1DBFFE 0%, #0B60B0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Our Portfolio
      </motion.h2>

      <div className="portfolio-tabs container mx-auto  flex justify-center mb-12">
        <button
          onClick={() => setActiveSection('mediaBuying')}
          className={`tab-button px-6 py-3 mx-2 rounded-tl-3xl rounded-br-3xl font-['Cairo'] font-semibold transition-all duration-300 ${
            activeSection === 'mediaBuying' 
              ? 'bg-[#0B60B0] text-white' 
              : 'bg-transparent text-white border-2 border-[#0B60B0]'
          }`}
        >
          Media Buying
        </button>
        <button
          onClick={() => setActiveSection('motionGraphics')}
          className={`tab-button px-6 py-3 mx-2 rounded-tl-3xl rounded-br-3xl font-['Cairo'] font-semibold transition-all duration-300 ${
            activeSection === 'motionGraphics' 
              ? 'bg-[#0B60B0] text-white' 
              : 'bg-transparent text-white border-2 border-[#0B60B0]'
          }`}
        >
          3D Motion Graphics
        </button>
        <button
          onClick={() => setActiveSection('graphics')}
          className={`tab-button px-6 py-3 mx-2 rounded-tl-3xl rounded-br-3xl font-['Cairo'] font-semibold transition-all duration-300 ${
            activeSection === 'graphics' 
              ? 'bg-[#0B60B0] text-white' 
              : 'bg-transparent text-white border-2 border-[#0B60B0]'
          }`}
        >
          Graphics
        </button>
      </div>

      <motion.div
        className="portfolio-content container mx-auto px-12"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {activeSection === 'mediaBuying' && (
          <MediaBuyingSection data={MediaBuyingData} />
        )}
        
        {activeSection === 'motionGraphics' && (
          <MotionGraphicsSection data={MotionGraphics} />
        )}
        
        {activeSection === 'graphics' && (
          <GraphicsSection data={graphicsData} />
        )}
      </motion.div>
    </div>
  );
};

export default Portfolio;