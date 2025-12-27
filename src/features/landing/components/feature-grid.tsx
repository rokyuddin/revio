import { Zap, TrendingUp, Brain, Shield, Clock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    color: 'emerald',
    title: 'Instant Sentiment Detection',
    description:
      'Know immediately if reviews are positive, negative, or neutral. No guessing. No manual reading.',
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50/50',
    border: 'border-emerald-200/50',
    hover: 'hover:bg-emerald-50/80'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    color: 'violet',
    title: 'AI-Powered Analysis',
    description:
      'Advanced language models understand context, sarcasm, and nuance that humans miss. Get the real story.',
    gradient: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50/50',
    border: 'border-violet-200/50',
    hover: 'hover:bg-violet-50/80'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'blue',
    title: 'Trend Tracking',
    description:
      'Watch sentiment shift over time. Spot emerging issues before they become problems.',
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50/50',
    border: 'border-blue-200/50',
    hover: 'hover:bg-blue-50/80'
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    color: 'rose',
    title: 'Urgent Alert System',
    description:
      'Get notified instantly when negative reviews spike. Respond before reputation damage spreads.',
    gradient: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50/50',
    border: 'border-rose-200/50',
    hover: 'hover:bg-rose-50/80'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    color: 'amber',
    title: 'Privacy First',
    description:
      'Your customer data is encrypted and never shared. Full compliance with privacy laws.',
    gradient: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50/50',
    border: 'border-amber-200/50',
    hover: 'hover:bg-amber-50/80'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    color: 'cyan',
    title: 'Real-time Insights',
    description:
      'Analysis happens instantly. From upload to actionable insights in under 30 seconds.',
    gradient: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50/50',
    border: 'border-cyan-200/50',
    hover: 'hover:bg-cyan-50/80'
  },
]

export default function FeatureGrid() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] mx-auto mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">Advanced Analytics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            Built for Business Owners & Freelancers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to understand your customers' sentiments and respond with confidence.
            Powerful insights, elegant simplicity.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border ${feature.border} ${feature.bg} hover:${feature.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`}></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-2 border-border/70 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                  >
                    Learn More
                  </Button>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>Always On</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-200/50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-900">98% Accuracy</h4>
                <p className="text-sm text-emerald-600">Industry-leading precision</p>
              </div>
            </div>
            <p className="text-sm text-emerald-700">
              Our AI models are trained on millions of reviews and continuously optimized for maximum accuracy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-200/50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900">Under 30s</h4>
                <p className="text-sm text-blue-600">Lightning fast</p>
              </div>
            </div>
            <p className="text-sm text-blue-700">
              Process thousands of reviews in seconds, not hours. Get insights when you need them.
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-500/10 to-violet-600/5 border border-violet-200/50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h4 className="font-bold text-violet-900">GDPR Compliant</h4>
                <p className="text-sm text-violet-600">Privacy guaranteed</p>
              </div>
            </div>
            <p className="text-sm text-violet-700">
              Your data is encrypted, never stored, and fully compliant with global privacy regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
