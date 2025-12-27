
import React from 'react';
import { Calendar, Building2, BarChart2, ChevronRight, Clock, Search, Filter } from 'lucide-react';
import { SavedAnalysis } from '../types';

interface HistoryProps {
  history: SavedAnalysis[];
  onSelect: (analysis: SavedAnalysis) => void;
}

const History: React.FC<HistoryProps> = ({ history, onSelect }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Intelligence Archive</h2>
          <p className="text-slate-500 font-medium text-lg">Retrieve past insights and monitor business evolution.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-5 py-2.5 bg-indigo-50 text-indigo-600 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2 border border-indigo-100 shadow-sm">
            <Clock className="w-4 h-4" />
            {history.length} Saved Analysis
          </div>
          <button className="p-2.5 bg-slate-900 text-white rounded-xl hover:bg-black transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {history.length > 0 ? history.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="w-full text-left bg-white p-8 rounded-4xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:border-indigo-200 transition-all duration-500 group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-100/50 transition-colors"></div>
            
            <div className="flex items-center gap-8 relative z-10">
              <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                <Building2 className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">{item.businessName}</h3>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    {new Date(item.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <BarChart2 className="w-4 h-4 text-violet-400" />
                    {item.reviewCount} Reviews
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-8 w-full lg:w-auto justify-between relative z-10 border-t lg:border-t-0 border-slate-50 pt-6 lg:pt-0">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <div className={`text-3xl font-black tracking-tighter ${item.result.sentimentScore > 70 ? 'text-emerald-500' : item.result.sentimentScore > 40 ? 'text-amber-500' : 'text-rose-500'}`}>
                    {item.result.sentimentScore}
                  </div>
                  <span className="text-slate-300 font-black">%</span>
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sentiment Index</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500 shadow-xl shadow-slate-200 group-hover:shadow-indigo-200">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </button>
        )) : (
          <div className="text-center py-40 bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-4xl group">
            <div className="bg-white w-24 h-24 rounded-4xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-700">
              <Search className="w-12 h-12 text-slate-200" />
            </div>
            <p className="text-slate-900 font-black text-2xl mb-3 tracking-tight">Archive Empty</p>
            <p className="text-slate-400 font-medium max-w-sm mx-auto">Start your first analysis to begin building your intelligence history.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
