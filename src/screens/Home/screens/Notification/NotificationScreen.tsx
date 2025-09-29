import NotificationItem, {
  NotificationItemProps,
} from '@/screens/Home/screens/Notification/components/NotificationItem'
import React from 'react'
import { FlatList, View } from 'react-native'

const fixedData: NotificationItemProps[] = [
  {
    title: 'Vừa gọi yêu cầu bảo trì máy',
    summary: 'Máy gấp S20P US - Tại CĐ 49-2;',
    dateTime: 'Date time',
    status: false,
  },
  {
    title: 'Vừa gọi yêu cầu bảo trì máy',
    summary: 'Máy gấp S20P US - Tại CĐ 49-2',
    dateTime: 'Date time2',
    status: true,
  },
]

export default function NotificationScreen() {
  return (
    <View>
      <FlatList
        data={fixedData}
        renderItem={({ item, index }) => {
          return (
            <NotificationItem
              key={index}
              title={item.title}
              summary={item.summary}
              dateTime={item.dateTime}
              status={item.status}
            />
          )
        }}
      />
    </View>
  )
}
