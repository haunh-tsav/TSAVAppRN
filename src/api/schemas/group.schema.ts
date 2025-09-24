import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const GroupSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` is defined
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  orderNumber: z.number().optional(),
})

export type Group = z.infer<typeof GroupSchema>
