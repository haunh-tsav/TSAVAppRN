import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { Product } from '@/api/models/product'
import { productService } from '@/api/services/product.service'
import { RequestDataType } from '@/api/types'

export const DEFAULT_QUERY_PRODUCT_KEY = 'product' // key dùng để lưu cache product (productname, email, employeeCode, ...)
export const DEFAULT_QUERY_PRODUCTS_KEY = 'products' // key dùng để lưu cache danh sách products
const enum ProductQueryKey {
  fetchOne = 'fetchOneProduct',
  fetchAll = 'fetchAllProducts',
}

export default function useProduct() {
  const queryClient = useQueryClient()

  const useCreateProduct = useMutation({
    mutationFn: async (newItem: Product) => {
      const response = await productService.createProduct(newItem)
      return response?.data
    }, // hàm gọi API
    onSuccess: async () => {
      // Sau khi tạo product mới, refetch lại danh sách products
      await queryClient.invalidateQueries({
        queryKey: [DEFAULT_QUERY_PRODUCTS_KEY],
      })
    },
  })

  // Lấy product theo id
  const useGetProductById = (productId: number) =>
    useQuery({
      queryKey: [DEFAULT_QUERY_PRODUCT_KEY, productId],
      queryFn: async () => {
        const response = await productService.getProductById(productId)
        return response?.data
      },
      enabled: !!productId, // chỉ gọi khi có productId
      staleTime: 5 * 60 * 1000,
    })

  // Get product by employeeCode (GET)
  const useGetProductByCode = (employeeCode: string) =>
    useQuery({
      queryFn: async () => {
        if (!employeeCode) return undefined // Trả về null nếu không có employeeCode
        const response = await productService.getProductByCode(employeeCode)
        return response?.data
      },
      queryKey: [DEFAULT_QUERY_PRODUCT_KEY, employeeCode],
      enabled: !!employeeCode, // Chỉ gọi query khi có employeeCode
      staleTime: 5 * 60 * 1000,
    })

  // Patch update product by id (PATCH)
  const usePartialUpdateProductById = useMutation({
    mutationFn: async ({
      id,
      updatedFields,
    }: {
      id: number
      updatedFields: Partial<Product>
    }) => {
      const response = await productService.partialUpdateProductById(
        id,
        updatedFields,
      )
      return response?.data
    }, // hàm gọi API
    onError: (error) => {
      console.error('Error updating product:', error)
    },
    onSuccess: async (data) => {
      // invalidateQueries sẽ xoá cache của queryKey, khi nào component dùng queryKey này mount lại sẽ gọi lại queryFn để lấy dữ liệu mới
      await queryClient.invalidateQueries({
        queryKey: [DEFAULT_QUERY_PRODUCT_KEY, data?.id],
      })
    },
  })

  // Put update product by id (PUT)
  const useUpdateProductById = useMutation({
    mutationFn: async ({
      id,
      updatedRecord,
    }: {
      id: number
      updatedRecord: Product
    }) => {
      const response = await productService.updateRecordProductById(
        id,
        updatedRecord,
      )
      return response?.data
    }, // hàm gọi API
    onError: (error) => {
      console.error('Error updating product:', error)
    },
    onSuccess: async (data) => {
      // invalidateQueries sẽ xoá cache của queryKey, khi nào component dùng queryKey này mount lại sẽ gọi lại queryFn để lấy dữ liệu mới
      await queryClient.invalidateQueries({
        queryKey: [DEFAULT_QUERY_PRODUCT_KEY, data?.id],
      })
    },
  })

  // Get all products with parameters (POST)
  const useGetAllProducts = (parameters: RequestDataType) =>
    useQuery({
      queryFn: async () => await productService.getAllProducts(parameters), // hàm gọi API
      queryKey: [DEFAULT_QUERY_PRODUCTS_KEY, parameters], // thêm parameters vào queryKey để phân biệt cache
      staleTime: 5 * 60 * 1000, // cache sống 5 phút, sau 5 phút sẽ gọi lại queryFn để lấy dữ liệu mới
    })

  // Get all products with parameters (POST)
  const useGetAllProductsFakeData = () =>
    useQuery({
      queryFn: async () => await productService.getAllProductsFakeData(), // hàm gọi API
      queryKey: [DEFAULT_QUERY_PRODUCTS_KEY], // thêm parameters vào queryKey để phân biệt cache
      staleTime: 5 * 60 * 1000, // cache sống 5 phút, sau 5 phút sẽ gọi lại queryFn để lấy dữ liệu mới
    })

  const invalidateQuery = (queryKeys: ProductQueryKey[]) =>
    queryClient.invalidateQueries({
      queryKey: queryKeys,
    })

  return {
    invalidateQuery,
    useCreateProduct,
    useGetAllProducts,
    useGetAllProductsFakeData,
    useGetProductByCode,
    useGetProductById,
    usePartialUpdateProductById,
    useUpdateProductById,
  }
}
