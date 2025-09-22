import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '@/screens/Authen/Login/LoginScreen'
import RegisterScreen from '@/screens/Authen/Register/RegisterScreen'

import { AppRoutes } from '@/navigation/paths'
import { AuthStackParamList } from '@/navigation/types'
import useTheme from '@/theme/hooks/useTheme'

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  const { variant } = useTheme()

  return (
    <Stack.Navigator
      key={variant}
      initialRouteName={AppRoutes.Auth.Login.path}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={LoginScreen} name={AppRoutes.Auth.Login.path} />
      <Stack.Screen
        component={RegisterScreen}
        name={AppRoutes.Auth.Register.path}
      />
    </Stack.Navigator>
  )
}
