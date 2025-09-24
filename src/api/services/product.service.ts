// src/api/services/posts.service.ts

import apiClient from '@/api/client'
import { Product } from '@/api/schemas/product.schema'
import { RequestDataType, ResponseDataType } from '@/api/types'
import logAxiosError from '@/utils/logAxiosError'
import { AxiosError } from 'axios'

const endPoint = '/products'

export const productService = {
  createProduct: async (
    newItem: Product,
  ): Promise<ResponseDataType<Product> | undefined> => {
    return await apiClient
      .post<ResponseDataType<Product>>(`${endPoint}`, newItem)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching product by ID:', error)
        return undefined
      })
  },
  getProductById: async (
    productId: number,
  ): Promise<ResponseDataType<Product> | undefined> => {
    return await apiClient
      .get<ResponseDataType<Product>>(`${endPoint}?id=${productId}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching product by ID:', error)
        return undefined
      })
  },
  getProductByCode: async (
    code: string,
  ): Promise<ResponseDataType<Product> | undefined> => {
    return await apiClient
      .get<ResponseDataType<Product>>(`${endPoint}?code=${code}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching product by Code:', error)
        return undefined
      })
  },
  getAllProducts: async (
    parameters: RequestDataType,
  ): Promise<ResponseDataType<Product[]> | undefined> => {
    return await apiClient
      .post<ResponseDataType<Product[]>>(`${endPoint}/find`, parameters)
      .then((response) => {
        // console.log(JSON.stringify(response.data?.data, undefined, 2))
        return response.data
      })
      .catch((error: AxiosError) => {
        logAxiosError(error)
        throw error
      })
  },
  getAllProductsFakeData: async (): Promise<Product[] | undefined> => {
    return await apiClient
      .get<Product[]>(`${endPoint}`)
      .then((response) => {
        console.log('Fake data products loaded')
        return response.data
      })
      .catch((error) => {
        console.error('Error fetching product by Code:', error)
        return undefined
      })
  },
  partialUpdateProductById: async (
    id: number,
    newItem: Partial<Product>,
  ): Promise<ResponseDataType<Product> | undefined> => {
    return await apiClient
      .patch<ResponseDataType<Product>>(`${endPoint}?id=${id}`, newItem)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching product by Code:', error)
        return undefined
      })
  },
  updateRecordProductById: async (
    id: number,
    newItem: Product,
  ): Promise<ResponseDataType<Product> | undefined> => {
    return await apiClient
      .put<ResponseDataType<Product>>(`${endPoint}?id=${id}`, newItem)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching product by Code:', error)
        return undefined
      })
  },
}
