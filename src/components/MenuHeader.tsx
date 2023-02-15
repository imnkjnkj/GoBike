import {View,StyleSheet,Platform} from "react-native";
import LOGO from "../assets/images/logo.svg";
import Constant from 'expo-constants';
import { BarlowCondensedText } from "./shared/StyledText";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";


export const MenuHeader=(props: any) => {
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
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.logo}>
            <LOGO height={48} width={48} color={theme.colorLogo} />
            <BarlowCondensedText
                size={32}
                color={theme.text}
                style={styles.logoText}            >
              GoBike</BarlowCondensedText>
          </View>
        </View>
      </View>
    </>
  )
}
