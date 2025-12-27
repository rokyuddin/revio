import {
  createCollection,
  localOnlyCollectionOptions,
} from '@tanstack/react-db'
import { ReviewSchema } from './reviews'
import { AnalysisSchema } from './analysis'

// Revio Collections
export const reviewsCollection = createCollection(
  localOnlyCollectionOptions({
    getKey: (review) => review.id,
    schema: ReviewSchema,
  }),
)

export const analysisCollection = createCollection(
  localOnlyCollectionOptions({
    getKey: (analysis) => analysis.id,
    schema: AnalysisSchema,
  }),
)

export * from './reviews'
export * from './analysis'
