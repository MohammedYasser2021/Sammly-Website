import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ video, isOpen, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented:", error);
        });
      }
    }
  }, [isOpen, video]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.19, 1.0, 0.22, 1.0] 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.3, 
        ease: "easeIn" 
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-transparent"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-4 -right-4 p-2 rounded-full bg-[#0B60B0] text-white hover:bg-[#1DBFFE] transition-colors duration-300 z-10"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="video-container rounded-lg overflow-hidden shadow-2xl bg-black">
              <video 
                ref={videoRef}
                className="w-full h-auto"
                controls
                playsInline
                preload="auto"
              >
                <source src={video.img} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="video-details mt-4 p-6 bg-[#020710] rounded-[10px] border-2 border-[#0B60B0]">
              <h3 className="text-2xl font-bold mb-2 font-['Cairo']" style={{
                background: 'linear-gradient(90deg, #1DBFFE 0%, #0B60B0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {video.title}
              </h3>
              <p className="text-gray-300 font-['Cairo']">{video.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;