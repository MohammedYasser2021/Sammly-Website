import React, { useEffect } from 'react';
import { Award, BarChart, Users, Shuffle, Globe, Lightbulb } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import chooseBg from '../assets/chooseBg.jpg';

const WhyChooseUs = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Animation effect
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const items = [
    {
      icon: <BarChart size={48} />,
      title: "Data-Driven Strategies",
      description: "We prioritize results and utilize analytics to inform our decisions. Our focus on data helps us refine our strategies to ensure maximum impact and return on investment."
    },
    {
      icon: <Award size={48} />,
      title: "Proven Expertise",
      description: "Our team consists of skilled professionals with extensive experience in each of the outlined fields, ensuring high-quality deliverables tailored to your needs."
    },
    {
      icon: <Shuffle size={48} />,
      title: "Flexibility and Adaptability",
      description: "We understand that the marketing landscape is ever-changing. Our team is agile and can quickly adapt strategies to respond to new challenges and opportunities."
    },
    {
      icon: <Users size={48} />,
      title: "Client-Centric Approach",
      description: "We prioritize your vision and goals, ensuring that our strategies align with your objectives. Our collaborative process guarantees that you remain involved and informed throughout the project."
    },
    {
      icon: <Globe size={48} />,
      title: "Bilingual Capability",
      description: "We understand the importance of effective communication. Our ability to provide services in both Arabic and English allows us to connect with a diverse audience and cater to your customer base effectively."
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Creative Innovation",
      description: "Our commitment to creativity means that we continually explore new ideas and technologies, keeping your brand at the forefront of market trends."
    },
  ];

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="relative bg-cover bg-center h-auto py-16 min-h-[600px] lg:min-h-[841px]" 
      id="why-choose-us"
      style={{ backgroundImage: `url(${chooseBg})` }}
    >
      <div className="container mx-auto md:px-16 px-10 relative z-10 h-full flex flex-col items-center justify-center">
        <motion.h2 
          variants={titleVariants}
          className="text-4xl font-bold text-center mb-12 font-['Cairo']"
          style={{
            fontFamily: 'Cairo',
            background: 'linear-gradient(90deg, #1DBFFE 0%, #0B60B0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          why you should choose us ?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-black bg-opacity-40 p-8 rounded-lg flex flex-col items-center text-center border border-[#0B60B0] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(29,191,254,0.5)]"
            >
              <div className="text-[#1DBFFE] mb-4 border-[1.5px] border-[#0B60B0] rounded-full p-2">
                {item.icon}
              </div>
              
              <h3 
                className="text-white mb-4"
                style={{
                  fontFamily: 'Cairo',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center'
                }}
              >
                {item.title}
              </h3>
              
              <p 
                className="text-white text-sm"
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
