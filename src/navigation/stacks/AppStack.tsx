import { BottomRoutes } from '@/navigation/routes'
import { AppBottomStackParamList, RootStackParamList } from '@/navigation/types'
import { useTheme } from '@/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'

const Tab = createBottomTabNavigator<AppBottomStackParamList>()
type AppStackNavigationProp = NativeStackNavigationProp<RootStackParamList>

export default function AppStack() {
  const { colors } = useTheme()
  const navigation = useNavigation<AppStackNavigationProp>()

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      {BottomRoutes.map((item, index) => {
        return item.path === 'home' ? (
          <Tab.Screen
            key={index}
            component={item.component}
            name={item.path}
            options={{
              tabBarButton: (props) => (
                <TouchableOpacity
                  style={styles.centerButton}
                  onPress={props.onPress}
                >
                  <View style={styles.centerButtonInner}>
                    <item.icon width={24} height={24} />
                  </View>
                </TouchableOpacity>
              ),
              headerShown: true,
              headerTintColor: colors.white,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerRight: (props) => {
                return (
                  <IconButton
                    icon="bell"
                    iconColor={props.tintColor}
                    size={20}
                    onPress={() => navigation.navigate('thong-bao')}
                  />
                )
              },
              headerTitle: 'TMS APP',
              headerTitleAlign: 'center',
            }}
          />
        ) : (
          <Tab.Screen
            key={index}
            component={item.component}
            name={item.path as keyof AppBottomStackParamList}
            options={{
              tabBarLabel: item.label,
              tabBarIcon: () => {
                return <item.icon width={24} height={24} />
              },
            }}
          />
        )
      })}
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
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  header: {
    backgroundColor: '#1E88E5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
