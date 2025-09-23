import AppDrawer from '@/navigation/stacks/drawer/AppDrawer'
import { AppDrawerStackParamList } from '@/navigation/types'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

const Drawer = createDrawerNavigator<AppDrawerStackParamList>()

export default function HomeScreen() {
  return <AppDrawer />
}
