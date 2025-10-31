import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-5 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        <span className="text-amber-600 dark:text-amber-400">Diane's </span> Dashboard
      </h1>

      <div className="hover:scale-110 transition-transform duration-200">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Navbar;
