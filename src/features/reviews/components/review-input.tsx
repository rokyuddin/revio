
import React, { useState } from 'react';
import { FileUp, ClipboardList, Send, Loader2, Sparkles, Building2, Zap, ArrowUpRight } from 'lucide-react';
import { Review } from '../types';

interface ReviewInputProps {
  onAnalyze: (reviews: Review[], businessName: string, businessType: string) => void;
  isLoading: boolean;
}

const ReviewInput: React.FC<ReviewInputProps> = ({ onAnalyze, isLoading }) => {
  const [inputText, setInputText] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('E-commerce');
  const [mode, setMode] = useState<'text' | 'csv'>('text');

  const handleTextSubmit = () => {
    if (!inputText.trim() || !businessName.trim()) return;
    
    const lines = inputText.split('\n').filter(line => line.trim().length > 3);
    const reviews: Review[] = lines.map((text, i) => ({
      id: `rev-${Date.now()}-${i}`,
      text: text.trim(),
    }));

    onAnalyze(reviews, businessName, businessType);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const csv = event.target?.result as string;
      const lines = csv.split(/\r?\n/).filter(line => line.trim().length > 5);
      const startIdx = lines[0].toLowerCase().includes('review') ? 1 : 0;
      
      const reviews: Review[] = lines.slice(startIdx).map((line, i) => {
        const content = line.replace(/^"|"$/g, '').replace(/""/g, '"');
        return {
          id: `csv-${Date.now()}-${i}`,
          text: content,
        };
      });

      if (reviews.length > 0) {
        onAnalyze(reviews, businessName, businessType);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6 shadow-sm">
          <Zap className="w-3 h-3 fill-indigo-600" />
          AI Review Intelligence
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          Unlock the Voice of <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-size-[200%_auto] animate-gradient">Your Customers</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Deep-dive into thousands of reviews in seconds. Identify strengths, 
          fix frictions, and scale your business with Revio.
        </p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden border border-slate-100 group">
        <div className="p-10 border-b border-slate-50 bg-slate-50/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Business Identity</label>
              <div className="relative group/input">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within/input:text-indigo-600 transition-colors" />
                <input
                  type="text"
                  placeholder="e.g. Acme SaaS"
                  className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Market Category</label>
              <select
                className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 cursor-pointer appearance-none"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              >
                <option>E-commerce</option>
                <option>SaaS</option>
                <option>Local Service</option>
                <option>Restaurant</option>
                <option>Mobile App</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-10">
          <div className="flex bg-slate-100/50 p-1.5 rounded-2xl mb-8 w-fit mx-auto sm:mx-0">
            <button
              onClick={() => setMode('text')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                mode === 'text' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              Direct Paste
            </button>
            <button
              onClick={() => setMode('csv')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                mode === 'csv' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <FileUp className="w-4 h-4" />
              File Import
            </button>
          </div>

          {mode === 'text' ? (
            <div className="space-y-6">
              <div className="relative group/text">
                <textarea
                  placeholder="Paste your individual customer reviews here (one per line)..."
                  className="w-full h-72 p-6 bg-slate-50/50 border border-slate-200 rounded-3xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none resize-none transition-all font-medium text-slate-600 leading-relaxed placeholder:text-slate-300 scrollbar-thin scrollbar-thumb-slate-200"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200 text-[10px] font-black text-slate-400">
                  {inputText.split('\n').filter(l => l.trim()).length} REVIEWS
                </div>
              </div>
              
              <button
                disabled={isLoading || !inputText.trim() || !businessName.trim()}
                onClick={handleTextSubmit}
                className="w-full py-5 bg-slate-900 text-white rounded-3xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-black hover:shadow-2xl hover:shadow-indigo-200 transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed group/btn"
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <div className="bg-white/10 p-1.5 rounded-lg group-hover/btn:bg-indigo-500 transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    Initiate Analytical Engine
                    <Send className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-slate-200 rounded-[2.5rem] p-16 text-center bg-slate-50/30 group/upload hover:border-indigo-400 hover:bg-indigo-50/10 transition-all duration-500">
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
                id="csv-upload"
              />
              <label htmlFor="csv-upload" className="cursor-pointer group flex flex-col items-center">
                <div className="bg-white w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-slate-50">
                  <FileUp className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Deploy CSV Dataset</h3>
                <p className="text-slate-400 font-medium max-w-sm mx-auto mb-8">
                  Upload your exported reviews. Ensure one column contains the raw feedback text.
                </p>
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl hover:bg-black transition-all active:scale-95">
                  Securely Select File
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </label>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        {['Amazon', 'Google', 'App Store', 'Trustpilot', 'Shopify'].map((name) => (
          <div key={name} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            {name} Integration
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewInput;
