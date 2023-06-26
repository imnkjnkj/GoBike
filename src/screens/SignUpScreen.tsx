import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
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
import { DataUserForm, IUserLogin } from "../types/users";
import { fontFamilyEnum, fontStyleEnum } from "../enums/common";
import * as yup from "yup";
import { Formik } from "formik";
import ErrorMsg from "../components/forms/ErrorMsg";
import Button from "../components/forms/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const initialValues = {
  username: "",
  password: "",
  email: "",
  confirmPassword: "",
};

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
      marginHorizontal: 70,
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
      paddingHorizontal: 50,
      paddingVertical: 8,
      borderRadius: 5,
      marginTop: 10,
      alignSelf: "center",
      width: "65%",
      textAlign: "center",
    },
    signUp: {
      position: "absolute",
      bottom: 0,
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
  const signUpValidationSchema = yup.object().shape({
    username: yup.string().required("Username is Required"),
    email: yup.string().email("Email is not match."),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Please enter confirm password.")
      .oneOf([yup.ref("password")], "Confirm password is not match."),
  });
  const form = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(signUpValidationSchema),
  });
  useEffect(() => {
    form.reset(initialValues);
  }, []);
  const handleSignUp = (values: any) => {
    console.log(values);
    form.reset()

  };
  const { isSubmitting } = form.formState


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
          validationSchema={signUpValidationSchema}
          initialValues={{
            username: "",
            password: "",
            email: "",
            confirmPassword: "",
          }}
          onSubmit={handleSignUp}
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
                  name="mail"
                  size={15}
                  style={styles.searchIcon}
                  color={theme.colorLogo}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={theme.text}
                  onChangeText={handleChange("email")}
                  value={values.email}
                />
              </View>
              {errors.email && <ErrorMsg text={errors.email} />}

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
                  placeholderTextColor={theme.text}
                  onChangeText={handleChange("password")}
                  value={values.password}
                />
              </View>
              {errors.password && <ErrorMsg text={errors.password} />}

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
                  placeholderTextColor={theme.text}
                  onChangeText={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                />
              </View>
              {errors.confirmPassword && (
                <ErrorMsg text={errors.confirmPassword} />
              )}
              <Button
                mode={"border"}
                disabled={!isValid}
                text={"Sign Up"}
                color={theme.colorLogo}
                style={styles.login}
                height={40}
                handlePress={handleSubmit}
                fontFamily={fontFamilyEnum.MontserratText}
              ></Button>
            </>
          )}
        </Formik>
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
