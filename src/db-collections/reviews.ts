import { z } from 'zod'

export const ReviewSchema = z.object({
  id: z.string().uuid(),
  platform: z.enum(['google', 'yelp', 'amazon']),
  platformId: z.string(), // ID from the original platform
  author: z.string(),
  rating: z.number().min(1).max(5),
  content: z.string(),
  date: z.string(), // ISO date
  orgId: z.string(),
})

export type Review = z.infer<typeof ReviewSchema>
