import { DrawerList } from '@/navigation/routes'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { useNavigationState } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { List } from 'react-native-paper'

export function AppDrawerContent(props: DrawerContentComponentProps) {
  const currentRouteName = useNavigationState((state) => {
    return state.routes[state.index].name
  })

  const [currentGroupName, setCurrentGroupName] = useState<string>('')
  const [expandedGroups, setExpandedGroups] = useState<string[]>([])

  // 🔹 Cập nhật group hiện tại khi route đổi
  useEffect(() => {
    const childs = DrawerList.flatMap((item) => item.childs)
    const currentChild = childs.find((item) => item.path === currentRouteName)
    const groupName = currentChild?.groupName ?? ''
    setCurrentGroupName(groupName)

    // 🔹 Tự động expand accordion chứa item đang active
    if (groupName && !expandedGroups.includes(groupName)) {
      setExpandedGroups((prev) => [...prev, groupName])
    }
  }, [currentRouteName])

  const handlePressed = (path: string, groupName: string) => {
    props.navigation.navigate(path)
    setCurrentGroupName(groupName)
  }

  const toggleAccordion = (groupName: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupName)
        ? prev.filter((g) => g !== groupName)
        : [...prev, groupName],
    )
  }

  const colorActive = (status: boolean) => (status ? 'tomato' : 'gray')

  return (
    <DrawerContentScrollView {...props}>
      {/* Logo */}
      <View>
        <Image
          source={require('../../../theme/assets/images/logo/ic_launcher.png')}
          resizeMode="contain"
          style={{ width: 64, height: 64, alignSelf: 'center' }}
        />
        <List.Section>
          {DrawerList.map((group) => {
            const isGroupActive = currentGroupName === group.groupName
            return (
              <List.Accordion
                key={group.key}
                title={group.name}
                expanded={expandedGroups.includes(group.groupName)} // ✅ controlled
                onPress={() => toggleAccordion(group.groupName)}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={group.iconName}
                    color={colorActive(isGroupActive)}
                  />
                )}
                titleStyle={{ color: colorActive(isGroupActive) }}
                style={{ backgroundColor: '#ffffff' }}
              >
                {group.childs.map((item) => (
                  <List.Item
                    key={item.path}
                    title={item.name}
                    onPress={() => handlePressed(item.path, item.groupName)}
                    style={{ backgroundColor: '#ffffff', paddingLeft: 36 }}
                    titleStyle={{
                      color: currentRouteName === item.path ? 'tomato' : '#333',
                    }}
                    left={(props) => (
                      <List.Icon
                        {...props}
                        icon={item.iconName}
                        color={colorActive(item.path === currentRouteName)}
                      />
                    )}
                  />
                ))}
              </List.Accordion>
            )
          })}
        </List.Section>
      </View>
    </DrawerContentScrollView>
  )
}
