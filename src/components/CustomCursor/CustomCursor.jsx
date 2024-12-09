import React, { useState, useEffect } from "react";

const CustomCursor = ({ isHovered }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPos({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const updateFollowerPosition = () => {
      setFollowerPos((prevPos) => {
        const deltaX = (pos.x - prevPos.x) / 9;
        const deltaY = (pos.y - prevPos.y) / 9;
        return { x: prevPos.x + deltaX, y: prevPos.y + deltaY };
      });
    };

    const animationInterval = setInterval(updateFollowerPosition, 16);

    return () => {
      clearInterval(animationInterval);
    };
  }, [pos]);

  return (
    <div
      className="cursor-follower z-40 mix-blend-difference"
      style={{
        left: `${followerPos.x}px`,
        top: `${followerPos.y}px`,
        backgroundColor: "white",
        width: isHovered ? "100px" : "60px",
        height: isHovered ? "100px" : "60px",
        borderRadius: "50%",
        position: "absolute",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s, height 0.2s",
      }}
    ></div>
  );
};

export default CustomCursor;
