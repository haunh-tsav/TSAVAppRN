import { UserRoleSchema } from '@/api/models/userRole'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const RoleSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: number
    role: UserRoleSchema,
    shortName: string
    desc: string
    status: StatusType
    createdAt: string
    updatedAt: string
  }),
)

export type Role = z.infer<typeof RoleSchema>
