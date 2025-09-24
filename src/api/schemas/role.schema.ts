import { UserRoleSchema } from '@/api/schemas/userRole.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const RoleSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.number().optional(),
    role: UserRoleSchema,
    shortName: z.string().optional(),
    desc: z.string().optional(),
    status: z.enum(StatusType).optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
)

export type Role = z.infer<typeof RoleSchema>
