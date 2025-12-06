"use client";

import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme at first render
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <button
      key={darkMode ? "dark" : "light"}
      onClick={toggleTheme}
      className="
        w-12 h-6 flex items-center 
        bg-gray-300 dark:bg-gray-700 
        rounded-full p-1 transition-all cursor-pointer
      "
    >
      <div
        className={`
          w-5 h-5 rounded-full shadow-md transform transition-all
          ${darkMode ? "translate-x-6 bg-black" : "bg-white"}
        `}
      ></div>
    </button>
  );
}
