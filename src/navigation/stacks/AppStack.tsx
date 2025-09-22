import { AppRoutes } from '@/navigation/paths'
import { AppStackParamList } from '@/navigation/types'
import CustomerScreen from '@/screens/ERP/Customer'
import SupplierScreen from '@/screens/ERP/Supplier'
import WarehouseScreen from '@/screens/ERP/Warehouse'
import useTheme from '@/theme/hooks/useTheme'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import React from 'react'
import { Image, View } from 'react-native'
import { DefaultTheme, List, PaperProvider } from 'react-native-paper'

const Drawer = createDrawerNavigator<AppStackParamList>()

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const [expanded, setExpanded] = React.useState(true)

  const handlePress = () => setExpanded(!expanded)

  return (
    <DrawerContentScrollView {...props}>
      {/* Logo */}
      <View>
        <Image
          source={require('../../theme/assets/images/logo/ic_launcher.png')}
          resizeMode="contain"
          style={{ width: 64, height: 64, alignSelf: 'center' }}
        />
        {/* ERP Group */}
        <List.Section title={AppRoutes.App.Cat.label}>
          <List.Accordion
            title="Uncontrolled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </View>
    </DrawerContentScrollView>
  )
}

export default function AppStack() {
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
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerShown: true,
          drawerLabelStyle: {
            color: 'black',
            fontSize: 20,
            fontFamily: 'Georgia',
          },
          // drawerType: 'permanent',
        }}
      >
        <Drawer.Screen
          component={CustomerScreen}
          name={AppRoutes.App.ERP.child.KhachHang.path}
        />
        <Drawer.Screen
          component={SupplierScreen}
          name={AppRoutes.App.ERP.child.NhaCungCap.path}
        />
        <Drawer.Screen
          component={WarehouseScreen}
          name={AppRoutes.App.ERP.child.Kho.path}
        />
      </Drawer.Navigator>
    </PaperProvider>
  )
}
