import React, { useState } from "react";
import { Card, Col, Row } from "antd";

export default function CategorySelection({ categories, getAllProductsByCat }) {
  // State to track hover state for each column
  const [hoverStates, setHoverStates] = useState([false, false, false]);

  // Function to handle mouse enter event
  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <Row gutter={[16, 16]} justify="center" align="middle">
      {categories.map((category, index) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={index}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              style={{
                height: "140px",
                width: "100%",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: "15px",
                background: "rgba(0, 0, 0, 0.39)",
                opacity: hoverStates[index] ? 1 : 0,
                transition: "opacity 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => {
                getAllProductsByCat(category._id);
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                borderRadius: "15px",
                transform: "translate(-50%, -50%)",
                opacity: hoverStates[index] ? 1 : 0,
                transition: "opacity 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => {
                getAllProductsByCat(category._id);
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "24px",
                  textAlign: "center",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {category?.name}
              </p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
