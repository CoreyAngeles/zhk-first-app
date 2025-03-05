import React, { useState } from "react";
import styles from "./FloorButton.module.scss";
import { Link } from "react-router-dom";

const FloorButton = ({ classOfCoords, id, setPathStatus }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Процент по X
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Процент по Y
    setTooltipPosition({ x, y });
  };

  const changePathStatusOnIdFloor = (id) => {
    setPathStatus(`${id} Этаж`);
  };

  return (
    <>
      <Link
        to="/viewFromTheTopPage"
        onClick={() => {
          changePathStatusOnIdFloor(id);
        }}
      >
        <div
          id={id}
          className={`${styles["main-choseFloorBtn"]} ${classOfCoords}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        ></div>
      </Link>
      {isHovered ? (
        <div
          style={{
            position: "absolute",
            left: `${tooltipPosition.x + 0.5}%`,
            top: `${tooltipPosition.y + 0.5}%`,
            backgroundColor: "white",
            padding: "5px 10px",
            zIndex: 15,
            borderRadius: "10px",
          }}
        >
          <p>{`${id} Этаж`}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FloorButton;
