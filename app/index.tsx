import { View, StyleSheet, Text } from "react-native";
import { SplashImage } from "@/components/SplashImage";
import Header from "@/components/Header";
import Carrusel from "@/components/Carrusel";
import { Link } from "expo-router";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

export default function Index() {
  const { colorScheme } = useColorSchemeContext(); // Obtén el esquema de color actual

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* Imagen a la izquierda */}
        <View style={styles.imageContainer}>
          <SplashImage />
        </View>

        {/* Contenido a la derecha */}
        <View style={styles.contentContainer}>
          <Text
            style={[
              styles.title,
              { color: colorScheme === "dark" ? "#fff" : "#000" }, // Cambia el color del texto dinámicamente
            ]}
          >
            TU MEJOR FORMA DE PREPARARTE PARA UN EXAMEN
          </Text>
          <Link href="/login" style={[styles.buttonPrimary, { backgroundColor: colorScheme === "dark" ? "#6a0dad" : "#8a2be2" }]}>
            <Text style={[styles.buttonText, { color: colorScheme === "dark" ? "#fff" : "#000" }]}>EMPECEMOS!</Text>
          </Link>
          <Link href="/login" style={[styles.buttonSecondary, { borderColor: colorScheme === "dark" ? "#6a0dad" : "#8a2be2" }]}>
            <Text style={[styles.buttonText, { color: colorScheme === "dark" ? "#fff" : "#000" }]}>YA TENGO MI CUENTA!</Text>
          </Link>
        </View>
      </View>

      {/* Carrusel y líneas en la parte inferior */}
      <View style={styles.carouselContainer}>
        <View style={[styles.line, { backgroundColor: colorScheme === "dark" ? "#6a0dad" : "#8a2be2" }]} />
        <Carrusel />
        <View style={[styles.line, { backgroundColor: colorScheme === "dark" ? "#6a0dad" : "#8a2be2" }]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Coloca los elementos en fila
    alignItems: "center", // Centra verticalmente
    justifyContent: "space-between", // Separa los elementos horizontalmente
    paddingHorizontal: 40, // Espaciado horizontal general
  },
  imageContainer: {
    flex: 1, // Ocupa la mitad izquierda del espacio
    alignItems: "center", // Centra la imagen horizontalmente dentro de su contenedor
    justifyContent: "center", // Centra verticalmente
    paddingRight: 0, // Espaciado entre la imagen y el contenido
  },
  splashImage: {
    width: 300, // Ancho de la imagen
    height: 300, // Altura de la imagen
    resizeMode: "contain", // Ajusta la imagen dentro del contenedor sin recortarla
  },
  contentContainer: {
    flex: 1, // Ocupa la mitad derecha del espacio
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente el contenido
    paddingLeft: 20, // Espaciado interno
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center", // Alinea el texto al centro
    marginBottom: 20, // Espaciado debajo del título
  },
  buttonPrimary: {
    paddingVertical: 10, // Altura del botón
    paddingHorizontal: 20, // Ancho del botón
    borderRadius: 8, // Bordes redondeados
    marginBottom: 10, // Espaciado entre botones
    alignItems: "center",
    width: "80%", // Ancho del botón relativo al contenedor
  },
  buttonSecondary: {
    borderWidth: 2,
    paddingVertical: 10, // Altura del botón
    paddingHorizontal: 20, // Ancho del botón
    borderRadius: 8, // Bordes redondeados
    alignItems: "center",
    width: "80%", // Ancho del botón relativo al contenedor
  },
  buttonText: {
    fontSize: 16, // Tamaño del texto
    fontWeight: "bold",
  },
  carouselContainer: {
    width: "100%", // El ancho del carrusel y las líneas es del 100% de la pantalla
    alignSelf: "center", // Centra el carrusel horizontalmente
    paddingVertical: 10,
    marginBottom: 40, // Margen entre la línea inferior y el final de la página
  },
  line: {
    width: "50%", // Las líneas ocupan el 50% del ancho de la pantalla
    height: 4, // Altura de las líneas
    alignSelf: "center", // Centra las líneas horizontalmente
    marginBottom: 10,
    marginTop: 10, // Espacio entre la línea y el carrusel
  },
});