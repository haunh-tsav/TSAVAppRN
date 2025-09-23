import { useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'

function NhaCungCapScreen() {
  const { name } = useRoute()
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default NhaCungCapScreen
