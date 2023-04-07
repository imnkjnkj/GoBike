import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
// import { TextInput } from "react-native-paper";

const Search = () => {
  const [text, setText] = React.useState("");
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
      
    },
    searchSection: {
      width: Dimensions.get('window').width * 0.94,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor:  theme.background,
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
  });
  return (
    <View style={styles.searchSection}>
      <Ionicons
        style={styles.searchIcon}
        name="ios-search"
        size={15}
        color={theme.colorLogo}
      />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text) => setText(text)}
        placeholderTextColor={theme.text}
      />
    </View>
  );
};

export default Search;
