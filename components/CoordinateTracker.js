"use client";

import { useState } from "react";

export default function CoordinateTracker() {
  // State to store all clicked points
  const [clickedPoints, setClickedPoints] = useState([]);

  // Function triggered on click to update the points
  const handleClick = (event) => {
    const x = event.clientX; // X coordinate of the click
    const y = event.clientY; // Y coordinate of the click

    // Add the new click to the list of points
    setClickedPoints((prevPoints) => [...prevPoints, { x, y }]);
  };

  return (
    <div
      onClick={handleClick} // Attach the click handler
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        cursor: "crosshair",
      }}
    >
      {/* Vertical hairline */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "1px",
          height: "100%",
          backgroundColor: "black",
          transform: "translateX(-50%)",
        }}
      />
      {/* Horizontal hairline */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "1px",
          backgroundColor: "black",
          transform: "translateY(-50%)",
        }}
      />
      {/* Render dots for each clicked point */}
      {clickedPoints.map((point, index) => (
        <div
          key={index} // Each dot needs a unique key
          style={{
            position: "absolute",
            top: point.y - 5, // Offset to center the dot
            left: point.x - 5, // Offset to center the dot
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        />
      ))}
      {/* Coordinates display */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "10px 0",
          fontSize: "16px",
        }}
      >
        {clickedPoints.length > 0
          ? `Last Coordinates: (X: ${
            clickedPoints[clickedPoints.length - 1].x
          }, Y: ${clickedPoints[clickedPoints.length - 1].y})`
          : "Click on the screen to record points!"}
      </div>
    </div>
  );
}