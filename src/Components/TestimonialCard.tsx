import React from 'react';
import { TestimonialType } from './testimonialData';
import { FaQuoteRight } from "react-icons/fa6";

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div>
      <div className="testimonial-content">
        <div className="testimonial-image-container" style={{ position: 'relative' }}>
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="testimonial-image" 
          />
          <div 
            className="testimonial-quote-icon" 
            style={{ 
              position: 'absolute', 
              right: '-100px', 
              top: '40%', 
              transform: 'translateY(-50%)'
            }}
          >
            <FaQuoteRight 
              style={{ 
                width: '53px', 
                height: '59px', 
                color: '#0B60B033' 
              }} 
            />
          </div>
        </div>
        
        <h3 className="testimonial-name">{testimonial.name}</h3>
        
        <p className="testimonial-text">
          {testimonial.text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
