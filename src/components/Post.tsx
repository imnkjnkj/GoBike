import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { BarlowCondensedText, MontserratText } from "./StyledText";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";

const Post = () => {
  const { theme } = useSelector((state: State) => state.shared);

  const layout = useWindowDimensions();
  const styles = StyleSheet.create({
    title: {
      padding: 10,
    },
    thumbnail: {
      width: layout.width,
      height: 300,
      resizeMode: "stretch",
    },
    container: {
      marginBottom: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={require("../assets/images/thumbnail.jpg")}
      />
      <View style={styles.title}>
        <BarlowCondensedText size={20} color={theme.text}>
          The 9 Best Kids Bikes You Can Buy Right Now
        </BarlowCondensedText>
        <MontserratText
          size={15}
          color={theme.text}
          style={{ fontWeight: "500", fontStyle: "normal" }}
        >
          There's no better way to get kids out of the screen-staring habit than
          by putting them on a bicycle. It's a lifetime activity that pays big
          dividends in everything from hand-eye coordination to long-term
          cardiovascular health.
        </MontserratText>
        <MontserratText
          size={15}
          color={theme.text}
          style={{ fontWeight: "600", fontStyle: "normal", marginTop: 15 }}
        >
          Bikes & Gear
        </MontserratText>
      </View>
    </View>
  );
};

export default Post;
