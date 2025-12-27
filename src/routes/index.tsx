import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/features/landing/components/hero'
import Header from '@/components/organisms/header'
import Stats from '@/features/landing/components/stats'
import FeatureGrid from '@/features/landing/components/feature-grid'
import Cta from '@/features/landing/components/cta'
import Footer from '@/components/organisms/footer'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Features Grid */}
      <FeatureGrid />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  )
}
