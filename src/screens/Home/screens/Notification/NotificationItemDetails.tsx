import { RootStackParamList } from '@/navigation/types'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

export default function NotificationItemDetails() {
  const navigation = useNavigation<RootStackParamList>()
  const route = useRoute<RouteProp<RootStackParamList>>()
  const { id } = route.params!

  return (
    <View>
      <Text>Details: {id}</Text>
    </View>
  )
}
