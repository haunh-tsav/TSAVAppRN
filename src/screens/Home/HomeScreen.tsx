import { DrawerList, DrawerRoutes } from '@/navigation/routes'
import { AppDrawerContent } from '@/navigation/stacks/drawer/AppDrawerContent'
import { AppDrawerStackParamList } from '@/navigation/types'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { DefaultTheme, PaperProvider } from 'react-native-paper'

const Drawer = createDrawerNavigator<AppDrawerStackParamList>()

export default function HomeScreen() {
  return (
    <PaperProvider
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: 'tomato',
          secondary: 'yellow',
        },
      }}
    >
      <Drawer.Navigator
        defaultStatus="open"
        drawerContent={AppDrawerContent}
        screenOptions={{
          headerShown: true,
          drawerLabelStyle: {
            color: 'black',
            fontSize: 20,
            fontFamily: 'Georgia',
          },
          // drawerType: 'permanent',
        }}
        initialRouteName={DrawerRoutes.ERP.child.KhachHang.path}
      >
        {DrawerList.map((item) => item.childs).map((child) =>
          child.map((c) => {
            return <Drawer.Screen component={c.component} name={c.path} />
          }),
        )}
      </Drawer.Navigator>
    </PaperProvider>
  )
}
