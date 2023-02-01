import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet,View} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import store from './redux/store'

export default function App(): React.ReactElement {
  const colorScheme=useColorScheme();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})