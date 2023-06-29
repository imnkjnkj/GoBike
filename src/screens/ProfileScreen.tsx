import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { AppDispatch, State } from "../redux/store";
import { connect, useSelector } from "react-redux";
import {
  BarlowCondensedText,
  MontserratText,
} from "../components/shared/StyledText";
import { fontStyleEnum } from "../enums/common";
import { IUserProfileRes } from "../types/users";
import { Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

type ImageInfo = {
  uri: string;
  id: number;
};
interface IProfileScreenProps {
  pUserInfor: IUserProfileRes;
}
function ProfileScreen({ pUserInfor }: IProfileScreenProps) {
  const { theme } = useSelector((state: State) => state.shared);
  const layout = useWindowDimensions();
  const [image, setImage] = useState<string>();


  const styles = StyleSheet.create({
    text: {
      borderBottomColor: theme.colorLogoTint,
      borderBottomWidth: 1,
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: "stretch",
      borderRadius: 100,
      borderColor: theme.colorLogoTint,
      borderWidth: 2,
      alignSelf: "center",
    },
    container: {
      marginBottom: 25,
      justifyContent: "center",
      alignContent: "center",
      position: "relative",
    },
    centerItem: {
      alignSelf: "center",
    },
    iconAvatar: {
      position: "absolute",
      bottom: 0,
      right: 8,
      backgroundColor: '#edededcc',
      borderRadius:100,
      padding: 6
    },
  });
  const selectImages = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
      });

      if (!result.cancelled && result.uri) {
        const newImages: ImageInfo[] = Array.isArray(result.uri)
          ? result.uri.map((uri, index) => ({ uri, id: index }))
          : [{ uri: result.uri, id: 0 }];

          setImage(result.uri);
      }
    } catch (error) {
    }
  };
  useEffect(() => {
    setImage("https://i.imgur.com/Pty9cGh.png");
  }, []);
  return (
    <MainLayout>
      <View style={[styles.centerItem, styles.container]}>
        <BarlowCondensedText
          fontStyle={fontStyleEnum.SemiBold}
          color={theme.colorLogo}
          size={40}
          textAlign={"center"}
        >
          PROFILE
        </BarlowCondensedText>
        <View style={{ position: "relative" }}>
          <Image
            style={styles.image}
            source={{ uri: image }}
          ></Image>
          <Ionicons
            style={styles.iconAvatar}
            name="camera"
            size={32}
            color={theme.colorLogo}
            onPress={selectImages}
          />
        </View>
      </View>

      <View style={{ paddingHorizontal: 10, marginBottom: 40 }}>
        <View style={{ paddingBottom: 10 }}>
          <BarlowCondensedText
            fontStyle={fontStyleEnum.SemiBold}
            color={theme.colorLogo}
            size={18}
            style={styles.text}
          >
            Account
          </BarlowCondensedText>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MontserratText>Username</MontserratText>
            <MontserratText>{pUserInfor.username}</MontserratText>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MontserratText>Email</MontserratText>
            <MontserratText>{pUserInfor.email}</MontserratText>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MontserratText>Password</MontserratText>
            <MontserratText>*********</MontserratText>
          </View>
        </View>
        <Divider />

        <View>
          <BarlowCondensedText
            fontStyle={fontStyleEnum.SemiBold}
            color={theme.colorLogo}
            size={18}
            style={styles.text}

          >
            Profile
          </BarlowCondensedText>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MontserratText>Name</MontserratText>
            <MontserratText>KEVIN CORTEZ</MontserratText>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MontserratText>Gender</MontserratText>
            <MontserratText>Male</MontserratText>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MontserratText>Phone number</MontserratText>
            <MontserratText>015458489234</MontserratText>
          </View>
        </View>
      </View>
    </MainLayout>
  );
}
const mapStateToProps = (state: State) => ({
  pUserInfor: state.user.userProfile,
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
