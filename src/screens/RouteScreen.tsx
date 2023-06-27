import {View,StyleSheet,Platform} from "react-native";
import React,{useEffect,useState} from "react";
import Layout from "../layouts/Layout";
import Post from "../components/Post";
import {listData} from "../api/data/listPost";
import {BarlowCondensedText} from "../components/shared/StyledText";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import Constant from "expo-constants";
import {connect,useSelector} from "react-redux";
import {AppDispatch,State} from "../redux/store";
import {IRequestParams} from "../types/common";
import {getNews} from "../redux/posts/thunkApi";
import {PayloadAction} from "@reduxjs/toolkit";
import {IDashboarData} from "../types/posts";
import {CategoryId,fontStyleEnum} from "../enums/common";
import Loading from "../components/Loading";
import {RootStackParamList} from "../../types";

type RouteScreenNavigationProp=StackNavigationProp<
  RootStackParamList,
  "RouteScreen"
>;
type RouteScreenRouteProp=RouteProp<RootStackParamList,"RouteScreen">;

interface ITabRouteProps {
  navigation: RouteScreenNavigationProp;
  route: RouteScreenRouteProp;
  pNewsList: IDashboarData;
  pGetNews: (params: IRequestParams) => Promise<PayloadAction<unknown>>;
}
const RouteScreen=({route,pGetNews,pNewsList}: ITabRouteProps) => {
  const {theme}=useSelector((state: State) => state.shared);
  const styles=StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      paddingTop: Constant.statusBarHeight,
      position: "relative",
      zIndex: 1,
      alignItems: "center",
    },
    title: {
      marginVertical: 0,
    },
  });
  const {category,id}=route.params;
  const [loading,setLoading]=useState(true);
  const fetchData=async () => {
    await pGetNews({
      page: 0,
      size: 1000,
      sort: "updatedAt",
      categoryId: id,
    });
    await setLoading(false);
  };
  useEffect(() => {
    fetchData();
  },[id]);
  if(loading) {
    return <Loading color={theme.colorLogo} />;
  } else {
    return (
      <View style={styles.container}>
        <BarlowCondensedText
          size={32}
          color={theme.colorLogo}
          style={styles.title}
          fontStyle={fontStyleEnum.SemiBold}
        >
          {category}
        </BarlowCondensedText>
        <Layout>
          {pNewsList.content?.map((item,i) => (
            <View key={i}>
              <Post item={item} key={i} />
            </View>
          ))}
        </Layout>
      </View>
    );
  }
};
const mapStateToProps=(state: State) => ({
  pNewsList: state.posts.dashboardData,
});

const mapDispatchToProps=(dispatch: AppDispatch) => ({
  pGetNews: (params: IRequestParams) => dispatch(getNews(params)),
});
export default React.memo(
  connect(mapStateToProps,mapDispatchToProps)(RouteScreen)
);
