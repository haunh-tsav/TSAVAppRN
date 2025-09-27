import { RootStackParamList } from '@/navigation/types'
import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

// Khai báo type cho route prop
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'goi-tps'>

const GoiTPSScreen = () => {
  const route = useRoute<DetailScreenRouteProp>()

  return (
    <View>
      <Text>GoiTPSScreen</Text>
    </View>
  )
}

export default GoiTPSScreen
