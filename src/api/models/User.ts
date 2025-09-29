import { StatusType } from '@/utils/typing'
import * as z from 'zod'

export const UserSchema = {
  id: z.number(),
  fullName: string
  email: string
  password: string
  avatar: string
  phone: string
  otp: string
  isAdmin: z.boolean().optional(),
  accessKey: string
  workDescription: string
  birthday: string
  status: StatusType
  accessToken: string
  refreshToken: string
  createdAt: string
  updatedAt: string
})

// Kiểu dữ liệu User (hay còn gọi là model) được suy luận từ schema
export type User = z.infer<typeof UserSchema>

export const UserSchema2 = {
  id: z.number(),
  username: string
  email: string
})

// Kiểu dữ liệu User (hay còn gọi là model) được suy luận từ schema
export type User2 = z.infer<typeof UserSchema2>
