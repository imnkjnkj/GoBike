import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Appearance, Text, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch } from "react-redux";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import { sharedAction } from "./src/redux/actions";
import store from "./src/redux/store";
import { LogBox } from "react-native";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  LogBox.ignoreLogs(["Sending"]);
  const colorTheme = Appearance.getColorScheme() || "dark";
  useEffect(() => {
    dispatch(sharedAction.setThemeApp(colorTheme));
  }, []);

  if (!isLoadingComplete) {
    return <Text>Error</Text>;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};
export default AppWrapper;
