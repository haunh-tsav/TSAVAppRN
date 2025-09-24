import { RoleSchema } from '@/api/schemas/role.schema'
import { UserSchema } from '@/api/schemas/user.schema'
import z from 'zod'

export const UserRoleSchema = z.object({
  id: z.number().optional(),
  roleID: z.number().optional(),
  userID: z.number().optional(),
  user: z.lazy(() => UserSchema), // Lazy evaluation to avoid circular dependency
  role: z.lazy(() => RoleSchema), // Lazy evaluation to avoid circular dependency
  status: z.string().optional(), // Assuming ItemStatusType is an enum
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type UserRole = z.infer<typeof UserRoleSchema>
