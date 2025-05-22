import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { X } from 'lucide-react';

const MediaBuyingModal = ({ project, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.19, 1.0, 0.22, 1.0] 
      }
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 0.95,
      transition: { 
        duration: 0.3, 
        ease: "easeIn" 
      }
    }
  };

  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#020710] border border-[#0B60B0]  text-white custom-scrollbar"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#1DBFFE #020710',
            }}
          >
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #020710;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #1DBFFE 0%, #0B60B0 100%);
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #1DBFFE;
              }
            `}</style>

            <button 
              className="absolute top-4 right-4 p-2 rounded-full bg-[#0B60B0] text-white hover:bg-[#1DBFFE] transition-colors duration-300"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="case-study p-8">
              <div className="header mb-8">
                <h2 className="text-3xl font-bold mb-4 font-['Cairo']" style={{
                  background: 'linear-gradient(90deg, #1DBFFE 0%, #0B60B0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {project.title}
                </h2>
                <p className="text-gray-300 font-['Cairo'] text-lg mb-6">
                  {project.desc}
                </p>
                
                <div className="main-image-container relative rounded-lg overflow-hidden mb-8 shadow-lg cursor-pointer" onClick={() => openLightbox(project.mainImage)}>
                  <LazyLoadImage
                    src={project.mainImage}
                    alt={project.title}
                    effect="blur"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="content grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="details">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold font-['Cairo'] mb-3 text-[#1DBFFE]">
                      Objectives
                    </h3>
                    <ul className="list-disc pl-5 text-gray-300">
                      {project.Objecctives?.map((objective, idx) => (
                        <li key={idx} className="mb-2 font-['Cairo']">{objective}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold font-['Cairo'] mb-3 text-[#1DBFFE]">
                      Problem
                    </h3>
                    <p className="text-gray-300 font-['Cairo']">
                      {project.problems}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold font-['Cairo'] mb-3 text-[#1DBFFE]">
                      Solution
                    </h3>
                    <p className="text-gray-300 font-['Cairo'] whitespace-pre-line">
                      {project.solution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold font-['Cairo'] mb-3 text-[#1DBFFE]">
                      Results
                    </h3>
                    <p className="text-gray-300 font-['Cairo'] whitespace-pre-line">
                      {project.results}
                    </p>
                  </div>
                </div>

                <div className="project-images">
                  <h3 className="text-xl font-semibold font-['Cairo'] mb-4 text-[#1DBFFE]">
                    Project Images
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.projImages?.map((img, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                        onClick={() => openLightbox(img)}
                      >
                        <LazyLoadImage
                          src={img}
                          alt={`${project.title} - image ${idx + 1}`}
                          effect="blur"
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-90"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-[#0B60B0] text-white hover:bg-[#1DBFFE] transition-colors duration-300 z-[70]"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <div className="max-w-[90vw] max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default MediaBuyingModal;
