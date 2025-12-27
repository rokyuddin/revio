'use client'

import { useLiveQuery } from '@tanstack/react-db'
import { reviewsCollection, analysisCollection } from '@/db-collections'
import { analyzeReviewFn } from '../actions/analyze-review'
import { useCallback } from 'react'

export function useReviewAnalysis() {
  // Query reviews and their analyses
  const { data: reviews } = useLiveQuery((q) =>
    q.from({ review: reviewsCollection }).select(({ review }) => ({
      ...review,
    }))
  )

  const { data: analyses } = useLiveQuery((q) =>
    q.from({ analysis: analysisCollection }).select(({ analysis }) => ({
      ...analysis,
    }))
  )

  const analyzeReview = useCallback(async (reviewId: string) => {
    const review = reviews?.find(r => r.id === reviewId)
    if (!review) return

    try {
      const result = await analyzeReviewFn({ data: { id: review.id, content: review.content } })
      // Insert result into TanStack DB
      analysisCollection.insert(result)
    } catch (error) {
      console.error('Failed to analyze review:', error)
    }
  }, [reviews])

  return {
    reviews,
    analyses,
    analyzeReview,
  }
}
