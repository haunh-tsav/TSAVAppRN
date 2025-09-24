import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper'

export default function HomeScreen() {
  const data = [
    { id: '1', title: 'Gọi bảo trì' },
    { id: '2', title: 'Đơn hàng' },
    { id: '3', title: 'Sản phẩm' },
    { id: '4', title: 'Báo cáo' },
    { id: '5', title: 'Cài đặt' },
    { id: '6', title: 'Thông báo' },
  ]

  const renderItem = ({ item }: any) => (
    <Card
      style={styles.card}
      mode="elevated"
      onPress={() => console.log(item.title)}
    >
      <Card.Content>
        <Text style={styles.text}>{item.title}</Text>
      </Card.Content>
    </Card>
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
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2} // ⬅️ số cột của grid
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
    padding: 10,
  },
  row: {
    justifyContent: 'space-between', // dàn đều các item trong row
  },
  card: {
    flex: 1,
    margin: 5,
    height: 120, // chiều cao item
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
