import NotificationItem, {
  NotificationItemProps,
} from '@/screens/Home/screens/Notification/components/NotificationItem'
import React from 'react'
import { FlatList, View } from 'react-native'

const fixedData: NotificationItemProps[] = [
  {
    title: 'Title',
    summary: 'string;',
    dateTime: 'Date time',
    status: false,
  },
  {
    title: 'Title2',
    summary: 'string2',
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
