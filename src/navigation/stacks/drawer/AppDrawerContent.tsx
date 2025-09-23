import { DrawerList, DrawerRoutes } from '@/navigation/routes'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { useNavigationState } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { List } from 'react-native-paper'

const Cats = [
  DrawerRoutes.Cat.child.KyLucTraiVai,
  DrawerRoutes.Cat.child.XacNhanKyLucTraiVai,
]

const ERPs = [
  DrawerRoutes.ERP.child.KhachHang,
  DrawerRoutes.ERP.child.NhaCungCap,
  DrawerRoutes.ERP.child.Kho,
]

export function AppDrawerContent(props: DrawerContentComponentProps) {
  const currentRouteName = useNavigationState((state) => {
    return state.routes[state.index].name // screen hiện tại
  })
  const [currentGroupName, setCurrentGroupName] = useState<string>(() => {
    // Childs => currentRouteName === child.path => groupName
    const childs = DrawerList.map((item) => item.childs).flat()
    const currentChild = childs.find((item) => item.path === currentRouteName)
    console.log(currentChild?.name)
    return currentChild ? currentChild.groupName : ''
  })

  const handlePressed = (path: string, groupName: string) => {
    props.navigation.navigate(path)
    setCurrentGroupName(groupName)
  }

  // Accordion được active nếu nó mở HOẶC có item con được chọn
  const isAccordionActive =
    Cats.every((item) => item.path == currentRouteName) ||
    ERPs.every((item) => item.path == currentRouteName)

  const colorActive = (status: boolean) => {
    return status ? 'tomato' : 'gray'
  }

  return (
    <DrawerContentScrollView {...props}>
      {/* Logo */}
      <View>
        <Image
          source={require('../../../theme/assets/images/logo/ic_launcher.png')}
          resizeMode="contain"
          style={{ width: 64, height: 64, alignSelf: 'center' }}
        />
        <Text>{currentRouteName}</Text>

        <List.Section title="">
          {/* Cats */}
          {DrawerList.map((group) => {
            return (
              <List.Accordion
                key={group.key}
                title={group.name}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={group.iconName}
                    color={colorActive(currentGroupName === group.groupName)}
                  />
                )}
                titleStyle={{
                  color: colorActive(currentGroupName === group.groupName),
                }}
              >
                {group.childs.map((item) => {
                  return (
                    <List.Item
                      key={item.path}
                      title={item.name}
                      onPress={() => handlePressed(item.path, item.groupName)}
                      style={{ backgroundColor: '#ffffffff', paddingLeft: 36 }}
                      titleStyle={{
                        color:
                          currentRouteName === item.path ? 'tomato' : '#333',
                      }}
                      left={(props) => (
                        <List.Icon
                          {...props}
                          icon={item.iconName}
                          color={colorActive(item.path === currentRouteName)}
                        />
                      )}
                    />
                  )
                })}
              </List.Accordion>
            )
          })}
        </List.Section>
      </View>
    </DrawerContentScrollView>
  )
}
