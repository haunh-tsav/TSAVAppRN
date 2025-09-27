import { DrawerRoutes } from '@/navigation/routes'
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
    const childs = DrawerRoutes.flatMap((item) => item.childs)
    const currentChild = childs.find((item) => item.path === currentRouteName)
    const groupName = currentChild?.group ?? ''
    setCurrentGroupName(groupName)

    // 🔹 Tự động expand accordion chứa item đang active
    if (groupName !== '' && !expandedGroups.includes(groupName)) {
      setExpandedGroups((prev) => [...prev, groupName])
    }
  }, [currentRouteName, expandedGroups])

  const handlePressed = (path: string, groupName: string) => {
    props.navigation.navigate(path)
    setCurrentGroupName(groupName)
  }

  const toggleAccordion = (groupName: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupName)
        ? prev.filter((item) => item !== groupName)
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
        <View>
          {/* <List.Item
            title="Dashboard"
            onPress={() => handlePressed('dashboard', '')}
            style={{ backgroundColor: '#ffffff' }}
            titleStyle={{
              color: currentRouteName === 'dashboard' ? 'tomato' : '#333',
            }}
            left={(props) => (
              <List.Icon
                {...props}
                icon="folder"
                color={colorActive('dashboard' === currentRouteName)}
              />
            )}
          /> */}
          <List.Section>
            {DrawerRoutes.map((group) => {
              const isGroupActive = currentGroupName === group.group
              return (
                <List.Accordion
                  key={group.key}
                  title={group.label}
                  // expanded={expandedGroups.includes(group.group)} // ✅ controlled
                  onPress={() => toggleAccordion(group.group)}
                  left={(props) => {
                    return (
                      <group.icon
                        width={24}
                        height={24}
                        style={{
                          ...props.style,
                          color: colorActive(isGroupActive),
                        }}
                      />
                    )
                  }}
                  titleStyle={{ color: colorActive(isGroupActive) }}
                  style={{ backgroundColor: '#ffffff' }}
                >
                  {group.childs.map((item) => (
                    <List.Item
                      key={item.path}
                      title={item.label}
                      onPress={() => handlePressed(item.path, item.group ?? '')}
                      style={{ backgroundColor: '#ffffff', paddingLeft: 36 }}
                      titleStyle={{
                        color: colorActive(currentRouteName === item.path),
                      }}
                      left={(props) => {
                        return (
                          <group.icon
                            width={24}
                            height={24}
                            style={{
                              ...props.style,
                              color: colorActive(
                                item.path === currentRouteName,
                              ),
                            }}
                          />
                        )
                      }}
                    />
                  ))}
                </List.Accordion>
              )
            })}
          </List.Section>
        </View>
      </View>
    </DrawerContentScrollView>
  )
}
