import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import Post from "./Post";
import { connect, useDispatch, useSelector } from "react-redux";
import { IRequestParams } from "../types/common";

import { AppDispatch, State } from "../redux/store";
import { getNews } from "../redux/posts/thunkApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { IDashboarData } from "../types/posts";

interface ITabRouteProps {
  pNewsList: IDashboarData;
}
const TabRoute = ({ pNewsList }: ITabRouteProps) => {
  
  return (
    <Layout>
      {pNewsList?.content?.map((item, i) => (
        <View key={i}>
          <Post item={item} />
        </View>
      ))}
    </Layout>
  );
};

const mapStateToProps = (state: State) => ({
  pNewsList: state.posts.dashboardData,
});

const mapDispatchToProps = null
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(TabRoute)
);
