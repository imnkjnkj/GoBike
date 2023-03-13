import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BarlowCondensedText,
  MontserratText,
} from "../components/shared/StyledText";
import LOGO from "../assets/images/logo.svg";
import { State } from "../redux/reducers";
import Constant from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AuthSessionResult, TokenResponse } from "expo-auth-session";

const LogInScreen = () => {
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
      backgroundColor: theme.colorLogo,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
  });
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "484087272547-bf4je4llrl6d1j4jug3aa1oag7gipbk8.apps.googleusercontent.com",
    iosClientId:
      "484087272547-ja8pfmcflrpinr2ckslb2vufs164sote.apps.googleusercontent.com",
    expoClientId:
      "484087272547-6ig18d7gb6mt0cnbj14k94ua34r4ipci.apps.googleusercontent.com",
  });
  useEffect(() => {
    if (response?.type === "success" && response.authentication) {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };
  console.log(token);
  const handleGoogleSignIn = async () => {
    //try {
    //  const result=await Google.logInAsync({
    //    androidClientId: '484087272547-bf4je4llrl6d1j4jug3aa1oag7gipbk8.apps.googleusercontent.com',
    //    iosClientId: '484087272547-ja8pfmcflrpinr2ckslb2vufs164sote.apps.googleusercontent.com',
    //    scopes: ['profile','email'],
    //  });
    //  console.log(result);
    //} catch(error) {
    //  console.log(error);
    //}
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

        <TouchableOpacity
          style={styles.loginGoogle}
          onPress={() => {
            promptAsync();
          }}
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
        <TouchableOpacity style={styles.login}>
          <MontserratText color={theme.background} size={16}>
            Login
          </MontserratText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LogInScreen;
