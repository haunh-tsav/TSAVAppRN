import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const PrintSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  status: z.enum(StatusType).optional(), // Replace with actual ItemStatusType values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  orderNumber: z.number().optional(),
})

export type Print = z.infer<typeof PrintSchema>
