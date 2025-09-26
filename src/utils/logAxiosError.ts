import { AxiosError } from 'axios'

const logAxiosError = (error: AxiosError) => {
  if (error.response) {
    // Server trả về response với status ngoài 2xx
    console.error('📌 [Axios Error] Response:')
    console.error('Status:', error.response.status)
    console.error('Headers:', error.response.headers)
    console.error('Data:', error.response.data)
  } else if (error.request) {
    // Request đã gửi nhưng không có phản hồi
    console.error('📌 [Axios Error] Request:')
    console.error(error.request)
  } else {
    // Lỗi khác khi setup request
    console.error('📌 [Axios Error] Message:', error.message)
  }
}

export default logAxiosError
