import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { MontserratText } from "../shared/StyledText";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { Ionicons } from "@expo/vector-icons";

export default function CommentInput() {
  const { theme } = useSelector((state: State) => state.shared);
  const [text, setText] = useState("");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 1,
      paddingTop: 7,
      marginBottom: 16
    },
    searchSection: {
      fontFamily: "Montserrat",
      width: Dimensions.get("window").width * 0.94,
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
  return (
    <View style={[styles.container]}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder={"What do you think"}
          onChangeText={(text) => setText(text)}
          placeholderTextColor={theme.text}
          multiline={true}
        />
        <TouchableWithoutFeedback style={styles.sendIcon}>
          <Ionicons
            name="send"
            size={20}
            color={theme.colorLogo}
            style={{ paddingVertical: 15 }}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
