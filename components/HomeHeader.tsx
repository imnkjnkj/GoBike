import { View, StyleSheet, Platform, Text, Animated, Appearance } from "react-native";
import { BarlowCondensedText } from "./StyledText";
import LOGO from "../assets/images/logo.svg";
import { backgroundColor, primaryColor, secondaryColor } from "../constants/Colors";
import Constant from "expo-constants";
import Colors from '../constants/Colors';
const AnimatedLogo = Animated.createAnimatedComponent(View);
const AnimatedName = Animated.createAnimatedComponent(Text);
const AnimatedScrollLogo = Animated.createAnimatedComponent(View);

const colorScheme = Appearance.getColorScheme() || 'dark';
const color = Colors[colorScheme]

export function HomeHeader(props: any) {
  const { logoAnimation, logoScrollAnimation, logoNameAnimation } = props;

  return (
    <>
      <View style={styles.headerContainer} >
          <View style={styles.logoScroll}>
            <AnimatedScrollLogo style={[logoScrollAnimation]}>
              <LOGO height={32} width={32} />
            </AnimatedScrollLogo>
          </View>            
          <View style={styles.headerContent}>
        
          <AnimatedLogo style={[logoAnimation, styles.logo]}>
              <LOGO height={48} width={48} />
            <AnimatedName style={[logoNameAnimation]}>
              <BarlowCondensedText
                size={32}
                color={primaryColor}
                style={styles.logoText}
              >
                GoBike
              </BarlowCondensedText>
            </AnimatedName>
          </AnimatedLogo>

        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: color.background,
    alignContent: "center",
  },
  headerContent: {
    flexDirection: "row",
    marginTop: Constant.statusBarHeight,
    position: 'relative',
    alignSelf: "center",
    
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    margin: Platform.OS === "ios" ? 0 : 15,
  },
  logoText: {
    flexDirection: "row",
  },
  logoScroll:{
    position: 'absolute',
    alignSelf: "flex-start",
    marginTop: Constant.statusBarHeight + 10,
    marginLeft: 10
  }
});
