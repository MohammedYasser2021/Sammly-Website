import React from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-[#030915] text-white py-8">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 transform transition-transform duration-500 hover:scale-105">
            <p className="font-poppins font-medium text-[18px] leading-none text-center md:text-left text-white">
              2025 All rights reserved to <span className="text-[#0b60b0] font-bold">SAMMLY</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="font-poppins font-medium text-[18px] text-white mb-3 sm:mb-0">
              Follow us:
            </p>
            <div className="flex items-center gap-5">
              <a 
                href="#" 
                className="bg-[#0b60b0] hover:bg-[#4db5ff] p-3 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-[#0b60b0] hover:bg-[#4db5ff] p-3 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-[#0b60b0] hover:bg-[#4db5ff] p-3 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="#" 
                className="bg-[#0b60b0] hover:bg-[#4db5ff] p-3 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
