import React from "react";

const NavLinks = ({ isMobile }) => {
  const links = ["Home", "Services", "About", "Contact"];

  return (
    <nav className={`flex ${isMobile ? "flex-col space-y-8" : "space-x-8"}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={`#${link.toLowerCase()}`}
          className={`
            text-white font-cairo 
            ${isMobile ? "text-center text-xl font-semibold" : "text-xl"} 
            hover:text-accent transition-all duration-300
          `}
          style={{
            fontSize: "20px",
            fontWeight: isMobile ? 600 : 400,
            width: !isMobile ? "72px" : "auto",
            height: !isMobile ? "1px" : "auto",
            textTransform: "capitalize",
          }}
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
