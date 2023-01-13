import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
