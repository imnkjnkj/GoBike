import {StatusBar} from 'expo-status-bar'
import React,{useEffect} from 'react'
import {Appearance,Text} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider,useDispatch} from 'react-redux'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import {changeThemeAction} from './redux/actions'
import store from './redux/store'

const AppWrapper=() => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
const App=() => {
  const isLoadingComplete=useCachedResources();
  const colorScheme=useColorScheme();
  const dispatch=useDispatch();
  const colorTheme=Appearance.getColorScheme()||'dark';
  useEffect(() => {
    dispatch(changeThemeAction.setThemeApp(colorTheme))
  },[])

  if(!isLoadingComplete) {
    return <Text>Error</Text>
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
export default AppWrapper;
