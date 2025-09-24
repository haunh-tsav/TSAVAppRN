import { GroupSchema } from '@/api/schemas/Group.schema'
import { ProductSchema } from '@/api/schemas/Product.schema'
import { StatusType } from '@/utils/typing'
import z from 'zod'

export const ProductGroupSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.number().optional(),
    groupID: z.number().optional(),
    productID: z.number().optional(),
    name: z.string().optional(),
    status: z.enum(StatusType).optional(),
    product: z.lazy(() => ProductSchema),
    group: z.lazy(() => GroupSchema),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
)

export type ProductGroup = z.infer<typeof ProductGroupSchema>
