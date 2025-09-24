import { ProductSchema } from '@/api/schemas/Product.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const ImportationSchema = z.object({
  id: z.number().optional(),
  productID: z.number().optional(),
  quantity: z.number().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  dateImported: z.string().optional(),
  product: z.lazy(() => ProductSchema).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type Importation = z.infer<typeof ImportationSchema>
