import { View, StyleSheet, Platform } from "react-native";
import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import Post from "../components/Post";
import { listData } from "../api/data/listPost";
import { BarlowCondensedText } from "../components/shared/StyledText";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Constant from "expo-constants";
import { connect, useSelector } from "react-redux";
import { AppDispatch, State } from "../redux/store";
import { IRequestParams } from "../types/common";
import { getNews } from "../redux/posts/thunkApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { IDashboarData } from "../types/posts";
import { CategoryId } from "../enums/common";

type RootStackParamList = {
  RouteScreen: { category: string, id: CategoryId };
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RouteScreen"
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "RouteScreen">;

interface ITabRouteProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
  pNewsList: IDashboarData;
  pGetNews: (params: IRequestParams) => Promise<PayloadAction<unknown>>;
}
const RouteScreen = ({ route, pGetNews, pNewsList }: ITabRouteProps) => {
  const { theme } = useSelector((state: State) => state.shared);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      marginTop: Platform.OS === "android" ? Constant.statusBarHeight : 0,
      position: "relative",
      zIndex: 1,
      alignItems: "center",
    },
    title: {
      marginVertical: 10,
    },
  });
  const { category, id } = route.params;
  useEffect(() => {
    pGetNews({
      page: 0,
      size: 1000,
      sort: "updatedAt",
      categoryId: id,
    });
  }, [id]);
  const list = listData.filter((x) => x.category === category);

  return (
    <View style={styles.container}>
      <BarlowCondensedText
        size={32}
        color={theme.colorLogo}
        style={styles.title}
      >
        {category}
      </BarlowCondensedText>
      <Layout>
        {pNewsList.content?.map((item, i) => (
          <View key={i}>
            <Post item={item} />
          </View>
        ))}
      </Layout>
    </View>
  );
};
const mapStateToProps = (state: State) => ({
  pNewsList: state.posts.dashboardData,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pGetNews: (params: IRequestParams) => dispatch(getNews(params)),
});
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(RouteScreen)
);
