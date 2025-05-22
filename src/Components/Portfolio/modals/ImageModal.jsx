import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ image, category, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    category.imgs.findIndex(img => img === image)
  );

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.19, 1.0, 0.22, 1.0] 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { 
        duration: 0.3, 
        ease: "easeIn" 
      }
    }
  };
  
  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      (prev + 1) % category.imgs.length
    );
  };
  
  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      (prev - 1 + category.imgs.length) % category.imgs.length
    );
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
            className="relative max-w-4xl max-h-[90vh]"
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

            <div className="navigation-buttons absolute inset-y-0 w-full flex items-center justify-between px-4 z-10">
              <button 
                className="p-2 rounded-full bg-[#0B60B0] text-white hover:bg-[#1DBFFE] transition-colors duration-300"
                onClick={goToPrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="p-2 rounded-full bg-[#0B60B0] text-white hover:bg-[#1DBFFE] transition-colors duration-300"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="image-container rounded-lg overflow-hidden shadow-2xl">
              <LazyLoadImage
                src={category.imgs[currentImageIndex]}
                alt={`${category.title} - detail view`}
                effect="blur"
                className="max-h-[80vh] w-auto mx-auto"
              />
            </div>
            
            <div className="image-caption mt-4 text-center">
              <h3 className="text-xl font-semibold font-['Cairo'] text-white">
                {category.title}
              </h3>
              <p className="text-gray-300 font-['Cairo'] text-sm">
                {`Image ${currentImageIndex + 1} of ${category.imgs.length}`}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;