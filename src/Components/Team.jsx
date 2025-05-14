import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const teamMembers = [
    { name: "Merna Naser", job: "UI/UX Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
    { name: "Ahmed Essam", job: "Backend Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
    { name: "Youssef Ali", job: "Frontend Developer", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
    { name: "Aya Maher", job: "Mobile Developer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
    { name: "Sama Ahmed", job: "Digital Marketing", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
  ];

  // Create a duplicate set of team members to ensure seamless looping
  // We need to duplicate the array multiple times to ensure there's enough content
  const duplicatedTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Start animation when component comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
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
        duration: 0.5, 
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div 
      ref={ref}
      style={{ 
        backgroundColor: '#030915', 
        minHeight: '450px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        className="text-4xl font-bold text-center mb-12 font-['Cairo'] mt-12"
        style={{
          fontFamily: 'Cairo',
          background: 'linear-gradient(90deg, #1DBFFE 0%, #0B60B0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Our Team
      </motion.h1>
      
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{ overflow: 'hidden', width: '100%', position: 'relative' }}
      >
        <div className="marquee-container">
          {duplicatedTeamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="team-member"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              style={{ padding: '15px' }} // Add padding to ensure shadow is visible
            >
              <motion.div
                style={{ position: 'relative' }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img
                  src={member.img}
                  alt={member.name}
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    margin: '0 auto 20px',
                    position: 'relative', // Ensure proper stacking context
                    zIndex: 1 // Ensure image is above shadow
                  }}
                  whileHover={{ 
                    boxShadow: '0px 0px 15px rgba(29, 191, 254, 0.7)' 
                  }}
                />
              </motion.div>
              <motion.h3 
                style={{ 
                  color: 'white', 
                  fontFamily: 'Cairo', 
                  fontWeight: 600, 
                  fontSize: '20px', 
                  lineHeight: '20px', 
                  letterSpacing: '0%', 
                  textAlign: 'center' 
                }}
              >
                {member.name}
              </motion.h3>
              <motion.p 
                style={{ 
                  color: '#9CA3AF', 
                  fontFamily: 'Cairo', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '40px', 
                  letterSpacing: '0%', 
                  textAlign: 'center' 
                }}
              >
                {member.job}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <style jsx>{`
        .marquee-container {
          display: flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
          padding: 15px 0; /* Add padding to ensure shadows are visible */
        }
        
        .team-member {
          flex: 0 0 auto;
          margin-right: 2rem;
          text-align: center;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-${teamMembers.length} * (150px + 2rem))); }
        }
      `}</style>
    </div>
  );
};

export default Team;
