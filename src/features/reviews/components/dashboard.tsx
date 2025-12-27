
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import { 
  MessageSquare, ArrowUpRight, 
  Smile, Frown, Meh, CheckCircle2, AlertCircle, Zap
} from 'lucide-react';
import { AnalysisResult } from '../types';

interface DashboardProps {
  result: AnalysisResult;
  reviewCount: number;
}

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981'];

const Dashboard: React.FC<DashboardProps> = ({ result, reviewCount }) => {
  const { 
    summary, overallSentiment, sentimentScore, themes, 
    emotionDistribution, repeatedHighlights, repeatedComplaints 
  } = result;

  const getSentimentConfig = () => {
    switch(overallSentiment) {
      case 'Positive': 
        return { icon: <Smile className="w-12 h-12 text-emerald-500" />, color: 'emerald', label: 'Healthy' };
      case 'Negative': 
        return { icon: <Frown className="w-12 h-12 text-rose-500" />, color: 'rose', label: 'Critical' };
      default: 
        return { icon: <Meh className="w-12 h-12 text-amber-500" />, color: 'amber', label: 'Stable' };
    }
  };

  const config = getSentimentConfig();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Hero Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white p-8 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-slate-50 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100/50">
                Executive Synthesis
              </div>
              <div className="h-px flex-1 bg-linear-to-r from-indigo-100 to-transparent"></div>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Intelligence Overview</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-3xl">
              {summary}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 relative z-10">
            {[
              { label: 'Sample Size', value: reviewCount, sub: 'Reviews', color: 'slate' },
              { label: 'Sentiment Index', value: `${sentimentScore}%`, sub: config.label, color: 'indigo' },
              { label: 'Top Theme', value: themes[0]?.name || 'N/A', sub: `${themes[0]?.count || 0} Mentions`, color: 'violet' },
              { label: 'Status', value: overallSentiment, sub: 'Customer Pulse', color: config.color }
            ].map((stat, i) => (
              <div key={i} className="group/stat cursor-default">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover/stat:text-indigo-500 transition-colors">{stat.label}</p>
                <p className={`text-xl font-black text-slate-900 truncate`}>{stat.value}</p>
                <p className="text-xs font-bold text-slate-400 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center justify-center text-center group">
          <div className="relative mb-8">
            <svg className="w-44 h-44 transform -rotate-90 drop-shadow-sm">
              <circle cx="88" cy="88" r="76" fill="transparent" stroke="#F1F5F9" strokeWidth="14" />
              <circle 
                cx="88" 
                cy="88" 
                r="76" 
                fill="transparent" 
                stroke="currentColor" 
                className={`transition-all duration-1000 ease-out ${
                  config.color === 'emerald' ? 'text-emerald-500' : 
                  config.color === 'rose' ? 'text-rose-500' : 'text-amber-500'
                }`}
                strokeWidth="14" 
                strokeDasharray={`${(sentimentScore / 100) * 477} 477`} 
                strokeLinecap="round" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center transform rotate-90">
              <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/50 group-hover:scale-110 transition-transform duration-500">
                {config.icon}
              </div>
            </div>
          </div>
          <p className="text-4xl font-black text-slate-900 mb-1">{sentimentScore}</p>
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Satisfaction Score</p>
        </div>
      </div>

      {/* Analytics Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 group">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 transition-transform group-hover:rotate-12">
                <MessageSquare className="w-5 h-5" />
              </div>
              Thematic Distribution
            </h3>
            <div className="flex gap-1">
               {[0, 1, 2].map(i => <div key={i} className="w-1 h-4 bg-slate-100 rounded-full"></div>)}
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={themes} layout="vertical" margin={{ left: -20 }}>
                <CartesianGrid strokeDasharray="4 4" horizontal={false} stroke="#F1F5F9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 11, fontWeight: 700, fill: '#64748B' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(99, 102, 241, 0.04)', radius: 8 }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px' }}
                />
                <Bar dataKey="count" radius={[0, 8, 8, 0]} barSize={32}>
                  {themes.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 group">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 transition-transform group-hover:scale-110">
                <Smile className="w-5 h-5" />
              </div>
              Emotional Landscape
            </h3>
            <ArrowUpRight className="text-slate-300 w-6 h-6" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={emotionDistribution as any}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {emotionDistribution.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '11px', fontWeight: 'bold', paddingTop: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Highlights & Weaknesses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-emerald-50/30 p-8 rounded-4xl border border-emerald-100/50 group">
          <h3 className="text-xl font-black text-emerald-900 mb-8 flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            Core Strengths
          </h3>
          <div className="space-y-4">
            {repeatedHighlights.map((text, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-emerald-100 shadow-sm group/item hover:border-emerald-300 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                <p className="text-slate-700 text-sm font-bold leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-rose-50/30 p-8 rounded-4xl border border-rose-100/50 group">
          <h3 className="text-xl font-black text-rose-900 mb-8 flex items-center gap-4">
            <div className="w-10 h-10 bg-rose-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-rose-200">
              <AlertCircle className="w-5 h-5" />
            </div>
            Critical Friction
          </h3>
          <div className="space-y-4">
            {repeatedComplaints.map((text, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-rose-100 shadow-sm group/item hover:border-rose-300 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                <p className="text-slate-700 text-sm font-bold leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
