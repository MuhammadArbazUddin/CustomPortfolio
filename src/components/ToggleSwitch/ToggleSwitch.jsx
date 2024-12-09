import React, { useState, useEffect } from "react";

const ToggleSwitch = () => {
  const [theme, setTheme] = useState("cupcake");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "cupcake");
  }, []);

  const handleChange = () => {
    const newTheme = theme === "cupcake" ? "dark" : "cupcake";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "dark"}
        onChange={handleChange}
      />
    </>
  );
};

export default ToggleSwitch;
