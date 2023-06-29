import {StyleSheet,Animated} from "react-native";
import {Extrapolate} from "react-native-reanimated";
import {View} from "../components/shared/Themed";
import {RootTabScreenProps} from "../../types";
import {HomeHeader} from "../components/HomeHeader";
import MenuHeaderTab from "../navigation/MenuHeaderTab";
import {useSelector} from "react-redux";
import {State} from "../redux/store";
import BannerCarousel from "../components/BannerCarousel";

export default function HomeScreenScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  const animatedValue=useSelector(
    (state: State) => state.shared.animatedValue
  );
  const translateHeader=animatedValue.interpolate({
    inputRange: [0,50],
    outputRange: [0,-50],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateBannerAnimation=animatedValue.interpolate({
    inputRange: [0,100],
    outputRange: [0,-100],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateHeaderLogo=Animated.multiply(translateHeader,1.5);
  const translateBanner=Animated.multiply(translateBannerAnimation,1.5);
  const logoNameAnimation={
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0,30],
          outputRange: [1,0],
          extrapolate: Extrapolate.CLAMP,
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0,30],
      outputRange: [1,0],
      extrapolate: Extrapolate.CLAMP,
    }),
  };
  const logoScrollAnimation={
    opacity: animatedValue.interpolate({
      inputRange: [0,50],
      outputRange: [0,1],
      extrapolate: Extrapolate.CLAMP,
    }),
  };
  const logoAnimation={
    opacity: animatedValue.interpolate({
      inputRange: [0,25],
      outputRange: [1,0],
      extrapolate: Extrapolate.CLAMP,
    }),
  };
  const bannerAnimation={
    opacity: animatedValue.interpolate({
      inputRange: [0,50],
      outputRange: [2,0],
      extrapolate: Extrapolate.CLAMP,
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
      <MenuHeaderTab translateHeader={translateHeader} />
    </View>
  );
}

const styles=StyleSheet.create({
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
