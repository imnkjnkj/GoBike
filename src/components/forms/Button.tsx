import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import React from "react";

import { useSelector } from "react-redux";
import { BarlowCondensedText, MontserratText } from "../shared/StyledText";
import { State } from "../../redux/store";
import { Divider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { fontStyleEnum } from "../../enums/common";

interface IButtonProps {
  handlePress?: () => void;
  text?: string;
  icon?: any;
  width?: number;
  height?: number;
  mode: "underline" | "border";
  iconArrow?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>
}
export default function Button({
  handlePress,
  text,
  icon,
  width,
  height,
  mode,
  color,
  style,
  iconArrow,
}: IButtonProps) {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    buttonUnderline: {
      backgroundColor: theme.background,
      padding: 5,
      borderBottomColor: color || theme.text,
      borderBottomWidth: 0.5,
      width: width || "100%",
      height: height || 35,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    buttonBorder: {
      backgroundColor: theme.background,
      padding: 5,
      width: width || "100%",
      height: height || 35,
      borderRadius: 3,
      justifyContent: "space-between",
      flexDirection: "row",
      borderColor: color || theme.text,
      borderWidth: 0.5,
    },
    text: {
      marginLeft: icon ? 15 : 0,
    },
  });
  const styleButton = (mode?: string) => {
    switch (mode) {
      case "underline":
        return styles.buttonUnderline;
      case "border":
        return styles.buttonBorder;
      default:
        return null;
    }
  };
  return (
      <TouchableOpacity style={[styleButton(mode),style]} onPress={handlePress}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {icon}
          <BarlowCondensedText
            fontStyle={fontStyleEnum.SemiBold}
            color={color || theme.text}
            size={16}
            style={styles.text}
          >
            {text}
          </BarlowCondensedText>
        </View>
        {iconArrow && (
          <MaterialIcons name="navigate-next" size={16} color={theme.text} />
        )}
      </TouchableOpacity>
  );
}
