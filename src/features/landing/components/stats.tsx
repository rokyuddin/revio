import React from 'react'
import { TrendingUp, Users, Clock, Database } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      label: "Analysis Accuracy",
      value: "98%",
      description: "Industry-leading precision in sentiment detection",
      icon: TrendingUp,
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-500/10",
      accent: "text-emerald-600"
    },
    {
      label: "Processing Speed",
      value: "<1s",
      description: "Lightning-fast analysis for real-time insights",
      icon: Clock,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-500/10",
      accent: "text-blue-600"
    },
    {
      label: "Reviews Processed",
      value: "10k+",
      description: "Trusted by thousands of businesses worldwide",
      icon: Users,
      color: "from-violet-500 to-violet-600",
      bg: "bg-violet-500/10",
      accent: "text-violet-600"
    },
    {
      label: "Scalability",
      value: "∞",
      description: "Handle any volume with seamless performance",
      icon: Database,
      color: "from-amber-500 to-amber-600",
      bg: "bg-amber-500/10",
      accent: "text-amber-600"
    }
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] mx-auto mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">By the Numbers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            Proven Performance & Impact
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform delivers measurable results that drive business growth and customer satisfaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
              </div>

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 ${stat.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className={`text-sm font-semibold ${stat.accent} mb-1`}>
                    {stat.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Customer Impact */}
          <div className="bg-gradient-to-br from-emerald-50/50 to-emerald-100/50 border border-emerald-200/50 rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-900">Customer Success</h3>
                <p className="text-sm text-emerald-600">Real results from real businesses</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-emerald-200/50">
                <span className="text-sm text-emerald-700">Average sentiment improvement</span>
                <span className="text-lg font-bold text-emerald-900">+35%</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-emerald-200/50">
                <span className="text-sm text-emerald-700">Issue resolution time</span>
                <span className="text-lg font-bold text-emerald-900">-60%</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-emerald-700">Customer retention boost</span>
                <span className="text-lg font-bold text-emerald-900">+28%</span>
              </div>
            </div>
          </div>

          {/* Right Column - Technical Excellence */}
          <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/50 border border-blue-200/50 rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Technical Excellence</h3>
                <p className="text-sm text-blue-600">Built for scale and reliability</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-blue-200/50">
                <span className="text-sm text-blue-700">Uptime reliability</span>
                <span className="text-lg font-bold text-blue-900">99.9%</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-blue-200/50">
                <span className="text-sm text-blue-700">Data encryption</span>
                <span className="text-lg font-bold text-blue-900">AES-256</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-blue-700">API response time</span>
                <span className="text-lg font-bold text-blue-900">{"<200ms"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              <span>Enterprise Ready</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Zero Downtime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
