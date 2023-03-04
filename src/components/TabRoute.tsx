import {View,Text} from "react-native";
import React from "react";
import Layout from "../layouts/Layout";
import Post from "./Post";
import {listData} from "../api/data/listPost";

interface ITabRouteProps {
  category?: string
}
const TabRoute=({category}: ITabRouteProps) => {
  const list=listData.filter(x => category? x.category===category:x)


  return <Layout>
    {list.map((item,i) => (
      <View key={i}>
        <Post item={item} />
      </View>
    ))}

  </Layout>;
};

export default React.memo(TabRoute);
