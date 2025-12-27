
import React from 'react';
import { Lightbulb, Megaphone, ExternalLink, ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react';
import { ActionSuggestions } from '../types';

interface ActionCenterProps {
  suggestions: ActionSuggestions;
}

const ActionCenter: React.FC<ActionCenterProps> = ({ suggestions }) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="bg-linear-to-br from-indigo-700 via-violet-800 to-indigo-900 rounded-4xl p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 mb-6">
            <Zap className="w-3 h-3 fill-white" />
            AI-Driven Strategy
          </div>
          <h2 className="text-4xl font-black mb-4 tracking-tight leading-tight">Actionable Intelligence <br />Plan</h2>
          <p className="text-indigo-100 text-lg max-w-2xl font-medium leading-relaxed opacity-90">
            We've synthesized thousands of customer signals into specific, 
            high-impact moves to accelerate your brand's growth.
          </p>
        </div>
        <Lightbulb className="absolute right-[-40px] bottom-[-40px] w-80 h-80 text-white/5 rotate-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: 'Product Evolution', 
            items: suggestions.improvements, 
            icon: <Target className="w-5 h-5" />, 
            color: 'indigo',
            desc: 'Technical & UX Refinements'
          },
          { 
            title: 'Marketing Edge', 
            items: suggestions.marketing, 
            icon: <Megaphone className="w-5 h-5" />, 
            color: 'emerald',
            desc: 'Growth & Branding Moves'
          },
          { 
            title: 'Support Shield', 
            items: suggestions.support, 
            icon: <ShieldCheck className="w-5 h-5" />, 
            color: 'rose',
            desc: 'Trust & Relation Management'
          }
        ].map((section, idx) => (
          <div key={idx} className="space-y-8 group">
            <div className="flex items-center gap-4 ml-2">
              <div className={`w-12 h-12 bg-${section.color}-50 text-${section.color}-600 rounded-[1.25rem] flex items-center justify-center border border-${section.color}-100 shadow-sm transition-transform group-hover:rotate-6`}>
                {section.icon}
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">{section.title}</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{section.desc}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-4xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 group/item">
                  <p className="text-slate-700 text-[13px] font-bold leading-relaxed mb-6">{item}</p>
                  <div className={`flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-${section.color}-600 group-hover/item:translate-x-1 transition-transform cursor-pointer`}>
                    <span className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${section.color}-500`}></div>
                      Deploy Strategic Move
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-slate-900 rounded-4xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900 to-indigo-900 opacity-50"></div>
        <div className="text-white relative z-10 text-center lg:text-left">
          <h4 className="text-2xl font-black mb-2 tracking-tight">Full Intelligence Export</h4>
          <p className="text-slate-400 font-medium max-w-md">Download a high-fidelity PDF report of this analysis for your executive stakeholders.</p>
        </div>
        <button className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-50 hover:shadow-xl transition-all active:scale-95 relative z-10 shrink-0">
          <div className="bg-slate-900 p-1 rounded-md">
            <ExternalLink className="w-3 h-3 text-white" />
          </div>
          Download Full Report
        </button>
      </div>
    </div>
  );
};

export default ActionCenter;
