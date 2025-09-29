import { useTheme } from '@/theme'
import { IconLogo } from '@/theme/assets/icons'
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
    <View
      className={`bg-[${colors.primary['200']}] border-[0.5] border-[${colors.primary}]`}
    >
      <View className="bg-white w-[42] h-[42] rounded-full">
        <IconLogo className="object-contain" />
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  )
}
