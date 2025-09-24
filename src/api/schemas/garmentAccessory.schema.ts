import { ProductSchema } from '@/api/schemas/Product.schema'
import { StatusType } from '@/utils/typing'
import z from 'zod'

export const GarmentAccessorySchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.number().optional(),
    productID: z.number().optional(),
    amountCutting: z.number().optional(),
    passingDeliveryDate: z.string().optional(),
    notes: z.string().optional(),
    status: z.enum(StatusType).optional(),
    syncStatus: z.boolean().optional(),
    product: z.lazy(() => ProductSchema),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
)
export type GarmentAccessory = z.infer<typeof GarmentAccessorySchema>
