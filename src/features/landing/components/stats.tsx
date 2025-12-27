import React from 'react'

export default function Stats() {
  return (
      <section className="py-12 border-b border-slate-800/40 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-slate-400">
            <div>
              <p className="text-white text-3xl font-bold mb-1">98%</p>
              <p className="text-xs uppercase tracking-widest font-semibold">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-white text-3xl font-bold mb-1">0.5s</p>
              <p className="text-xs uppercase tracking-widest font-semibold">Latancy via Groq</p>
            </div>
            <div>
              <p className="text-white text-3xl font-bold mb-1">10k+</p>
              <p className="text-xs uppercase tracking-widest font-semibold">Reviews Analyzed</p>
            </div>
            <div>
              <p className="text-white text-3xl font-bold mb-1">24/7</p>
              <p className="text-xs uppercase tracking-widest font-semibold">Monitoring</p>
            </div>
          </div>
        </div>
      </section>
  )
}
