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
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import { AppDispatch, State } from "../redux/store";
import { getUser, loginUser } from "../redux/user/thunkApi";
import { useNavigation } from "@react-navigation/native";
import { IUserLogin, IUserProfileRes } from "../types/users";
import { fontStyleEnum } from "../enums/common";
import * as yup from "yup";
import { Formik } from "formik";
import ErrorMsg from "../components/forms/ErrorMsg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const initialValues = {
  username: "",
  password: "",
};

export interface IInputField {
  username: string;
  password: string;
}
const LogInScreen = ({
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
      // width: Dimensions.get("window").width * 0.74,
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
      // alignItems: "center",
      marginHorizontal: 70,
    },
    loginGoogle: {
      flexDirection: "row",
      alignSelf: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    login: {
      alignSelf: "center",
      backgroundColor: theme.background,
      borderColor: theme.colorLogo,
      borderWidth: 1,
      paddingHorizontal: 60,
      paddingVertical: 8,
      borderRadius: 5,
      marginTop: 10,
      width: "65%",
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
  const [token, setToken] = useState("");
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
      pLogin({ accessToken: access_token }).then(() => {
        navigation.navigate("MainScreen");
        pGetUser();
      });
    }
  }, [response, token]);

  const handleGoogleSignIn = async () => {
    await promptAsync();
  };
  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is Required")
      .max(250, ({ max }) => `Username must be at least ${max} characters`),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  const form = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(loginValidationSchema),
  });
  useEffect(() => {
    form.reset(initialValues);
  }, []);

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
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit, values, errors, isValid }) => (
            <>
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
                  placeholderTextColor={theme.text}
                  onChangeText={handleChange("username")}
                  value={values.username}
                />
              </View>
              {errors.username && <ErrorMsg text={errors.username} />}

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
                  placeholderTextColor={theme.text}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  secureTextEntry
                />
              </View>
              {errors.password && <ErrorMsg text={errors.password} />}
              <TouchableOpacity
                style={styles.login}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              >
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
                  style={{ marginLeft: 8 }}
                >
                  Login With Google
                </MontserratText>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>

      <View style={styles.signUp}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
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
            Sign Up
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

export default React.memo(connect(null, mapDispatchToProps)(LogInScreen));
