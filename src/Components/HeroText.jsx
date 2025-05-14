import React from "react";
import SVector from "./SVector";
import SecondVector from "./SecondVector";

const Logo = ({ isMobile }) => {
  return (
    <div className="relative">
      <div className="relative">
        <SVector />
        <SecondVector />
        <div
          className={`font-post-bills font-medium ${
            isMobile ? "text-3xl" : "text-4xl"
          }`}
          style={{
            position: "relative",
            zIndex: 10,
            fontWeight: 500,
          }}
        >
          sammly
        </div>
      </div>
    </div>
  );
};

export default Logo;
