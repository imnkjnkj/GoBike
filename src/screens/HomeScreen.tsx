import { ScrollView, StyleSheet, Animated } from "react-native";
import { interpolate } from 'react-native-reanimated';
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { HomeHeader } from "../components/HomeHeader";
import { MontserratText } from "../components/StyledText";
import { useEffect, useRef, useState } from "react";
import MenuHeaderTab from "../components/MenuHeaderTab";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { changeThemeAction } from "../redux/actions";

export default function HomeScreenScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {

  const animatedValue = useRef(new Animated.Value(0)).current; //lưu khoảng cách mà user scroll theo chiều dọc
  const translateHeader = animatedValue.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: "clamp",
  });
  const translateHeaderLogo = Animated.multiply(translateHeader, 1.5);
  const logoNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };
  const logoScrollAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };
  const logoAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        logoAnimation={logoAnimation}
        logoScrollAnimation={logoScrollAnimation}
        logoNameAnimation={logoNameAnimation}
        translateHeaderLogo={translateHeaderLogo}
      />
      <MenuHeaderTab
        animatedValue={animatedValue}
        translateHeader={translateHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
