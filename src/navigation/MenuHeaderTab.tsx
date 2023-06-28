import {
  StyleSheet,
  useWindowDimensions,
  Animated,
  ActivityIndicator,
  View,
} from "react-native";
import React,{useEffect,useState} from "react";
import {TabBar,TabView} from "react-native-tab-view";
import {connect,useDispatch,useSelector} from "react-redux";
import {AppDispatch,State} from "../redux/store";
import TabRoute from "../components/TabRoute";
import {setCategoryValue} from "../redux/shared";
import {CategoryId} from "../enums/common";
import {IRequestParams} from "../types/common";
import {getNews} from "../redux/posts/thunkApi";
import {PayloadAction} from "@reduxjs/toolkit";
import Loading from "../components/Loading";

interface Props {
  pGetNews: (params: IRequestParams) => Promise<PayloadAction<unknown>>;
  translateHeader: Animated.AnimatedMultiplication<string|number>;
}

const MenuHeaderTab=({translateHeader,pGetNews}: Props) => {
  const layout=useWindowDimensions();
  const [index,setIndex]=React.useState(0);
  const [routes]=React.useState([
    {key: "news",title: "NEWS",id: undefined},
    {key: "bikeGear",title: "BIKES & GEAR",id: CategoryId.BIKEGEAR},
    {key: "repair",title: "REPAIR",id: CategoryId.REPAIR},
    {
      key: "health",
      title: "HEALTH & NUTRITION",
      id: CategoryId.HEALTHNUTRITION,
    },
    {key: "training",title: "TRAINING",id: CategoryId.TRAINING},
  ]);
  const {theme}=useSelector((state: State) => state.shared);
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(true);
  const fetchData=async () => {
    await pGetNews({
      page: 0,
      size: 1000,
      sort: "updatedAt",
      categoryId: routes[index].id,
    });
    await setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    dispatch(setCategoryValue(routes[index]));
    fetchData();
  },[routes,index]);

  const styles=StyleSheet.create({
    headerText: {
      width: "100%",
      zIndex: 1,
      marginTop: 45,
      fontFamily: "Barlow Condensed",
    },
    labelStyle: {
      height: 15,
      color: theme.tint,
      padding: 0,
      margin: 0,
    },
    tabBar: {
      backgroundColor: "transparent",
      overflow: "hidden",
      marginTop: 5,
    },
    indicator: {
      backgroundColor: "blue",
      width: "100%",
    },
    spinnerTextStyle: {
      color: "#FFF",
    },
  });
  const renderTabRoute=() => {
    if(loading) {
      return <Loading color={theme.colorLogo} />;
    }
    return <TabRoute />;
  };
  const renderScene=({route}: any) => {
    switch(route.key) {
      case "news":
        return renderTabRoute();
      case "bikeGear":
        return renderTabRoute();
      case "repair":
        return renderTabRoute();
      case "health":
        return renderTabRoute();
      case "training":
        return renderTabRoute();
      default:
        return null;
    }
  };

  const FilterTabBar=(props: any) => {
    return (
      <Animated.View
        style={[
          styles.headerText,
          {transform: [{translateY: translateHeader}]},
        ]}
      >
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: theme.tabIconSelected}}
          style={styles.tabBar}
          labelStyle={styles.labelStyle}
          pressColor={"transparent"}
          inactiveColor={theme.text}
          tabStyle={{minHeight: 10}}
          activeColor={theme.tabIconSelected}
          scrollEnabled={true}
          onIndexChange={setIndex}
        />
      </Animated.View>
    );
  };

  return (
    <TabView
      navigationState={{index,routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={(props) => <FilterTabBar {...props} />}
      swipeEnabled={true}
    />
  );
};

const mapStateToProps=null;

const mapDispatchToProps=(dispatch: AppDispatch) => ({
  pGetNews: (params: IRequestParams) => dispatch(getNews(params)),
});
export default React.memo(
  connect(mapStateToProps,mapDispatchToProps)(MenuHeaderTab)
);
