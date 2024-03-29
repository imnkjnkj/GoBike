/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import { RootStackParamList, RootTabParamList } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import Post from "../components/Post";
import PostDetailScreen from "../screens/PostDetailScreen";
import RouteScreen from "../screens/RouteScreen";
import LogInScreen from "../screens/LogInScreen";
import MainScreen from "../screens/MainScreen";
import CreatePostScreen from "../screens/Admin/CreatePostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BikeInforScreen from "../screens/BikeInforScreen";
import BikeDetailScreen from "../screens/BikeDetailScreen";
import SignUpScreen from "../screens/SignUpScreen";
import PostsOverview from "../screens/Admin/PostsOverview";
import CreateInformation from "../screens/Admin/CreateInformation";
import UsersOverview from "../screens/Admin/UsersOverview";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      independent={true}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RouteScreen"
        component={RouteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BikeInforScreen"
        component={BikeInforScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BikeDetailScreen"
        component={BikeDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UsersOverviewScreen"
        component={UsersOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostsOverviewScreen"
        component={PostsOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateInformationScreen"
        component={CreateInformation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { theme } = useSelector((state: State) => state.shared);

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveBackgroundColor: theme.background,
        tabBarInactiveBackgroundColor: theme.background,
        tabBarActiveTintColor: theme.colorLogo,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "ios-home" : "ios-home-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "ios-menu" : "ios-menu-outline"}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
// const PostNavigation=createBottomTabNavigator<PostParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
