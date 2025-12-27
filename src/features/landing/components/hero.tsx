import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Branding */}
        <div className="text-center">
        <div className="inline-flex items-center gap-3 mb-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Revio</span>
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">AI-Powered</span>
        </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight">
            Transform Customer Feedback
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> into Action</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Harness AI to decode thousands of reviews in seconds. Gain crystal-clear insights, 
            identify trends, and make data-driven decisions that accelerate your growth.
          </p>
        </div>

        {/* Sentiment Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {/* Positive Card */}
          <div className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-900">Positive</h3>
                  <p className="text-sm text-emerald-600 font-medium">Growth Opportunities</p>
                </div>
              </div>
              <p className="text-sm text-emerald-700 leading-relaxed">
                Identify your strengths and amplify what's working. Turn satisfied customers into advocates.
              </p>
            </div>
          </div>

          {/* Neutral Card */}
          <div className="group relative bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                  <span className="text-2xl">😐</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900">Neutral</h3>
                  <p className="text-sm text-amber-600 font-medium">Areas to Explore</p>
                </div>
              </div>
              <p className="text-sm text-amber-700 leading-relaxed">
                Discover mixed signals and untapped potential. These insights often reveal your biggest opportunities.
              </p>
            </div>
          </div>

          {/* Negative Card */}
          <div className="group relative bg-gradient-to-br from-rose-50 to-rose-100/50 border border-rose-200/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center group-hover:bg-rose-500/30 transition-colors">
                  <span className="text-2xl">😔</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-rose-900">Negative</h3>
                  <p className="text-sm text-rose-600 font-medium">Priority Actions</p>
                </div>
              </div>
              <p className="text-sm text-rose-700 leading-relaxed">
                Pinpoint critical issues before they escalate. Turn detractors into satisfied customers.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button 
            asChild 
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-[0_8px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)]"
          >
            <Link to="/dashboard" className="group">
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Analyzing Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-border/70 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            See How It Works
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by 1,000+ businesses • 98% accuracy • Real-time insights
          </p>
        </div>
      </div>
    </section>
  )
}
