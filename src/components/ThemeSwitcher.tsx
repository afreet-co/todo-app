import React, { useState } from "react";
import { Moon } from "./icons/moon";
import { Sun } from "./icons/sun";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(true);
  return (
    <button onClick={() => setTheme((prev) => !prev)}>
      {theme ? <Sun /> : <Moon />}
    </button>
  );
};
