import { createFileRoute } from '@tanstack/react-router'
import { DashboardView } from '@/features/reviews/components/dashboard-view'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return <DashboardView />
}
