import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '@/screens/Authen/Login/LoginScreen'
import RegisterScreen from '@/screens/Authen/Register/RegisterScreen'

import { AuthRoutes } from '@/navigation/routes'
import { AuthStackParamList } from '@/navigation/types'

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator
      // key={variant}
      initialRouteName={AuthRoutes.Login.path}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={LoginScreen} name={AuthRoutes.Login.path} />
      <Stack.Screen
        component={RegisterScreen}
        name={AuthRoutes.Register.path}
      />
    </Stack.Navigator>
  )
}
