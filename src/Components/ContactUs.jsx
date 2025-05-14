import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WhatsappImg from '../assets/whatsapp.png';
import GmailImg from '../assets/gmail.png';

const ContactUs = () => {
  // Animation controls for different sections
  const controlsAbout = useAnimation();
  const controlsGetStarted = useAnimation();
  const controlsSupport = useAnimation();
  const controlsContact = useAnimation();
  
  // Intersection observers for different sections
  const [refAbout, inViewAbout] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refGetStarted, inViewGetStarted] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refSupport, inViewSupport] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refContact, inViewContact] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Start animations when sections come into view
  useEffect(() => {
    if (inViewAbout) controlsAbout.start('visible');
    if (inViewGetStarted) controlsGetStarted.start('visible');
    if (inViewSupport) controlsSupport.start('visible');
    if (inViewContact) controlsContact.start('visible');
  }, [inViewAbout, inViewGetStarted, inViewSupport, inViewContact, controlsAbout, controlsGetStarted, controlsSupport, controlsContact]);

  return (
    <footer className="bg-[#030915] text-white py-16 border-t border-b border-[#0B60B0]">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8">
          {/* About Us Column - 1 column on lg screens */}
          <motion.div 
            ref={refAbout}
            className="flex flex-col items-center md:items-start lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate={controlsAbout}
          >
            <motion.h3 
              className="font-['Cairo'] font-bold text-[20px] leading-[100%] text-center md:text-left mb-4"
              variants={itemVariants}
            >
              About Us
            </motion.h3>
            <motion.p 
              className="font-['Cairo'] font-semibold text-[14px] leading-[30px] text-center md:text-left"
              variants={itemVariants}
            >
              we are a team of marketing professionals providing innovative 
              solutions in social media, graphic design, and web development. We 
              build strong client relationships to create tailored strategies that 
              drive success in the digital landscape.
            </motion.p>
          </motion.div>

          {/* Get Started Column - 1 column on lg screens */}
          <motion.div 
            ref={refGetStarted}
            className="flex flex-col items-center md:items-start lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={controlsGetStarted}
          >
            <motion.h3 
              className="font-['Cairo'] font-bold text-[20px] leading-[100%] text-center md:text-left mb-4"
              variants={itemVariants}
            >
              Get Started
            </motion.h3>
            <motion.ul 
              className="font-['Cairo'] font-semibold text-[14px] leading-[30px] text-center md:text-left w-full"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>Start up</motion.li>
              <motion.li variants={itemVariants}>Website</motion.li>
              <motion.li variants={itemVariants}>Application</motion.li>
              <motion.li variants={itemVariants}>Landing Page</motion.li>
            </motion.ul>
          </motion.div>

          {/* Support Column - 1 column on lg screens */}
          <motion.div 
            ref={refSupport}
            className="flex flex-col items-center md:items-start lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={controlsSupport}
          >
            <motion.h3 
              className="font-['Cairo'] font-bold text-[20px] leading-[100%] text-center md:text-left mb-4"
              variants={itemVariants}
            >
              Support
            </motion.h3>
            <motion.ul 
              className="font-['Cairo'] font-semibold text-[14px] leading-[30px] text-center md:text-left w-full"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>Help center</motion.li>
              <motion.li variants={itemVariants}>My Account</motion.li>
              <motion.li variants={itemVariants}>Privacy policies</motion.li>
            </motion.ul>
          </motion.div>

          {/* Contact Us Column - 3 columns on lg screens */}
          <motion.div 
            ref={refContact}
            className="flex flex-col items-center md:items-start lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            animate={controlsContact}
          >
            <motion.h3 
              className="font-['Cairo'] font-bold text-[20px] leading-[100%] text-center md:text-left mb-4"
              variants={itemVariants}
            >
              Contact Us:
            </motion.h3>
            
            <motion.div 
              className="flex flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-6 w-full flex-wrap"
              variants={containerVariants}
            >
              {/* WhatsApp Button */}
              <motion.a 
                href="https://wa.me/201028085836" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0B60B0] rounded-[5px] flex items-center justify-center w-full max-w-[202px] h-[53px] gap-2 px-4"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#0A4D8C",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={WhatsappImg} 
                  alt="WhatsApp" 
                  className="w-6 h-6" 
                />
                <span className="font-['Cairo'] font-semibold text-[18px] md:text-[20px] leading-[100%] text-center text-white">
                  Whats app
                </span>
              </motion.a>
              
              {/* Email Button */}
              <motion.a 
                href="mailto:mohammedyasser2019b@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0B60B0] rounded-[5px] flex items-center justify-center w-full max-w-[202px] h-[53px] gap-2 px-4"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#0A4D8C",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={GmailImg} 
                  alt="Gmail" 
                  className="w-6 h-6" 
                />
                <span className="font-['Cairo'] font-semibold text-[18px] md:text-[20px] leading-[100%] text-center text-white">
                  E-mail
                </span>
              </motion.a>
            </motion.div>
            
            {/* QR Code Section */}
            <motion.p 
              className="font-['Cairo'] font-semibold text-[20px] leading-[100%] mb-4 text-center md:text-left"
              variants={itemVariants}
            >
              Or Scan the QR code
            </motion.p>
            
            <motion.div 
              className="flex justify-center md:justify-start"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/201028085836" 
                alt="WhatsApp QR Code" 
                className="w-[150px] h-[150px]" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
