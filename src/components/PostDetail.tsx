import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useNavigationState, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
const PostDetail = ({currentTab}: any) => {
  const route = useRoute();
  const state = useSelector((state: State) => state.shared);
  console.log(state);

  return (
    <View>
      <Text>PostDetail</Text>
    </View>
  );
};

export default PostDetail;
