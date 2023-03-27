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
  pGetNews: (params: IRequestParams) => Promise<PayloadAction<unknown>>;
}
const TabRoute = ({ pGetNews, pNewsList }: ITabRouteProps) => {
  // const list = listData.filter((x) => (category ? x.category === category : x));
  const {category}=useSelector((state: State) => state.shared);

  const fetchData = async (): Promise<IDashboarData> => {
    const res = await pGetNews({
      page: 1,
      size: 100,
      sort: "updatedAt",
      categoryId: category.id,
    });
    const latestNews = res.payload as IDashboarData;
    return latestNews;
  };
  
  useEffect(() => {
    pGetNews({
      page: 0,
      size: 1000,
      sort: "updatedAt",
      categoryId: category.id,
    });
  }, [category]);
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

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pGetNews: (params: IRequestParams) => dispatch(getNews(params)),
});
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(TabRoute)
);
