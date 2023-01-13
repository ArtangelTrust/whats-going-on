import { createContext } from "react";

const ThemeContext = createContext({
  currentTheme: null,
  setCurrentTheme: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
  themeItems: null,
  setThemeItems: () => {
    throw Error("You forgot to wrap this in a Provider object");
  }
});

export default ThemeContext;