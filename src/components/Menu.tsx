import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { MontserratText } from "./shared/StyledText";
import Button from "./Button";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { sharedAction } from "../redux/actions";
import { Category } from "../enums/common";

export default function Menu() {
  const [count, setCount] = useState(0);
  const { theme } = useSelector((state: State) => state.shared);
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      marginVertical: 20,
    },
  });
  const dispatch = useDispatch();

  const onPress = () => {
    setCount(count + 1);
  };
  const menuList = [
    { key: "bikeGear", title: Category.BIKEGEAR },
    { key: "repair", title: Category.REPAIR },
    { key: "health", title: Category.HEALTHNUTRITION },
    { key: "training", title: Category.TRAINING },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Button
          text="Sign in / Sign up"
          icon={
            <FontAwesome5
              name={"user-alt"}
              size={16}
              color={theme.text}
              handlePress={() => navigation.navigate("LogIn")}
            />
          }
        />
        {/* <Button
          text="Thiết lập ứng dụng"
          icon={
            <Ionicons
              name={"ios-settings-sharp"}
              size={16}
              color={theme.text}
            />
          }
        /> */}
      </View>
      <View style={{ marginTop: 30 }}>
        <MontserratText style={{ fontWeight: "600" }}>
          Theo Chuyên Mục
        </MontserratText>
        {menuList.map((item) => (
          <Button
            key={item.key}
            text={item.title}
            handlePress={() => {
              dispatch(sharedAction.setCategoryValue(item));
              navigation.navigate("RouteScreen", {
                category: `${item.title}`,
              });
            }}
          />
        ))}
      </View>
    </View>
  );
}
