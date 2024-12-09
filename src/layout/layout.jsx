import React from "react";
import { Home } from "../pages/pages";
import { Navbar } from "../components/components";

const layout = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-28 px-8">
        <Home />
      </main>
    </div>
  );
};

export default layout;
