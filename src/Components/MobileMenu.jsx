import React from "react";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import AIButton from "./AIButton";

const MobileMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="fixed top-0 right-0 h-screen z-40 bg-darkBg border border-menuBlue"
      style={{
        width: "329px",
        borderTopRightRadius: "118px",
      }}
    >
      <div className="flex flex-col items-center pt-32 px-6">
        <NavLinks isMobile={true} />
        <div className="mt-12">
          <AIButton />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
