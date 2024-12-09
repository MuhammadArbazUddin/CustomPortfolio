import React from "react";
import { MaskText } from "../../components/components";
import { motion } from "framer-motion";

const Home = () => {
  const phrases = [
    "Hi, I'm Arbaz",
    "Frontend Developer",
    "Specializing in React",
    "Creating Seamless Web Experiences",
  ];

  return (
    <div className="relative pl-12">
      <motion.div
        className="absolute left-0 top-0 w-1 bg-primary-content"
        initial={{ height: "4px" }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <MaskText phrases={phrases}></MaskText>
    </div>
  );
};

export default Home;
