import { Text, View } from "react-native";
import { SplashImage } from "@/components/SplashImage";
import "../global.css";


export default function Index() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* TODO: Make the splash component */}
        <SplashImage />
      </View>
    </>
  );
}
