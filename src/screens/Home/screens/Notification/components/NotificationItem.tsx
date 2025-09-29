import { useTheme } from '@/theme'
import React from 'react'
import { Text, View } from 'react-native'

export type NotificationItemProps = {
  title: string
  summary: string
  dateTime: string
  status: boolean
}

export default function NotificationItem(props: NotificationItemProps) {
  const { colors } = useTheme()
  return (
    <View className={`bg-[${colors.primaryDark}] flex-row gap-4`}>
      <View className="bg-white w-[53] h-[53] rounded-full">
        <Text className={`text-[${colors.text}]`}>{props.dateTime}</Text>
      </View>
      <View>
        <Text className={`text-[${colors.text}]`}>{props.title}</Text>
      </View>
    </View>
  )
}
