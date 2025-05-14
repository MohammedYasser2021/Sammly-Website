import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';
import { testimonialData } from './testimonialData';
import TestimonialCard from './TestimonialCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragStartX, setDragStartX] = useState(0);
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Start animation when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Calculate the maximum index based on the number of slides to show
  const maxIndex = Math.max(0, testimonialData.length - slidesToShow);

  // Update slides to show based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure currentIndex is valid when slidesToShow changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [slidesToShow, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  // Calculate card width based on container width and slides to show
  const getCardWidth = () => {
    if (!trackRef.current) return 0;
    
    const containerWidth = trackRef.current.parentElement?.clientWidth || 0;
    // Account for margins (20px total per card)
    return (containerWidth / slidesToShow) - 20;
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    // Reset touch positions
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dragDistance = dragStartX - e.clientX;
    
    // Optional: Add visual feedback during dragging
    if (trackRef.current) {
      const currentTranslate = currentIndex * (getCardWidth() + 20);
      const dragOffset = Math.min(100, Math.max(-100, dragDistance));
      trackRef.current.style.transform = `translateX(-${currentTranslate + dragOffset}px)`;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dragDistance = dragStartX - e.clientX;
    
    if (dragDistance > 100) {
      handleNext();
    } else if (dragDistance < -100) {
      handlePrev();
    } else {
      // Reset to current position if drag wasn't far enough
      if (trackRef.current) {
        const currentTranslate = currentIndex * (getCardWidth() + 20);
        trackRef.current.style.transform = `translateX(-${currentTranslate}px)`;
      }
    }
    
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging && trackRef.current) {
      const currentTranslate = currentIndex * (getCardWidth() + 20);
      trackRef.current.style.transform = `translateX(-${currentTranslate}px)`;
      setIsDragging(false);
    }
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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

  const carouselVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="testimonials-section py-16"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 transition-opacity duration-700"
          style={{
            fontFamily: 'Cairo',
            background: 'linear-gradient(90deg, #1DBFFE 0%, #0B60B0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          variants={titleVariants}
        >
          What Our Clients Say About Us.....
        </motion.h2>
        
        <motion.div 
          className="testimonials-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          variants={carouselVariants}
        >
          <div 
            className="testimonials-wrapper"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              ref={trackRef}
              className="testimonials-track"
              style={{ 
                transform: `translateX(-${currentIndex * (getCardWidth() + 20)}px)`,
                transition: isDragging ? 'none' : 'transform 0.5s ease'
              }}
            >
              {testimonialData.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="testimonial-card"
                  style={{ width: `${getCardWidth()}px` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
          
          <button 
            className="carousel-button prev"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="carousel-button next"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
