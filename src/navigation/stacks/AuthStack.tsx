import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '@/screens/Auth/Login/LoginScreen'
import RegisterScreen from '@/screens/Auth/Register/RegisterScreen'

import { AuthStackParamList } from '@/navigation/types'

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator
      // key={variant}
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={LoginScreen} name="login" />
      <Stack.Screen component={RegisterScreen} name="register" />
    </Stack.Navigator>
  )
}
