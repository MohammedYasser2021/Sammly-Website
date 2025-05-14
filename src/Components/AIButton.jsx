import React from 'react';

const AIButton = () => {
  return (
    <button 
      className="text-white transition-all duration-300 hover:opacity-90"
      style={{
        width: '186px',
        height: '50px',
        background: '#344CB7',
        borderRadius: '5px',
        fontSize: '20px',
        fontWeight: 700,
      }}
    >
      AI Chat
    </button>
  );
};

export default AIButton;