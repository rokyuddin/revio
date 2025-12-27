
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Lightbulb, 
  History as HistoryIcon, 
  PlusCircle,
  LogOut,
  Settings,
  Bell,
  Sparkles,
  Search
} from 'lucide-react';
import { analyzeReviewsFn } from '../actions/analyze-review';
import { AnalysisResult, Review, ViewType, SavedAnalysis } from '../types';
import ReviewInput from './review-input';
import Dashboard from './dashboard';
import ReviewList from './review-list';
import ActionCenter from './action-center';
import History from './history';

export function DashboardView() {
  const [activeView, setActiveView] = useState<ViewType>('upload');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentAnalysis, setCurrentAnalysis] = useState<AnalysisResult | null>(null);
  const [businessName, setBusinessName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<SavedAnalysis[]>([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('reviewiq_history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const saveToHistory = (result: AnalysisResult, name: string, count: number) => {
    const newEntry: SavedAnalysis = {
      id: `analysis-${Date.now()}`,
      timestamp: Date.now(),
      businessName: name,
      reviewCount: count,
      result
    };
    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('reviewiq_history', JSON.stringify(updatedHistory));
  };

  const handleAnalyze = async (inputReviews: Review[], name: string, type: string) => {
    setIsLoading(true);
    try {
      const result = await analyzeReviewsFn({
        data: {
          reviews: inputReviews,
          businessName: name,
          businessType: type
        }
      }) as AnalysisResult;
      
      setReviews(inputReviews);
      setBusinessName(name);
      setCurrentAnalysis(result);
      saveToHistory(result, name, inputReviews.length);
      setActiveView('dashboard');
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('AI Analysis failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectHistory = (saved: SavedAnalysis) => {
    setCurrentAnalysis(saved.result);
    setBusinessName(saved.businessName);
    setActiveView('dashboard');
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, disabled: !currentAnalysis },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare, disabled: !currentAnalysis },
    { id: 'actions', label: 'AI Actions', icon: Lightbulb, disabled: !currentAnalysis },
    { id: 'history', label: 'History', icon: HistoryIcon, disabled: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-white border-r border-slate-200/60 flex flex-col fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-tr from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 rotate-3">
            <Search className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-600 hidden md:block tracking-tight">Revio</span>
        </div>

        <div className="px-3 mt-6 space-y-2 flex-1">
          <button
            onClick={() => setActiveView('upload')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeView === 'upload' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <PlusCircle className="w-5 h-5" />
            <span className="hidden md:block">Analyze New</span>
          </button>
          
          <div className="h-px bg-slate-100 my-4 mx-4" />

          {navItems.map((item) => (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => setActiveView(item.id as ViewType)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300 group ${
                activeView === item.id 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                  : item.disabled 
                    ? 'opacity-25 cursor-not-allowed' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-transform duration-300 ${activeView === item.id ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className="hidden md:block">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4">
          <div className="hidden md:flex items-center gap-3 p-3 bg-slate-50/50 border border-slate-100 rounded-2xl mb-4 group cursor-pointer hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600 font-bold text-sm ring-2 ring-white shadow-sm">JD</div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                Revio <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">Analytics</span>
              </h1>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-rose-500 transition-all duration-300 font-bold rounded-xl hover:bg-rose-50/50">
            <LogOut className="w-5 h-5" />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 md:ml-64 transition-all duration-300">
        <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-10 px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {activeView !== 'upload' && activeView !== 'history' && (
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase rounded-lg">LIVE</div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight">{businessName}</h2>
              </div>
            )}
            {activeView === 'upload' && <h2 className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-slate-900 to-slate-500">New Analysis</h2>}
            {activeView === 'history' && <h2 className="text-lg font-black text-slate-900 tracking-tight">Archive Explorer</h2>}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center bg-slate-100/50 border border-slate-200/60 rounded-xl px-4 py-2 w-64 focus-within:w-80 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white transition-all duration-500">
              <Search className="w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search reports..." className="bg-transparent border-none outline-none ml-2 text-sm w-full font-medium" />
            </div>
            
            <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-all duration-300 relative group">
              <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm animate-pulse"></span>
            </button>
            <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-all duration-300 group">
              <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </header>

        <div className="p-8 max-w-[1600px] mx-auto">
          {activeView === 'upload' && (
            <ReviewInput onAnalyze={handleAnalyze} isLoading={isLoading} />
          )}

          {activeView === 'dashboard' && currentAnalysis && (
            <Dashboard result={currentAnalysis} reviewCount={reviews.length || currentAnalysis.individualAnalysis.length} />
          )}

          {activeView === 'reviews' && currentAnalysis && (
            <ReviewList reviews={reviews} individualAnalysis={currentAnalysis.individualAnalysis} />
          )}

          {activeView === 'actions' && currentAnalysis && (
            <ActionCenter suggestions={currentAnalysis.actionSuggestions} />
          )}

          {activeView === 'history' && (
            <History history={history} onSelect={handleSelectHistory} />
          )}
        </div>
      </main>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="bg-white rounded-4xl p-12 text-center max-w-sm shadow-[0_32px_128px_rgba(0,0,0,0.18)] border border-slate-100/50 animate-in zoom-in-95 duration-500">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-slate-100 rounded-4xl"></div>
              <div className="absolute inset-0 border-4 border-indigo-600 rounded-4xl border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 m-auto w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center animate-pulse">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Analyzing Intelligence</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Synthesizing themes, emotional sentiment, and growth insights from your customer feedback. 
            </p>
            <div className="mt-8 flex justify-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

