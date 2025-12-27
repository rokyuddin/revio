
import React, { useState } from 'react';
import { Search, MessageSquare, Tag, Smile, Frown, Meh, SlidersHorizontal, Quote } from 'lucide-react';
import { Review, IndividualAnalysis } from '../types';

interface ReviewListProps {
  reviews: Review[];
  individualAnalysis: IndividualAnalysis[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, individualAnalysis }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSentiment, setFilterSentiment] = useState<'all' | 'positive' | 'negative' | 'neutral'>('all');

  const filteredReviews = reviews.filter((review, index) => {
    const analysis = individualAnalysis.find(a => a.index === index);
    const matchesSearch = review.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSentiment = filterSentiment === 'all' || analysis?.sentiment === filterSentiment;
    return matchesSearch && matchesSentiment;
  });

  const getSentimentConfig = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return { styles: 'bg-emerald-50 text-emerald-600 border-emerald-100', icon: <Smile className="w-4 h-4" />, shadow: 'shadow-emerald-100/50' };
      case 'negative': return { styles: 'bg-rose-50 text-rose-600 border-rose-100', icon: <Frown className="w-4 h-4" />, shadow: 'shadow-rose-100/50' };
      default: return { styles: 'bg-slate-50 text-slate-600 border-slate-100', icon: <Meh className="w-4 h-4" />, shadow: 'shadow-slate-100/50' };
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-6 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100">
        <div className="relative w-full lg:w-[400px] group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
          <input
            type="text"
            placeholder="Search within reviews..."
            className="w-full pl-12 pr-6 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
            <button 
              onClick={() => setFilterSentiment('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${filterSentiment === 'all' ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilterSentiment('positive')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${filterSentiment === 'positive' ? 'bg-white text-emerald-600 shadow-sm ring-1 ring-emerald-50' : 'text-slate-400 hover:text-emerald-500'}`}
            >
              <Smile className="w-4 h-4" /> Positive
            </button>
            <button 
              onClick={() => setFilterSentiment('negative')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${filterSentiment === 'negative' ? 'bg-white text-rose-600 shadow-sm ring-1 ring-rose-50' : 'text-slate-400 hover:text-rose-500'}`}
            >
              <Frown className="w-4 h-4" /> Negative
            </button>
          </div>
          <button className="p-3.5 bg-slate-900 text-white rounded-2xl hover:bg-black transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredReviews.length > 0 ? filteredReviews.map((review, idx) => {
          const analysis = individualAnalysis.find(a => a.index === idx);
          const config = analysis ? getSentimentConfig(analysis.sentiment) : getSentimentConfig('neutral');
          
          return (
            <div key={review.id} className="bg-white p-8 rounded-4xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-indigo-100 transition-all duration-500 group relative overflow-hidden">
               <div className={`absolute top-0 left-0 w-1.5 h-full ${analysis?.sentiment === 'positive' ? 'bg-emerald-500' : analysis?.sentiment === 'negative' ? 'bg-rose-500' : 'bg-slate-200'}`}></div>
               
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-slate-400 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-500 shadow-sm">
                  <MessageSquare className="w-7 h-7" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {analysis && (
                      <>
                        <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border ${config.styles} shadow-sm ${config.shadow}`}>
                          {config.icon}
                          {analysis.sentiment}
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50/50 text-indigo-700 rounded-full text-[10px] font-black tracking-widest uppercase border border-indigo-100/50">
                          <Tag className="w-3.5 h-3.5" />
                          {analysis.category}
                        </div>
                        {analysis.emotions.map(emotion => (
                          <div key={emotion} className="px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full text-[10px] font-black tracking-widest uppercase border border-slate-100">
                            {emotion}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <blockquote className="text-slate-800 leading-relaxed text-lg font-medium tracking-tight relative">
                    <Quote className="w-8 h-8 text-indigo-100 absolute -left-10 -top-2 rotate-180 opacity-50" />
                    {review.text}
                  </blockquote>
                </div>
              </div>
            </div>
          );
        }) : (
          <div className="text-center py-32 bg-slate-50 rounded-4xl border-2 border-dashed border-slate-200 animate-pulse">
            <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
              <Search className="w-10 h-10 text-slate-200" />
            </div>
            <p className="text-slate-900 font-black text-xl mb-2">Zero Matches Found</p>
            <p className="text-slate-400 font-medium">Try broadening your search or adjusting the sentiment filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewList;
