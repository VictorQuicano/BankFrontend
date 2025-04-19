import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Appearance, Platform } from "react-native";

type ColorScheme = "light" | "dark";

interface ColorSchemeContextType {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(
  undefined
);

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const getSystemColorScheme = (): ColorScheme =>
    Platform.OS === "web"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : Appearance.getColorScheme() || "light";

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    getSystemColorScheme()
  );

  useEffect(() => {
    if (Platform.OS === "web") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = () => {
        setColorScheme(mediaQuery.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        if (colorScheme) setColorScheme(colorScheme);
      });

      return () => subscription.remove();
    }
  }, []);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorSchemeContext = () => {
  const context = useContext(ColorSchemeContext);
  if (!context) {
    throw new Error(
      "useColorSchemeContext must be used within a ColorSchemeProvider"
    );
  }
  return context;
};