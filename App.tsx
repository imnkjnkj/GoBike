import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Appearance, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch } from "react-redux";
import useCachedResources from "./src/hooks/useCachedResources";
import { LogBox } from "react-native";
import { store } from "./src/redux/store";
import { setThemeApp } from "./src/redux/shared";
import MainScreen from "./src/screens/MainScreen";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const App = () => {
  const isLoadingComplete = useCachedResources();
  const dispatch = useDispatch();
  LogBox.ignoreLogs(["Sending"]);
  const colorTheme = Appearance.getColorScheme() || "dark";
  useEffect(() => {
    dispatch(setThemeApp(colorTheme));
  }, []);

  if (!isLoadingComplete) {
    return <Text>Error</Text>;
  } else {
    return (
      <SafeAreaProvider>
        <MainScreen />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};
export default AppWrapper;
