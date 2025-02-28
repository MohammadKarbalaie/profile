"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  BiBriefcase,
  BiCode,
  BiHome,
  BiMailSend,
  BiRightArrowAlt,
} from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa";


const HeaderLeft = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="md:flex-1">
      <div
        className={`min-h-screen top-0 hidden md:sticky
        md:flex items-center justify-center
        ${theme === "dark" ? "bg-white text-black" : "bg-[#5662f6] text-white"}`}
      >
        <div className="absolute top-6 left-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only peer"
            />
            <div
              className="w-11 h-6 py-4 px-8 bg-gray-200 rounded-full peer-checked:bg-gray-800 
              peer-focus:ring-2 peer-focus:ring-teal-500 dark:peer-focus:ring-teal-300
              peer relative transition-colors duration-300"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-7 h-7 rounded-full bg-white
                transform transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-8" : ""
                }`}
              >
                {theme === "light" ? (
                  <FaSun className="text-yellow-500 mx-auto mt-[7px]" />
                ) : (
                  <FaMoon className="text-gray-600 mx-auto mt-[7px]" />
                )}
              </div>
            </div>
          </label>
        </div>
        <ul className="flex flex-col gap-10">
          <li
            className="flex
            items-center justify-center cursor-pointer
            font-medium transition-all duration-200
            group sm:text-lg md:text-xl xl:text-3xl"
          >
            <BiRightArrowAlt
              className="text-4xl
              -translate-x-5 opacity-0 transform
              transition-all duration-200 
              group-hover:opacity-100 
              group-hover:translate-x-0"
            />

            <Link
              href="/"
              className="transition-all duration-200
              hover:translate-x-3"
            >
              Home
            </Link>
          </li>
          {["Experience", "Project", "Contact"].map((item) => (
            <li
              key={item}
              className="flex
              items-center justify-center cursor-pointer
              font-medium transition-all duration-200
              group sm:text-lg md:text-xl xl:text-3xl"
            >
              <BiRightArrowAlt
                className="text-4xl
                -translate-x-5 opacity-0 transform
                transition-all duration-200 
                group-hover:opacity-100 
                group-hover:translate-x-0"
              />

              <a
                href={`../${item}`}
                className="transition-all duration-200
                hover:translate-x-3"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-2 left-1 w-full">
          <p
            className="flex items-center justify-center
    py-2 px-4 text-sm md:text-base lg:text-lg xl:text-xl font-light"
          >
            Copyright &copy; 2025
          </p>
        </div>
      </div>
      <div
        className={`fixed left-0 right-0 top-0 z-10
  flex justify-evenly p-5 md:hidden
  ${theme === "dark" ? "bg-white text-black" : "bg-[#5662f6] text-white"}`}
      >
        <button
          onClick={toggleTheme}
          className={`-ml-5 flex items-center justify-center w-10 h-10 rounded-full
    ${
      theme === "dark"
        ? "bg-gray-800 text-yellow-500"
        : "bg-gray-200 text-gray-600"
    } 
    shadow-md transition-colors duration-300`}
        >
          {theme === "dark" ? (
            <FaMoon className="text-xl" />
          ) : (
            <FaSun className="text-xl" />
          )}
        </button>

        <Link href="/" className="flex flex-col items-center justify-center">
          <BiHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="../Experience"
          className="flex flex-col items-center justify-center"
        >
          <BiBriefcase className="text-2xl" />
          <span className="text-xs">Experience</span>
        </Link>
        <Link
          href="../Project"
          className="flex flex-col items-center justify-center"
        >
          <BiCode className="text-2xl" />
          <span className="text-xs">Project</span>
        </Link>
        <Link
          href="../Contact"
          className="flex flex-col items-center justify-center"
        >
          <BiMailSend className="text-2xl" />
          <span className="text-xs">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLeft;
