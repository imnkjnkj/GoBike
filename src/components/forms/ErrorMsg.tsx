import { View, Text } from "react-native";
import React from "react";
import { MontserratText } from "../shared/StyledText";
import { MaterialIcons } from "@expo/vector-icons";

interface IErrorMsgProps {
  text: string;
  fontSize?: number;
  iconSize?: number;
}
export default function ErrorMsg({ text, fontSize, iconSize }: IErrorMsgProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      <MaterialIcons
        name="error-outline"
        size={iconSize || 14}
        color="red"
        style={{ marginRight: 2 }}
      />
      <MontserratText color="red" size={fontSize || 12}>
        {text}
      </MontserratText>
    </View>
  );
}
