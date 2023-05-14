/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {BikesCategoryId,CategoryId} from "./src/enums/common";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList={
  Root: NavigatorScreenParams<RootTabParamList>|undefined;
  Modal: undefined;
  NotFound: undefined;
  Post: undefined;
  PostDetailScreen: undefined;
  RouteScreen: {category: string; id: CategoryId};
  LogIn: undefined;
  HomeScreen: undefined;
  MainScreen: undefined;
  ProfileScreen: undefined;
  CreatePostScreen: undefined;
  BikeInforScreen: {category: string; id?: BikesCategoryId};
  BikeDetailScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList>=
  NativeStackScreenProps<RootStackParamList,Screen>;

export type RootTabParamList={
  HomeScreen: undefined;
  MenuScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList>=
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList,Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
interface Theme {
  light: string;
  dark: string;
}

export interface IPost {
  id: number;
  thumbnail: string;
  title: string;
  sapo: string;
  category: string;
  publishedTime: Date;
  content: string;
}
