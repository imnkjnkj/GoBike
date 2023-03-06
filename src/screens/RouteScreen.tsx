import {View,Text} from "react-native";
import React from "react";
import Layout from "../layouts/Layout";
import Post from "../components/Post";
import {listData} from "../api/data/listPost";
import {BarlowCondensedText} from "../components/shared/StyledText";

interface ITabRouteProps {
  category?: string
}
const RouteScreen=({category}: ITabRouteProps) => {
  const list=listData.filter(x => x.category===category)


  return <View>
    <BarlowCondensedText>
      {category}
    </BarlowCondensedText>
    <Layout>
      {list.map((item,i) => (
        <View key={i}>
          <Post item={item} />
        </View>
      ))}

    </Layout>
  </View>
};

export default React.memo(RouteScreen);
