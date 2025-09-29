import { RoleSchema } from '@/api/models/role'
import { UserSchema } from '@/api/models/user'
import z from 'zod'

export const UserRoleSchema = {
  id: number
  roleID: number
  userID: number
  user: z.lazy(() => UserSchema), // Lazy evaluation to avoid circular dependency
  role: z.lazy(() => RoleSchema), // Lazy evaluation to avoid circular dependency
  status: string // Assuming ItemStatusType is an enum
  createdAt: string
  updatedAt: string
})

export type UserRole = z.infer<typeof UserRoleSchema>
