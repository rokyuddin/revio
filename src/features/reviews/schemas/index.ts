import { z } from 'zod';

export const analyzeResultSchema = z.object({
  summary: z.string().describe('Executive summary of the overall analysis.'),
  overallSentiment: z.enum(['Positive', 'Neutral', 'Negative']),
  sentimentScore: z.number().describe('Score from 0 to 100 representing health of customer satisfaction.'),
  themes: z.array(z.object({
    name: z.string(),
    count: z.number(),
    sentiment: z.enum(['positive', 'negative', 'neutral'])
  })),
  topKeywords: z.object({
    positive: z.array(z.string()),
    negative: z.array(z.string())
  }),
  emotionDistribution: z.array(z.object({
    name: z.string(),
    value: z.number()
  })),
  repeatedComplaints: z.array(z.string()),
  repeatedHighlights: z.array(z.string()),
  actionSuggestions: z.object({
    improvements: z.array(z.string()),
    marketing: z.array(z.string()),
    support: z.array(z.string())
  }),
  individualAnalysis: z.array(z.object({
    index: z.number(),
    sentiment: z.enum(['positive', 'negative', 'neutral']),
    category: z.string(),
    emotions: z.array(z.string())
  }))
});

export type AnalyzeResult = z.infer<typeof analyzeResultSchema>;
