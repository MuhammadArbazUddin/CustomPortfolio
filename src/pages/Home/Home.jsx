import React from "react";
import { MaskText } from "../../components/components";

const Home = () => {
  const phrases = [
    "Hi, I'm Arbaz",
    "Frontend Developer",
    "Specializing in React",
    "Creating Seamless Web Experiences",
  ];
  return (
    <div className="relative pl-12 border-l-4 border-l-secondary">
      <MaskText phrases={phrases}></MaskText>
    </div>
  );
};

export default Home;
