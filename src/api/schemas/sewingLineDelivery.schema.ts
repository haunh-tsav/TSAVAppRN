import { ProductSchema } from '@/api/schemas/Product.schema'
import { SewingLineSchema } from '@/api/schemas/sewingLine.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const SewingLineDeliverySchema = z.object({
  id: z.number().optional(),
  productID: z.number().optional(),
  sewingLineID: z.number().optional(),
  quantityOriginal: z.number().optional(),
  quantitySewed: z.number().optional(),
  expiredDate: z.string().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  product: z.lazy(() => ProductSchema).optional(),
  sewingLine: z.lazy(() => SewingLineSchema).optional(),
})

export type SewingLineDelivery = z.infer<typeof SewingLineDeliverySchema>
