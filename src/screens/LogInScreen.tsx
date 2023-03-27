import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  BarlowCondensedText,
  MontserratText,
} from "../components/shared/StyledText";
import LOGO from "../assets/images/logo.svg";
import Constant from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import { AppDispatch, State } from "../redux/store";
import { loginUser } from "../redux/user/thunkApi";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../navigation";
import { sIsAdmin, sIsExpiredToken } from "../redux/user/selector";
import { IUserLogin } from "../types/users";

const LogInScreen = ({
  pLogin,
}: {
  pLogin: (token: IUserLogin) => Promise<unknown>;
}) => {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      alignContent: "center",
      width: "100%",
      justifyContent: "center",
      flex: 1,
    },
    logoContent: {
      flexDirection: "row",
      //marginTop: Platform.OS==='android'? Constant.statusBarHeight:0,
      position: "relative",
    },
    logo: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      zIndex: 1,
      left: "35%",
    },
    logoText: {
      flexDirection: "row",
    },
    inputSection: {
      width: Dimensions.get("window").width * 0.74,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.background,
      borderWidth: 0.5,
      borderColor: theme.text,
      height: 40,
      borderRadius: 5,
      marginVertical: 10,
    },
    searchIcon: {
      padding: 5,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: "stretch",
      alignItems: "center",
    },
    input: {
      flex: 1,
      height: 30,
      backgroundColor: theme.background,
      color: theme.text,
    },
    form: {
      alignItems: "center",
    },
    loginGoogle: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    login: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.background,
      borderColor: theme.colorLogo,
      borderWidth: 1,
      paddingHorizontal: 60,
      paddingVertical: 8,
      borderRadius: 5,
      marginTop: 10,
    },
  });
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "484087272547-bf4je4llrl6d1j4jug3aa1oag7gipbk8.apps.googleusercontent.com",
    iosClientId:
      "484087272547-ja8pfmcflrpinr2ckslb2vufs164sote.apps.googleusercontent.com",
    expoClientId:
      "484087272547-6ig18d7gb6mt0cnbj14k94ua34r4ipci.apps.googleusercontent.com",
  });
  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
      console.log(access_token);
      
      pLogin({accessToken: access_token}).then(() => navigation.navigate("MainScreen"));
    }
  }, [response, token]);
  const handleGoogleSignIn = async () => {
    await promptAsync();
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContent}>
        <View style={styles.logo}>
          <LOGO height={48} width={48} color={theme.colorLogo} />
          <BarlowCondensedText
            size={32}
            color={theme.text}
            style={styles.logoText}
          >
            GoBike
          </BarlowCondensedText>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inputSection}>
          <AntDesign
            name="user"
            size={15}
            style={styles.searchIcon}
            color={theme.colorLogo}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            placeholderTextColor={theme.text}
          />
        </View>
        <View style={styles.inputSection}>
          <AntDesign
            name="lock"
            size={15}
            style={styles.searchIcon}
            color={theme.colorLogo}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={theme.text}
          />
        </View>
        <TouchableOpacity style={styles.login}>
          <MontserratText color={theme.colorLogo} size={16}>
            Login
          </MontserratText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginGoogle}
          onPress={handleGoogleSignIn}
        >
          <AntDesign name="google" size={24} color={theme.colorLogo} />
          <MontserratText
            color={theme.colorLogo}
            size={16}
            style={{ marginLeft: 8, fontWeight: "700" }}
          >
            Login With Google
          </MontserratText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    pLogin: (token: IUserLogin) => dispatch(loginUser(token)),
  };
};

export default connect(null, mapDispatchToProps)(LogInScreen);
