import { z } from 'zod'

export const AnalysisSchema = z.object({
  id: z.string().uuid(),
  reviewId: z.string().uuid(),
  sentimentScore: z.number(), // -1 to 1
  sentimentLabel: z.enum(['positive', 'neutral', 'negative']),
  topics: z.array(z.string()),
  summary: z.string(),
  suggestedAction: z.string(),
  analyzedAt: z.string(), // ISO date
})

export type Analysis = z.infer<typeof AnalysisSchema>
