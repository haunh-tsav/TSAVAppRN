import { PrintSchema } from '@/api/schemas/print.schema'
import { ProductSchema } from '@/api/schemas/Product.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const PrintablePlaceSchema = z.object({
  id: z.number().optional(),
  printID: z.number().optional(),
  productID: z.number().optional(),
  status: z.enum(StatusType).optional(), // Replace with actual ItemStatusType values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  product: z.lazy(() => ProductSchema).optional(), // Replace ProductSchema with the actual schema for Product
  print: z.lazy(() => PrintSchema).optional(), // Replace PrintSchema with the actual schema for Print
})

// Infer the TypeScript type from the schema
export type PrintablePlace = z.infer<typeof PrintablePlaceSchema>
