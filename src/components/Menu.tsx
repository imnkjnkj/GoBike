import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { MontserratText } from "./shared/StyledText";
import Button from "./Button";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Category, CategoryId } from "../enums/common";
import { AppDispatch, State } from "../redux/store";
import { setCategoryValue } from "../redux/shared";
import { IUserProfileRes, USER_ROLES_NAME } from "../types/users";
import { logOutUser } from "../redux/user";

interface IMenuProps {
  pUserInfor: IUserProfileRes;
  pIsLogIn: boolean;
  pLogout: () => void;
}
function Menu({ pIsLogIn, pUserInfor, pLogout }: IMenuProps) {
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
  const isAdmin = pUserInfor?.roles.some(
    (x) => x.name === USER_ROLES_NAME.ADMIN
  );
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
  const handleLogout = () => {
    pLogout();
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      <View>
        {pIsLogIn ? (
          <>
            <Button
              text={pUserInfor?.username}
              handlePress={() => navigation.navigate("ProfileScreen")}
              icon={
                <FontAwesome5 name={"user-alt"} size={16} color={theme.text} />
              }
            />
            <Button
              text="Log Out"
              handlePress={handleLogout}
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
        {isAdmin && pIsLogIn ? (
          <Button
            text="Create A Post"
            handlePress={() => navigation.navigate("CreatePostScreen")}
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
          Categories
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
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    pLogout: () => dispatch(logOutUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
