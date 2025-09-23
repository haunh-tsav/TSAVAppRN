import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

const KhachHangScreen = () => {
  const { name } = useRoute()
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default KhachHangScreen
