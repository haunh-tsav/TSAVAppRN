import { homeServices } from '@/screens/Home/routes'
import { HomeServiceType } from '@/screens/Home/types'
import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper'

export default function HomeScreen() {
  const renderItem = (item: HomeServiceType) => (
    <View style={{ flex: 1 }}>
      <Card
        className="flex-1 w-[80] h-[80] justify-center"
        mode="elevated"
        onPress={() => console.log(item.label)}
      >
        <Card.Content>
          <Text style={styles.text}>{item.label}</Text>
        </Card.Content>
      </Card>
      <Text style={styles.text}>{item.label}</Text>
    </View>
  )

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require('../../theme/assets/images/banner.png')}
          className="w-full h-[160] rounded-2xl"
          resizeMode="cover"
        />
        <View>
          <FlatList
            data={homeServices}
            renderItem={(item) => renderItem(item.item)}
            keyExtractor={(item) => item.key}
            numColumns={3} // ⬅️ số cột của grid
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  row: {
    justifyContent: 'space-between', // dàn đều các item trong row
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
