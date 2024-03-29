import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React,{useState,useEffect} from "react";
import {useSelector} from "react-redux";
import {State} from "../../redux/store";
import {Ionicons} from "@expo/vector-icons";
import * as yup from "yup";
import {Formik} from "formik";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

const validationSchema=yup.object().shape({
  text: yup
    .string()
    .required("Username is Required")

});
const initialValues={
  text: "",
};
export default function CommentInput() {
  const {theme}=useSelector((state: State) => state.shared);
  const styles=StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 1,
      paddingTop: 7,
      marginBottom: 16
    },
    searchSection: {
      fontFamily: "Montserrat",
      width: Dimensions.get("window").width*0.94,
      flexDirection: "row",
      backgroundColor: theme.background,
      borderWidth: 0.5,
      borderColor: theme.text,
      height: 64,
      borderRadius: 5,
      padding: 5,
    },
    sendIcon: {
      resizeMode: "stretch",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      flex: 1,
      height: 50,
      backgroundColor: theme.background,
      color: theme.text,
      fontSize: 13,
      width: "100%",
      alignItems: "center",
    },
  });

  const form=useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  useEffect(() => {
    form.reset(initialValues);
  },[]);
  return (
    <View style={[styles.container]}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{text: ""}}
        onSubmit={(values) => {
          console.log(values);
          form.reset();
        }}
      >
        {({handleChange,handleSubmit,values,errors,isValid}) => (
          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              placeholder={"What do you think"}
              onChangeText={handleChange('text')}
              placeholderTextColor={theme.text}
              value={values.text}
              multiline={true}
            />
            <TouchableWithoutFeedback style={styles.sendIcon} disabled={!isValid} onPress={() => handleSubmit()}>
              <Ionicons
                name="send"
                size={20}
                color={!values.text.length? 'gray':theme.colorLogo}
                style={{paddingVertical: 15}}
              />
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>

    </View>
  );
}
