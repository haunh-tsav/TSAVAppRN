import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const NotificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string().optional(),
  content: z.string().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type AccessoryNote = z.infer<typeof NotificationSchema>
