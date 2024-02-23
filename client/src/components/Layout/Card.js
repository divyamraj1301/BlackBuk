import React, { useState } from "react";

const Card = ({ imageSrc, text }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        overflow: "hidden",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt="Card"
        style={{
          width: "100%",
          height: "100%",
          transition: "filter 0.3s ease",
          filter: hovered ? "blur(4px)" : "none",
        }}
      />
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            pointerEvents: "none", // to prevent text from being interactive
          }}
        >
          {text.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Card;
