import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { ColorSchemeProvider, useColorSchemeContext } from "@/context/ColorSchemeContext";

export default function RootLayout() {
  return (
    <ColorSchemeProvider>
      <InnerLayout />
    </ColorSchemeProvider>
  );
}

function InnerLayout() {
  const { colorScheme } = useColorSchemeContext();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colorScheme === "dark" ? DarkTheme.colors.background : DefaultTheme.colors.background,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Session" }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}