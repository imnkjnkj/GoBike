import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "Barlow CondensedSemiBold": require("../assets/fonts/BarlowCondensed-SemiBold.ttf"),
          "Barlow Condensed": require("../assets/fonts/BarlowCondensed-Regular.ttf"),
          "Barlow CondensedLight": require("../assets/fonts/BarlowCondensed-Light.ttf"),
          "Barlow CondensedMedium": require("../assets/fonts/BarlowCondensed-Medium.ttf"),
          MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
          MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
          Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
