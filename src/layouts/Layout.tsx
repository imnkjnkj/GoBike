import { View, Animated, ScrollView, StyleSheet, ViewStyle, StyleProp } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";

interface LayoutI {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>
}
const Layout = ({ children, style }: LayoutI) => {
  const animatedValue = useSelector(
    (state: State) => state.shared.animatedValue
  );

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
      <View style={style}>{children}</View>
    </ScrollView>
  );
};

export default Layout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
