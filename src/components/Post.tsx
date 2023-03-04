import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React,{useState} from "react";
import {useSelector} from "react-redux";
import {State} from "../redux/reducers";
import {HorizontalLine} from "./shared/Themed";
import {BarlowCondensedText,MontserratText} from "./shared/StyledText";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {IPost} from "../../types";

interface IPostProps {
  item: IPost,
}
const Post=({item}: IPostProps) => {
  const {theme}=useSelector((state: State) => state.shared);
  const layout=useWindowDimensions();
  const [saveIcon,setSaveIcon]=useState(false);
  const navigation=useNavigation();

  const styles=StyleSheet.create({
    title: {
      paddingHorizontal: 20,
    },
    thumbnail: {
      width: layout.width,
      height: 300,
      resizeMode: "stretch",
    },
    container: {
      marginBottom: 25,
    },
    footerContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 15,
      marginBottom: 20,
    },
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("PostDetail")}
    >
      <Image
        style={styles.thumbnail}
        source={{uri: item.thumbnail}}
      />
      <View style={styles.title}>
        <BarlowCondensedText
          size={20}
          color={theme.text}
          style={{marginVertical: 10}}
        >
          {item.title}
        </BarlowCondensedText>
        <MontserratText
          size={16}
          color={theme.text}
          style={{
            fontWeight: "500",fontStyle: "normal",textTransform: 'lowercase'
          }}
        >
          {item.sapo}
        </MontserratText>
        <View style={styles.footerContent}>
          <MontserratText
            size={13}
            color={theme.tint}
            style={{
              fontWeight: "600",
              fontStyle: "normal",
            }}
          >
            {item.category}
          </MontserratText>
          <Ionicons
            name={saveIcon? "ios-bookmark-sharp":"ios-bookmark-outline"}
            onPress={(e) => setSaveIcon((current) => !current)}
            color={theme.text}
            size={16}
          />
        </View>

        <HorizontalLine />
      </View>
    </TouchableOpacity>
  );
};

export default Post;
