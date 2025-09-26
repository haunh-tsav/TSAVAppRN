import { RootStackParamList } from '@/navigation/types'
import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

// Khai báo type cho route prop
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'TPSDetails'>

const GoiTPSScreen = () => {
  const route = useRoute<DetailScreenRouteProp>()
  const { key } = route.params // Nhận tham số

  return (
    <View>
      <Text>GoiTPSScreen with key: ${key}</Text>
    </View>
  )
}

export default GoiTPSScreen
