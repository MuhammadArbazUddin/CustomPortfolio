import React, { useState, useEffect } from "react";
import { Home } from "../pages/pages";
import { AboutMe, Navbar, CustomCursor } from "../components/components";

const Layout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="relative">
      <CustomCursor isHovered={isHovered} />
      <Navbar />
      <main className="pt-28 px-8">
        <Home />
        <AboutMe
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </main>
    </div>
  );
};

export default Layout;
