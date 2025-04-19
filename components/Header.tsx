import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

export default function Header() {
  const { colorScheme, toggleColorScheme } = useColorSchemeContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MASTER</Text>
      <Switch
        value={colorScheme === "dark"}
        onValueChange={toggleColorScheme}
        thumbColor="#fff"
        trackColor={{ false: "#ccc", true: "#555" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#392466", // Color de fondo
    height: 90,
  },
  title: {
    fontSize: 24, // Tamaño más grande para el texto
    fontWeight: "bold",
    color: "#fff", // Texto en blanco
  },
});