import { BottomRoutes } from '@/navigation/routes'
import { AppBottomStackParamList } from '@/navigation/types'
import useTheme from '@/theme/hooks/useTheme'
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Tab = createBottomTabNavigator<AppBottomStackParamList>()

const CustomTabBarButton = (props: BottomTabBarButtonProps) => (
  <TouchableOpacity style={styles.centerButton} onPress={props.onPress}>
    <View style={styles.centerButtonInner}>{props.children}</View>
  </TouchableOpacity>
)

export default function AppStack() {
  const { variant, colors } = useTheme()

  return (
    <Tab.Navigator
      key={variant}
      initialRouteName={BottomRoutes.Home.path}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        component={BottomRoutes.Panel.component}
        name={BottomRoutes.Panel.path}
      />
      <Tab.Screen
        component={BottomRoutes.Explore.component}
        name={BottomRoutes.Explore.path}
      />
      <Tab.Screen
        component={BottomRoutes.Home.component}
        name={BottomRoutes.Home.path}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              style={styles.centerButton}
              onPress={props.onPress}
            >
              <View style={styles.centerButtonInner}>
                <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        component={BottomRoutes.Search.component}
        name={BottomRoutes.Search.path}
      />
      <Tab.Screen
        component={BottomRoutes.Profile.component}
        name={BottomRoutes.Profile.path}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    top: -20, // đẩy lên trên tab bar
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
})
