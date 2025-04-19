import React, { useRef, useEffect } from "react";
import { View, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

const images = [
  require("@/assets/images/carruselL/UTP-logo.png"),
  require("@/assets/images/carruselL/UTP-logo.png"),
  require("@/assets/images/carruselL/UTP-logo.png"),
  require("@/assets/images/carruselL/UTP-logo.png"),
  require("@/assets/images/carruselL/UTP-logo.png"),
];

export default function Carrusel() {
  const flatListRef = useRef<FlatList>(null);
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const IMAGE_SPACING = 0; // Espaciado entre imágenes (puedes cambiar este valor)
  const IMAGES_TO_SHOW = 4; // Número de imágenes visibles al mismo tiempo
  const ITEM_WIDTH = (SCREEN_WIDTH / IMAGES_TO_SHOW) - IMAGE_SPACING; // Ancho de cada imagen
  const TOTAL_ITEMS = images.length;
  const infiniteImages = [...images, ...images, ...images]; // Duplicar imágenes para el efecto infinito
  const scrollOffsetRef = useRef(ITEM_WIDTH * TOTAL_ITEMS); // Inicia en el primer conjunto duplicado

  useEffect(() => {
    const interval = setInterval(() => {
      scrollLeft(); // Rotar automáticamente hacia la izquierda
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    const newOffset = scrollOffsetRef.current - ITEM_WIDTH - IMAGE_SPACING;
    if (newOffset < ITEM_WIDTH * TOTAL_ITEMS) {
      flatListRef.current?.scrollToOffset({
        offset: ITEM_WIDTH * (TOTAL_ITEMS * 2 - 1),
        animated: false,
      });
      scrollOffsetRef.current = ITEM_WIDTH * (TOTAL_ITEMS * 2 - 1);
    } else {
      flatListRef.current?.scrollToOffset({ offset: newOffset, animated: true });
      scrollOffsetRef.current = newOffset;
    }
  };

  const scrollRight = () => {
    const newOffset = scrollOffsetRef.current + ITEM_WIDTH + IMAGE_SPACING;
    if (newOffset >= ITEM_WIDTH * (TOTAL_ITEMS * 2)) {
      flatListRef.current?.scrollToOffset({
        offset: ITEM_WIDTH * TOTAL_ITEMS,
        animated: false,
      });
      scrollOffsetRef.current = ITEM_WIDTH * TOTAL_ITEMS;
    } else {
      flatListRef.current?.scrollToOffset({ offset: newOffset, animated: true });
      scrollOffsetRef.current = newOffset;
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffsetRef.current = event.nativeEvent.contentOffset.x;

    // Si llega al inicio, salta al final del primer conjunto
    if (scrollOffsetRef.current <= 0) {
      flatListRef.current?.scrollToOffset({
        offset: ITEM_WIDTH * TOTAL_ITEMS,
        animated: false,
      });
      scrollOffsetRef.current = ITEM_WIDTH * TOTAL_ITEMS;
    }

    // Si llega al final, salta al inicio del segundo conjunto
    if (scrollOffsetRef.current >= ITEM_WIDTH * (TOTAL_ITEMS * 2)) {
      flatListRef.current?.scrollToOffset({
        offset: ITEM_WIDTH * TOTAL_ITEMS,
        animated: false,
      });
      scrollOffsetRef.current = ITEM_WIDTH * TOTAL_ITEMS;
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.carouselContainer}>
        <TouchableOpacity onPress={scrollLeft} style={styles.arrow} />
          <FlatList
          ref={flatListRef}
          data={infiniteImages}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item} style={styles.image} />
            </View>
          )}
          snapToInterval={ITEM_WIDTH} // Ajusta el scroll para que se detenga en cada imagen
          decelerationRate="fast"
          getItemLayout={(data, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
          initialScrollIndex={TOTAL_ITEMS} // Empieza en el primer conjunto duplicado
            // Empieza en el primer conjunto duplicado
        />
        <TouchableOpacity onPress={scrollRight} style={styles.arrow} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pageContainer: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: "center", // Centra el carrusel verticalmente
    alignItems: "center", // Centra el carrusel horizontalmente
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: Dimensions.get("window").width / 2, // Ancho del carrusel
    height: 120, // Altura fija del carrusel
  },
  imageContainer: {
    marginHorizontal: 60, // Sin margen entre imágenes
  },
  image: {
    width: 110, // Ancho de cada imagen
    height: 100, // Altura fija para las imágenes
    resizeMode: "cover",
  },
  arrow: {
    width: 50, // Área táctil invisible
    height: "100%",
    backgroundColor: "transparent", // Invisible
  },
});