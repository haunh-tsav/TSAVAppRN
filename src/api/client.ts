// src/api/client.ts
import axios, { AxiosError, AxiosResponse } from 'axios'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

// Tạo instance chung cho toàn bộ API
const apiClient = axios.create({
  baseURL: `http://10.0.2.2:9000/api`, // thay bằng API backend của bạn
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // timeout 10s
})

// 🛠️ Interceptors
// Add token trước khi gửi request
// apiClient.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // Ví dụ: lấy token từ MMKV (hoặc AsyncStorage)
//     // const token = MMKV.getString('access_token');
//     const token = storage.getString('access_token')

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error: AxiosError) => Promise.reject(new Error(error.message)),
// )

// Xử lý response / refresh token
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Nếu lỗi 401 → có thể refresh token tại đây
    const { response } = error
    if (response && response.status === 401) {
      // TODO: refresh token hoặc redirect login
    }
    throw error
  },
)

export default apiClient
