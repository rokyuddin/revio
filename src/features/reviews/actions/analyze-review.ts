import { createServerFn } from '@tanstack/react-start'
import { generateText } from 'ai'
import { groq } from '@/lib/groq'
import { analyzeResultSchema } from '../schemas'
import type { Review } from '../types'

export const analyzeReviewsFn = createServerFn({ method: 'POST' })
  .inputValidator((data: { reviews: Review[]; businessName: string; businessType: string }) => data)
  .handler(async ({ data: { reviews, businessName, businessType } }) => {
    try {
      const reviewsText = reviews.map((r, i) => `Review #${i}: "${r.text}"`).join('\n\n');

      const systemInstruction = `
        You are a world-class customer experience and business analyst. 
        Analyze the provided customer reviews for "${businessName}" (${businessType}).
        Extract sentiment, themes, emotions, and actionable insights.
        
        CRITICAL: You must return the analysis in a valid, parseable JSON format.
        Do not include any other text, markdown blocks, or commentary except the raw JSON.
      `;

      const { text } = await generateText({
        model: groq('llama-3.3-70b-versatile'),
        system: systemInstruction,
        prompt: `Analyze these reviews for ${businessName}:\n\n${reviewsText}\n\nReturn the analysis in a JSON format that strictly follows this structure:
        {
          "summary": "High-level summary",
          "overallSentiment": "Positive" | "Neutral" | "Negative" (must be Capitalized),
          "sentimentScore": number (0-100),
          "themes": [
            { 
              "name": "string", 
              "count": number, 
              "sentiment": "positive" | "negative" | "neutral" (must be lowercase)
            }
          ],
          "topKeywords": { "positive": ["string"], "negative": ["string"] },
          "emotionDistribution": [{ "name": "string", "value": number }],
          "repeatedComplaints": ["string"],
          "repeatedHighlights": ["string"],
          "actionSuggestions": { "improvements": ["string"], "marketing": ["string"], "support": ["string"] },
          "individualAnalysis": [
            { 
              "index": number, 
              "sentiment": "positive" | "negative" | "neutral" (must be lowercase), 
              "category": "string", 
              "emotions": ["string"] 
            }
          ]
        }`,
        temperature: 0.1,
      })

      // Clean the text in case the model added markdown blocks
      const cleanJson = text.replace(/```json\n?|\n?```/g, '').trim();
      const parsedData = JSON.parse(cleanJson);
      
      // Normalize data to ensure Zod validation passes even if the AI slightly missed the casing
      const normalizedData = {
        ...parsedData,
        overallSentiment: parsedData.overallSentiment?.charAt(0).toUpperCase() + parsedData.overallSentiment?.slice(1).toLowerCase(),
        themes: parsedData.themes?.map((t: any) => ({
          ...t,
          sentiment: t.sentiment?.toLowerCase()
        })),
        individualAnalysis: parsedData.individualAnalysis?.map((a: any) => ({
          ...a,
          sentiment: a.sentiment?.toLowerCase()
        }))
      };

      // Validate the normalized data with our schema
      return analyzeResultSchema.parse(normalizedData);
    } catch (error) {
      console.error('AI Analysis Error:', error)
      throw new Error(`Failed to analyze reviews: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  })
