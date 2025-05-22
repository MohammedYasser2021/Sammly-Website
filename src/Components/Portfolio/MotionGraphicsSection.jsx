import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoModal from './modals/VideoModal';

const MotionGraphicsSection = ({ data }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
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
    <div className="motion-graphics-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((video, index) => (
          <motion.div
            key={index}
            className="video-card border-2 border-[#0B60B0] rounded-xl overflow-hidden bg-[#020710] transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(29, 191, 254, 0.6)",
              transition: { duration: 0.3 }
            }}
            onClick={() => openModal(video)}
          >
            <div className="relative h-48 overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                src={video.img} 
                preload="metadata"
                muted
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020710] to-transparent opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="play-button w-14 h-14 bg-[#1DBFFE] rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </motion.div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold font-['Cairo'] text-white mb-2">
                {video.title}
              </h3>
              <p className="text-gray-300 font-['Cairo'] text-sm line-clamp-3">
                {video.desc}
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-[#0B60B0] text-white rounded-tl-2xl rounded-br-2xl font-['Cairo'] text-sm hover:bg-[#1DBFFE] transition-colors duration-300"
              >
                Watch Video
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {modalOpen && selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          isOpen={modalOpen} 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default MotionGraphicsSection;