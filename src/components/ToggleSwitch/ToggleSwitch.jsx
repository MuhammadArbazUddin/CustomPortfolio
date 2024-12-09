import React, { useState, useEffect } from "react";

const ToggleSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = () => {
    const newTheme = theme === "light" ? "luxury" : "light";
    setTheme(newTheme);
  };

  return (
    <input
      type="checkbox"
      className="toggle"
      checked={theme === "luxury"}
      onChange={handleChange}
    />
  );
};

export default ToggleSwitch;
