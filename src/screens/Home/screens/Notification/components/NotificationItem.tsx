import { useTheme } from '@/theme'
import { cn } from '@/utils/hepler'
import React from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import HighlightedText, { Highlight } from 'react-native-highlighter'

export interface NotificationItemProps {
  avatarLabel: string
  title: string
  summary: string
  dateTime: string
  status: boolean
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function NotificationItem(props: NotificationItemProps) {
  const { colors } = useTheme()
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        className={cn(
          'flex-row gap-x-2 px-4 py-2 justify-between',
          !props.status && 'bg-primaryLight ',
        )}
      >
        <View className="flex-row">
          <View
            className={`bg-primary w-[64] h-[64] rounded-full justify-center items-center`}
          >
            <Text className={`text-[${colors.text}] text-center`}>
              <HighlightedText
                highlights={[
                  new Highlight({
                    keywords: ['Chuyền'],
                    style: { color: colors.accent, fontWeight: 'bold' },
                  }),
                  new Highlight({
                    keywords: ['user interface', 'highlight'],
                    style: { color: colors.white },
                  }),
                ]}
                className="text-white font-bold"
              >
                {props.avatarLabel}
              </HighlightedText>
            </Text>
          </View>
          <View className="gap-2 flex-col ml-2">
            <View>
              <Text className="text-error font-bold text-base">
                {props.title}
              </Text>
              <Text className="text-text font-semibold">{props.summary}</Text>
            </View>
            <Text className="text-xxs text-textSecondary">
              {props.dateTime}
            </Text>
          </View>
        </View>
        <View className="flex-row gap-1 items-end">
          <Text className="text-textSecondary text-xs">
            {props.status ? 'Đã đọc' : 'Chưa đọc'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
