import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import { Moon } from "./icons/moon";
import { Sun } from "./icons/sun";

export const ThemeSwitcher = () => {
  const { themeIndex, toggleTheme } = useThemeContext();
  return (
    <button onClick={() => toggleTheme()}>
      {themeIndex == 0 ? <Sun /> : <Moon />}
    </button>
  );
};
