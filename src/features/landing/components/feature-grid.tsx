import { Sparkles, MessageSquare, Zap, BarChart3, Shield } from 'lucide-react'

  const features = [
    {
      icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
      title: 'AI Sentiment Analysis',
      description:
        'Automatically decode the emotional tone of every review. Understand customer satisfaction at scale.',
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-cyan-400" />,
      title: 'Smart Topic Discovery',
      description:
        'Stop reading every review. Our AI extracts key themes—from pricing to service quality—automatically.',
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: 'Automated Insight Generation',
      description:
        'Convert unstructured feedback into clear, actionable business recommendations in seconds.',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />,
      title: 'Reputation Tracking',
      description:
        'Monitor your brand health across Google, Yelp, and Amazon from a single unified dashboard.',
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: 'Brand Consistency',
      description:
        'Generate AI-powered review responses that maintain your brand voice and build customer trust.',
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: 'Real-time Alerts',
      description:
        'Stay on top of critical feedback with instant notifications for negative sentiment or urgent issues.',
    },
  ]

export default function FeatureGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">Powerful Features for Modern Brands</h3>
          <p className="text-slate-400 max-w-xl mx-auto">Everything you need to master your brand's reputation and listen to your customers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/5 group"
            >
              <div className="mb-6 p-3 bg-slate-800 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
  )
}
