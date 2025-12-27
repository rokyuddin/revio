import { Review } from '@/db-collections/reviews'

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    platform: 'google',
    platformId: 'g_1',
    author: 'John Doe',
    rating: 5,
    content: 'The food was amazing and the service was top-notch! Highly recommend the pasta.',
    date: new Date().toISOString(),
    orgId: 'org_1',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    platform: 'yelp',
    platformId: 'y_1',
    author: 'Jane Smith',
    rating: 2,
    content: 'Wait time was over 45 minutes even with a reservation. The steak was overcooked.',
    date: new Date().toISOString(),
    orgId: 'org_1',
  },
  {
    id: '67c3c44b-15b6-443b-be30-3bb2ac951508',
    platform: 'amazon',
    platformId: 'a_1',
    author: 'Bob Brown',
    rating: 4,
    content: 'Great product, but the packaging was a bit damaged when it arrived.',
    date: new Date().toISOString(),
    orgId: 'org_1',
  }
]
