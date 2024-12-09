import React from "react";

const AboutMe = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div className="flex justify-between items-center h-screen">
      <div
        className="flex-1 text-7xl"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          facilis in optio omnis.
        </h1>
      </div>
      <div
        className="flex-1"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          src="https://images.unsplash.com/photo-1587944214730-0b9f98b4ccb0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Example"
          className="transition-transform w-64 duration-300 hover:scale-125"
        />
      </div>
    </div>
  );
};

export default AboutMe;
