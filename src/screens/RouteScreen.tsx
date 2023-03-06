import { View, StyleSheet, Platform } from "react-native";
import React from "react";
import Layout from "../layouts/Layout";
import Post from "../components/Post";
import { listData } from "../api/data/listPost";
import { BarlowCondensedText } from "../components/shared/StyledText";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Constant from "expo-constants";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";

type RootStackParamList = {
  RouteScreen: { category: string };
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RouteScreen"
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "RouteScreen">;

interface ITabRouteProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}
const RouteScreen = ({ route }: ITabRouteProps) => {
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
  const { category } = route.params;
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
        {list.map((item, i) => (
          <View key={i}>
            <Post item={item} />
          </View>
        ))}
      </Layout>
    </View>
  );
};

export default React.memo(RouteScreen);
