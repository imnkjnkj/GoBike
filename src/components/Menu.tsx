import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { MontserratText } from "./shared/StyledText";
import Button from "./Button";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Category, CategoryId } from "../enums/common";
import { State } from "../redux/store";
import { setCategoryValue } from "../redux/shared";
import { IUserProfileRes, USER_ROLES_NAME } from "../types/users";

interface IMenuProps {
  pUserInfor: IUserProfileRes;
  pIsLogIn: boolean;
}
function Menu({ pIsLogIn, pUserInfor }: IMenuProps) {
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
    { key: "bikeGear", title: "BIKES & GEAR", id: CategoryId.BIKEGEAR },
    { key: "repair", title: "REPAIR", id: CategoryId.REPAIR },
    {
      key: "health",
      title: "HEALTH & NUTRITION",
      id: CategoryId.HEALTHNUTRITION,
    },
    { key: "training", title: "TRAINING", id: CategoryId.TRAINING },
  ];

  return (
    <View style={styles.container}>
      <View>
        {pIsLogIn ? (
          <>
            <Button
              text={pUserInfor?.username}
              handlePress={() => navigation.navigate("LogIn")}
              icon={
                <FontAwesome5 name={"user-alt"} size={16} color={theme.text} />
              }
            />
            <Button
              text="Log Out"
              handlePress={() => navigation.navigate("LogIn")}
              icon={
                <FontAwesome5 name={"user-alt"} size={16} color={theme.text} />
              }
            />
          </>
        ) : (
          <Button
            text="Sign in"
            handlePress={() => navigation.navigate("LogIn")}
            icon={
              <FontAwesome5 name={"user-alt"} size={16} color={theme.text} />
            }
          />
        )}
        {pUserInfor?.roles.includes({ name: USER_ROLES_NAME.ADMIN }) ? (
          <Button
            text="Post Articles"
            icon={
              <Ionicons
                name={"ios-settings-sharp"}
                size={16}
                color={theme.text}
              />
            }
          />
        ) : (
          <></>
        )}
      </View>
      <View style={{ marginTop: 30 }}>
        <MontserratText style={{ fontWeight: "600" }}>
          Theo Chuyên Mục
        </MontserratText>
        {menuList?.map((item) => (
          <Button
            key={item.key}
            text={item.title}
            handlePress={() => {
              dispatch(setCategoryValue(item));
              navigation.navigate("RouteScreen", {
                category: `${item.title}`,
                id: item.id,
              });
            }}
          />
        ))}
      </View>
    </View>
  );
}
const mapStateToProps = (state: State) => ({
  pUserInfor: state.user.userProfile,
  pIsLogIn: state.user.isLogIn,
});
export default connect(mapStateToProps, null)(Menu);
