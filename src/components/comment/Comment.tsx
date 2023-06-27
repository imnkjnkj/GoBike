import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React,{useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {useSelector} from "react-redux";
import {State} from "../../redux/store";
import Constant from "expo-constants";
import {BarlowCondensedText} from "../shared/StyledText";
import {fontStyleEnum} from "../../enums/common";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

export interface IComment {
  id: number
  username: string,
  email: string,
  name: string,
  date: Date,
  avatar: string,
  content: string,
}
const commentsData: IComment[]=[
  {
    id: 1,
    username: "matt@mail.com",
    email: "matt@mail.com",
    name: "Matt Phillips",
    date: new Date(),
    avatar: "https://i.imgur.com/efGydCU.png",
    content: `You can get a full-carbon Fezzari King's Peak on sale now for $2K. I have one and love it. Bought mine a couple of years ago. The Elite is $2700.`,
  },
  {
    id: 2,
    username: "matt@mail.com",
    email: "matt@mail.com",
    name: "DAN CHABANOV",
    date: new Date(),
    avatar: "https://i.imgur.com/bLXoeZE.png",
    content: `You can get a full-carbon Fezzari King's Peak on sale now for $2K. I have one and love it. Bought mine a couple of years ago. The Elite is $2700.`,
  },
];
export default function Comment() {
  const width=Dimensions.get("window").width;
  const {theme}=useSelector((state: State) => state.shared);
  const styles=StyleSheet.create({
    wrapper: {
      fontFamily: "Montserrat",
    },
    container: {
      marginBottom: 40,

    },
    createDate: {
      marginVertical: 10,
    },
    header: {
      flexDirection: "row",
      gap: 2,
      width: width,
      paddingVertical: 6,
      marginTop: 8,
      marginBottom: 9,
    },
    commentIcon: {
      flexDirection: "row",
      gap: 2,
      marginLeft: 32,
    },
  });
  const [like,setLike]=useState(false);
  const [comments,setComments]=useState(commentsData);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={(e) => setLike((current) => !current)} style={{flexDirection: 'row'}}>
          <Ionicons
            name={like? "ios-heart":"ios-heart-outline"}
            size={20}
            color={theme.colorLogo}
          />
          <BarlowCondensedText fontStyle={fontStyleEnum.Medium}>
            Like
          </BarlowCondensedText>
        </TouchableOpacity>
        <View style={styles.commentIcon}>
          {comments.length>0? (
            <>
              <Ionicons
                name="md-chatbubbles"
                size={20}
                color={theme.colorLogo}
              />
              <BarlowCondensedText fontStyle={fontStyleEnum.Medium}>
                Comments
              </BarlowCondensedText>
            </>
          ):(
            <>
              <Ionicons
                name="md-chatbubbles-outline"
                size={20}
                color={theme.colorLogo}
              />
              <BarlowCondensedText fontStyle={fontStyleEnum.Medium}>
                Comments
              </BarlowCondensedText>
            </>
          )}
        </View>
      </View>
      <View>
        <CommentInput />
      </View>
      <View>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </View>
    </View>
  );
}
