import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";

import { useSelector } from "react-redux";
import { BarlowCondensedText, MontserratText } from "../shared/StyledText";
import { State } from "../../redux/store";
import { Divider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

interface IButtonProps {
  handlePress?: () => void;
  text?: string;
  icon?: any;
}
export default function Button({ handlePress, text, icon }: IButtonProps) {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.background,
      padding: 13,
      color: theme.colorLogo,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    text: {
      fontWeight: "400",
      marginLeft: icon ? 15 : 0,
    },
  });
  return (
    <View style={{ marginBottom: 5 }}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {icon}
          <BarlowCondensedText color={theme.text} size={16} style={styles.text}>
            {text}
          </BarlowCondensedText>
        </View>
        <MaterialIcons name="navigate-next" size={16} color={theme.text} />
      </TouchableOpacity>
      <Divider bold={true} />
    </View>
  );
}
