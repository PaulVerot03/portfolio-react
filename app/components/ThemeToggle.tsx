import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="p-3 relative border rounded-md flex items-center justify-center">
      <Sun className="h-[1.2rem] w-[1.2rem] absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
      <Moon className="h-[1.2rem] w-[1.2rem] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}