import type { RootStackParamList } from '@/navigation/types'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useAuth from '@/api/hooks/useAuth'
import { RootRoutes } from '@/navigation/routes'
import AppStack from '@/navigation/stacks/AppStack'
import AuthStack from '@/navigation/stacks/AuthStack'
import { HomeRoutes } from '@/screens/Home/routes'
import { useTheme } from '@/theme'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  const { authenticated } = useAuth()
  const {} = useTheme()

  return (
    <SafeAreaProvider>
      <NavigationContainer
      // theme={navigationTheme}
      >
        <RootStack.Navigator
          // key={variant}
          initialRouteName={
            !authenticated ? RootRoutes.App.path : RootRoutes.Auth.path
          }
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen component={AppStack} name={RootRoutes.App.path} />
          <RootStack.Screen component={AuthStack} name={RootRoutes.Auth.path} />
          {HomeRoutes.map((item, index) => {
            return (
              <RootStack.Screen
                key={index}
                component={item.component}
                name={item.path}
              />
            )
          })}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
