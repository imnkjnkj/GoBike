import { View, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { IComment } from "./Comment";
import { BarlowCondensedText, MontserratText } from "../shared/StyledText";
import { fontStyleEnum } from "../../enums/common";

interface ICommentItemProps {
  comment: IComment;
}
export default function CommentItem({ comment }: ICommentItemProps) {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      marginBottom: 10,
    },
    avatar: {
      width: 44,
      height: 44,
      marginRight: 8,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          source={{ uri: comment.avatar }}
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
        ></Image>
      </View>
      <View>
        <BarlowCondensedText
          size={16}
          fontStyle={fontStyleEnum.Medium}
          style={{ textTransform: "capitalize" }}
        >
          {comment.name}
        </BarlowCondensedText>
        <MontserratText size={8}>
          {comment.date.toLocaleString()}
        </MontserratText>
        <MontserratText
          size={12}
          fontStyle={fontStyleEnum.Medium}
          style={{ maxWidth: Dimensions.get("window").width * 0.8 }}
        >
          {comment.content}
        </MontserratText>
      </View>
    </View>
  );
}
