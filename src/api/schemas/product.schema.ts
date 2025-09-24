import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.number(),
  productCode: z.string().optional(),
  quantityPO: z.number().optional(),
  dateInputNPL: z.string().optional(),
  dateOutputFCR: z.string().optional(),
  status: z.string().optional(), // Replace with actual ItemStatusType values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type Product = z.infer<typeof ProductSchema>
