import { DrawerRoutes } from '@/navigation/routes'
import { AppDrawerContent } from '@/navigation/stacks/drawer/AppDrawerContent'
import { AppDrawerStackParamList } from '@/navigation/types'
import useTheme from '@/theme/hooks/useTheme'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { DefaultTheme, PaperProvider } from 'react-native-paper'

const Drawer = createDrawerNavigator<AppDrawerStackParamList>()

export default function AppDrawer() {
  const { variant, colors } = useTheme()

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
        initialRouteName={DrawerRoutes.ERP.child.Kho.path}
      >
        {/* Cut */}
        <Drawer.Screen
          component={DrawerRoutes.Cat.child.KyLucTraiVai.component}
          name={DrawerRoutes.Cat.child.KyLucTraiVai.path}
        />
        <Drawer.Screen
          component={DrawerRoutes.Cat.child.XacNhanKyLucTraiVai.component}
          name={DrawerRoutes.Cat.child.XacNhanKyLucTraiVai.path}
        />
        {/* ERP */}
        <Drawer.Screen
          component={DrawerRoutes.ERP.child.KhachHang.component}
          name={DrawerRoutes.ERP.child.KhachHang.path}
        />
        <Drawer.Screen
          component={DrawerRoutes.ERP.child.NhaCungCap.component}
          name={DrawerRoutes.ERP.child.NhaCungCap.path}
        />
        <Drawer.Screen
          component={DrawerRoutes.ERP.child.Kho.component}
          name={DrawerRoutes.ERP.child.Kho.path}
        />
      </Drawer.Navigator>
    </PaperProvider>
  )
}
