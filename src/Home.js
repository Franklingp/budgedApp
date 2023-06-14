import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />
      <Button title="Go to About" onPress={() => navigation.navigate("About")} />
    </View>
  )
}