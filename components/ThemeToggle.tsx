"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border-2 border-teal-500 bg-teal-600 text-white transition-all duration-200 hover:bg-teal-500 hover:scale-105"
    >
      {theme === "light" ? <BiMoon className="text-2xl" /> : <BiSun className="text-2xl" />}
    </button>
  );
};

export default ThemeToggle;
