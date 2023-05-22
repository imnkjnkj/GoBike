import { View, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import { BarlowCondensedText, MontserratText } from "./shared/StyledText";
import { Entypo, Foundation, MaterialIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

export default function Contact() {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
    },
    social: {
      flexDirection: "row",
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style= {{marginBottom: 15}}>
        <MontserratText >Contact:</MontserratText>
        <View
          style={{
            marginTop: 15,
            justifyContent: "center",
          }}
        >
          <View style={styles.social}>
            <Entypo
              name="facebook-with-circle"
              color={theme.text}
              size={15}
              style={{ marginRight: 5 }}
            />
            <BarlowCondensedText>GoBike</BarlowCondensedText>
          </View>
          <View style={styles.social}>
            <MaterialIcons
              name="email"
              color={theme.text}
              size={15}
              style={{ marginRight: 5 }}
            />
            <BarlowCondensedText>support@gobike.com</BarlowCondensedText>
          </View>
          <View style={styles.social}>
            <Foundation
              name="web"
              color={theme.text}
              size={15}
              style={{ marginRight: 5 }}
            />
            <BarlowCondensedText>gobike.com</BarlowCondensedText>
          </View>
        </View>
      </View>
      <Divider />
      <View style= {{marginTop: 25}}>
        <MontserratText>Copyright © 2023 GoBike, Inc.</MontserratText>
      </View>
    </View>
  );
}
