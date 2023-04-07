import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { MontserratText } from "../shared/StyledText";
interface IInputProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  label?: string;
}
export default function Input({ setText, placeholder, label }: IInputProps) {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      zIndex: 1,
    },
    searchSection: {
      width: Dimensions.get("window").width * 0.94,
      flexDirection: "row",
      backgroundColor: theme.background,
      borderWidth: 0.5,
      borderColor: theme.text,
      height: 40,
      borderRadius: 5,
      marginVertical: 10,
      padding: 5
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
  });
  return (
    <View style={styles.container}>
      <MontserratText size={18} style={{ fontWeight: "800" }}>
        {label}
      </MontserratText>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={(text) => setText(text)}
          placeholderTextColor={theme.text}
        />
      </View>
    </View>
  );
}
