import { ProductSchema } from '@/api/schemas/Product.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const SampleSewingSchema = z.object({
  id: z.number().optional(),
  productID: z.number().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  product: z.lazy(() => ProductSchema).optional(),
  quantityRealCut: z.number().optional(),
  dateTimeCut: z.string().optional(),
  dateSendEmbroidered: z.string().optional(),
  dateSendDeliveredBTP: z.string().optional(),
  quantitySendDeliveredBTP: z.number().optional(),
  syncStatus: z.boolean().optional(),
  dateArrived1Th: z.string().optional(),
  quantityArrived1Th: z.number().optional(),
  dateArrived2Th: z.string().optional(),
  quantityArrived2Th: z.number().optional(),
  dateArrived3Th: z.string().optional(),
  quantityArrived3Th: z.number().optional(),
  dateArrived4Th: z.string().optional(),
  quantityArrived4Th: z.number().optional(),
  dateArrived5Th: z.string().optional(),
  quantityArrived5Th: z.number().optional(),
  dateArrived6Th: z.string().optional(),
  quantityArrived6Th: z.number().optional(),
  dateArrived7Th: z.string().optional(),
  quantityArrived7Th: z.number().optional(),
  dateArrived8Th: z.string().optional(),
  quantityArrived8Th: z.number().optional(),
  dateArrived9Th: z.string().optional(),
  quantityArrived9Th: z.number().optional(),
  dateArrived10Th: z.string().optional(),
  quantityArrived10Th: z.number().optional(),
})

export type SampleSewing = z.infer<typeof SampleSewingSchema>
