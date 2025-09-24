import apiClient from '@/api/client'
import { User } from '@/api/schemas/user.schema'
import { ResponseDataType } from '@/api/types'

const NAMESPACE = '/auth'

// INPUT LOGIN TYPE
export type LoginInput = {
  password: string
  username: string
}

// INPUT REGISTER TYPE
export type RegisterInput = {
  email: string
  password: string
  username: string
}

export const authService = {
  login: async (parameters: LoginInput): Promise<ResponseDataType<User>> => {
    return await apiClient
      .post<ResponseDataType<User>>(NAMESPACE, parameters)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
      .finally(() => {
        // console.log('done')
      })
  },
  register: async (
    parameters: RegisterInput,
  ): Promise<ResponseDataType<User>> => {
    return await apiClient
      .post<ResponseDataType<User>>(`${NAMESPACE}/register`, parameters)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
      .finally(() => {
        // console.log('done')
      })
  },
  logout: async (): Promise<ResponseDataType<string>> => {
    return await apiClient
      .post<ResponseDataType<string>>(`${NAMESPACE}/logout`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
      .finally(() => {
        // console.log('done')
      })
  },
}
