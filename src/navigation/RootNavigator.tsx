import type { RootStackParamList } from '@/navigation/types'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useAuth from '@/api/hooks/useAuth'
import { Paths } from '@/navigation/paths'
import AppStack from '@/navigation/stacks/AppStack'
import AuthStack from '@/navigation/stacks/AuthStack'
import { useTheme } from '@/theme'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  const { authenticated } = useAuth()
  const { navigationTheme, variant } = useTheme()

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <RootStack.Navigator
          key={variant}
          initialRouteName={!authenticated ? Paths.Root.App : Paths.Root.Auth}
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen component={AppStack} name={Paths.Root.App} />
          <RootStack.Screen component={AuthStack} name={Paths.Root.Auth} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
