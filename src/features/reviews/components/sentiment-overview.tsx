import React from 'react';
import { TrendingUp, Sparkles, ArrowUpRight, BarChart3 } from 'lucide-react';
import { AnalysisResult } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

interface SentimentOverviewProps {
  result: AnalysisResult;
  reviewCount: number;
}

const SentimentOverview: React.FC<SentimentOverviewProps> = ({ result, reviewCount }) => {
  const { overallSentiment, sentimentScore } = result;

  // Calculate sentiment breakdown percentages from emotionDistribution
  const totalEmotions = result.emotionDistribution.reduce((sum, e) => sum + (e.value || 0), 0);
  
  const getSentimentConfig = () => {
    switch(overallSentiment) {
      case 'Positive':
        return {
          icon: '😊',
          label: 'Positive Sentiment',
          description: 'Your customers are overwhelmingly satisfied with your brand experience',
          gradient: 'from-emerald-50 via-green-50 to-emerald-100',
          borderColor: 'border-emerald-200',
          accentColor: 'text-emerald-700',
          headingColor: 'text-emerald-900',
          descriptionColor: 'text-emerald-700/80',
          innerCard: 'bg-white/80 border-emerald-200/50',
          progressBg: 'bg-emerald-100',
          progressBar: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
          iconBg: 'bg-emerald-500/10',
          iconColor: 'text-emerald-600',
          badgeBg: 'bg-emerald-50',
          badgeBorder: 'border-emerald-200',
          badgeText: 'text-emerald-700',
          status: 'Excellent Performance',
          statusIcon: '🎯'
        };
      case 'Negative':
        return {
          icon: '😔',
          label: 'Critical Attention Required',
          description: 'Significant customer concerns need immediate strategic intervention',
          gradient: 'from-red-50 via-rose-50 to-red-100',
          borderColor: 'border-red-200',
          accentColor: 'text-red-700',
          headingColor: 'text-red-900',
          descriptionColor: 'text-red-700/80',
          innerCard: 'bg-white/80 border-red-200/50',
          progressBg: 'bg-red-100',
          progressBar: 'bg-gradient-to-r from-red-400 to-red-600',
          iconBg: 'bg-red-500/10',
          iconColor: 'text-red-600',
          badgeBg: 'bg-red-50',
          badgeBorder: 'border-red-200',
          badgeText: 'text-red-700',
          status: 'Immediate Action Needed',
          statusIcon: '🚨'
        };
      default:
        return {
          icon: '😐',
          label: 'Balanced Feedback',
          description: 'Mixed sentiment presenting both opportunities and areas for optimization',
          gradient: 'from-amber-50 via-yellow-50 to-amber-100',
          borderColor: 'border-amber-200',
          accentColor: 'text-amber-700',
          headingColor: 'text-amber-900',
          descriptionColor: 'text-amber-700/80',
          innerCard: 'bg-white/80 border-amber-200/50',
          progressBg: 'bg-amber-100',
          progressBar: 'bg-gradient-to-r from-amber-400 to-amber-600',
          iconBg: 'bg-amber-500/10',
          iconColor: 'text-amber-600',
          badgeBg: 'bg-amber-50',
          badgeBorder: 'border-amber-200',
          badgeText: 'text-amber-700',
          status: 'Mixed Signals',
          statusIcon: '⚖️'
        };
    }
  };

  const config = getSentimentConfig();

  return (
    <div className="space-y-8">
      {/* Main Sentiment Card - Elevated Design */}
      <Card className={`card-elevated bg-gradient-to-br ${config.gradient} ${config.borderColor} relative overflow-hidden group`}>
        {/* Background Decorations */}
        <div className="absolute -top-24 -right-24 w-96 h-96 opacity-5">
          <div className="text-9xl transform rotate-12">{config.icon}</div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 p-12">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-12">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm">
                <div className={`w-8 h-8 ${config.iconBg} ${config.iconColor} rounded-xl flex items-center justify-center`}>
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-600">{config.status}</span>
                <span className="text-lg">{config.statusIcon}</span>
              </div>
              
              <div className="space-y-3">
                <h1 className={`text-5xl font-black ${config.headingColor} tracking-tight leading-[1.1]`}>
                  {config.label}
                </h1>
                <p className={`text-xl ${config.descriptionColor} font-medium leading-relaxed max-w-2xl`}>
                  {config.description}
                </p>
              </div>
            </div>
            
            <div className={`text-7xl ${config.iconColor} opacity-80 group-hover:scale-110 transition-transform duration-500`}>
              {config.icon}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sentiment Score Card */}
            <Card className={`${config.innerCard} backdrop-blur border-2 ${config.badgeBorder} p-8 group/card hover:shadow-lg transition-all duration-300`}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <CardDescription className={`text-sm font-bold uppercase tracking-wider ${config.badgeText}`}>
                    Overall Sentiment Score
                  </CardDescription>
                  <BarChart3 className={`w-5 h-5 ${config.iconColor} opacity-60`} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className={`text-6xl font-black ${config.headingColor} text-mono tracking-tight`}>
                      {sentimentScore}
                    </span>
                    <span className={`text-2xl ${config.accentColor} font-bold`}>/ 100</span>
                  </div>
                  
                  <div className={`h-3 ${config.progressBg} rounded-full overflow-hidden`}>
                    <div
                      className={`h-full ${config.progressBar} transition-all duration-1000 ease-out rounded-full`}
                      style={{ width: `${sentimentScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Review Count Card */}
            <Card className={`${config.innerCard} backdrop-blur border-2 ${config.badgeBorder} p-8 group/card hover:shadow-lg transition-all duration-300`}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <CardDescription className={`text-sm font-bold uppercase tracking-wider ${config.badgeText}`}>
                    Data Foundation
                  </CardDescription>
                  <div className={`w-8 h-8 ${config.iconBg} ${config.iconColor} rounded-xl flex items-center justify-center`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className={`text-6xl font-black ${config.headingColor} text-mono tracking-tight`}>
                      {reviewCount.toLocaleString()}
                    </span>
                  </div>
                  <p className={`text-sm ${config.accentColor} font-medium`}>
                    Customer reviews analyzed
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>

      {/* Enhanced Sentiment Distribution Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Positive */}
        <Card className="card-interactive bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 group/positive hover:border-emerald-300 hover:shadow-xl">
          <CardContent className="p-8 text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover/positive:scale-110 transition-transform duration-300">
                <div className="text-4xl">😊</div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <CardDescription className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Positive Sentiment</CardDescription>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black text-emerald-700 text-mono">
                    {Math.round((result.emotionDistribution.find(e => e.name === 'Positive')?.value || 0) / totalEmotions * 100)}
                  </span>
                  <span className="text-emerald-600 font-bold text-lg">%</span>
                </div>
                <div className="w-full bg-emerald-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.round((result.emotionDistribution.find(e => e.name === 'Positive')?.value || 0) / totalEmotions * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Neutral */}
        <Card className="card-interactive bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 group/neutral hover:border-amber-300 hover:shadow-xl">
          <CardContent className="p-8 text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover/neutral:scale-110 transition-transform duration-300">
                <div className="text-4xl">😐</div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <CardDescription className="text-sm font-bold text-amber-900 uppercase tracking-wider">Neutral Sentiment</CardDescription>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black text-amber-700 text-mono">
                    {Math.round((result.emotionDistribution.find(e => e.name === 'Neutral')?.value || 0) / totalEmotions * 100)}
                  </span>
                  <span className="text-amber-600 font-bold text-lg">%</span>
                </div>
                <div className="w-full bg-amber-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.round((result.emotionDistribution.find(e => e.name === 'Neutral')?.value || 0) / totalEmotions * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Negative */}
        <Card className="card-interactive bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 group/negative hover:border-red-300 hover:shadow-xl">
          <CardContent className="p-8 text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover/negative:scale-110 transition-transform duration-300">
                <div className="text-4xl">😔</div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <CardDescription className="text-sm font-bold text-red-900 uppercase tracking-wider">Negative Sentiment</CardDescription>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black text-red-700 text-mono">
                    {Math.round((result.emotionDistribution.find(e => e.name === 'Negative')?.value || 0) / totalEmotions * 100)}
                  </span>
                  <span className="text-red-600 font-bold text-lg">%</span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.round((result.emotionDistribution.find(e => e.name === 'Negative')?.value || 0) / totalEmotions * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Insight Summary */}
      <Card className="card-premium bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900/5 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">Strategic Insight</CardTitle>
              <CardDescription className="text-slate-500 font-medium mt-1">AI-Generated Intelligence Summary</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {sentimentScore >= 70
                ? `Outstanding performance! Your brand is resonating exceptionally well with customers. This presents a prime opportunity to amplify positive sentiment through targeted marketing campaigns and customer advocacy programs. Consider leveraging these insights for case studies and testimonials.`
                : sentimentScore >= 40
                ? `Your brand shows balanced market reception with clear differentiation opportunities. Focus on reinforcing your strongest attributes while systematically addressing the most frequently mentioned pain points. This approach will maximize ROI on improvement initiatives.`
                : `Critical intervention required. Customer sentiment indicates fundamental issues that demand immediate strategic attention. Prioritize addressing the top three recurring complaints to prevent further brand erosion and begin rebuilding trust.`}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
            <Button variant="outline" size="sm" className="h-10 px-4">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Detailed Analysis
            </Button>
            <Button variant="outline" size="sm" className="h-10 px-4">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SentimentOverview;

