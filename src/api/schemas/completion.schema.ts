import { ProductSchema } from '@/api/schemas/Product.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const CompletionSchema = z.object({
  id: z.number().optional(),
  productID: z.number().optional(),
  quantityIroned: z.number().optional(),
  quantityCheckPassed: z.number().optional(),
  quantityPackaged: z.number().optional(),
  exportedDate: z.string().optional(),
  passFIDate: z.string().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  product: z.lazy(() => ProductSchema).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type Completion = z.infer<typeof CompletionSchema>
