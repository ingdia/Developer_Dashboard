import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon,  } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex gap-2">
      {/* Theme Switcher */}
      
      <button
        aria-label="Toggle Dark Mode"
        className="p-2 rounded-full transition-colors"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );
}