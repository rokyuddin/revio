
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
  Search,
  Home,
  FileText,
  Users,
  BarChart3
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
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-white border-r border-slate-200/60 flex flex-col fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.04)] transition-all duration-300">
        <div className="p-6 flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Search className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent hidden md:block tracking-tight">Revio</span>
        </div>

        <div className="px-3 mt-6 space-y-2 flex-1">
          <button
            onClick={() => setActiveView('upload')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeView === 'upload' ? 'bg-indigo-50 text-indigo-600 shadow-[0_4px_16px_rgba(99,102,241,0.15)]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <PlusCircle className="w-5 h-5" />
            <span className="hidden md:block">New Analysis</span>
          </button>
          
          <div className="h-px bg-slate-100 my-4 mx-4" />

          {navItems.map((item) => (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => setActiveView(item.id as ViewType)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300 group ${
                activeView === item.id
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_8px_24px_rgba(99,102,241,0.3)]'
                  : item.disabled
                    ? 'opacity-40 cursor-not-allowed'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-all duration-300 ${activeView === item.id ? 'scale-110 drop-shadow-lg' : 'group-hover:scale-110'}`} />
              <span className="hidden md:block">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100">
          <div className="hidden md:flex items-center gap-4 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl mb-4 group cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600 font-bold text-sm ring-2 ring-white shadow-sm">R</div>
            <div className="flex-1">
              <h1 className="text-lg font-black text-slate-900 tracking-tight leading-none">
                Revio Analytics
              </h1>
              <p className="text-xs text-slate-600 font-medium mt-1">Customer Intelligence Platform</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-rose-500 hover:bg-rose-50/50 transition-all duration-300 font-bold rounded-xl">
            <LogOut className="w-5 h-5" />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 md:ml-64 transition-all duration-300">
        <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-10 px-8 flex items-center justify-between shadow-[0_1px_0_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-6">
            {activeView !== 'upload' && activeView !== 'history' && (
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-black uppercase rounded-full shadow-lg shadow-emerald-500/20">
                  Live Analysis
                </div>
                <div className="h-px w-8 bg-gradient-to-r from-slate-200 to-transparent"></div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">{businessName}</h2>
              </div>
            )}
            {activeView === 'upload' && (
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full animate-pulse"></div>
                <h2 className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">New Analysis</h2>
              </div>
            )}
            {activeView === 'history' && (
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Archive Explorer</h2>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center bg-white border border-slate-200 rounded-xl px-4 py-2.5 w-64 focus-within:w-80 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all duration-300 shadow-sm">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search reports..."
                className="bg-transparent border-none outline-none ml-2 text-sm w-full font-medium text-slate-600 placeholder-slate-400"
              />
            </div>
            
            <button className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-all duration-300 relative group hover:shadow-sm">
              <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm animate-pulse"></span>
            </button>
            <button className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-all duration-300 group hover:shadow-sm">
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
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900/60 to-indigo-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="bg-white rounded-3xl p-10 text-center max-w-sm shadow-[0_32px_128px_rgba(0,0,0,0.25)] border border-slate-100/50 animate-in zoom-in-95 duration-500">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-slate-100 rounded-2xl"></div>
              <div className="absolute inset-0 border-4 border-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 m-auto w-8 h-8 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl flex items-center justify-center animate-pulse">
                <Sparkles className="w-5 h-5 text-gradient-to-r from-indigo-600 to-violet-600" />
              </div>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Processing Intelligence</h3>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Analyzing customer feedback and generating insights
            </p>
            <div className="mt-6 flex justify-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

