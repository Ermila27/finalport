import React, { useRef, useState } from "react";

export default function ImageRevealWithPen({ imageUrl }) {
  const containerRef = useRef(null);
  const [penPos, setPenPos] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPenPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setPenPos((pos) => ({ ...pos, visible: false }));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        display: "inline-block",
        width: "400px",
        height: "300px",
        overflow: "hidden",
      }}
    >
      <img
        src={imageUrl}
        alt="Reveal"
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      {penPos.visible && (
        <span
          style={{
            position: "absolute",
            left: penPos.x - 12,
            top: penPos.y - 12,
            pointerEvents: "none",
            fontSize: "24px",
            transition: "left 0.05s, top 0.05s",
            color: "#00eaff",
            zIndex: 2,
          }}
        >
          🖊️
        </span>
      )}
    </div>
  );
}