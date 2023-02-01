import {View,StyleSheet,Platform} from "react-native";
import {BarlowCondensedText} from "./StyledText";
import LOGO from "../assets/images/logo.svg";
import {backgroundColor,primaryColor} from "../constants/Colors";
import Constant from 'expo-constants';


export const MenuHeader=(props: any) => {

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.logo}>
            <LOGO height={48} width={48} />
            <BarlowCondensedText
              size={32}
              color={primaryColor}
              style={styles.logoText}
            >
              GoBike</BarlowCondensedText>
          </View>
        </View>
      </View>
    </>
  )
}
const styles=StyleSheet.create({
  headerContainer: {
    backgroundColor: backgroundColor,
  },
  headerContent: {
    marginTop: Constant.statusBarHeight,
  },
  logo: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    margin: Platform.OS==='ios'? 0:15,
  },
  logoText: {
    flexDirection: "row",
  },
});
