import React, { useEffect } from 'react';
import { Globe, Palette, Monitor, Smartphone, Film, Camera, Headphones, ChartBar, Layout, Video } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../App.css'; // We'll create this CSS file for the hvr-pop effect

const servicesData = [
  {
    title: 'Social Media Management',
    content: [
      'Develop and manage content calendar',
      'Engage with audience on social platforms',
      'Analyze performance metrics',
    ],
    icon: <Globe className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: 'UI/UX Designing',
    content: [
      'Create visually appealing interfaces',
      'Design and prototype user experiences',
      'Ensure accessibility for all users',
    ],
    icon: <Palette className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: 'Web Development',
    content: [
      'Build responsive and modern websites',
      'Integrate APIs and third-party services',
      'Optimize for performance and SEO',
    ],
    icon: <Monitor className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: 'Mobile App Development',
    content: [
      'Develop apps for iOS and Android',
      'Ensure seamless user experience',
      'Provide ongoing maintenance',
    ],
    icon: <Smartphone className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: 'Video Marketing',
    content: [
      'Create engaging promotional videos',
      'Optimize videos for social platforms',
      'Analyze video performance metrics',
    ],
    icon: <Film className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: 'Media Buying',
    content: [
      'Plan and execute ad campaigns',
      'Negotiate media placements',
      'Track and optimize ad performance',
    ],
    icon: <Camera className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: 'Customer Service',
    content: [
      'Provide 24/7 customer support',
      'Handle inquiries and complaints',
      'Ensure customer satisfaction',
    ],
    icon: <Headphones className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: 'SEO & Analytics',
    content: [
      'Optimize websites for search engines',
      'Track and analyze website traffic',
      'Provide detailed performance reports',
    ],
    icon: <ChartBar className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: '3D Design & Motion',
    content: [
      'Create 3D models and animations',
      'Design motion graphics for videos',
      'Enhance visual storytelling',
    ],
    icon: <Layout className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
  {
    title: 'Making Videos',
    content: [
      'Produce high-quality video content',
      'Edit and finalize video projects',
      'Ensure brand consistency',
    ],
    icon: <Video className="w-[48.29px] h-[48.29px] border-[1.5px] border-[#1DBFFE] rounded-full p-2 text-[#1DBFFE] hvr-pop" />,
  },
];

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

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
    <div className="bg-[#020710] py-16" ref={ref}>
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
        animate={controls}
      >
        Our Services
      </motion.h2>
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 w-[80%] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card mx-auto border-2 border-[#0B60B0] rounded-tr-[78px] rounded-bl-[78px] p-6 relative bg-[#020710] transition-all duration-300 hover:shadow-[0_0_15px_rgba(29,191,254,0.5)] hover:transform hover:scale-105"
              variants={itemVariants}
              whileHover={{
                boxShadow: "0 0 25px rgba(29, 191, 254, 0.6)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center mb-4">
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold font-['Cairo'] text-white ml-4">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {service.content.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-white font-['Cairo'] text-base font-normal"
                  >
                    <span className="ml-2 mr-3 text-white">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
