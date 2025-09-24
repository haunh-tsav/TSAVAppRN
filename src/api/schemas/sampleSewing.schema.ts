import { ProductSchema } from '@/api/schemas/Product.schema'
import { StatusType } from '@/utils/typing'
import { z } from 'zod'

export const SampleSewingSchema = z.object({
  id: z.number().optional(),
  productID: z.number().optional(),
  dateSubmissionNPL: z.string().optional(),
  dateApprovalSO: z.string().optional(),
  dateApprovalPP: z.string().optional(),
  dateSubmissionFirstTime: z.string().optional(),
  dateSubmissionSecondTime: z.string().optional(),
  dateSubmissionThirdTime: z.string().optional(),
  dateSubmissionForthTime: z.string().optional(),
  dateSubmissionFifthTime: z.string().optional(),
  status: z.enum(StatusType).optional(), // Replace with a specific Zod enum or union if `ItemStatusType` has defined values
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  product: z.lazy(() => ProductSchema).optional(),
})

export type SampleSewing = z.infer<typeof SampleSewingSchema>
