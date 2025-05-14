import React from 'react';

const HamburgerIcon = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="flex flex-col justify-between w-6 h-5 relative z-50"
      aria-label="Toggle menu"
    >
      <span 
        className="w-6 h-0.5 bg-menuBlue transition-all duration-300"
      ></span>
      <span 
        className="w-6 h-0.5 bg-menuBlue transition-all duration-300"
      ></span>
      <span 
        className="w-6 h-0.5 bg-menuBlue transition-all duration-300"
      ></span>
    </button>
  );
};

export default HamburgerIcon;