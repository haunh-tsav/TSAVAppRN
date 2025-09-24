import { StatusType } from '@/utils/typing'
import * as z from 'zod'

export const UserSchema = z.object({
  id: z.number(),
  fullName: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  avatar: z.string().optional(),
  phone: z.string().optional(),
  otp: z.string().optional(),
  isAdmin: z.boolean().optional(),
  accessKey: z.string().optional(),
  workDescription: z.string().optional(),
  birthday: z.string().optional(),
  status: z.enum(StatusType).optional(),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

// Kiểu dữ liệu User (hay còn gọi là model) được suy luận từ schema
export type User = z.infer<typeof UserSchema>

export const UserSchema2 = z.object({
  id: z.number(),
  username: z.string().optional(),
  email: z.string().optional(),
})

// Kiểu dữ liệu User (hay còn gọi là model) được suy luận từ schema
export type User2 = z.infer<typeof UserSchema2>
