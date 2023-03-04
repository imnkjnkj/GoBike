import { StyleSheet, useWindowDimensions, Animated } from "react-native";
import React, { useEffect } from "react";
import { TabBar, TabView } from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { sharedAction } from "../redux/actions";
import NewsRoute from "../components/routeScreens/NewsRoute";
import BikesGearRoute from "../components/routeScreens/BikesGearRoute";
import RepairRoute from "../components/routeScreens/RepairRoute";
import HealthRoute from "../components/routeScreens/HealthRoute";
import TrainingRoute from "../components/routeScreens/TrainingRoute";

interface Props {
  translateHeader: Animated.AnimatedMultiplication<string | number>;
}

const MenuHeaderTab = ({ translateHeader }: Props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "news", title: "NEWS" },
    { key: "bikeGear", title: "BIKES & GEAR" },
    { key: "repair", title: "REPAIR" },
    { key: "health", title: "HEALTH & NUTRITION" },
    { key: "training", title: "TRAINING" },
  ]);
  const { theme } = useSelector((state: State) => state.shared);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sharedAction.setCategoryValue(routes[index]));
  }, [routes, index]);

  const styles = StyleSheet.create({
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
  });
  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "news":
        return <NewsRoute />;
      case "bikeGear":
        return <BikesGearRoute />;
      case "repair":
        return <RepairRoute />;
      case "health":
        return <HealthRoute />;
      case "training":
        return <TrainingRoute />;
      default:
        return null;
    }
  };

  const FilterTabBar = (props: any) => {
    return (
      <Animated.View
        style={[
          styles.headerText,
          { transform: [{ translateY: translateHeader }] },
        ]}
      >
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: theme.tabIconSelected }}
          style={styles.tabBar}
          labelStyle={styles.labelStyle}
          pressColor={"transparent"}
          inactiveColor={theme.text}
          tabStyle={{ minHeight: 10 }}
          activeColor={theme.tabIconSelected}
          scrollEnabled={true}
          onIndexChange={setIndex}
        />
      </Animated.View>
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => <FilterTabBar {...props} />}
      swipeEnabled={true}
    />
  );
};

export default MenuHeaderTab;
