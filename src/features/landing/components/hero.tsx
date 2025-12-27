import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
     <section className="relative py-24 px-6 text-center overflow-hidden border-b border-slate-800/40">
        <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 via-transparent to-transparent"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-3xl shadow-xl shadow-cyan-500/20">R</div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Revio
            </h1>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Turn Customer Feedback into <br />
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
              Competitive Advantage
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Revio uses Llama 3.1 & Groq to analyze thousands of reviews in seconds, 
            extracting the insights you need to grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              to="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-2xl transition-all border border-slate-800">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
  )
}
