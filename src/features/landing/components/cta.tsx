import { Link } from '@tanstack/react-router'
import { ArrowRight, Rocket, CheckCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Cta() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-5xl mx-auto">
        {/* CTA Card */}
        <div className="relative bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background gradient accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Branding */}
            <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] mx-auto mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">Ready to Launch?</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">Instant Setup</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Unlock Your Customer Insights
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Today</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of business owners and freelancers who instantly decode customer sentiment 
              and make smarter, data-driven decisions.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-emerald-900">98% Accuracy</h4>
                <p className="text-sm text-emerald-600">Industry-leading precision</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-blue-900">10k+ Businesses</h4>
                <p className="text-sm text-blue-600">Trusted worldwide</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-violet-900">Instant Results</h4>
                <p className="text-sm text-violet-600">Under 30 seconds</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Button 
                asChild 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-[0_8px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)] transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link to="/dashboard" className="group">
                  <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Analyzing Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-2 border-border/70 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]"
              >
                <Users className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">No credit card required</span> • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Trusted by 1,000+ businesses</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>98% customer satisfaction</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              <span>24/7 premium support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
