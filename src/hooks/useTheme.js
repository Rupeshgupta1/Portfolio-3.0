import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// index.html applies the saved theme before first paint; read it back from there.
const readTheme = () =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage can be blocked (private mode) */
    }
  }, [theme]);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    setTimeout(() => root.classList.remove("theme-transition"), 400);
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return [theme, toggle];
};
