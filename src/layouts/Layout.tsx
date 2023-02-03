import { View, Text, Animated, ScrollView } from "react-native";
import React from "react";

interface LayoutI {
  children: React.ReactNode;
  animatedValue: Animated.Value;
}
const Layout = ({ children, animatedValue }: LayoutI) => {
  return (
    <ScrollView
      onScroll={(e) => {
        const offsetY = e.nativeEvent.contentOffset.y;
        animatedValue.setValue(offsetY);
        Animated.event(
          [{ nativeEvent: { contentOffset: { y: animatedValue } } }],
          {
            useNativeDriver: true,
          }
        );
      }}
      scrollEventThrottle={16}
    >
      <View>{children}</View>
    </ScrollView>
  );
};

export default Layout;
