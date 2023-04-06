import { View, StyleSheet, ActivityIndicator, ColorValue } from "react-native";
import React from "react";
interface ILoadingProps {
  color?: ColorValue | undefined;
}
const Loading = ({ color }: ILoadingProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};

export default Loading;
