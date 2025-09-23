import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

const KhoScreen = () => {
  const { name } = useRoute()
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default KhoScreen
