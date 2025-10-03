import { RootStackParamList } from '@/navigation/types'
import NotificationItem, {
  NotificationItemProps,
} from '@/screens/Home/screens/Notification/components/NotificationItem'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, View } from 'react-native'

type NotificationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'thong-bao-chi-tiet'
>

const fixedData: NotificationItemProps[] = [
  {
    avatarLabel: 'Chuyền BD1.P3',
    title: 'Vừa gọi yêu cầu bảo trì máy',
    summary: 'Máy gấp S20P US - Tại CĐ 49-2',
    dateTime: '2024-04-12T00:00:00.000+07:00',
    status: false,
  },
  {
    avatarLabel: 'Chuyền BD1.P2',
    title: 'Vừa gọi yêu cầu bảo trì máy',
    summary: 'Máy gấp S20P US - Tại CĐ 49-2',
    dateTime: '2024-04-12T00:00:00.000+07:00',
    status: true,
  },
  {
    avatarLabel: 'Chuyền BD1.P3',
    title: 'Vừa gọi yêu cầu bảo trì máy',
    summary: 'Máy gấp S20P US - Tại CĐ 49-2',
    dateTime: '2024-04-12T00:00:00.000+07:00',
    status: false,
  },
  {
    avatarLabel: 'Chuyền BD1.P2',
    title: 'Vừa gọi yêu cầu bảo trì máy',
    summary: 'Máy gấp S20P US - Tại CĐ 49-2',
    dateTime: '2024-04-12T00:00:00.000+07:00',
    status: false,
  },
]

export default function NotificationScreen() {
  const navigation = useNavigation<NotificationScreenNavigationProp>()

  return (
    <View>
      <FlatList
        data={fixedData}
        renderItem={({ item, index }) => {
          return (
            <NotificationItem
              key={index}
              avatarLabel={item.avatarLabel}
              title={item.title}
              summary={item.summary}
              dateTime={item.dateTime}
              status={item.status}
              onPress={() =>
                navigation.navigate('thong-bao-chi-tiet', {
                  id: `${index}`,
                })
              }
            />
          )
        }}
      />
    </View>
  )
}
