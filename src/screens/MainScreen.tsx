import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import Navigation from '../navigation'

export default function MainScreen() {
    const colorScheme = useColorScheme();
  return (
    <Navigation colorScheme={colorScheme} />

  )
}