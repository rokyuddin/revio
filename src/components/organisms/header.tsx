import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Home,
  Menu,
  X,
  LayoutDashboard,
  Sparkles
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ]

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 text-white shadow-lg px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm">R</div>
            <span className="text-xl font-bold tracking-tight">Revio</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-slate-400 hover:text-white font-medium transition-colors"
              activeProps={{ className: 'text-cyan-400' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/dashboard"
            className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-600/20 transition-all flex items-center gap-2"
          >
            <Sparkles size={16} />
            Launch App
          </Link>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-slate-950 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm">R</div>
            <span className="text-xl font-bold">Revio</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-slate-900 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-all mb-1"
              activeProps={{
                className: 'flex items-center gap-3 p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shadow-sm transition-all mb-1',
              }}
            >
              <item.icon size={20} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Spacer to prevent content overlap */}
      <div className="h-[72px]" />
    </>
  )
}
