import React, { useState, useEffect, useRef } from 'react';
import HeaderBg from '../assets/header.png';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && 
          !event.target.closest('.hamburger')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        style={{
          height: '673px',
          backgroundImage: `url(${HeaderBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scaleX(-1)',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Mobile-only heading */}
        <div className="mobile-heading">
          <h1>We Convert Concepts Into Technology</h1>
        </div>
        
        <div
          style={{
            transform: 'scaleX(-1)',
            width: '80%',
            position: 'absolute',
            top: 0,
            left: '10%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              marginTop: '30px',
              height: '98px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Ultra-Enhanced Hamburger Menu for Mobile */}
            <div
              className={`hamburger ${isSidebarOpen ? 'active' : ''}`}
              style={{
                display: 'none',
                zIndex: 1001,
              }}
              onClick={toggleSidebar}
            >
              <div className="hamburger-wrapper">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
                <div className="hamburger-glow"></div>
              </div>
            </div>

            {/* Logo Section */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  width: '71px',
                  height: '98px',
                  marginRight: '20px',
                }}
                className="logo-image"
              />
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 500,
                  fontFamily: "'Cairo', sans-serif",
                  color: '#fff',
                }}
              >
                Sammly
              </span>
            </div>

            <nav
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '25px',
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                textTransform: 'capitalize',
                color: '#fff',
              }}
            >
              <a 
                href="#" 
                className={`ultra-link ${activeLink === 'Home' ? 'active' : ''}`}
                onClick={() => setActiveLink('Home')}
              >
                <span data-text="Home">Home</span>
              </a>
              <a 
                href="#" 
                className={`ultra-link ${activeLink === 'Portfolio' ? 'active' : ''}`}
                onClick={() => setActiveLink('Portfolio')}
              >
                <span data-text="Portfolio">Portfolio</span>
              </a>
              <a 
                href="#" 
                className={`ultra-link ${activeLink === 'Contact Us' ? 'active' : ''}`}
                onClick={() => setActiveLink('Contact Us')}
              >
                <span data-text="Contact Us">Contact Us</span>
              </a>
            </nav>
            <button
              className="desktop-button pulse-btn"
              style={{
                width: '186px',
                height: '50px',
                backgroundColor: '#344CB7',
                color: '#fff',
                fontFamily: "'Cairo', sans-serif",
                fontSize: '20px',
                fontWeight: 600,
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span className="btn-text">AI Chat</span>
              <span className="btn-particles"></span>
            </button>
          </div>

          {/* Heading text - desktop only */}
          <div
            className="header-text desktop-only"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                color: '#fff',
                fontFamily: "'Post No Bills Colombo', sans-serif",
                fontWeight: 700,
                fontSize: '64px',
                maxWidth: '80%',
                margin: '0',
                textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
                boxShadow: '0px 4px 4px 0px #00000040',
                textAlign: 'center',
                borderRadius: '10px',
              }}
              className="main-heading"
            >
              We Convert Concepts Into Technology
            </h1>
          </div>
        </div>

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Post+No+Bills+Colombo:wght@700&display=swap');
            
/* Ultra-Enhanced Link Animation - Fixed Properly */
.ultra-link {
  position: relative;
  text-decoration: none;
  color: #fff;
  padding: 8px 15px;
  overflow: hidden;
  transition: all 0.4s ease;
  border-radius: 8px;
}

.ultra-link span {
  position: relative;
  z-index: 2;
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.ultra-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(52, 76, 183, 0.7), rgba(11, 96, 176, 0.7));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(11, 96, 176, 0.3);
}

.ultra-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, #0B60B0, transparent);
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.1s;
}

.ultra-link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.ultra-link:hover::after {
  transform: scaleX(1);
}

.ultra-link:hover span {
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.ultra-link.active {
  background: rgba(52, 76, 183, 0.3);
  box-shadow: 0 5px 15px rgba(11, 96, 176, 0.3);
}

.ultra-link.active span {
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}


            /* Ultra-Enhanced Hamburger Animation */
            .hamburger {
              cursor: pointer;
              padding: 10px;
              z-index: 1001;
              position: relative;
            }
            
            .hamburger-wrapper {
              width: 30px;
              height: 20px;
              position: relative;
              transition: all 0.3s ease;
              transform-style: preserve-3d;
            }
            
            .bar {
              display: block;
              position: absolute;
              height: 4px;
              border-radius: 4px;
              background-color: #fff;
              transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            }
            
            .bar-1 {
              top: 0;
              left: 0;
              width: 18px;
              transform-origin: left center;
            }
            
            .bar-2 {
              top: 8px;
              left: 0;
              width: 14px;
              transform-origin: center;
            }
            
            .bar-3 {
              bottom: 0;
              left: 0;
              width: 18px;
              transform-origin: left center;
            }
            
            .hamburger-glow {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 0;
              height: 0;
              background: radial-gradient(circle, rgba(11, 96, 176, 0.8) 0%, rgba(11, 96, 176, 0) 70%);
              border-radius: 50%;
              opacity: 0;
              transition: all 0.5s ease;
              z-index: -1;
            }
            
            .hamburger:hover .hamburger-wrapper {
              transform: rotate(5deg);
            }
            
            .hamburger:hover .hamburger-glow {
              width: 40px;
              height: 40px;
              opacity: 0.8;
            }
            
            .hamburger:hover .bar-1 {
              width: 24px;
              transform: translateY(-2px) rotate(10deg);
              background: linear-gradient(to right, #0B60B0, #344CB7);
              box-shadow: 0 0 10px rgba(11, 96, 176, 0.7);
            }
            
            .hamburger:hover .bar-2 {
              width: 20px;
              transform: scaleX(1.2) translateX(3px);
              background: linear-gradient(to right, #0B60B0, #344CB7);
              box-shadow: 0 0 10px rgba(11, 96, 176, 0.7);
            }
            
            .hamburger:hover .bar-3 {
              width: 24px;
              transform: translateY(2px) rotate(-10deg);
              background: linear-gradient(to right, #0B60B0, #344CB7);
              box-shadow: 0 0 10px rgba(11, 96, 176, 0.7);
            }
            
            /* Active state for hamburger (X animation) */
            .hamburger.active .hamburger-glow {
              width: 40px;
              height: 40px;
              opacity: 0.8;
              background: radial-gradient(circle, rgba(11, 96, 176, 0.8) 0%, rgba(11, 96, 176, 0) 70%);
            }
            
            .hamburger.active .bar-1 {
              transform: translateY(8px) rotate(45deg);
              width: 24px;
              background: linear-gradient(to right, #0B60B0, #344CB7);
              box-shadow: 0 0 10px rgba(11, 96, 176, 0.7);
            }
            
            .hamburger.active .bar-2 {
              opacity: 0;
              transform: translateX(-20px) scaleX(0);
            }
            
            .hamburger.active .bar-3 {
              transform: translateY(-8px) rotate(-45deg);
              width: 24px;
              background: linear-gradient(to right, #0B60B0, #344CB7);
              box-shadow: 0 0 10px rgba(11, 96, 176, 0.7);
            }
            
            /* Ultra-Enhanced Close Button Animation */
            .sidebar-close {
              position: absolute;
              top: 20px;
              left: 20px;
              width: 40px;
              height: 40px;
              cursor: pointer;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              transition: all 0.4s ease;
              transform-style: preserve-3d;
              perspective: 800px;
            }
            
            .sidebar-close::before,
            .sidebar-close::after {
              content: '';
              position: absolute;
              width: 20px;
              height: 3px;
              background-color: white;
              border-radius: 3px;
              transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            }
            
            .sidebar-close::before {
              transform: rotate(45deg);
            }
            
            .sidebar-close::after {
              transform: rotate(-45deg);
            }
            
                     .sidebar-close:hover {
              transform: rotateY(180deg);
              background: rgba(11, 96, 176, 0.2);
              box-shadow: 0 0 15px rgba(11, 96, 176, 0.5);
            }
            
            .sidebar-close:hover::before,
            .sidebar-close:hover::after {
              background: linear-gradient(to right, #0B60B0, #344CB7);
              box-shadow: 0 0 10px rgba(11, 96, 176, 0.7);
            }
            
            /* Enhanced Button Animation */
            .pulse-btn {
              position: relative;
              overflow: hidden;
              transition: all 0.4s ease;
              background: linear-gradient(45deg, #344CB7, #0B60B0);
              z-index: 1;
            }
            
            .btn-text {
              position: relative;
              z-index: 3;
              transition: all 0.3s ease;
            }
            
            .pulse-btn::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 0;
              height: 0;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              transform: translate(-50%, -50%);
              transition: all 0.5s ease;
              z-index: 2;
            }
            
            .pulse-btn:hover {
              box-shadow: 0 0 20px rgba(52, 76, 183, 0.7);
              transform: translateY(-3px);
            }
            
            .pulse-btn:hover::before {
              width: 300px;
              height: 300px;
              opacity: 0;
            }
            
            .pulse-btn:hover .btn-text {
              letter-spacing: 1px;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
            }
            
            .btn-particles {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
              z-index: 1;
            }
            
            .btn-particles::before,
            .btn-particles::after {
              content: '';
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
              background-image: 
                radial-gradient(circle, #fff 1px, transparent 1px),
                radial-gradient(circle, #fff 1px, transparent 1px);
              background-position: 0 0, 10px 10px;
              background-size: 20px 20px;
              opacity: 0;
              transition: opacity 0.4s ease, transform 0.8s ease;
            }
            
            .btn-particles::before {
              left: -50%;
              transform: translateX(-20%);
            }
            
            .btn-particles::after {
              left: 50%;
              transform: translateX(20%);
            }
            
            .pulse-btn:hover .btn-particles::before,
            .pulse-btn:hover .btn-particles::after {
              opacity: 0.3;
              transform: translateX(0);
            }
            
            /* Logo Animation */
            .logo-image {
              transition: all 0.5s ease;
            }
            
            .logo-image:hover {
              transform: scale(1.05) rotate(5deg);
              filter: drop-shadow(0 0 10px rgba(52, 76, 183, 0.5));
            }
            
            /* Main Heading Animation */
            .main-heading {
              position: relative;
              overflow: hidden;
              transition: all 0.5s ease;
            }
            
            .main-heading::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.2) 50%, 
                transparent 100%);
              transition: all 1.5s ease;
              z-index: 1;
              pointer-events: none;
            }
            
            .main-heading:hover::before {
              left: 100%;
            }
            
            /* Mobile heading styles */
            .mobile-heading {
              display: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 10;
              transform: scaleX(-1);
              justify-content: center;
              align-items: center;
              text-align: center;
              padding: 0 20px;
              pointer-events: none;
            }
            
            .mobile-heading h1 {
              color: #fff;
              font-family: 'Post No Bills Colombo', sans-serif;
              font-weight: 700;
              font-size: 32px;
              margin: 0;
              text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
              box-shadow: 0px 4px 4px 0px #00000040;
              text-align: center;
              max-width: 100%;
            }
            
            /* Enhanced Mobile Sidebar Links */
            .mobile-sidebar .ultra-link {
              width: 80%;
              text-align: center;
              margin: 5px 0;
              padding: 10px;
            }
            
            @media (min-width: 768px) {
              .mobile-sidebar {
                display: none !important;
              }
              .mobile-heading {
                display: none !important;
              }
            }
            
            @media (max-width: 767px) {
              .mobile-heading {
                display: flex !important;
              }
              .desktop-only {
                display: none !important;
              }
              .hamburger {
                display: block !important;
              }
              div[style*="justify-content: space-between"] {
                width: 100% !important;
                padding: 0 20px !important;
                justify-content: space-between !important;
              }
              .desktop-nav, .desktop-button {
                display: none !important;
              }
              div[style*="display: flex; align-items: center;"] {
                margin: 0 !important;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
              }
              span[style*="font-size: 32px"] {
                display: none !important;
              }
            }
          `}
        </style>
      </header>

      {/* Mobile Sidebar with ultra-enhanced animations */}
      <div
        ref={sidebarRef}
        className="mobile-sidebar"
        style={{
          position: 'fixed',
          top: 0,
          left: isSidebarOpen ? '0' : '-329px',
          width: '329px',
          height: '100%',
          backgroundColor: '#020710',
          borderRight: '1px solid #0B60B0',
          borderTopRightRadius: '116px',
          zIndex: 1000,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'left 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          boxShadow: isSidebarOpen ? '5px 0 25px rgba(11, 96, 176, 0.3)' : 'none',
        }}
      >
        <div
          className="sidebar-close"
          onClick={toggleSidebar}
        >
        </div>
        <img
          src={Logo}
          alt="Logo"
          className="logo-image"
          style={{
            width: '71px',
            height: '98px',
            marginBottom: '40px',
            marginTop: '40px'
          }}
        />
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            width: '100%',
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 600,
            fontSize: '20px',
            color: '#fff',
          }}
        >
          <a 
            href="#" 
            className={`ultra-link ${activeLink === 'Home' ? 'active' : ''}`}
            onClick={() => setActiveLink('Home')}
          >
            <span data-text="Home">Home</span>
          </a>
          <a 
            href="#" 
            className={`ultra-link ${activeLink === 'Portfolio' ? 'active' : ''}`}
            onClick={() => setActiveLink('Portfolio')}
          >
            <span data-text="Portfolio">Portfolio</span>
          </a>
          <a 
            href="#" 
            className={`ultra-link ${activeLink === 'Contact Us' ? 'active' : ''}`}
            onClick={() => setActiveLink('Contact Us')}
          >
            <span data-text="Contact Us">Contact Us</span>
          </a>
        </nav>
        <button
          className="pulse-btn"
          style={{
            width: '186px',
            height: '50px',
            backgroundColor: '#344CB7',
            color: '#fff',
            fontFamily: "'Cairo', sans-serif",
            fontSize: '20px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span className="btn-text">AI Chat</span>
          <span className="btn-particles"></span>
        </button>
      </div>
    </>
  );
};

export default Header;

