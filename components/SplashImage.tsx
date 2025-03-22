import { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

export function SplashImage() {
  const rotationAnimation = useSharedValue(0);
  const upDownAnimation = useSharedValue(0);

  useEffect(() => {
    rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(0, { duration: 2000 }),
      withTiming(180, { duration: 4000 }),
      withTiming(0, { duration: 6000 })
    ),
    -1);
  }, []);

  useEffect(() => {
    upDownAnimation.value = withRepeat(
    withSequence(
      withTiming(0, { duration: 800 }),
      withTiming(20, { duration: 1200 }),
      withTiming(0, { duration: 1600 }),
      withTiming(-20, { duration: 2000 })
    ),
    -1);
  },[]);

  const animatedRotateStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  const animatedUpDownStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: upDownAnimation.value }],
  }));

  return (
    <View style={styles.parent}>
      {/* Imagen animada (Fondo) */}
      <Animated.View style={[styles.children, animatedRotateStyle]}>
        <Image source={require('@/assets/images/splash_image.png')} style={styles.image} />
      </Animated.View>

      {/* Imagen estática (Frente) */}
      <Animated.View style={[styles.children, animatedUpDownStyle]}>
        <Image source={require('@/assets/images/image_index.png')} style={styles.image} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  children: {
    position: 'absolute',
  },
  image: {
    width: 500,  // Ajusta según el tamaño de la imagen
    height: 500, // Ajusta según el tamaño de la imagen
  },
});
