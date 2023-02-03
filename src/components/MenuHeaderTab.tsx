import { View, StyleSheet, useWindowDimensions, Animated } from "react-native";
import React from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import EditScreenInfo from "./EditScreenInfo";
import { primaryColor } from "../constants/Colors";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
interface Props {
  animatedValue: Animated.Value;
  translateHeader: Animated.AnimatedMultiplication<string | number>;
}
const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const MenuHeaderTab = ({ animatedValue, translateHeader }: Props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "bikeGear", title: "BIKES & GEAR" },
    { key: "repair", title: "REPAIR" },
  ]);
  const { theme } = useSelector((state: State) => state.shared);
  console.log(theme);
  
  const styles = StyleSheet.create({
    headerText: {
      width: "100%",
      zIndex: 1,
      marginTop:50,
    },
  });
  const renderScene = SceneMap({
    bikeGear: () => <EditScreenInfo animatedValue={animatedValue} />,
    repair: SecondRoute,
  });
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
          style={{ backgroundColor: "transparent",}}
          labelStyle={{ color: theme.tabIconDefault }}
          pressColor={"transparent"}
          inactiveColor={theme.tabIconDefault}
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
    />
  );
};

export default MenuHeaderTab;
