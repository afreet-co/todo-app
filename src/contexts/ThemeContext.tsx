import { createContext, FC, useContext, useEffect, useState } from "react";
import { themes, ThemeSchema } from "../themes";

export type ThemeType = 0 | 1;

export type ThemeContextType = {
  theme: ThemeSchema;
  themeIndex: ThemeType;
  toggleTheme: () => void;
};

const initialValue: ThemeContextType = {
  theme: themes[0],
  themeIndex: 0,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialValue);
export const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(themes[0]);
  const [themeIndex, setThemeIndex] = useState<ThemeType>(0);

  const toggleTheme = () => {
    const next = themeIndex === 1 ? 0 : 1;
    setTheme(themes[next]);
    setThemeIndex(next);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeIndex,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
