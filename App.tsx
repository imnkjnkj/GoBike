import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStore } from "redux";
import reducer from "./hooks/reducer";
import { Provider, useDispatch } from 'react-redux';

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Appearance } from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const store = createStore(reducer);
  const dispatch = useDispatch();
  const colorTheme = Appearance.getColorScheme() || 'dark';
  useEffect(() => {
    dispatch({type: 'SET_THEME', payload: colorTheme })
  }, [])
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}


