import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const SewingLineSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type SewingLine = z.infer<typeof SewingLineSchema>
