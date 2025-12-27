import { Link } from '@tanstack/react-router'

export default function Cta() {
  return (
     <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-cyan-600 to-blue-700 rounded-3xl p-12 text-center shadow-2xl shadow-cyan-500/20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to decode your feedback?</h2>
          <p className="text-cyan-100 text-lg mb-10 max-w-xl mx-auto">Join hundreds of businesses using Revio to turn noise into signal.</p>
          <Link
            to="/dashboard"
            className="inline-flex px-10 py-4 bg-white text-cyan-700 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-xl"
          >
            Start Analyzing for Free
          </Link>
        </div>
      </section>
  )
}
