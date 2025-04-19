import { useEffect, useState } from "react";
import { Appearance, ColorSchemeName } from "react-native";

type ColorScheme = "light" | "dark";

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    Appearance.getColorScheme() || "light"
  );

  // Escucha los cambios en el esquema de color del sistema
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) setColorScheme(colorScheme);
    });

    // Limpia el listener al desmontar
    return () => subscription.remove();
  }, []);

  // Alterna entre los modos light y dark manualmente
  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { colorScheme, toggleColorScheme };
}