import { DrawerRoutes } from '@/navigation/routes'
import { AppDrawerContent } from '@/navigation/stacks/drawer/AppDrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { DefaultTheme, PaperProvider } from 'react-native-paper'

const Drawer = createDrawerNavigator()

export default function AppDrawer() {
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
        initialRouteName={DrawerRoutes[0].childs[0].path}
      >
        {/* <Drawer.Screen
          component={DashboardScreen}
          name="dashboard"
          options={{ title: 'Dashboard' }}
        /> */}
        {DrawerRoutes.map((item) => item.childs).map((child) =>
          child.map((c) => {
            return (
              <Drawer.Screen
                key={c.key}
                component={c.component}
                name={c.path}
                options={{ title: c.name }}
              />
            )
          }),
        )}
      </Drawer.Navigator>
    </PaperProvider>
  )
}
