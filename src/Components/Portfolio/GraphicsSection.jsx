import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageModal from './modals/ImageModal';

const GraphicsSection = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(data[0].category);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (image, category) => {
    setSelectedImage({ image, category });
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
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

  const currentCategory = data.find(cat => cat.category === selectedCategory);

  return (
    <div className="graphics-section">
      <div className="category-tabs flex flex-wrap justify-center mb-8 gap-2">
        {data.map((category, index) => (
          <motion.button
            key={index}
            className={`tab-button px-4 py-2 m-1 rounded-tl-2xl rounded-br-2xl font-['Cairo'] font-medium text-sm transition-all duration-300 ${
              selectedCategory === category.category 
                ? 'bg-[#0B60B0] text-white' 
                : 'bg-transparent text-white border border-[#0B60B0]'
            }`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(29, 191, 254, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.category)}
          >
            {category.title}
          </motion.button>
        ))}
      </div>

      <div className="category-description mb-8 text-center">
        <h3 className="text-xl font-semibold font-['Cairo'] text-white mb-2">
          {currentCategory.title}
        </h3>
        <p className="text-gray-300 font-['Cairo'] max-w-2xl mx-auto">
          {currentCategory.desc}
        </p>
      </div>

      <motion.div 
        className="images-grid grid sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory} // This forces re-render and animation when category changes
      >
        {currentCategory.imgs.map((img, idx) => (
          <motion.div
            key={idx}
            className="image-item rounded-lg overflow-hidden cursor-pointer"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(29, 191, 254, 0.5)",
              transition: { duration: 0.3 }
            }}
            onClick={() => openModal(img, currentCategory)}
          >
            <LazyLoadImage
              src={img}
              alt={`${currentCategory.title} - image ${idx + 1}`}
              effect="blur"
              className="w-full h-auto object-cover aspect-square"
            />
          </motion.div>
        ))}
      </motion.div>

      {modalOpen && selectedImage && (
        <ImageModal 
          image={selectedImage.image} 
          category={selectedImage.category}
          isOpen={modalOpen} 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default GraphicsSection;