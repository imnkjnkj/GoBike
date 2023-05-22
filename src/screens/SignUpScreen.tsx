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
import { AntDesign } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import { AppDispatch, State } from "../redux/store";
import { getUser, loginUser } from "../redux/user/thunkApi";
import { useNavigation } from "@react-navigation/native";
import { IUserLogin, IUserProfileRes } from "../types/users";
import { fontStyleEnum } from "../enums/common";

const SignUpScreen = ({
  pLogin,
  pGetUser,
}: {
  pLogin: (token: IUserLogin) => Promise<unknown>;
  pGetUser: () => Promise<unknown>;
}) => {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      alignContent: "center",
      width: "100%",
      justifyContent: "center",
      flex: 1,
      position: "relative",
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
    signUp: {
      position: "absolute",
      bottom: 0,
      // left: "35%",
      width: "100%",
      borderTopWidth: 0.5,
      borderTopColor: theme.text,
    },
  });
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = useState("");
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.logoContent}>
        <View style={styles.logo}>
          <LOGO height={48} width={48} color={theme.colorLogo} />
          <BarlowCondensedText
            size={32}
            color={theme.text}
            style={styles.logoText}
            fontStyle={fontStyleEnum.SemiBold}
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
            name="mail"
            size={15}
            style={styles.searchIcon}
            color={theme.colorLogo}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
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
            keyboardType="email-address"
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
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
            placeholder="Confirm Password"
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={theme.text}
          />
        </View>
        <TouchableOpacity style={styles.login}>
          <MontserratText color={theme.colorLogo} size={16}>
            Sign Up
          </MontserratText>
        </TouchableOpacity>
      </View>
      <View style={styles.signUp}>
        <TouchableOpacity
          onPress={() => navigation.navigate("LogIn")}
          style={[styles.loginGoogle, { left: "225%", width: "100%" }]}
        >
          <MontserratText color={theme.text} size={13}>
            Do you have account ?
          </MontserratText>
          <MontserratText
            color={theme.colorLogo}
            size={13}
            style={{ marginLeft: 3 }}
          >
            Sign In
          </MontserratText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    pLogin: (token: IUserLogin) => dispatch(loginUser(token)),
    pGetUser: () => dispatch(getUser()),
  };
};

export default React.memo(connect(null, mapDispatchToProps)(SignUpScreen));
