import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const AccessoryNoteSchema = z.object({
  id: z.number().optional(),
  title: z.string().optional(),
  summary: z.string().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type AccessoryNote = z.infer<typeof AccessoryNoteSchema>
