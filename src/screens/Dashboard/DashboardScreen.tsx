import useProduct from '@/api/hooks/useProduct'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const DashboardScreen = () => {
  const { useGetAllProducts } = useProduct()

  const getAllProducts = useGetAllProducts({
    filter: {
      status: ['active'],
      field: 'id',
      items: [-1],
    },
    paginator: {
      page: 1,
      pageSize: 10,
    },
    search: {
      field: 'id',
      term: '16',
    },
    sorting: {
      column: 'id',
      direction: 'desc',
    },
  })

  return (
    <SafeAreaView>
      <View>
        <Text>{JSON.stringify(getAllProducts.data, undefined, 2)}</Text>
      </View>
    </SafeAreaView>
  )
}

export default DashboardScreen
