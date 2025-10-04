import type { RootStackParamList } from '@/navigation/types'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useAuth from '@/api/hooks/useAuth'
import AppStack from '@/navigation/stacks/AppStack'
import AuthStack from '@/navigation/stacks/AuthStack'
import GoiAnToanScreen from '@/screens/Home/screens/GoiAnToan/GoiAnToanScreen'
import GoiBaoTriScreen from '@/screens/Home/screens/GoiBaoTri/GoiBaoTriScreen'
import GoiHangCatScreen from '@/screens/Home/screens/GoiHangCat/GoiHangCatScreen'
import GoiITScreen from '@/screens/Home/screens/GoiIT/GoiITScreen'
import GoiNguyenLieuScreen from '@/screens/Home/screens/GoiNguyenLieu/GoiNguyenLieuScreen'
import GoiQAScreen from '@/screens/Home/screens/GoiQA/GoiQAScreen'
import GoiQCScreen from '@/screens/Home/screens/GoiQC/GoiQCScreen'
import GoiSanXuatScreen from '@/screens/Home/screens/GoiSanXuat/GoiSanXuatScreen'
import GoiTPSScreen from '@/screens/Home/screens/GoiTPS/GoiTPSScreen'
import NotificationItemDetails from '@/screens/Home/screens/Notification/NotificationItemDetails'
import NotificationScreen from '@/screens/Home/screens/Notification/NotificationScreen'
import { useTheme } from '@/theme'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  const { colors } = useTheme()
  const { authenticated } = useAuth()
  const {} = useTheme()

  return (
    <SafeAreaProvider>
      <NavigationContainer
      // theme={navigationTheme}
      >
        <RootStack.Navigator
          // key={variant}
          initialRouteName={!authenticated ? 'app' : 'auth'}
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen component={AppStack} name="app" />
          <RootStack.Screen component={AuthStack} name="auth" />
          {/* Other screens */}
          <RootStack.Screen component={GoiBaoTriScreen} name="goi-bao-tri" />
          <RootStack.Screen
            component={GoiNguyenLieuScreen}
            name="goi-nguyen-lieu"
          />
          <RootStack.Screen component={GoiHangCatScreen} name="goi-hang-cat" />
          <RootStack.Screen component={GoiITScreen} name="goi-it" />
          <RootStack.Screen component={GoiQAScreen} name="goi-qa" />
          <RootStack.Screen component={GoiQCScreen} name="goi-qc" />
          <RootStack.Screen component={GoiSanXuatScreen} name="goi-san-xuat" />
          <RootStack.Screen component={GoiTPSScreen} name="goi-tps" />
          <RootStack.Screen component={GoiAnToanScreen} name="goi-an-toan" />
          <RootStack.Screen
            component={NotificationScreen}
            name="thong-bao"
            options={{
              headerShown: true,
              title: 'Thông báo',
              headerTitleAlign: 'center',
              headerTintColor: colors.white,
              headerStyle: {
                backgroundColor: colors.primary,
              },
            }}
          />
          <RootStack.Screen
            component={NotificationItemDetails}
            name="thong-bao-chi-tiet"
            options={{
              headerShown: true,
              title: 'Thông báo chi tiết',
              headerTitleAlign: 'center',
              headerTintColor: colors.white,
              headerStyle: {
                backgroundColor: colors.primary,
              },
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
