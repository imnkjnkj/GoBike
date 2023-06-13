import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { MontserratText } from "./shared/StyledText";
import Button from "./forms/Button";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { menuBikeList, menuList } from "../enums/common";
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

  const handleLogout = () => {
    pLogout();
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      <View>
        {pIsLogIn ? (
          <>
            <View style={{ marginVertical: 5 }}>
              <Button
                mode="underline"
                iconArrow={true}
                text={pUserInfor?.username}
                handlePress={() => navigation.navigate("ProfileScreen")}
                icon={
                  <FontAwesome5
                    name={"user-alt"}
                    size={16}
                    color={theme.text}
                  />
                }
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <Button
                mode="underline"
                iconArrow={true}
                text="Log Out"
                handlePress={handleLogout}
                icon={
                  <FontAwesome5
                    name={"user-alt"}
                    size={16}
                    color={theme.text}
                  />
                }
              />
            </View>
          </>
        ) : (
          <View style={{ marginVertical: 5 }}>
            <Button
              mode="underline"
              iconArrow={true}
              text="Sign in"
              handlePress={() => navigation.navigate("LogIn")}
              icon={
                <FontAwesome5 name={"user-alt"} size={16} color={theme.text} />
              }
            />
          </View>
        )}
        {isAdmin && pIsLogIn ? (
          <View style={{ marginTop: 30 }}>
            <MontserratText>Manage</MontserratText>
            <View style={{ marginVertical: 5 }}>
              <Button
                mode="underline"
                iconArrow={true}
                text={"Users Overview"}
                handlePress={() => navigation.navigate("UsersOverviewScreen")}
                icon={
                  <MaterialIcons name="preview" size={16} color={theme.text} />
                }
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <Button
                mode="underline"
                iconArrow={true}
                text={"Create A Post"}
                handlePress={() => navigation.navigate("CreatePostScreen")}
                icon={
                  <Ionicons
                    name={"ios-settings-sharp"}
                    size={16}
                    color={theme.text}
                  />
                }
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <Button
                mode="underline"
                iconArrow={true}
                text={"Posts Overview"}
                handlePress={() => navigation.navigate("PostsOverviewScreen")}
                icon={
                  <MaterialIcons name="preview" size={16} color={theme.text} />
                }
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <Button
                mode="underline"
                iconArrow={true}
                text={"Create A Bike Information"}
                handlePress={() =>
                  navigation.navigate("CreateInformationScreen")
                }
                icon={
                  <Ionicons
                    name={"ios-settings-sharp"}
                    size={16}
                    color={theme.text}
                  />
                }
              />
            </View>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View style={{ marginTop: 30 }}>
        <MontserratText>BIKE INFORMATION</MontserratText>
        <View style={{ marginVertical: 5 }}>
          <Button
            mode="underline"
            iconArrow={true}
            text={"Bike Information"}
            handlePress={() => {
              navigation.navigate("BikeInforScreen", {
                category: `Bike Information`,
                id: undefined,
              });
            }}
          />
        </View>

        {menuBikeList?.map((item) => (
          <View style={{ marginVertical: 5 }} key={item.key}>
            <Button
              mode="underline"
              iconArrow={true}
              key={item.key}
              text={item.title}
              handlePress={() => {
                dispatch(setCategoryValue(item));
                navigation.navigate("BikeInforScreen", {
                  category: `${item.title}`,
                  id: item.id,
                });
              }}
            />
          </View>
        ))}
      </View>
      <View style={{ marginTop: 30 }}>
        <MontserratText>Categories</MontserratText>
        {menuList?.map((item) => (
          <View style={{ marginVertical: 5 }} key={item.key}>
            <Button
              mode="underline"
              iconArrow={true}
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
          </View>
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
