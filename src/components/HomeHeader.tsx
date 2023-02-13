import {
  View,
  StyleSheet,
  Platform,
  Text,
  Animated,
} from "react-native";
import LOGO from "../assets/images/logo.svg";
import Constant from "expo-constants";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { BarlowCondensedText } from "./shared/StyledText";

const AnimatedLogo = Animated.createAnimatedComponent(View);
const AnimatedName = Animated.createAnimatedComponent(Text);

export function HomeHeader(props: any) {
  const { logoAnimation, logoNameAnimation, translateHeaderLogo } = props;
  const { theme } = useSelector((state: State) => state.shared);

  const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: theme.background,
      alignContent: "center",
      width: '100%',
      zIndex: 1,
    },
    headerContent: {
      flexDirection: "row",
      marginTop: Constant.statusBarHeight,
      position: 'relative',
    },
    logo: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      width: '100%',
      zIndex: 1,
      left: '35%',
    },
    logoText: {
      flexDirection: "row",
    },
  });
  return (
    <>
        <View style={styles.headerContent}>
          <AnimatedLogo style={[logoAnimation, styles.logo, { transform: [{ translateY: translateHeaderLogo }] }]}>
            <LOGO height={48} width={48} color={theme.colorLogo} />
            <AnimatedName style={[logoNameAnimation]}>
              <BarlowCondensedText
                size={32}
                color={theme.text}
                style={styles.logoText}
              >
                GoBike
              </BarlowCondensedText>
            </AnimatedName>
          </AnimatedLogo>
        </View>
    </>
  );
}
