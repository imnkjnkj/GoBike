import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { MontserratText } from "../shared/StyledText";
interface IInputProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  label?: string;
  labelFontSize?: number;
  style?: StyleProp<ViewStyle>;
  widthInput?: number | string;
  heightInput?: number | string;
}
export default function Input({
  setText,
  placeholder,
  label,
  labelFontSize,
  style,
  widthInput,
  heightInput,
}: IInputProps) {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 1,
    },
    searchSection: {
      fontFamily: "Montserrat",
      width: widthInput || Dimensions.get("window").width * 0.94,
      flexDirection: "row",
      backgroundColor: theme.background,
      borderWidth: 0.5,
      borderColor: theme.text,
      height: heightInput || 40,
      borderRadius: 5,
      margin: 4,
      padding: 5,
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
      height: 25,
      backgroundColor: theme.background,
      color: theme.text,
      fontSize: 12,

    },
  });
  return (
    <View style={[styles.container, style]}>
      <MontserratText size={labelFontSize || 18} style={{ marginRight: 5 }}>
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
