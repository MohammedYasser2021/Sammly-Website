import React from 'react';

const ServiceItem = ({ icon: Icon, title, bulletPoints }) => {
  return (
    <div className="w-[300px] border-2 border-primaryBlue rounded-tr-custom rounded-bl-custom p-6 mx-auto">
      <div className="flex justify-center mb-4">
        <div className="relative w-[60px] h-[60px] flex items-center justify-center">
          <div className="absolute w-[48.29px] h-[48.29px] top-[6.35px] left-[6.35px] border-[1.5px] border-lightBlue rounded-full"></div>
          <Icon className="text-lightBlue w-6 h-6" />
        </div>
      </div>
      
      <h3 className="font-cairo font-semibold text-[20px] text-center text-white mb-4">{title}</h3>
      
      <ul className="space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-lightBlue mr-2 mt-1">•</span>
            <span className="font-cairo font-normal text-[16px] text-gray-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceItem;