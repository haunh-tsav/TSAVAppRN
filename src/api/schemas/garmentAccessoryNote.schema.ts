import { AccessoryNoteSchema } from '@/api/schemas/AccessoryNote.schema'
import { GarmentAccessorySchema } from '@/api/schemas/garmentAccessory.schema'
import { ProductSchema } from '@/api/schemas/Product.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const GarmentAccessoryNoteSchema = z.object({
  id: z.number(),
  accessoryNoteID: z.number().optional(),
  garmentAccessoryID: z.number().optional(),
  status: z.enum(StatusType).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  product: z.lazy(() => ProductSchema),
  garmentAccessory: z.lazy(() => GarmentAccessorySchema),
  accessoryNote: z.lazy(() => AccessoryNoteSchema),
})

export type GarmentAccessoryNote = z.infer<typeof GarmentAccessoryNoteSchema>
