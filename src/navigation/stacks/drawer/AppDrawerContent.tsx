import { DrawerList, DrawerRoutes } from '@/navigation/routes'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { useNavigationState } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
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
  const [expanded, setExpanded] = useState(
    ERPs.some((item) => item.path.match(currentRouteName)),
  )
  const currentRouteName = useNavigationState((state) => {
    return state.routes[state.index].name // screen hiện tại
  })

  const handlePressed = (path: string) => props.navigation.navigate(path)

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
          {DrawerList.map((item) => {
            return (
              <List.Accordion
                key={item.key}
                title={item.name}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={item.iconName}
                    color={colorActive(item.path === currentRouteName)}
                  />
                )}
                titleStyle={{
                  color: colorActive(item.path === currentRouteName),
                }}
              >
                {item.childs.map((item) => {
                  return (
                    <List.Item
                      key={item.path}
                      title={item.name}
                      onPress={() => handlePressed(item.path)}
                      style={[styles.item]}
                      titleStyle={[
                        styles.itemTitle,
                        currentRouteName === item.path &&
                          styles.itemTitleActive,
                      ]}
                      left={(props) => (
                        <List.Icon
                          {...props}
                          icon="folder"
                          color={colorActive(item.path === currentRouteName)}
                        />
                      )}
                    />
                  )
                })}
              </List.Accordion>
            )
          })}
          {/* <List.Accordion
            title={DrawerRoutes.Cat.label}
            left={(props) => (
              <List.Icon
                {...props}
                icon="folder"
                color={colorActive(
                  Cats.some((item) => item.path === currentRouteName),
                )}
              />
            )}
            titleStyle={{
              color: colorActive(
                Cats.some((item) => item.path === currentRouteName),
              ),
            }}
          >
            {Cats.map((item) => {
              return (
                <List.Item
                  key={item.path}
                  title={item.label}
                  onPress={() => handlePressed(item.path)}
                  style={[styles.item]}
                  titleStyle={[
                    styles.itemTitle,
                    currentRouteName === item.path && styles.itemTitleActive,
                  ]}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="folder"
                      color={colorActive(item.path === currentRouteName)}
                    />
                  )}
                />
              )
            })}
          </List.Accordion> */}

          {/* ERP Group */}
          {/* <List.Accordion
            expanded={expanded}
            onPress={() => setExpanded(!expanded)}
            title={DrawerRoutes.ERP.label}
            left={(props) => (
              <List.Icon
                {...props}
                icon="folder"
                color={colorActive(
                  ERPs.some((item) => item.path === currentRouteName),
                )}
              />
            )}
            titleStyle={{
              color: colorActive(
                ERPs.some((item) => item.path === currentRouteName),
              ),
            }}
          >
            {ERPs.map((item) => {
              return (
                <List.Item
                  key={item.path}
                  title={item.label}
                  onPress={() => handlePressed(item.path)}
                  style={[styles.item]}
                  titleStyle={[
                    styles.itemTitle,
                    currentRouteName === item.path && styles.itemTitleActive,
                  ]}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="folder"
                      color={colorActive(item.path === currentRouteName)}
                    />
                  )}
                />
              )
            })}
          </List.Accordion> */}
        </List.Section>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  accordion: {
    backgroundColor: '#fff',
  },
  accordionActive: {
    backgroundColor: '#e3f2fd', // active màu nền khi mở hoặc có item con active
  },
  accordionTitle: {
    color: '#000',
  },
  accordionTitleActive: {
    color: '#1976d2', // màu chữ khi active
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#ffffffff',
    marginLeft: 36,
  },
  itemTitle: {
    color: '#333',
  },
  itemTitleActive: {
    color: 'tomato',
  },
})
