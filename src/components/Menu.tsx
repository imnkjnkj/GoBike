import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import React,{useEffect,useState} from "react";
import {useSelector} from "react-redux";
import {State} from "../redux/reducers";
import {MontserratText} from "./shared/StyledText";
import Button from "./Button";
import {FontAwesome5,Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function Menu() {
  const [count,setCount]=useState(0);
  const {theme}=useSelector((state: State) => state.shared);
  const navigation=useNavigation();

  const styles=StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      marginVertical: 20,
    },
  });

  const onPress=() => {
    setCount(count+1);
  };
  const menuList=[
    {key: "bikeGear",title: "Xe Đạp và Thiết Bị"},
    {key: "repair",title: "Sửa chữa"},
    {key: "health",title: "Dinh Dưỡng & Sức Khoẻ"},
    {key: "training",title: "Đào Tạo"},
  ]

  return (
    <View style={styles.container}>
      <View>
        <Button
          text="Đăng nhập / Đăng kí"
          icon={<FontAwesome5 name={"user-alt"} size={16} color={theme.text} />}
        />
        <Button
          text="Thiết lập ứng dụng"
          icon={
            <Ionicons
              name={"ios-settings-sharp"}
              size={16}
              color={theme.text}
            />
          }
        />
      </View>
      <View style={{marginTop: 30}}>
        <MontserratText style={{fontWeight: "600"}}>
          Theo Chuyên Mục
        </MontserratText>
        {menuList.map(item => (
          <Button
            key={item.key}
            text={item.title}
            handlePress={() => navigation.navigate("RouteScreens")}
          />
        ))}
      </View>
    </View>
  );
}
