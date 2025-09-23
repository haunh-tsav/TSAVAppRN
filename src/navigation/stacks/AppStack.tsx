import { BottomRoutes } from '@/navigation/routes'
import { AppBottomStackParamList } from '@/navigation/types'
import ExploreScreen from '@/screens/Explore/ExploreScreen'
import HomeScreen from '@/screens/Home/HomeScreen'
import ProfileScreen from '@/screens/Profile/ProfileScreen'
import SearchScreen from '@/screens/Search/SearchScreen'
import useTheme from '@/theme/hooks/useTheme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

const Tab = createBottomTabNavigator<AppBottomStackParamList>()

export default function AppStack() {
  const { variant, colors } = useTheme()

  return (
    <Tab.Navigator
      key={variant}
      initialRouteName={BottomRoutes.Home.path}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen component={HomeScreen} name={BottomRoutes.Home.path} />
      <Tab.Screen component={ExploreScreen} name={BottomRoutes.Explore.path} />
      <Tab.Screen component={SearchScreen} name={BottomRoutes.Search.path} />
      <Tab.Screen component={ProfileScreen} name={BottomRoutes.Profile.path} />
    </Tab.Navigator>
  )
}
