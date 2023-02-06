import { View, Animated, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";

interface LayoutI {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutI) => {
  const animatedValue = useSelector((state: State) => state.shared.animatedValue);

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
