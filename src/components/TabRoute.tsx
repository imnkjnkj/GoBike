import { View, Text } from "react-native";
import React from "react";
import Layout from "../layouts/Layout";
import Post from "./Post";

const TabRoute = () => {
  var myloop = [];

  for (let i = 0; i < 10; i++) {
    myloop.push(
      <View key={i}>
        <Post />
      </View>
    );
  }
  return <Layout>{myloop}</Layout>;
};

export default React.memo(TabRoute);
