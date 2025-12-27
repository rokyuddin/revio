

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import {
  MessageSquare, ArrowUpRight,
  Smile, Frown, Meh, CheckCircle2, AlertCircle, Sparkles, TrendingUp
} from 'lucide-react';
import { AnalysisResult } from '../types';
import SentimentOverview from './sentiment-overview';
import { Button } from '../../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../components/ui/card';

interface DashboardProps {
  result: AnalysisResult;
  reviewCount: number;
}

const COLORS = ['#10B981', '#F59E0B', '#EF4444', '#6366F1', '#8B5CF6', '#EC4899'];

const Dashboard: React.FC<DashboardProps> = ({ result, reviewCount }) => {
  const {
    summary, overallSentiment, sentimentScore, themes,
    emotionDistribution, repeatedHighlights, repeatedComplaints
  } = result;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Main Sentiment Overview */}
      <SentimentOverview result={result} reviewCount={reviewCount} />

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow" role="region" aria-labelledby="sample-size-title">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle id="sample-size-title" className="text-sm font-bold text-slate-600 uppercase tracking-widest">Sample Size</CardTitle>
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center" aria-hidden="true">
              <MessageSquare className="w-7 h-7 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900" aria-label={`Total reviews analyzed: ${reviewCount}`}>{reviewCount}</div>
            <p className="text-sm text-slate-600 font-medium mt-2">Reviews analyzed</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-slate-600 uppercase tracking-widest">Key Theme</CardTitle>
            <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center font-bold text-violet-600">
              T
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900 truncate">{themes[0]?.name || 'N/A'}</div>
            <p className="text-sm text-slate-600 font-medium mt-2">{themes[0]?.count || 0} mentions</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-slate-600 uppercase tracking-widest">Analysis Status</CardTitle>
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900">Complete</div>
            <p className="text-sm text-emerald-600 font-bold mt-2">✓ AI-Powered</p>
          </CardContent>
        </Card>
      </div>

      {/* Executive Summary */}
      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200">
        <CardHeader className="flex flex-row items-center gap-3 pb-4">
          <Sparkles className="w-6 h-6 text-blue-600" />
          <CardTitle className="text-2xl font-black text-slate-900">Executive Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 text-lg leading-relaxed font-medium">
            {summary}
          </p>
        </CardContent>
      </Card>

      {/* Analytics Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-6">
            <CardTitle className="text-xl font-black text-slate-900 tracking-tight">Topic Analysis</CardTitle>
            <TrendingUp className="text-slate-400 w-5 h-5" />
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={themes} layout="vertical" margin={{ left: 100 }}>
                <CartesianGrid strokeDasharray="4 4" horizontal={false} stroke="#E2E8F0" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fontWeight: 700, fill: '#475569' }} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: 'rgba(59, 130, 246, 0.04)', radius: 8 }}
                  contentStyle={{ borderRadius: '12px', border: '2px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="count" radius={[0, 8, 8, 0]} barSize={32}>
                  {themes.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-6">
            <CardTitle className="text-xl font-black text-slate-900 tracking-tight">Emotion Distribution</CardTitle>
            <ArrowUpRight className="text-slate-400 w-5 h-5" />
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={emotionDistribution as any}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={6}
                  dataKey="value"
                  stroke="none"
                >
                  {emotionDistribution.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: '2px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-500 shadow-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-3 pb-6">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-black text-emerald-900">Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {repeatedHighlights.slice(0, 4).map((text, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-emerald-200 hover:border-emerald-400 transition-colors group">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 group-hover:scale-150 transition-transform"></div>
                  <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-500 shadow-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-3 pb-6">
            <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center shadow-lg">
              <AlertCircle className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-black text-red-900">Areas for Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {repeatedComplaints.slice(0, 4).map((text, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-red-200 hover:border-red-400 transition-colors group">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1.5 shrink-0 group-hover:scale-150 transition-transform"></div>
                  <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
