import { RootStackParamList } from '@/navigation/types'
import { HomeRoutes } from '@/screens/Home/routes'
import { useStyle, useTheme } from '@/theme'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Card } from 'react-native-paper'

// Khai báo type cho navigation prop để có gợi ý code
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TPSDetails'
>

export default function HomeScreen() {
  const { colors } = useTheme()
  const styles = useStyle()
  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../../theme/assets/images/banner.png')}
          style={localStyles.banner}
        />
        <View style={localStyles.sectionContainer}>
          <Text style={styles.titleSection}>Liên lạc nội bộ</Text>
          <FlatList
            data={HomeRoutes}
            numColumns={3}
            style={localStyles.listService}
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={localStyles.gridItem}>
                  <Card
                    mode="elevated"
                    style={(colors.card, localStyles.gridItemCardView)}
                    onPress={() =>
                      navigation.navigate('goi-tps', {
                        key: '123',
                      })
                    }
                  >
                    <Card.Content
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        gap: 10,
                      }}
                    >
                      <item.icon
                        width={42}
                        height={42}
                        color={colors.textSecondary}
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: '500',
                          color: colors.textSecondary,
                        }}
                      >
                        {item.label}
                      </Text>
                    </Card.Content>
                  </Card>
                </View>
              )
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const localStyles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  listService: {
    marginHorizontal: 10,
  },
  sectionContainer: {
    gap: 10,
    marginVertical: 10,
  },
  gridView: {},
  gridItem: {
    flex: 1, // Chia đều không gian trong hàng
    marginVertical: 10,
    marginHorizontal: 10,
    minWidth: 100,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    rowGap: 10,
  },
  gridItemCardView: {
    width: '100%',
    height: 120,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
})
