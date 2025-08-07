"use client";

import { createContext, useState, ReactNode } from "react";

interface ThemeContextType {
  mode: string;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggle: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
