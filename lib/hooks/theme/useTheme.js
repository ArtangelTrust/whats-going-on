import { useContext } from "react";

import ThemeContext from "./ThemeContext";

export default function useTheme() {
  const {
    currentTheme,
    setCurrentTheme
  } = useContext(ThemeContext);

  const updateTheme = (newTheme = "theme-default") => {
    setCurrentTheme(newTheme);
  };

  return {
    currentTheme,
    updateTheme,
  };
}
