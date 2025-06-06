import { useEffect, useState } from "react";
import { Appearance, ColorSchemeName, Platform } from "react-native";

type ColorScheme = "light" | "dark";

export function useColorScheme() {
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

  return { colorScheme, toggleColorScheme };
}