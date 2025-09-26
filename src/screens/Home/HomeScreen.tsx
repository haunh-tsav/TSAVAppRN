import { homeServices } from '@/screens/Home/routes'
import { HomeServiceType } from '@/screens/Home/types'
import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper'

export default function HomeScreen() {
  const renderItem = (item: HomeServiceType) => (
    <View style={{ flex: 1 }}>
      <Card
        style={styles.card}
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
          style={{
            width: '100%',
            height: 160,
            borderRadius: 20,
            marginTop: -20,
          }}
          resizeMode="cover"
        />
        <View>
          <FlatList
            data={homeServices}
            renderItem={(item) => renderItem(item.item)}
            keyExtractor={(item) => item.key}
            numColumns={3} // ⬅️ số cột của grid
            columnWrapperStyle={styles.row} // style cho hàng
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
  card: {
    flex: 1,
    width: 80,
    height: 80, // chiều cao item
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
