import { ScrollView, StyleSheet, Animated } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { HomeHeader } from "../components/HomeHeader";
import { MontserratText } from "../components/StyledText";
import { useRef } from "react";

export default function HomeScreenScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  const animatedValue = useRef(new Animated.Value(0)).current; //lưu khoảng cách mà user scroll theo chiều dọc

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
      />
      <ScrollView
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offsetY);
        }}
        scrollEventThrottle={16}
      >
        <MontserratText style={styles.title}>Home</MontserratText>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
      </ScrollView>
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
