import { StyleSheet, useWindowDimensions } from "react-native";

const layout = useWindowDimensions();
export const globalStyles = StyleSheet.create({
    imageSize: {
      width: layout.width,
      resizeMode: "stretch",
    },

  });