"use client";

import { useState } from "react";

export default function CoordinateTracker() {
  // State to store click coordinates
  const [clickCoordinates, setClickCoordinates] = useState({ x: 0, y: 0 });

  // Function triggered on click to update the coordinates
  const handleClick = (event) => {
    const x = event.clientX; // X coordinate of the click
    const y = event.clientY; // Y coordinate of the click
    setClickCoordinates({ x, y });
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
      {/* Click coordinates display */}
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
        Coordinates: (X: {clickCoordinates.x}, Y: {clickCoordinates.y})
      </div>
    </div>
  );
}