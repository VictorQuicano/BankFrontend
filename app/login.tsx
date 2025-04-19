import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Header from "@/components/Header";

export default function Login() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* Columna de Ingresar */}
        <View style={styles.column}>
          <Text style={styles.title}>Ingresar</Text>
          <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#aaa" />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Contraseña"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>¿Se te olvidó?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        {/* Separador */}
        <View style={styles.separator} />

        {/* Columna de Registrarse */}
        <View style={styles.column}>
          <Text style={styles.title}>Registrarse</Text>
          <TextInput style={styles.input} placeholder="Primer Nombre" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Apellidos" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#aaa" />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Contraseña"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
            <TouchableOpacity>
              <Text style={styles.eyeIcon}>👁️</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Confirmación de Contraseña"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
            <TouchableOpacity>
              <Text style={styles.eyeIcon}>👁️</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Coloca las columnas en fila
    padding: 20,
  },
  column: {
    flex: 1, // Cada columna ocupa la mitad del espacio
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff", // Texto blanco
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#333", // Fondo gris oscuro
    color: "#fff", // Texto blanco
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  passwordInput: {
    flex: 1,
  },
  forgotPassword: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 10,
  },
  eyeIcon: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#6a0dad", // Botón morado
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // Texto blanco
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    width: 1, // Línea divisoria
    backgroundColor: "#6a0dad", // Color morado
    marginHorizontal: 10,
  },
});