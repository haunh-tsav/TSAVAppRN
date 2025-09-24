import useProduct from '@/api/hooks/useProduct'
import { RequestDataType } from '@/api/types'
import React from 'react'
import { ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper'

const ProductScreen = () => {
  const { useGetAllProducts } = useProduct()
  const [page, setPage] = React.useState(0)
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4])
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  )
  const bodyRequest: RequestDataType = {
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
      term: '',
    },
    sorting: {
      column: 'id',
      direction: 'desc',
    },
  }

  const data = useGetAllProducts(bodyRequest).data

  React.useEffect(() => {
    setPage(0)
  }, [itemsPerPage])

  const from = page * itemsPerPage
  const to = Math.min((page + 1) * itemsPerPage, data?.length ?? 0)

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Product Code</DataTable.Title>
          <DataTable.Title numeric>QuantityPO</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title>Date Input</DataTable.Title>
          <DataTable.Title>Date Output</DataTable.Title>
        </DataTable.Header>

        {data?.data?.slice(from, to).map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.productCode}</DataTable.Cell>
            <DataTable.Cell numeric>{item.quantityPO}</DataTable.Cell>
            <DataTable.Cell>{item.status}</DataTable.Cell>
            <DataTable.Cell>{item.dateInputNPL}</DataTable.Cell>
            <DataTable.Cell>{item.dateOutputFCR}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(data?.length ?? 0 / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${data?.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </ScrollView>
  )
}

export default ProductScreen
