import { Paths } from '@/navigation/paths'
import { AppStackParamList } from '@/navigation/types'
import CustomerScreen from '@/screens/ERP/Customer'
import SupplierScreen from '@/screens/ERP/Supplier'
import WarehouseScreen from '@/screens/ERP/Warehouse'
import useTheme from '@/theme/hooks/useTheme'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Drawer = createDrawerNavigator<AppStackParamList>()

function CustomDrawerContent(props: any) {
  const navigation = useNavigation()
  const [expanded, setExpanded] = React.useState(true)

  const handlePress = () => setExpanded(!expanded)

  return (
    <DrawerContentScrollView {...props}>
      {/* ERP Group */}
    </DrawerContentScrollView>
  )
}

export default function AppStack() {
  const { variant, colors } = useTheme()

  return (
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
      <Drawer.Screen component={CustomerScreen} name={Paths.App.ERP.Customer} />
      <Drawer.Screen component={SupplierScreen} name={Paths.App.ERP.Supplier} />
      <Drawer.Screen
        component={WarehouseScreen}
        name={Paths.App.ERP.Warehouse}
      />
    </Drawer.Navigator>
  )
}
