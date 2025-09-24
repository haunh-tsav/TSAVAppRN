import { ColorSchema } from '@/api/schemas/color.schema'
import { ProductSchema } from '@/api/schemas/product.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const ProductColorSchema = z.object({
  id: z.number().optional(),
  colorID: z.number().optional(),
  productID: z.number().optional(),
  status: z.enum(StatusType).optional(), // Ensure ItemStatusType is an enum
  color: z.lazy(() => ColorSchema).optional(), // Replace ColorSchema with the actual Zod schema for Color
  product: z.lazy(() => ProductSchema).optional(), // Replace ProductSchema with the actual Zod schema for Product
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type ProductColor = z.infer<typeof ProductColorSchema>
